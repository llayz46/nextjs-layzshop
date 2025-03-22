import {Marquee} from "@/src/components/magicui/marquee";

const items = ['PROMOTIONS', '-25%'];

export function PromoBanner() {
    return (
        <div className="rotate-3 bg-white border-y-2 border-neutral-200 py-2 md:py-2.5 space-x-16 font-dm-sans font-semibold text-xl xl:text-2xl text-zinc-800">
            <Marquee className="pointer-events-none [--duration:20s]">
                {Array(5).fill(items).flat().map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </Marquee>
        </div>
    )
}