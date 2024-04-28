import React, { useEffect } from 'react'

function Loader() {
  
  return (
    <>
      <div className="pre-loader">
            <div className="loader"></div>
            <div className="loader-bg"></div>
        </div>

        <div className="loader-content">
            <div className="count">
                <p className="countNum">0</p>
            </div>
            <div className="copy">
                <p className="ml16">GearFox</p>
            </div>
        </div>

        <div className="loader-2"></div>
    </>
  )
}

export default Loader
