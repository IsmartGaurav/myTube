import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-xl w-40 pl-3 mr-2 h-screen pb-4 text-lg fixed font-semibold bg-white xs:top-12 xs:left-0 xs:w-44 xs:h-70% xs:z-50 sm:left-0 sm:w-40 sm:h-full sm:z-50 sm:top-12 md:w-40 md:top-12">
      <ul className="ml-2 mt-2 cursor-pointer">
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/material-rounded/24/home.png" alt="home" />
          <Link to='/'>Home</Link>
        </li>
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/material-rounded/24/youtube-shorts.png" alt="youtube-shorts" />
          Shorts
        </li>
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-subscription-multimedia-anggara-basic-outline-anggara-putra.png" alt="external-subscription-multimedia" />
          Subscription
        </li>
      </ul>
      <h1 className="font-bold mt-2">Explore</h1>
      <ul className="ml-2 cursor-pointer">
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/ios-glyphs/30/musical.png" alt="musical" />
          Music
        </li>
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/ios-glyphs/30/movie--v2.png" alt="movie--v2" />
          Movies
        </li>
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/ios-glyphs/30/google-news.png" alt="google-news" />
          News
        </li>
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/ios-glyphs/30/ps-controller.png" alt="ps-controller" />
          Gaming
        </li>
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/ios-glyphs/30/radio-waves.png" alt="radio-waves" />
          Live
        </li>
      </ul>
      <h1 className="font-bold my-3">For You</h1>
      <ul className="ml-2 cursor-pointer">
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/ios-glyphs/30/video-playlist.png" alt="video-playlist" />
          Your Channel
        </li>
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/ios-glyphs/30/--pocket-watch.png" alt="--pocket-watch" />
          Watch Later
        </li>
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/material-rounded/24/facebook-like--v1.png" alt="facebook-like--v1" />
          Liked Videos
        </li>
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/ios-filled/50/video-playlist.png" alt="video-playlist" />
          Playlists
        </li>
        <li className="flex items-center mb-3">
          <img className="h-4 w-4 mr-1" src="https://img.icons8.com/ios/50/time-machine--v1.png" alt="time-machine--v1" />
          History
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
