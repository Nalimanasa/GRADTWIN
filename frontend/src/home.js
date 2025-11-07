import {React, useState} from 'react'
import image from './image.jpg'
import Register from './agent/agent_register'

function Home(){
  const [Show ,setShow]=useState(false)
    return(
         <main>
          {!Show ? (
      <div style={style.div}>
        <center>
          <br/><br/>
        <h1>SMART ALUMINUM EXTRACTION AND RESOURCE<br/>
           OPTIMIZATION SYSTEM</h1>
           <p>We are a team of  talented persons used reinforcement learning in our industry </p>
           <button onClick={()=>setShow('agent')}>get started</button>
        </center>
            </div>
             ):(
            <Register />
          )
        }
            </main>
    )
}

const style={
  div:{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height:"600px",
      width:"100%",
      },
}
export default Home;