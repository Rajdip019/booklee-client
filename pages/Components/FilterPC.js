import React from 'react'

const FilterPC = () => {
    return (
        <>
            <div className="w-[300px] text-center shadow-2xl h-[100vh]">
                <h1 className="text-3xl font-semibold py-10">Filter</h1>
                <div>
                    <h2 className="text-left pl-10 text-xl font-semibold py-3">Price</h2>
                    <input type="range" className="w-9/12"/>
                    <div>

                    </div>
                </div>
                <div  className="mt-10">
                    <h2 className="text-left pl-10 text-xl font-semibold py-3">Condition</h2>
                    <div className="text-left pl-10 mt-1">
                    <input type="checkbox" name="4" className="w-2 h-2 "/>
                    <label for="4" className="pl-2">4 Star and above</label>
                    </div>
                    <div className="text-left pl-10 mt-1">
                    <input type="checkbox" name="3" className="w-2 h-2 "/>
                    <label for="3" className="pl-2">3 Star and above</label>
                    </div>
                    <div className="text-left pl-10 mt-1">
                    <input type="checkbox" name="all" className="w-2 h-2 "/>
                    <label for="all" className="pl-2">All</label>
                    </div>
                </div>
                <div  className="mt-10">
                <h2 className="text-left pl-10 text-xl font-semibold py-3">Category</h2>
                    <div className="text-left pl-10 mt-1">
                    <input type="checkbox" name="4" className="w-2 h-2 "/>
                    <label for="4" className="pl-2">Educational</label>
                    </div>
                    <div className="text-left pl-10 mt-1">
                    <input type="checkbox" name="3" className="w-2 h-2 "/>
                    <label for="3" className="pl-2">Story</label>
                    </div>
                    <div className="text-left pl-10 mt-1">
                    <input type="checkbox" name="all" className="w-2 h-2 "/>
                    <label for="all" className="pl-2">Sci-fi</label>
                    </div>
                    <div className="text-left pl-10 mt-1">
                    <input type="checkbox" name="all" className="w-2 h-2 "/>
                    <label for="all" className="pl-2">Documentry</label>
                    </div>
                </div>
                <div  className="mt-10">
                    <h2 className="text-left pl-10 text-xl font-semibold py-3">Locations</h2>
                   <select name="" id="" className="block ml-10 mt-1 w-9/12">
                       <option value="">Select a State</option>
                   </select>
                   <select name="" id="" className="block ml-10 mt-3 w-9/12">
                       <option value="">Select a City</option>
                   </select>
                </div>
            </div>
        </>
    )
}

export default FilterPC
