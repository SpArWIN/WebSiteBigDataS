import { Button, Card } from "antd"
import "./Card.css"

import { useNavigate } from "react-router-dom";
type Props = {
    title:string,
    text:string,
    targetId: string,
    onHighlight: (id: string) => void,
}
export const BCard: React.FC<Props> = ({ title, text, targetId , onHighlight}) => {

 const navigate = useNavigate();

    const handleButtonClick = () => {
        // Переход на целевую страницу
       navigate(`/bigdata?highlight=${targetId}`);

        // Прокрутка к якорю (это будет выполнено на целевой странице)
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                  onHighlight(targetId); 
            }
        }, 500); // Задержка, чтобы дать время для перехода на страницу
    };

   
    return (
        <Card className="custom-card" title={title} bordered={false}>
            <div className="card-content">
                <p className="card-text">{text}</p>
                <Button className="card-button" onClick={handleButtonClick}>
                    Подробнее
                </Button>
            </div>
        </Card>
    );
};
