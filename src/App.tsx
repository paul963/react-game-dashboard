import Navbar from './components/Header/Navbar';
import GamesContainer from './components/Games/GamesContainer';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 h-50'><Navbar /></div>
      </div>
      <div className='row'>
        <div className='sidebar col-md-1 col-12'>side</div>
        <div className='main col-md-11 col-12'>
          <GamesContainer />
        </div>
      </div>
    </div>
  )
}

export default App
