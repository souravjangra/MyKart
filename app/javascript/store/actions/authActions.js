import {
    LOGIN_USER,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS, LOGOUT,
    SIGNUP_USER,
    SIGNUP_USER_FAILED,
    SIGNUP_USER_SUCCESS
} from "./actionTypes";

export const loginUser = (email, password) => async (dispatch) => {
    dispatch({type: LOGIN_USER});
    await fetch(`http://localhost:5000/login`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            email, password
        })
    }).then((res) => {return res.json()})
        .then((data)=>{
            console.log(data)
            if (data.errors) {
                return dispatch({
                    type: LOGIN_USER_FAILED,
                    payload: data.errors
                })
            }
            else {
                localStorage.setItem("token",data.jwt);
                localStorage.setItem("user",JSON.stringify(data.user));
                return dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: data
                })
            }
        });
}

export const signupUser = (email, password, confirmPassword, first_name, last_name) => async (dispatch) => {
    dispatch({type: SIGNUP_USER});
    await fetch(`http://localhost:5000/signup`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
            password_confirmation: confirmPassword,
            first_name: first_name,
            last_name: last_name
        })
    }).then((res)=>{return res.json()})
        .then((data)=>{
            if(data.errors) {
                return dispatch({
                    type: SIGNUP_USER_FAILED,
                    payload: data
                })
            }else {
                localStorage.setItem("token",data.jwt);
                localStorage.setItem("user",JSON.stringify(data.user));
                return dispatch({
                    type: SIGNUP_USER_SUCCESS,
                    payload: data
                })
            }
        })
}

export const logout = () => async (dispatch) => {
    dispatch({type: LOGOUT});
    localStorage.removeItem("user");
}
