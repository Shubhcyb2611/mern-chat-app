import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("https://staging.wrkble.com/api/courses");

    setChats(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <div>{chat.title} </div>
      ))}
    </div>
  );
};

export default Chatpage;
