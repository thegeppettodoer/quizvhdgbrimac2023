import React from "react";
import "./index.scss";

interface CardPlanProps {
  number: number;
  title: string;
  description: string;
  handleClick: (number: any) => void;
  cardImage: string;
  isSelected: boolean;
  plan: any;
}

const CardPlan: React.FC<CardPlanProps> = ({
  number,
  title,
  description,
  handleClick,
  cardImage,
  isSelected,

  plan,
}) => {
  return (
    <div className={isSelected ? "card-plan-unselected" : "card-plan-selected"}>
      <div className="text-container-plans">
        {plan["recomendado"] && (
          <div className="tag-seguro-plan">Seguro Salud Flexible</div>
        )}
        <div className="wrap-block-plan">
          <div className="wrap-plan">
            <h2 className="title-plan">{plan["plan"]}</h2>
          </div>
          <img src={cardImage} alt="card1" className="card-img" />
        </div>
        <div className="detail-plan">
          <div className="title-costo">COSTO DEL PLAN</div>
          <div className="title-costoantes">{plan["costoAntes"]}</div>
          <div className="costo-plan">{plan["costo"]}</div>
          <div className="divider-plan"></div>

          <ul className="list-plan">
          <li
            className="text-plan"
            dangerouslySetInnerHTML={{ __html: plan["text1"] }}
          />
          <li
            className="text-plan"
            dangerouslySetInnerHTML={{ __html: plan["text2"] }}
          />
          <li
            className="text-plan"
            dangerouslySetInnerHTML={{ __html: plan["text3"] }}
          />
          </ul>
        </div>

        <button className="select-plan" onClick={() => handleClick(number)}>
          Seleccionar Plan
        </button>
      </div>
    </div>
  );
};

export default CardPlan;
