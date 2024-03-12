import React from "react";
import "./index.scss";

interface CardPlansProps {
  number: number;
  title: string;
  description: string;
  handleClick: (number: number) => void;
  cardImage: string;
  isSelected: boolean;
}

const CardPlans: React.FC<CardPlansProps> = ({
  number,
  title,
  description,
  handleClick,
  cardImage,
  isSelected,
}) => {
  return (
    <button
      className={isSelected ? "card-plans-unselected" : "card-plans-selected"}
      onClick={() => handleClick(number)}
    >
      <div className="text-container-plans">
        <span
          className={
            isSelected ? "circle-plans-selected" : "circle-plans-unselected"
          }
        >
          {""}
        </span>
        <div className="left-img_plans">
          <img src={cardImage} alt="card1" className="card-img" />
        </div>
        <h2 className="title-plans">{title}</h2>
        <p className="description-plans">{description}</p>
      </div>
    </button>
  );
};

export default CardPlans;
