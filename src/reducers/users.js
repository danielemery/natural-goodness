import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import config from '../config.json';

export const LOGGING_IN = 'users/LOGIN';
export const LOGOUT = 'users/LOGOUT';
export const LOGGED_IN = 'users/LOGGED_IN';
export const LOGIN_ERROR = 'users/LOGIN_ERROR';
export const DISMISS_LOGIN_ERROR = 'users/DISMISS_LOGIN_ERROR';

export const LoginState = {
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT',
    LOGGING_IN: "LOGGING_IN"
}

const initialState = {
    users: [],
    loginState: LoginState.LOGGED_OUT,
    loginError: ''
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
        case LOGIN_ERROR:
            return {
                ...state,
                loginState: LoginState.LOGGED_OUT,
                loginError: action.err.message
            }
        case DISMISS_LOGIN_ERROR:
            return {
                ...state,
                loginError: ''
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
    console.log(credentials);
    return dispatch => {
        dispatch({
            type: LOGGING_IN
        });

        var authenticationDetails = new AuthenticationDetails(credentials);
        var userPool = new CognitoUserPool(config.userPool);

        var user = new CognitoUser({
            Username: credentials.username,
            Pool: userPool
        });

        user.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                console.log(result);
                dispatch({
                    type: LOGGED_IN,
                    result
                });
            },
            onFailure: (err) => {
                console.log(err);
                dispatch({
                    type: LOGIN_ERROR,
                    err
                });
            }
        })
    }
};

export const logout = () => {
    return dispatch => {
        dispatch({
            type: LOGOUT
        });
    }
};

export const dismissLoginError = () => {
    return dispatch => {
        dispatch({
            type: DISMISS_LOGIN_ERROR
        });
    }
}
