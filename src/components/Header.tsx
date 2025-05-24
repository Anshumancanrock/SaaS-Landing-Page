'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { realData } from "@/lib/realData";

export default function Navbar() {
    const { setTheme, resolvedTheme } = useTheme();
    return (
        <header className='flex w-full justify-center pt-4'>
            <nav className="flex items-center justify-between px-6 rounded-full py-2 w-[75vw] max-sm:w-full">
                <div className="flex items-center">
                    <span className="text-2xl font-bold uppercase tracking-tight">
                        {realData.footer.logo_text}
                    </span>
                </div>                <div className="hidden md:flex items-center space-x-16">
                    {realData.navigation.map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            className='hover:scale-105 transition-all'
                            onClick={(e) => {
                                e.preventDefault();
                                let targetElement;
                                if (item.toLowerCase() === 'features') {
                                    targetElement = document.querySelector('.bento-grid-container');
                                } else if (item.toLowerCase() === 'integrations') {
                                    // Specifically target the heading for AI Based Pricing strategy
                                    targetElement = document.querySelector('.product-details-section h2');
                                } else if (item.toLowerCase() === 'pricing') {
                                    targetElement = document.querySelector('.pricing-section');
                                }
                                if (targetElement) {
                                    targetElement.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </div>
                <Button
                    className="bg-lime-400 hover:bg-lime-500 text-black rounded-full px-6 max-sm:py-2 max-sm:px-4"
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    aria-label="Toggle theme"
                >
                    {resolvedTheme === 'dark' ? (
                        <SunIcon className='w-4 h-4 max-sm:w-3 max-sm:h-3' />
                    ) : (
                        <MoonIcon className='w-4 h-4 max-sm:w-3 max-sm:h-3' />
                    )}
                </Button>
            </nav>
        </header>
    );
};