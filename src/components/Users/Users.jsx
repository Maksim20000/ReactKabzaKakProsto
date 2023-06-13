import s from "./user.module.css";
import defaultAvatarUser from "../../assets/img/defaultAvatarUser.jpg";
import React from "react";
import {NavLink} from "react-router-dom";

export let Users = (props) => {
    return(
        <div className={s.main}>
            <div>
                { props.totalPageCount.map( el => {
                    return(
                        <button onClick={() => { props.onPageChanged(el) }} className={props.currentPage === el && s.selectedPage} key={el.id}>
                            { el }
                        </button>)
                }) }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.allUser}>
                        <div className='d-flex'>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : defaultAvatarUser}
                                         alt='Не вывелось' className={s.photo}/>
                                </NavLink>

                            </div>
                            <div className={s.buttonFU}>
                                {u.followed
                                    ? <button disabled={props.followingInProgressBtn.some(id => id === u.id)} onClick={() => {
                                        props.unfollow(u.id)
                                    }} className='btn btn-danger'>UnFollow</button>
                                    : <button disabled={props.followingInProgressBtn.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id)
                                    }} className='btn btn-success'>Follow</button>}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className={s.nameANDstutus}>
                                <div>Имя: {u.name}</div>
                                <div>Stutus: {u.status}</div>
                            </div>
                            <div className={s.place}>
                                <div>
                                    Страна: {'u.location.country'}
                                </div>
                                <div>
                                    Город: {'u.location.cityk'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>)
            }
        </div>
    )
}