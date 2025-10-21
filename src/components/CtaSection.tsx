import React from 'react';
import { Button } from "@/components/ui/button";
import { realData } from "@/lib/realData";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full my-8 sm:my-10 relative flex justify-center px-2"
        >
            {/* Gradient Glow Background */}
            <div className="absolute inset-0 z-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[#11120e]" />
                <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[95%] sm:w-[80%] h-32 xs:h-40 sm:h-64 md:h-72 lg:h-80 rounded-b-2xl sm:rounded-b-3xl"
                    style={{
                        background: "radial-gradient(ellipse at center bottom, #b4ec51 0%, #429321 40%, transparent 80%)",
                        opacity: 0.45,
                        filter: "blur(8px)"
                    }}
                />
            </div>
            {/* Content */}
            <div className="relative z-10 w-full max-w-3xl max-sm:w-full rounded-2xl sm:rounded-3xl px-3 xs:px-4 py-10 xs:py-14 sm:py-20 text-center">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 break-words">
                    {realData.additional_sections.title}
                </h2>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-7 sm:mt-8 w-full">
                    <Link href='https://cal.com/anshumon/30min' className="w-full sm:w-auto">
                        <Button
                            variant="secondary"
                            className="w-full sm:w-auto bg-white/20 hover:bg-white/30 whitespace-break-spaces max-sm:text-xs text-white rounded-full px-4 xs:px-6 sm:px-8 py-2 h-11 xs:h-12 text-base xs:text-lg sm:text-sm font-medium cursor-pointer transition-all"
                        >
                            {realData.additional_sections.cta}
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}