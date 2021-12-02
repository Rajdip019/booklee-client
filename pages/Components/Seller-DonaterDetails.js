import React from 'react'
import { Avatar } from '@chakra-ui/react'

const SellerDonaterDetails = (props) => {
    return (
        <>

            {/* ///////////////////////////////////////////////////////Display for PC and laptop ////////////////////////////////////////////*/}

            <div className="hidden lg:block">

                <div className=" bg-gray-100 grid grid-cols-5 p-4 h-[245px] rounded-2xl ">
                    <h1 className="col-span-5 text-center font-bold text-3xl mb-5">Seller Profile</h1>
                    <div className="mt-auto mb-auto text-center ">
                        <Avatar name={props.name} src={props.img} size='lg' className="w-28 h-28 mb-5" borderRadius="100%"/>
                        <h3 className="font-semibold text-xl" >{props.name}</h3>

                    </div>

                    <div className="text-center mt-auto mb-auto ">
                        <h2 className="font-semibold text-2xl">Location:</h2>
                        <p className="text-lg">{props.adress}</p>
                    </div>
                    <div className="text-center mt-auto mb-auto">
                        <h2 className="font-semibold text-2xl">Mobile No.</h2>
                        <p className="text-lg">{props.phno}</p>
                    </div>
                    <div className="text-center mt-auto mb-auto">
                        <h2 className="font-semibold text-2xl">Have a chat with Seller</h2>
                        <button className="text-lg text-center bg-skin-darkBlue text-skin-lightBlue p-2 px-6 rounded-3xl hover:bg-blue-700 font-semibold mt-5">Messege</button>
                    </div>

                    <div className="m-auto">
                        <img className="w-48 h-36  rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDeUqi_1Ha093t_VOeI86NFsTrLimk9qfjQ&usqp=CAU" alt="" />

                    </div>
                </div>
            </div>


            {/* ///////////////////////////////////////////////////////Display for Mobile and Tablet ////////////////////////////////////////////*/}

            <div className="block lg:hidden">
                <div className="bg-white w-11/12 drop-shadow-xl rounded-xl p-4 ml-auto mr-auto">
                    <h1 className="col-span-5 text-center font-bold text-3xl mb-9">Seller Profile</h1>
                    <div className="grid grid-cols-2">
                        <Avatar name={props.name} src={props.img} size='lg' className="w-28 h-28 mb-5 m-auto" borderRadius="100%"/>
                        <div className="pl-5">
                            <h3 className="font-semibold text-lg mb-3">{props.name}</h3>
                            <h2 className="font-semibold">Mobile No.</h2>
                            <p className="text-lg">{props.phno}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="m-auto">
                            <img className="w-48 h-32  rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDeUqi_1Ha093t_VOeI86NFsTrLimk9qfjQ&usqp=CAU" alt="" />
                        </div>
                        <div className="pl-5">
                        <h2 className="font-semibold text-lg">Location:</h2>
                        <p className="mb-2">{props.adress}</p>
                        <h2 className="font-semibold text-xl">Want to chat?</h2>
                        <button className="text-lg text-center bg-skin-lightBlue text-skin-darkBlue p-2 px-6 rounded-3xl mt-2 hover:bg-blue-700 font-semibold">Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SellerDonaterDetails
