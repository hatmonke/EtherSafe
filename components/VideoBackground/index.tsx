'use client'
import { useEffect, useRef } from "react";

export default function VideoBackground(){
    const videoRef = useRef<HTMLVideoElement>(null); // <-- Update the ref type

    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.playbackRate = 1;
        }
      }, []);

    return(
        <div>
            <video autoPlay muted loop ref={videoRef} className="absolute inset-0 object-cover w-full min-h-screen blur">
                <source src="/bg.mp4" type="video/mp4"/>
            </video>
            <div className="absolute inset-0 object-cover w-full h-full min-h-screen bg-gradient-to-tr from-black/40 to-slate-500/30 animate-gradient-xy">

            </div>
        </div>
    )
}