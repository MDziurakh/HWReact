import React, {Component} from 'react';

class MyComponent extends Component {

    render() {
        const text=this.props.text;
        return (
            <span>
                {text}
            </span>
        );
    }
}

export default MyComponent;