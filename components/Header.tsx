import Image from 'next/image'
import img from '../public/bg.png'
import { MouseEventHandler } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header({ scrollHandler, mainPageHeader, title, subtitle=" " }) {
  const router = useRouter();
  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              priority
              fill
              className="h-full w-full object-cover"
              src={img}
              placeholder="blur"
              alt="Coffee grinder"
            />
            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            {/* <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl font-semibold uppercase tracking-wide uiuc-orange">
              HungryUIUC
            </p> */}
            <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="block text-white drop-shadow-md">{title}</span>
              <span className="block uiuc-orange drop-shadow-md">{subtitle}</span>
            </h1>
            {mainPageHeader && 
            <div className="mx-auto mt-10 max-w-xs flex sm:max-w-none justify-center">
              <button
                className="flex items-center justify-center rounded-md border-2 bg-white px-4 py-3 text-base font-medium shadow-sm sm:px-8 foreground-button"
                onClick={scrollHandler}
              >
                View Campus Map
              </button>
            </div>}
          </div>
          {mainPageHeader ?
            <div className="absolute top-3 right-3 justify-right h-10 flex">
              <button
                className="flex items-center justify-center rounded-md border-2 border-white bg-transparent px-4 py-3 text-base font-medium uiuc-orange shadow-sm background-button sm:px-8"
              >
                <Link href={`/about`}>
                  About
                </Link>
              </button>
            </div> :
            <div className="absolute top-3 right-3 justify-right h-10 flex">
              <button
                className="flex items-center justify-center rounded-md border-2 border-white bg-transparent px-4 py-3 text-base font-medium uiuc-orange shadow-sm background-button sm:px-8"
                onClick={() => router.back()}
              >
                Back
              </button>
            </div>}
        </div>
      </div>
    </header>
  )
}
