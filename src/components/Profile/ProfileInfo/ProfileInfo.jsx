import React from 'react';
import s from "./ProfileInfo.module.css";
import bg from '../../../assets/img/BackGround-for-Profile.jpg'

function ProfileInfo(props) {
    return (
        <div>
            <div>
                <div>
                    <img src={bg} alt={'ЛАЛАЛЛА'}/>
                </div>
                <div className={s.descriptionBlock}>
                    аватар + инфа
                </div>
            </div>
        </div>
    );
}

export  default  ProfileInfo;