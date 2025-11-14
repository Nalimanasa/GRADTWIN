import React from 'react';
import {useState} from 'react';
import './administrator/scarp.css'
import axios from "axios";
import Pending from './agent/agent_pending'

function Adminlogin(props){
    
    const[form,setForm]=useState({ username:'', password:'', email:'' })
     const handlelogin= async (e) => {
         e.preventDefault();
          try{
             const res=await axios.post("https://gradtwin-backend.onrender.com/eni_adminlogin/",
                 { username: form.username, password: form.password },
                  { headers:{ 'content-type':'application/json' }, });
                   if (res.status === 200)  {
                     alert("Login successful! Welcome ");
                      props.onLoginSuccess(); 
                     
                     props.onNavigate("project"); 
                    } 
                    alert('admin registerd succesfully'+res.data.id);
                 } catch(err){ console.error(err);
                     alert('error registering admin'); 
                    }
                 };
                  console.log("Form data:", form);
                const[showPending,setPending]=useState() 
                
                
                return( 
                <div className='admin'>
                     {!showPending ?( 
                        <div> 
                            <center>
                                <br/><br/>
                        <h1>LOGIN PAGE</h1> 
                         <form onSubmit={handlelogin}>
                     <table>
                         <tbody> 
                            <tr>
                                 <td> <label>USERNAME</label></td> 
                                 <td><input type="text" placeholder="enter your username"
                                  value={form.username} onChange={e => setForm({...form, username: e.target.value })}/></td> </tr> 
                                  <tr>
                                     <td><label>PASSWORD</label></td>
                                      <td><input type="password" placeholder="enter your password"
                                       value={form.password} onChange={e => setForm({ ...form ,password: e.target.value })}/>
                                       </td> </tr> 
                                       <tr> 
                                        <td><label>email</label></td>
                                         <td><input type="text" placeholder="enter your text"
                                          value={form.email} onChange={e => setForm({ ...form ,email: e.target.value })}/>
                                          </td> 
                                          </tr>
                                           </tbody>
                                            </table>
                     <div style={{textAlign:'center',marginTop:'10px'}}>
                         <button type='submit'>login</button><br/><br/>
                            {localStorage.getItem("isAdmin") === "true" && (
        <div style={{textAlign:'center',marginTop:'10px'}}>
          
             <span  className="span" onClick={()=>setPending(true)}>
                PENDINGLIST
             </span>
             
             </div>
         )}
         </div>
                            </form> 
                            </center>
                            </div>
                              ):(
                 <span>
         {/* ✅ Block unauthorized access */}
      {localStorage.getItem("isAdmin") === "true" ? (
          <>
            {showPending && <Pending />}
           
          </>
        ) : (
          <h3 style={{color:"red"}}>Access Denied! Admin only.</h3>
        )}
      </span>
    )}
    </div>
 
)
}

export default Adminlogin;                                         