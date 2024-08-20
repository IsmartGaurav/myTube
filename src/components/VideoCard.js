import React from 'react'
import { useSelector } from 'react-redux';

const formatViewCount = (count) => {
    if (count >= 1e6) return `${(count / 1e6).toFixed(1)}M`;
    if (count >= 1e3) return `${(count / 1e3).toFixed(1)}K`;
    return count;
}

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {title,channelTitle,thumbnails} = snippet;
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const maxTitleLength = 80; // Set your desired max length
    const truncatedTitle = title.length > maxTitleLength ? title.slice(0, maxTitleLength) + '...' : title;
  return (
    <div className={`w-96 p-3 m-auto hover:shadow-xl rounded-md hover:scale-95 transition-transform duration-300 ${isMenuOpen ? "mx-1" : "mx-7"}`}>
        <img className='rounded-lg w-96' alt='thumbnails' src={thumbnails.medium.url}/>
        <h1 className='font-bold mt-2'>{truncatedTitle}</h1>
        <p className='font-medium'>{channelTitle}</p>
        <p>{formatViewCount(statistics.viewCount)} views</p>
    </div>
  )
}

export default VideoCard