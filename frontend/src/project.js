import React from 'react'
import {useState} from 'react'
import Home from './home.js'
import Register from './agent/agent_register'
import Deligatorregister from './deligator/deligator_register.js'
import Explore from './environment/explore.js'
import admin from './pages/admin.png'
import Details from './environment/eni_details.js'
import Scrapregister from './scrap_management/scrap_register'


function Project(){
    const [Currentpage ,setCurrentpage]=useState('home')

    const handleNavigation=(pagename)=>{
        setCurrentpage(pagename)
    }

    const renderpage=()=>{
        switch(Currentpage ){
            case 'Agent':
                return <Register onNavigate={handleNavigation} />
            case 'Deligator':
                return <Deligatorregister onNavigate={handleNavigation} />
            case 'admin':
                return <Details  onNavigate={handleNavigation} />
            case 'explore':
                return <Explore onNavigate={handleNavigation} />   
            case 'ScrapManagement':
                return <Scrapregister onNavigate={handleNavigation} />            
            default:
                return <Home onNavigate={handleNavigation} />    
        }
    }
        return(
         <div>
            <main style={style.main}>
                <header style={style.header}>
                    <h1>ALUX</h1>
                    <nav style={style.nav}>
                        <ul style={style.ul}>
                         <li style={style.li}
                         onClick={()=>handleNavigation()}>
                           home</li>
                           <li style={style.li}
                         onClick={()=>handleNavigation('Agent')}>
                           Agent</li>
                           <li style={style.li}
                         onClick={()=>handleNavigation('Deligator')}>
                           Deligator</li>
                           <li style={style.li}
                         onClick={()=>handleNavigation('ScrapManagement')}>
                           ScrapManagement</li>
                           <li style={style.li}
                         onClick={()=>handleNavigation('explore')}>
                           Explore</li>

                           <li style={style.li} onClick={() => handleNavigation("admin")}>
                                          <img
                                            src={admin}
                                            alt="adminlogin"
                                            style={{ height: "30px", width: "30px", background: "none" }}
                                          />
                                        </li>
                        </ul>
                        </nav>
                </header>
            </main>
            <span style={style.span} >
                {renderpage()}
            </span>
         </div>
    )
}

const style={
main:{
    margin:"0px",
    padding:"5px",
   
},

header:{
    position: "fixed",
  top: "0",
  width: "100%",
  height: "70px",
  backgroundColor:" #1a3e72",
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
    padding:"0px 200px",
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

export default Project