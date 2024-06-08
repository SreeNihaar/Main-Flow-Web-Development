import React from 'react';
import Button from './Button.js';

function ButtonPanel({setValue,value,equals,clearFunction}){
    const handleClick=(e)=>{
        setValue(value+e.target.defaultValue);
    }
    return(
        <>
            <div>
            <Button id='clear' value='AC' onClick={clearFunction}/>
            <Button value='DE' onClick={()=>setValue(value.slice(0,-1))}/>
            <Button value='%' onClick={handleClick}/>
            <Button value='/' onClick={handleClick}/>
            </div>
            <div>
            <Button value='7' onClick={handleClick}/>
            <Button value='8' onClick={handleClick}/>
            <Button value='9' onClick={handleClick}/>
            <Button value='*' onClick={handleClick}/>
            </div>
            <div>
            <Button value='4' onClick={handleClick}/>
            <Button value='5' onClick={handleClick}/>
            <Button value='6' onClick={handleClick}/>
            <Button value='+' onClick={handleClick}/>
            </div>
            <div>
            <Button value='1' onClick={handleClick}/>
            <Button value='2' onClick={handleClick}/>
            <Button value='3' onClick={handleClick}/>
            <Button value='-' onClick={handleClick}/>
            </div>
            <div>
            <Button value='.' onClick={handleClick}/>
            <Button value='0' onClick={handleClick}/>
            <Button value='=' className='equal' onClick={equals}/>
            </div>
        </>
    );
};

export default ButtonPanel;