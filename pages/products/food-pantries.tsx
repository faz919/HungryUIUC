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
      <Sponsors />
    </>
  )
}
