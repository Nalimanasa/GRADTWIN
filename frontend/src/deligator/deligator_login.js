import React from 'react';
import {useState} from 'react';
import './deligator.css'
import axios from "axios";
import Base from './del_main.js'



function Userlogin(props){
    const[showBase,setShowbase]=useState(false)
    const[form,setForm]=useState({
        username:'',
        password:''
    })
    
    const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/agent_userlogin/", {
        username: form.username,
        password: form.password
      });
      if (res.status === 200) {
        alert("Login successful! Welcome");
        setShowbase(true);  // ✅ Show Base page after login
      }
    } catch (err) {
      alert("Invalid username or password");
    }
  };

  // ✅ If Base page should show
  if (showBase) {
    return <Base />; 
  }

    return(
        <main className='user'> 
         <div>
        <center>
                <h1 style={{color:"red",backgroundColor:"whitesmoke"}}>LOGIN PAGE</h1>
                <form onSubmit={handlelogin}>
         <table>
            <tbody>
            <tr>
                    <td> <label>USERNAME</label></td>
                    <td><input type="text" placeholder="enter your username"
                     value={form.username} 
                      onChange={e => setForm({...form, username: e.target.value })}/></td>
            </tr>
        <tr>
                    <td><label>password</label></td>
                    <td><input  type="password"  placeholder="enter your password"  value={form.password} onChange={e => setForm({ ...form ,password: e.target.value })}/></td>
        </tr>    
        </tbody>  
        </table>
        <div style={{textAlign:'center',marginTop:'10px'}}>
                    <button type='submit'>login</button>
              
        </div>
        </form>
        </center>
        </div>
        </main>
    )
}

export default Userlogin;

