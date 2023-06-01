import s from "../MyPosts.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";

const NewMessageProfile = (props) => {
  return(
      <form onSubmit={props.handleSubmit}>
          <div className={`${s.textArea}`}>
              <Field component={'textarea'}
                     className="form-control"
                     placeholder="Leave a comment here"
                     id="floatingTextarea"
                     name={'NewMessgeProfile'}
              ></Field>
          </div>
          <div>
              <button type={'submit'} className={`${'btn'} ${'btn-success'} ${s.button}`}>add post</button>
          </div>
      </form>
  )
}

export const AddNewPostForm = reduxForm({
    form: 'NewMessageProfile'
})(NewMessageProfile)