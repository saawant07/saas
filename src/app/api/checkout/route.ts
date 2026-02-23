import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-01-28.clover",
});

const PRICE_MAP: Record<string, string | undefined> = {
    starter: process.env.STRIPE_PRICE_STARTER,
    pro: process.env.STRIPE_PRICE_PRO,
    enterprise: process.env.STRIPE_PRICE_ENTERPRISE,
};

// Amount in cents for each plan (used when a product ID is provided instead of a price ID)
const PLAN_AMOUNTS: Record<string, number> = {
    starter: 2900,    // $29
    pro: 9900,        // $99
    enterprise: 29900, // $299
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { plan } = body as { plan: string };

        if (!plan || !PRICE_MAP[plan]) {
            return NextResponse.json(
                { error: "Invalid plan selected." },
                { status: 400 }
            );
        }

        const stripeId = PRICE_MAP[plan];

        if (!stripeId) {
            return NextResponse.json(
                { error: "This plan is not yet configured. Please contact support." },
                { status: 503 }
            );
        }

        // Determine if it's a Product ID or Price ID
        const isProductId = stripeId.startsWith("prod_");

        const lineItem = isProductId
            ? {
                price_data: {
                    currency: "usd",
                    product: stripeId,
                    recurring: { interval: "month" as const },
                    unit_amount: PLAN_AMOUNTS[plan],
                },
                quantity: 1,
            }
            : {
                price: stripeId,
                quantity: 1,
            };

        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [lineItem],
            success_url: `${req.nextUrl.origin}/?checkout=success`,
            cancel_url: `${req.nextUrl.origin}/?checkout=cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err: unknown) {
        console.error("Stripe checkout error:", err);
        const message =
            err instanceof Error ? err.message : "Internal server error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
