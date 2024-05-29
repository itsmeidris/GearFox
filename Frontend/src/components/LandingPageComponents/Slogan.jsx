import React from "react"
import { FlipWords } from "./FlipWords"
import { Link } from "react-router-dom"

export function Slogan() {
  const words = ["Strongest", "Stylish", "Rugged", "Innovative"]

  return (
    <>
    <div className="flex justify-center items-center z-10">
      <div className="text-[4vw] mx-auto font-chillax font-medium text-myGrey">
        Find the
        {/* <FlipWords words={words} /> <br /> */}
        gear for your ride.
      </div>
    </div>
    </>
  )
}
