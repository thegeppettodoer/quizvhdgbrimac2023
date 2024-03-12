import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../../components/header/header";
import Progress from "../../components/progress/progress";
import Goback from "../../components/goback/goback";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import planCasa from "../../assets/plan-casa.svg";
import planHospital from "../../assets/plan-hospital.svg";
import { useNavigate } from "react-router-dom";

import "./index.scss";
import CardPlans from "../../components/cardplans/cardplans";
import CardPlan from "../../components/cardplan/cardplan";
import { Navigate } from "react-router-dom";
import { Plan } from "../../domain/models/Plans";

const Plans: React.FC = () => {
  const { user, plans, addPlan, plansFromApi } = useAuth();
  const [selected, setSelected] = useState(0);
  const [selectedBig, setSelectedBig] = useState(0);
  const [onePlan, setOnePlan] = useState<Plan[]>();
  const navigate = useNavigate();

  useEffect(() => {
    console.warn("plansFromApi:", plansFromApi, user);
    return () => {};
  }, []);

  const handleClick = (e: number) => {
    // si es 1 es parami
    // si es 2 es para alguien mas
    if (user != undefined) {
      const planIdOne = plansFromApi.filter(
        (plan: Plan) => plan.age >= user?.edad
      );
      setOnePlan(planIdOne);
      setSelected(e);
      return e;
    }
  };

  const handleAddPlan = (data: any) => {
    if (onePlan != null) {
      addPlan({ group: selected, plan: data });
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

  const RenderOneCardPlans = ({ onplan }: { onplan: Plan[] | undefined }) => {
    if (onplan && Array.isArray(onplan)) {
      const maxPricePlan =
        onplan.length > 0 ? Math.max(...onplan.map((plan) => plan.price)) : 0;
      const planClinic = onplan.find((plan: Plan) =>
        plan.name.includes("Clínica")
      );
      let namePlanClinic = "";
      if (planClinic != null && planClinic != undefined) {
        namePlanClinic = planClinic.name;
      }

      return (
        <div className="wrap-plans-big">
          {onplan.map((e: Plan, index: number) => (
            <CardPlan
              key={index}
              number={selected}
              title={e.name}
              cardImage={namePlanClinic == e.name ? planHospital : planCasa}
              price={e.price}
              handleClick={handleAddPlan}
              isSelected={selectedBig === index}
              descriptions={e.description}
              highprice={e.price == maxPricePlan}
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
