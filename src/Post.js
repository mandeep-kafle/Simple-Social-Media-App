import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            {/* header -> avatar + username */}
            
            <div className="post__header">
                <Avatar
                className="post__avatar"
                alt="MandeepKafle"
                src="/static/images/avatar/1.jpg"
                />
                <h3>fuck</h3>
                
            </div>

            
            <img className="post__image" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"></img>
            <h4 className ="post__text"><strong>Mandeep</strong>:caption</h4>

        </div>
    )
}

export default Post
