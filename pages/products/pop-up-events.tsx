import { useRef } from 'react'
import Header from "../../components/Header"
import Sponsors from '../../components/Sponsors'
import resources from '../../data/resources.json'
import InfoBlock from '../../components/InfoBlock'

export default function Gallery() {

  return (
    <>
      <Header scrollHandler={() => {}} mainPageHeader={false} title={"Pop-up Events"}/>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

      </div>
      <Sponsors />
    </>
  )
}
