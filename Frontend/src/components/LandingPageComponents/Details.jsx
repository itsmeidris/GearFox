import React from "react";

function Details() {
  return (
    <>
      <div className="flex justify-between mx-16 pt-9 pb-4">
        <p className="border-2 border-black rounded-full px-6 py-2">UPDATES</p>
        <p>
          <span>02/</span> details
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-5xl my-5 ml-12">
            Because the biggest <br /> challenge is to remain <br />
            unbeatable.
          </h1>
          <p>Discover GearFox products in detail.</p>

          <div className="flex gap-10">
            <div>
              <p className=" border-2 border-gray-500 rounded-md h-60 w-60 flex justify-center">
                The invisible hand pressing a car into the track for maximum
                grip and stability.
              </p>
            </div>
            <div>
              <p className=" border-2 border-gray-500 rounded-md h-60 w-60 flex justify-center">
                The invisible hand pressing a car into the track for maximum
                grip and stability.
              </p>
            </div>
          </div>
        </div>
        <div className="" style={{ flex: "0 20% 30%" }}>
          <img
            className="auth-image h-auto w-full rounded-lg"
            src="../src/assets/LandingPage-img/motor2.jpg"
            alt="details"
          />
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Details;
