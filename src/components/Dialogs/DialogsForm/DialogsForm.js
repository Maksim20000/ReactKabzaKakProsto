import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../comman/FormControl/FormControl";
import {maxLenghtCreater, minLenghtCreter, required} from "../../../assets/validator/Validator";

const maxLength30 = maxLenghtCreater(30)
const minLength2 = minLenghtCreter(3)
 const AddMessageForm = (props) => {
  return(
      <>
          <form onSubmit={props.handleSubmit}>
              <div className='d-flex'>
                        <Field
                            component={TextArea}
                            className="form-control"
                            value={ props.state.newMessageBody }
                            placeholder='Нажмин на меня!'
                            validate={[required, maxLength30, minLength2]}
                            name={'newMessageBody'}
                        ></Field></div>

          </form>
      </>
  )
}

export const MessageDialogsFormRedux = reduxForm({
    form: 'dialogs'
})(AddMessageForm)