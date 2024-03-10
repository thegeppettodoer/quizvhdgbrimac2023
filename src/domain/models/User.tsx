export interface User {
  tipoDoc: 1 | 2; // 1 para DNI, 2 para carnet de extranjero
  numeroDoc: string;
  telefono: string;
}
