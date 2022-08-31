import React, {Component} from 'react';
import MyComponent from "../MyComponent/MyComponent";
import FormThreeInput from "../FormThreeInput/FormThreeInput";
import FormTwoInput from "../FormTwoInput/FormTwoInput";

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
                        <FormThreeInput/>
                        <FormTwoInput/>
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