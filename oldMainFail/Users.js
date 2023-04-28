// import s from '../src/components/Users/user.module.css'
// import axios from "axios";
// import defaultAvatarUser from '../src/assets/img/defaultAvatarUser.jpg'
//
// export let Users = (props) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce =>{
//                 props.setUsers(responce.data.items)
//             })
//         }
//     }
//
//     return (
//
//         <div className={s.main}>
//             <button onClick={getUsers}>Get Users</button>
//             {
//                 props.users.map(u => <div key={u.id}>
//                     <div className={s.allUser}>
//                         <div className='d-flex'>
//                             <div>
//                                 <img src={u.photos.small != null ? u.photos.small : defaultAvatarUser}
//                                      alt='Не вывелось' className={s.photo}/>
//                             </div>
//                             <div className={s.buttonFU}>
//                                 {u.followed ? <button onClick={() => {
//                                         props.unfollow(u.id)
//                                     }} className='btn btn-danger'>UnFollow</button> :
//                                     <button onClick={() => {
//                                         props.follow(u.id)
//                                     }} className='btn btn-success'>Follow</button>}
//                             </div>
//                         </div>
//                         <div className='d-flex'>
//                             <div className={s.nameANDstutus}>
//                                 <div>Имя: {u.name}</div>
//                                 <div>Stutus: {u.status}</div>
//                             </div>
//                             <div className={s.place}>
//                                 <div>
//                                     Страна: {'u.location.country'}
//                                 </div>
//                                 <div>
//                                     Город: {'u.location.city'}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <hr />
//                 </div>)
//             }
//         </div>
//     )
// }