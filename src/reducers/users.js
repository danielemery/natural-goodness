// import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

export const LOGGING_IN = 'users/LOGIN';
export const LOGOUT = 'users/LOGOUT';
export const LOGGED_IN = 'users/LOGGED_IN';

export const LoginState = {
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT',
    LOGGING_IN: "LOGGING_IN"
}

const initialState = {
    users: [],
    loginState: LoginState.LOGGED_OUT
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGGING_IN:
            return {
                ...state,
                loginState: LoginState.LOGGING_IN
            }
        case LOGGED_IN:
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
            type: LOGGING_IN
        });

        return setTimeout(() => {
            dispatch({
                type: LOGGED_IN
            });
        }, 3000);
    }
};

export const logout = () => {
    return dispatch => {
        dispatch({
            type: LOGOUT
        });
    }
};
