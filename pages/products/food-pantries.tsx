import Header from "../../components/Header"
import Sponsors from '../../components/Sponsors'

export default function Gallery() {

  return (
    <>
      <Header scrollHandler={() => {}} mainPageHeader={false} title={"Food Pantries"}/>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

      </div>
      <Sponsors />
    </>
  )
}
