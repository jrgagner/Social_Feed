import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NewPostForm from './Components/NewPostForm/NewPostForm';
import ".//styles.css"

function App() {
 
  const [posts, setPosts] = useState([{userName:'Smokey the Bear', postText:'Only you can prevent forest fires!!!'}])


  //the following function allows the child class to pass information up to the parent class 
  function addNewPost(post) {
    
    let tempPosts = [post, ...posts];
    
    setPosts(tempPosts); 
  }


  return (
    <div> 
      <h1 className='navbar'>Forest Fire Prevention</h1>
      <NewPostForm addNewPostProperty={addNewPost}/>
      <DisplayPosts parentPosts={posts} /> 
      <footer>Join Smokey the Bear!</footer>       
    </div>
  );
}

export default App;
