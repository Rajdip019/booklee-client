import react from "react"
import Document from "./document"
import ProductDetailsSell from "./Components/ProductDetailsSell"
import ProductDetailsDonation from "./Components/ProductDetailsDonation"


// function bookDetails(book){
//   return(
//   <UserProfileOthers
//   name={book.Name}
//   img={book.Photo}
//   location={book.Location}
//   />
//   )
// }

export default function Home() {
  return (
    <>  
    <Document />
    <ProductDetailsSell
    name="Atomic Habits"
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1dvD6I9WaCRlb9BOPudHwC32EaKI47lbEw&usqp=CAU"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
    category="Self Growth"
    author="John Doe"
    condition="4.5"
    adress="Belghoria, Kolkata"
    price="315"
    />
    <ProductDetailsDonation
    name="H.C Verma"
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8YHRXZuC55v8s2BLHzbaYZUc2fBnzTbpkQ&usqp=CAU"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
    author="John Doe"
    condition="4.6"
    adress="Belghoria, Kolkata"

     />
    
    </>
  
  )

}







