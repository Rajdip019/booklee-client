import Navbar from "./Components/Navbar"
import Document from "./document"

import ToggleButton from "./Components/ToggleButton"


import FilterM from "./Components/FilterM"




export default function Home() {
  return (
    <>  
    <Document />

    <Navbar/>
    <ToggleButton/>

    {/* <ProgressChecker/> */}


    <FilterM />
    

    </>
  
  )
}