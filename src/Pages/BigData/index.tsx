

import './index.css'
import ParallaxText from '../../Component/ParalaxComp';
import { ParallaxProvider } from 'react-scroll-parallax';
export const BigData  = ()=> {

 return (
    <>
   
        <div className="parallax-container">

            <ParallaxProvider>
             <ParallaxText/>       
            </ParallaxProvider>
        
        </div>
   </>
 )}
