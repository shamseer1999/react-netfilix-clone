
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost';
import {action,Originals} from './urls'

function App() {
  return (
    <div className="App" style={{background:'#000'}}>
      <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
