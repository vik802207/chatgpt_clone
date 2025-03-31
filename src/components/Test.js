import React from 'react'
import Context from './Context/Context'


function Test(props) {

    const {state}=props
  return (
  <>
<Context.Provider value={state}>{props.children} </Context.Provider>
  </>
  )
}

export default Test