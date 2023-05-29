import {LoginReduxForm} from "./loginForm/loginForm";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login