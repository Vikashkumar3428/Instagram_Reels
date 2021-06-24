import './App.css';
import VideoCard from './components/VideoCard';
function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img className = "app__logo" 
        src="https://e7.pngegg.com/pngimages/792/947/png-clipart-instagram-logo-social-media-instagram-login-facebook-advertising-instagram-text-logo.png"
        alt="Insta Logo" />

        <h1>Reels</h1>
        
      </div>
      <div className="app__videos">
          <VideoCard 
          channel = "Channel Name"
          avatarSrc='http://www.zooniverse.org/assets/simple-avatar.png'
          song = "Test Song - ssssangha"
          url='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
          likes = {950}
          shares = {30}
          />
      </div>
    </div>
  );
}

export default App;
