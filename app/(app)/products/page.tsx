import {EllipseSeparator} from "@/src/components/EllipseSeparator";
import {ProductCard} from "@/src/components/ProductCard";
import { Checkbox } from "@/src/components/ui/checkbox"

export default function Page() {
    return (
        <main>
            <section className="grid-container" id="title">
                <div className="relative w-full">
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200"></span>
                    <span className="block w-px h-[calc(100%-24px)] bg-neutral-200 ml-auto my-3"></span>
                    <EllipseSeparator place="top right" />
                </div>

                <div className="flex flex-col gap-4 mx-3 pt-24 pb-10 px-3 sm:px-5 border-t border-neutral-200">
                    <h1 className="font-dm-sans font-bold text-zinc-800 text-4xl tracking-light">Nouveautés</h1>
                    <p className="text-zinc-600">Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum, ac aliquet odio mattis.</p>
                </div>

                <div className="relative w-full">
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200 ml-auto"></span>
                    <span className="block w-px h-[calc(100%-24px)] bg-neutral-200 mr-auto my-3"></span>
                    <EllipseSeparator place="top left"/>
                </div>
            </section>

            <div className="mb-3 grid-container">
                <div className="relative w-full">
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200"></span>
                    <EllipseSeparator place="top right" />
                </div>

                <div className="mx-3 border-t border-neutral-200"></div>

                <div className="relative w-full">
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200 ml-auto"></span>
                    <EllipseSeparator place="top left"/>
                </div>
            </div>

            <section className="mb-50 grid-container">
                <div className="relative w-full">
                    <span className="block w-px h-20 bg-neutral-200 ml-auto"></span>
                </div>

                <div className="mr-8 mt-8 flex gap-5">
                    <div className="w-full max-w-50 md:max-w-75 flex flex-col gap-8 relative">
                        <span className="-translate-x-px absolute w-px h-full bg-gradient-to-b from-neutral-200 via-neutral-200 via-70% to-transparent"></span>

                        <div className="ml-8 flex flex-col gap-6 *:text-sm *:font-medium">
                            <h3 className="text-zinc-800">Couleur</h3>

                            <div className="flex flex-col gap-3 *:text-zinc-600 *:flex *:items-center *:gap-2">
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Rouge
                                    </label>
                                </div>
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Blanc
                                    </label>
                                </div>
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Noir
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex items-center">
                                <div className="w-fit p-1 bg-background -translate-x-1/2">
                                    <span className="block shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>
                                </div>

                                <span className="-translate-x-3.5 block h-px w-full bg-gradient-to-r from-neutral-200 via-neutral-200 to-transparent to-90%"></span>
                            </div>

                            <span className="-z-10 top-1/2 left-0 -translate-x-full absolute h-px w-200 bg-neutral-200"></span>
                        </div>

                        <div className="ml-8 flex flex-col gap-6 *:text-sm *:font-medium">
                            <h3 className="text-zinc-800">Taille</h3>

                            <div className="flex flex-col gap-3 *:text-zinc-600 *:flex *:items-center *:gap-2">
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        XS
                                    </label>
                                </div>
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        S
                                    </label>
                                </div>
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        M
                                    </label>
                                </div>
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        L
                                    </label>
                                </div>
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        XL
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex items-center">
                                <div className="w-fit p-1 bg-background -translate-x-1/2">
                                    <span className="block shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>
                                </div>

                                <span className="-translate-x-3.5 block h-px w-full bg-gradient-to-r from-neutral-200 via-neutral-200 to-transparent to-90%"></span>
                            </div>

                            <span className="-z-10 top-1/2 left-0 -translate-x-full absolute h-px w-200 bg-neutral-200"></span>
                        </div>

                        <div className="ml-8 flex flex-col gap-6 *:text-sm *:font-medium">
                            <h3 className="text-zinc-800">Catégorie</h3>

                            <div className="flex flex-col gap-3 *:text-zinc-600 *:flex *:items-center *:gap-2">
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        T-shirt
                                    </label>
                                </div>
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Jean
                                    </label>
                                </div>
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Pull
                                    </label>
                                </div>
                                <div>
                                    <Checkbox />
                                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Veste
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
                        <ProductCard large popular />
                        <ProductCard large />
                        <ProductCard large />
                        <ProductCard large />
                        <ProductCard large popular />
                        <ProductCard large />
                        <ProductCard large />
                        <ProductCard large popular />
                        <ProductCard large />
                    </div>
                </div>

                <div className="relative w-full">
                    <span className="block w-px h-[calc(100%-12px)] bg-neutral-200 mr-auto"></span>
                </div>
            </section>
        </main>
    )
}