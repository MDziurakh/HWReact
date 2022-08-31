import React, {Component} from 'react';
import FormResult from "../FormResult/FormResult";

class FormThreeInput extends Component {

    state= {
        name: '',
        number:'',
        password:'',
        isSubmitted: false
    }

    sendInfo(e){
        e.preventDefault();
        this.setState({isSubmitted: true})

    }

    onChange = (e) => {
        this.setState({isSubmitted : false})
        const {value} = e.target;
        const name = e.target.name;

        this.setState(()=> ({[name]:value})
        )
    }


    render() {
        return (
            <form onSubmit={(e)=> this.sendInfo(e)}>
                {/*<InputForm type='text' name='name' value={this.state.value} placeholder='text' onChange={this.onChange}/>*/}
                <input type='text' name='name' value={this.state.value} placeholder='name' onChange={this.onChange}/>
                <input type='number' name='number' value={this.state.number} placeholder='number' onChange={this.onChange}/>
                <input type='password' name='password' value={this.state.password} placeholder='password' onChange={this.onChange}/>
                <input type="submit" value='Submit' />
                {this.state.isSubmitted &&
                    <FormResult props={this.state}
                        // name={this.state.name} number={this.state.number} password={this.state.password}
                    />}
            </form>
        );
    }
}

export default FormThreeInput;