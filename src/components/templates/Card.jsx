import React from "react";

function Card({item,index}) {
    {/* src={`https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.poster_path}`} */}
  return (
    <div
      className="relative min-w-[180px] md:min-w-[200px] h-[250px] rounded-lg overflow-hidden shadow cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-purple-600 scrollbar-hidden"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Trending ID Badge */}
      <div className="absolute top-2 left-2 bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
        #{index + 1}
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Movie Title */}
      <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2 font-semibold">
        {item.title || item.name}
      </div>
    </div>
  );
}

export default Card;
