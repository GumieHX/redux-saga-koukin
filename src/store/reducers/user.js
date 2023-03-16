const userInit = {
    isLogin : false,
    information: {
        id: null,
        name: ''
    },
    err: { message : '' },
    loading: false
}

const userReducer = (state = { ...userInit }, { type, payload }) => {
    switch(type){
        case 'LOGIN_SUCCESS':
            return { ...state, loading: false, information: payload, isLogin: true };
        case 'LOGIN_FAILED':
            return { ...state, ...userInit, err: { ...payload }};
        case 'LOGIN_OUT':
            return { ...state, ...userInit };
        case 'REQUEST':
            return { ...state, loading: true }
        default:
            return state;
    }
}

export default userReducer;