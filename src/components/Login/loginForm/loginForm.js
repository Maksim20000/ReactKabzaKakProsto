import {Field, reduxForm} from "redux-form";
import {maxLenghtCreater, minLenghtCreter, required} from "../../../assets/validator/Validator";
import {Input} from "../../comman/FormControl/FormControl";

const maxLength30 = maxLenghtCreater(30)
const minLength2 = minLenghtCreter(2)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="mb-3">
                <div>
                    <label className="form-label">First Name</label>
                    <Field type="text" className="form-control"
                           component={Input} name={'firstName'}
                           validate={[required, maxLength30, minLength2]}
                    />
                </div>
                <div>
                    <label className="form-label">Second Name</label>
                    <Field type="text" className="form-control"
                           component={Input} name={'SecondName'}
                           validate={[required, maxLength30, minLength2]}
                    />
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <Field type="email" className="form-control" component={Input} name={'email'}
                           id="exampleInputEmail1" aria-describedby="emailHelp"
                           validate={[required, maxLength30, minLength2]}
                    />
                </div>
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <Field type="password" className="form-control" component={Input} id="exampleInputPassword1"
                           name={'password'}
                           validate={[required, maxLength30, minLength2]}
                    />
                </div>
                <div className="mb-3 form-check">
                    <Field type="checkbox" className="form-check-input" component={'input'} id="exampleCheck1"
                           name={'checkBox'}
                    />
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