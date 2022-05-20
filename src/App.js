import './App.css';
import {useEffect, useRef} from "react";
import BottomLayer from './components/bottomLayer/BottomLayer';
import InfoCard from './components/infoCard/InfoCard';
import MainContent from './components/mainContent/MainContent';
import Nav from './components/nav/Nav';
import {gsap} from 'gsap';

function App() {
  let timeline = gsap.timeline({repeat: 0});
  const mainContent = useRef(null)
  const infoCard = useRef(null)
  const bottomLayer = useRef(null)

  useEffect(() => {
   timeline.set(infoCard.current, {
     y: 100,
     opacity: 0,
   });
   timeline.to(infoCard.current, {
     y: 0,
     opacity: 1,
     duration: 2
    });
    timeline.set(bottomLayer.current, {
      y: 200,
    });
    timeline.to(bottomLayer.current, {
      y: 0,
      opacity: 1,
      duration: 2
    })
    timeline.set(mainContent.current, {
      y: 30,
    });
    timeline.to(mainContent.current, {
      y: 0,
      opacity: 1,
      duration: 3
    }, "-=1")
    
    setTimeout(() => {
      timeline.pause();
    }, 4900);
  }, [])

  return (
    <>
      <Nav />
      <div className="mainContent" ref={mainContent}>
      <MainContent />
      </div>
      <div className="infoCard" ref={infoCard}>
      <InfoCard />
      </div>
      <div className="bottomLayer" ref={bottomLayer}>
      <BottomLayer />
      </div>
    </>
  );
}

export default App;