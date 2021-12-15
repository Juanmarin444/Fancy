import { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { scroll } from './scroll.js'
// components
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer.js'
// media and styles
import vid from './video.mp4'
import './App.css';

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  const videoRef = useRef(null)

  useEffect(() => {
    scroll(gsap, videoRef)
  })
  
  return (
    <div className="container">
      <main className="main" id="main">
        <div className="header">
          <h1 className="subHeader">{`Hi, I'm`}</h1>
          <h1 className="mainHeader">Juan Marin</h1>
          <h1 className="subHeader">Take a look at my Portfolio</h1>
        </div>
        <div className="blend"></div>
        <video ref={videoRef} src={vid} className="video-background" muted preload='auto' playsInline webkit-playsinline="true" sophis-video-control="true"></video>
      </main>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
