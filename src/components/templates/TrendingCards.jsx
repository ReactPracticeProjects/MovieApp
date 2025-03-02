import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from '../../utils/axios';
import Loading from '../Loading'
import Dropdown from './DropDown';

function TrendingCards() {

   const [trendingdata,setTrendingdata] = useState(null);

   const gettrendingdata = async ()=>{
    try{
        
      const { data} = await axios.get("trending/all/day");
      setTrendingdata(data.results)
      console.log(data.results)

    }catch(error){
      console.log(error)
    }
   }

   useEffect(()=>{
    gettrendingdata();
   },[])
    

  return (
    <>
     <div className="w-full bg-[#121212] py-4">
      <div className='flex justify-between mb-2'>
      <h2 className="text-white text-xl font-semibold px-6 mb-2">🔥 Trending Now</h2>
      <Dropdown />
      </div>
    
    <div className="w-full flex gap-4 overflow-x-auto px-6 pb-3 scrollbar-hide">
      
      {trendingdata ? trendingdata.map((item, index) => (
        <Card key={index} index={index}  item = {item}/>
      )):<Loading/>}
    </div>
  </div>

  
    </>

   );
}

export default TrendingCards;
