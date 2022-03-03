import logo from './logo.svg';
import './App.css';
import Timeline from './components/Timeline';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Faq from './components/Faq';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Landing />
      <About/>
      <Timeline/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
