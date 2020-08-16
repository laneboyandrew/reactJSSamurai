import React from "react";
import classes from './Post.module.css'


const Post = (props) => {
    return(
            <div className={classes.item}>
                <img src={'https://avatars.mds.yandex.net/get-pdb/1632284/2c3176a3-4d91-48e3-883e-8ce18a5bf9ff/s1200'}/>
                {props.post}
                <div>
                <span>Like: {props.likesCount}</span>
                </div>
            </div>
    )
};

export default Post;
