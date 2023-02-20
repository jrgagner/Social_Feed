import React, {useState} from "react";

const NewPostForm = (props) => {
    
    const [userName, setName] = useState('');
    const [postText, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); //prevent page refresh when posting
        let newPost = {
            userName: userName,
            postText: postText,
        };
        console.log(newPost);
        props.addNewPostProperty(newPost);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label for='userName'>Name: </label>
            <br></br>
            <input type='text' value={userName} onChange={(event) => setName(event.target.value)}/>
            <br></br>
            <label for='postText'>Post: </label>
            <br></br>
            <input type='text' value={postText} onChange={(event) => setText(event.target.value)}/>
            <br></br>
            <br></br>
            <button type='submit'>Post</button>
        </form>

     );
}
 
export default NewPostForm;