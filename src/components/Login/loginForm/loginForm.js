import {Field, reduxForm} from "redux-form";



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="login" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="password" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="email">remember me</label>
                <Field name="remember_me" component="input" type="checkbox" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)