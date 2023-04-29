import s from "./user.module.css";
import defaultAvatarUser from "../../assets/img/defaultAvatarUser.jpg";
import React from "react";

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
                                <img src={u.photos.small != null ? u.photos.small : defaultAvatarUser}
                                     alt='Не вывелось' className={s.photo}/>
                            </div>
                            <div className={s.buttonFU}>
                                {u.followed ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }} className='btn btn-danger'>UnFollow</button> :
                                    <button onClick={() => {
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