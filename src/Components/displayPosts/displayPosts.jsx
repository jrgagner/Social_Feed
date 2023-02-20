import React, { useState } from "react";
import DislikeButton from "../Buttons/DislikeButton";
import LikeButton from "../Buttons/LikeButton";


const DisplayPosts = (props) => {

    let timeStamp = Date()
    
    return (  
        <div>
            <h2>Feed (not food)</h2>
            {props.parentPosts.map((post) => {
                return (
                    <div>
                        <li>
                            <a>{timeStamp}</a>
                            <h3>{post.userName}</h3>
                            <p>{post.postText}
                            <br></br></p>
                            <LikeButton />
                            <DislikeButton />
                            <br></br>
                        </li>  
                    </div>
                )
            })}
        
        </div>
    );
}
 
export default DisplayPosts;