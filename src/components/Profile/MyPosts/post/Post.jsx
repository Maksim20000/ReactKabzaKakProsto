import React from "react";
import s from './Post.module.css'
class Post extends React.Component{
    render(){
        return(
            <div className={s.items}>
                <div className={s.m20px}></div>
                    <img src={this.props.img} />
                    Сказал {this.props.name}:
                    {this.props.message}
                    <span>likes: {this.props.likesCount}</span>
            </div>
        )
    }    
}

export default Post