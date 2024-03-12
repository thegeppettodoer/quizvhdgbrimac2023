import React from "react";
import "./index.scss";
import iconofamilia from "../../assets/icono-family.svg";

interface CardResumeProps {
  number: number;
  name: string;
  tipoDoc: string;
  nroDoc: string;
  phone: string;
  plan: string;
  costoPlan: string;
}

const CardResume: React.FC<CardResumeProps> = ({
  number,
  name,
  tipoDoc,
  nroDoc,
  phone,
  plan,
  costoPlan,
}) => {
  return (
    <div
      className={  "card-resume-selected"}
     >
      <div className="text-container-resume">
        <div className="title-resume">{"PRECIOS CALCULADOS PARA:"}</div>
        <div className="name-resume"><img src={iconofamilia} alt="icono familia" className="icono-img" /> {name}</div>
        <div className="divider-resume"></div>
        <div className="title-resume">{"Responsable del pago"}</div>
        <div className="description-resume">
          {tipoDoc}:{nroDoc}
        </div>
        <div className="description-resume">
          {"Celular:"}
          {phone}
        </div>
        <div className="title-resume">{"Plan elegido"}</div>
        <div className="description-resume">{plan}</div>
        <div className="description-resume">
          {"Costo del Plan: "}
          ${costoPlan} al mes
        </div>
      </div>
    </div>
  );
};

export default CardResume;
