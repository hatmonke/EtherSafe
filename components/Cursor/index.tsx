"use client"
import useMousePosition from "./useMoursePosition";

export default function Cursor(){
    const { x, y } = useMousePosition();
    return(
        <div 
        style={{ left: `${x}px`, top: `${y}px` }}
        className="fixed top-0 left-0 z-50 w-10 h-10 pointer-events-none">
            <img src="/gifs/cursor.gif" alt="fly away" className="w-full h-full" />
        </div>
    )
}