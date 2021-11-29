import Navbar from "./Component/Navbar"
import Document from "./document"
import UserProfileDonation from "./Component/UserProfileDonation"
import User from "./UserDb"
import UserProfileOthers from "./Component/UserProfileOthers"

function UserdetailsEducational(user){
  return(
  <UserProfileOthers
  name={user.Name}
  img={user.Photo}
  location={user.Location}
  />
  )
}

// function UserdetailsDonation(user){
//   return(
//   <UserProfileDonation
//   name={user.Name}
//   img={user.Photo}
//   location={user.Location}
//   />
//   )
// }
  


export default function Home() {
  return (
    <>  
    <Document />
    <Navbar/>
    {User.map(UserdetailsEducational)}
    {/* {User.map(UserdetailsDonation)} */}
    </>
  
  )
}





