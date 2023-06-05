import { g as get, c as child, r as ref, d as database, s as set, p as push, u as update, b as remove } from "./config.fc5b324a.js";
const CREAR_DOCUMENTO_REALTIME = async (rutaDocumento, datos) => await set(push(ref(database, rutaDocumento)), datos);
const OBTENER_DOCUMENTO_REALTIME = async (rutaDocumento) => {
  const res = await get(child(ref(database), rutaDocumento));
  if (res.exists()) {
    return res.toJSON();
  }
  return {};
};
const REEMPLAZAR_DOCUMENTO_REALTIME = async (rutaDocumento, idDocumento, documento) => await set(ref(database, rutaDocumento + "/" + idDocumento), documento);
const ACTUALIZAR_DOCUMENTO_REALTIME = async (rutaDocumento, idDocumento, documento) => await update(ref(database, rutaDocumento + "/" + idDocumento), documento);
const ACTUALIZAR_PLAN_REALTIME = async (idDocumento, documento) => await update(ref(database, "users/" + idDocumento + "/plan"), documento);
const ELIMINAR_DOCUMENTO_REALTIME = async (rutaDocumento, idDocumento) => await remove(child(ref(database), rutaDocumento + "/" + idDocumento));
const LISTAR_DOCUMENTOS_REALTIME = async (rutaDocumentos) => {
  try {
    const datos = [];
    const respuesta = await get(child(ref(database), rutaDocumentos));
    if (respuesta.exists()) {
      const val = respuesta.val();
      Object.keys(val).forEach((element) => {
        const documento = val[element];
        documento["id"] = element;
        datos.push(documento);
      });
    }
    return datos;
  } catch (err) {
    console.log(err);
    return [];
  }
};
const sliceCard = async (card) => {
  const inicio = card.slice(0, 4);
  const final = card.slice(-4);
  const slice = inicio + "********" + final;
  return slice;
};
export { ACTUALIZAR_DOCUMENTO_REALTIME as A, CREAR_DOCUMENTO_REALTIME as C, ELIMINAR_DOCUMENTO_REALTIME as E, LISTAR_DOCUMENTOS_REALTIME as L, OBTENER_DOCUMENTO_REALTIME as O, REEMPLAZAR_DOCUMENTO_REALTIME as R, ACTUALIZAR_PLAN_REALTIME as a, sliceCard as s };
