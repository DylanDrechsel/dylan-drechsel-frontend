import './App.scss';
import Navigation from './Global/Navigation/Navigation';
import Public from './Public/Public';
import Private from './Private/Private';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Public />
      <Private />
    </div>
  );
}

export default App;
