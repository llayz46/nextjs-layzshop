import { Slash } from 'lucide-react';
import Link from "next/link"

export function Breadcrumb() {
    return (
        <nav>
            <ul className="flex items-center gap-2 text-sm *:text-zinc-500 *:not-last:hover:text-zinc-700 *:last:text-zinc-800">
                <li><Link href="/">Accueil</Link></li>
                <Slash size={16} />
                <li>T-shirt</li>
                <Slash size={16} />
                <li>T-shirt simple</li>
            </ul>
        </nav>
    )
}