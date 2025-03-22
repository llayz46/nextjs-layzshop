'use client'
import {AppLogo} from "@/src/components/AppLogo";
import {ShoppingBag} from "@/src/components/ShoppingBag";
import {Search} from "lucide-react";
import {Button} from "@/src/components/Button";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function AppHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="pt-8 pb-4">
            {isScrolled &&
                <div className="h-14"></div>
            }

            <motion.div
                initial={{
                    maxWidth: '1136px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    border: '1px solid transparent',
                }}
                animate={{
                    maxWidth: isScrolled ? '1024px' : '1136px',
                    width: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    border: isScrolled ? '1px solid var(--color-neutral-100)' : '1px solid transparent',
                    backgroundColor: isScrolled ? 'white' : '',
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`mx-8 flex justify-between p-2.5 rounded-xl border ${isScrolled ? 'fixed top-6 left-1/2 -translate-x-1/2 z-50 mx-auto shadow-md shadow-black/5' : 'relative z-50'}`}
            >
                <div className="flex items-center gap-6">
                    <div className="flex gap-2.5 items-center">
                        <AppLogo/>
                        <span className="font-dm-sans text-xl font-medium text-zinc-800">LayzShop</span>
                    </div>

                    <span className="h-5 w-px bg-neutral-300" role="separator"></span>

                    <nav>
                        <ul className="text-sm text-zinc-600 flex gap-2.5">
                            <li><a href="#">Nouveautés</a></li>
                            <li><a href="#">Tendances</a></li>
                            <li><a href="#">Catégories</a></li>
                            <li><a href="#">Promotions</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <button
                            className="bg-zinc-400 flex items-center gap-1 px-2 py-1 rounded-full text-zinc-50 font-medium text-xs text-nowrap">
                            <Search size="16"/>
                            Ctrl K
                        </button>

                        <ShoppingBag/>
                    </div>

                    <span className="h-5 w-px bg-neutral-300" role="separator"></span>

                    <div className="flex gap-2.5">
                        <Button>Connexion</Button>
                        <Button variant="secondary">Inscription</Button>
                    </div>
                </div>
            </motion.div>
        </header>
    )
}