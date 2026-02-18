"use client";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-transparent dark:bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
                        How HardCoded works
                    </h2>
                    <p className="text-lg text-brand-600 font-bold uppercase tracking-wide animate-fade-in-up [animation-delay:200ms]">
                        Simplicity at Scale
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-brand-200 dark:border-brand-900 -z-10"></div>
                    {[
                        {
                            step: "01",
                            title: "Integrate",
                            desc: "Securely connect your Reddit profile in seconds.",
                        },
                        {
                            step: "02",
                            title: "Analyze",
                            desc: "Uncover high-value threads with purchase intent.",
                        },
                        {
                            step: "03",
                            title: "Deploy",
                            desc: "Publish AI-optimized comments that add value.",
                        },
                        {
                            step: "04",
                            title: "Optimize",
                            desc: "Monitor rankings and refine your strategy.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 border-4 border-brand-100 dark:border-brand-900 flex items-center justify-center text-2xl font-bold shadow-lg mb-6 group-hover:border-brand-500 group-hover:scale-110 transition-all duration-300 z-10 relative overflow-hidden">
                                <span className="text-brand-600 group-hover:text-brand-700">{item.step}</span>
                                <div className="absolute inset-0 bg-brand-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm max-w-[200px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
