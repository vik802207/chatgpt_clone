import React ,{useContext} from 'react'
import Context from './Context/Context'
function ChatH() {
    const dataAll=useContext(Context)
    console.log(dataAll);
  return (
 <>
<p>Hii</p>
 </>
  )
}

export default ChatH