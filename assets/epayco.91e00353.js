import { aE as axios } from "./index.695461b3.js";
import { u as update, r as ref, d as database } from "./config.dae7a527.js";
import { j as getEstadoBienvenida, k as updateBienvenida } from "./deportista.f81b0247.js";
const url = {}.VITE_APP_URL_BASE_EPAYCO;
const getPlanesR = async () => {
  return axios.get(url + "/planes").then((data) => {
    return data.data;
  });
};
async function getTokenCard(datos) {
  return axios({
    method: "post",
    url: url + "/card",
    data: datos
  }).then(function(response) {
    return response.data;
  });
}
async function addClient(datos) {
  return axios({
    method: "post",
    url: url + "/client",
    data: datos
  }).then(function(response) {
    return response.data;
  });
}
async function subscription(datos) {
  return axios({
    method: "post",
    url: url + "/subscription",
    data: datos
  }).then(function(response) {
    return response.data;
  });
}
async function paySubscription(datos) {
  return axios({
    method: "post",
    url: url + "/paySub",
    data: datos
  }).then(function(response) {
    return response.data;
  });
}
const updatePlanUnico = async (idUsuario, datos) => {
  update(ref(database, "Cobros/" + idUsuario + "/" + datos.x_transaction_date), {
    recibo: datos.x_transaction_id,
    bank_name: datos.x_bank_name,
    id_equipo: datos.x_customer_ip,
    plan: datos.x_description
  });
  update(ref(database, "users/" + idUsuario + "/plan"), {
    nombre: datos.x_description
  });
  const estado = await getEstadoBienvenida(idUsuario);
  if (estado - 1 == 0) {
    updateBienvenida({ bienvenida: estado - 1 });
  }
};
export { addClient as a, getTokenCard as b, getPlanesR as g, paySubscription as p, subscription as s, updatePlanUnico as u };
