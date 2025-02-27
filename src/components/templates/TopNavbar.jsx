import axios from '../../utils/axios';
import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegFaceFrownOpen } from "react-icons/fa6";
import noimage from '../../../public/noimage.png'




function TopNavbar() {
    const [query,setquery] = useState("")
    const [search,setSearch] = useState([])
   

    const getSearches = async ()=>{
      try {
           const {data }= await axios.get(`/search/multi?query=${query}`)
           console.log(data.results)
           setSearch(data.results)
           
      }catch(error){
        console.log(error)
      }
    }
   


    useEffect(()=>{
      getSearches()
    },[query])
  return (
    <>
     <div className='relative flex justify-center items-center w-full h-[7vh] border-b-2 border-white bg-[#121212] px-4 py-10'>
      
      {/* Search Box */}
      <div className='relative flex items-center w-[50%] max-w-[400px] bg-zinc-800 rounded-full border border-gray-600 focus-within:border-purple-500 transition duration-200'>

        {/* Search Icon */}
        <span className='absolute left-3 text-gray-400 text-xl'>
          <IoMdSearch />
        </span>

        {/* Search Input */}
        <input
          type="text"
          onChange={(e)=>setquery(e.target.value)}
          value={query}
          className='w-full bg-transparent text-white placeholder-gray-400 pl-10 pr-10 py-2 rounded-full outline-none'
          placeholder='Search Anything...'
        />

        {/* Clear (Close) Icon */}
        {query.length > 0 && <span onClick={(e)=>setquery("")} className='absolute right-3 text-gray-400 text-xl cursor-pointer hover:text-white transition'>
          <IoMdClose />
        </span> }
        
        
      </div>

    </div>

   {/* Search Content Display Box (Centered) */}
<div className="absolute  mt-2 left-1/2 transform -translate-x-1/4 w-full max-w-[500px] bg-zinc-900 rounded-md shadow-lg overflow-hidden">
  
  {/* Scrollable Content */}
  <div className="max-h-[300px] overflow-y-auto">
    
    {/* Search Results */}
    {
         search.map((item,index)=>{
          return (
            <Link  key={index}
        
            className="flex items-center gap-3 p-3 border-b border-gray-700 hover:bg-zinc-800 transition duration-200"
            to={`/${index}`}
          >
            <img 
              src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`:noimage }
              alt="Alternate img" 
              className="w-12 h-12 rounded-md object-cover"
            />
            <p className="text-white">{item.name || item.original_name || item.original_title
            }</p>
          </Link>
          )
         })

    }
 

  </div>
</div>


    
    </>
  );
}

export default TopNavbar;
