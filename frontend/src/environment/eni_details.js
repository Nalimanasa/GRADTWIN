import {React, useState,useEffect} from "react"
import Agentpending from './agent_pending'
import Delpending from './del_pending'
import Scrappending from './scrap_pending'
import Project from '../project.js'
import Adminlogin from '../adminlogin.js'



function Details(){
const[currentPage,setCurrentpage]=useState('login')
const[isAuthenticated,setAuthenticated]=useState(false)
const[isAdmin,setAdmin]=useState(false)


useEffect (()=>{
  const storedAdmin=localStorage.getItem('isAdmin')
  const storedUser=localStorage.getItem('isAuthenticated')

  if (storedAdmin === 'true'){
    setAdmin(true);
    setAuthenticated(true)
  }
  else if (storedUser === 'true'){
    setAuthenticated(true);
    setAdmin(false);
  }
},[currentPage])
    const handleNavigation=(pagename)=>{
      if (!isAdmin) return alert("Access denied: Admins only.");
        setCurrentpage(pagename)
    }

     const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
    setAdmin(false);
    setCurrentpage("login");
  };
  const renderpage = () => {
    if (!isAuthenticated) {
      return (
        <Adminlogin
          onLoginSuccess={() => {
            localStorage.setItem("isAdmin", "true");
            setAuthenticated(true);
            setAdmin(true);
            setCurrentpage("agent");
          }}
          onNavigate={handleNavigation}
        />
      );
    }
  

    if (isAdmin) {
      switch (currentPage) {
            case 'login':
              return <Adminlogin    onNavigate={handleNavigation} />
            case 'agent':
                return <Agentpending onNavigate={handleNavigation} />
            case 'deligator':
                return <Delpending onNavigate={handleNavigation} />
            case 'scrap':
                return <Scrappending onNavigate={handleNavigation} />
            case "project":
              return <Project onNavigate={handleNavigation} />
            default:
            return <Agentpending onNavigate={handleNavigation} />               
        }
    }
    return <h2>Access Denied — Admin Only</h2>;
  }
    return(
        <div>
            <div style={style.div} >
               {isAdmin && (
                <header style={style.header}>
                           <h1>admin</h1>
                      <nav style={style.nav}>
                       <ul style={style.ul} >

                           <li  style={style.li} onClick={()=>handleNavigation('login')} >
                         admin
                      </li> 
                      <li  style={style.li} onClick={()=>handleNavigation('agent')} >
                        Agent
                      </li> 
                      <li  style={style.li} onClick={()=>handleNavigation('deligator')} >
                        Deligator
                      </li> 
                      <li  style={style.li} onClick={()=>handleNavigation('scrap')} >
                         Scrap
                      </li>
                      <li  style={style.li} onClick={()=>handleNavigation('project')} >
                        back
                      </li> 
                      <li> 
            <button  onClick={() => window.open("https://gradtwin-backend.onrender.com/agent_material_approved/")}
                       style={{ padding: "8px 16px",
                                backgroundColor: "#28a745",
                                color: "white",
                                 border: "none",
                                 borderRadius: "5px",
                                cursor: "pointer"
                               }}>
                               Download Approved Excel
                            </button></li>
                      <li style={style.li} onClick={handleLogout}>
                Logout
              </li>
                      </ul>
                      </nav>
                      </header> 
               )}
        </div>
         <span style={style.span}>{renderpage()}
    </span><br/>
        </div>
    )
}
const style={
div:{
    margin:"0px",
    padding:"0px",
    height:"100%",
    width:"100%"
},

header:{
    position: "fixed",
  top: "0",
  width: "100%",
  height: "70px",
  backgroundColor:"orange",
  display: "flex",
  justifyContent:" space-between",
  alignItems: "center",
  padding: "0 30px",
  zindex: "1000",
},
nav:{
    display:"flex",
},
li:{
    display:"flex",
    listStyle:"none",
    padding:"0px 15px",
},
ul:{
    display:"flex",
    padding:"0px 300px",
    margin:"30px",
},
input:{
    padding:"0px",
},
span:{
  overflowY: "auto",
  padding: "-1px 10px 80px ",/* top/bottom padding for header & footer space */
  backgroundColor:" #f9f9f9",
},
}

export default Details
