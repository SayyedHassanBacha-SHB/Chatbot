import { useAutoScroll } from '../myownhooks/useAutoScroll';
import dayjs from 'dayjs'
import UserImage from '../assets/images/user.png'
import RobotImage from '../assets/images/robot.png'
import SpinnerImage from '../assets/images/loading-spinner.gif' 
import '../style/ChatMessages.css'

 export function ChatMessages({chatMessages, isLoading}){
  const chatMessagesRef = useAutoScroll([chatMessages, isLoading]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef} >
      {chatMessages.map((chatmessage) => {
        return (
        <ChatMessage message = {chatmessage.message} sender = {chatmessage.sender} key = {chatmessage.id} />
        )
      })}
      {isLoading && <ChatMessage message={<img className="loader" src={SpinnerImage} />} sender="robot" isLoading={isLoading} />}
    </div>
  )
}

function ChatMessage({message, sender, isLoading}){
  const day = dayjs().format("hh:mma");
  return (
    <div className="chat-message-container">
      {sender === "robot" && <img className="robot-image" src={RobotImage} alt="images_icons"/>}
      <span className="message">{message}<p className="message-time">{!isLoading && day}</p></span>
      {sender === "user" && <img className="user-image" src={UserImage} alt="images_icons" />}
    </div>
  )
};

export function InitialMessage(){
  return(
    <p className="initial-message">Welcome to the chatbot project! Send a message using the textbox above.</p>
  )
}