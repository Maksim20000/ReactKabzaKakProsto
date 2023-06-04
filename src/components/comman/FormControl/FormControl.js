import React from "react";
import s from './FormsControl.module.css'

const FormControl = ({input, meta, inputOrTextArea, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl}>
            <div className={(hasError ? s.error : '')}>
                { inputOrTextArea
                    ? <textarea {...input} {...props} className={s.error}/>
                    : <input {...input} {...props} className={s.error}/>
                }
                <span>
                    {hasError ? <div>{meta.error}</div> : null}
                </span>
            </div>
        </div>
    )
}

export const TextArea = ({input, meta, ...props}) => {
    return (<FormControl {...props} {...props} meta={meta} input={input} inputOrTextArea={true}/>)
}

export const Input = ({input, meta, props}) => {
    return (<FormControl {...props} meta={meta} input={input} inputOrTextArea={false}/>)
}