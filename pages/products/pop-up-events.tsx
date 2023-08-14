import { Timeline } from "react-twitter-widgets"
import Header from "../../components/Header"
import Sponsors from '../../components/Sponsors'

export default function Gallery() {

  return (
    <>
      <Header scrollHandler={() => {}} mainPageHeader={false} title={"Pop-up Events"}/>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col items-center">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-left mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>
              <span>Follow <a href="https://twitter.com/UIUCFreeFood" className="text-blue-600 hover:text-blue-800">@UIUCFreeFood</a> on Twitter to get constant updates about pop-up free or low-cost food events around campus. Or, view a live feed of their tweets below.&nbsp;</span>
              <span className="font-bold">(may take a second to show up)</span>
            </h3>
          </div>
        </div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'uiucfreefood'
          }}
          options={{
            height: '700',
            width: '40vw'
          }}
        />
      </div>
      <Sponsors />
    </>
  )
}
