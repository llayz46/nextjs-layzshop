import Image from 'next/image';

export function ReviewCard({
    img,
    name,
    job,
    body,
}: {
    img: string;
    name: string;
    job: string;
    body: string;
}) {
    return (
        <figure className="relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border border-neutral-100 p-4 bg-white hover:bg-background">
            <div className="flex flex-row items-center gap-2">
                <Image src={img} width={32} height={32} alt="Product image" className="rounded-full size-8" />

                <div className="flex flex-col text-xs">
                    <figcaption className="font-medium text-zinc-900">
                        {name}
                    </figcaption>

                    <p className="text-zinc-800">{job}</p>
                </div>
            </div>

            <blockquote className="mt-3 text-xs text-zinc-800">{body}</blockquote>
        </figure>
    )
}