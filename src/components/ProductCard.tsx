import PlaceholderBlackTshirt from '@/public/image/products/t-shirt/black-transparent.png'
import Image from 'next/image'
import Link from 'next/link'

export function ProductCard({ popular, large }: { popular?: boolean, large?: boolean }) {
    return (
        <Link href="/product" className="flex flex-col gap-2 pt-4 md:pt-6.5 pb-4 md:pb-5.5 px-4 md:px-7 bg-white hover:bg-neutral-50 shadow-md shadow-black/5 rounded-xl border border-neutral-100 font-dm-sans">
            {popular ? (
                <div className="flex justify-between items-center">
                    <span className="bg-zinc-50 rounded-full py-0.5 px-2 shadow-md shadow-black/5 text-zinc-500 text-xs">🔥 Populaire</span>

                    <span className="text-zinc-900 font-semibold tracking-light text-lg text-end">30€</span>
                </div>
            ): (
                <span className="text-zinc-900 font-semibold tracking-light text-lg text-end">30€</span>
            )}

            <Image src={PlaceholderBlackTshirt} alt="Black T-shirt" className={`w-fit mx-auto object-cover ${large ? 'h-62' : 'h-47'}`} />

            <p className="text-base/5 text-zinc-800">
                <b className="font-semibold text-zinc-900">Product Name. </b>
                Description of the product and lorem.
            </p>
        </Link>
    )
}