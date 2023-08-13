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
              Interfaith in Action is a social justice organization focused on engaging students, staff, faculty, and community members from different philosophical and religious backgrounds to participate in dialogue, community service, and social action.
              As relatively new students, we found it odd that no single source of information existed regarding free or low-cost food opportunities on campus; rather, we would hear about these opportunities from various friends and staff members,
              and would have to trust word-of-mouth for most of our information. We thought it only natural to create such a source so that other students may have an easier time than we did. 
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
            Upon first arriving to the university, we found that there were many opportunities for free food for students and yet attendance seemed to be strikingly low at these events.
            According to the CU-CitizenAccess online newsroom, as of 2020, the overall rate of food insecurity in Champaign County is projected to increase from 11% to 14.4%. 
            The national food insecurity rate is currently 11.5%, and the Illinois food insecurity rate is 10.1%.  
            According to The Daily Illini, in 2021, 2,000 University students experience some form of food insecurity annually.
            Furthermore, a 2021 survey by the Hope Center found that almost 30% of students at various four-year universities claimed to be food-insecure in the 30 days prior.
            Students should be made aware of these frequent free food opportunities on and around campus to minimize the number of students going hungry, which leads to poorer performance in classes, and overall difficulty of life as a student. 
            <br />
            <br />
            <br />
            Sources:
            <br />
            <br />
            <a href="https://cu-citizenaccess.org/2020/12/food-insecurity-projected-to-soar-in-eastern-illinois-and-champaign-county/#:~:text=The%20overall%20rate%20in%20Champaign,food%20insecurity%20rate%20is%2010.1%25">https://cu-citizenaccess.org/2020/12/food-insecurity-projected-to-soar-in-eastern-illinois-and-champaign-county/#:~:text=The%20overall%20rate%20in%20Champaign,food%20insecurity%20rate%20is%2010.1%25</a>
            <br />
            <br />
            <a href="https://www.eifoodbank.org/impact/challenge/map-meal-gap.html#:~:text=There%20are%20nearly%20100%2C000%20food,to%2015%25%20in%20Champaign%20County">https://www.eifoodbank.org/impact/challenge/map-meal-gap.html#:~:text=There%20are%20nearly%20100%2C000%20food,to%2015%25%20in%20Champaign%20County</a>
            <br />
            <br />
            <a href="https://dailyillini.com/news-stories/2021/09/12/students-experience-food-insecurity-on-campus/">https://dailyillini.com/news-stories/2021/09/12/students-experience-food-insecurity-on-campus/</a>
            <br />
            <br />
            <a href="https://odos.illinois.edu/community-of-care/resources/students/food-resources/">https://odos.illinois.edu/community-of-care/resources/students/food-resources/</a>
            </h3>
          </div>
        </div>
      </div>
      <Sponsors />
    </>
  )
}
