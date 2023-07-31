import Image from "next/image";
import { useState } from "react";

function cn(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function InfoBlock({ resource, reverse }) {
    const [isLoading, setLoading] = useState(true);
    return (
        <a href={resource.link} className={cn("w-full bg-gray-200 my-6 h-auto sm:h-72 flex flex-col rounded-lg overflow-hidden shadow-md duration-300 scale-100 hover:scale-105", reverse ? "sm:flex-row-reverse" : "sm:flex-row")}>
            <div className="aspect-1 h-72 overflow-hidden bg-gray-200 relative min-w-fit">
                <Image
                    alt={resource.id}
                    src={resource.image}
                    fill
                    className={cn(
                        'object-cover duration-300 ease-in-out opacity-100',
                        isLoading
                            ? 'blur-2xl grayscale scale-110'
                            : 'blur-0 grayscale-0 scale-100'
                    )}
                    onLoadingComplete={() => setLoading(false)}
                />
            </div>
            <div className="p-6">
                <div className={"flex items-center font-medium text-gray-900"}>
                    <h3 className={cn("text-xl font-bold", reverse ? "sm:text-right" : "sm:text-left")}>{resource.name}</h3>
                </div>
                <p className="mt-1 text-md italic text-gray-500">
                    {resource.shortDescription}
                </p>
                <p className="mt-1 italic underline">
                    Learn More
                </p>
            </div>
        </a>
    )
}