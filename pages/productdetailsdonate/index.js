// URL: productdetailsdonate

import Document from "../document";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";
import ProductDetailsDonation from "../Components/ProductDetailsDonation";
import SellerDonaterDetails from "../Components/Seller-DonaterDetails";
import Footer from "../Components/Footer";


export default function ProductDetailsDonate() {
    return (
      <>  
      <Document />
      <Navbar/>
      <GeneralSidebar title="Book Details"/>
      <div className=" mr-6 lg:ml-[300px] my-10">
      <ProductDetailsDonation 
        name="Atomic Habits"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1dvD6I9WaCRlb9BOPudHwC32EaKI47lbEw&usqp=CAU"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
        author="John Doe"
        condition="4.5"
        adress="Belghoria, Kolkata"
      />
      </div>
      <div className="lg:ml-[300px]">
      <SellerDonaterDetails
            name= "Rajdeep Sengupta"
            img = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            phno=" 89565231153"
            adress= "Brlghoria Kolkata"
      />
      </div>
      <div className="lg:ml-[300px]">
          <Footer />
      </div>

      </>
    )
  }