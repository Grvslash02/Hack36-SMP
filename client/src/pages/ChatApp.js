import React, { useState } from "react";
import Layouts from "./../components/Layouts.js";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      // Add the message with the sender's information
      setMessages([...messages, { text: currentMessage, sender: "user" }]);
      setCurrentMessage("");
    }
  };

  // Dummy function to simulate receiving a message from another user
  const receiveMessage = (text) => {
    setMessages([...messages, { text, sender: "other" }]);
  };

  return (
    <Layouts>
      <div
        style={{
          display: "flex",
          height: "85vh",
          backgroundColor: "#F5F7FA",
        }}
      >
        {/* Main Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Chat Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #E0E0E0",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              backgroundImage: `url("https://img.freepik.com/free-vector/group-therapy-illustration_74855-5516.jpg?t=st=1713594392~exp=1713597992~hmac=a532426553e38d2fbf18e5cf70a3c89100cc9237519425c6d6a653e226ab6740&w=1060")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #E0E0E0",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  backgroundColor:
                    message.sender === "user" ? "#DCF8C6" : "#FFFFFF",
                  alignSelf:
                    message.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "25%", // Limit message width for better readability
                  marginLeft: message.sender === "user" ? "auto" : "0",
                  marginRight: message.sender === "user" ? "0" : "auto",
                  textAlign: "left", // Text will be left-aligned in the message box
                }}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div
            style={{
              display: "flex",
              marginTop: "10px",
            }}
          >
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #E0E0E0",
                marginRight: "10px",
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: "10px 20px",
                backgroundColor: "#34B7F1", // Use a blue color similar to WhatsApp
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default ChatApp;
