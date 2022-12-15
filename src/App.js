import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Reviews from './components/Reviews';
import Rating from './components/Rating';
import Analysis from './components/Analysis';
import Visitors from './components/Visitors';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Reviews/>
      <Rating/>
      <Analysis/>
      <Visitors/>
    </div>
  );
}

export default App;
