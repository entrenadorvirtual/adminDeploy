import { f as pf, _ as _h, h as firestore, m as mf, i as gh, y as yf, R as Rl, j as bl, k as df } from "./config.0fd79a34.js";
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
export { ACTUALIZAR_DOCUMENTO_FIRESTORE as A, CREAR_DOCUMENTO_FIRESTORE as C, ELIMINAR_DOCUMENTO_FIRESTORE as E, CONSULTA_SIMPLE as a, CONSULTA_COMPUESTA as b };
