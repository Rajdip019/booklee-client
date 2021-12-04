import React from 'react'
import Link from 'next/link'

const DonationMainCounter = () => {
    return (
        <div className="h-full w-full">
            <div className="text-center mt-10 lg:mt-20 xl:mt-24 2xl:mt-36 px-4">
                <h1 className="text-xl sm:text-3xl font-medium my-5 max-w-3xl mx-auto">“I think people forget that it doesn't take a big donation to help someone, just a lot of little donations.”</h1>
                <p className="font-normal text-lg opacity-75">Weekly Donation Target</p>
            </div>
            <div className="h-48 w-48 rounded-full bg-skin-lightGreen mx-auto my-20 pt-[75px] shadow-xl sm:scale-150">
                <h1 className="text-4xl font-bold text-center">0/100</h1>
            </div>
            <div className="text-center">
            <Link href="/donatengo/donationadressform">
            <button className="mt-5 text-skin-darkGreen bg-skin-lightGreen hover:bg-skin-hoverGreen p-[16px] rounded-xl text-center font-bold">Donate</button>
            </Link>
            </div>
            
        </div>
    )
}

export default DonationMainCounter
