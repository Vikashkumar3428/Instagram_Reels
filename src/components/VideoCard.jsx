import React, { useRef, useState} from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(isVideoPlaying)
        {
            videoRef.current.pause();
            setIsVideoPlaying(false);  // Used false for stopping
        }
        else{
            videoRef.current.play();
            setIsVideoPlaying(true);  // Used True for Playing
        }

    }
    return (
        <div className='videoCard'>
           <VideoHeader/>
           <video
            ref = {videoRef}
            onClick={onVideoPress}
            className ="videoCard__player"
            src={url}
            alt="IG reel video" 
            loop
            />
            <VideoHeader
            />
            <VideoFooter
             channel = {channel}
             likes = {likes}
             shares = {shares}
             avatarSrc = {avatarSrc}
             song = {song} 
            />

        </div>
    )
}

export default VideoCard;
