import Image from 'next/image'
import { Timeline } from 'react-twitter-widgets'

export default function Product() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <Image
            alt="coffee"
            className="rounded-lg"
            src=""
            width={560}
            height={640}
          />
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Weekly Schedule Page
            </h1>
            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              Price
            </h1>
            <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
              Random
            </div>
            <p className="max-w-xl">Hello</p>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'uiucfreefood'
              }}
              options={{
                height: '400',
                width: '400'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
