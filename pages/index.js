import Document from "./document"
import HomePageMain from "./Components/HomePageMain"
import Navbar from "./Components/Navbar"
import DonateBottomHome from "./Components/DonateBottomHome"




export default function Home() {
  return (
    <>  
    <Document />
    <Navbar/>
    <DonateBottomHome/>
    </>
  )
}