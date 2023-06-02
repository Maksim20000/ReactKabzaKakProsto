import s from "../MyPosts.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreater, minLenghtCreter, required} from "../../../../assets/validator/Validator";
import {TextArea} from "../../../comman/FormControl/FormControl";

const maxLength15 = maxLenghtCreater(15)
const minLength2 = minLenghtCreter(3)

const NewMessageProfile = (props) => {
  return(
      <form onSubmit={props.handleSubmit}>
          <div className={`${s.textArea}`}>
              <Field component={TextArea}
                     className="form-control"
                     placeholder="Leave a comment here"
                     id="floatingTextarea"
                     name={'NewMessgeProfile'}
                     validate={[required, maxLength15, minLength2]}
              ></Field>
          </div>
          <div>
              <button type={'submit'} className={`${'btn'} ${'btn-success'} ${s.button}`}>Отправить</button>
          </div>
      </form>
  )
}

export const AddNewPostForm = reduxForm({
    form: 'NewMessageProfile'
})(NewMessageProfile)