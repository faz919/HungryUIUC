import Image from 'next/image'
import { Timeline } from 'react-twitter-widgets'
import Header from '../../components/Header'
import Sponsors from '../../components/Sponsors'

export default function Product() {

  return (
    <>
      <Header scrollHandler={() => {}} mainPageHeader={false} title={"Weekly Schedule"}/>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

      </div>
      <Sponsors />
    </>
  )
}
