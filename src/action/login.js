import loginNetwork from '../network/loginNetwork';

const loginService = {
    // login: (username) => (dispatch) => {
    //     loginNetwork.login({ name: username }).then(res => {
    //         dispatch({ type: 'LOGIN_SUCCESS', payload: res });
    //     }).catch(err => {
    //         dispatch({ type: 'LOGIN_FAILED', payload: err });
    //     })
    // }
    login: (name) => ({ type: 'USER_LOGIN', payload: { name: name }})
}

export default loginService;