import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../../components/header/header";
import Progress from "../../components/progress/progress";
import Goback from "../../components/goback/goback";
// import { User } from "../../domain/models/User";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import { useNavigate } from "react-router-dom";

import "./index.scss";
import CardPlans from "../../components/cardplans/cardplans";
import CardPlan from "../../components/cardplan/cardplan";
import { Navigate } from "react-router-dom";

const Plans: React.FC = () => {
  const { user, plans, addPlan , plansFromApi } = useAuth();
  const [selected, setSelected] = useState(1);
  const [selectedBig, setSelectedBig] = useState(1);
  const [onePlan, setOnePlan] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    handleClick(1);
    console.warn('plansFromApi:',plansFromApi, user);
    return () => {};
  }, []);

  const handleClick = (e: number) => {
    const planIdOne = plans.find((plan: any) => plan.id === e);
    setOnePlan(planIdOne);
    setSelected(e);
    return e;
  };

  const handleAddPlan = (data: any) => {
    if (onePlan != null) {
      console.log("handleAddPlan:", onePlan["id"], "----", data);
      addPlan({ group: onePlan["id"], plan: data });
      navigate("/resume");
    }
  };

  const RenderAllCardPlans = () => {
    return (
      <div className="wrap-plans">
        {plans.map((e: any) => (
          <CardPlans
            key={"c" + e.id}
            number={e.id}
            title={e.planParent}
            description={e.text}
            cardImage={e.id % 2 === 0 ? card2 : card1}
            handleClick={() => handleClick(e.id)}
            isSelected={selected === e.id}
          />
        ))}
      </div>
    );
  };

  const RenderOneCardPlans = ({ onplan }: { onplan: any }) => {
    // console.log(">>>>", typeof onplan);

    if (onplan != null && onplan !== undefined) {
      // console.log("RenderOneCardPlans:", onplan["plans"]);

      return (
        <div className="wrap-plans-big">
          {onplan["plans"].map((e: any) => (
            <CardPlan
              key={e.id}
              number={e.id}
              title={e.text1}
              description={e.text2}
              cardImage={e.img}
              handleClick={() => handleAddPlan(e.id)}
              isSelected={selectedBig === e.id}
              plan={e}
            />
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="container-parent-plans">
      <div className="home-container-plans">
        <Header />
      </div>
      <Progress selected={1} />

      <div className="container-plans">
        <Goback
          onBack={() => {
            navigate("/");
          }}
        />
        <div className="cardparent-plans">
          {user ? (
            <div className="">
              <div className="text-title-plans">
                {user.nombre} ¿Para quién deseas cotizar?
              </div>
              <div className="text-subtitle-plans">
                Selecciona la opción que se ajuste más a tus necesidades.
              </div>

              <RenderAllCardPlans />
              <RenderOneCardPlans onplan={onePlan} />
            </div>
          ) : (
            <span className="text-title-plans"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plans;
