import React from 'react';

import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../Navigation/NavigationItems';

const SideDrawer = (props)=>{

    let move = ["SideDrawer","close"];
    if(props.open){
        move = ["SideDrawer","open"];
    }

    let data = (
            <div className="profileData">
                <p>{props.profile.name}</p>
                <p>{props.profile.email}</p>
            </div>
    )

    if(props.spinner){
        data = "Loading";
    }

    return(
        <div>
            <Backdrop open={props.open} BackdropClicked={props.BackdropClicked}/>
            <div className={move.join(' ')} onClick={props.BackdropClicked}>
                <div className="profile">
                    {data}
                </div>
                <nav > 
                    <NavigationItems/>                                                 
                </nav>
            </div>            
        </div>
    )
}

export default SideDrawer