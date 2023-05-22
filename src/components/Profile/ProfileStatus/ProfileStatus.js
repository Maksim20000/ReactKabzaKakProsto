import s from './ProfileStatusTest.module.css'
import {StatusProfile} from "./Status/StatusProfile";
import React from "react";
export class ProfileTestStatus extends React.Component{
    render() {
        return(
            <div className={'d-flex'}>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC73KHRjj_YtQBp9JmCZdbxKUbiKE3us-e1g&usqp=CAU'}
                     alt={'макбук'}
                     className={s.img}
                />
                <StatusProfile status={this.props.status}/>
            </div>
        )
    }
}