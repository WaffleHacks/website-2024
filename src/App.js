import './App.css';
import blueberry from './images/blueberry.svg';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
      <img src={blueberry} />
      <h1 className='title'>WaffleHacks 2024</h1>
      <h1 className='secondary'>Coming Soon!?!</h1>
    </div>
  );
}

export default App;
