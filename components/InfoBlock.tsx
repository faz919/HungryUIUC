import Image from "next/image";
import { useState } from "react";

function cn(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function InfoBlock({ resource, reverse }) {
    const [isLoading, setLoading] = useState(true);
    return (
        <a href={resource.link} className={cn("w-full bg-slate-200 my-6 h-auto sm:h-60 flex flex-col rounded-lg overflow-clip shadow-md duration-300 hover:scale-105", reverse ? "sm:flex-row-reverse" : "sm:flex-row")}>
            <div className="aspect-w-1 aspect-h-1 w-60 overflow-hidden bg-gray-200">
                <Image
                    alt="product image"
                    src={resource.image}
                    fill
                    className={cn(
                        'object-cover duration-300 ease-in-out opacity-80 group-hover:opacity-100',
                        isLoading
                            ? 'scale-110 blur-2xl grayscale'
                            : 'scale-100 blur-0 grayscale-0'
                    )}
                    onLoadingComplete={() => setLoading(false)}
                />
            </div>
            <div className="p-2">hello</div>
        </a>
    )
}