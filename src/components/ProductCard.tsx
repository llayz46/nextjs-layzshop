import PlaceholderBlackTshirt from '@/public/image/products/t-shirt/black-transparent.png'
import Image from 'next/image'

export function ProductCard() {
    return (
        <div className="flex flex-col pt-4 md:pt-6.5 pb-4 md:pb-5.5 px-4 md:px-7 bg-white shadow-md shadow-black/5 rounded-xl border border-neutral-100 font-dm-sans">
            <span className="text-zinc-900 font-semibold tracking-light text-lg text-end">30€</span>

            <Image src={PlaceholderBlackTshirt} alt="Black T-shirt" className="h-47 w-fit mx-auto object-cover" />

            <p className="text-base/5 text-zinc-800">
                <b className="font-semibold text-zinc-900">Product Name. </b>
                Description of the product and lorem.
            </p>
        </div>
    )
}