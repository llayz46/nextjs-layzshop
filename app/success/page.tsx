import {Button} from "@/src/components/Button";
import { Check } from 'lucide-react';

export default function Page() {
    return (
        <section className="space-y-6">
            <span className="mx-auto size-16 border-2 border-green-500 rounded-full flex justify-center items-center">
                <Check size={24} className="text-green-500" />
            </span>

            <div className="flex flex-col gap-3 items-center">
                <h1 className="font-dm-sans font-semibold text-zinc-800 text-2xl">Merci pour votre achat !</h1>
                <p className="text-zinc-600 text-sm max-w-100 text-center">Votre commande est confirmée et en cours de traitement. Nous vous tiendrons informé(e) dès son expédition.</p>
            </div>

            <div className="grid grid-cols-2 gap-5 *:w-fit">
                <Button className="place-self-end" variant="primary">Recevoir ma facture</Button>
                <Button variant="secondary">Continuer mes achats</Button>
            </div>
        </section>
    )
}