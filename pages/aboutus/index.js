import Document from "../document";
import Navbar from "../Components/Navbar";
import GeneralSidebar from "../Components/GeneralSidebar";



export default function AboutUs() {
    return (
        <>
            <Document />
            <Navbar />
            <GeneralSidebar title="About Us" />
            <div className="lg:w-[calc(100%-300px)] ">
                <div className="lg:ml-[calc(300px+4vw)] text-center w-11/12 mx-auto lg:text-left">
                    <h1 className="text-4xl font-semibold mt-14 mb-4 text-center">About Us</h1>
                    <div className="grid sm:grid-cols-2  mt-14">
                        <div className="m-auto">
                            <img src="/debajyoti.png" alt="Debajyoti Saha Image" />
                            <h1 className="text-center text-xl font-semibold">Debajyoti Saha</h1>
                            <p className="text-center max-w-[20rem] mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="m-auto mt-10 sm:m-auto">
                            <img src="/rajdeep.png" alt="Rajdeep Sengupta Image" />
                            <h1 className="text-center text-xl font-semibold">Rajdeep Sengupta</h1>
                            <p className="text-center max-w-[20rem] mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="lg:flex sm:mt-40 mt-20">
                        <div>
                            <h2 className="text-2xl font-semibold my-5">Our Motto</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At egestas blandit egestas mattis enim faucibus pellentesque eu. Lectus commodo faucibus a at aliquam blandit ac. Aliquam congue velit sed diam, neque et nibh dictumst purus. Sit tempor rutrum vel in amet nisl, porttitor gravida.</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At egestas blandit egestas mattis enim faucibus pellentesque eu. Lectus commodo faucibus a at aliquam blandit ac. Aliquam congue velit sed diam, neque et nibh dictumst purus. Sit tempor rutrum vel in amet nisl, porttitor gravida.</p>
                        </div>
                        <div className="lg:ml-10 flex justify-center">
                            <img src="/aboutus1.png" alt="" className="min-w-[300px] mt-5" />
                        </div>
                    </div>
                    <div className="lg:flex flex flex-col-reverse lg:flex-row mt-20">
                        <div className="lg:mr-10 flex justify-center">
                            <img src="/aboutus2.png" alt="" className="min-w-[350px] mt-5" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold my-5">Our Goals</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At egestas blandit egestas mattis enim faucibus pellentesque eu. Lectus commodo faucibus a at aliquam blandit ac. Aliquam congue velit sed diam, neque et nibh dictumst purus. Sit tempor rutrum vel in amet nisl, porttitor gravida.</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At egestas blandit egestas mattis enim faucibus pellentesque eu. Lectus commodo faucibus a at aliquam blandit ac. Aliquam congue velit sed diam, neque et nibh dictumst purus. Sit tempor rutrum vel in amet nisl, porttitor gravida.</p>
                        </div>
                    </div>
                    <div className="lg:flex mt-20">
                        <div>
                            <h2 className="text-2xl font-semibold my-5">Contact us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At egestas blandit egestas mattis enim faucibus pellentesque eu. Lectus commodo faucibus a at aliquam blandit ac. Aliquam congue velit sed diam, neque et nibh dictumst purus. Sit tempor rutrum vel in amet nisl, porttitor gravida.</p>
                            <button className="bg-skin-lightBlue text-skin-darkBlue p-2 px-6 text-xl font-bold rounded-lg mt-10 hover:bg-skin-hoverBlue">Contact</button>
                        </div>
                        <div className="lg:ml-48 flex justify-center sm:w-[600px] m-auto">
                        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_eBcQGa.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}