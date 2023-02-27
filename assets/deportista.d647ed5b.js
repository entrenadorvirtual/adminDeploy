import { r as ref, d as database, g as get, c as child, a as auth, u as update } from "./config.3d78ff49.js";
import "./general.b8dca58f.js";
import { O as OBTENER_DOCUMENTO_REALTIME, A as ACTUALIZAR_DOCUMENTO_REALTIME, a as ACTUALIZAR_PLAN_REALTIME } from "./main.981fd68f.js";
const dbRef = ref(database);
const getDatosDeportista = async (idDeportista) => OBTENER_DOCUMENTO_REALTIME(`users/${idDeportista}`);
const updateDatosDeportista = async (idDeportista, datosDeportista) => ACTUALIZAR_DOCUMENTO_REALTIME("users", idDeportista, datosDeportista);
const getMorfologiaDeportista = async (idDeportista) => OBTENER_DOCUMENTO_REALTIME(`Morfologias/${idDeportista}`);
const updateMorfologia = async (idDeportista, datosMorfologia) => ACTUALIZAR_DOCUMENTO_REALTIME("Morfologias", idDeportista, datosMorfologia);
const updateZonas = async (idDeportista, datosZonas) => {
  update(ref(database, "users/" + idDeportista + "/zonas"), datosZonas);
};
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
const updateDeportes = async (idDeportista, datosDeportes) => ACTUALIZAR_DOCUMENTO_REALTIME("Deportes", idDeportista, datosDeportes);
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
const updateObjetivo = async (idDeportista, datosObjetivos) => ACTUALIZAR_DOCUMENTO_REALTIME("Objetivos", idDeportista, datosObjetivos);
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
const updateSemicooper = async (idDeportista, datosTest) => {
  let test = "";
  const vo2max = (22.4 * Number(datosTest.semicooper) / 1e3 - 11.3).toFixed(2);
  const testN = 6e3 / Number(datosTest.semicooper);
  let tiempo = testN + " min/km";
  if (testN.toString().length >= 3) {
    const num = testN.toString().split(".");
    const minuto = num[0];
    const decimal = "." + num[1].charAt(0) + num[1].charAt(1);
    const segundo = Math.round(Number(decimal) * 60);
    test = minuto + decimal;
    tiempo = minuto + ":" + segundo + " min/km";
  } else {
    test = testN.toString();
  }
  ACTUALIZAR_DOCUMENTO_REALTIME("Semicooper", idDeportista, {
    semicooper: datosTest.semicooper,
    VAM_decimal: test,
    VAM: tiempo,
    VO2Max: vo2max,
    marcas: datosTest.marcas
  });
  const fecha = Date.now();
  update(ref(database, "users/" + idDeportista + "/regVAM/" + fecha), {
    semicooper: datosTest.semicooper,
    VAM_decimal: test,
    VAM: tiempo,
    VO2Max: vo2max,
    marcas: datosTest.marcas
  });
};
const actualizarDato = async (ruta, idDeportista, datos) => ACTUALIZAR_DOCUMENTO_REALTIME(ruta, idDeportista, datos);
const updatePlan = async (idDeportista, plan) => {
  switch (plan) {
    case "Plan Plata":
      await ACTUALIZAR_PLAN_REALTIME(idDeportista, {
        nombre: plan,
        solicitudes: 5
      });
      break;
    case "Plan Oro":
      await ACTUALIZAR_PLAN_REALTIME(idDeportista, {
        nombre: plan,
        solicitudes: 10
      });
      break;
    case "Plan Platino":
      await ACTUALIZAR_PLAN_REALTIME(idDeportista, {
        nombre: plan,
        solicitudes: 15
      });
      break;
    case "Plan Diamante":
      await ACTUALIZAR_PLAN_REALTIME(idDeportista, {
        nombre: plan,
        solicitudes: 20
      });
      break;
  }
};
const getEstadoBienvenida = async (user) => {
  try {
    const res = await get(child(dbRef, `users/${user}/bienvenida`));
    if (res.exists()) {
      return res.val();
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};
const getCategorias = async () => {
  try {
    const res = await get(child(dbRef, `Categorias/`));
    if (res.exists()) {
      const deportes = Object.keys(res.val());
      return deportes;
    }
  } catch (error) {
    console.error(error);
  }
};
const getSubCategorias = async (subCategoria) => {
  try {
    const res = await get(child(dbRef, `Categorias/${subCategoria}`));
    if (res.exists()) {
      return res.val();
    }
  } catch (error) {
    console.error(error);
  }
};
const getPaises = async () => {
  try {
    const res = await get(child(dbRef, `Ciudades/`));
    if (res.exists()) {
      const paises = Object.keys(res.val());
      return paises;
    }
  } catch (error) {
    console.error(error);
  }
};
const getCiudades = async (ciudad) => {
  try {
    const res = await get(child(dbRef, `Ciudades/${ciudad}`));
    if (res.exists()) {
      return res.val();
    }
  } catch (error) {
    console.error(error);
  }
};
const getCiudadesOnObject = async () => {
  const datos = {};
  const res = await get(child(dbRef, "Ciudades/"));
  if (res.exists()) {
    const val = res.val();
    Object.keys(val).forEach((element) => {
      datos[element] = val[element];
    });
  }
  return datos;
};
const updateBienvenida = (estadoBienvenida) => {
  const user = auth.currentUser;
  if (user !== null) {
    const uid = user.uid;
    update(ref(database, "users/" + uid), estadoBienvenida);
  }
};
const OBTENER_PLAN_DEPORTISTA = async (idDeportista) => {
  let plan = {};
  const res = await get(child(dbRef, "users/" + idDeportista + "/plan"));
  if (res.exists()) {
    plan = res.val();
  }
  return plan;
};
export { OBTENER_PLAN_DEPORTISTA as O, getSemicooper as a, getDeportes as b, updateDeportes as c, updateMorfologia as d, getMorfologiaDeportista as e, updateDatosDeportista as f, getDatosDeportista as g, getPaises as h, getCiudades as i, getEstadoBienvenida as j, updateBienvenida as k, getObjetivos as l, getCategorias as m, getSubCategorias as n, updateObjetivo as o, updateZonas as p, getZonasDeportista as q, updatePlan as r, actualizarDato as s, getCiudadesOnObject as t, updateSemicooper as u };
