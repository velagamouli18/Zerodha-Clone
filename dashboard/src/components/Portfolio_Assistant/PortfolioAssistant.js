import React, { useState, useRef, useEffect } from "react";
import "./PortfolioAssistant.css";
import ReactMarkdown from "react-markdown";
import api from "../../api";

const PortfolioAssistant = ({ open, setOpen }) => {
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
    {
        role: "assistant",
        content:
        "Hi Mouli 👋 I'm your Portfolio Assistant. Ask me anything about your holdings, positions or orders."
    }
    ]);
    

    const [typing, setTyping] = useState(false);

    const messagesEndRef = useRef(null);

    useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
    });
    }, [messages, typing]);

    const sendMessage = async () => {

    if (input.trim() === "") return;

    const userMessage = {
        role: "user",
        content: input
    };

    const updatedMessages = [
        ...messages,
        userMessage
    ];

    setMessages(updatedMessages);

    setInput("");

    setTyping(true);

    try {

        const res = await api.post("/chat", {
            messages: updatedMessages
        });

        setTyping(false);

        setMessages(prev => [
            ...prev,
            {
                role: "assistant",
                content: res.data.reply
            }
        ]);

    } catch (err) {

        setTyping(false);

        console.error(err);

    }

};

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
            className="assistant-btn"
            onClick={() => setOpen(true)}
        >
            🤖
        </button>
    )}

      {/* Sidebar */}
      <div className={`assistant-sidebar ${open ? "open" : ""}`}>
        <div className="assistant-header">
          <h3>Portfolio Assistant</h3>
          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="assistant-body">

            {messages.map((msg,index)=>(
                <div
                    key={index}
                    className={`message ${msg.role}`}
                >
                    <ReactMarkdown>
                        {msg.content}
                    </ReactMarkdown>
                </div>
            ))}

            {typing && (
                <div className="message assistant typing">
                    Typing...
                </div>
            )}

            <div ref={messagesEndRef}></div>

        </div>

        <div className="assistant-input">
          <input
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    sendMessage();
                }
            }}
        />

          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default PortfolioAssistant;