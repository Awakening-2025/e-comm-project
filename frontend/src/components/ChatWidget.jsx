
import React, { useState, useEffect, useRef } from 'react';
import ChatIcon from './ChatIcon';
// import ChatIcon from './ChatIcon';
// import ChatWindow from './ChatWindow'; // You'll build this

// --- Styles for ChatWindow (Example) ---
const chatWindowStyle = {
  position: 'fixed',
  bottom: '90px', // Above the icon
  right: '30px',
  width: '350px',
  height: '400px',
  backgroundColor: 'white',
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 999,
  overflow: 'hidden', // Important for border-radius on children
};
const chatHeaderStyle = {
  backgroundColor: '#0A192F', // Your theme dark blue
  color: '#d4a053', // Your theme gold
  padding: '15px',
  fontSize: '1.2em',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
const closeButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#d4a053',
  fontSize: '1.5em',
  cursor: 'pointer',
};
const messagesContainerStyle = {
  flexGrow: 1,
  padding: '15px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
};
const messageStyle = (isUser) => ({
  maxWidth: '75%',
  padding: '10px 15px',
  borderRadius: '15px',
  marginBottom: '10px',
  wordWrap: 'break-word',
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  backgroundColor: isUser ? '#d4a053' : '#f0f0f0', // Gold for user, light grey for bot
  color: isUser ? '#0A192F' : '#333', // Dark text for user, regular for bot
});
const inputAreaStyle = {
  display: 'flex',
  padding: '10px',
  borderTop: '1px solid #eee',
};
const inputStyle = {
  flexGrow: 1,
  border: '1px solid #ddd',
  borderRadius: '20px',
  padding: '10px 15px',
  marginRight: '10px',
  outline: 'none',
};
const sendButtonStyle = {
  padding: '10px 15px',
  backgroundColor: '#0A192F', // Dark blue
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  fontWeight: 'bold',
};
// --- End Styles ---


const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null); // For scrolling to bottom

  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const newUserMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInputValue('');

    // --- Simulate AI response / Call AI API ---
    // For example, with OpenAI API (you'd need a backend proxy for security)
    try {
      // IMPORTANT: NEVER expose API keys on the client-side.
      // This call should go to YOUR backend, which then calls OpenAI.
      // const response = await fetch('/api/chat-with-ai', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ message: inputValue }),
      // });
      // const data = await response.json();
      // const botResponse = { id: Date.now() + 1, text: data.reply, sender: 'bot' };

      // Simulated response:
      setTimeout(() => {
        const botResponse = { id: Date.now() + 1, text: `You said: "${newUserMessage.text}". I am a simple bot.`, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botResponse]);
      }, 1000);

    } catch (error) {
      console.error("Error sending message to AI:", error);
      const errorResponse = { id: Date.now() + 1, text: 'Sorry, I encountered an error.', sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, errorResponse]);
    }
    // --- End AI call ---
  };

  return (
    <>
      <ChatIcon onClick={toggleChat} />
      {isOpen && (
        // Replace this with your actual ChatWindow component
        <div style={chatWindowStyle}>
          <div style={chatHeaderStyle}>
            <span>Awakening AI Chat</span>
            <button style={closeButtonStyle} onClick={toggleChat}>×</button>
          </div>
          <div style={messagesContainerStyle}>
            {messages.map(msg => (
              <div key={msg.id} style={messageStyle(msg.sender === 'user')}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* For auto-scroll */}
          </div>
          <div style={inputAreaStyle}>
            <input
              type="text"
              style={inputStyle}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
            />
            <button style={sendButtonStyle} onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};
export default ChatWidget;