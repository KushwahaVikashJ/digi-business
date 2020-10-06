import React,{Component} from 'react';
import {connect} from 'react-redux';

import './Layout.css'
import SideDrawer from '../NavBar/SideDrawer/SideDrawer';
import NavTools from '../NavBar/NavTools'; 

class Layout extends Component{
    state={
        open:false
    }

    toggleHandlerOpen = ()=>{
        this.setState({
            open:true
        })
    }

    toggleHandlerClose = ()=>{
        this.setState({
            open:false
        })
    }
    
    render(){
        
        return(
            <div>
                <SideDrawer profile={this.props.user} open={this.state.open} BackdropClicked={this.toggleHandlerClose}/>
                <NavTools isAuth={this.props.user.name} toggleClicked={this.toggleHandlerOpen} open={this.state.open} BackdropClicked={this.toggleHandlerClose}/>
                <div className="content">
                    {this.props.children}                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        user:state.users.user,
        loading:state.users.loading
    }
}

export default connect(mapStateToProps)(Layout);