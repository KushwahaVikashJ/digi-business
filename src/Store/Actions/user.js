import * as actionTypes from './actionsTypes';

export const userSuccess = (userData ) => {
    return {
        type: actionTypes.USER_SUCCESS,
        userData: userData
    };
};

export const userFail = ( error ) => {
    return {
        type: actionTypes.USER_FAIL,
        error: error
    };
}

export const userStart = () =>{
    return {
        type: actionTypes.USER_START
    }
}

export const getUser = ( userData ) => {
    return dispatch => {    
        dispatch(userStart());
        if(userData){
            dispatch( userSuccess( userData ) );
        }
        else{
            dispatch( userFail() );
        }        
    };
};
