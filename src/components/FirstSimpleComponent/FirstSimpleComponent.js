import React, {Component} from 'react';
import './FirstSimpleComponent.scss'

class FirstSimpleComponent extends Component {

    render() {
        return (
            <div>
                <img src={this.props.src} alt={this.props.alt}/>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default FirstSimpleComponent;