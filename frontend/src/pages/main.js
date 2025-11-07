import React from 'react';
 import './main.css'
import historyImg from './history.jpg'
import main from './main.jpg'


function Main() {
    return(
          <div>
        <main>
                <img src={main} alt="aluminum extraction"
             style={{height:"300px",width:"100%"}} />
              <h1>
                Aluminum</h1>
              <p>Aluminum a soft silvery metal with the chemical symbol Al.
                 Aluminum is a light-weight, malleable, and ductile metal. It is non-magnetic, has a low density, and is highly conductive    aluminum is also very durable and highly resistant to corrosion.</p>
        <div>
                <h1>physical characters</h1>
                <p>Aluminium has one stable isotope, 27Al, which comprises virtually all of the naturally-occurring element. This is common for elements with an odd atomic number. It is therefore a mononuclidic element for standard atomic weight, which is determined completely by that isotope. Aluminium is useful in nuclear magnetic resonance (NMR), as its single stable isotope (though quadrupolar) has a high NMR sensitivity.All other isotopes of aluminium are radioactive </p>
         </div>
         <div>
         <h1>  Natural occurrence </h1>

                <h2>Space</h2>
                <p>Aluminium's per-particle abundance in the Solar System is 3.15 ppm (parts per million). It is the twelfth most abundant of all elements and third most abundant among the elements that have odd atomic numbers, after hydrogen and nitrogen.only stable isotope of aluminium, 27Al, is the eighteenth most abundant nucleus in the universe. It is created almost entirely after fusion of carbon in massive stars that will later become Type II supernovas: this fusion creates 26Mg, which upon capturing free protons and neutrons, becomes aluminium.</p>
                    <h2>Earth</h2>
              <p>Overall, the Earth is about 1.59% aluminium by mass (seventh in abundance by mass) Aluminium occurs in greater proportion in the Earth's crust than in the universe at large. This is because aluminium easily forms the oxide and becomes bound into rocks and stays in the Earth's crust, while less reactive metals sink to the core. In the Earth's crust, aluminium is the most abundant metallic element (8.23% by mass[69]) and the third most abundant of all elements (after oxygen and silicon).A large number of silicates in the Earth's crust contain aluminium.</p>

         </div>
<div class="history" >
                <h1>History</h1>
                <p><img src={historyImg} alt='Friedrich Wöhler'/> The first written record of alum, made by Greek historian Herodotus, dates back to the 5th century BCE The ancients are known to have used alum as a dyeing mordant and for city defense as a fire-resistant coating for wood. After the Crusades, alum, an indispensable good in the European fabric industry was a subject of international commerce
                itwas imported to Europe from the eastern Mediterranean until the mid-15th century.
 The nature of alum remained unknown. Around 1530, Swiss physician Paracelsus suggested alum was a salt of an earth of alum. In 1595, German doctor and chemist Andreas Libavius experimentally confirmed this.
 In 1722, German chemist Friedrich Hoffmann announced his belief that the base of alum was a distinct earth. In 1754, German chemist Andreas Sigismund Marggraf synthesized alumina by boiling clay in sulfuric acid and subsequently adding potash. 
Attempts to produce aluminium date back to 1760 The first successful attempt, however, was completed in 1824 by Danish physicist and chemist Hans Christian Ørsted. He reacted anhydrous aluminium chloride with potassium amalgam, yielding a lump of metal looking similar to tin.</p>
 </div>
  </main>

</div>
    )
}


export default Main;