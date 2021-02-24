import React, { useState, useEffect } from 'react';
import './App.css';
import instagramimage from './instagramimage.png';
import Post from './Post';
import { auth, db } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';



function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in
        console.log(authUser);
        setUser(authUser);
        if (authUser.displayName) {
          //dont update username
        }
        else {
          // if a new user gets added
          return authUser.updateProfile({
            displayName: username,

          });
        }
      }
      else {
        //user has logged out
        setUser(null);
      }
    })
    return () => {
      // perform cleanup
      unsubscribe();
    }
  }, [user, username]);

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

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {

      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()

      })));
    })
  }, []);

  /*const handleClose = () => {
    setOpen(false);
  };*/
  const signUp = (event) => {
    event.preventDefault();
    // using firebase for auth so easy
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch((error) => alert(error.message))

    setOpen(false);
  }
  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))

    setOpenSignIn(false);
  }
  return (

    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)} //closes if u click outside of the modal material ui takes care of it
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src={instagramimage}
              />
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />

            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />

            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <Button type="submit" onClick={signUp}>SignUp</Button>


          </form>

        </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src={instagramimage}
              />
            </center>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />

            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <Button type="submit" onClick={signIn}>Login</Button>


          </form>

        </div>
      </Modal>
      {/* header */}
      <div className="app__header">
        <img className="app__headerImage"
          src={instagramimage} />
      </div>
      {/* posts */}

      <h1>hello world</h1>
      {user ? (
        <Button onClick={() => auth.signOut()}>Log out</Button>

      ) : (
          <div className="app__logincontainer">
            <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
            <Button onClick={() => setOpen(true)}>Sign Up</Button>
          </div>


        )}


      { posts.map(({ id, post }) => (
        <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      ))
      }

    </div>
  );
}


export default App;
