import React from "react";
import "./index.scss";
import background from "../../assets/background.png";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";
import InputText from "../../components/inputtext/InputText";

const Home: React.FC = () => {
  const handleInputChangeNumberDoc = (value: string) => {
    console.log("handleInputChangeNumberDoc:", value);
  };
  const handleInputChangePhone = (value: string) => {
    console.log("handleInputChangePhone:", value);
  };
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-right">
          <div className="header-text">!Compra por este medio!</div>
          <div className="phone-info">
            <a className="phone-link" href="tel:+014116001">
              <img src={phone} alt="Phone" className="phone-ico" />
              <span className="phone-text">(01) 4116001</span>
            </a>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="main-left">
          <div className="image-container">
            <img src={background} alt="Logo" className="left-img" />
          </div>
        </div>
        <div className="main-right">
          <div className="form-container">
            <div className="tag-seguro">Seguro Salud Flexible</div>
            <div className="form-header">Creado para ti y tu familia</div>
            <div className="form-subheader">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </div>
            {/* <select>
              <option value="dni">DNI</option>
              <option value="carnet">Carnet de extranjería</option>
            </select> */}

            <InputText
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
            <button className="quote-button">Cotiza aquí</button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-left">Logo</div>
        <div className="footer-right">@2023 RIMAC SEGUROS Y REASEGUROS</div>
      </footer>
    </div>
  );
};

export default Home;
