import React from 'react';
import Location from './location.jpeg'
import Whatsapp from './whatsapp.jpeg'
import Mail from './gmail.png' 


function Footer(){
    return(
        <div style={{background:"grey", paddingBottom:"15px"}}  >
            <h1>aluminum extraction</h1>
            <main style={style.main}>
            <div style={style.div} >
                <h3>Quick links </h3>
                 <li>
                  Home<br/>
                   contact
                </li>
            </div>
            <div styl={style.div} >
                <h3>Contact us</h3>
                 <span>  
                    <img  style={style.img} src={Location} alt="location" />189, Rajiv Gandhi Salai, OMR, Sholinganallur, Chennai, Tamil Nadu 600119<br/><br/>                    
                     <img  style={style.img} src={Whatsapp} alt="whatsapp" />+123-456-789<br/><br/>
                    <img  style={style.img} src={Mail} alt="gmail" />recruitments@gradtwin.com<br/>
                    
                 </span>
                </div>
                <div style={style.div} >
                                        <h3>Remain updated</h3>
                    <input style={{height:"30px",width:"250px"}} type="text"   placeholder="your email address"  /><br/><br/>
                    <button style={{background:"orange",height:"30px"}}>sign up </button>
                </div>

</main>
        </div>
    )
}
 
const style= {
    main :{
        display:"flex",
    },
     img:{
         height:"30px",
         width:"30px",
         float:"left"
    },
    div:{
        padding:"0px 20px"
    }
}

export default Footer;