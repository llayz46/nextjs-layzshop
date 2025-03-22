export function EllipseSeparator({ place, className }: { place: "top left" | "top right" | "top middle" | "bottom left" | "bottom middle" | "bottom right", className?: string }) {
    const placeClasses = {
        "top left": "top-0 left-0 -translate-1/2",
        "top middle": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
        "top right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
        "bottom left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
        "bottom middle": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
        "bottom right": "bottom-0 right-0 translate-1/2",
    }

    return (
        <span
            className={`
                absolute shrink-0 size-4.5 rounded-full bg-white border border-neutral-200 shadow-[0_0_4px_0_rgba(0,0,0,0.10)]
                ${placeClasses[place]}
                ${className}
            `}
        ></span>
    )
}