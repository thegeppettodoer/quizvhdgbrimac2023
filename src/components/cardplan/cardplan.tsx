import React from "react";
import "./index.scss";

interface CardPlanProps {
  number: number;
  title: string;
  handleClick: (number: any) => void;
  cardImage: string;
  isSelected: boolean;
  descriptions: string[];
  price: number;
  highprice: boolean;
}

const CardPlan: React.FC<CardPlanProps> = ({
  number,
  title,
  handleClick,
  cardImage,
  isSelected,
  descriptions,
  price,
  highprice,
}) => {
  let priceReal = price * (number == 2 ? 0.95 : 1);
  return (
    <div className={isSelected ? "card-plan-unselected" : "card-plan-selected"}>
      <div className="text-container-plans">
        {highprice && (
          <div className="tag-seguro-plan">Seguro Salud Flexible</div>
        )}
        <div className="wrap-block-plan">
          <div className="wrap-plan">
            <h2 className="title-plan">{title}</h2>
          </div>
          <img src={cardImage} alt="card1" className="card-img" />
        </div>
        <div className="detail-plan">
          <div className="title-costo">COSTO DEL PLAN</div>
          {number == 2 && (
            <div className="title-costoantes">${price * 1} antes</div>
          )}
          <div className="costo-plan">${priceReal} al mes</div>
          <div className="divider-plan"></div>
          <ul className="list-plan">
            <li
              className="text-plan"
              dangerouslySetInnerHTML={{ __html: descriptions[0] }}
            />
            <li
              className="text-plan"
              dangerouslySetInnerHTML={{ __html: descriptions[1] }}
            />
            <li
              className="text-plan"
              dangerouslySetInnerHTML={{ __html: descriptions[2] }}
            />
          </ul>
        </div>

        <button
          className="select-plan"
          onClick={() => handleClick({ price: priceReal, plan: title})}
        >
          Seleccionar Plan
        </button>
      </div>
    </div>
  );
};

export default CardPlan;
