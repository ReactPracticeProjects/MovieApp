import React, { useEffect, useState } from "react";
import Sidebar from "./templates/Sidebar";
import TopNavbar from "./templates/TopNavbar";
import Header from "./templates/Header";
import axios from "../utils/axios";
import TrendingCards from "./templates/TrendingCards";

function Home() {
  document.title = "Movie App | HomePage";

  const [wallpaper, setWallpaper] = useState(null);

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get("trending/all/day");
      if (data.results.length > 0) {
        let randomIndex = Math.floor(Math.random() * data.results.length);
        let selectedWallpaper = data.results[randomIndex];
        setWallpaper(selectedWallpaper);
      }
    } catch (error) {
      console.log("Error fetching wallpaper:", error);
    }
  };

  useEffect(() => {
    getWallpaper();
  }, []);

  return (
    <div className="w-full h-full bg-[#1f1e24] flex">
      <Sidebar />
      <div className="w-[80%] h-full overflow-y-auto">
        <TopNavbar />
        <Header wallpaper={wallpaper} />
        <TrendingCards/>
      </div>
    </div>
  );
}

export default Home;
