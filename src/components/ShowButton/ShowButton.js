import React, {Component} from 'react';
import './ShowButton.scss'

class ShowButton extends Component {


    componentDidMount() {
        alert('Компонент відкрився')
    }

    componentWillUnmount() {
        alert('Компонент заховався')
    }

    render() {
            return (
                <div className='show_el'>
                </div>
            );
    }
}

export default ShowButton;