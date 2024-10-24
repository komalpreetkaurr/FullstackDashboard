import React from 'react';
import './Cards.css';
import { CardsData } from '../../Data/Data';
import Card from '../Card/Card'; 

const Cards = () => {
  return (
    <div className="cardsContainer">
      {CardsData.map((card, id) => (
        <div key={id} className="parentContainer">
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            series={card.series}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
