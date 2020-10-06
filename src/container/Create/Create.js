import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as orderActions from '../../Store/Actions/index';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Create extends Component {

    state = {
        orderForm: {
            id:{
                value: ''
            },
            customer_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            customer_email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            product: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Product 1', displayValue: 'Product 1'},
                        {value: 'Product 2', displayValue: 'Product 2'},
                        {value: 'Product 3', displayValue: 'Product 3'}
                    ]
                },
                value: 'Product 1',
                validation: {},
                valid: true
            },
            quantity: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'quantity'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            }
        },
        submit:false,
        spinner:false
    }

    validationHandler = (value,rules)=>{
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    orderHandler = (event)=>{  

        event.preventDefault();

        let formData = {};
        for(let data in this.state.orderForm){
            
            formData[data]=this.state.orderForm[data].value;
            
        }

        this.props.onCreate(formData);
        this.props.history.push('/orders');
        alert("Your order has been created successfully");
    }

    inputChangeHandler = (event,id)=>{

        const updatedOrderForm = {
            ...this.state.orderForm
        }
        
        const updatedFormElement = {
            ...updatedOrderForm[id]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.validationHandler(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[id] = updatedFormElement;

        let isValid = true;
        for(let key in updatedOrderForm){
            isValid = updatedOrderForm[key].valid && isValid;
        }

        this.setState({
            orderForm:updatedOrderForm,
            submit:isValid
        })
        
    }

    componentDidMount(){
        function makeid() {
            var text = "5e2940fd";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          
            for (var i = 0; i < 17; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
          
            return text;
          }
          
        const updatedOrderForm = {
            ...this.state.orderForm
        }    

        updatedOrderForm.id.value = makeid();

        this.setState({
            orderForm:updatedOrderForm
        })
    }

    render(){

        const formElementsArray=[];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }

        let form =  <form>
                        {formElementsArray.map((arr)=>{
                            return (
                            <Input 
                                key = {arr.id} 
                                elementType = {arr.config.elementType} 
                                elementConfig = {arr.config.elementConfig} 
                                value = {arr.config.value}
                                invalid = {arr.config.valid}
                                touched = {arr.config.touched}
                                label = {arr.id}
                                changed = {(event)=>this.inputChangeHandler(event,arr.id)} 
                            />)
                        })}
                        <Button btnType="Success" disabled={!this.state.submit} clicked={this.orderHandler}>Create</Button>
                    </form> 

        return (
           <div>
               <h1 style={{textAlign:'center'}}>Create New Order</h1>
               {form}
           </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        orders:state.orders,
        loading:state.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onCreate:(orders)=> dispatch(orderActions.createOrder(orders))
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Create);