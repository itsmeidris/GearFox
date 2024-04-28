import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-cover bg-center   text-black">
      <nav className="flex justify-between mx-12 py-9 border-b-2  pb-8 ">
        <h1 className="text-3xl">GearFox</h1>
        <ul className="flex gap-12 mt-3 ">
          <li>
            <p>Details</p>
          </li>
          <li>
            <p>Specs</p>
          </li>
          <li>
            <p>Gallery</p>
          </li>
        </ul>
        <ul className="flex  gap-10 mt-3">
          <li>
            <p>Contact</p>
          </li>
          <li>
            <Link to="/signin">
              <a href="" className=" border-2  rounded-full py-3 px-10">
                Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
