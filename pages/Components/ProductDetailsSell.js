import React from 'react'

const ProductDetailsSell = (props) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2   w-10/12 md:w-full mx-auto md:mx-0 ">

                <div className="bg-gray-200 md:mx-4 md:my-4 lg:mx-12 lg:my-12 xl:mx-20 xl:my-20 2xl:mx-32 2xl:my-32">
                    <img src={props.img} alt="book-preview" className=" rounded-xl min-h-full min-w-full " />
                </div>

                <div className="m-auto mt-6 lg:mt-12">
                    <div className="flex mb-8">
                        <h1 className="text-4xl font-semibold">{props.name}</h1>
                        <h3 className="ml-5 my-auto bg-skin-lightBlue text-skin-darkBlue rounded-lg p-2 font-bold">{props.category}</h3>
                    </div>
                    <div className="mb-8">
                        <p>{props.description}</p>

                    </div>
                    <div className="mb-8">
                        <h2 className="font-semibold ">Author</h2>
                        <h3 className="text-xl">{props.author}</h3>
                    </div>
                    <div className="mb-8">
                        <h2 className="font-semibold">Condition</h2>
                        <h3 className="text-xl flex">{props.condition} <span className="my-auto"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <       path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg></span></h3>
                    </div>
                    <div className="mb-8">
                        <h2 className="font-semibold">Location</h2>
                        <p className="text-xl flex">{props.adress}</p>
                    </div>
                    <div className="mb-4">
                        <button className="text-xl my-auto bg-skin-lightBlue text-skin-darkBlue rounded-lg px-5 py-3 font-bold cursor-pointer hidden md:block">₹{props.price}</button>
                        <p className="text-2xl my-auto bg-skin-lightBlue text-skin-darkBlue rounded-lg px-5 py-3 font-bold cursor-pointer text-center md:hidden">₹{props.price}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetailsSell
