import React, {useState} from 'react';

const FormTwoInput = () => {

    const [number, setFirstNumber] = useState('0')
    const [number1, setSecNumber] = useState('')
    const [on05, setOn05] = useState('')
    const [on005, setOn005] = useState('')

    function onChange(e) {
        setFirstNumber(e.target.value)
        showInP(Number(e.target.value))
    }


    function showInP(number){
        setOn05(number*0.5)
    }

    function onChange1(e) {
        setSecNumber(e.target.value)
        showInP1(Number(e.target.value))
    }


    function showInP1(number){
        setOn005(number*0.05)
    }

    return (
        <div>
            <input type='number' value={number} placeholder='0' onChange={onChange} />
            <p>Your number * 0.5 = {on05}</p>
            <br/>
            <input type='number' value={number1} placeholder='0' onChange={onChange1} />
            <p>Your number * 0.05 = {on005}</p>
        </div>
    );
};

export default FormTwoInput;