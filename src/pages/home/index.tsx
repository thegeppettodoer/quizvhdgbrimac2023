import React, { useState } from "react";
import "./index.scss";
import background from "../../assets/background.png";
import logoWhite from "../../assets/logo-white.svg";
import InputText from "../../components/inputtext/InputText";
import InputTextDoc from "../../components/inputtextdoc/inputtextdoc";
import Header from "../../components/header/header";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { User } from "../../domain/models/User";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [tipoDoc, setTipoDoc] = useState(1);
  const [nroDoc, setNroDoc] = useState(String);
  const [phone, setPhone] = useState(String);

  const handleInputChangeNumberDoc = (value: string, tipo: number) => {
    // console.log("handleInputChangeNumberDoc:", value, tipo);

    setTipoDoc(tipo);
    setNroDoc(value);
  };
  const handleInputChangePhone = (value: string) => {
    // console.log("handleInputChangePhone:", value);
    setPhone(value);
  };
  const onClick = async (value: any) => {
    if (tipoDoc === 1 || tipoDoc === 2) {
      const userData: User = {
        tipoDoc: tipoDoc,
        numeroDoc: nroDoc,
        telefono: phone,
        cumpleanos: "",
        apellido: "",
        nombre: "",
        edad:0,
      };
      const result = await login(userData);
      if (result) {
        navigate("/plans");
      }
    } else {
      console.error("El valor de tipoDoc no es válido. Debe ser 1 o 2.");
    }
  };

  return (
    <div className="container-parent">
      <div className="container">
        <div className="home-container">
          <Header />

          <main className="main">
            <div className="main-left">
              <div className="image-container">
                <img src={background} alt="Logo" className="left-img" />
              </div>
            </div>
            <div className="main-right">
              <div className="form-container">
                <div className="block-wrap">
                  <div className="block">
                    <div className="tag-seguro">Seguro Salud Flexible</div>
                    <div className="form-header">
                      Creado para ti y tu familia
                    </div>
                  </div>
                  <div className="block-right">
                    <div className="image-container-mini">
                      <img
                        src={background}
                        alt="Logo"
                        className="left-img-mini"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-subheader">
                  Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                  nuestra asesoría. 100% online.
                </div>

                <InputTextDoc
                  placeholder="Nro. de documento"
                  name="Nro. de documento"
                  onInputChange={handleInputChangeNumberDoc}
                />
                <InputText
                  placeholder="Celular"
                  name="Celular"
                  onInputChange={handleInputChangePhone}
                />

                <div className="checkbox-container">
                  <input type="checkbox" id="privacy-policy" />
                  <label htmlFor="privacy-policy">
                    Acepto la Política de privacidad
                  </label>
                </div>
                <div className="checkbox-container">
                  <input type="checkbox" id="comercial-communications" />
                  <label htmlFor="comercial-communications">
                    Acepto la política de comunicaciones comerciales
                  </label>
                </div>
                <a href="www.termiosycondiciones.com">
                  Aplican términos y condiciones
                </a>
                <button className="quote-button" onClick={onClick}>
                  Cotiza aquí
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <img src={logoWhite} alt="Logo" />
          </div>
          <div className="footer-right">
            <div className="footer-text">
              © 2023 RIMAC Seguros y Reaseguros.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
