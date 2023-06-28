import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductCard({ product }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="option-image">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 duration-500">
          <Image
            alt="product image"
            src={product.image}
            fill
            className={cn(
              'object-cover duration-300 ease-in-out group-hover:opacity-75',
              isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3>{product.name}</h3>
        </div>
        <p className="mt-1 text-sm italic text-gray-500">
          {product.shortDescription}
        </p>  
      </div>
    </Link>
  )
}
