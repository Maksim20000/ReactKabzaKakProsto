import React from 'react'
import s from "./user.module.css";
import defaultAvatarUser from "../../assets/img/defaultAvatarUser.jpg";
import axios from "axios";

export class UsersClass extends React.Component {
    // По умолчанию
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            debugger
            this.props.setUsers(responce.data.items)
            this.props.setTotalCount(responce.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for(let i = 1; i <= pagesCount; i ++){
            pages.push(i)
        }


        return (
            <div className={s.main}>
                <div>
                    { pages.map( el => {
                            return(
                                <button onClick={() => { this.onPageChanged(el) }} className={this.props.currentPage === el && s.selectedPage} >
                                    { el }
                                </button>)
                        }) }
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div className={s.allUser}>
                            <div className='d-flex'>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : defaultAvatarUser}
                                         alt='Не вывелось' className={s.photo}/>
                                </div>
                                <div className={s.buttonFU}>
                                    {u.followed ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }} className='btn btn-danger'>UnFollow</button> :
                                        <button onClick={() => {
                                            this.props.follow(u.id)
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
                                        Город: {'u.location.city'}
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
}