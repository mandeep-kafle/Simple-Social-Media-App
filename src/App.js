import React, { useState ,useEffect} from 'react'; 
import './App.css';
import instagramimage from './instagramimage.png';
import Post from './Post';
import {db} from './firebase';

function App() {

    const [posts, setPosts]=useState([]);
   /* {
     username:"mandeep",     array of these to obj
     caption: "meditating",
     imageUrl:"https://cdn.pixabay.com/photo/2021/01/16/17/46/male-5922911_960_720.jpg"
    },
    {
      username:"mandeep",
      caption: "meditating",
      imageUrl:"https://cdn.pixabay.com/photo/2021/01/16/17/46/male-5922911_960_720.jpg"
     }
  ]);*/

  useEffect(()=>{
   db.collection('posts').onSnapshot(snapshot=>{

    setPosts(snapshot.docs.map(doc=>doc.data()));
   })
  }, []);
  return (
    <div className="app">
      
      {/* header */}
      <div className="app__header">
        <img className="app__headerImage"
          src={instagramimage}/>
      </div>
      {/* posts */}

      <h1>hello world</h1>


      
       { posts.map(post=>(
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
       ))
    }
      
    </div>
  );
}


export default App;
