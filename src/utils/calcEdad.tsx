import { differenceInYears, parse } from "date-fns";

export const calcularEdad = (fechaNacimientoStr: string) => {
  const fechaNacimiento = parse(fechaNacimientoStr, "dd-MM-yyyy", new Date());
  const edad = differenceInYears(new Date(), fechaNacimiento);
  return edad;
};
