import React from 'react';
import s from "./ProfileInfo.module.css";
import bg from '../../../assets/img/BackGround-for-Profile.jpg'
import {Button} from "react-bootstrap";
import facebook from './../../../assets/img/faceBook.png'
import website from './../../../assets/img/webSite.jpg'
import vk from './../../../assets/img/vk.png'
import twitter from './../../../assets/img/twitter.png'
import instagram from './../../../assets/img/instagram.jpg'
import youtube from './../../../assets/img/youtube.png'
import github from './../../../assets/img/github.png'
import {Preoloder} from "../../comman/preloader/Preoloder";
import defaultAvatarUser from './../../../assets/img/defaultAvatarUser.jpg'

function ProfileInfo(props) {
    if(!props.profile){
        return (<Preoloder />)
    }

    return (
        <div>
            <div>
                <div>
                    <img src={bg}
                         className={s.bgProfilePage}
                         alt={'ЛАЛАЛЛА'}/>
                </div>
                <div className={`${s.descriptionBloc} ${s.bgProfile}`}>
                    <div className={s.titleUsers}>
                        <h2>Профиль пользователя с именем {props.profile.fullName}</h2>
                    </div>
                    <div className={'d-flex'}>
                        {props.profile.photos.small ? <img src={props.profile.photos.small} className={s.imgUser} alt={'маленькаыя фтот'} width={'50px'} height={'50px'}/>
                            : <img src={defaultAvatarUser} className={s.imgUser}  alt="дефолтное фото"/>}
                        <div className={s.aboutMe}>
                            <div className={s.titleAboutMe}>
                                <h2>Обо мне</h2>
                            </div>
                            <h3 className={s.underTitleUser}>
                                {props.profile.aboutMe}
                            </h3>
                        </div>
                    </div>
                    <div className={`${s.workSearchBlock} ${'d-flex'}`}>
                        <div style={{width: '120px'}}>
                            <h3>Работу я {props.profile.lookingForAJob ? <Button variant="success">Ищу</Button> : <Button  variant="danger">Не ищу</Button>}</h3>
                        </div>
                        <div className={s.rezume}>
                            <h2 style={{marginLeft: '300px' }}>Резюме</h2>
                            <h4 style={{marginLeft: '20px' }}>
                                {props.profile.lookingForAJobDescription}</h4>
                        </div>
                    </div>
                    <div className={`${'d-flex'} ${s.contacts}`}>
                        <a href={'https:/www.facebook.com/' + props.profile.contacts.facebook}  rel="noopener noreferrer" target={'_blank'}>
                            <img src={facebook}
                                 alt="facebook"
                                 className={s.faceBook}
                            />
                        </a>
                        <a href={'https:/' + props.profile.contacts.website}  rel="noopener noreferrer" target={'_blank'}>
                            <img src={website}
                                 alt="facebook"
                                 className={s.faceBook}
                            />
                        </a>
                        <a href={'https://vk.com/feed' + props.profile.contacts.vk}  rel="noopener noreferrer" target={'_blank'}>
                            <img src={vk}
                                 alt="facebook"
                                 className={s.faceBook}
                            />
                        </a>
                        <a href={props.profile.contacts.twitter}  rel="noopener noreferrer" target={'_blank'}>
                            <img src={twitter}
                                 alt="facebook"
                                 className={s.faceBook}
                            />
                        </a>
                        <a href={props.profile.contacts.instagram}  rel="noopener noreferrer" target={'_blank'}>
                            <img src={instagram}
                                 alt="facebook"
                                 className={s.faceBook}
                            />
                        </a>
                        {/*youtube*/}
                        <a href={props.profile.contacts.youtube}  rel="noopener noreferrer" target={'_blank'}>
                            <img src={youtube}
                                 alt="facebook"
                                 className={s.faceBook}
                            />
                        </a>
                    {/*github*/}
                        <a href={props.profile.contacts.github}  rel="noopener noreferrer" target={'_blank'}>
                            <img src={github}
                                 alt="facebook"
                                 className={s.faceBook}
                            />
                        </a>

                    </div>

                </div>
            </div>
        </div>
    );
}

export  default  ProfileInfo;