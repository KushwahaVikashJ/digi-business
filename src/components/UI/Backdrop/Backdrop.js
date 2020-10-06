import React from 'react';

import './Backdrop.css';

const Backdrop = (props)=>{
    return(
        props.open ? <div className="Backdrop" onClick={props.BackdropClicked}></div> : null
    )
}

export default Backdrop