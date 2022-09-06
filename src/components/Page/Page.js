import React, {Component} from 'react';
import MyComponent from "../MyComponent/MyComponent";
import FormValidation from "../FormValidation/FormValidation";
// import FormThreeInput from "../FormThreeInput/FormThreeInput";
// import FormTwoInput from "../FormTwoInput/FormTwoInput";

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
                        <FormValidation/>
                        {/*<FormThreeInput/>*/}
                        {/*<FormTwoInput/>*/}
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