import { r as ref, d as database, s as set, p as push, u as update, b as remove, c as child } from "./config.3d78ff49.js";
import { k as updateBienvenida } from "./deportista.d647ed5b.js";
var EstadoSolicitudes = /* @__PURE__ */ ((EstadoSolicitudes2) => {
  EstadoSolicitudes2["PENDIENTE"] = "Pendiente";
  EstadoSolicitudes2["APROBADO"] = "Aprobado";
  EstadoSolicitudes2["CANCELADO"] = "Cancelado";
  EstadoSolicitudes2["RECHAZADO"] = "Rechazado";
  return EstadoSolicitudes2;
})(EstadoSolicitudes || {});
const dbRef = ref(database);
const GET_SOLICITUDES_DEPORTISTA = (idDeportista, solicitudes) => {
  const solicitudesDisponibles = [];
  Object.keys(solicitudes).forEach((element) => {
    if (solicitudes[element].id_deportista === idDeportista) {
      const sol = solicitudes[element];
      sol["id"] = element;
      solicitudesDisponibles.push(sol);
    }
  });
  return solicitudesDisponibles;
};
const VERIFICAR_MATCH = (idDeportista, solicitudes) => {
  let estado = false;
  let entrenador_id = "";
  Object.keys(solicitudes).forEach((element) => {
    if (solicitudes[element].id_deportista === idDeportista && solicitudes[element].estado === EstadoSolicitudes.APROBADO) {
      entrenador_id = solicitudes[element].id_entrenador;
      estado = true;
    }
  });
  return { match: estado, entrenador: entrenador_id };
};
const GET_SOLICITUDES_DESDE_ENTRENADOR = async (idEntrenador, solicitudes) => {
  const solicitudesDisponibles = [];
  Object.keys(solicitudes).forEach((element) => {
    if (solicitudes[element].id_entrenador === idEntrenador && solicitudes[element].estado === EstadoSolicitudes.PENDIENTE) {
      const sol = solicitudes[element];
      sol["id"] = element;
      solicitudesDisponibles.push(sol);
    }
  });
  return solicitudesDisponibles;
};
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
const GET_MATCH_TOTAL = async (idEntrenador, solicitudes) => {
  let contador = 0;
  Object.keys(solicitudes).forEach((element) => {
    if (solicitudes[element].id_entrenador === idEntrenador && solicitudes[element].estado === EstadoSolicitudes.APROBADO) {
      contador = contador + 1;
    }
  });
  return contador;
};
const ENVIAR_INVITACION = async (datosDeportista, datosEntrenador, solicitudEnviada, newBienvenida) => {
  const solicitud = {
    id_deportista: datosDeportista.id,
    id_entrenador: datosEntrenador.id,
    nombres: datosDeportista.nombres + " " + datosDeportista.apellidos,
    foto: "",
    deporte: datosEntrenador.deporte,
    estado: EstadoSolicitudes.PENDIENTE,
    fecha_registro: new Date().getTime()
  };
  await set(push(ref(database, "solicitudes")), solicitud);
  await update(ref(database, "users/" + datosDeportista.id + "/plan"), {
    solicitudesEnviadas: solicitudEnviada
  });
  updateBienvenida({ bienvenida: newBienvenida });
};
const CAMBIAR_ESTADO_INVITACION = async (invitacion, estado) => {
  const idInvitacion = invitacion.id;
  delete invitacion.id;
  invitacion.fecha_registro = new Date().getTime();
  invitacion.estado = estado;
  await set(ref(database, "solicitudes/" + idInvitacion), invitacion);
};
const ELIMINAR_INVITACION = async (id_invitacion, UID, contadorSolicitud) => {
  await remove(child(dbRef, "solicitudes/" + id_invitacion));
  await update(ref(database, "users/" + UID + "/plan"), {
    solicitudesEnviadas: contadorSolicitud
  });
};
export { CAMBIAR_ESTADO_INVITACION as C, ENVIAR_INVITACION as E, GET_SOLICITUDES_DEPORTISTA as G, VERIFICAR_MATCH as V, ELIMINAR_INVITACION as a, GET_MATCH_TOTAL as b, GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR as c, EstadoSolicitudes as d, GET_SOLICITUDES_DESDE_ENTRENADOR as e };
