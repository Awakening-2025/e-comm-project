// ChatIcon.jsx
import React from 'react';
import { FaComments } from 'react-icons/fa';

const ChatIcon = ({ onClick }) => {
  const iconStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#25D366',
    color: 'white',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    zIndex: 1000,
  };

  return (
    <div style={iconStyle} onClick={onClick} title="Chat with us!">
      <FaComments />
    </div>
  );
};

export default ChatIcon;
