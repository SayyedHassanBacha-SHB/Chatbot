import { useState, useRef, useEffect } from "react";
import {Chatbot} from 'supersimpledev'
import '../style/ChatInput.css'


export function ChatInput({chatMessages, setChatMessages, isLoading, setIsLoading}){
  const chatInputText = useRef(null);
  useEffect(() => {
    if(chatInputText){
    chatInputText.current.focus();
    }
  },[chatMessages]);
  const [inputText, setInputText] = useState("");
  function saveInputText(event){
    setInputText(event.target.value);
  }
  async function sendMessage(){
    const newChatMessages = [
      ...chatMessages,{
      message:inputText,
      sender:"user",
      id:crypto.randomUUID(),
    }];
    setChatMessages(newChatMessages);
    setInputText("");
    setIsLoading(true);
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,{
      message:response,
      sender:"robot",
      id:crypto.randomUUID(),
    }]);
    setIsLoading(false);
  }

  function pressEnter(event){
    if(event.key === "Enter"){
      sendMessage();
    }
    else if(event.key === "Escape"){
      setInputText("");
    }
  }

  function clearInput(){
    setInputText("");
    setChatMessages([]);
  }
  return (
    <div className="chat-input-container" >
      <input ref={chatInputText} className="input-text" type="text" placeholder="Send a message to chatbot" onChange={saveInputText}  value={inputText} onKeyDown={pressEnter} disabled={isLoading} />
      <button className="send-button" onClick={sendMessage} >Send</button>
      <button className="clear-button" onClick={clearInput} >Clear</button>

    </div>
    )
};