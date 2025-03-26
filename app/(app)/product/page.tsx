'use client'

import {EllipseSeparator} from "@/src/components/EllipseSeparator";
import {Button} from "@/src/components/Button";
import {ProductTestimonial} from "@/src/components/ProductTestimonial";
import {ProductFaqAccordion} from "@/src/components/ProductFaqAccordion";
import {ChevronsUpDown, Heart, Star} from "lucide-react";
import {StarRating} from "@/src/components/StarRating";
import {ProductCard} from "@/src/components/ProductCard";
import {Breadcrumb} from "@/src/components/Breadcrumb";
import Image from "next/image";
import WhiteShirt from "@/public/image/products/t-shirt/white_transparent.png";
import RedShirt from "@/public/image/products/t-shirt/red_transparent.png";
import BlueShirt from "@/public/image/products/t-shirt/blue_transparent.png";
import GreenShirt from "@/public/image/products/t-shirt/green_transparent.png";
import {useState} from "react";

export default function Page() {
    const [mainImage, setMainImage] = useState(WhiteShirt);

    return (
        <main>
            <section className="grid-container" id="product">
                <div className="relative w-full">
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200"></span>
                    <span className="block w-px h-[calc(100%-24px)] bg-neutral-200 ml-auto my-3"></span>
                    <EllipseSeparator place="top right" />
                </div>

                <div className="flex flex-col gap-5 mx-3 py-6 sm:py-8 px-3 sm:px-5 border-t border-neutral-200">
                    <Breadcrumb />

                    <div className="grid md:grid-cols-2 gap-12 md:gap-8">
                        <div className="flex flex-col gap-3 md:gap-6">
                            <div className="w-full aspect-square bg-neutral-100 rounded-lg">
                                <Image src={mainImage} alt="Placeholder" />
                            </div>

                            <ul className="flex gap-3 md:gap-6">
                                {[WhiteShirt, BlueShirt, GreenShirt, RedShirt].map((img, index) => (
                                    <li
                                        key={index}
                                        className="bg-neutral-100 rounded-md h-24 flex items-center cursor-pointer hover:ring-2 hover:ring-neutral-200"
                                        onClick={() => setMainImage(img)}
                                    >
                                        <Image src={img} alt="Miniature" className="h-22 object-contain" />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="space-y-3 font-dm-sans text-3xl tracking-light">
                                <h1 className="font-bold text-zinc-800">T-shirt simple</h1>
                                <h3 className="text-zinc-800">150€</h3>
                                <div className="flex *:size-5">
                                    <Star className="fill-yellow-400" strokeWidth={0}/>
                                    <Star className="fill-yellow-400" strokeWidth={0}/>
                                    <Star className="fill-yellow-400" strokeWidth={0}/>
                                    <Star className="fill-yellow-400" strokeWidth={0}/>
                                    <Star className="fill-neutral-300" strokeWidth={0}/>
                                </div>
                            </div>

                            <p className="text-zinc-700">Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>

                            <div className="flex flex-col gap-2">
                                <span className="text-sm text-zinc-700">Couleur</span>

                                <div className="flex mx-1 gap-3">
                                    <span className="block size-8 rounded-full bg-red-700 outline-2 outline-offset-2 outline-red-700"></span>
                                    <span className="block size-8 rounded-full bg-zinc-400"></span>
                                    <span className="block size-8 rounded-full bg-white border border-neutral-200"></span>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <button className="flex items-center gap-2 pl-3 py-3 pr-1.5 border border-neutral-200 rounded-lg">
                                    <span className="text-xs text-zinc-800">1</span>
                                    <ChevronsUpDown className="text-zinc-600" size={14} />
                                </button>

                                <Button size='lg' variant="secondary" className="px-8 lg:px-12">Ajouter au panier</Button>

                                <button className="p-3 border border-neutral-200 rounded-lg">
                                    <Heart className="text-zinc-800" size={16}  />
                                </button>
                            </div>

                            <ProductFaqAccordion />
                        </div>
                    </div>
                </div>

                <div className="relative w-full">
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200 ml-auto"></span>
                    <span className="block w-px h-[calc(100%-24px)] bg-neutral-200 mr-auto my-3"></span>
                    <EllipseSeparator place="top left"/>
                </div>
            </section>

            <section className="grid-container" id="testimonial">
                <div className="relative w-full">
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200"></span>
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200 absolute bottom-0"></span>
                    <span className="block w-px h-[calc(100%-24px)] bg-neutral-200 ml-auto my-3"></span>
                    <EllipseSeparator place="top right" />
                    <EllipseSeparator place="bottom right" />
                </div>

                <div className="relative flex max-md:flex-col-reverse gap-20 lg:gap-37 text-center mx-3 py-6 sm:py-8 px-3 sm:px-5 border-y border-neutral-200">
                    <div className="w-full max-w-80 text-start min-w-fit space-y-3">
                        <h2 className="font-dm-sans font-bold tracking-light text-zinc-800 text-3xl">Ce qu&#39;ils en pensent</h2>

                        <div className="flex items-center gap-2">
                            <div className="flex *:size-5">
                                <Star className="fill-yellow-400" strokeWidth={0} />
                                <Star className="fill-yellow-400" strokeWidth={0} />
                                <Star className="fill-yellow-400" strokeWidth={0} />
                                <Star className="fill-yellow-400" strokeWidth={0} />
                                <Star className="fill-neutral-300" strokeWidth={0} />
                            </div>

                            <span className="text-sm text-zinc-500">Ils sont 124 à donner leur avis</span>
                        </div>

                        <div className="flex flex-col gap-2.5 pt-2.5">
                            <StarRating rating={5} notes={60} />
                            <StarRating rating={4} notes={45} />
                            <StarRating rating={3} notes={25} />
                            <StarRating rating={2} notes={5} />
                            <StarRating rating={1} notes={0} />
                        </div>

                        <div className="max-w-76 mt-9">
                            <h4 className="font-dm-sans font-medium tracking-light text-lg text-zinc-800">Partagez votes avis</h4>
                            <p className="text-sm text-zinc-600 pt-1 pb-6">Aidez les autres clients en partageant votre avis sur ce produit.</p>
                            <Button variant="black" className="w-full">Laisser un avis</Button>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <ProductTestimonial />
                        <ProductTestimonial />
                        <ProductTestimonial />
                        <ProductTestimonial last={true} />
                    </div>
                </div>

                <div className="relative w-full">
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200 ml-auto"></span>
                    <span className="block h-px w-[calc(100%-12px)] bg-neutral-200 left-3 absolute bottom-0"></span>
                    <span className="block w-px h-[calc(100%-24px)] bg-neutral-200 mr-auto my-3"></span>
                    <EllipseSeparator place="top left"/>
                    <EllipseSeparator place="bottom left"/>
                </div>
            </section>

            <section className="mb-20 mt-3 grid-container" id="similar">
                <span className="w-px h-full bg-gradient-to-b from-neutral-200 via-neutral-200 via-75% to-transparent ml-auto"></span>

                <div className="mt-3 sm:mt-5 px-6 sm:px-8 space-y-6 sm:space-y-8">
                    <h3 className="font-dm-sans font-bold tracking-light text-zinc-800 text-3xl">Vous pourriez aimer</h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-lg:gap-y-10">
                        <div className="flex flex-col gap-4">
                            <ProductCard />
                            <Button className="w-full !border-neutral-100">Ajouter au panier</Button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <ProductCard popular />
                            <Button className="w-full !border-neutral-100">Ajouter au panier</Button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <ProductCard />
                            <Button className="w-full !border-neutral-100">Ajouter au panier</Button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <ProductCard />
                            <Button className="w-full !border-neutral-100">Ajouter au panier</Button>
                        </div>
                    </div>
                </div>

                <span className="w-px h-full bg-gradient-to-b from-neutral-200 via-neutral-200 via-75% to-transparent"></span>
            </section>
        </main>
    )
}