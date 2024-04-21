import React, { useEffect, useState } from "react";

export const ReactKey = () => {
  const [messages, setMessages] = useState([]);

  // 模拟实时变化的数据
  useEffect(() => {
    const timer = setInterval(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length,
          price: 100,
          content: `message ${prev.length}`,
        },
      ]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>{message.content}</div>
        // <div>{message.content}</div>
        // <div key={message.price}>{message.content}</div>
        // <div key={message.key}>{message.content}</div>
      ))}
    </div>
  );
};
