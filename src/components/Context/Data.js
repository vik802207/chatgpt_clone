import React,{useEffect, useState} from 'react'
import Context from './Context'


function Data(props) {
    // const data=props.state
    const state={
      "a":"harry",
      "class":"5"
    }
    // console.log(data);
  return (
    <>
   
    <Context.Provider value={"state"}>{props.children} </Context.Provider>
    
      </>
  )
}

export default Data