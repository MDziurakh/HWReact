import React from 'react';
import './Names.scss'


const Names = (props) => {

    const arr = props.names.map((item) =>
    <li key={item.id}> {item.name}</li>
    )

    return (
        <div>
            {arr}
        </div>
    );
};

export default Names;