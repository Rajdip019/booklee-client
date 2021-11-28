import Document from "./document"
import ProductCardDonationDisplay from "./Components/ProductCardDonationDisplay"
import BookD from "../Database/bookD"

function bookCards(Book){
  return(
  <ProductCardDonationDisplay
    name= {Book.name}
    img = {Book.photo}
    condition = {Book.condition}
     />
  )
}


export default function Home() {
  return (
    <>  
    <Document />
    {BookD.map(bookCards)}
    
    </>
  )
}
