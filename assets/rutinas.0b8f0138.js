import { C as CREAR_DOCUMENTO_REALTIME, R as REEMPLAZAR_DOCUMENTO_REALTIME, L as LISTAR_DOCUMENTOS_REALTIME } from "./main.1a95f887.js";
import { i as pf, _ as _h, j as firestore, R as Rl, k as bl, l as df, m as mf, n as gh, y as yf } from "./config.f3c9bc1b.js";
const CREAR_DOCUMENTO_FIRESTORE = async (rutaDocumento, datos) => {
  const resultDb = await pf(_h(firestore, rutaDocumento), datos);
  return resultDb.id;
};
const ACTUALIZAR_DOCUMENTO_FIRESTORE = async (colection, id, datos) => await mf(gh(firestore, colection, id), datos);
const ELIMINAR_DOCUMENTO_FIRESTORE = async (coleccion, id) => await yf(gh(firestore, coleccion, id));
const CONSULTA_SIMPLE = async (coleccion, valor, condicion, resultado) => {
  const q = Rl(_h(firestore, coleccion), bl(valor, condicion, resultado));
  const getConsulta = await df(q);
  const datos = [];
  getConsulta.forEach((doc2) => {
    const obj = JSON.parse(JSON.stringify(doc2.data()));
    obj.id = doc2.id;
    datos.push(obj);
  });
  return datos;
};
const CONSULTA_COMPUESTA = async (coleccion, valor1, condicion1, resultado1, valor2, condicion2, resultado2) => {
  const q = Rl(
    _h(firestore, coleccion),
    bl(valor1, condicion1, resultado1),
    bl(valor2, condicion2, resultado2)
  );
  const getConsulta = await df(q);
  const datos = [];
  getConsulta.forEach((doc2) => {
    const obj = JSON.parse(JSON.stringify(doc2.data()));
    obj.id = doc2.id;
    datos.push(obj);
  });
  return datos;
};
const CREAR_PLAN_GRATUITO = async (planRutina) => await CREAR_DOCUMENTO_REALTIME("planes_gratuitos", planRutina);
const ACTUALIZAR_PLAN_GRATUITO = async (planRutina) => {
  const idPlan = planRutina.id;
  delete planRutina.id;
  return await REEMPLAZAR_DOCUMENTO_REALTIME("planes_gratuitos", idPlan, planRutina);
};
const LISTAR_RUTINAS_GRATUITAS_ENTRENADOR = async (idEntrenador) => {
  const rutinas = await LISTAR_DOCUMENTOS_REALTIME("planes_gratuitos");
  return rutinas ? rutinas.filter((element) => element.id_entrenador === idEntrenador) : [];
};
const LISTAR_RUTINAS_DEPORTISTA = async (idDeportista) => await CONSULTA_SIMPLE("rutinas", "id_deportista", "==", idDeportista);
const LISTAR_RUTINAS_DEPORTISTA_ENTRENADOR = async (idDeportista, idEntrenador) => await CONSULTA_COMPUESTA(
  "rutinas",
  "id_deportista",
  "==",
  idDeportista,
  "id_entrenador",
  "==",
  idEntrenador
);
const CREAR_RUTINA_PERSONALIZADA = async (rutina) => await CREAR_DOCUMENTO_FIRESTORE("rutinas", rutina);
const CREAR_RUTINA_COMODIN = async (rutina) => await CREAR_DOCUMENTO_FIRESTORE("rutinas_comodin", rutina);
const LISTAR_RUTINAS_COMODIN = async (rango) => {
  const rutinas = await CONSULTA_SIMPLE("rutinas_comodin", "rango", "==", rango);
  return rutinas;
};
const ELIMINAR_RUTINA_COMODIN = async (idRutina) => await ELIMINAR_DOCUMENTO_FIRESTORE("rutinas_comodin", idRutina);
const ACTUALIZAR_RUTINA_PERSONALIZADA = async (idRutina, rutina) => {
  const rutinaGuardar = { ...rutina };
  delete rutinaGuardar.id;
  await ACTUALIZAR_DOCUMENTO_FIRESTORE("rutinas", idRutina, rutinaGuardar);
};
const ACTUALIZAR_RUTINA_COMODIN = async (idRutina, rutina) => {
  const rutinaGuardar = { ...rutina };
  delete rutinaGuardar.id;
  await ACTUALIZAR_DOCUMENTO_FIRESTORE("rutinas_comodin", idRutina, rutinaGuardar);
};
const ELIMINAR_RUTINA_PERSONALIZADA = async (idRutina) => await ELIMINAR_DOCUMENTO_FIRESTORE("rutinas", idRutina);
export { ACTUALIZAR_RUTINA_PERSONALIZADA as A, CREAR_RUTINA_PERSONALIZADA as C, ELIMINAR_RUTINA_PERSONALIZADA as E, LISTAR_RUTINAS_GRATUITAS_ENTRENADOR as L, CREAR_DOCUMENTO_FIRESTORE as a, LISTAR_RUTINAS_DEPORTISTA_ENTRENADOR as b, LISTAR_RUTINAS_DEPORTISTA as c, CREAR_PLAN_GRATUITO as d, ACTUALIZAR_PLAN_GRATUITO as e, ACTUALIZAR_RUTINA_COMODIN as f, ELIMINAR_RUTINA_COMODIN as g, CREAR_RUTINA_COMODIN as h, LISTAR_RUTINAS_COMODIN as i };
