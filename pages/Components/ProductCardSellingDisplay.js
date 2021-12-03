
import React from "react";
import { useState } from "react";

const ProductCardSellingDisplay = (props) => {
  const [state, setstate] = useState(true);
  function changeState() {
    setstate((state = !state));
  }
  return (
    <div className="w-[266px]">
      <div>
        <img
          className=" h-[300px] w-[266px] rounded-lg mb-3"
          src={props.img}
          alt=""
        />
        {state ==

          true &&(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 relative float-right mr-3 bottom-[305px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={changeState}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          )}
        {state ==
          false &&(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 relative float-right mr-3 bottom-[305px] text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={changeState}
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          )}

      </div>
      <div className="flex ">
        <h1 className="w-[215px] font-semibold text-xl mb-2">{props.name}</h1>
        <span className="font-semibold text-xl">₹{props.price}</span>
      </div>
      <div className="flex">
        <span className="font-bold text-base">{props.condition}</span>
        <span className="pl-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h- w-6 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>
        <span className="bg-skin-darkBlue rounded-lg pl-2 pr-2 font-semibold text-skin-lightBlue ml-3 pb-0.5">
          {props.category}
        </span>
      </div>
    </div>
  );
};

export default ProductCardSellingDisplay;

