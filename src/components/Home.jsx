import React from "react";
import Sidebar from "./templates/Sidebar";
import TopNavbar from "./templates/TopNavbar";

function Home() {
  document.title = "Movie App | HomePage";
  return (
    <div className="w-full h-full bg-[#1f1e24] flex">
      <Sidebar />
      <div className="w-[80%] h-full">
        <TopNavbar/>
      </div>
    </div>
  );
}

export default Home;
