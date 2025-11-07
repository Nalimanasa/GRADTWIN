import React from 'react'
import {useState } from 'react'
import './project.css'
import Project from '../project.js'
import About from '../pages/about.js'
import Production from'../pages/production.js'
import Main from '../pages/main.js'
import Extraction from '../pages/extraction.js'
import Contact from '../pages/contact.js'
import Footer from '../pages/footer.js'
import Raw from '../pages/recovery.js'

function Explore(){
    const [currentpage ,setCurrentpage]=useState("home")
    

const handleNavigation=(pagename) =>{
    setCurrentpage(pagename);
}


const renderpage = () => {
    switch (currentpage) {
        case 'home':
            return <Main onNavigate={handleNavigation} />
        case 'about':
            return <About onNavigate={handleNavigation} />
        case 'production':
            return  <Production onNavigate={handleNavigation} />
        case 'extraction':
            return <Extraction onNavigate={handleNavigation} />
        case 'recovery':
            return <Raw  onNavigate={handleNavigation} />
        case "contact":
            return <Contact  onNavigate={handleNavigation} />
        case 'project':
                return <Project onNavigate={handleNavigation} />    
        default:
            return <Main onNavigate={handleNavigation} />
    }
};

return(
    <div className="project">
     <header className="header">
                <h1>AluX </h1>
           <nav className="sidenav">
            <ul>
                <li  onClick={()=>handleNavigation("home")} >
                HOME
           </li> 
            <li  onClick={()=>handleNavigation("about")} >
                ABOUT
           </li> 
         <li  onClick={()=>handleNavigation("production")} >
                    PRODUCTION
          </li>
         <li onClick={()=>handleNavigation("extraction")} >
                    EXTRACTION
          </li>
         <li onClick={()=>handleNavigation("recovery")} >
            recovery 
            </li> 
        <li><input type='text' placeholder='search'/></li>
      <li onClick={()=>handleNavigation("contact")} >
        contact
    </li>
    <li onClick={()=>handleNavigation("project")}>
        Back 
    </li>
            </ul>
           </nav>
      </header>

<main className="main-content">
    {renderpage()}
    </main> 


  <Footer /> 
</div>
)
}

export default Explore;