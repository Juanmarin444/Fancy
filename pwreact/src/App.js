import { useRef, useEffect } from 'react'
import vid from './video.mp4'
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { scroll } from './scroll.js'
import About from './pages/Projects'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer.js'

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
          <h3>{`Hi, I'm`}</h3>
          <h1>Juan Marin</h1>
          <h3>Take a look at my Portfolio</h3>
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
