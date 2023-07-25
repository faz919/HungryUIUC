import { useRef } from 'react'
import Header from "../../components/Header"
import Sponsors from '../../components/Sponsors'

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
      <Header scrollHandler={scrollHandler} mainPageHeader={false} title={"About"}/>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
            >
              Who we are
            </p>
          </div>
        </div>
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-left mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>
              This website was made by the members of Interfaith in Action, a registered student organization of the University of Illinois Urbana-Champaign.
            </h3>
          </div>
        </div>
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8" ref={mapRef}>
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Why we do it
            </p>
          </div>
        </div>
      </div>
      <Sponsors />
    </>
  )
}
