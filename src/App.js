import './App.css';
import AboutInner from './components/About-inner/About-inner';
import About from './components/About/About';
import Collaborate from './components/Collaborate/Collaborate';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'
import Like from './components/Like/Like';
import Time from './components/Time/Time';
import Use from './components/Use/Use';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Like />
      <Use />
      <Time />
      <Work />
      <Collaborate />
      <About />
      <AboutInner />
      <Footer />
    </div>
  );
}

export default App;
