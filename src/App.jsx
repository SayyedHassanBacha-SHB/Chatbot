import { useState } from 'react'
import { ChatInput } from './components/ChatInput.jsx'
import { ChatMessages, InitialMessage } from './components/ChatMessages.jsx';
import './App.css'


export function App(){
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return(
    <div className="app-container">
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} isLoading={isLoading} setIsLoading={setIsLoading}/>
      {chatMessages.length === 0 && <InitialMessage />}
      <ChatMessages chatMessages={chatMessages} isLoading={isLoading}/>
    </div>
  )
};
