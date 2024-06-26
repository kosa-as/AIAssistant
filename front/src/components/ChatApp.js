// src/components/ChatApp.js
import React, { useState } from 'react';

import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import './ChatApp.css';

const ChatApp = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isSidebarFixed, setSidebarFixed] = useState(false);

  const handleMouseEnter = () => {
    if (!isSidebarFixed) {
      setSidebarVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isSidebarFixed) {
      setSidebarVisible(false);
    }
  };

  const toggleSidebarFixed = () => {
    setSidebarFixed(!isSidebarFixed);
  };

  return (
    <div className="chat-app">
      <div className="hover-area" onMouseEnter={handleMouseEnter}></div>
      <Sidebar
        isVisible={isSidebarVisible}
        isFixed={isSidebarFixed}
        toggleFixed={toggleSidebarFixed}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <ChatWindow isSidebarVisible={isSidebarVisible} />
    </div>
  );
};

export default ChatApp;
