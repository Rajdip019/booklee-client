import react from "react"
import Document from "./document"
import Modals from "./Components/modal"

function UserdetailsEducational(user){
  return(
  <UserProfileOthers
  name={user.Name}
  img={user.Photo}
  location={user.Location}
  />
  )
}

export default function Home() {
  return (
    <>  
    <Document />
    <Modals />
    </>
  
  )

}







