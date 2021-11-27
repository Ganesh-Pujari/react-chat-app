import './ChatMessages.css';
import Popover from '../../Shared/Popover/Popover';
import { useEffect, useState } from 'react';


function ChatMessage(props) {
  const [showPopover, setPopover] = useState(false);
  const auth = props.firebase.auth();
  const { text, uid, photoURL, id } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  const getSelectedOption = async (selectedOption, id, message) => {
    if (selectedOption === 'edit' && message) {
      props.updateMessage({ id, message });
    } else {
      await props.firestore.collection('messages').doc(id).delete();
    }
    setPopover(false);
  }




  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      {showPopover && uid === auth.currentUser.uid ? <Popover getSelectedOption={getSelectedOption} id={id} message={text} /> : null}
      <p onClick={() => setPopover(!showPopover)}>{text} </p>

    </div>
  </>)
}

export default ChatMessage;