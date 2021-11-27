import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import './SignIn.css';


function SignIn(props) {
  let firebase = props.firebase;
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  // const signInWithFacebook = () => {
  //   const provider = new firebase.auth.signInWithFacebook();
  //   firebase.auth().signInWithPopup(provider);
  // }

  return (
    <div>
      <button onClick={signInWithGoogle}><FcGoogle /> Sign in with Google account</button>
      {/* <button onClick={signInWithFacebook}><FaFacebook /> Sign in with Facebook account</button> */}

    </div>
  );
}

export default SignIn;