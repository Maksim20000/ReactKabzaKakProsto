import React from "react";
import s from './Post.module.css'


class Post extends React.Component{
    render(){
        return(
            <div className={s.items}>
                <img src="https://avatars.mds.yandex.net/i?id=930033d7168c8e425eb3cefda46a0d5817ba8dab-7111467-images-thumbs&n=13" />
                {this.props.message} 
                    <div>
                    <span>like {this.props.num}</span>
                </div>
                
            </div>
        )
    }    
}

export default Post