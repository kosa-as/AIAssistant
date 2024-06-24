// src/components/ChatWindow.js
import React from 'react';
import './ChatWindow.css';

const ChatWindow = ({ isSidebarVisible }) => {
  return (
    <div className={`chat-window ${isSidebarVisible ? 'shrink' : ''}`}>
      <div className="chat-content">
        <div className="message user">用户消息示例</div>
        <div className="message assistant">ChatGPT回复示例</div>
        {/* 更多消息 */}
      </div>
      <div className="input-container">
        <input type="text" placeholder="输入你的消息..." />
        <button>发送</button>
      </div>
    </div>
  );
};

export default ChatWindow;
