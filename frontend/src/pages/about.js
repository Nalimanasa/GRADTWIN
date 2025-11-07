import React from 'react'
import about from './alum.webp'
import './main.css'

function About(){
    return(
     <main>
        <center>
        <img class="image"
         src={about} alt="aluminum"  /><br/><br/><br/>
 <h2>Extraction of aluminimum</h2>
 <div><br/>
        <p><b>How is Aluminum Made?</b><br/><br/>
Aluminum makes up 8% of the earth's soil and rocks making it the third most abundant element in the earth's crust after oxygen and silicon, respectively.

The compound does not occur in pure form. Instead, the aluminum atoms bind with other metals forming compounds. Unlike other minerals like iron that only require melting to separate the compound, making aluminum is slightly different. With aluminum, the process is complicated and requires significant amounts of energy.

That is why most aluminum smelters are always built within the vicinity of power energy sources.</p>
  <br /><h2><br/>
  Step 1- Bauxite Mining</h2>
    <p>
The first step in the production of aluminum is the extraction of bauxites from the ground. Bauxites are the most common raw material in aluminum production. They are mainly made up of aluminum oxide mixed with some other minerals.

If the bauxite contains more than 50% aluminum oxide, it's considered as high quality. However, there is a lot of variation in bauxites. They can be solid, dense, or crumbly. They also vary in color, with the most common one being brick red, brown, or flaming red because of iron oxide.

If the concentration of iron oxide is low, the bauxite can be white or grey. It's also possible to find bauxite in yellow, dark-green, or multi-colour with shades of red, blue, purple, or black depending on the composition.

<h2>Step 2 - Alumina Production</h2>
After mining the bauxite, the next step in making aluminum is processing the raw material into alumina, a white powder, also known as aluminum oxide.

Depending on the quality of the bauxite, about 4-5 tons of it can yield about 2 tons of alumina, which will produce one ton of aluminum.</p>
    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <div>
     <h2>The Bayer Process</h2>
    <p>
The making of alumina starts with dissolving the aluminium hydrate that is found in bauxite in concentrated caustic soda at high temperatures.

When the temperature of the solution is lowered, the concentration increases, and aluminium hydrate crystallises. The other minerals and elements found in bauxite don’t dissolve or recrystallise, they settle to the bottom. The aluminium hydrate can then be isolated from the ballast, which is also known as the red mud.

The red mud comprises of silicon, iron, titanium and various other minerals, found in the mined bauxite. The separated mud is disposed into special areas, while the aluminium hydrate proceeds with the aluminium extraction process.   

<h2>Processing of Aluminium Hydrate Crystals</h2>
The aluminium hydrate crystals are fairly large and easily filtered from the solution. The crystals are then washed with water, dried and then heated (calcined) to remove the water. The resulting product is what is called alumina.

Alumina doesn’t have a limited shelf life but it is highly hygroscopic and has to be stored in the right conditions. Instead of battling to keep the alumina away from water, most manufacturers prefer to send the alumina for smelting as fast as possible.

<h2>The Smelting Process</h2>
The smelting process starts with stacking the alumina into piles, weighing up to 30,000 tonnes. To get to this weight, the stacks of alumina can be as high as 12 metres. The pile is subdivided and loaded into railroad cars for dispatch to the smelting facility.

<h2>Electrolytic Reduction</h2>
Through electrolysis, alumina produces aluminium. Before that however, another component, called cryolite, is required in the process.

Cryolite is a natural fluoride mineral that is manufactured artificially because of its rarity as a natural mineral. 

The use of cryolite is the final step required to transform alumina into aluminium through electrolytic reduction.

This process takes place inside an aluminium smelter. These are rectangular buildings with a length, exceeding one kilometre in some instances. Inside the buildings, there are hundreds of reduction cells in rows, hooked up to power sources using massive cables.

Each of the cells consumes about 4 – 6 volts of power, with an amperage of 300 – 400 KA and sometimes even more. This process is mainly driven by power, and most of it is automated.

There’s an automatic system that delivers alumina into the cells every few minutes. Inside the cells, high temperatures and a conducive environment, created by the cryolite, breaks down the bonds between aluminium and oxygen.

The aluminium settles at the bottom of the cells, while the oxygen combines with carbon to make carbon dioxide.

Special vacuum buckets are used to extract the aluminium from the cells, after which it is taken to the cast house once the bucket is full.

At the cast house, the aluminium is cast into ingots, weighing between 6kgs and 30 tonnes. At the cast house, the aluminium is also given its chemical composition by mixing it with other alloying elements to increase its strength, alter its heat transmission properties and also make it denser.

There are over 100 aluminium alloys in the market, each designed to cater to various applications and exhibit specific characteristics, according to the environment where it is used, and all of them start as a bauxite that goes through the above process.</p>
    </div>
</center>
     </main>

    )
}

export default About