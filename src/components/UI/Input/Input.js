import React from 'react';
import './Input.css'; 

const input = (props)=>{
    let inputElement = null;
    let validationError = null;
    let inputClasses = ["InputElement"];

    if(!props.invalid && props.touched){
        inputClasses.push("Invalid");
        validationError = <p className="ValidationError">Please enter a valid {props.label}</p>;
    }

    switch(props.elementType)
    {
        case ('input'):
            inputElement = <input 
            className={inputClasses.join(' ')} 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
            />
            break; 

        case('textarea'):
            inputElement = <textarea 
            className={inputClasses.join(' ')} 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
            />
            break;

        case('select'):
            inputElement = (
            <select 
                className={inputClasses.join(' ')}  
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option=>{
                    return <option key={option.value} value={option.value}>{option.displayValue}</option>
                })}    
            </select>
            )
            break;    

        default:
            inputElement = <input
            disabled 
            className={inputClasses.join(' ')} 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            />
    }

    return(
        <div className="Input">
            {/* <label className="Label" >{props.label}</label> */}
            {inputElement}
            {validationError}
        </div>    
    )
}

export default input;