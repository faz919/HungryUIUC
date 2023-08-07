import { useRef } from 'react'
import CampusMap from '../components/CampusMap'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import Sponsors from '../components/Sponsors'
import data from "../data/data.json"
import { useRouter } from 'next/router'

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
              Upon first arriving to the university, we found that there were many opportunities for free food for students and yet attendance seemed to be strikingly low at these events.

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
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-left mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>
            According to the CU-CitizenAccess online newsroom, as of 2020 the overall rate of food insecurity in Champaign County is projected to increase from 11% to 14.4%. 
            <br/>
            The national food insecurity rate is currently 11.5%, and the Illinois food insecurity rate is 10.1%.  
            <br/>
            According to The Daily Illini, in 2021, 2,000 University students experience some form of food insecurity annually.
            <br/>
            Furthermore, a 2021 survey by the Hope Center found that almost 30% of students at various four-year universities claimed to be food-insecure in the 30 days prior.
            </h3>
          </div>
        </div>
      </div>
      <Sponsors />
    </>
  )
}
