import React from 'react';
import s from "./ProfileInfo.module.css";

function ProfileInfo(props) {
    return (
        <div>
            <div>
                <div>
                    {/*<img src="https://avatars.mds.yandex.net/i?id=31cc123c383aea45250e312098cb9eed3b57eabc-7662997-images-thumbs&n=13"/>*/}
                </div>
                <div className={s.descriptionBlock}>
                    аватар + инфа
                </div>
            </div>
        </div>
    );
}

export  default  ProfileInfo;