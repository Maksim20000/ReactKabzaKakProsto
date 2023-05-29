import {Field, reduxForm} from "redux-form";


// <form onSubmit={props.handleSubmit}>
//     <div>
//         <label htmlFor="firstName">First Name</label>
//         <Field name="login" component="input" type="text" />
//     </div>
//     <div>
//         <label htmlFor="lastName">Last Name</label>
//         <Field name="password" component="input" type="text" />
//     </div>
//     <div>
//         <label htmlFor="email">remember me</label>
//         <Field name="remember_me" component="input" type="checkbox" />
//     </div>
//     <button type="submit">Submit</button>
// </form>
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="mb-3">
                <div>
                    <label  className="form-label">First Name</label>
                    <Field type="text" className="form-control"
                           component={'input'} name={'firstName'}
                    />
                </div>
                <div>
                    <label  className="form-label">Second Name</label>
                    <Field type="text" className="form-control"
                           component={'input'} name={'SecondName'}
                           />
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <Field type="email" className="form-control" component={'input'} name={'email'} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <Field type="password" className="form-control" component={'input'} id="exampleInputPassword1" name={'password'}/>
                </div>
                <div className="mb-3 form-check">
                    <Field type="checkbox" className="form-check-input" component={'input'} id="exampleCheck1" name={'checkBox'}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)