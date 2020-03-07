import { sendLoginRequest } from '../../api/login';
import { history } from '../../utils';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';


export const login = (username, password) => {
    return async (dispatch) => {
        dispatch(setLoginLoading(true));
        try {
            const loginData = await sendLoginRequest(username, password);
            localStorage.setItem('TOKEN', loginData.token);
            dispatch(loginSuccess());
            history.push('/');
        } catch (error) {
            dispatch(setLoginError(error));

        } finally {
            dispatch(setLoginLoading(false));
        }
    }
};

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,

});

export const setLoginLoading = (isLoading) => ({
    type: SET_LOGIN_LOADING,
    isLoading,
})

export const setLoginError = (error) => ({
    type: SET_LOGIN_ERROR,
    error,
})