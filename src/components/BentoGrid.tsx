'use client';

import { useState } from 'react';
import { ArrowUpRight, Lightbulb } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

interface BentoCardProps {
    title: string;
    description: string;
    className?: string;
    children?: React.ReactNode;
    gradientPosition?: string;
}

const BentoCard = ({ title, description, className = "", children, gradientPosition = "center" }: BentoCardProps) => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
    return (
        <div
            className={`
                relative rounded-2xl border border-lime-300/15
                ${isDark ? 'bg-gradient-to-br from-black/60 via-neutral-900/70 to-black/80 shadow-xl shadow-lime-900/10 backdrop-blur-md' : 'relative rounded-2xl border border-lime-300/15 bg-gradient-to-br from-black/60 via-neutral-900/70 to-black/80 shadow-xl shadow-lime-900/10 backdrop-blur-md p-6 flex flex-col overflow-hidden group transition-all duration-300'}
                p-6 flex flex-col overflow-hidden group
                transition-all duration-300
                hover:scale-[1.035] hover:-translate-y-1
                ${isDark ? 'hover:shadow-2xl hover:shadow-lime-300/30' : 'hover:shadow-lg'}
                ${className}
            `}
            style={{
                cursor: "pointer",
            }}
        >
            {isDark && (
                <>
                    <div
                        className={`
                            pointer-events-none absolute inset-0 z-0
                            transition-all duration-500
                            group-hover:opacity-90 group-hover:scale-105
                            group-hover:shadow-[0_0_40px_10px_rgba(180,236,81,0.25)]
                            group-hover:border-lime-300/60
                        `}
                        style={{
                            background: `radial-gradient(circle at ${gradientPosition}, rgba(180,236,81,0.20) 0%, rgba(66,147,33,0.30) 40%, transparent 75%)`,
                            opacity: 0.7,
                            borderRadius: "inherit",
                        }}
                    />
                    <div
                        className={`
                            pointer-events-none absolute inset-0 z-10
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                        `}
                        style={{
                            boxShadow: "0 0 32px 0 rgba(180,236,81,0.18), 0 4px 32px 0 rgba(66,147,33,0.10)",
                            borderRadius: "inherit",
                        }}
                    />
                    <div
                        className={`
                            pointer-events-none absolute inset-0 z-20
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                        `}
                        style={{
                            boxShadow: "0 8px 40px 8px rgba(180,236,81,0.18), 0 2px 24px 0 rgba(66,147,33,0.15)",
                            borderRadius: "inherit",
                        }}
                    />
                </>
            )}
            <div className="relative z-30">
                <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                <p className="text-gray-300 mb-4">{description}</p>
                {children}
            </div>
            <style jsx>{`
                @keyframes bento-shine {
                    0% {
                        transform: translateX(-60%) skewX(-12deg);
                        opacity: 0.1;
                    }
                    40% {
                        opacity: 0.5;
                    }
                    60% {
                        opacity: 0.7;
                    }
                    100% {
                        transform: translateX(60%) skewX(-12deg);
                        opacity: 0.1;
                    }
                }
                .group-hover\\:animate-bento-shine:hover {
                    animation: bento-shine 1.2s cubic-bezier(0.4,0,0.2,1);
                }
            `}</style>
        </div>
    );
};

export const BentoLayout = () => {
    const [tab, setTab] = useState<'skip' | 'read' | 'deep-dive'>('skip');

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-6xl mx-auto mt-16 px-4 py-12 bento-grid-container"
            id="features"
        >
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-medium mb-6">
                    <span className="dark:text-white">Monitor and Optimize Pricing</span>
                    <br />
                    <span className="text-lime-400 dark:text-lime-400"> at Any Scale</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BentoCard
                    title="Competitive Intelligence"
                    description="Track competitor prices across multiple channels in real time and get AI-driven recommendations to stay ahead in the market."
                    className="bg-black/70"
                    gradientPosition="left top"
                >
                    {(() => {
                        return (
                            <div className="mt-auto">
                                <div className="flex gap-4 mt-4">
                                    <button
                                        className={`rounded-full px-4 py-2 text-sm flex items-center ${tab === 'skip' ? 'bg-lime-400 text-black' : 'bg-black text-gray-300'} cursor-pointer`}
                                        onClick={() => setTab('skip')}
                                        type="button"
                                    >
                                        <span className="mr-2 h-3 w-3 rounded-full bg-current"></span>
                                        Track
                                    </button>
                                    <button
                                        className={`rounded-full px-4 py-2 text-sm flex items-center ${tab === 'read' ? 'bg-lime-400 text-black' : 'bg-black text-gray-300'} cursor-pointer`}
                                        onClick={() => setTab('read')}
                                        type="button"
                                    >
                                        <span className="mr-2 h-3 w-3 rounded-full bg-current"></span>
                                        AI
                                    </button>
                                </div>
                                <button
                                    className={`rounded-full px-4 py-2 text-sm flex items-center mt-4 ${tab === 'deep-dive' ? 'bg-lime-400 text-black' : 'bg-black text-gray-300'} cursor-pointer`}
                                    onClick={() => setTab('deep-dive')}
                                    type="button"
                                >
                                    <span className="mr-2 h-3 w-3 rounded-full bg-current"></span>
                                    Lead
                                </button>
                            </div>
                        );
                    })()}
                </BentoCard>

                <BentoCard
                    title="Pricing Simulations"
                    description="Run advanced pricing simulations in a risk-free sandbox to predict revenue impact and optimize strategies before going live."
                    gradientPosition="right top"
                    className="bg-black/70"
                >
                    <div className="bg-black/80 rounded-lg p-4 mt-4 border border-lime-500/20">
                        <div className="flex items-start">
                            <div className="bg-lime-400 text-black p-1 rounded mr-3">
                                <Lightbulb size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-lg">AI‑Powered Pricing</h3>
                                <ul className="text-gray-300 text-sm mt-2 list-disc list-inside space-y-1">
                                    <li>AI forecasts needs and proposes ideal rates based on patterns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard
                    title="Automated Dynamic Pricing"
                    description="Set intelligent pricing rules based on demand, seasonality, competition, and automate price updates seamlessly through API integrations."
                    gradientPosition="left bottom"
                    className="bg-black/70"
                >
                    <div className="flex items-center justify-between bg-black/80 rounded-lg border border-lime-500/20 mt-4 p-3">
                        <div className="text-gray-300 text-sm">Where can I access this tool?</div>
                        <button className="bg-lime-400 text-black rounded-full p-2 cursor-pointer">
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                </BentoCard>

                <BentoCard
                    title="Easy to Integrate"
                    description="Add two lines of code to your script and automatically start tracking code, hyperparameters, metrics, and more, so you can compare and reproduce training runs."
                    className="col-span-1 md:col-span-1 lg:col-span-2 bg-black/70"
                    gradientPosition="right bottom"
                >
                    <div className="mt-4">
                        <div className="bg-black/80 rounded-lg p-4 border border-lime-500/20 max-w-md">
                            <div className="flex items-start">
                                <div className="bg-lime-500/20 text-lime-400 p-1 rounded mr-3">
                                    <span className="font-mono">+</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Easy to Integrate</h3>
                                    <ul className="text-gray-300 text-sm mt-2 list-disc list-inside space-y-1">
                                        <li>Add two lines of code to your script and start tracking instantly</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard
                    title="Build your own visualizations"
                    description="Create custom dashboards to surface the metrics that matter most for your business."
                    gradientPosition="center"
                    className='bg-black/70'
                >
                </BentoCard>
            </div>
        </motion.div>
    );
};

export default BentoLayout;