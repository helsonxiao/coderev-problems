import React, { useEffect, useRef, useState } from "react";

export const CombineSetIntervealAndUseState = () => {
  const [messages, setMessages] = useState([]);
  const messageCountRef = useRef(0);

  useEffect(() => {
    messageCountRef.current = messages.length;
  }, [messages]);

  // 模拟实时变化的数据
  useEffect(() => {
    const timer = setInterval(() => {
      setMessages((prev) => [...prev, `message ${prev.length}`]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("messages.length", messages.length);
      console.log("messages.length", messageCountRef.current);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <>{messages.length}</>;
};
