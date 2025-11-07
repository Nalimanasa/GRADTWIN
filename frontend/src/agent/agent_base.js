import React from 'react'
import {useState} from 'react'
import Analyse from './agent_analyse'
import Material from './agent_materialview'
import Home from '../home' 
import Residue from './agent_residue'
import Project from '../project'

function Base(){
    const[currentPage,setCurrentpage]=useState()

    const handleNavigation=(pagename)=>{
        setCurrentpage(pagename)
    }

    const renderpage=()=>{
        switch(currentPage){
            case 'analyse':
                return <Analyse onNavigate={handleNavigation} />
            case 'materialview':
                return <Material onNavigate={handleNavigation} />
            case 'residue':
                return <Residue onNavigate={handleNavigation} />
            case 'back':
                return <Project onNavigate={handleNavigation} />
            default:
            return <Home onNavigate={handleNavigation} />               
        }
    }
    return(
        <div style={{backgroundImage:`url(https://www.shutterstock.com/image-photo/factory-aluminum-pvc-windows-doors-260nw-1055814968.jpg)`,
            backgroundSize:" cover",
            backgroundPosition: "center",height:"100%",width:"100%"
        }}>
            <div style={style.div} >
                <header style={style.header}>
                           <h1>agent</h1>
                      <nav style={style.nav}>
                       <ul style={style.ul} >
                           <li  style={style.li} onClick={()=>handleNavigation('home')} >
                         home
                      </li> 
                      <li  style={style.li} onClick={()=>handleNavigation('analyse')} >
                        ANALYSE
                      </li> 
                      <li  style={style.li} onClick={()=>handleNavigation('materialview')} >
                        MATERIAL VIEW
                      </li> 
                      <li  style={style.li} onClick={()=>handleNavigation('residue')} >
                        RESIDUE
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