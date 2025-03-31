/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Context from './Context'
function Maincontext(props) {
    const state={
        "name": "main",
        "children":"5"
    }
  return (
    <>
    <Context.Provider value={state}>{props.children} </Context.Provider>
    </>
    
  )
}

export default Maincontext;