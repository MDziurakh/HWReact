import React, {Component} from 'react';
import MyComponent from "../MyComponent/MyComponent";
import ShowButton from "../ShowButton/ShowButton";

class Page extends Component {

    state = {
        visibility:true
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <header>
                        <MyComponent text='I`m here!' />
                    </header>
                    <main>
                        <button> Click me! </button>

                    </main>
                    <footer>
                        <MyComponent text='And here!' />
                    </footer>
                </div>
            </div>
        );
    }
}

export default Page;