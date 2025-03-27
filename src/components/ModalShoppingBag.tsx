import {createPortal} from "react-dom";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react"
import {useShoppingBag} from "@/src/contexts/ShoppingBagContext";
import { X } from "lucide-react";
import {Button} from "@/src/components/Button";

export function ModalShoppingBag() {
    const [mounted, setMounted] = useState(false);
    const { isShoppingBagOpen, closeShoppingBag } = useShoppingBag();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isShoppingBagOpen &&
                <motion.div
                    key="backdrop"
                    className="fixed inset-0 z-50 bg-black/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => closeShoppingBag()}
                />
            }

            {isShoppingBagOpen && <motion.div
                key="shopping-cart"
                className="fixed z-50 w-112 h-screen bg-background top-0 right-0"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ ease: "easeInOut", duration: 0.25 }}>
                <div className="p-6 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <h3 className="font-dm-sans text-zinc-800 text-lg font-medium">Panier</h3>

                        <button onClick={() => closeShoppingBag()}>
                            <X className="text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer" />
                        </button>
                    </div>

                    <div>
                        <div className="flex justify-between items-center font-dm-sans text-zinc-800 text-lg">
                            <h3 className="font-medium">Sous-total</h3>

                            <span className="font-semibold">325 €</span>
                        </div>

                        <p className="mt-0.5 text-sm text-zinc-500">Lorem ipsum dolor sit amet, consercutur adipisicing.</p>

                        <div className="mt-6 flex gap-4">
                            <Button className="w-full" size="lg">Continuer vos achats</Button>
                            <Button className="w-full" variant="secondary" size="lg">Payer maintenant</Button>
                        </div>
                    </div>
                </div>
            </motion.div>}
        </AnimatePresence>, document.body
    )
}