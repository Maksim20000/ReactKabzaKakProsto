import React from "react";
import s from './Post.module.css'
class Post extends React.Component{
    render(){
        return(
            <div className={s.items}>
                <div className={s.m20px}>
                    <img src={this.props.img} />
                    <span className={s.p50px}>Сказал {this.props.name}:</span>
                    <span>{this.props.message}</span>
                    <span className={s.p50px}>likes: {this.props.likesCount}</span>
                </div>
            </div>
        )
    }    
}

export default Post