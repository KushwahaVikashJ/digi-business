import * as actionTypes from './actionsTypes';

export const updateOrderSuccess = (orderData ) => {
    return {
        type: actionTypes.UPDATE_ORDER_SUCCESS,
        orderData: orderData
    };
};

export const updateOrderFail = ( error ) => {
    return {
        type: actionTypes.UPDATE_ORDER_FAIL,
        error: error
    };
}

export const updateOrderStart = () =>{
    return {
        type: actionTypes.UPDATE_ORDER_START
    }
}

export const updateOrder = ( orderData ) => {
    return dispatch => {    
        dispatch(updateOrderStart());
        if(orderData){
            dispatch( updateOrderSuccess( orderData ) );
        }
        else{
            dispatch( updateOrderFail() );
        }        
    };
};



export const fetchOrderSuccess = (orderData ) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orderData: orderData
    };
};

export const fetchOrderFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
}

export const fetchOrderStart = () =>{
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrder= (orders) => {
    return dispatch => {    
        dispatch(fetchOrderStart());
        if(orders){
            dispatch(fetchOrderSuccess(orders));
        }
        else
        {
            dispatch(fetchOrderFail());
        }

    };
};

export const createOrderSuccess = (orderData ) => {
    return {
        type: actionTypes.CREATE_ORDER_SUCCESS,
        orderData: orderData
    };
};

export const createOrderFail = ( error ) => {
    return {
        type: actionTypes.CREATE_ORDER_FAIL,
        error: error
    };
}

export const createOrderStart = () =>{
    return {
        type: actionTypes.CREATE_ORDER_START
    }
}

export const createOrder = ( orderData ) => {
    return dispatch => {    
        dispatch(createOrderStart());
        if(orderData){
            dispatch( createOrderSuccess( orderData ) );
        }
        else{
            dispatch( createOrderFail() );
        }        
    };
};
