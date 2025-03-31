/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
import Logo from "./Logo";
import { Home } from "@mui/icons-material";
import Test from "./Test";
import History from "./History";
import Data from "./Context/Data";

function Chats(props) {
  const { value, message ,clear} = props;
  const [history, setHistory] = useState([]);
  const [state, setstate] = useState([]);

  useEffect(() => {
    Allmsg(message);
    Allhistory(value);
  }, [props.value]);

  useEffect(()=>{
    if(clear>0){
      setHistory([])
    }
  },[clear])

  const Allmsg = (item) => {
    if (value != null) {
      history.push("You:" + " " + value);
    }

    setHistory([...history, item]);
  };
  const Allhistory=(item)=>{
    setstate([...state, item])

  }
  return (
    <>
    <Data state={state}/>
    <History/>
      {history.map((item, index) => (
        <>
          <div className="M" key={index}>
            <div className="logo">
              <Logo />
            </div>
            <h6 key={index} className="content"> {item}</h6>
          </div>
        </>
      ))}
      
    </>
  );
}

export default Chats;
