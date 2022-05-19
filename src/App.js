import './App.css';
import BottomLayer from './components/bottomLayer/BottomLayer';
import InfoCard from './components/infoCard/InfoCard';
import MainContent from './components/mainContent/MainContent';
import Nav from './components/nav/Nav';
import Icon from './assets/icon';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainContent />
      <InfoCard />
      <BottomLayer />
    </div>
  );
}

export default App;
