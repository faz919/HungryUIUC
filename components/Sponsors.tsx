import Image from "next/image";
import ymca from "../public/ymca.jpeg"
import hillel from "../public/hillel.webp"

export default function Sponsors() {
  return (
    <>
      <div className="center mt-5 flex justify-center space-x-4 bg-[white] p-4 text-m">
        <p>In collaboration with: </p>
      </div>
      <div className="center flex p-10 justify-center space-between">
        <Image
          alt="sponsor ymca"
          src={ymca}
          className="mb-10 mr-100"
          height={150}
        />
        {/* <Image
          alt="sponsor ymca"
          src={hillel}
          className="mt-10 ml-100"
          height={150}
        /> */}
      </div>
    </>
  )
}
