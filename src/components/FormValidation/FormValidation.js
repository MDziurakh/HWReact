import React, {Component} from 'react';
import styles from './FormValidation.module.scss'
import ValidateInput from "../ValidateInput/ValidateInput";
// Создайте компонент формы, добавьте поддержку sass в проект - стилизуйте форму с помощью sass.
// Добавьте поддержку css модулей в проект, используйте их при написании стилей.
// Добавьте валидацию на поле формы.
// Если при отправке поле является не валидным - должен добавится стиль, при котором border данного поля должен стать красного цвета,
// а также форма не должна отправиться.
// Отправкой можно считать вывод строки «submit success» в консоли.

class FormValidation extends Component {

    state = {
        name:'',
        password:'',
        passState:null,
        nameState:null,
        inputValidation: null,
        passValidation: null,
        formValidator: null

    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value}, ()=>{
            this.validator()
        })

    }

    handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state)
        this.formValidator()

    }


    formValidator = () =>{
        if(this.state.nameState && this.state.passState){
            console.log('Submit success')
        }
    }

    validator = () =>{
        const {name, password} = this.state;
        if(name.trim().length>5){
            this.setState({nameState:true})
            this.setState({inputValidation: styles.valid})
            // console.log(this.state)
        } else{
            this.setState({nameState:false})
            this.setState({inputValidation: styles.invalid})
        }

        if(password.trim().length>5){
            this.setState({passState:true})
            this.setState({passValidation: styles.valid})
            // console.log(this.state)
        } else{
            this.setState({passState:false})
            this.setState({passValidation: styles.invalid})
        }

    }

    render() {
        return (
            <form className={styles.validForm} onSubmit={this.handleSubmit}>
                <ValidateInput warning={this.state.nameState} name='name' type='name' message='Name can`t be shorter than 6' className={this.state.inputValidation} value={this.state.name} onChange={(e)=>this.handleChange(e)}/>
                <ValidateInput warning={this.state.passState} name='password' type='password' message='Password can`t be shorter than 6' className={this.state.passValidation} value={this.state.password} onChange={(e)=>this.handleChange(e)} />
                <input type='submit' value='Send'/>
            </form>
        );
    }
}

export default FormValidation;