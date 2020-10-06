import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { init } from 'ityped';

import {connect} from 'react-redux';
import * as orderActions from '../../Store/Actions/index'
import './Home.css';

class Home extends Component{
    
    componentDidMount() {
        const myElement = document.querySelector("#myElement");
        init(myElement, {
          showCursor: false,
          strings: ["Read","Create","Update"]
        });
      }

    render(){

    const responseGoogle = (response)=>{
        this.props.onUser(response.profileObj);
    }

    const user=this.props.user.name;
    return(
        <div>
            <div className="home-profile">
                <p>{this.props.user.name}</p>
                <p>{this.props.user.email}</p>
            </div>
            
            <div className="home-data">
            <h1>Simplest way to access your business digitally</h1>
            {!user?<GoogleLogin
                    clientId="862009015357-a2qloqr6h1tdeo4b0vto1t1aas93fu9n.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />:null}
            <h1>Business owner can</h1>
            <h1><div style={{color:'grey'}} id="myElement"></div> order details </h1>    
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

const mapDispatchToProps = dispatch =>{
    return{
        onUser:(userData)=> dispatch(orderActions.getUser(userData))
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Home);