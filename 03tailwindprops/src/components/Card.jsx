import React from "react";

function Card ({username,btnText = "visit Me"}){
  
   
    
    return(
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://images.pexels.com/photos/27796917/pexels-photo-27796917.jpeg?_gl=1*1ksaqu*_ga*MTEyNDQzODY5MC4xNzUwOTM5NzY1*_ga_8JE65Q40S6*czE3NTA5Mzk3NjQkbzEkZzEkdDE3NTA5NDE1NzckajUxJGwwJGgw"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>
        
    )
}

export default Card;