import Image from 'next/image';
import map from '../public/campus_map.png'

export default function CampusMap() {
    return (
        <iframe src="https://www.google.com/maps/d/embed?mid=12eIVfNBAOgLdRXQqKjG341JoQBNxGAA&hl=en&ehbc=2E312F" className='iframe'>
            Your browser does not support iframes.
        </iframe>
    )
}
