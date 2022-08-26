import './App.scss';
import MyComponent from "./components/MyComponent/MyComponent";


function App() {
  return (
    <div className="App">
        <div className='container'>
            <header>
                <MyComponent text='Hi! I`m here!'/>
            </header>
            <main>
                <MyComponent text='And here!'/>
            </main>
            <footer>
                <MyComponent text='And here!'/>
            </footer>
        </div>
    </div>
  );
}

export default App;
