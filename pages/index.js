import Document from "./document"
import SellerDonaterDetails from "./Components/Seller-DonaterDetails"
import User from "../Database/user"

function SellerDetails(seller){
  return(
  <SellerDonaterDetails
    name= {seller.Name}
    img = {seller.Photo}
    phno= {seller.Phone_no}
    adress= {seller.Location}
     />
  )
}

export default function Home() {
  return (
    <>  
    <Document />
    {User.map(SellerDetails)}
    </>
  )
}