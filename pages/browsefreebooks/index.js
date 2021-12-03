import Document from "../document";
import Navbar from "../Components/Navbar";
import FilterPC from "../Components/FilterPC";
import FilterM from "../Components/FilterM"
import ProductCardDonationDisplay from "../Components/ProductCardDonationDisplay";

import BookD from "../../Database/bookD";

function bookCards(Book){
    return(
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
    <ProductCardDonationDisplay
      name= {Book.name}
      img = {Book.photo}
      price = {Book.Price}
      condition = {Book.condition}
      category = {Book.category}
       />
    </div>
    )
  }


export default function UserProfileSell() {
    return (
      <>  
      <Document />
      <Navbar/>
      <div className=" hidden lg:block">
      <FilterPC />
      </div>
      <div className="block lg:hidden fixed bottom-10 z-40 right-10">
      <FilterM />
      </div>
      <div className=" items-center">
      <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
      {BookD.map(bookCards)}
      </div>
      </div>
      </>
    )
  }