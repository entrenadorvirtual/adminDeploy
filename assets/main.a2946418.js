import { g as get, c as child, r as ref, d as database, s as set, u as update, b as remove, p as push } from "./config.28ac5e58.js";
const CREAR_DOCUMENTO_REALTIME = async (rutaDocumento, nombrePersonalizado, datos) => {
  try {
    if (!nombrePersonalizado.trim()) {
      throw new Error("El nombre personalizado no puede estar vac\xEDo.");
    }
    await set(ref(database, rutaDocumento + "/" + nombrePersonalizado), datos);
  } catch (error) {
    console.error("Error al crear el documento:", error);
    throw error;
  }
};
const CREAR_DOCUMENTO_REALTIME2 = async (rutaDocumento, datos) => await set(push(ref(database, rutaDocumento)), datos);
const OBTENER_DOCUMENTO_REALTIME = async (rutaDocumento) => {
  const res = await get(child(ref(database), rutaDocumento));
  if (res.exists()) {
    return res.toJSON();
  }
  return {};
};
const REEMPLAZAR_DOCUMENTO_REALTIME = async (rutaDocumento, idDocumento, documento) => await set(ref(database, rutaDocumento + "/" + idDocumento), documento);
const ACTUALIZAR_DOCUMENTO_REALTIME = async (rutaDocumento, idDocumento, documento) => await update(ref(database, rutaDocumento + "/" + idDocumento), documento);
const ELIMINAR_DOCUMENTO_REALTIME = async (rutaDocumento, idDocumento) => await remove(child(ref(database), rutaDocumento + "/" + idDocumento));
const LISTAR_DOCUMENTOS_REALTIME = async (rutaDocumentos) => {
  try {
    const datos = [];
    const respuesta = await get(child(ref(database), rutaDocumentos));
    if (respuesta.exists()) {
      const val = respuesta.val();
      Object.keys(val).forEach((element) => {
        const documento = val[element];
        if (typeof documento === "object" && documento !== null) {
          documento["id"] = element;
          datos.push(documento);
        } else {
          console.warn(`Documento inv\xE1lido en ${element}:`, documento);
        }
      });
    }
    return datos;
  } catch (err) {
    console.error("Error en LISTAR_DOCUMENTOS_REALTIME:", err);
    return [];
  }
};
export { ACTUALIZAR_DOCUMENTO_REALTIME as A, CREAR_DOCUMENTO_REALTIME as C, ELIMINAR_DOCUMENTO_REALTIME as E, LISTAR_DOCUMENTOS_REALTIME as L, OBTENER_DOCUMENTO_REALTIME as O, REEMPLAZAR_DOCUMENTO_REALTIME as R, CREAR_DOCUMENTO_REALTIME2 as a };
