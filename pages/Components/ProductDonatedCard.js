import React from 'react'

const ProductDonatedCard = (props) => {
    return (
        <div>
            <div>
                <img className=" h-[300px] w-[266px] rounded-t-lg " src={props.img} alt="" />
            </div>

            <div className="flex  mb-3 w-[266px]">
                <button disabled className="w-[235px] rounded-bl-lg bg-skin-lightGreen text-skin-darkGreen py-3 font-bold text-left pl-4">Donated</button>
                <div className="rounded-br-lg bg-skin-lightGreen text-skin-darkGreen w-[35px] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
                <h1 className="w-[215px] font-semibold text-xl mb-2">{props.name}</h1>
            <div className="flex">
                <span className="font-bold text-base">{props.condition}</span>
                <span className="pl-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg></span>
            </div>
        </div>
    )
}

export default ProductDonatedCard
