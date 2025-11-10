import React, {useState  } from 'react';
import './agent.css'
import axios from 'axios';
import Userlogin from './agent_login'


function Register(){
    const[form,setForm]=useState({
        name:'',
        email:'',
        password:'',
        username:'',
        gender:'',
        phone:'',
        city:'',
        state:'',
        country:'',
        pincode:'',
        address:''
    })
    const[items,setItems]=useState([]);

    const fetchItems=() =>{
        console.log("Submitting form:", form);
        axios.get("http://127.0.0.1:8000/agent_register_api/")
        .then(res =>setItems(res.data))
        // .catch(err =>console.error(err));
        .catch(err => console.log(err.response?.data || err.message))
    };


//     useEffect(() => {
//     fetchItems();
// }, [fetchItems]);


    const addItem = (e) =>{
        console.log("Submitting form:", form);
        e.preventDefault();
        axios.post('"https://gradtwin-backend.onrender.com/agent_register_api/',form ,{
  headers: { "Content-Type": "application/json" }
})
        .then(() =>{
            setForm({
         name:'',
        email:'',
        password:'',
        username:'',
        gender:'',
        phone:'',
        city:'',
        state:'',
        country:'',
        pincode:'',
        address:''
            });
             fetchItems();
        })
        // .catch(err =>console.error(err));
        .catch(err => console.log(err.response?.data || err.message))
    };
 

    const [showlogin ,setShowlogin]=useState()
    return(
        <main className='img'>
            {!showlogin ?(
        <div><br/>
            <center>
              <h1 style={{color:"red",backgroundColor:"whitesmoke"}}>REGISTER PAGE </h1>
                <form
                 onSubmit={addItem}>
                    <center>
                <table>
                    <tr>
                        <td>NAME</td>
                        <td><input type="text"
                         placeholder="enter your name" 
                         value={form.name}
                         onChange={(e) =>setForm({...form, name:e.target.value})} /></td>
                    </tr>
                    <tr>
                        <td>EMAIL</td>
                        <td><input type="text" placeholder="enter your email" 
                         value={form.email}
                         onChange={(e) =>setForm({...form, email:e.target.value})}  />
                    </td>
                     </tr>
                     <tr>
                        <td>USERNAME</td>
                        <td><input  type="text" placeholder="enter your username" 
                         value={form.username}
                         onChange={(e) =>setForm({...form, username:e.target.value})} /></td>
                    </tr>
                    <tr>
                        <td>PASSWORD</td>
                        <td><input  type="password" placeholder="enter your password" 
                         value={form.password}
                         onChange={(e) =>setForm({...form, password:e.target.value})} /></td>
                    </tr>
                    <tr>
                        <td>GENDER</td>
                        <td><input type="radio" value="female" 
                        checked={form.gender === "female"}
                        onChange={(e) =>setForm({...form, gender:e.target.value})}
                        />Female
                        <input type="radio" value="male"
                        checked={form.gender === "male"}
                        onChange={(e) =>setForm({...form, gender:e.target.value})} />male
                        </td>
                    </tr>
                    <tr>
                        <td>PHONE</td>
                        <td><input  type="text" placeholder="enter your phone" 
                         value={form.phone}
                         onChange={(e) =>setForm({...form, phone:e.target.value})}  />
                    </td>
                    </tr>
                    <tr>
                        <td>CITY</td>
                        <td><input  type="text" placeholder="enter your city"
                         value={form.city}
                         onChange={(e) =>setForm({...form, city:e.target.value})} />
                    </td>
                    </tr>
                    <tr>
                        <td>STATE</td>
                        <td><input  type="text" placeholder="enter your state" 
                         value={form.state}
                         onChange={(e) =>setForm({...form, state:e.target.value})} />
                    </td>
                    </tr>
                    <tr>
                        <td>COUNTRY</td>
                        <td><input type="text" placeholder="enter your country" 
                         value={form.country}
                         onChange={(e) =>setForm({...form, country:e.target.value})}  />
                    </td>
                    </tr>
                    <tr>
                        <td><label>PINCODE</label></td>
                        <td><input type="text" placeholder="enter your pincode" 
                         value={form.pincode}
                         onChange={(e) =>setForm({...form, pincode:e.target.value})} />
                    </td>
                    </tr>
                    <tr>
                        <td><label>ADDRESS</label></td>
                        <td><input type="text" placeholder="enter your address" 
                         value={form.address}
                         onChange={(e) =>setForm({...form, address:e.target.value})} />
                    </td>
                    </tr>
                </table>
                 <tr>
                     <td>   Already have a account?</td>
                     <span style={{color:"red",cursor:"pointer"}}
                      onClick={()=>setShowlogin(true)}>
                            sign in
                            </span>
                </tr><br/>
                <tr>
                    <center>
                           <button type="submit">REGISTER</button>
                    </center>
                    </tr>
                    </center><br/><br/>
        </form>
        </center>
        </div>  
             ):(
                <Userlogin />
             )}
              </main>
    )
}

export default Register;