import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import './practisev.css'
function Practisev() {
   const [form,setForm]=useState({
      email:'',
      password:'',
      fristname:'',
      lastname:'',
      check:true,
      employ:'',
      select:'',
      employ:'',
      textarea:'',

   })
   const handclick=(event)=>{
      const {name,value,checked,type}=event.target
      setForm(prevstate=>{
         return {
            ...prevstate,
            [name]:type==='checkbox'?checked:value
         }
      })
   }
   const handform=(event)=>{
      event.preventDefault()
      console.log(form)
   }

  return(
   <div>
      <div className="formcontainer">
<form onSubmit={handform}>
<label>email</label>
<input type='text' className="inputemail" name="email" value={form.email} placeholder='email' onChange={handclick}/><br/>
<label>password</label>
<input type='text' className="inputemai2" name="password" value={form.password} placeholder='password' onChange={handclick}/><br/>
<label>fristname</label>
<input type='text' className="inputemai3" name="fristname" value={form.fristname} placeholder='fristname' onChange={handclick}/><br/>
<label>lastname</label>
<input type='text' className="inputemai4" name="lastname" value={form.lastname} placeholder='lastname' onChange={handclick}/><br/>
<label>are you student</label>
<input type='checkbox' className="inputemai5" name="check" checked={form.check} value="check" onChange={handclick}/><br/>
<textarea className="textarea"  placeholder="text"/><br/>
<label class="text-danger">type of employ</label><br/>
<label>unemploy</label>
<input type='radio' className="inputemai6" name="employ" checked={form.employ==='unemploy'} value="unemploy" onChange={handclick}/><br/>
<label>halftime</label>
<input type='radio' className="inputemai7" name="employ" checked={form.employ==='halftime'} value="halftime" onChange={handclick}/><br/>
<label>fulltime</label>
<input type='radio' className="inputemai8" name="employ" checked={form.employ==='fulltime'} value="fulltime" onChange={handclick}/><br/>
<select className="select1" name="select" value={form.select} onChange={handclick}>
<option>age</option>
<option>18+</option>
<option>u30</option>
<option>none</option>
</select><br/>
<button type='submite' className="button1"><abbr title="log in">Submite</abbr></button>
</form>
   </div>
      
   </div>
  )
    
}
export default Practisev