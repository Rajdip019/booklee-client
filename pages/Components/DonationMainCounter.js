import React from 'react'

const DonationMainCounter = () => {
    return (
        <div className=" md:w-[calc(100%-300px)] w-11/12 md:mx-0 mx-auto ">
            <div className="text-center mt-5 px-4">
                <h1 className="text-lg font-medium my-5 max-w-lg mx-auto">“I think people forget that it doesn't take a big donation to help someone, just a lot of little donations.”</h1>
                <p className="font-normal text-lg opacity-75">Weekly Donation Target</p>
            </div>
            <div className="h-48 w-48 rounded-full bg-skin-lightGreen mx-auto my-5 pt-[75px] shadow-xl">
                <h1 className="text-4xl font-bold text-center">0/100</h1>
            </div>
            <div className="text-center">
            <button className="mt-5 text-skin-darkGreen bg-skin-lightGreen hover:bg-skin-hoverGreen p-[16px] rounded-xl text-center font-bold">Donate</button>
            </div>
            
        </div>
    )
}

export default DonationMainCounter
