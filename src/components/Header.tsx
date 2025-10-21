'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { realData } from "@/lib/realData";

// Extend Window interface to include Scrollbar
declare global {
    interface Window {
        Scrollbar: any;
    }
}

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
                            className='hover:scale-105 transition-all'                            onClick={(e) => {
                                e.preventDefault();
                                let targetElement;
                                let targetSelector = '';
                                
                                if (item.toLowerCase() === 'features') {
                                    targetSelector = '.bento-grid-container';
                                } else if (item.toLowerCase() === 'integrations') {
                                    // Specifically target the product details section
                                    targetSelector = '.product-details-section';
                                } else if (item.toLowerCase() === 'pricing') {
                                    targetSelector = '.pricing-section';
                                }
                                
                                targetElement = document.querySelector(targetSelector);
                                
                                if (targetElement) {
                                    // Check if we're using smooth-scrollbar
                                    const scrollbar = document.querySelector('[data-scrollbar-initialized]');
                                    if (scrollbar && window.Scrollbar) {
                                        // Get the Scrollbar instance
                                        const scrollbarInstance = window.Scrollbar.get(scrollbar);
                                        if (scrollbarInstance) {
                                            // Get the offset position of the target element
                                            const offsetTop = targetElement.getBoundingClientRect().top + scrollbarInstance.offset.y;
                                            // Scroll to the target
                                            scrollbarInstance.scrollTo(0, offsetTop, 800);
                                        }
                                    } else {
                                        // Fallback to default scrolling
                                        targetElement.scrollIntoView({ behavior: 'smooth' });
                                    }
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