import { r as ref, d as database, g as get, c as child } from "./config.9bf2e6c5.js";
import "./general.a67d6d2f.js";
import { O as OBTENER_DOCUMENTO_REALTIME } from "./main.03abd8f7.js";
const dbRef = ref(database);
const getDatosDeportista = async (idDeportista) => OBTENER_DOCUMENTO_REALTIME(`users/${idDeportista}`);
const getMorfologiaDeportista = async (idDeportista) => OBTENER_DOCUMENTO_REALTIME(`Morfologias/${idDeportista}`);
const getZonasDeportista = async (idDeportista) => OBTENER_DOCUMENTO_REALTIME(`users/${idDeportista}/zonas`);
const getDeportes = async (idDeportista) => {
  try {
    const res = await get(child(dbRef, `Deportes/${idDeportista}`));
    if (res.exists()) {
      const deportes = res.val();
      return deportes;
    }
  } catch (error) {
    console.error(error);
  }
};
const getObjetivos = async (idDeportista) => {
  try {
    const res = await get(child(dbRef, `Objetivos/${idDeportista}`));
    if (res.exists()) {
      const objetivos = res.val();
      return objetivos;
    }
  } catch (error) {
    console.error(error);
  }
};
const getSemicooper = async (idDeportista) => {
  try {
    const res = await get(child(dbRef, `Semicooper/${idDeportista}`));
    if (res.exists()) {
      const registros = res.val();
      return registros;
    }
  } catch (error) {
    console.error(error);
  }
};
const getRitmosDeportista = async (idDeportista) => OBTENER_DOCUMENTO_REALTIME(`users/${idDeportista}/ritmos`);
export { getZonasDeportista as a, getRitmosDeportista as b, getSemicooper as c, getMorfologiaDeportista as d, getDeportes as e, getObjetivos as f, getDatosDeportista as g };
