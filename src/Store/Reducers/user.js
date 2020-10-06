import * as actionTypes from '../Actions/actionsTypes';

const initialState = {
    user: {},
    loading: false,
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.USER_START:
            return{
                ...state,
                loading:true
            }
        case actionTypes.USER_SUCCESS: 
            return{
                ...state,
                loading:false,
                user:action.userData
            } 
        case actionTypes.USER_FAIL: 
            return {
                ...state,
                loading:false
            }
        default: return state;
    }
};

export default reducer;