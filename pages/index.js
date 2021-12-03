import Document from "./document"
// import HomePageMain from "./Components/HomePageMain"
import Navbar from "./Components/Navbar"

import NewlyAddedHome from "./Components/NewlyAddedHome"
import GetBooksHome from "./Components/GetBooksHome"
import TopFreeBooksHome from "./Components/TopFreeBooksHome"
import TopStoryBooksHome from "./Components/TopStoryBooksHome"
import DonateBottomHome from "./Components/DonateBottomHome"
import Footer from "./Components/Footer"





export default function Home() {
  return (
    <>  
    <Document />
    <Navbar/>

    <HomePageMain />
    <NewlyAddedHome />
    <GetBooksHome />
    <TopFreeBooksHome />
    <TopStoryBooksHome />
    <DonateBottomHome />
    <Footer />

    </>
  )
}