import React  ,{useState } from 'react'
import Register from '../agent/agent_register.js'
import case_img from './case_img.png'
import industry from './industry.jpg'
import program from './program.jpg'
import secure from './secure image.png'
import image from './image.jpg'
import aluminium from './aluminum.jpg'
import byproducts from './byproducts.jpg'
import data from  './data.jpg'
import user from './user.jpeg'
import ecofriendly from './eco.jpg'
import real from './real.jpg'
import Customer from '../pages/customer.js'
import core from './core.jpg'

function Page (){
 const [Showlogin ,setShowlogin]=useState(false)
    return(
        <page>
            {!Showlogin ? (
        <div style={style.div}><br/>
          <h1 style={style.h1}>Smart Aluminum Solutions </h1>
           <p style={style.p}>
            The smart aluminum factory information solution aims to integrate the existing system, build a unified production integrated management information <br/>
           system platform, and eliminate the information island problem of each production unit. The plan requires all parts of flue gas purification, electrolysis<br/>
            workshop, casting workshop, power workshop, laboratory, inspection and warehouse, production management department and so on to share information,<br/>
             achieve transparency in the production process,digital management decisions, intelligent operations, and help the transformation and upgrading<br/>
              of aluminum factories.</p> <br/><br/>

              <button style={style.button} 
                      onClick={()=>setShowlogin(true)}>
                            consult now
                            </button>
        </div>
            ):(
                <Register />
            )
        }

        <div>
            <h2 style={style.h2}>industry pain points</h2>
            <main style={style.main}>
                <div style={style.sectiondiv}>
                    <h3 style={{textAlign:"center"}}>Purpose of the Project</h3>
                    <span>The project aims to develop a comprehensive aluminum extraction
                     and processing platform that ensures efficient<br/> resource recovery,
                      accurate yield prediction, and eco-friendly by-product management
                      using the Bayer process.</span>
                </div>
                <div style={style.sectiondiv}>
                   <h3 style={{textAlign:"center"}}>Core Features</h3>
                    <span>Secure user registration and admin approval system.
Predictive analysis tools to estimate aluminum yield before processing.
Role-based access control separating users and administrators.
By-product management module for handling residues like red mud and manganese.</span>
                </div>
                <div style={style.sectiondiv}>
                    <h3 style={{textAlign:"center"}}>Technologies and Platform Knowledge</h3>
                    <span>The platform uses Python, a high-level, interpreted language, for
                     data analysis, backend processing, and integration with analytical models.
                      Python’s dynamic typing and garbage collection simplify system design
                       and memory management.</span>
                </div>
            </main><br/>
        <main style={style.main}>
                <div style={style.sectiondiv}>
                    <h3 style={{textAlign:"center"}}>Existing System Limitations</h3>
                    <span>Manual and fragmented aluminum extraction processes.

Lack of coordination among agents and scrap teams.

Poor utilization of by-products like red mud.

No central platform or automation for predictions and management.</span>
                </div>
                <div style={style.sectiondiv}>
                  <h3 style={{textAlign:"center"}}>Proposed System Advantages</h3>
                    <span>Automated and predictive workflow improving accuracy and efficiency.

Eco-friendly approach using intelligent algorithms for residue reuse.

Minimal data requirements and easy system deployment.

Efficient monitoring and control for administrators.</span>  
                </div>
                <div style={style.sectiondiv}>
                   <h3 style={{textAlign:"center"}}>Future Enhancements</h3>
                    <span>Integration of machine learning models to improve yield prediction.

Expansion to include recovery of other valuable materials.

Adoption of renewable energy solutions in production to boost sustainability.</span> 
                </div>
            </main>
        </div>
        <div>
            <h2 style={{textAlign:"center",color:"white",height:"50px",paddingTop:"30px",backgroundImage:`url(${core})`}}>Core function systems</h2>
            <section2 style={style.section}>
                <div style={style.section2div}>
                   <h3 style={{textAlign:"center"}}>User and Administrator Management</h3>
                   <span>
                   <li> Provides secure registration and login for all users.</li>
                  <li> Includes admin approval for new user accounts before access is granted.</li>
                   <li>Implements role-based access control — only authorized users and admins can perform specific operations.</li>
                   </span>
                </div>
                <div style={style.section2div}>
                   <h3 style={{textAlign:"center"}}>Raw Material Analysis and Data Processing</h3>
                   <span>
                   <li>Accepts input data for raw materials like bauxite, caustic soda, and temperature.</li>
                  <li> Uses analytical algorithms to predict aluminum yield before actual processing.</li>
                   <li>Ensures accuracy and efficiency by evaluating the quality and composition of raw materials.</li>
                   
                   </span>
                </div>
            </section2><br/>


            <section2 style={style.section}>
                <div style={style.section2div}>
                   <h3 style={{textAlign:"center"}}>Aluminum Extraction Module (Bayer Process)</h3>
                   <span>
                   <li>Simulates and manages the Bayer process for refining aluminum oxide (Al₂O₃) from bauxite. </li>
                  <li>Tracks parameters like temperature, pressure, and chemical concentration to optimize production. </li>
                   <li>Generates reports on extraction efficiency and purity levels.</li>
                   </span>
                </div>
                <div style={style.section2div}>
                    <h3 style={{textAlign:"center"}}>By-Product and Waste Management</h3>
                   <span>
                   <li>Handles and monitors by-products such as red mud and manganese alloys.</li>
                  <li>Integrates an intelligent algorithm to suggest reuse and recycling options for by-products. </li>
                   <li>Promotes eco-friendly and sustainable waste utilization.</li>
                   </span>
                </div>
            </section2><br/>


            <section2 style={style.section}>
                <div style={style.section2div}>
                     <h3 style={{textAlign:"center"}}>Resource Recovery and Optimization</h3>
                   <span>
                   <li>Focuses on recovering valuable elements from industrial residues.</li>
                  <li> Ensures maximum resource utilization and minimal environmental impact.</li>
                   <li>Helps in identifying potential secondary products from waste materials.</li>
                   </span>
                </div>
                <div style={style.section2div}>
                    <h3 style={{textAlign:"center"}}>Reporting and Monitoring Dashboard</h3>
                   <span>
                   <li>Provides a centralized dashboard for admins and users to monitor processes.</li>
                  <li>Displays real-time data on yield predictions, extraction progress, and recovery efficiency. </li>
                   <li>Enables admins to analyze system performance and generate detailed reports.</li>
                   </span>
                </div>
            </section2><br/>


            <section2 style={style.section}>
                <div style={style.section2div}>
                     <h3 style={{textAlign:"center"}}>Security and Data Management</h3>
                   <span>
                   <li>Protects all system operations through secure APIs and data encryption.</li>
                  <li>Stores user, process, and material data in structured databases for future analysis. </li>
                   <li>Maintains audit logs for transparency and traceability.</li>
                   </span>
                </div>
                <div style={style.section2div}>
                    <h3 style={{textAlign:"center"}}>More</h3>
                   <span>
                    MORE
                                      </span>
                </div>
            </section2>
        </div>

         <div>
             <h2 style={{paddingTop:"30px",
        textAlign:"center" ,
        height:"60px",
        width:"100%",
        backgroundImage:`url(${program})`,
        backgroundSize:"cover",color:"white"}}>program highlights</h2>
             <section3 style={style.section}>
                <div style={style.section3div}><br/>
                    <img src={secure} alt="secure" style={{height:"250px", width:"300px",}} /><br/>
                    <br/><br/>
                    <h3 style={{textAlign:"center",}}>Secure Multi-Level Access</h3>
                   <span>
                    Separate login systems for users and administrators.

Admins can approve, monitor, and manage users, ensuring controlled system access.
                    </span>
                </div>
                <div style={style.section3div}>
                    <img src={image} alt="secure" style={{height:"200px", width:"300px",}} /><br/>
                    <br/><br/>
                    <h3 style={{textAlign:"center"}}>Intelligent Raw Material Analysis</h3>
                   <span>
                    Uses input data such as bauxite content, temperature, and moisture levels.

Employs predictive algorithms to estimate aluminum yield before processing begins.
                     </span>
                </div>
                <div style={style.section3div}>
                    <img src={aluminium} alt="aluminium" style={{height:"200px", width:"300px",}} /><br/>
                    <br/><br/>
                   <h3 style={{textAlign:"center"}}>Automated Aluminum Extraction Workflow</h3>
                   <span>
                    Implements the Bayer Process for refining aluminum oxide efficiently.

Provides an interactive interface for monitoring and adjusting process parameters.
                      </span>
                </div>
                <div style={style.section3div}>
                    <img src={byproducts} alt="byproducts" style={{height:"200px", width:"300px",}} /><br/>
                    <br/><br/>
                   <h3 style={{textAlign:"center"}}>By-Product Recovery and Sustainability</h3>
                   <span>
                    Efficiently manages red mud, manganese residues, and other by-products.

Promotes recycling and reuse through intelligent resource recovery modules.
                      </span>
                </div>
             </section3>

             <section3 style={style.section}>
             <div style={style.section3div}>
                <img src={data} alt="data" style={{height:"200px", width:"300px",}} /><br/>
                    <br/><br/>
                   <h3 style={{textAlign:"center"}}>Data-Driven Decision Support</h3>
                   <span>
                   Integrates analytical tools for process optimization and yield prediction.

Generates comprehensive reports and visual dashboards for system performance monitoring.
                      </span>
                </div>
                <div style={style.section3div}>
                    <img src={user} alt="user friendly" style={{height:"200px", width:"300px",}} /><br/>
                    <br/><br/>
                   <h3 style={{textAlign:"center"}}>User-Friendly Interface</h3>
                   <span>
                    Simple and responsive web design using React for easy navigation.

Clear separation between home, about, production, extraction, and contact modules.
                      </span>
                </div>
                <div style={style.section3div}>
                    <img src={ecofriendly} alt="eco-friendly" style={{height:"200px", width:"300px",}} /><br/>
                    <br/><br/>
                   <h3 style={{textAlign:"center"}}>Eco-Friendly and Cost-Effective</h3>
                   <span>
                   Minimizes waste through resource optimization and by-product utilization.

Encourages sustainable aluminum production practices with minimal environmental impact.
                      </span>
                </div>
                <div style={style.section3div}>
                    <img src={real} alt="real" style={{height:"200px", width:"300px",}} /><br/>
                    <br/><br/>
                   <h3 style={{textAlign:"center"}}>Real-Time Monitoring and Feedback System</h3>
                   <span>
                   Enables live tracking of extraction efficiency, temperature, and material flow.

Provides instant alerts and feedback to users and admins for quick corrective actions, ensuring process accuracy and reduced downtime.
                      </span>
                </div>
             </section3>
            </div>     
            <Customer />
        </page>
    )
}
 const style={
    sectionimg:{
        display:"grid",
        height:"400px",
        width:"100%",
    },
    h2:{
        paddingTop:"30px",
        textAlign:"center" ,
        height:"60px",
        color:"white",
        width:"100%",
        backgroundImage:`url(${industry})`,
        backgroundSize:"cover",
    },
    section:{
        display:"flex",
        justifyContent:"space around",
        flexDirection:"row",
        flexWrap:"wrap",
    },
    main:{
         display:"flex",
        justifyContent:"space around",
        flexDirection:"row",
        flexWrap:"wrap",
    },
    sectiondiv:{
        height:"200px",
        width:"400px",
        border:"1px solid grey",
        margin:"0 3px",
        paddingLeft:"20px",
        borderRadius:"10px",
        borderShadow:"0 0 10px rgba(0,0,0,0.1)",
        backgroundColor:"whitesmoke",
    },
    div:{
    backgroundImage: `url(${case_img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:"500px",
    width:"100%",
    },
    h1:{
        color:"blue",
        margin:"20px",
    },
    button:{
        color:"white",
        cursor:"pointer",
        backgroundColor:"blue",
        borderRadius:"20px",
        paddingLeft:"10px",
        margin:"60px",
    },
    section2div:{
        height:"200px",
        width:"550px",
        border:"1px solid grey",
        margin:"0 15px",
        paddingLeft:"30px",
        borderRadius:"10px", 
        borderShadow:"0 0 10px rgba(0,0,0,0.1)",
        backgroundColor:"lightblue",
        cursor:"pointer",
    },
    section3div:{
         height:"400px",
        width:"300px",
        border:"1px solid grey",
        paddingLeft:"20px",
        textAlign:"center",
    }
 }
export default Page;