import CampusMap from "../../components/CampusMap"
import Header from "../../components/Header"
import Sponsors from '../../components/Sponsors'

export default function Gallery() {

  return (
    <>
      <Header scrollHandler={() => {}} mainPageHeader={false} title={"Food Pantries"}/>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-left mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>
              Below you may find a map and corresponding calendar with the locations and reported weekly pantry schedules of all of the public food pantries in the Champaign county. 
            </h3>
          </div>
        </div>
      </div>
      <iframe 
        src="https://calendar.google.com/calendar/embed?height=1080&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showTabs=1&mode=WEEK&showPrint=1&showDate=1&showNav=1&showCalendars=0&showTz=1&src=MmM1N2NiNWQyMmU5NjY3YTg5MTI4NTk4MTFkNDlkMjlhZjQ3MDc5ODMzZjQ3YmQ4M2FjNzlmZGJjZWY5Y2M5NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23cc4900" 
        className="border-none h-screen"
        width="100%" 
        height="100%" 
      />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-left mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>
              Please also utilize the campus map which displays the locations of each food pantry.
            </h3>
          </div>
        </div>
      </div>
      <CampusMap />
      <Sponsors />
    </>
  )
}
