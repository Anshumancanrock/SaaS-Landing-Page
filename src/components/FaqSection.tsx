// components/FaqSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface FaqItem {
    question: string;
    answer: string;
}

const faqItems: FaqItem[] = [
    {
        question: "What is AI‑Powered Pricing Intelligence?",
        answer: "It's a platform that uses artificial intelligence to track competitors, simulate pricing strategies, predict demand, and automate profitable decisions—all in one place."
    },
    {
        question: "How does competitor price tracking work?",
        answer: "Our platform monitors competitor prices across multiple channels in real time, providing you with actionable insights and AI-driven recommendations to stay ahead in the market."
    },
    {
        question: "Can I test pricing strategies before going live?",
        answer: "Yes! You can run advanced pricing simulations in a risk-free sandbox to predict revenue impact and optimize your strategies before making changes public."
    },
    {
        question: "What integrations are available?",
        answer: "We support seamless integrations with major marketplaces and tools like Amazon, Flipkart, Shopify, and more, so you can automate price updates and workflows easily."
    },
    {
        question: "How does automated dynamic pricing work?",
        answer: "You can set intelligent pricing rules based on demand, seasonality, and competition. The platform automates price updates through API integrations, saving you time and maximizing profit."
    },
    {
        question: "Is this platform suitable for teams of all sizes?",
        answer: "Absolutely! Our flexible plans and custom dashboards provide value for individuals, small teams, and large enterprises alike."
    },
    {
        question: "How does AI help predict demand and revenue?",
        answer: "Our AI models forecast how price changes will affect sales volume and revenue, helping you plan and make data-driven decisions with confidence."
    },
];

const FaqSection = () => {
    const [openItem, setOpenItem] = useState<number | null>(null); // No item open by default
    const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);

    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleItem = (index: number) => {
        setAnimatingIndex(index);
        setOpenItem(openItem === index ? null : index);
    };

    useEffect(() => {
        if (animatingIndex !== null) {
            const timeout = setTimeout(() => {
                setAnimatingIndex(null);
            }, 400); // match transition duration
            return () => clearTimeout(timeout);
        }
    }, [animatingIndex]);

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-6xl mx-auto px-4 py-16 dark:text-white"
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-medium mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-center">
                    Everything you need to know about our AI-powered pricing platform.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqItems.map((item, index) => {
                    const isOpen = openItem === index;
                    return (
                        <div
                            key={index}
                            className={`rounded-xl overflow-hidden transition-colors duration-300 ${isOpen
                                ? 'dark:bg-neutral-900 bg-black/80 border border-neutral-800'
                                : 'dark:bg-neutral-900/80 bg-black/80 border border-neutral-800/50 hover:border-neutral-800'
                                }`}

                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                            >
                                <span className="text-gray-200 font-medium">{item.question}</span>
                                {isOpen ? (
                                    <X className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            <div
                                ref={el => { contentRefs.current[index] = el; }}
                                style={{
                                    maxHeight: isOpen
                                        ? contentRefs.current[index]?.scrollHeight + 'px'
                                        : '0px',
                                    opacity: isOpen ? 1 : 0,
                                    transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
                                    overflow: 'hidden',
                                }}
                            >
                                <div className={`p-5 pt-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-2'}`}
                                    style={{
                                        pointerEvents: isOpen ? 'auto' : 'none',
                                    }}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default FaqSection;