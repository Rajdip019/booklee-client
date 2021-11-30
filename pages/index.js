import react from "react"
import Document from "./document"
import MobileVerifyPopUp from "./Components/MobileVerifyPopUp"


// function UserdetailsEducational(user){
//   return(
//   <UserProfileOthers
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
    <MobileVerifyPopUp
    name="Rajdeep Sengupta" 
    img="https://bit.ly/dan-abramov"  
    />
    </>
  
  )

}







