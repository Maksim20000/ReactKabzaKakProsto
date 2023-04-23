// import React from 'react'
// import s from "../src/components/Users/user.module.css";
// import defaultAvatarUser from "../src/assets/img/defaultAvatarUser.jpg";
// import axios from "axios";
//
// export class UsersClass extends React.Component {
//
//     constructor(props) {
//         super(props);
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
//             this.props.setUsers(responce.data.items)
//         })
//
//     }
//
//     render() {
//         return (
//             <div className={s.main}>
//                 {
//                     this.props.users.map(u => <div key={u.id}>
//                         <div className={s.allUser}>
//                             <div className='d-flex'>
//                                 <div>
//                                     <img src={u.photos.small != null ? u.photos.small : defaultAvatarUser}
//                                          alt='Не вывелось' className={s.photo}/>
//                                 </div>
//                                 <div className={s.buttonFU}>
//                                     {u.followed ? <button onClick={() => {
//                                             this.props.unfollow(u.id)
//                                         }} className='btn btn-danger'>UnFollow</button> :
//                                         <button onClick={() => {
//                                             this.props.follow(u.id)
//                                         }} className='btn btn-success'>Follow</button>}
//                                 </div>
//                             </div>
//                             <div className='d-flex'>
//                                 <div className={s.nameANDstutus}>
//                                     <div>Имя: {u.fullName}</div>
//                                     <div>Stutus: {u.status}</div>
//                                 </div>
//                                 <div className={s.place}>
//                                     <div>
//                                         Страна: {'u.location.country'}
//                                     </div>
//                                     <div>
//                                         Город: {'u.location.city'}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr/>
//                     </div>)
//                 }
//             </div>
//         )
//     }
// }