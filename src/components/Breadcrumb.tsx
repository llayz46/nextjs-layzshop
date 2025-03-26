import { Slash } from 'lucide-react';

export function Breadcrumb() {
    return (
        <nav>
            <ul className="flex items-center gap-2 text-sm *:text-zinc-500 *:last:text-zinc-800">
                <li>Accueil</li>
                <Slash size={16} />
                <li>T-shirt</li>
                <Slash size={16} />
                <li>T-shirt simple</li>
            </ul>
        </nav>
    )
}