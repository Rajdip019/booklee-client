import Document from "../document";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";
import UserProfileDonation from "../Components/UserProfileDonation";
import ToggleButtonDonate from "../Components/ToggleButtonDonate";
import ProductCardDonationMakeProof from "../Components/ProductCardDonationMakeProof";
import ProductDonatedCard from "../Components/ProductDonatedCard";
import Link from "next/link";

import BookD from "../../Database/bookD";

function bookCards(Book){
    return(
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
    <ProductCardDonationMakeProof
      name= {Book.name}
      img = {Book.photo}
      price = {Book.Price}
      condition = {Book.condition}
      category = {Book.category}
       />
    </div>
    )
  }


function bookCardsold(Book){
    return(
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
    <ProductDonatedCard
      name= {Book.name}
      img = {Book.photo}
      price = {Book.Price}
      condition = {Book.condition}
      category = {Book.category}
       />
    </div>
    )
}  



export default function UserProfileDonate() {
    return (
      <>  
      <Document />
      <Navbar/>
      <GeneralSidebar title="User Profile"/>
      <UserProfileDonation
          img = "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"  
          name="Rajdeep Sengupta"
          location= "Belghoria, Kolkata"
      />
      <div className=" ml-[30px] mt-10  lg:ml-[350px]">
      <ToggleButtonDonate />
      </div>
      <div className=" items-center">
      <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
      {BookD.map(bookCards)}
      </div>
      </div>
      <div className="lg:ml-[350px] my-14 text-3xl font-semibold mx-auto">
      <h1 className="text-center lg:text-left">Sold Out</h1>
      <hr  />
      </div>
      <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
      {BookD.map(bookCardsold)}
      </div>
      <Link href="/ListBookForDonating">
      <button className="fixed right-10 bottom-10 bg-skin-darkGreen rounded-full text-skin-lightGreen p-4 shadow-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg></button>
      </Link>
      </>
    )
  }