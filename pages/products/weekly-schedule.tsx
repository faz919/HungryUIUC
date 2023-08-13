import moment from 'moment-timezone'
import Header from '../../components/Header'
import Sponsors from '../../components/Sponsors'
import schedule from '../../data/weekly-schedule.json'
import MealBlock from '../../components/MealBlock'

export default function Product() {
  moment.tz.setDefault("America/Chicago")
  return (
    <>
      <Header scrollHandler={() => { }} mainPageHeader={false} title={"Weekly Schedule"} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {Array.from(Array(7).keys()).map((item, idx) => {
          const day = moment().add(idx, "days").format("dddd")
          return (
            <>
              <div className="mt-5 w-full h-4 border-b-2 border-solid border-black text-center">
                <span className="bg-white px-4 py-0 text-lg">
                  {idx == 0 ? "Today" : day}
                </span>
              </div>
              {schedule.filter((meal) => meal.dayOfWeek == day).map((meal) => (
                <MealBlock meal={meal} key={meal.id}/>
              ))}
            </>
          )
        })
        }
      </div>
      <Sponsors />
    </>
  )
}
