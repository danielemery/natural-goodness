import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import config from '../config.json';

export const LOGGING_IN = 'users/LOGIN';
export const LOGOUT = 'users/LOGOUT';
export const LOGGED_IN = 'users/LOGGED_IN';
export const LOGIN_ERROR = 'users/LOGIN_ERROR';
export const DISMISS_LOGIN_ERROR = 'users/DISMISS_LOGIN_ERROR';
export const START_PASSWORD_RESET = 'users/START_PASSWORD_RESET';
export const COMPLETE_PASSWORD_RESET = 'users/COMPLETE_PASSWORD_RESET';

export const LoginState = {
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT',
    LOGGING_IN: "LOGGING_IN",
    RESETTING_PASSWORD: "RESETTING_PASSWORD"
}

const initialState = {
    loginState: LoginState.LOGGED_OUT,
    loginError: '',
    resetData: {
        user: null,
        message: ''
    }
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
        case START_PASSWORD_RESET:
            return {
                ...state,
                loginState: LoginState.RESETTING_PASSWORD,
                resetData: {
                    ...state.resetData,
                    user: action.user,
                    message: action.data
                }
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

        var authenticationDetails = new AuthenticationDetails(credentials);
        var userPool = new CognitoUserPool(config.userPool);

        var user = new CognitoUser({
            Username: credentials.username,
            Pool: userPool
        });

        user.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                dispatch({
                    type: LOGGED_IN,
                    result
                });
            },
            onFailure: (err) => {
                dispatch({
                    type: LOGIN_ERROR,
                    err
                });
            }
        })
    }
};

export const startPasswordReset = (username) => {
    return dispatch => {

        var userPool = new CognitoUserPool(config.userPool);

        var user = new CognitoUser({
            Username: username,
            Pool: userPool
        });

        user.forgotPassword({
            onSuccess: (data) => {
                console.log(data);                
                dispatch({
                    type: START_PASSWORD_RESET,
                    data,
                    user
                });
            },
            onFailure: (data) => {
                console.log("FAILURE");
                console.log(data);
            }
        });
    };
}

export const completePasswordReset = (verificationCode) => {
    return dispatch => {
        dispatch({
            type: COMPLETE_PASSWORD_RESET
        })
    };
}

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
