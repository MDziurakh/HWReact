import React from 'react';
import './Names.scss';
import {v4 as uuidv4} from "uuid";


const Names = (props) => {


    const uniqueNames = new Set(props.names);
    const uniqueArr = Array.from(uniqueNames);
    const lastArr = uniqueArr.map((name) =>({name: name, id:uuidv4()}))

    const arr = lastArr.map((name)=>(
        <li key={name.id}>{name.name}</li>
    ))

    return (
        <div>
            {arr}
        </div>
    );
};

export default Names;