'use client';

import { realData } from "@/lib/realData";
import { motion } from 'framer-motion';

const WhyChooseSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-6xl mx-auto px-4 py-16 dark:text-white"
        >
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-medium mb-4">
                    Why Choose <span className="text-lime-400">{realData.footer.logo_text}</span>?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-center text-sm md:text-base">
                    Discover why our pricing intelligence platform stands out in the market.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
                <div className="space-y-6">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <h3 className="text-2xl font-medium text-center text-lime-400">{realData.footer.logo_text}</h3>
                    </div>
                    <div className="relative rounded-2xl border bg-black/70 border-lime-300/15 bg-gradient-to-br from-black/60 via-neutral-900/70 to-black/80 shadow-xl shadow-lime-900/10 backdrop-blur-md p-6 flex flex-col overflow-hidden group transition-shadow duration-300 hover:shadow-2xl space-y-3">
                        {realData.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span className="text-green-400 flex-shrink-0">✔</span>
                                <p className="text-gray-200">{feature.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <h3 className="text-2xl font-medium text-center dark:text-white">Market Problems</h3>
                    </div>
                    <div className="relative rounded-2xl border bg-black/70 border-lime-300/15 bg-gradient-to-br from-black/60 via-neutral-900/70 to-black/80 shadow-xl shadow-lime-900/10 backdrop-blur-md p-6 flex flex-col overflow-hidden group transition-shadow duration-300 hover:shadow-2xl space-y-3">
                        <div className="flex items-center gap-3"><span className="text-red-400">✖</span><p className="text-gray-400">Manual price tracking is slow and error-prone</p></div>
                        <div className="flex items-center gap-3"><span className="text-red-400">✖</span><p className="text-gray-400">Competitor moves are missed in real time</p></div>
                        <div className="flex items-center gap-3"><span className="text-red-400">✖</span><p className="text-gray-400">No sandbox to test pricing strategies safely</p></div>
                        <div className="flex items-center gap-3"><span className="text-red-400">✖</span><p className="text-gray-400">Lack of automation for dynamic pricing</p></div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default WhyChooseSection;