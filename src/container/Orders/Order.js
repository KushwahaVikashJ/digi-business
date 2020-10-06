import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as orderActions from '../../Store/Actions/index';

import './Order.css';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

class Order extends Component {

    updateHandler = (id)=>{
        this.props.history.push('/orders/update/' + id);
    }

    render() {        

        let orders = this.props.orders
        
        if(this.props.loading){
            return <Spinner/>
        }

        return (

           <div>
               <h1 style={{textAlign:'center'}}>Orders</h1>
               {
                   orders.map(order=>{
                    return(
                        <div className="order" key={order.id}>
                            <p style={{margin:'2px 0'}}>Customer_name : {order.customer_name}</p>
                            <p style={{margin:'2px 0'}}>Customer_email : {order.customer_email}</p>
                            <p style={{margin:'2px 0'}}>Product : {order.product}</p>
                            <p style={{margin:'2px 0'}}>Quantity : {order.quantity}</p>
                            <Button clicked={()=>this.updateHandler(order.id)}>Update</Button>
                        </div>
                    )
                })
        
               } 
           </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        orders:state.orders.order,
        loading:state.orders.loading
    }
}

export default connect(mapStateToProps)(Order);