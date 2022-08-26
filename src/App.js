import './App.scss';
import MyComponent from "./components/MyComponent/MyComponent";
import Names from "./components/Names/Names";
import { v4 as uuidv4 } from 'uuid';

const namesArr =[
    {name:"John", id:uuidv4()},
    {name:'Joe', id:uuidv4()},
    {name:'Baykar', id:uuidv4()},
    {name:'Boris', id:uuidv4()},

];




function App() {
  return (
    <div className="App">
        <div className='container'>
            <header>

            </header>
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
