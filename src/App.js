import './App.scss';
import MyComponent from "./components/MyComponent/MyComponent";
import Names from "./components/Names/Names";

const namesArr =[
    'John', 'Joe', 'Baykar', 'Boris', 'John', 'Joe', 'Boris'
];

function App() {
  return (
    <div className="App">
        <div className='container'>
            <header></header>
            <main>
                <MyComponent />
            </main>
            <footer>
                <Names names={namesArr}/>
            </footer>
        </div>
    </div>
  );
}

export default App;
