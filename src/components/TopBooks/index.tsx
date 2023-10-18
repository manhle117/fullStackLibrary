import React from "react";
import  './style.css';

export default function TopBooks() {
  return (
    <div className="header bg-black flex items-center justify-center ">
        <div className="container w-fit text-white">
            <p className="font-extrabold text-5xl  ">Find your next adventure</p>
            <p className="mt-3 text-2xl ">Where would you like to go next?</p>
            <a href="" type="button" className="bg-blue-500 w-fit  mt-3 text-white rounded-md font-normal px-4 py-3 text-lg">Explore top book</a>
        </div>
    </div>
  )
}
