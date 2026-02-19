
export interface RedditThread {
    subreddit: string;
    title: string;
    upvotes: number;
    comments: number;
    intent: 'High' | 'Medium' | 'Low';
    status: 'Rising' | 'Hot' | 'New';
}

export const MOCK_DATA: Record<string, RedditThread[]> = {
    "default": [
        {
            subreddit: "r/Entrepreneur",
            title: "How do I validate my SaaS idea before building?",
            upvotes: 342,
            comments: 89,
            intent: "High",
            status: "Hot"
        },
        {
            subreddit: "r/SaaS",
            title: "Best tools for organic growth in 2024?",
            upvotes: 156,
            comments: 42,
            intent: "High",
            status: "Rising"
        },
        {
            subreddit: "r/marketing",
            title: "Is Reddit ads worth it for B2B?",
            upvotes: 210,
            comments: 65,
            intent: "Medium",
            status: "Hot"
        }
    ],
    "marketing": [
        {
            subreddit: "r/marketing",
            title: "What's the best alternative to Facebook Ads right now?",
            upvotes: 892,
            comments: 145,
            intent: "High",
            status: "Hot"
        },
        {
            subreddit: "r/DigitalMarketing",
            title: "Has anyone tried organic Reddit marketing strategies?",
            upvotes: 450,
            comments: 78,
            intent: "High",
            status: "Rising"
        },
        {
            subreddit: "r/growthhacking",
            title: "My guide to getting first 100 users for free",
            upvotes: 1200,
            comments: 230,
            intent: "Medium",
            status: "Hot"
        }
    ],
    "crypto": [
        {
            subreddit: "r/CryptoCurrency",
            title: "Which new projects are you watching this month?",
            upvotes: 2400,
            comments: 890,
            intent: "Medium",
            status: "Hot"
        },
        {
            subreddit: "r/DeFi",
            title: "Looking for a secure wallet recommendation",
            upvotes: 450,
            comments: 120,
            intent: "High",
            status: "Rising"
        },
        {
            subreddit: "r/Bitcoin",
            title: "Lightning network adoption stats Q1",
            upvotes: 1500,
            comments: 340,
            intent: "Low",
            status: "Hot"
        }
    ],
    "fitness": [
        {
            subreddit: "r/Fitness",
            title: "Best workout app for tracking progressive overload?",
            upvotes: 670,
            comments: 120,
            intent: "High",
            status: "Hot"
        },
        {
            subreddit: "r/homegym",
            title: "Building a budget gym setup - recommendations needed",
            upvotes: 340,
            comments: 85,
            intent: "High",
            status: "Rising"
        },
        {
            subreddit: "r/nutrition",
            title: "Is creating a meal plan worth paying for?",
            upvotes: 210,
            comments: 95,
            intent: "Medium",
            status: "Hot"
        }
    ],
    "saas": [
        {
            subreddit: "r/SaaS",
            title: "How to get first 10 paying customers?",
            upvotes: 560,
            comments: 130,
            intent: "High",
            status: "Hot"
        },
        {
            subreddit: "r/startups",
            title: "Roast my landing page - honest feedback only",
            upvotes: 230,
            comments: 145,
            intent: "Medium",
            status: "Rising"
        },
        {
            subreddit: "r/webdev",
            title: "Best tech stack for a solo founder in 2025?",
            upvotes: 890,
            comments: 420,
            intent: "Medium",
            status: "Hot"
        }
    ]
};
