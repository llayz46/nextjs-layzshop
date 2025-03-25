import Image from "next/image";
import {Star} from "lucide-react";

export function ProductTestimonial({ last }: { last?: boolean }) {
    return (
        <figure className={`w-fit space-y-4 ${last ? '' : 'border-b border-neutral-200'}`}>
            <div className="flex items-center gap-4">
                <Image src="https://avatar.vercel.sh/james" width={32} height={32} alt="Product image" className="rounded-full size-12" />

                <div>
                    <figcaption className='font-dm-sans tracking-light font-bold text-zinc-800 text-start text-sm'>James Snow</figcaption>

                    <div className="flex *:size-5">
                        <Star className="fill-yellow-400" strokeWidth={0} />
                        <Star className="fill-yellow-400" strokeWidth={0} />
                        <Star className="fill-yellow-400" strokeWidth={0} />
                        <Star className="fill-yellow-400" strokeWidth={0} />
                        <Star className="fill-neutral-300" strokeWidth={0} />
                    </div>
                </div>
            </div>

            <blockquote className={`text-start text-zinc-600 text-base italic ${last ? '' : 'pb-8'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores incidunt laboriosam provident qui, tenetur?</blockquote>
        </figure>
    )
}