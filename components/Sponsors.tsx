import Image from "next/image";
import ymca from "../public/ymca.jpeg"
import iia from "../public/interfaith_logo.png"

export default function Sponsors() {
  return (
    <>
      <div className="center mt-5 flex justify-center space-x-4 bg-[white] p-4 text-m">
        <p>In collaboration with: </p>
      </div>
      <div className="center flex p-10 pt-0 justify-center space-between">
        <Image
          alt="University YMCA"
          src={ymca}
          className="mt-10 mr-100"
          height={150}
        />
        <Image
          alt="Interfaith In Action"
          src={iia}
          className="mt-10 ml-100"
          height={150}
        />
      </div>
    </>
  )
}
