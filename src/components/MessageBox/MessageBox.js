import { useEffect, useRef, useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import './MessageBox.css';
import Users from '../../Shared/UserList/Users'

function MessageBox(props) {
  console.log('TCL ->  ~ file: MessageBox.js ~ line 6 ~ MessageBox ~ props', props);
  const messagesRef = props.firestore.collection('messages');
  console.log('TCL ->  ~ file: MessageBox.js ~ line 8 ~ MessageBox ~ messagesRef', messagesRef);

  const firebase = props.firebase;
  let updateText = props.text;
  const messageId = props.messageId;
  // const [text, setUpdateText] = useState('');

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    setFormValue('');
    e.preventDefault();
    const { uid, photoURL, } = firebase.auth().currentUser;
    const user = {
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    }

    if (!updateText) {
      await messagesRef.add(user);
    } else {
      await props.firestore.collection('messages').doc(messageId).update(user);
      props.updateMessage({ id: null, message: null });
    }

  }

  useEffect(() => {
    if (updateText) {
      setFormValue(updateText);
    }
  }, [updateText]);

  return (<>

    <form onSubmit={sendMessage}>
      {/* {formValue.includes('@') ? <Users /> : null} */}

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type message..." />

      <button type="submit" disabled={!formValue}> <IoMdSend />Send</button>

    </form>
  </>)
}

export default MessageBox;