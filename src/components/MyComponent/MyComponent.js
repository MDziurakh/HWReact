import React, {Component} from 'react';
import './MyComponent.js.scss'

class MyComponent extends Component {

    state = {
        value:0
    }

    countUp(){
        this.setState((state)=>({value:state.value+1}))
    }

    countDown(){
        this.setState((state)=>({value:state.value-1}))
    }

    render() {

        return (
            <div>
                <button className='btn_counter'  onClick={()=>this.countUp()}>Counter++</button>
                <button className='btn_counter'  onClick={()=>this.countDown()}>Counter--</button>
                <p className='counter'>{this.state.value}</p>
            </div>
        );
    }
}

export default MyComponent;