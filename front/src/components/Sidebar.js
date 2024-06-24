// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isVisible, isFixed, toggleFixed, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`sidebar ${isVisible ? 'visible' : 'hidden'} ${isFixed ? 'fixed' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="top-display">
        <button className="fixed-button" onClick={toggleFixed}>
          {isFixed ? '取消固定' : '固定'}
        </button>
        <text>历史记录</text>
      </div>

      <ul>
        <li>ChatGPT</li>
        <li>扩展 GPT</li>
        <li>教育</li>
        <li>设置</li>
        {/* 添加更多菜单项 */}
      </ul>
    </div>
  );
};

export default Sidebar;
