import React from 'react';
import styles from "../FormValidation/FormValidation.module.scss";

const ValidateInput = (props) => {
    const{value, name, type, onChange, className, message, warning} = props;
    let tip;
    if(warning === false){
        tip = <p>{message}</p>
    }
    return (
        <>
         <input value={value} type={type} className={className} name={name} onChange={onChange}/>
            {tip}
        </>
    );
};

export default ValidateInput;