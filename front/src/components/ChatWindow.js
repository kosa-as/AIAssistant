// src/components/ChatWindow.js
/*
* 数据设计
* 1.聊天内容设计：
* {
    key : uuidV4(),
    isUser: true,
    user :{
      uid : '',
      avatar : '1',
      uname:'wwh',
    },
    content : '介绍一下react',
    ctime:dayjs(new Date()).format('YY-MM-DD hh:mm')
  },

  * 2.历史记录设计：
  * {
      historyKey : uuidV4(),
      title : 'qwsad',
      communicationList :
      ['qweqwrfdsas','qewrqwqrrqw',],
      time : 'YY-MM-DD'
  * }
* */
import React, {useState} from 'react';
import './ChatWindow.css';
import {v4 as uuidV4} from 'uuid';
import dayjs from "dayjs";


const ChatWindow = ({ isSidebarVisible, lists }) => {
  // lists= [
  //       {
  //           key : uuidV4(),
  //           isUser: true,
  //           user :{
  //               uid : '',
  //               avatar : '1',
  //               uname:'wwh',
  //           },
  //           content : '介绍一下react',
  //           ctime:dayjs(new Date()).format('YY-MM-DD hh:mm:ss A')
  //       },
  //       {
  //           key : uuidV4(),
  //           isUser: false,
  //           user :{
  //               uid : '',
  //               avatar : '1',
  //               uname:'wwh',
  //           },
  //           content : 'React 是一个用于构建用户界面的开源JavaScript库，由Facebook开发并维护。React的核心思想是将用户界面(UI)分解为小的、可复用的组件，这些组件可以独立开发和维护。React的主要特性包括：组件化：React鼓励开发者使用组件化的方式来构建应用，每个组件管理自己的状态(state)和渲染逻辑。虚拟DOM：React使用虚拟DOM来提高性能。当组件的状态发生变化时，React会生成一个新的虚拟DOM树，并与旧的虚拟DOM树进行比较，计算出最小的更新操作，然后应用到实际的DOM上。声明式编程：React采用声明式编程范式，开发者只需要描述UI应该呈现的样子，React会负责更新DOM。单向数据流：React使用单向数据流，即数据从顶层组件流向子组件，但子组件不能直接修改父组件的状态，而是通过回调函数来通知父组件状态的变化。JSX：React使用JSX语法扩展，允许开发者在JavaScript代码中写类似HTML的标记，这使得组件的结构更加清晰。生命周期方法：React组件有一套生命周期方法，开发者可以在组件的不同阶段执行特定的逻辑。Hooks：React 16.8 引入了Hooks，允许在函数组件中使用状态和其他React特性，无需编写类组件。生态系统：React拥有一个庞大的生态系统，包括React Native（用于移动应用开发）、React Router（用于Web应用的路由）、Redux（用于状态管理）等。社区支持：由于React的流行，它拥有一个活跃的社区，提供了大量的教程、工具和第三方库。React适用于构建各种规模的Web应用，从简单的静态页面到复杂的单页应用(SPA)。它的灵活性和强大的生态系统使其成为前端开发中的一个非常受欢迎的选择。',
  //           ctime:dayjs(new Date()).format('YY-MM-DD hh:mm:ss A')
  //       },
  //       {
  //           key : uuidV4(),
  //           isUser: true,
  //           user :{
  //               uid : '',
  //               avatar : '1',
  //               uname:'wwh',
  //           },
  //           content : '介绍一下react',
  //           ctime:dayjs(new Date()).format('YY-MM-DD hh:mm:ss A')
  //       },
  //       {
  //           key : uuidV4(),
  //           isUser: false,
  //           user :{
  //               uid : '',
  //               avatar : '1',
  //               uname:'wwh',
  //           },
  //           content : 'React 是一个用于构建用户界面的开源JavaScript库，由Facebook开发并维护。React的核心思想是将用户界面(UI)分解为小的、可复用的组件，这些组件可以独立开发和维护。React的主要特性包括：组件化：React鼓励开发者使用组件化的方式来构建应用，每个组件管理自己的状态(state)和渲染逻辑。虚拟DOM：React使用虚拟DOM来提高性能。当组件的状态发生变化时，React会生成一个新的虚拟DOM树，并与旧的虚拟DOM树进行比较，计算出最小的更新操作，然后应用到实际的DOM上。声明式编程：React采用声明式编程范式，开发者只需要描述UI应该呈现的样子，React会负责更新DOM。单向数据流：React使用单向数据流，即数据从顶层组件流向子组件，但子组件不能直接修改父组件的状态，而是通过回调函数来通知父组件状态的变化。JSX：React使用JSX语法扩展，允许开发者在JavaScript代码中写类似HTML的标记，这使得组件的结构更加清晰。生命周期方法：React组件有一套生命周期方法，开发者可以在组件的不同阶段执行特定的逻辑。Hooks：React 16.8 引入了Hooks，允许在函数组件中使用状态和其他React特性，无需编写类组件。生态系统：React拥有一个庞大的生态系统，包括React Native（用于移动应用开发）、React Router（用于Web应用的路由）、Redux（用于状态管理）等。社区支持：由于React的流行，它拥有一个活跃的社区，提供了大量的教程、工具和第三方库。React适用于构建各种规模的Web应用，从简单的静态页面到复杂的单页应用(SPA)。它的灵活性和强大的生态系统使其成为前端开发中的一个非常受欢迎的选择。',
  //           ctime:dayjs(new Date()).format('YY-MM-DD hh:mm:ss A')
  //       },
  //       {
  //           key : uuidV4(),
  //           isUser: true,
  //           user :{
  //               uid : '',
  //               avatar : '1',
  //               uname:'wwh',
  //           },
  //           content : '介绍一下react',
  //           ctime:dayjs(new Date()).format('YY-MM-DD hh:mm:ss A')
  //       },
  //       {
  //           key : uuidV4(),
  //           isUser: false,
  //           user :{
  //               uid : '',
  //               avatar : '1',
  //               uname:'wwh',
  //           },
  //           content : 'React 是一个用于构建用户界面的开源JavaScript库，由Facebook开发并维护。React的核心思想是将用户界面(UI)分解为小的、可复用的组件，这些组件可以独立开发和维护。React的主要特性包括：组件化：React鼓励开发者使用组件化的方式来构建应用，每个组件管理自己的状态(state)和渲染逻辑。虚拟DOM：React使用虚拟DOM来提高性能。当组件的状态发生变化时，React会生成一个新的虚拟DOM树，并与旧的虚拟DOM树进行比较，计算出最小的更新操作，然后应用到实际的DOM上。声明式编程：React采用声明式编程范式，开发者只需要描述UI应该呈现的样子，React会负责更新DOM。单向数据流：React使用单向数据流，即数据从顶层组件流向子组件，但子组件不能直接修改父组件的状态，而是通过回调函数来通知父组件状态的变化。JSX：React使用JSX语法扩展，允许开发者在JavaScript代码中写类似HTML的标记，这使得组件的结构更加清晰。生命周期方法：React组件有一套生命周期方法，开发者可以在组件的不同阶段执行特定的逻辑。Hooks：React 16.8 引入了Hooks，允许在函数组件中使用状态和其他React特性，无需编写类组件。生态系统：React拥有一个庞大的生态系统，包括React Native（用于移动应用开发）、React Router（用于Web应用的路由）、Redux（用于状态管理）等。社区支持：由于React的流行，它拥有一个活跃的社区，提供了大量的教程、工具和第三方库。React适用于构建各种规模的Web应用，从简单的静态页面到复杂的单页应用(SPA)。它的灵活性和强大的生态系统使其成为前端开发中的一个非常受欢迎的选择。',
  //           ctime:dayjs(new Date()).format('YY-MM-DD hh:mm:ss A')
  //       },
  //       {
  //           key : uuidV4(),
  //           isUser: true,
  //           user :{
  //               uid : '',
  //               avatar : '1',
  //               uname:'wwh',
  //           },
  //           content : '介绍一下react',
  //           ctime:dayjs(new Date()).format('YY-MM-DD hh:mm:ss A')
  //       },
  //       {
  //           key : uuidV4(),
  //           isUser: false,
  //           user :{
  //               uid : '',
  //               avatar : '1',
  //               uname:'wwh',
  //           },
  //           content : 'React 是一个用于构建用户界面的开源JavaScript库，由Facebook开发并维护。React的核心思想是将用户界面(UI)分解为小的、可复用的组件，这些组件可以独立开发和维护。React的主要特性包括：组件化：React鼓励开发者使用组件化的方式来构建应用，每个组件管理自己的状态(state)和渲染逻辑。虚拟DOM：React使用虚拟DOM来提高性能。当组件的状态发生变化时，React会生成一个新的虚拟DOM树，并与旧的虚拟DOM树进行比较，计算出最小的更新操作，然后应用到实际的DOM上。声明式编程：React采用声明式编程范式，开发者只需要描述UI应该呈现的样子，React会负责更新DOM。单向数据流：React使用单向数据流，即数据从顶层组件流向子组件，但子组件不能直接修改父组件的状态，而是通过回调函数来通知父组件状态的变化。JSX：React使用JSX语法扩展，允许开发者在JavaScript代码中写类似HTML的标记，这使得组件的结构更加清晰。生命周期方法：React组件有一套生命周期方法，开发者可以在组件的不同阶段执行特定的逻辑。Hooks：React 16.8 引入了Hooks，允许在函数组件中使用状态和其他React特性，无需编写类组件。生态系统：React拥有一个庞大的生态系统，包括React Native（用于移动应用开发）、React Router（用于Web应用的路由）、Redux（用于状态管理）等。社区支持：由于React的流行，它拥有一个活跃的社区，提供了大量的教程、工具和第三方库。React适用于构建各种规模的Web应用，从简单的静态页面到复杂的单页应用(SPA)。它的灵活性和强大的生态系统使其成为前端开发中的一个非常受欢迎的选择。',
  //           ctime:dayjs(new Date()).format('YY-MM-DD hh:mm:ss A')
  //       },
  //       {
  //           key : uuidV4(),
  //           isUser: true,
  //           user :{
  //               uid : '',
  //               avatar : '1',
  //               uname:'wwh',
  //           },
  //           content : '介绍一下react',
  //           ctime:dayjs(new Date()).format('YY-MM-DD hh:mm:ss A')
  //       },
  //       {
  //           key : uuidV4(),
  //           isUser: false,
  //           user :{
  //               uid : '',
  //               avatar : '1',
  //               uname:'wwh',
  //           },
  //           content : 'React 是一个用于构建用户界面的开源JavaScript库，由Facebook开发并维护。React的核心思想是将用户界面(UI)分解为小的、可复用的组件，这些组件可以独立开发和维护。React的主要特性包括：组件化：React鼓励开发者使用组件化的方式来构建应用，每个组件管理自己的状态(state)和渲染逻辑。虚拟DOM：React使用虚拟DOM来提高性能。当组件的状态发生变化时，React会生成一个新的虚拟DOM树，并与旧的虚拟DOM树进行比较，计算出最小的更新操作，然后应用到实际的DOM上。声明式编程：React采用声明式编程范式，开发者只需要描述UI应该呈现的样子，React会负责更新DOM。单向数据流：React使用单向数据流，即数据从顶层组件流向子组件，但子组件不能直接修改父组件的状态，而是通过回调函数来通知父组件状态的变化。JSX：React使用JSX语法扩展，允许开发者在JavaScript代码中写类似HTML的标记，这使得组件的结构更加清晰。生命周期方法：React组件有一套生命周期方法，开发者可以在组件的不同阶段执行特定的逻辑。Hooks：React 16.8 引入了Hooks，允许在函数组件中使用状态和其他React特性，无需编写类组件。生态系统：React拥有一个庞大的生态系统，包括React Native（用于移动应用开发）、React Router（用于Web应用的路由）、Redux（用于状态管理）等。社区支持：由于React的流行，它拥有一个活跃的社区，提供了大量的教程、工具和第三方库。React适用于构建各种规模的Web应用，从简单的静态页面到复杂的单页应用(SPA)。它的灵活性和强大的生态系统使其成为前端开发中的一个非常受欢迎的选择。',
  //           ctime:dayjs(new Date()).format('YY-MM-DD hh:mm:ss A')
  //       }
  //   ]
  const selectUserType = (item) =>{//依据消息来源来渲染页面
    if(item.isUser){
      return(
          <div key={item.key} className="message user">
            <div className="message-header user-header">
              <span className="username">{item.user.uname}</span>
              <img src= {item.user.avatar} alt="User Avatar" className="avatar" />
            </div>
            <div className="message-body">
              {item.content}
            </div>
            <div className="message-footer">
              <span className="timestamp">{item.ctime}</span>
            </div>
          </div>
      )
    }
    return(
        <div key={item.key} className="message assistant">
          <div className="message-header assistant-header">
            <img src={item.user.avatar} alt="Assistant Avatar" className="avatar" />
            <span className="username">{item.user.uname}</span>
          </div>
          <div className="message-body">
            {item.content}
          </div>
          <div className="message-footer">
            <span className="timestamp">{item.ctime}</span>
          </div>
        </div>
    )
  }
  const handleSend = ()=>{//处理用户输入的文本信息
    setRespond([...respond,
      {
        key : uuidV4(),
        sUser: true,
        user :{
          uid : '',
          avatar : '1',
          uname:'wwh',
        },
        content : content,
        ctime:dayjs(new Date()).format('YY-MM-DD hh:mm')
      }
    ])
      //对滑动栏的更新
  }

  const [respond,setRespond] = useState(lists)
  const [content,setContent] = useState("")

  return (
    <div className={`chat-window ${isSidebarVisible ? 'shrink' : ''}`}>
      <div className="chat-content">
        {
          respond.map(item => (
              selectUserType(item)
          ))
        }
      </div>
      <div className="input-container">
        <input
            placeholder = "请输入"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
        />
        <button onClick={handleSend}>发送</button>
      </div>
    </div>
  );
};

export default ChatWindow;
