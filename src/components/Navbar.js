/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { Button, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";
import ScrollIntoView from "react-scroll-into-view";
// import History from "./History";
import Chats from "./Chats";
import Typegpt from "./Typegpt";
import Context from "./Context/Context";
import History from "./History";
import Logo from "./Logo";
import LogoNew from "./LogoNew";
import Welcome from "./Welcome";

// import { purple } from "@mui/material/colors";
function Navbar() {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState([]);
  const [finalvalue, setFinalvalue] = useState(null);
  const [clear, setClear] = useState(0);
  const [state, setstate] = useState([]);
  const [count, setcount] = useState(0);

  const getmsg = async () => {
    const url = "http://localhost:8000/completion";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: value,
      }),
    });
    const data = await response.json();
    setMessage(data.choices[0].message.content);
    setFinalvalue(value);
    setValue("");
    setcount(count + 1);
  };

  useEffect(() => {
    allsms();
  }, [count]);

  useEffect(() => {
    if (clear > 0) {
      setMessage([]);
      setstate([])
    }
  }, [clear]);

  const allsms = () => {
    if (value != null) {
      state.push(finalvalue);
    }
  };

  console.log(state);
  return (
    <>
      <div className="main">
        <section className="sidebar">
          <div className="chat">
            <Button
              variant="outlined"
              style={{ textTransform: "capitalize" }}
              className="Button"
              color="secondary"
              onClick={() => {
                setClear(clear + 1);
                setcount(0);
              }}
            >
              <LogoNew />
              New Chat
            </Button>
          </div>

          <div className="hr">
            <hr />
            <p>Made by Ania</p>
          </div>

          <div className="user">
            {state.map((e) => (
              <li>{e}</li>
            ))}
          </div>
        </section>

        <div className="AniaGpt">
          <h1>ChatGPT</h1>
        </div>
        <div style={{ width: "100%", height: 10, flexDirection: "row" }}>
          <TextField
            className="textField"
            color="secondary"
            size="small"
            id="outlined-basic"
            placeholder="Enter to Search"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></TextField>
          <Button
            disabled={!value ? true : false}
            className="send"
            onClick={() => getmsg()}
            endIcon={<Send />}
          ></Button>
          <div className="hii">
            <Chats value={finalvalue} message={message} clear={clear} />
          </div>

          <div className="chatbox">
            <Typegpt />
          </div>
          {
            count===0? <div className="end">
            <Welcome/>
            </div>:null
          }
         
        
        </div>
        
      </div>
    </>
  );
}

export default Navbar;
