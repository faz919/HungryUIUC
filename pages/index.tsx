import { useRef } from 'react'
import CampusMap from '../components/CampusMap'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import Sponsors from '../components/Sponsors'
import data from "../data/data.json"
import QuoteCarousel from '../components/QuoteCarousel'

export default function Gallery() {
  let mapRef = useRef<HTMLParagraphElement>()

  const scrollHandler = (e) => {
    e.preventDefault()
    // @ts-ignore
    mapRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <Header scrollHandler={scrollHandler} mainPageHeader title={"Hungry?"} subtitle={"We got you."}/>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
            >
              Meal Schedule
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data &&
            data.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
      <QuoteCarousel />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8" ref={mapRef}>
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Campus Map
            </p>
          </div>
        </div>
      </div>
      <CampusMap />
      <Sponsors />
    </>
  )
}
