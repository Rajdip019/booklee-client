import React from "react";

const GetBooksHome = () => {
  return (
    <div>
      <div className="grid  grid-col-1 lg:grid-cols-2 gap-6 w-11/12 mx-auto">
        <div className="bg-skin-lightGreen text-skin-darkGreen rounded-xl">
          <div className="grid grid-cols-2 m-auto">
            <div className="m-auto">
            <h1 className="text-lg sm:text-5xl font-bold">Get</h1>
            <h1 className="text-md sm:text-2xl font-bold">Free Educational Books</h1>
            <button className="font-bold bg-skin-darkGreen text-skin-lightGreen rounded-xl p-2 my-3 text-xl">
              Browse Now
            </button>
            </div>
            <div >
                <img src="/Edubg.png"></img>
            </div>
          </div>
        </div>

        <div className="bg-skin-lightBlue text-skin-darkBlue rounded-xl">
          <div className="grid grid-cols-2 m-auto ">
            <div className="m-auto">
            <h1 className="text-lg sm:text-5xl font-bold">Get</h1>
            <h1 className="text-md sm:text-2xl font-bold">Old Books at lesser price</h1>
            <button className="font-bold bg-skin-darkBlue text-skin-lightBlue rounded-xl p-2 my-3 text-xl">
              Browse Now
            </button>
            </div>
            <div className="">
                <img src="/Sellbg.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetBooksHome;
