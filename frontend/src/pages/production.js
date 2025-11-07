import React from 'react'
import './production.css'
import aluminimum from './aluminium.jpeg'
import bauxite from './bauxite.jpeg'
import mild from './mild.jpeg'
import stainless from './stainless.jpeg'
import titanium from './titanium.jpeg'
import main from './new.webp'
import bespoke from './bespoke.webp'
import coil from './coil.webp'
import products from './products.jpg'
import './main.css'

function Production(){
    return(
        <div>
            <img class='main' src={main} alt='main' />
            <h2>production</h2>
          <p>Products
Our products are in a lot more places than you might think
As a global leader in materials distribution,  we bring you a vast range of products and a wealth of experience in sourcing and supplying products such as stainless steel, aluminium and mild steel. To see more information on some of the products that we offer, click on one of the tiles below:

Products
aluminium
Aluminium supplies aluminium products in many grades, shapes and sizes. Our stock range includes flat sheet, cut to size plate, bespoke extrusions, standard extrusions, decoiled to size flat products as well as offering aluminium products for the road transport industry.
</p>
<br/><br/>
<main class='list'>
    <section style={{display:"flex" }} >
    <div class='list1' >
        <h2>aluminimum</h2>
        <img class="mainimage"
         src={aluminimum} alt='aluminimum' />
        <p class="paragraph" 
        >Aluminium (or aluminum) is a light, silvery-white metal that is strong <br/>
         malleable, ductile, and highly conductive, known for forming a protective oxide<br/>
          layer that resists corrosion.  
</p></div>
    <div  class='list1' >
        <h2>Titanium </h2>
        <img  class="mainimage"
        src={titanium} alt='titanium' />
        <p class="paragraph"
        >Titanium is a strong, lightweight, silver-colored transition metal (chemical symbol Ti, atomic number 22) known for its excellent corrosion resistance due to a protective oxide layer</p>
        </div>
    <div  class='list1' >
        <h2>stainless steel</h2>
        <img class="mainimage"
        src={stainless} alt='stainless steel' />
        <p  class="paragraph"
        >Stainless steel is a family of iron-based alloys known for their high chromium content (minimum 10.5%), which forms a passive, self-healing oxide layer on the surface, making them resistant to rust and corrosion.
            </p></div>
            <div class='list1' >
        <h2>mild steel</h2>
        <img  class="mainimage"
        src={mild} alt='mild steel' />
        <p class="paragraph"
        >Mild steel, or low-carbon steel, is a versatile and cost-effective form of iron and carbon, containing a low carbon content (typically 0.05%–0.25%) that makes it ductile, machinable, and easily weldable but difficult to harden.  </p>
    </div>
    </section>
</main>
<main class="list">
    <section style={{ display:"flex"}} >
     <div  class='list1' >
        <h2>bauxite</h2>
        <img class="mainimage"
         src={bauxite} alt='bauxite' />
        <p   class="paragraph"
        >bauxite, rock largely composed of a mixture of hydrous aluminum oxides. Bauxite is the principal ore of aluminum.
            </p>
            </div> 
            <div class="list1">
                <h2>bespoke aluminum extrusion</h2>
                <img  class="mainimage"
                 src={bespoke} alt="bespoke aluminum extrusion"/>                <p class="paragraph" >
            involves creating custom complex aluminum profiles by forcing heated aluminum alloys through a specially designed die to achieve a specific ,constant cross-section
                </p>
            </div> 
            <div class="list1">
                <h2>coil production</h2>
                <img  class="mainimage"
                 src={coil} alt="coil production"/>               
            <p class='paragraph'>
              involves transforming raw materials, like steel slabs, into thin sheets or strips that are then wound into large, tightly packed coils using rollers and slitters
               </p>
            </div> 
            <div class="list1">
                <h2>architectural products </h2>
                <img  class="mainimage"
                 src={products} alt="architectural products" />
            <p class='paragraph'>
            encompass materials, components, and finishes like windows, doors, tiles, and furniture that form buildings and interiors
              </p>
            </div> 
            </section>
            </main>
            </div>
    )
}


export default Production;