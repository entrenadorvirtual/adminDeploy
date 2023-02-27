import "./config.3d78ff49.js";
import { A as ACTUALIZAR_DOCUMENTO_REALTIME, O as OBTENER_DOCUMENTO_REALTIME } from "./main.981fd68f.js";
const GET_ENTRENADORES_VALIDOS = (entrenadores) => {
  const entrenadoresValidos = [];
  Object.keys(entrenadores).forEach((element) => {
    if (entrenadores[element].rol == "Entrenador" && entrenadores[element].estado == "Aprobado") {
      const entre = entrenadores[element];
      entre.id = element;
      entrenadoresValidos.push(entre);
    }
  });
  return entrenadoresValidos;
};
const GET_DATOS_GENERAL_ENTRENADOR = async (idEntrenador) => OBTENER_DOCUMENTO_REALTIME(`users/${idEntrenador}`);
const ACTUALIZAR_DATOS_GENERAL_ENTRENADOR = async (idEntrenador, datosGeneral) => ACTUALIZAR_DOCUMENTO_REALTIME("users", idEntrenador, datosGeneral);
const GET_DATOS_DEPORTE_ENTRENADOR = async (idEntrenador) => OBTENER_DOCUMENTO_REALTIME(`users/${idEntrenador}`);
const ACTUALIZAR_DATOS_DEPORTE_ENTRENADOR = async (idEntrenador, datosGeneral) => ACTUALIZAR_DOCUMENTO_REALTIME("users", idEntrenador, datosGeneral);
const ACTUALIZAR_PASO_BIENVENIDA = async (idEntrenador, pasoBienvenida) => ACTUALIZAR_DOCUMENTO_REALTIME("users", idEntrenador, { pasoBienvenida });
export { ACTUALIZAR_PASO_BIENVENIDA as A, GET_ENTRENADORES_VALIDOS as G, ACTUALIZAR_DATOS_DEPORTE_ENTRENADOR as a, GET_DATOS_DEPORTE_ENTRENADOR as b, ACTUALIZAR_DATOS_GENERAL_ENTRENADOR as c, GET_DATOS_GENERAL_ENTRENADOR as d };
