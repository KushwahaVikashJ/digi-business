import * as actionTypes from '../Actions/actionsTypes';

import DUMMY_DATA  from '../../Assets/DummyData.json';

const initialState = {
    order: DUMMY_DATA,
    loading:false,
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_ORDER_START:
            return{
                ...state,
                loading:true
            }
        case actionTypes.UPDATE_ORDER_SUCCESS: 
            return{
                ...state,
                loading:false,
                order:state.order.map(o=>{

                    if(o.id===action.orderData.id){
                        return action.orderData
                    }
                    return o
                })
            } 

        case actionTypes.UPDATE_ORDER_FAIL: 
            return {
                ...state,
                loading:false
            }
           
        case actionTypes.CREATE_ORDER_START:
            return{
                ...state,
                loading:true
            }

        case actionTypes.CREATE_ORDER_SUCCESS:
            const newOrder = {
                ...action.orderData,
            }
            return{
                ...state,
                loading:false,
                order:state.order.concat(newOrder)
            } 
        case actionTypes.CREATE_ORDER_FAIL: 
            return {
                ...state,
                loading:false
            }    

        case actionTypes.FETCH_ORDERS_START:
                return{
                    ...state,
                    loading:true
                }

        case actionTypes.FETCH_ORDERS_SUCCESS:  
                return{
                    ...state,
                    loading:false,
                    orders:action.orderData
                }
                
        case actionTypes.FETCH_ORDERS_FAIL: 
                return {
                    ...state,
                    loading:false
                }    

        default: return state;
    }
};

export default reducer;