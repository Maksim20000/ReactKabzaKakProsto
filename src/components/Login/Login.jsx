import {LoginReduxForm} from "./loginForm/loginForm";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return(
        <div className={'d-flex justify-content-center'}>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login