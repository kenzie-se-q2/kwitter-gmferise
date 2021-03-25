// TODO: Create a MessageList to display messages
import MessageItem from './MessageItem';
import { useStore } from '../store/store';

function MessageList(props) {
  const msg = useStore((state) => state.messages);

  return (
    <div className="MsgList">
      {msg.map(m => (
        <MessageItem {...m} key={m.id} likeCount={m.likes.length}/>
      ))}
    </div>
  );
}
export default MessageList;
