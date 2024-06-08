import React from 'react';

function Button({value, onClick,id,className}){
    return(
        <input type='button' defaultValue={value} id={id} className={className} onClick={onClick} readOnly/>
    );
};

export default Button;