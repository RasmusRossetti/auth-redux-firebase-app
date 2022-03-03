import React from 'react';
import logo from './logo.svg';
import './App.css';
import { auth, provider } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveUser,
  setUserLogOutState,
  selectUserEmail,
  selectUserName,
} from './features/counter/userSlice';

function App() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((err) => alert(err.message));
  };
  console.log(userName);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {userName ? (
          <>
            <button onClick={handleSignOut}>Sign Out</button>

            <p class='logo-1'>You are signed as {userName}</p>
          </>
        ) : (
          <>
            <button onClick={handleSignIn}>Sign in</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
