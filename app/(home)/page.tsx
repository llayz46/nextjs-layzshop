import {Button} from "@/src/components/Button";
import {EllipseSeparator} from "@/src/components/EllipseSeparator";
import Image from 'next/image';
import DashboardImage from '@/public/image/dashboard-placeholder.jpg';
import {IconRocket} from "@/src/components/IconRocket";
import {FeatureTagIcon} from "@/src/components/FeatureTagIcon";
import {IconCrypto} from "@/src/components/IconCrypto";
import {IconChart} from "@/src/components/IconChart";
import {IconHammer} from "@/src/components/IconHammer";
import {ProductCard} from "@/src/components/ProductCard";
import { MoveRight } from "lucide-react";
import {Testimonials} from "@/src/components/Testimonials";
import {PromoBanner} from "@/src/components/PromoBanner";
import {BlobHeroLeft} from "@/src/components/BlobHeroLeft";
import {BlobHeroRight} from "@/src/components/BlobHeroRight";

export default function Home() {
    return (
        <main>
            <section className="grid-container" id="hero">
                <div className="relative w-full">
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200"></span>
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200 absolute bottom-0"></span>
                    <span className="block w-px h-[calc(100%-24px)] bg-neutral-200 ml-auto my-3"></span>
                    <EllipseSeparator place="top right" />
                    <EllipseSeparator place="bottom right" />
                </div>

                <div className="relative text-center mx-3 pt-12 border-t border-neutral-200">
                    <span className="bg-white text-sm text-zinc-500 px-3 py-1 rounded-full shadow-md">🚀 Lancez votre boutique en un temps record</span>

                    <h1 className="font-dm-sans font-bold text-zinc-800 text-5xl xl:text-7xl tracking-light pt-8 xl:pt-10 pb-3 xl:pb-5 max-w-3xl xl:max-w-5xl mx-auto">LayzShop :
                        La base idéale pour votre projet e-commerce</h1>

                    <p className="max-w-2xl xl:max-w-5xl mx-auto text-base xl:text-lg text-zinc-600">LayzShop est une boilerplate conçue pour
                        accélérer et simplifier le développement de boutiques e-commerce. Concentrez-vous sur
                        l’essentiel.</p>

                    <div className="pt-6 xl:pt-8 grid gap-5 grid-cols-2">
                        <Button variant="primary" className="ml-auto">Découvrir les nouveautés</Button>
                        <Button variant="secondary" className="mr-auto">Parcourir le catalogue</Button>
                    </div>

                    <EllipseSeparator place="bottom middle" />

                    <div className="grid grid-cols-2 pt-16">
                        <span className="mt-auto block h-px w-[calc(100%-12px)] bg-neutral-200"></span>
                        <span className="mt-auto block h-px w-[calc(100%-12px)] bg-neutral-200 ml-auto"></span>
                    </div>
                </div>

                <div className="relative w-full">
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200 ml-auto"></span>
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200 left-3 absolute bottom-0"></span>
                    <span className="block w-px h-[calc(100%-24px)] bg-neutral-200 mr-auto my-3"></span>
                    <EllipseSeparator place="top left"/>
                    <EllipseSeparator place="bottom left"/>
                </div>

                <BlobHeroLeft className="absolute -z-10 top-10" />
                <BlobHeroRight className="absolute -z-10 top-0 right-10" />
            </section>

            <section id="dashboard">
                <div className="grid-container">
                    <span className="w-px h-6 bg-neutral-200 mt-3 ml-auto"></span>

                    <span className="w-px h-6 bg-neutral-200 mt-3 mx-auto"></span>

                    <span className="w-px h-6 bg-neutral-200 mt-3 mr-auto"></span>
                </div>

                <div className="mt-2 mx-10 flex justify-center">
                    <div className="p-1 md:p-2 rounded-[20px] border border-neutral-300">
                        <div className="p-0.75 md:p-1.5 bg-[#F2F3FF]/40 rounded-2xl border border-neutral-300 mx-auto max-w-312">
                            <Image src={DashboardImage} alt="Image of dashboard" className="border border-neutral-200 rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid-container" id="features">
                <div className="w-full h-[calc(100%-44px)] mt-auto flex flex-col justify-between">
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200"></span>
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200"></span>
                </div>

                <div>
                    <div className="grid grid-cols-2 md:grid-cols-4 mt-2">
                        <span className="relative w-px h-6 bg-neutral-200 mr-auto"></span>
                        <span className="hidden md:block w-px h-6 bg-neutral-200 mr-auto"></span>
                        <span className="hidden md:block w-px h-6 bg-neutral-200 mr-auto"></span>
                        <div className="w-full flex justify-between">
                            <span className="w-px h-6 bg-neutral-200"></span>
                            <span className="w-px h-6 bg-neutral-200"></span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 text-xs text-zinc-600 mt-3 *:p-4 md:*:p-8 text-sm text-zinc-600 *:text-center *:relative">
                        <div>
                            <div className="space-y-4">
                                <FeatureTagIcon><IconRocket/></FeatureTagIcon>
                                <p>Installez et configurez votre boutique en quelques minutes. Avec LayzShop, démarrez
                                    plus
                                    vite et concentrez-vous sur l’essentiel.</p>
                            </div>
                            <span className="absolute left-0 top-3 w-px h-[calc(100%-24px)] bg-neutral-200"></span>
                            <span className="absolute left-3 top-0 h-px w-[calc(100%-24px)] bg-neutral-200"></span>
                            <span className="hidden md:block absolute left-3 bottom-0 h-px w-[calc(100%-24px)] bg-neutral-200"></span>
                            <EllipseSeparator place="top left"/>
                            <EllipseSeparator place="bottom left"/>
                        </div>
                        <div>
                            <div className="space-y-4">
                                <FeatureTagIcon><IconCrypto/></FeatureTagIcon>
                                <p>Un design soigné avec Tailwind CSS et Vue.js, offrant une base élégante et facilement
                                    personnalisable pour un rendu professionnel.</p>
                            </div>
                            <span className="absolute left-0 top-3 w-px h-[calc(100%-24px)] bg-neutral-200"></span>
                            <span className="absolute left-3 top-0 h-px w-[calc(100%-24px)] bg-neutral-200"></span>
                            <span className="block md:hidden absolute right-0 top-3 w-px h-[calc(100%-24px)] bg-neutral-200"></span>
                            <span className="hidden md:block absolute left-3 bottom-0 h-px w-[calc(100%-24px)] bg-neutral-200"></span>
                            <EllipseSeparator place="top left"/>
                            <EllipseSeparator className="md:hidden block" place="top right"/>
                            <EllipseSeparator place="bottom left"/>
                        </div>
                        <div>
                            <div className="space-y-4">
                            <FeatureTagIcon><IconChart/></FeatureTagIcon>
                                <p>Propulsé par Laravel et Inertia.js, LayzShop garantit des performances optimales et
                                    une
                                    architecture évolutive adaptée à votre croissance.</p>
                            </div>
                            <span className="absolute left-0 top-3 w-px h-[calc(100%-24px)] bg-neutral-200"></span>
                            <span className="absolute left-3 top-0 h-px w-[calc(100%-24px)] bg-neutral-200"></span>
                            <span className="absolute left-3 bottom-0 h-px w-[calc(100%-24px)] bg-neutral-200"></span>
                            <EllipseSeparator className="hidden md:block" place="top left"/>
                            <EllipseSeparator place="bottom left"/>
                        </div>
                        <div>
                            <div className="space-y-4">
                                <FeatureTagIcon><IconHammer/></FeatureTagIcon>
                                <p>Contrairement aux solutions clés en main, LayzShop vous donne un contrôle total sur
                                    votre
                                    code et vos fonctionnalités, sans aucune limite.</p>
                            </div>
                            <span className="absolute left-0 top-3 w-px h-[calc(100%-24px)] bg-neutral-200"></span>
                            <span className="absolute right-0 top-3 w-px h-[calc(100%-24px)] bg-neutral-200"></span>
                            <span className="absolute left-3 top-0 h-px w-[calc(100%-24px)] bg-neutral-200"></span>
                            <span className="absolute left-3 bottom-0 h-px w-[calc(100%-24px)] bg-neutral-200"></span>
                            <EllipseSeparator className="hidden md:block" place="top left"/>
                            <EllipseSeparator place="bottom left"/>
                            <EllipseSeparator place="top right"/>
                            <EllipseSeparator place="bottom right"/>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[calc(100%-44px)] mt-auto flex flex-col justify-between">
                    <span className="block h-px w-[calc(100%-12px)] ml-auto bg-neutral-200"></span>
                    <span className="block h-px w-[calc(100%-12px)] ml-auto bg-neutral-200"></span>
                </div>
            </section>

            <section className="mt-3" id="product-news">
                <div className="grid grid-cols-[minmax(41px,1fr)_minmax(0,898px)_minmax(41px,1fr)] lg:grid-cols-[minmax(81px,1fr)_minmax(0,898px)_minmax(81px,1fr)] md:grid-cols-[minmax(61px,1fr)_minmax(0,898px)_minmax(61px,1fr)] xl:grid-cols-[minmax(121px,1fr)_minmax(0,1198px)_minmax(121px,1fr)]">
                    <span className="h-30 w-px bg-gradient-to-b from-neutral-200 to-transparent ml-auto"></span>

                    <div className="w-full mt-12 md:mt-18 xl:mt-24 px-6 md:px-8 flex flex-col gap-6 md:gap-8">
                        <h3 className="text-2xl md:text-4xl text-zinc-800 font-dm-sans font-semibold tracking-light">Nouveautés</h3>

                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-5">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </div>

                    <span className="h-30 w-px bg-gradient-to-b from-neutral-200 to-transparent"></span>
                </div>
            </section>

            <section className="relative mt-20 md:mt-30 pb-16 md:pb-32" id="promos">
                <PromoBanner />

                <div className="max-w-4xl mt-16 md:mt-22 xl:mt-26 mx-auto flex flex-col items-center text-center gap-3">
                    <h2 className="font-dm-sans font-bold tracking-[-1.5%] text-3xl md:text-4xl xl:text-6xl text-zinc-800">Profitez de -25 % dès maintenant !</h2>
                    <p className="px-4 text-zinc-600 text-base md:text-lg xl:text-xl">LayzShop vous permet de lancer votre boutique en ligne en un temps record. Profitez de cette offre exceptionnelle pour démarrer avec -25 % de réduction !</p>
                    <Button variant="black" size="sm" className="w-fit">Je lance mon e-commerce !</Button>
                </div>

                <div className="absolute -z-10 top-0 left-0 size-full bg-cover bg-[url(/image/promo-section-background.png)] opacity-35 clip-path-promo-section"
                     style={{
                         maskImage: "linear-gradient(to top, transparent 10%, black)",
                         backgroundPositionY: "35%"
                     }}>
                </div>
            </section>

            <section id="trending">
                <div className="mb-3 grid grid-cols-[minmax(41px,1fr)_minmax(0,898px)_minmax(41px,1fr)] lg:grid-cols-[minmax(81px,1fr)_minmax(0,898px)_minmax(81px,1fr)] md:grid-cols-[minmax(61px,1fr)_minmax(0,898px)_minmax(61px,1fr)] xl:grid-cols-[minmax(121px,1fr)_minmax(0,1198px)_minmax(121px,1fr)]">
                    <span className="h-30 w-px bg-gradient-to-t from-neutral-200 to-transparent ml-auto"></span>

                    <div className="w-full mb-3 md:mb-5 mt-auto px-6 md:px-8 flex items-end justify-between">
                        <h3 className="text-2xl md:text-4xl text-zinc-800 font-dm-sans font-semibold tracking-light">Tendances</h3>

                        <a href="#" className="flex items-center gap-1 text-zinc-500 text-sm">
                            Explorer les tendances
                            <MoveRight size={20} strokeWidth={1}/>
                        </a>
                    </div>

                    <span className="h-30 w-px bg-gradient-to-t from-neutral-200 to-transparent"></span>
                </div>

                <div className="grid grid-cols-[minmax(41px,1fr)_minmax(0,898px)_minmax(41px,1fr)] lg:grid-cols-[minmax(81px,1fr)_minmax(0,898px)_minmax(81px,1fr)] md:grid-cols-[minmax(61px,1fr)_minmax(0,898px)_minmax(61px,1fr)] xl:grid-cols-[minmax(121px,1fr)_minmax(0,1198px)_minmax(121px,1fr)]">
                    <div className="relative w-full h-full flex flex-col justify-between before:absolute before:right-0 before:h-[calc(100%-24px)] before:w-px before:mt-3 before:bg-neutral-200">
                        <span className="block h-px w-[calc(100%-12px)] bg-neutral-200"></span>
                        <span className="block h-px w-[calc(100%-12px)] bg-neutral-200"></span>
                    </div>

                    <div className="px-3 grid md:grid-cols-[auto_24px_auto] relative">
                        <div className="pl-2 md:pl-5 pr-2.5 md:pr-6 py-4 md:py-8 max-md:border-t md:border-y border-neutral-200">
                            <ProductCard/>
                        </div>

                        <span className="bg-neutral-200 h-[calc(100%-24px)] w-px m-auto"></span>

                        <div className="pr-2 md:pr-5 pl-2.5 md:pl-6 py-4 md:py-8 max-md:border-b md:border-y border-neutral-200">
                            <ProductCard/>
                        </div>

                        <EllipseSeparator place="top left"/>
                        <EllipseSeparator place="bottom left"/>
                        <EllipseSeparator className="hidden md:block" place="top middle"/>
                        <EllipseSeparator className="hidden md:block" place="bottom middle"/>
                        <EllipseSeparator place="top right"/>
                        <EllipseSeparator place="bottom right"/>
                    </div>

                    <div
                        className="relative w-full h-full flex flex-col justify-between before:absolute before:left-0 before:h-[calc(100%-24px)] before:w-px before:mt-3 before:bg-neutral-200">
                        <span className="block h-px ml-auto w-[calc(100%-12px)] bg-neutral-200"></span>
                        <span className="block h-px ml-auto w-[calc(100%-12px)] bg-neutral-200"></span>
                    </div>
                </div>
            </section>

            <section className="mb-15" id="testimonial">
                <div
                    className="mt-3 grid grid-cols-[minmax(41px,1fr)_minmax(0,898px)_minmax(41px,1fr)] lg:grid-cols-[minmax(81px,1fr)_minmax(0,898px)_minmax(81px,1fr)] md:grid-cols-[minmax(61px,1fr)_minmax(0,898px)_minmax(61px,1fr)] xl:grid-cols-[minmax(121px,1fr)_minmax(0,1198px)_minmax(121px,1fr)]">
                    <span className="h-50 w-px bg-gradient-to-b from-neutral-200 to-transparent ml-auto"></span>

                    <div className="w-full mt-auto px-8 space-y-2.5">
                        <h2 className="font-dm-sans font-bold tracking-[-1.5%] text-3xl md:text-4xl lg:text-5xl text-zinc-800 text-center">Découvrez
                            ce que nos utilisateurs en disent</h2>
                        <p className="text-zinc-600 text-base md:text-lg lg:text-xl text-center mx-auto md:max-w-190">Nos
                            utilisateurs ont testé LayzShop pour créer leur boutique en un temps <b
                                className="font-medium">record.</b> Voici ce qu’ils en disent !</p>
                    </div>

                    <span className="h-50 w-px bg-gradient-to-b from-neutral-200 to-transparent"></span>
                </div>
                {/*<div className="mx-auto max-w-300 flex justify-between">*/}
                {/*    <span className="h-50 w-px bg-gradient-to-b from-neutral-200 to-transparent"></span>*/}

                {/*    <div className="w-full mt-auto px-8 space-y-2.5">*/}
                {/*        <h2 className="font-dm-sans font-bold tracking-[-1.5%] text-3xl md:text-4xl lg:text-5xl text-zinc-800 text-center">Découvrez*/}
                {/*            ce que nos utilisateurs en disent</h2>*/}
                {/*        <p className="text-zinc-600 text-base md:text-lg lg:text-xl text-center mx-auto md:max-w-190">Nos*/}
                {/*            utilisateurs ont testé LayzShop pour créer leur boutique en un temps <b*/}
                {/*                className="font-medium">record.</b> Voici ce qu’ils en disent !</p>*/}
                {/*    </div>*/}

                {/*    <span className="h-50 w-px bg-gradient-to-b from-neutral-200 to-transparent"></span>*/}
                {/*</div>*/}

                <div className="mt-10 mx-20">
                    <Testimonials/>
                </div>
            </section>
        </main>
    );
}
