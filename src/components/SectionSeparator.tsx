export function SectionSeparator({ type }: { type: "large" | "double" | "quadruple" }) {
    if (type === "large") {
        return (
            <div className="my-1 grid-container-large items-center">
                <span className="block h-px w-full bg-neutral-200"></span>
                <span className="mx-auto shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>

                <div className="block h-px w-full bg-neutral-200"></div>

                <span className="mx-auto shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>
                <span className="block h-px w-full bg-neutral-200"></span>
            </div>
        )
    }

    if (type === "double") {
        return (
            <div className="my-1 grid-container-double items-center">
                <span className="block h-px w-full bg-neutral-200"></span>
                <span className="mx-auto shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>

                <div className="block h-px w-full bg-neutral-200"></div>
                <span className="mx-auto shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>
                <div className="block h-px w-full bg-neutral-200"></div>

                <span className="mx-auto shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>
                <span className="block h-px w-full bg-neutral-200"></span>
            </div>
        )
    }

    if (type === "quadruple") {
        return (
            <div className="my-1 grid-container-quadruple items-center">
                <span className="block h-px w-full bg-neutral-200"></span>
                <span className="mx-auto shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>

                <div className="block h-px w-full bg-neutral-200"></div>
                <span className="mx-auto shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>
                <div className="block h-px w-full bg-neutral-200"></div>
                <span className="mx-auto shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>
                <div className="block h-px w-full bg-neutral-200"></div>
                <span className="mx-auto shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>
                <div className="block h-px w-full bg-neutral-200"></div>

                <span className="mx-auto shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]"></span>
                <span className="block h-px w-full bg-neutral-200"></span>
            </div>
        )
    }

    return (
        <div>
            dfsdfsdfs
        </div>
    )
}