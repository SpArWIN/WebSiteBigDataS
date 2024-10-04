import { Typography } from "antd";
const { Title } = Typography;
import "./home.css"
import { BCard } from "../../Component/Card";
import { useState } from "react";
export const Home  = () =>{

    const [, setHighlightedSection] = useState(''); // Для выделения при переходе
       const handleSectionHighlight = (sectionId :string) => {
        setHighlightedSection(sectionId);
        setTimeout(() => {
            setHighlightedSection(''); 
        }, 2000); 
    };

     return (
       <div className="home-container">
         <Title className="titleHome">Большие Данные</Title>
         <div className="card-container">
          <div id="section1">
       <BCard 

            title="Что за данные вообще?"
            text=" Большие данные — это обширные и сложные наборы данных, которые
           традиционные методы обработки не могут эффективно обрабатывать. Они
           включают в себя структурированные и неструктурированные данные,
           которые могут быть собраны из различных источников, таких как
           социальные сети, датчики, транзакции и многое другое."
           targetId="section1"
            onHighlight={handleSectionHighlight} 
          /> 
          </div>
         <div id="section2">
           <BCard 
        title="Как их анализировать?"
        text="Обработка больших объёмов данных требует использования специализированных технологий и инструментов.
        Существуют различные инструменты для работы с таким большим объемом данных"
        targetId="section2"
          onHighlight={handleSectionHighlight} 
        /> 
         </div>
         <div id="section3">
        <BCard 
        targetId="section3"
        title="Какие есть сложности применения?"
        text="Большие данные требуют инфраструктуру для хранения. Часто под хранение данных выделяют отдельный центр обработки данных (ЦОД). Но такие центры дорогие и требуют больших вложений."
        onHighlight={handleSectionHighlight} 
        />      

         </div>

         </div>
      
       
        
       </div>
     );
} 