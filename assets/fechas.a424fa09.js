const ObtenerSiguienteLunes = (fecha) => {
  const nuevaFecha = new Date(fecha.getTime());
  if (nuevaFecha.getDay() === 0) {
    nuevaFecha.setDate(nuevaFecha.getDate() + 1);
  } else {
    nuevaFecha.setDate(nuevaFecha.getDate() + 8 - nuevaFecha.getDay());
  }
  return nuevaFecha;
};
const ObtenerLunesActual = (fecha) => {
  const nuevaFecha = new Date(fecha.getTime());
  if (nuevaFecha.getDay() === 0) {
    nuevaFecha.setDate(nuevaFecha.getDate() - 6);
  } else if (nuevaFecha.getDay() !== 1) {
    nuevaFecha.setDate(nuevaFecha.getDate() + 1 - nuevaFecha.getDay());
  }
  return nuevaFecha;
};
const fechaFormatAMD = (fechaString) => {
  if (fechaString) {
    const datosFecha = fechaString.split("-");
    return new Date(Number(datosFecha[0]), Number(datosFecha[1]), Number(datosFecha[2]));
  } else {
    return "";
  }
};
export { ObtenerLunesActual as O, ObtenerSiguienteLunes as a, fechaFormatAMD as f };
