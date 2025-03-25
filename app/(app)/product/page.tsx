import {EllipseSeparator} from "@/src/components/EllipseSeparator";
import {Button} from "@/src/components/Button";
import {ProductTestimonial} from "@/src/components/ProductTestimonial";
import {Star} from "lucide-react";
import {StarRating} from "@/src/components/StarRating";
import {ProductCard} from "@/src/components/ProductCard";

export default function Page() {
    return (
        <main>
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
                        {[...Array(4)].map((_, i) => (
                            <div className="flex flex-col gap-4" key={i}>
                                <ProductCard />
                                <Button className="w-full !border-neutral-100">Ajouter au panier</Button>
                            </div>
                        ))}
                    </div>
                </div>

                <span className="w-px h-full bg-gradient-to-b from-neutral-200 via-neutral-200 via-75% to-transparent"></span>
            </section>
        </main>
    )
}