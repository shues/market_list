import './App.css';
import ListContainer from './containers/list';
import ControlsContainer from './containers/controls';

function App() {
  return (
    <div className="App">
      <ControlsContainer />
      <ListContainer />
    </div>
  );
}

export default App;
