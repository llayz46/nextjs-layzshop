import {createPortal} from "react-dom";
import Link from "next/link";
import {Button} from "@/src/components/Button";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react"
import {useModal} from "@/src/contexts/ModalContext";

export function ModalHeader() {
    const [mounted, setMounted] = useState(false);
    const { isOpen, closeModal } = useModal();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen &&
                <motion.div
                    key="backdrop"
                    className="fixed inset-0 z-50 bg-black/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => closeModal()}
                />
            }

            {isOpen && <motion.div
                className="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-xl border border-neutral-200 bg-background before:absolute before:w-full before:h-full before:bg-background before:bottom-0 before:translate-y-full"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                drag="y"
                dragElastic={0.2}
                dragConstraints={{top: 0}}
                onDragEnd={(e, info) => {
                    if (info.offset.y > 100) {
                        closeModal();
                    }
                }}
            >
                <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-neutral-200 cursor-grab"></div>

                <div className="grid gap-1.5 p-4 text-center sm:text-left px-6">
                    <Link href="/" className="flex gap-2.5 items-center">
                        <svg className="size-8" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34315 24 0 22.6569 0 21V3ZM15.1858 4.6875H12.6497C12.3578 4.6875 12.088 4.8419 11.9425 5.09198L3.56186 19.4837H6.10368C6.39224 19.4837 6.65886 19.3318 6.80274 19.0841L15.1858 4.6875ZM19.4452 19.4837H11.3547H8.81293L17.1935 5.09198C17.339 4.8419 17.6089 4.6875 17.9007 4.6875H20.4369L13.2544 17.0223L19.4468 17.0681C19.6524 17.0697 19.8191 17.2354 19.8191 17.4396V19.1138C19.8191 19.3181 19.6516 19.4837 19.4452 19.4837Z" fill="#18181B"/>
                        </svg>
                        <span className="font-dm-sans text-xl font-medium text-zinc-800">LayzShop</span>
                    </Link>

                    <nav>
                        <ul className="mt-7 text-left text-zinc-800 font-medium">
                            <li className="my-3">Nouveautés</li>
                            <li className="my-3">Tendances</li>
                            <li className="my-3">Catégories</li>
                            <li className="my-3">Promotions</li>
                        </ul>
                    </nav>
                </div>

                <div className="mt-auto flex flex-col gap-2 p-4">
                    <Button size="lg">Connexion</Button>
                    <Button size="lg" variant="secondary">S&#39;inscrire gratuitement</Button>
                </div>
            </motion.div>}
        </AnimatePresence>, document.body
    )
}