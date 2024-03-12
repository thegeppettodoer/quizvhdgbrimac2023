import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../domain/models/User";
import planCasa from "../assets/plan-casa.svg";
import planHospital from "../assets/plan-hospital.svg";
import UserService from "../domain/services/AuthService";
import PlansService from "../domain/services/PlansService";
import { calcularEdad } from "../utils/calcEdad";
import { Plan } from "../domain/models/Plans";

interface AuthContextType {
  user: User | null;
  signup: (userData: User) => void;
  login: (userData: User) => Promise<boolean>;
  logout: () => void;
  plans: any;
  plansFromApi: any;
  planSelected: any;
  addPlan: (plan: any) => void;
}
interface ServiceData {
  name: string;
  lastName: string;
  birthDay: string;
}
export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [planSelected, setPlanSelected] = useState({});
  const [dataFromService, setDataFromService] = useState<ServiceData>();
  // const [plansFromApi, setPlansFromApi] = useState<any>();
  const [plansFromApi, setPlansFromApi] = useState<Plan[]>([]);

  const userService = new UserService();

  const fetchUserData = async (): Promise<ServiceData | null> => {
    try {
      const userService = new UserService();
      const userData = await userService.getUserData();
      if (userData !== null) {
        setDataFromService(userData);
        console.log("Datos del usuario:", userData);
        return userData;
      } else {
        console.log("No se pudo obtener los datos del usuario.");
        return null;
      }
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      return null;
    }
  };
  const fetchPlansData = async (): Promise<any> => {
    try {
      const plansService = new PlansService();
      const plansData = await plansService.getPlansData();
      if (plansData !== null) {
        setPlansFromApi(plansData.list);
        // if (plansData.list !== null && plansData.list != undefined) {
        // }

        console.log("Datos del planes:", plansData);
        return plansData;
      } else {
        console.log("No se pudo obtener los datos de  los planes.");
        return null;
      }
    } catch (error) {
      console.error("Error al obtener los datos de los planes:", error);
      return null;
    }
  };

  const [plans, setPlans] = useState([
    {
      id: 1,
      planParent: "Para mí",
      text: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
      plans: [
        {
          id: 1,
          img: planCasa,
          plan: "Plan en Casa ",
          costo: "$39 al mes",
          text1:
            "<b>Médico general a domicilio</b> por S/20 y medicinas cubiertas al 100%.",
          text2:
            "<b>Videoconsulta</b> y orientación telefónica  al 100% en medicina general + pediatría.",
          text3:
            "<b>Indemnización</b> de S/300 en caso de hospitalización por más de un día.",
        },
        {
          id: 2,
          recomendado: true,
          img: planHospital,
          plan: "Plan en Casa y Clínica",
          costo: "$99 al mes",
          text1: "<b>Consultas en clínica</b> para cualquier especialidad. ",
          text2: "<b>Medicinas y exámenes</b> derivados cubiertos al 80%",
          text3: "Atención médica en <b>más de 200 clínicas del país.</b>",
        },
        {
          id: 3,
          img: planCasa,
          plan: "Plan en Casa + Chequeo ",
          costo: "$49 al mes",
          text1:
            "<b>Un Chequeo preventivo</b> general de manera presencial o virtual.",
          text2:
            "Acceso a <b>Vacunas</b> en el Programa del MINSA en centros privados. ",
          text3: "<b>Incluye todos los beneficios del Plan en Casa. </b>",
        },
      ],
    },
    {
      id: 2,
      planParent: "Para alguien más",
      text: "Realiza una cotización para uno de tus familiares o cualquier persona.",
      plans: [
        {
          id: 1,
          img: planCasa,
          plan: "Plan en Casa ",
          costoAntes: "$39 antes",
          costo: "$37.05 al mes",
          text1:
            "<b>Médico general a domicilio</b> por S/20 y medicinas cubiertas al 100%.",
          text2:
            "<b>Videoconsulta</b> y orientación telefónica  al 100% en medicina general + pediatría.",
          text3:
            "<b>Indemnización</b> de S/300 en caso de hospitalización por más de un día.",
        },
        {
          id: 2,
          recomendado: true,
          img: planHospital,
          plan: "Plan en Casa y Clínica",
          costoAntes: "$99 antes",
          costo: "$94.05 al mes",
          text1: "<b>Consultas en clínica</b> para cualquier especialidad. ",
          text2: "<b>Medicinas y exámenes</b> derivados cubiertos al 80%",
          text3: "Atención médica en <b>más de 200 clínicas del país.</b>",
        },
        {
          id: 3,
          img: planCasa,
          plan: "Plan en Casa + Chequeo ",
          costoAntes: "$49 antes",
          costo: "$46.55 al mes",
          text1:
            "<b>Un Chequeo preventivo general</b> de manera presencial o virtual.",
          text2:
            "Acceso a <b>Vacunas</b> en el Programa del MINSA en centros privados. ",
          text3: "<b>Incluye todos los beneficios del plan en casa. </b>",
        },
      ],
    },
  ]);

  const signup = (userData: User) => {
    setUser(userData);
    //
  };

  const login = async (userData: User): Promise<boolean> => {
    try {
      const userDataFromService = await fetchUserData();

      if (!!userDataFromService) {
        setUser({
          tipoDoc: userData.tipoDoc,
          numeroDoc: userData.numeroDoc,
          telefono: userData.telefono,
          cumpleanos: userDataFromService.birthDay,
          apellido: userDataFromService.lastName,
          nombre: userDataFromService.name,
          edad: calcularEdad(userDataFromService.birthDay),
        });
        await fetchPlansData();

        return true;
      } else {
        console.error("No se pudo obtener los datos del usuario.");
        return false;
      }
    } catch (error) {
      console.error("Error en login");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    //
  };
  const addPlan = (data: any) => {
    const plansSele = plans.find((plan: any) => plan.id === data["group"]);
    if (plansSele != null && plansSele != undefined) {
      const oneplanSele = plansSele["plans"].find(
        (plan: any) => plan.id === data["plan"]
      );
      if (oneplanSele != null && oneplanSele != undefined) {
        console.log("addPlan:", oneplanSele);
        setPlanSelected({
          costo: oneplanSele["costo"],
          plan: oneplanSele["plan"],
          name: user?.nombre,
        });
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        plans,
        plansFromApi,
        planSelected,
        addPlan,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
