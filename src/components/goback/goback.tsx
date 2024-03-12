import React from "react";
import "./index.scss";
import goback from "../../assets/goback.svg";
import { useNavigate } from "react-router-dom";

 interface GobackProps {
  
    onBack: () => void;
  }
  
const Goback: React.FC<GobackProps> = ({onBack}) => {
 
 


  return (
    <button
      className="goback"
      onClick={() => {
       onBack();
      }}
    >
      <img src={goback} alt="goback" className="goback-img" />
      <div className="goback-left">{"Volver"}</div>
    </button>
  );
};

export default Goback;
