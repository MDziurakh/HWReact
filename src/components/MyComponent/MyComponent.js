import React, {Component} from 'react';

class MyComponent extends Component {

    render() {
        const text=this.props.text;
        return (
            <p>
                {text}
            </p>
        );
    }
}

export default MyComponent;