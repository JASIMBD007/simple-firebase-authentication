import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

function App () {
  const [user, setUser] = useState({});
  const handleGoogleSignIn = () => {
    console.log('working');
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })

  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <h2>Name: {user.displayName}</h2>
      <h4>Email: {user.email}</h4>
      <img src={user.photoURL} alt="" />
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default App;
