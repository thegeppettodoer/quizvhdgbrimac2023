import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../../components/header/header";
import Progress from "../../components/progress/progress";
import Goback from "../../components/goback/goback";
import { tipoDoc } from "../../domain/models/User";
import CardResume from "../../components/cardresume/cardresume";
import { useNavigate } from "react-router-dom";

import "./index.scss";

const Resume: React.FC = () => {
  const { user, plans, addPlan, planSelected } = useAuth();
  const [selected, setSelected] = useState(1);
  const [selectedBig, setSelectedBig] = useState(1);
  const [onePlan, setOnePlan] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="container-parent-plans">
      <div className="home-container-plans">
        <Header />
      </div>
      <Progress selected={2} />

      <div className="container-resume">
        <Goback
          onBack={() => {
            navigate("/plans");
          }}
        />
        <div className="cardparent-resume">
          {user ? (
            <div className="">
              <div className="text-title-resume">Resumen del seguro</div>

              <CardResume
                number={1}
                name={planSelected["name"]}
                tipoDoc={tipoDoc[user.tipoDoc]}
                nroDoc={user.numeroDoc}
                phone={user.telefono}
                plan={planSelected["plan"]}
                costoPlan={planSelected["costo"]}
              />
            </div>
          ) : (
            <span className="text-title-plans"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
