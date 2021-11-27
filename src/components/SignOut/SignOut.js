import { useCollectionData } from 'react-firebase-hooks/firestore';
import { BiLogOut } from 'react-icons/bi';

function SignOut(props) {
  const auth = props.firebase.auth();
  console.log('TCL ->  ~ file: SignOut.js ~ line 6 ~ SignOut ~ auth', auth);
  const firestore = props.firestore;
  const messagesRef = props.firestore.collection('messages');
  console.log('TCL ->  ~ file: SignOut.js ~ line 8 ~ SignOut ~ messagesRef', messagesRef);
  // const { uid } = auth?.currentUser;

  // const query = firestore.collection('messages').where('uid', '===', uid);
  // console.log('TCL ->  ~ file: SignOut.js ~ line 10 ~ SignOut ~ query', query);

  // const [messages] = useCollectionData(query, { idField: 'uid' });

  // console.log('TCL ->  ~ file: SignOut.js ~ line 5 ~ SignOut ~ auth', messages);

  return auth.currentUser && (<div className="sign-out">
    <img src={auth.currentUser.photoURL} />
    <h6>{auth.currentUser.displayName}</h6>
    <button className="sign-out-btn" onClick={() => auth.signOut()}> <BiLogOut /> Sign Out</button>
    </div>)

}

export default SignOut;