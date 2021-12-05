import Document from "../document";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";

export default function FAQs() {
    return (
      <>  
      <Document />
      <Navbar/>
      <GeneralSidebar title="FAQ"/>
      <div className="lg:w-[calc(100%-300px)] ">
      <div className="lg:ml-[calc(300px+4vw)] text-center w-11/12 mx-auto lg:text-left">
      <h1 className="text-4xl font-semibold mt-14 mb-4">Have Questions try finding them Below</h1>
      <p className="mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At egestas blandit egestas mattis enim faucibus pellentesque eu. Lectus commodo faucibus a at aliquam blandit ac. Aliquam congue velit sed diam, neque et nibh dictumst purus. Sit tempor rutrum vel in amet nisl, porttitor gravida.</p>
      </div>
      </div>
      <div className="lg:ml-[300px]">
      <FAQ />  
      </div>
      <div  className="lg:w-[calc(100%-300px)] ">
      <div className="lg:ml-[calc(300px+4vw)] text-center w-11/12 mx-auto lg:text-left">
      <h1 className="text-4xl font-semibold mt-14 mb-4 inline-block">Have Questions other than this?</h1>
      <button className="inline-block bg-skin-lightBlue text-skin-darkBlue p-2 text-xl font-bold rounded-lg lg:ml-10 hover:bg-skin-hoverBlue">Contact</button>
      </div>
      </div>
      </>

    )
  }