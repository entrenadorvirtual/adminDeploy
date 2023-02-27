import { A as ACTUALIZAR_DOCUMENTO_REALTIME } from "./main.981fd68f.js";
import { r as ref, d as database, g as get, c as child } from "./config.3d78ff49.js";
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
export { ACTUALIZAR_FOTO as A, GET_DATOS_USUARIO as G };
