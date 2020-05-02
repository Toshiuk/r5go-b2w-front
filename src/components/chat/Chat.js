import React from "react";

import "./chat.css";

const Chat = () => (
  <div className="chat">
    <iframe
      className="chatIframe"
      title="chat"
      src="https://console.dialogflow.com/api-client/demo/embedded/675ec37a-8c7c-407c-b017-db1498963ea0"
    />
  </div>
);

export default Chat;
