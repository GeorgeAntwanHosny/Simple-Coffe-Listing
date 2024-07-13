import React from "react";
import { Coffee } from "../../models/Coffee";
import './Coffee-Item.scss';
import start from '../../assets/images/Star.svg';
import start_fill from '../../assets/images/Star_fill.svg';

interface CoffeItemProps {
    coffee:Coffee
}

const CoffeeItem:React.FC<CoffeItemProps> = ({coffee})=>{
    return(
    <>
    <div className="CoffeItemContainer">
      
       <div>
        <img src={coffee.image} alt={coffee.name}/>
       {coffee.popular?<p> Popular</p>:<></>} 
       </div>
        <div>
            <p>{coffee.name}</p>
            <p>{coffee.price}</p>
        </div>
        <div>
          <div>
            {coffee.votes!==0?  <img src={start_fill} alt="star fill"/>: <img src={start} alt="star"/>}
            {coffee.votes!==0? <p>{coffee.rating}<span>({coffee.votes})</span></p>: <p><span>No ratings</span></p>}
           
          </div>
            {coffee.available? <></>:<p>sold out</p>}
        </div>
        
    </div>
   
    </>
    );
}
export default CoffeeItem;