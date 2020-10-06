import React from 'react';

import './NavigationItem.css';
import {NavLink} from 'react-router-dom';

const NavigationItem = (props)=>{
    return(
        <li className="NavigationItem">            
            <NavLink activeClassName="active" exact to={props.link}>{props.children}</NavLink>
        </li> 
    )
}

export default NavigationItem