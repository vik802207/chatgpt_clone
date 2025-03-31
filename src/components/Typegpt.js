/* eslint-disable react/jsx-no-undef */
import React,{useState} from 'react'
import {FormControl,MenuItem,Select,InputLabel, SelectChangeEvent } from '@mui/material'
function Typegpt() {
    const [age, setAge] = useState('')
    const [state, setstate] = useState('ChatGPT3.5')
    const handleAgeChange=(e)=>{
        setAge(e.target.value)
        setstate('')
    }
  return (

    <>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" variant="standard" color="secondary">
    <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{color:'black',fontWeight:'bolder',fontFamily:'sans-serif'}}>{state}
    </InputLabel>
      <Select
      value={age}
      onChange={handleAgeChange}
      style={{fontWeight:'bolder'}}
      >
      <MenuItem value={'ChatGPT3.5'} style={{fontWeight:'bolder'}} >ChatGPT3.5</MenuItem>
      <MenuItem value={'ChatGPT4'}style={{fontWeight:'bolder'}}>ChatGPT4</MenuItem>
      <MenuItem value={'Adversarial GPT-J'}style={{fontWeight:'bolder'}}>Adversarial GPT-J</MenuItem>

      </Select>
    </FormControl>
    </>
  )
}

export default Typegpt