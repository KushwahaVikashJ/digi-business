import React from 'react';

import DrawerToggle from './DrawerToggle/DrawerToggle';
import NavigationItems from './Navigation/NavigationItems';
import NavigationItem from './Navigation/NavigationItem/NavigationItem';

import './NavTools.css';

const NavTools = (props)=>{
    return(
        <header className="NavTools"> 
            <h1 className="Brand"><NavigationItem link='/'>Utilize.app</NavigationItem></h1>
            <DrawerToggle toggleClicked={props.toggleClicked}/>
            <nav className="DesktopOnly">
                <NavigationItems isAuth={props.isAuth}/>
            </nav>
        </header>
    )
}

export default NavTools