import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);


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
  const provider = new GoogleAuthProvider();

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <h2>{user.displayName}</h2>
    </div>
  );
}

export default App;
