import { r as ref, d as database, g as get, c as child, u as update } from "./config.88550180.js";
import { b as buildRitmo } from "./general.8a94768e.js";
import { O as OBTENER_DOCUMENTO_REALTIME, A as ACTUALIZAR_DOCUMENTO_REALTIME, C as CREAR_DOCUMENTO_REALTIME } from "./main.33b1dbf4.js";
const dbRef = ref(database);
const getDatosDeportista = async (idDeportista) => OBTENER_DOCUMENTO_REALTIME(`users/${idDeportista}`);
const getMorfologiaDeportista = async (idDeportista) => OBTENER_DOCUMENTO_REALTIME(`Morfologias/${idDeportista}`);
const getVamsRegistradas = async (idDeportista) => {
  try {
    const res = await get(child(dbRef, `Semicooper/${idDeportista}/regVAM/`));
    if (res.exists()) {
      const registros = res.val();
      const valoresRegistros = Object.values(registros);
      valoresRegistros.sort((a, b) => b.fecha - a.fecha);
      return valoresRegistros;
    }
  } catch (error) {
    console.error(error);
  }
  return void 0;
};
const getZonasDeportista = async (idDeportista) => OBTENER_DOCUMENTO_REALTIME(`users/${idDeportista}/zonas`);
const getRitmosDeportista = async (idDeportista) => OBTENER_DOCUMENTO_REALTIME(`users/${idDeportista}/ritmos`);
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
    const res = await get(
      child(dbRef, `Semicooper/${idDeportista}/actVAM/${idDeportista}`)
    );
    if (res.exists()) {
      const registros = res.val();
      return registros;
    }
  } catch (error) {
    console.error(error);
  }
};
const createRegisterSemicooper = async (idDeportista, datosTest, ritmos) => {
  const vo2max = (22.4 * Number(datosTest.semicooper) / 1e3 - 11.3).toFixed(2);
  const vams = getVams(Number(datosTest.semicooper));
  const fecha = Date.now();
  await ACTUALIZAR_DOCUMENTO_REALTIME(
    "Semicooper/" + idDeportista + "/actVAM",
    idDeportista,
    {
      semicooper: datosTest.semicooper,
      VAM_decimal: vams.vam,
      VAM: vams.time,
      VO2Max: vo2max,
      marcas: datosTest.marcas,
      min: datosTest.min,
      seg: datosTest.seg,
      fecha
    }
  );
  await CREAR_DOCUMENTO_REALTIME("Semicooper/" + idDeportista + "/regVAM/", {
    semicooper: datosTest.semicooper,
    VAM_decimal: vams.vam,
    VAM: vams.time,
    VO2Max: vo2max,
    marcas: datosTest.marcas,
    min: datosTest.min,
    seg: datosTest.seg,
    fecha
  });
  update(ref(database, "users/" + idDeportista + "/ritmos/"), ritmos);
};
const getVams = (regSemiCoop) => {
  let segu = null;
  let tiempo = null;
  const valVam = 6e3 / regSemiCoop;
  let entero = Math.trunc(valVam);
  const decimal = valVam - entero;
  let s = Math.round(decimal * 60);
  if (s === 60) {
    entero += 1;
    s = 0;
  }
  segu = s < 10 ? "0" + s : String(s);
  tiempo = entero + ":" + segu + " min/km";
  const min = entero;
  const seg = segu;
  return { time: tiempo, vam: valVam, min, seg };
};
const getZonaRitmos = (vam) => {
  return {
    R0min: buildRitmo(Number((vam / 0.65).toFixed(2)) + 2),
    R0max: buildRitmo(Number((vam / 0.65).toFixed(2))),
    R1min: buildRitmo(Number((vam / 0.65 - 0.016666666666666666).toFixed(2))),
    R1max: buildRitmo(Number((vam / 0.75).toFixed(2))),
    R2min: buildRitmo(Number((vam / 0.75 - 0.016666666666666666).toFixed(2))),
    R2max: buildRitmo(Number((vam / 0.85).toFixed(2))),
    R3min: buildRitmo(Number((vam / 0.85 - 0.016666666666666666).toFixed(2))),
    R3max: buildRitmo(Number((vam / 0.95).toFixed(2))),
    R3pmin: buildRitmo(Number((vam / 0.95 - 0.016666666666666666).toFixed(2))),
    R3pmax: buildRitmo(Number((vam / 1.05).toFixed(2))),
    R4min: buildRitmo(Number((vam / 1.05 - 0.01666666666666666).toFixed(2))),
    R4max: buildRitmo(Number((vam / 1.2).toFixed(2))),
    R5min: buildRitmo(Number((vam / 1.2 - 0.016666666666666666).toFixed(2))),
    R5max: buildRitmo(Number((vam / 1.4).toFixed(2))),
    R6min: buildRitmo(Number((vam / 1.4 - 0.016666666666666666).toFixed(2))),
    R6max: 0
  };
};
export { getRitmosDeportista as a, getSemicooper as b, getMorfologiaDeportista as c, getDeportes as d, getObjetivos as e, getDatosDeportista as f, getZonasDeportista as g, getVamsRegistradas as h, getZonaRitmos as i, createRegisterSemicooper as j, getVams as k };
