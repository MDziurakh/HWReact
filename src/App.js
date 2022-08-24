import './App.scss';
import FirstSimpleComponent from "./components/FirstSimpleComponent/FirstSimpleComponent";

function App() {
  return (
    <div className="App">
        <p>Hello world</p>
        <FirstSimpleComponent src={'/images/meme.jpeg'} alt='alternative text' text='Hello! I`m text!'/>
    </div>
  );
}

export default App;
