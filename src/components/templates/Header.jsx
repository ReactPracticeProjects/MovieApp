import React from "react";

function Header({ wallpaper }) {
  if (!wallpaper || (!wallpaper.backdrop_path && !wallpaper.poster_path)) {
    return (
      <div className="mx-5 my-5 h-[35vh] bg-gray-800 flex items-center justify-center text-white text-xl">
        No Image Available
      </div>
    );
  }

  return (
    <div className="mx-5 my-5 h-[35vh] flex bg-[#1f1e24] rounded-lg overflow-hidden shadow-lg">
      {/* Left Side - Image */}
      <div className="w-1/2 h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.poster_path}`}
          alt={wallpaper.title || wallpaper.original_title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Info */}
      <div className="w-1/2 flex flex-col justify-center p-8 text-white">
        <h1 className="text-4xl font-bold">{wallpaper.title || wallpaper.original_title}</h1>
        <p className="mt-3 text-sm opacity-80 leading-relaxed line-clamp-3">
          {wallpaper.overview ? wallpaper.overview.slice(0, 200) + "..." : "No description available."}
        </p>

        {/* Details */}
        <div className="mt-4 flex items-center space-x-5 text-sm">
          {wallpaper.release_date && (
            <span className="flex items-center space-x-2 bg-gray-700 bg-opacity-60 px-3 py-1 rounded-md">
              📅 <span>{wallpaper.release_date}</span>
            </span>
          )}
          {wallpaper.vote_average && (
            <span className="flex items-center space-x-2 bg-yellow-500 text-black px-3 py-1 rounded-md font-semibold">
              ⭐ <span>{wallpaper.vote_average.toFixed(1)}</span>
            </span>
          )}
        </div>

        {/* Watch Now Button */}
        <button className="mt-5 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md transition-all duration-300">
          ▶ Watch Now
        </button>
      </div>
    </div>
  );
}

export default Header;
