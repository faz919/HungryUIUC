import Image from 'next/image';
import map from '../public/campus_map.png'

export default function CampusMap() {
    return (
        <div className="center mt-5 flex justify-center space-x-4 bg-[white] p-4 text-m">
            <Image 
                alt="campus map"
                src={map}
            />
        </div>
    )
}
