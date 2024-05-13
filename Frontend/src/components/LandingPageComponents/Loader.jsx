import '../style/Loader.css';

function Loader() {
  return (
    <>
      <div className="pre-loader z-[6] fixed top-0 h-full w-full overflow-x-hidden">
            <div className="loader bg-myWhite absolute top-0 w-full h-full text-myWhite flex justify-center items-center"></div>
            <div className="loader-bg absolute block top-0 w-full h-full bg-myRed z-[-1]"></div>
      </div>
      
      <div className="loader-content font-panchang text-myBlack">
            <div className="count leading-[1] text-[50px] w-full text-center">
                <p className="countNum">0%</p>
            </div>
            <div className="copy text-[85px] leading-[1]">
                <p className="ml16 overflow-hidden">GEARFOX</p>
            </div>
      </div>

      <div className="loader-2 absolute top-0 w-full h-full z-[-1]">

      </div>
    </>
  )
}

export default Loader
