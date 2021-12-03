import Document from "../document";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";
import UserProfileOthers from "../Components/UserProfileOthers";
import ProductCardSellingDisplay from "../Components/ProductCardSellingDisplay";

import BookS from "../../Database/bookS";

function bookCards(Book){
    return(
    <div className="my-8 md:scale-75 md:my-0 lg:my-8 lg:scale-100 mx-auto">
    <ProductCardSellingDisplay
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
      <GeneralSidebar title="Favourite"/>
      <UserProfileOthers 
          img = "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"  
          name="Rajdeep Sengupta"
          location= "Belghoria, Kolkata"
      />
      <div className=" items-center">
      <div className="lg:ml-[300px] my-10 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:w-[calc(100%-350px)] align-middle">
      {BookS.map(bookCards)}
      </div>
      </div>
      </>
    )
  }