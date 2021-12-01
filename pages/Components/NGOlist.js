import React from 'react'

const NGOlist = () => {
    return (
        <>
            <div className="w-10/12 mx-auto lg:w-[calc(100%-300px)] lg:mx-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:w-8/12 w-fill mx-auto">
                <div className="aspect-w-16 aspect-h-9 xl:scale-75">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwKjQ2YQirPmKKiK-AZnm9EqP8FYEO7V3oQ&usqp=CAU" alt="NGO Image Preview"  />
                </div>
                <div className="pl-0 sm:pl-8  xl:pl-0 my-auto mt-6 sm:m-auto">
                    <h1 className="text-2xl font-semibold mb-4">Titir Foundation</h1>
                    <p className="">16,raintreehall,rheniusstreet,blr25, Rhenius Street Bangalor,Karnataka-560025</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default NGOlist
