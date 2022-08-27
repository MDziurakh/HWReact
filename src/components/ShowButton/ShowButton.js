import React, {Component} from 'react';
import './ShowButton.scss'

class ShowButton extends Component {

    state={
        visibility:true
    }

    render() {
        if(this.state.visibility) {

            return (
                <div className='show_el'>

                </div>
            );
        }
        else {
            return (
                <div>
                    nope
                </div>
            )
        }
    }
}

export default ShowButton;