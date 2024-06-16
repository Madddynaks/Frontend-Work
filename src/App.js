import './App.css';
import Navbar from './Common/Navbar';
import Narrow from "./Common/Narrow";
import Home from './Components/Home';
import Posts from './Components/Posts';
import ParentComponent from './Common/ParentComponent';

function App() {
  return (
    <div className="App mb-20">
      <ParentComponent/>
      <Home/>
      <Posts/>
    </div>
  );
}

export default App;
