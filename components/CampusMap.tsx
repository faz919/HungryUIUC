import { useEffect, useRef, useState } from "react"

export default function CampusMap() {
    const mapRef = useRef()
    const [pointerEvents, setPointerEvents] = useState(false)
    useEffect(() => {
        window.onclick = (event) => {
          if (event.target.contains(mapRef.current)
            || event.target == mapRef.current) {     
            setPointerEvents(true)
          }
        }
    }, []);
    return (
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=12eIVfNBAOgLdRXQqKjG341JoQBNxGAA&ehbc=2E312F" 
          className='iframe' 
          style={{ pointerEvents: pointerEvents ? 'all' : 'none' }} 
          onMouseLeave={() => setPointerEvents(false)} 
          ref={mapRef}
        >
            Your browser does not support iframes.
        </iframe>
    )
}
