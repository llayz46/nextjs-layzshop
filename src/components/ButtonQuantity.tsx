import {ChevronsUpDown} from "lucide-react";

export function ButtonQuantity() {
    return (
        <button className="flex items-center gap-2 pl-3 py-3 pr-1.5 border border-neutral-200 rounded-lg">
            <span className="text-xs text-zinc-800">1</span>
            <ChevronsUpDown className="text-zinc-600" size={14} />
        </button>
    )
}