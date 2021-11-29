import React from 'react'

const GeneralSidebar = (props) => {
    return (
        <div className="hidden lg:block">
            <div className="w-[300px] h-[90vh] shadow-xl bg-sidebar-pattern float-left absolute text-center">
                <h1 className="font-rokkitt font-extrabold text-7xl text-center mt-28">{props.title}</h1>
                <button className=" bg-skin-darkBlue text-skin-lightBlue p-2 text-xl rounded-lg relative top-[55vh] hover:bg-blue-700">Back to Home</button>
            </div>
        </div>
    )
}

export default GeneralSidebar
