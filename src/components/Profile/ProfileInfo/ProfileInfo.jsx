import React from 'react';
import s from "./ProfileInfo.module.css";
import bg from '../../../assets/img/BackGround-for-Profile.jpg'

function ProfileInfo(props) {
    debugger
    return (
        <div>
            <div>
                <div>
                    <img src={bg} alt={'ЛАЛАЛЛА'}/>
                </div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} alt={'Фото'} />
                </div>
            </div>
        </div>
    );
}

export  default  ProfileInfo;