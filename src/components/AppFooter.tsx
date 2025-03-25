import {AppLogo} from "@/src/components/AppLogo";

export function AppFooter() {
    return (
        <footer className="mx-auto max-w-300">
            <span className="block w-full h-px bg-linear-to-r/oklch from-background via-neutral-200 via-35% via-neutral-200 via-65% to-background"></span>

            <div className="px-8 md:px-5 my-8 flex max-sm:flex-col justify-between sm:items-center max-sm:gap-4">
                <div className="max-w-xs">
                    <span className="flex items-center gap-2 font-dm-sans font-medium md:font-semibold tracking-[-1.5%] text-zinc-900 text-xl">
                        <AppLogo />
                        LayzShop
                    </span>

                    <p className="mt-2 text-base text-zinc-500">Gagnez du temps sur le développement de votre boutique avec LayzShop.</p>
                </div>

                <div className="flex gap-10">
                    <nav>
                        <h4 className="font-dm-sans font-medium text-zinc-600 text-lg">Produits</h4>

                        <ul className="mt-2 space-y-1 text-base text-zinc-500">
                            <li>Nouveautés</li>
                            <li>Tendances</li>
                            <li>Promotions</li>
                        </ul>
                    </nav>

                    <nav>
                        <h4 className="font-dm-sans font-medium text-zinc-600 text-lg">Réseaux sociaux</h4>

                        <ul className="mt-2 space-y-1 text-base text-zinc-500">
                            <li>Instagram</li>
                            <li>X</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}