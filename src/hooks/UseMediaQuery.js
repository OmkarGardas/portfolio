import { useEffect, useState } from "react";
// import React from 'react'

const UseMediaQuery = (query) => {
    const [matches, setmatches] = useState(false)

    useEffect(()=>{
        const media = window.matchMedia(query);
        if(media.matches !== matches) {
            setmatches(media.matches)
        }
        const listeners = () => setmatches(media.matches)
        window.addEventListener('resize', listeners);
        return () => window.removeEventListener('resize', listeners)
    },[matches, query])
  return matches
}

export default UseMediaQuery
