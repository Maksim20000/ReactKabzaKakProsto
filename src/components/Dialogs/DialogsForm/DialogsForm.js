import React from "react";
import {Field, reduxForm} from "redux-form";

 const AddMessageForm = (props) => {
  return(
      <>
          <form onSubmit={props.handleSubmit}>
              <div className='d-flex'>
                        <Field
                            component={'textarea'}
                            className="form-control"
                            value={ props.state.newMessageBody }
                            placeholder='Нажмин на меня!'
                            name={'newMessageBody'}
                        ></Field></div>
                  <div>
                      <button type={'submit'} className='btn btn-success'>Кнопка</button>
                  </div>
          </form>
      </>
  )
}

export const MessageDialogsFormRedux = reduxForm({
    form: 'dialogs'
})(AddMessageForm)