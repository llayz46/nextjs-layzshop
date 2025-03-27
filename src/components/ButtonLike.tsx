'use client'

import {Heart} from "lucide-react";
import {useState} from "react";

export function ButtonLike() {
    const [isLiked, setIsLiked] = useState(false);

    const classes = `cursor-pointer p-3 border border-neutral-200 rounded-lg ${isLiked ? 'text-red-500' : 'text-neutral-500'}`;

    return (
        <button className={classes} onClick={() => setIsLiked(!isLiked)}>
            <Heart size={16} fill={isLiked ? "red" : 'none'} />
        </button>
    )
}