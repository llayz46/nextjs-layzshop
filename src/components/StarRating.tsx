interface StarRatingProps {
    rating: number;
    notes: number
}

export function StarRating({ rating, notes }: StarRatingProps) {
    const notesWidth =  (notes / 100) * 100

    return (
        <div className="flex items-center gap-5 text-sm text-zinc-500 text-nowrap">
            <span className="max-w-15 w-full">{rating} étoiles</span>
            <span className="h-2 w-full max-w-50 rounded-full bg-neutral-200 relative">
                <span
                    className="block h-2 rounded-full bg-indigo-600 absolute left-0 top-0"
                    style={{ maxWidth: `${notesWidth}%`, width: "100%" }}
                ></span>
            </span>
            <span>{notes}</span>
        </div>
    )
}