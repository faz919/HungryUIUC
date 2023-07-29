import { useRef } from 'react'
import Header from "../../components/Header"
import Sponsors from '../../components/Sponsors'
import resources from '../../data/resources.json'
import InfoBlock from '../../components/InfoBlock'

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
      <Header scrollHandler={scrollHandler} mainPageHeader={false} title={"Other Resources"}/>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {resources && 
          resources.map((item, index) => (
            <InfoBlock resource={item} reverse={index % 2 == 1} key={item.id} />
          ))
        }
      </div>
      <Sponsors />
    </>
  )
}
