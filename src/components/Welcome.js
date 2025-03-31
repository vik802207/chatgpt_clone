/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Image from './GPT.png'
import { Card, CardContent,Typography } from '@mui/material'
function Welcome() {
  return (
 <>
 <div className='Welcome'>
 <img src={Image} alt="Chat" style={{height:60,width:60}} />
    <h4 style={{fontWeight:800,marginTop:5}}>How can I help you Today?</h4>
 </div>
<div className="a">
<div className='new'>
<div className="container">
<div class="row">
<div class="col">
<Card sx={{ minWidth: 200 }}>
<CardContent>
Write a Overview
</CardContent>
</Card>
</div>
<div class="col">
<Card sx={{ minWidth: 200 }}>
<CardContent>Write a text</CardContent>
</Card>
</div>
</div>
<div class="row">
<div class="col ">
<Card sx={{ minWidth: 200 }}>
<CardContent>Plan a trip</CardContent>
</Card>
</div>
<div class="col ">
<Card sx={{ minWidth: 200 }}>
<CardContent>Write a spreadsheet formula</CardContent>
</Card>
</div>
</div>
</div>
</div>
</div>
 </>
  )
}

export default Welcome