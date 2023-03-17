import Image from "next/image";
import ymca from "../public/ymca.jpeg"

export default function Sponsors() {
  return (
    <>
      <div className="center mt-5 flex justify-center space-x-4 bg-[white] p-4 text-m">
        <p>In collaboration with: </p>
      </div>
      <div className="center flex p-10 justify-center">
        <Image 
          alt="sponsor ymca"
          src={ymca}
          className="scale-60"
        />
      </div>
    </>
  )
}
