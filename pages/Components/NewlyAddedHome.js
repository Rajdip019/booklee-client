import React from 'react'
import ProductCardSellingDisplay from './ProductCardSellingDisplay'
import BookS from '../../Database/bookS'
import Link from "next/link"

function Newbooks(newbooks) {
    return (
        <div className="ml-auto mr-auto mb-16">
            <ProductCardSellingDisplay
                name={newbooks.name}
                img={newbooks.photo}
                price={newbooks.Price}
                condition={newbooks.condition}
                category={newbooks.category}
            />
        </div>
    )
}


const NewlyAddedHome = () => {
    return (
        <>
            {/*////////////////////////////////////////// For Extra Large/PC Skin/////////////////////////////////////////// */}

            <div className="sm:hidden 2xl:grid 2xl:grid-cols-5 gap-1 w-11/12 m-auto md:hidden lg:hidden hidden mt-32 mb-6">
                <div className="col-span-5  mb-12 px-[2vw]">
                    <span className="text-3xl font-semibold ml-0">Newly Added:</span>
                    <Link href="/browsebooks/newlyadded" >
                    <button className="float-right bg-skin-lightBlue text-skin-darkBlue p-2 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue">View all</button>
                    </Link>
                </div>
                {BookS.slice(0, 5).map(Newbooks)}
            </div>

            {/*////////////////////////////////////////////////// For Large/Laptop Screens //////////////////////////////////////*/}

            <div className="sm:grid sm:grid-cols-2 lg:hidden xl:grid xl:grid-cols-4 2xl:hidden hidden my-14">
                <div className="sm:col-span-2 xl:col-span-4  mb-12 xl:px-[3vw] px-[8vw]">
                    <span className=" sm:text-center text-3xl font-semibold xl:text-left">Newly Added:</span>
                    <Link href="/browsebooks/newlyadded" >
                    <button className="float-right bg-skin-lightBlue text-skin-darkBlue p-2 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue">View all</button>
                    </Link>
                </div>
                    {BookS.slice(0, 4).map(Newbooks)}
            </div>

            {/* ////////////////////////////////////////////////For Medium Screens////////////////////////////////////////// */}

            <div className="lg:grid lg:grid-cols-3 xl:hidden sm:hidden md:hidden 2xl:hidden hidden my-14">
                <div className="col-span-3 mb-12 px-[5vw]">
                <span className="text-3xl font-semibold">Newly Added:</span>
                <Link href="/browsebooks/newlyadded" >
                <button className="float-right bg-skin-lightBlue text-skin-darkBlue p-2 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue">View all</button>
                </Link>
                </div>
                {BookS.slice(0, 3).map(Newbooks)}
            </div>

            {/* ///////////////////////////////////////////////////For Small/Mobile Screens///////////////////////////////////////// */}

            <div className="sm:hidden  grid grid-cols-1 mt-14 mb-14">
                <h2 className="text-3xl font-semibold mb-12 text-center underline">Newly Added</h2>
                {BookS.slice(0, 2).map(Newbooks)}
                <Link href="/browsebooks/newlyadded" >
                <button className="float-right bg-skin-lightBlue text-skin-darkBlue p-2 rounded-lg font-semibold text-xl hover:bg-skin-hoverBlue w-8/12 ml-auto mr-auto">View all</button>
                </Link>
            </div>
        </>
    )
}

export default NewlyAddedHome
