import s from './user.module.css'
debugger
export let Users = (props) => {

    if(props.users.length === 0){
        props.setUsers([{id: 1,followed: true, photoUrl: 'https://n1s2.hsmedia.ru/1c/2d/db/1c2ddba2542202e3d5110fe28d026247/480x497_0xac120003_12278425171554311041.jpg',
            fullName: 'Misha', status: 'boss', location: {city: 'Minsk', country: 'Russia'}},
            {id: 2,followed: false, photoUrl: 'https://n1s2.hsmedia.ru/1c/2d/db/1c2ddba2542202e3d5110fe28d026247/480x497_0xac120003_12278425171554311041.jpg',
                fullName: 'Anton', status: 'teacher', location: {city: 'Vladivostok', country: 'Russia'}},
            {id: 3,followed: true, photoUrl: 'https://n1s2.hsmedia.ru/1c/2d/db/1c2ddba2542202e3d5110fe28d026247/480x497_0xac120003_12278425171554311041.jpg',
                fullName: 'Sasha', status: 'puiple', location: {city: 'New York', country: 'USA'}},
            {id: 4,followed: false, photoUrl: 'https://n1s2.hsmedia.ru/1c/2d/db/1c2ddba2542202e3d5110fe28d026247/480x497_0xac120003_12278425171554311041.jpg',
                fullName: 'Oleg', status: 'teacher', location: {city: 'Nigeria', country: 'Afrika'}},
            {id: 5,followed: true, photoUrl: 'https://n1s2.hsmedia.ru/1c/2d/db/1c2ddba2542202e3d5110fe28d026247/480x497_0xac120003_12278425171554311041.jpg',
                fullName: 'Julia', status: 'Head Master', location: {city: 'Britania', country: 'UK'}},
            {id: 6,followed: false, photoUrl: 'https://n1s2.hsmedia.ru/1c/2d/db/1c2ddba2542202e3d5110fe28d026247/480x497_0xac120003_12278425171554311041.jpg',
                fullName: 'Dimchk', status: 'teacher', location: {city: 'Franch', country: 'Russia'}}])

    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.photo} alt='Хз что напимать'/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>UnFollow</button> :
                                <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}

                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}