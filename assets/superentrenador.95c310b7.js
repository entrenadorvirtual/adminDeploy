import { e as onValue, r as ref, d as database, g as get, c as child } from "./config.0fd79a34.js";
import { O as OBTENER_DOCUMENTO_REALTIME } from "./main.cf1f8e20.js";
import { G as GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR } from "./match.1a597960.js";
const LISTARENTRENADORES = async () => {
  const dbRef = ref(database);
  const entrenadores = [];
  return get(child(dbRef, "users/")).then((snapshot) => {
    if (snapshot.exists()) {
      const val = snapshot.val();
      Object.keys(val).forEach((element) => {
        if (val[element].rol == "Entrenador" && val[element].estado == "Aprobado") {
          const entre = val[element];
          entre.id = element;
          entrenadores.push(entre);
        }
      });
    }
    return entrenadores;
  }).catch((error) => {
    console.error(error);
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
export { GET_DATOS_GENERAL_ENTRENADOR as G, LISTARENTRENADORES as L, GET_DEPORTISTAS_DE_ENTRENADOR as a, GET_DATOS_RUTINA_GRATUITA as b };
