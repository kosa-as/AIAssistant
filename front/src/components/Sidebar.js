// src/components/Sidebar.js
import React, {useState} from 'react';
import './Sidebar.css';
import {v4 as uuidV4} from 'uuid';

const list = [
  {
    historyKey : uuidV4(),
    title : 'man',
    communicationList : ['hello','world',],
    time : 'YY-MM-DD'
  },

  {
    historyKey : uuidV4(),
    title : 'woman',
    communicationList : ['hei','word',],
    time : 'YY-MM-DD'
  }
]

const handleClick = (item)=>{
  console.log(item.title)
}
const Sidebar = ({ isVisible, isFixed, toggleFixed, onMouseEnter, onMouseLeave }) => {
  const [history, setHistory] = useState(list)
  return (
    <div
      className={`sidebar ${isVisible ? 'visible' : 'hidden'} ${isFixed ? 'fixed' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className="top-display">
        <button className="fixed-button" onClick={toggleFixed}>
          {isFixed ? '取消固定' : '固定'}
        </button>
        <text>历史记录</text>
      </div>

      <ul>{

        history.map(item =>(
          <li key = { item.historyKey} onClick={() => handleClick(item)}> {item.title} </li>
        ))
      }
      </ul>
    </div>
  );
};

export default Sidebar;
