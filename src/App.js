import React,{Component} from 'react';
import {Route,Switch,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import Home from './container/Home/Home';
import Create from './container/Create/Create';
import Update from './container/Update/Update';
import Order from './container/Orders/Order';
import Layout from './components/Layout/Layout';
import './App.css';

class App extends Component{
  render(){

    let routes = (
      <Switch>
              <Route path="/" exact component={Home}/>
      </Switch>
    )

    if(this.props.isAuthenticated){
      routes = (
        <Switch>
          <Route path="/" exact component={Home}/> 
          <Route path='/orders' exact component={Order}/>
          <Route path='/orders/update/:id' component={Update}/>
          <Route path='/create' component={Create}/>
          <Redirect to="/"/>
        </Switch>
      )
    }

  return (
    <div>
      <Layout>
          {routes}
      </Layout>
    </div>
  );
  }
}

const mapStateToProps = state =>{
  return{
    isAuthenticated : state.users.user
  }
} 

export default connect(mapStateToProps)(App);