import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import "./App.css"

function App() {
  return (
    <div className="app">
      {/* <h1>Hello Huy Nguyen... Let's build a MERN Whatsapp 🚀</h1> */}
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat component */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
