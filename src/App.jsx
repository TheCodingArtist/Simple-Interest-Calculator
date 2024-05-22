
import { Stack, TextField,Button, getFormLabelUtilityClasses } from '@mui/material'
import './App.css'
import { useState } from 'react'
function App() {
    const [interest,setInterest] = useState(0)
    const [principle,setPrinciple] = useState(0)
    const [rate,setRate] = useState(0)
    const [year,setYear] = useState(0)
    const [isPrincipleInvalid,setisPrincipleInvalid] = useState (false)
    const [isRateInvalid,setisRateInvalid] = useState (false) 
    const [isYearInvalid,setisYearInvalid] = useState (false)  
console.log(principle);
const handleInputValidation = (tag) =>{
   const {name,value} = tag
   console.log(name,value);
console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
if(!!value.match(/^\d*.?\d+$/)){
//valid
if(name=='principle'){
  setPrinciple(value)
  setisPrincipleInvalid(false)
}
else if(name=='rate'){
  setRate(value)
  setisRateInvalid(false)
}
else{
  setYear(value)
  setisYearInvalid(false)
}
}
else{
 //invalid
 if(name=='principle'){
  setPrinciple(value)
  setisPrincipleInvalid(true)
}
else if(name=='rate'){
  setRate(value)
  setisRateInvalid(true)
}
else{
  setYear(value)
  setisYearInvalid(true)
}
}
}

 const handleCalculate = (e)=>{
  e.preventDefault()
  if(principle && rate && year){
     setInterest(principle*rate*year/100)
  }else{
    alert("Please fill the form completely")
  }
  }
  const handleReset=()=>{
    setPrinciple(0)
    setInterest(0)
    setRate(0)
    setYear(0)
    setisPrincipleInvalid(false)
    setisRateInvalid(false)
    setisYearInvalid(false)
  }
  return (
    <div className='parent-div' >
      <div  className='child-div'>
      <h3> Simple Interest Calculator</h3>
      <h5>Calculate your simple interest Esily</h5>
      <div className='d-flex align-items-center justify-content-center flex-column shadow' id='result-div'>
            <p style={{fontSize:'50px'}}> {interest}  </p>
            <h4>Total Simple Interest</h4>
      </div>
      <form className='mt-5'>
        <div className='mb-3'>
        <TextField value={principle || ""} onChange={
          (e)=>handleInputValidation(e.target)} name='principle' className='w-100' id="principle" label="Principle Amount" variant="outlined" 
        />
        </div>
        { isPrincipleInvalid &&
          <div className='mb-3 text-danger fw-bolder'>Invalid principle Amount</div>
          }
        <div className='mb-3'>
        <TextField value={rate || ""} onChange={
          (e)=>handleInputValidation(e.target)} name='rate' className='w-100' id="rate" label="Rate of interest (p.a)%" variant="outlined" />
        </div>
        { isRateInvalid &&
          <div className='mb-3 text-danger fw-bolder'>Invalid Amount</div>
          }
        <div className='mb-3'>
        <TextField value={year || ""} onChange={
          (e)=>handleInputValidation(e.target)} name='year' className='w-100' id="year" label="Time Period (yr)" variant="outlined" />
        </div>
        { isYearInvalid &&
          <div className='mb-3 text-danger fw-bolder'>Invalid Year</div>
          }
        <Stack direction="row" spacing={2}>
        <Button disabled = {isPrincipleInvalid || isRateInvalid || isYearInvalid} type='submit' onClick={handleCalculate} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
        <Button onClick={e=>handleReset(e.target)} style={{width:'50%',height:'70px'}}  variant="outlined">Reset</Button>
        </Stack>
      </form>
      </div>
    </div>
  )
}

export default App
