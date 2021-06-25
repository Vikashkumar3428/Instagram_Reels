import React, { useEffect, useState } from 'react'
import './App.css';
import VideoCard from './components/VideoCard';
import db from './components/Firebase';
function App() {
  const [reels, setReels] = useState([]);

  useEffect(()=>{
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  },[])
  return (
    <div className="app">
      <div className="app__top">
        <img className = "app__logo" 
        src="https://e7.pngegg.com/pngimages/792/947/png-clipart-instagram-logo-social-media-instagram-login-facebook-advertising-instagram-text-logo.png"
        alt="Insta Logo" />

        <h1>Reels</h1>
        
      </div>
      <div className="app__videos">
        {reels.map(reel => (
          <VideoCard 
          channel = {reel.channel}
          avatarSrc= {reel.avatarSrc}
          song = {reel.song}
          url= {reel.url}
          likes = {reel.likes}
          shares = {reel.shares}
          />
        ))}
          
      </div>
    </div>
  );
}


export default App;
