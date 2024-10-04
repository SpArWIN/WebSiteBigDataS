
import { useInView } from "react-intersection-observer";
import "./index.css"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useState } from "react";
export const Dev = ()=>{
const { ref, inView } = useInView({
        threshold: 0.2, 
        triggerOnce: false, 
    });
     const [bgColor, setBgColor] = useState('');

     const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 50 && scrollY <= 70) {
      setBgColor('#f5f7fa');
    } else if (scrollY > 70 && scrollY <= 250) {
      setBgColor('#f5f5fa');
    } else if (scrollY > 250) {
      setBgColor('#f9f5fa');
    }
  };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <>
        <ParallaxProvider>
         <div className="parallax-section" style={{ backgroundColor: bgColor }}>
                <Parallax speed={-20}>
                    <div className={`content ${inView ? 'fade-out' : ''}`}>
                        <div className="text">
                            Привет! Меня зовут Николай, я специализируюсь на C#, WPF, WinForm и веб-технологиях.
                        </div>
                        <div className="image"></div>
                    
                    </div>
                </Parallax>
            </div>
            <Parallax speed={5}>
                  <div ref={ref} className="next-section" style={{ backgroundColor: bgColor }}>
                 <div className={`text ${inView ? 'fade-in' : 'fade-out'}`}>
                  Свой путь я начал в колледже, сначала ничего не получалось, но преподаватели помогли мне усвоить то, что не получалось.
                </div>
                <div className={`images ${inView ? 'fade-in' : 'fade-out'}`}></div>
            </div>  
            <div className="parallax-section" style={{ backgroundColor: bgColor}}>
        <Parallax speed={10}>
       <div className="next-section" >
          <div className="text">
          Все было довольно сложно, однако сейчас, я очень стараюсь и что-то даже получается
          </div>
        </div>
      </Parallax>
    </div>
        </Parallax>
  
        </ParallaxProvider>
      
        </>
    )
}