import s from "./user.module.css";
import defaultAvatarUser from "../../assets/img/defaultAvatarUser.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

export let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for(let i = 1; i <= pagesCount; i ++){
        pages.push(i)
    }
    return(
        <div className={s.main}>
            <div>
                { pages.map( el => {
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
                                {u.followed ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true,
                                            headers: {'API-KEY': 'f4369178-3f77-4cca-a2e8-83509a9dd95e'}
                                        }).then(responce => {
                                            if(responce.data.resultCode === 0){
                                                props.unfollow(u.id)
                                            }
                                        })
                                    }} className='btn btn-danger'>UnFollow</button> :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                                            headers: {'API-KEY': 'f4369178-3f77-4cca-a2e8-83509a9dd95e'}
                                        }).then(responce => {
                                            if(responce.data.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                        })
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