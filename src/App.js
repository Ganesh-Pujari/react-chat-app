import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import ChatRoom from './components/ChatRoom/ChatRoom';
import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';
import firebaseConfig from './Firebase/config'
import Button from '@mui/material/Button';
// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "./Shared/Themes/GlobalStyle";
// import { lightTheme, darkTheme } from "./Shared/Themes/Themes"
import { useState } from 'react';

firebase.initializeApp(firebaseConfig);



function App() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const [user] = useAuthState(auth);

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <div className="App">
          <header className="App-header">
            <SignOut firebase={firebase} firestore={firestore} />
          </header>

          <section>
        {/* <GlobalStyles />/S */}

            {user ? <ChatRoom firestore={firestore} firebase={firebase} /> : <SignIn firebase={firebase} />}

          </section>

        </div>
      </>
    // </ThemeProvider>
  );
}

export default App;
