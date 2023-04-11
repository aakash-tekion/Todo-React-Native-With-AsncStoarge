// import bcrypt from 'bcryptjs'

const initialState = {
    username: '',
    isAuthenticated: false,
    errorMessage: ''
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return {
                isAuthenticated: true,
                username: action.user.username,
                errorMessage: ''
            }
        case 'LOG_IN_SUCCESS':
            return {
                isAuthenticated: true,
                username: action.username,
                errorMessage: ''
            }

        case "LOG_IN_FAILURE":
            return {
                isAuthenticated: false,
                username: '',
                errorMessage: action.errorMessage

            }
        case 'LOG_OUT':
            return {
                isAuthenticated: false,
                username: '',
                errorMessage: ''
            }
        default:
            return state
    }
}
export default AuthReducer