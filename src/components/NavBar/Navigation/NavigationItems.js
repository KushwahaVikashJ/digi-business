import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props)=>{

    return(
        <ul className="NavigationItems">
            <NavigationItem link={'/'}>Home</NavigationItem>
            {props.isAuth?<NavigationItem link={'/orders'}>Orders</NavigationItem>:null}
            {props.isAuth?<NavigationItem link={'/create'}>Create</NavigationItem>:null}
        </ul>
    )
}

export default NavigationItems