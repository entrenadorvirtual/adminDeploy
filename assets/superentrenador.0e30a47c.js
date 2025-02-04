import { r as ref, d as database, e as onValue, g as get, c as child } from "./config.f3ec4a91.js";
import { O as OBTENER_DOCUMENTO_REALTIME } from "./main.9958a253.js";
import "./deportista.856eeeab.js";
var EstadoSolicitudes = /* @__PURE__ */ ((EstadoSolicitudes2) => {
  EstadoSolicitudes2["PENDIENTE"] = "Pendiente";
  EstadoSolicitudes2["APROBADO"] = "Aprobado";
  EstadoSolicitudes2["CANCELADO"] = "Cancelado";
  EstadoSolicitudes2["RECHAZADO"] = "Rechazado";
  return EstadoSolicitudes2;
})(EstadoSolicitudes || {});
ref(database);
const GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR = async (idEntrenador, solicitudes) => {
  const solicitudesDisponibles = [];
  Object.keys(solicitudes).forEach((element) => {
    if (solicitudes[element].id_entrenador === idEntrenador && solicitudes[element].estado === EstadoSolicitudes.APROBADO) {
      const sol = solicitudes[element];
      sol["id"] = element;
      solicitudesDisponibles.push(sol);
    }
  });
  return solicitudesDisponibles;
};
const LISTARENTRENADORES = async () => {
  const dbRef = ref(database);
  const entrenadores = [];
  return get(child(dbRef, "users/")).then((snapshot) => {
    if (snapshot.exists()) {
      const val = snapshot.val();
      Object.keys(val).forEach((element) => {
        if (val[element].rol === "Entrenador" && val[element].estado === "Aprobado") {
          const entre = val[element];
          entre.id = element;
          entrenadores.push(entre);
        }
      });
    }
    return entrenadores;
  }).catch((error) => {
    console.error(error);
    return [];
  });
};
const GET_DATOS_GENERAL_ENTRENADOR = async (idEntrenador) => OBTENER_DOCUMENTO_REALTIME(`users/${idEntrenador}`);
const GET_DEPORTISTAS_DE_ENTRENADOR = async (idEntrenador) => {
  const deportistas = [];
  try {
    await onValue(ref(database, "solicitudes"), async (snapshot) => {
      if (snapshot.exists()) {
        deportistas.length = 0;
        deportistas.push(
          ...await GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR(
            idEntrenador,
            snapshot.val()
          )
        );
      } else {
        deportistas.length = 0;
      }
    });
  } catch (error) {
    console.error("Error al obtener deportistas:", error);
  }
  return deportistas;
};
const GET_DATOS_RUTINA_GRATUITA = async (id) => OBTENER_DOCUMENTO_REALTIME(`planes_gratuitos/${id}`);
const LISTARDEPORTISTASPLANGRATUITO = async (idPlanGratuito) => {
  const dbRef = ref(database);
  const deportistas = [];
  try {
    const snapshot = await get(child(dbRef, "users/"));
    if (snapshot.exists()) {
      const val = snapshot.val();
      Object.keys(val).forEach((element) => {
        if (val[element].rol === "Deportista" && val[element].planGratuito === idPlanGratuito) {
          const entre = val[element];
          entre.id = element;
          deportistas.push(entre);
        }
      });
    }
    if (deportistas.length === 0) {
    }
    return deportistas;
  } catch (error) {
    console.error(error);
  }
};
export { GET_DATOS_GENERAL_ENTRENADOR as G, LISTARDEPORTISTASPLANGRATUITO as L, GET_DEPORTISTAS_DE_ENTRENADOR as a, GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR as b, GET_DATOS_RUTINA_GRATUITA as c, LISTARENTRENADORES as d };
