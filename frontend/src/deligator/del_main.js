import React from 'react'
import {useState} from 'react'
// import Analyse from './agent_analyse'
// import Material from './agent_materialview'
import Home from '../home' 
// import Residue from './agent_residue'
import Progress from './del_progress'
import Process from './del_process'
import Project from '../project'

function Base(){
    const[currentPage,setCurrentpage]=useState()

    const handleNavigation=(pagename)=>{
        setCurrentpage(pagename)
    }

    const renderpage=()=>{
        switch(currentPage){
             case 'back':
                return <Project onNavigate={handleNavigation} />
             case 'progress':
                return <Progress onNavigate={handleNavigation} /> 
            case 'process':
                return <Process onNavigate={handleNavigation} /> 
            default:
            return <Home onNavigate={handleNavigation} />               
        }
    }
    return(
        <div style={{backgroundImage:`url(https://c8.alamy.com/comp/2SACD29/stacked-aluminum-extrusions-forming-an-industrial-metallic-background-3d-2SACD29.jpg)`,
              backgroundSize:" cover",
            backgroundPosition: "center",height:"100%",width:"100%"
        }}>
            <div style={style.div} >
                <header style={style.header}>
                           <h1>DELIGATOR</h1>
                      <nav style={style.nav}>
                       <ul style={style.ul} >
                           <li  style={style.li} onClick={()=>handleNavigation('home')} >
                         home
                      </li>
                    
                      <li  style={style.li} onClick={()=>handleNavigation('progress')} >
                         PROGRESS
                      </li> 
                      <li  style={style.li} onClick={()=>handleNavigation('process')} >
                         PROCESS
                      </li> 
                      <li  style={style.li} onClick={()=>handleNavigation('back')} >
                        Back
                      </li> 
                      </ul>
                      </nav>
                      </header>
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
    backgroundColor:"greenyellow",
},

header:{
    position: "fixed",
  top: "0",
  width: "100%",
  height: "70px",
  backgroundColor:"orange",
  color: "white",
  display: "flex",
  justifyContent:" space-between",
  alignItems: "center",
  padding: "0 30px",
  zindex: "1000",
},
nav:{
    display:"flex",
    color:"white",
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

export default Base