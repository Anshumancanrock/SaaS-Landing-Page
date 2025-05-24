import { realData } from "@/lib/realData";
import { Twitter, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-10 text-xs md:text-sm transition-colors duration-300 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left: Copyright */}
                <div className="flex-1 flex justify-center md:justify-start text-gray-500 dark:text-gray-400">
                    {realData.footer?.copyright?.[0]}
                </div>
                {/* Center: Navigation Links */}
                <div className="flex-1 flex justify-center gap-8">
                    {realData.footer.links.map((link, idx) => (
                        <a
                            key={idx}
                            href={`#${link.toLowerCase()}`}
                            className="text-gray-500 dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400 font-medium transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>
                {/* Right: Social Icons */}
                <div className="flex-1 flex justify-center md:justify-end gap-6">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter className="w-5 h-5 text-zinc-700 dark:text-zinc-200 hover:text-lime-500 dark:hover:text-lime-400 transition-colors" />
                    </a>
                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                        <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-200 hover:text-lime-500 dark:hover:text-lime-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M20.317 4.369A19.791 19.791 0 0016.885 3.1a.486.486 0 00-.522.243c-.228.397-.484.912-.661 1.32a18.726 18.726 0 00-5.404 0c-.177-.408-.433-.923-.661-1.32a.486.486 0 00-.522-.243c-1.432.36-2.814.877-4.112 1.269a.48.48 0 00-.312.276C2.533 9.042 1.78 13.58 2.13 18.057a.48.48 0 00.18.338c1.732 1.27 3.415 2.03 5.077 2.53a.485.485 0 00.527-.176c.392-.54.74-1.11 1.04-1.7a.486.486 0 00-.27-.67c-.293-.11-.573-.24-.847-.38a.486.486 0 01-.23-.65c.06-.12.12-.24.18-.36a.486.486 0 01.64-.22c1.74.8 3.62.8 5.36 0a.486.486 0 01.64.22c.06.12.12.24.18.36a.486.486 0 01-.23.65c-.274.14-.554.27-.847.38a.486.486 0 00-.27.67c.3.59.648 1.16 1.04 1.7a.485.485 0 00.527.176c1.662-.5 3.345-1.26 5.077-2.53a.48.48 0 00.18-.338c.36-4.477-.403-9.015-2.05-13.412a.48.48 0 00-.312-.276zM8.02 15.331c-.789 0-1.438-.72-1.438-1.606 0-.887.637-1.606 1.438-1.606.807 0 1.45.726 1.438 1.606 0 .886-.637 1.606-1.438 1.606zm7.96 0c-.789 0-1.438-.72-1.438-1.606 0-.887.637-1.606 1.438-1.606.807 0 1.45.726 1.438 1.606 0 .886-.637 1.606-1.438 1.606z" />
                        </svg>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="w-5 h-5 text-zinc-700 dark:text-zinc-200 hover:text-lime-500 dark:hover:text-lime-400 transition-colors" />
                    </a>
                </div>
            </div>
        </footer>
    );
}