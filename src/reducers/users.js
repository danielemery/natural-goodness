// import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

export const LOGIN = 'users/LOGIN';
export const LOGOUT = 'users/LOGOUT';
export const LOGGED_IN = 'users/LOGGED_IN';

export const LoginState = {
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT'
}

const initialState = {
    users: [],
    loginState: LoginState.LOGGED_OUT
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                loginState: LoginState.LOGGED_IN
            }
        case LOGOUT:
            return {
                ...state,
                loginState: LoginState.LOGGED_OUT
            }
        default:
            return state;
    }
}

export const login = (credentials) => {
    return dispatch => {
        dispatch({
            type: LOGIN,
            credentials
        });

        
    }
};

export const logout = () => {
    return dispatch => {
        dispatch({
            type: LOGOUT
        });
    }
}