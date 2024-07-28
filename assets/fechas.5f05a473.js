const getFecha = (fecha) => {
  const fechaISO = new Date(fecha);
  const anio = fechaISO.getFullYear();
  const mes = (fechaISO.getMonth() + 1).toString().padStart(2, "0");
  const dia = fechaISO.getDate().toString().padStart(2, "0");
  return `${anio}-${mes}-${dia}`;
};
function convertirTimestamp(timestamp) {
  const fecha = new Date(timestamp.seconds * 1e3);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const a\u00F1o = fecha.getFullYear();
  const fechaLegible = a\u00F1o + "/" + mes + "/" + dia;
  return fechaLegible;
}
export { convertirTimestamp as c, getFecha as g };
