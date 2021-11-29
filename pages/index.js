import Document from "./document"
import ProductDonatedCard from "./Components/ProductDonatedCard"
import BookS from "../Database/bookS"

function bookCards(Book){
  return(
  <ProductDonatedCard
    name= {Book.name}
    img = {Book.photo}
    condition = {Book.condition}
     />
  )
}

// function bookCards(Book){
//   return(
//   <ProductDonatedCard
//     name= {Book.name}
//     img = {Book.photo}
//     price = {Book.Price}
//     condition = {Book.condition}
//     category = {Book.category}
//      />
//   )
// }


export default function Home() {
  return (
    <>  
    <Document />
    {BookS.map(bookCards)}  
    </>
  )
}