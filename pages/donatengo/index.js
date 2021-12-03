import Document from "../document";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";
import DonationMainCounter from "../Components/DonationMainCounter";


export default function ProductDetailsSellPage() {
    return (
      <>  
      <Document />
      <Navbar/>
      <GeneralSidebar title="Donate to NGO"/>
      <div className="lg:ml-[300px]">
      <DonationMainCounter />  
      </div>
      </>
    )
  }