"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

interface PricingCardsProps {
    billingCycle: "monthly" | "yearly"
}

export default function PricingCards({ billingCycle }: PricingCardsProps) {
    const pricingData = {
        monthly: {
            basic: { price: 2199, label: "/monthly" },
            pro: { price: 10999, label: "/monthly" },
            enterprise: { price: "Custom", label: "" },
        },
        yearly: {
            basic: { price: 1999, label: "/yearly" },
            pro: { price: 9999, label: "/yearly" },
            enterprise: { price: "Custom", label: "" },
        },
    };
    const data = pricingData[billingCycle];
    return (
        <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-0">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative"
            >
                {/* Basic Plan */}
                <div className="relative bg-white !text-black rounded-2xl p-5 xs:p-6 sm:p-7 md:p-8 shadow-md border border-gray-200 flex flex-col h-full transition-all
                    md:scale-95 md:translate-y-4
                    ">
                    <div className="mb-5 sm:mb-6">
                        <p className="text-gray-600 mb-1 text-sm sm:text-base">For individuals</p>
                        <h3 className="text-xl sm:text-2xl font-bold">Basic</h3>
                    </div>

                    <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Perfect for individuals and small projects.</p>

                    <div className="mb-6 sm:mb-8 flex items-end">
                        <span className="text-4xl sm:text-5xl font-bold">{typeof data.basic.price === 'number' ? `$${data.basic.price}` : data.basic.price}</span>
                        <span className="text-gray-500 ml-2 text-base sm:text-lg">{data.basic.label}</span>
                    </div>

                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        <h4 className="font-medium text-base sm:text-lg">What&apos;s included</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                                <span className="text-sm sm:text-base">AI based analytics features</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Up to 100,000 records</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Normal support</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Up to 3 team members</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto space-y-3 sm:space-y-4">
                        <Button className="w-full bg-[#1a1a1a] hover:bg-black text-white cursor-pointer text-base sm:text-lg py-2 sm:py-3">Get Started</Button>
                        <div className="text-center">
                            <a href="#" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

                {/* Pro Plan */}
                <div className="relative rounded-2xl p-5 xs:p-6 sm:p-7 md:p-8 shadow-xl border border-gray-700 flex flex-col h-full z-10 transition-all overflow-hidden
                    scale-100 md:scale-105
                    ">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4a4a4a] via-[#3c3c3c] to-[#1a1a1a] z-0 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),transparent_70%)] z-0 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.05),transparent_60%)] z-0 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-75 animate-shimmer-slow z-0 rounded-2xl"></div>

                    <div className="absolute right-4 top-4 sm:right-8 sm:top-8 z-10">
                        <span className="bg-gray-500/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                            Popular
                        </span>
                    </div>

                    <div className="mb-5 sm:mb-6 relative z-10">
                        <p className="text-gray-300 mb-1 text-sm sm:text-base">For startups</p>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Pro</h3>
                    </div>

                    <p className="text-gray-300 mb-6 sm:mb-8 relative z-10 text-sm sm:text-base">
                        Unlock enhanced AI capabilities, priority support, and weekly updates.
                    </p>

                    <div className="mb-6 sm:mb-8 relative z-10 flex items-end">
                        <span className="text-4xl sm:text-5xl font-bold text-white">{typeof data.pro.price === 'number' ? `$${data.pro.price}` : data.pro.price}</span>
                        <span className="text-gray-300 ml-2 text-base sm:text-lg">{data.pro.label}</span>
                    </div>

                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 relative z-10">
                        <h4 className="font-medium text-white text-base sm:text-lg">What&apos;s included</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li className="flex items-start text-gray-200">
                                <div className="bg-white/10 rounded-full p-0.5 mr-2 flex-shrink-0">
                                    <Check className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-sm sm:text-base">AI based analytics features</span>
                            </li>
                            <li className="flex items-start text-gray-200">
                                <div className="bg-white/10 rounded-full p-0.5 mr-2 flex-shrink-0">
                                    <Check className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-sm sm:text-base">Up to 1,000,000 records</span>
                            </li>
                            <li className="flex items-start text-gray-200">
                                <div className="bg-white/10 rounded-full p-0.5 mr-2 flex-shrink-0">
                                    <Check className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-sm sm:text-base">Premium support</span>
                            </li>
                            <li className="flex items-start text-gray-200">
                                <div className="bg-white/10 rounded-full p-0.5 mr-2 flex-shrink-0">
                                    <Check className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-sm sm:text-base">Up to 10 team members</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto relative z-10">
                        <Button className="w-full bg-white cursor-pointer hover:scale-105 transition-all hover:bg-gray-100 text-black relative overflow-hidden group text-base sm:text-lg py-2 sm:py-3">
                            {/* Mirror-like silver shine animation overlay */}
                            <span
                                aria-hidden
                                className="pointer-events-none absolute inset-0 z-10"
                            >
                                <span
                                    className="block absolute -left-1/3 -top-1/3 w-2/3 h-[180%] animate-shine"
                                    style={{
                                        background:
                                            "linear-gradient(120deg, rgba(192,192,192,0.0) 0%, rgba(224,224,224,0.7) 40%, rgba(255,255,255,0.95) 50%, rgba(192,192,192,0.0) 60%)",
                                        filter: "blur(2px)",
                                    }}
                                />
                            </span>
                            <span className="relative flex items-center z-20">
                                Get Started
                            </span>
                            <style jsx global>{`
                            @keyframes shine {
                              0% {
                                transform: translateX(-100%) rotate(12deg);
                                opacity: 0.2;
                              }
                              40% {
                                opacity: 0.7;
                              }
                              60% {
                                opacity: 0.9;
                              }
                              100% {
                                transform: translateX(220%) rotate(12deg);
                                opacity: 0.2;
                              }
                            }
                            .animate-shine {
                              animation: shine 2.2s cubic-bezier(0.4,0,0.2,1) infinite;
                            }
                          `}</style>
                        </Button>
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className="relative bg-white text-black rounded-2xl p-5 xs:p-6 sm:p-7 md:p-8 shadow-md border border-gray-200 flex flex-col h-full transition-all
                    md:scale-95 md:translate-y-4
                    ">
                    <div className="mb-5 sm:mb-6">
                        <p className="text-gray-600 mb-1 text-sm sm:text-base">For big companies</p>
                        <h3 className="text-xl sm:text-2xl font-bold">Enterprise</h3>
                    </div>

                    <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Access the full suite of AI features, 24/7 dedicated support.</p>

                    <div className="mb-6 sm:mb-8 flex items-end">
                        <span className="text-4xl sm:text-5xl font-bold">{typeof data.enterprise.price === 'number' ? `$${data.enterprise.price}` : data.enterprise.price}</span>
                        <span className="text-gray-500 ml-2 text-base sm:text-lg">{data.enterprise.label}</span>
                    </div>

                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        <h4 className="font-medium text-base sm:text-lg">What&apos;s included</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                                <span className="text-sm sm:text-base">AI based analytics features</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Up to 100,000,000 records</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Dedicated support</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Up to 50 team members</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto space-y-3 sm:space-y-4">
                        <Button className="w-full bg-[#1a1a1a] hover:bg-black text-white cursor-pointer text-base sm:text-lg py-2 sm:py-3">Get Started</Button>
                        <div className="text-center">
                            <a href="#" className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
