import Document from "../document";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";


export default function ThankYou() {
    return (
        <>
            <Document />
            <Navbar />
            <GeneralSidebar title="Contact Us" />
            <div className="lg:w-[calc(100%-300px)] ">
                <div className="lg:ml-[calc(300px+4vw)]  w-11/12 mx-auto ">
                    <h1 className="text-center text-4xl font-semibold mt-14">Let's Connect for Good</h1>
                    <div className="grid md:grid-cols-2">
                        <div className="my-auto mt-24 mx-auto">
                            <h2 className="text-lg my-5">Please Fill the form:</h2>
                            <h3 className="my-1">Enter Your Email</h3>
                            <input className="md:w-[35vw] w-[85vw]" type="email" placeholder="john@gmail.com" required/>
                            <h3 className="my-1">Write down your concern</h3>
                            <textarea className="md:w-[35vw] w-[85vw]" type="text" placeholder="Write a message to us." required/>
                            <button className="bg-skin-lightBlue text-skin-darkBlue p-2 px-6 text-xl font-bold rounded-lg mt-10 hover:bg-skin-hoverBlue" type="submit">Submit</button>
                        </div>
                        <div className="lg:ml-48 flex justify-center sm:max-w-[400px] m-auto">
                        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_eBcQGa.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                        </div>
                    </div>
                    <h1 className="mt-16 text-center"><b> Or mail us at: </b> rajdeepdebajyoti@gmail.com</h1>
                </div>
            </div>
        </>
    )
}