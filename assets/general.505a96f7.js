import { A as ACTUALIZAR_DOCUMENTO_REALTIME } from "./main.1a95f887.js";
import { r as ref, d as database, g as get, c as child } from "./config.f3c9bc1b.js";
const dbRef = ref(database);
const GET_DATOS_USUARIO = async (idUsuario) => {
  try {
    const respuesta = await get(child(dbRef, `users/${idUsuario}`));
    if (respuesta.exists()) {
      return { datosUsuario: respuesta.val(), idUsuario: respuesta.key };
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};
const ACTUALIZAR_FOTO = async (idUser, foto_url) => ACTUALIZAR_DOCUMENTO_REALTIME("users", idUser, { foto_url });
const buildRitmo = (calculo) => {
  let res = null;
  let segu = null;
  let minutos = Math.trunc(calculo);
  const decimal = calculo - minutos;
  let s = Math.round(decimal * 60);
  if (s === 60) {
    minutos += 1;
    s = 0;
  }
  segu = s < 10 ? "0" + s : s;
  res = minutos + ":" + segu;
  return res;
};
const formatDate = async (date) => {
  const fecha = new Date(date);
  const day = fecha.getDate();
  const month = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();
  return day + "/" + month + "/" + anio;
};
const compareDates = (date) => {
  let response = "igual";
  let dateRef = new Date(date);
  const dayRef = dateRef.getDate();
  const monthRef = dateRef.getMonth();
  const yearRef = dateRef.getFullYear();
  let dateNow = new Date();
  const day = dateNow.getDate();
  const month = dateNow.getMonth();
  const year = dateNow.getFullYear();
  dateRef = new Date(yearRef, monthRef, dayRef);
  dateNow = new Date(year, month, day);
  if (dateRef > dateNow) {
    response = "mayor";
  } else if (dateRef < dateNow) {
    response = "menor";
  }
  return response;
};
function toFixedIfNecessary(number, decimals) {
  if (number.toString().split(".").length > 1) {
    return number.toFixed(decimals);
  } else {
    return number;
  }
}
function labelEsfuerzo(esfuerzo) {
  switch (esfuerzo) {
    case "Zonas FC":
      return esfuerzo + " (ppm)";
    case "Zona de Ritmos":
      return esfuerzo + " (min/Km)";
    default:
      return esfuerzo;
  }
}
const convertirMinutosAHMS = (minutos) => {
  if (isNaN(minutos) || minutos < 0)
    return "Tiempo Invalido";
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;
  const segundos = Math.round(minutosRestantes % 1 * 60);
  const horaFormateada = horas.toString().padStart(2, "0");
  const minutosFormateados = Math.floor(minutosRestantes).toString().padStart(2, "0");
  const segundosFormateados = segundos.toString().padStart(2, "0");
  return `${horaFormateada}:${minutosFormateados}:${segundosFormateados}`;
};
const getRol = async (uid) => {
  let rol = "";
  const val = await get(child(dbRef, `users/${uid}/rol`));
  if (val.exists()) {
    const datos = val.val();
    rol = datos;
  }
  return rol;
};
export { ACTUALIZAR_FOTO as A, GET_DATOS_USUARIO as G, convertirMinutosAHMS as a, buildRitmo as b, compareDates as c, formatDate as f, getRol as g, labelEsfuerzo as l, toFixedIfNecessary as t };
