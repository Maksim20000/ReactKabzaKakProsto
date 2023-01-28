import React from 'react';
import c from './Register.module.css'
export function Register() {

    let refInputReg = React.createRef();

    let onClickButtonReg = () => {
        let textRef = refInputReg.current.value
        alert(textRef)
    }

    return (
        <div className={c.dblock}>
            <div className={c.jcs}><input type="text" name="login" placeholder="Логин" ref={refInputReg}/></div>
            <div className={c.jcs}><input type="password" name="password" placeholder="Пароль" ref={refInputReg}/></div>
            <div className={c.jcs}><button onClick={ onClickButtonReg }>Войти</button></div>
        </div>
    );
}