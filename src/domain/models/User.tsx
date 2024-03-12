export interface User {
  tipoDoc: 1 | 2; // 1 para DNI, 2 ruc
  numeroDoc: string;
  telefono: string;
  cumpleanos: string;
  apellido:string;
  nombre:string;
  edad:number;
};
export const tipoDoc: { [key: number]: string } = { 1: "DNI", 2: "RUC" };
