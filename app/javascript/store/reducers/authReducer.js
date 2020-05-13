import {
    LOGIN_USER,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS, LOGOUT,
    SIGNUP_USER, SIGNUP_USER_FAILED,
    SIGNUP_USER_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    user: null,
    loading: false,
    error: false,
    errorMsg: "",
    success: false,
    successMsg: ""
}

export default function (state=initialState, action) {
    switch (action.type) {
        case LOGIN_USER: return {
            ...state,
            loading: true
        }
        case LOGIN_USER_SUCCESS: return {
            ...state,
            loading: false,
            error: false,
            errorMsg: "",
            success: true,
            successMsg: action.payload.success,
            user: action.payload.user
        }
        case LOGIN_USER_FAILED: return {
            ...state,
            loading: false,
            error: true,
            errorMsg: action.payload
        }
        case SIGNUP_USER: return {
            ...state,
            loading: true
        }
        case SIGNUP_USER_SUCCESS: return {
            ...state,
            loading: false,
            error: false,
            errorMsg: "",
            success: true,
            successMsg: action.payload.success,
            user: action.payload.user
        }
        case SIGNUP_USER_FAILED: return {
            ...state,
            loading: false,
            error: true,
            errorMsg: action.payload.errors
        }
        case LOGOUT: return {
            ...state
        }
        default: return state;
    }
}
