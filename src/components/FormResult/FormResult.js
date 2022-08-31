import React from 'react';

const FormResult = (props
    // {name, number, password}
    ) => {

    return (
        <p>
            {JSON.stringify(props)}
        </p>
    );
};

export default FormResult;