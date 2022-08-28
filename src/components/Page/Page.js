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
                        <button onClick={()=>this.setState({visibility:!this.state.visibility})} > Click me! </button>
                        {this.state.visibility && <ShowButton visibility={false} />}
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