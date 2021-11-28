import Document from "./document"


export default function Home() {
  return (
    <>  
    <Document />
    <input type="email" className="px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 " placeholder="Hello"></input>
    <select name="" id="" className="px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 ">
    <option value="">Please Select</option>
    <option value="small">Hello</option>
    <option value="medium">Tata</option>
    <option value="large">Bye Bye</option>
    </select>
    <h1 className="text-center text-9xl underline p-4 text-skin-darkGreen">Hello</h1>
    <h1 className="text-center text-9xl underline p-4 text-skin-darkBlue">Hello</h1> 
    <h1 className="text-center text-9xl underline p-4 text-skin-darkRed">Hello</h1> 
    <h1 className="text-center text-9xl underline p-4 text-skin-lightGreen ">Hello</h1>   
    <h1 className="text-center text-9xl underline p-4 text-skin-lightBlue ">Hello</h1> 
    <h1 className="text-center text-9xl underline p-4 text-skin-lightRed">Hello</h1> 
    <h2 className=" text-7xl  text-center font-extrabold text-blue-700 font-rokkitt">What's Up?</h2>
    <button className=" rounded-md font-extrabold p-3 bg-skin-lightGreen text-skin-darkGreen hover:bg-skin-hoverGreen">This is me</button>
    
    </>
  )
}
