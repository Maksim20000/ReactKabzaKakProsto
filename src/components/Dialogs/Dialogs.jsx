import React from "react";
import s from './Dialogs.module.css'


function Dialogs(){
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_Items}>
                <div className={`${s.item} ${s.active}`}>
                    Dima
                </div>
                <div className={s.item}>
                    Dosage
                </div>
                <div className={s.item}>
                    Peta
                </div>
                <div className={s.item}>
                    Sash
                </div>
                <div className={s.item}>
                    Vova
                </div>
                <div className={s.item}>
                    Victory
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Push</div>
                <div className={s.message}>Commit</div>
                <div className={s.message}>lalalalala</div>
            </div>
        </div>
    )
}

export default Dialogs