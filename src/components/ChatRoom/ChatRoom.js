
import { useEffect, useRef, useState } from 'react';
import ChatMessage from '../ChatMessages/ChatMessages';
import MessageBox from '../MessageBox/MessageBox';
import './ChatRoom.css';


function ChatRoom(props) {
  const [messages, setMessage] = useState([]);
  const firestore = props.firestore;
  const firebase = props.firebase;
  const [updateText, setUpdateText] = useState('');
  const [messageId, setMessageId] = useState('');
  const dummy = useRef();


  // let updateText;

  //    await firestore.collection('messages').onSnapshot((snapshot)=>{
  //    console.log('TCL ->  ~ file: ChatRoom.js ~ line 17 ~ awaitfirestore.collection ~ snapshot',snapshot.docs.map(doc=>doc.data()));
  // // messages = snapshot.docs;
  //    setMessage(snapshot.docs.map(doc=>doc.data()))
  //   });
  //   console.log('TCL ->  ~ file: ChatRoom.js ~ line 16 ~ ChatRoom ~ messages', messages);
  // const query = messagesRef.orderBy('createdAt').limitToLast(25);

  // const [messages] = useCollectionData(query, { idField: 'id' });

  const updateMessage = ({ id, message }) => {
  // console.log('TCL ->  ~ file: ChatRoom.js ~ line 30 ~ updateMessage ~ message', message);
  // console.log('TCL ->  ~ file: ChatRoom.js ~ line 30 ~ updateMessage ~ id', id);
    // if (message) {
      setMessageId(id);
      setUpdateText(message);
    // }
  }

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    firestore.collection('messages').orderBy('createdAt', 'asc').onSnapshot((snapshot) => {
      setMessage(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    });
  }, []);


  return (<>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} firebase={firebase} firestore={firestore} updateMessage={updateMessage} />)}
      <span ref={dummy}></span>
    </main>

    <MessageBox firebase={firebase} firestore={firestore} text={updateText} messageId={messageId} updateMessage={updateMessage} />
  </>)

}


export default ChatRoom;
