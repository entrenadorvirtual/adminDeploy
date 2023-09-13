import { C as CREAR_DOCUMENTO_REALTIME, R as REEMPLAZAR_DOCUMENTO_REALTIME, L as LISTAR_DOCUMENTOS_REALTIME, E as ELIMINAR_DOCUMENTO_REALTIME } from "./main.cf1f8e20.js";
import { C as CREAR_DOCUMENTO_FIRESTORE, A as ACTUALIZAR_DOCUMENTO_FIRESTORE, E as ELIMINAR_DOCUMENTO_FIRESTORE, a as CONSULTA_SIMPLE, b as CONSULTA_COMPUESTA } from "./mainfirestore.b9d64d68.js";
import { O as ObtenerLunesActual, a as ObtenerSiguienteLunes } from "./fechas.6bd42486.js";
const CONVERT_SEMANA_RUTINA = (semanaRutina) => {
  const nuevaRutina = {};
  semanaRutina.forEach((semana, indexSemana) => {
    const nuevaSemana = {};
    semana.forEach((dia, indexDia) => {
      if (dia.length !== 0) {
        nuevaSemana["dia" + indexDia] = dia;
      }
    });
    nuevaRutina["semana" + indexSemana] = nuevaSemana;
  });
  return nuevaRutina;
};
const REVERT_SEMANA_RUTINA = (rutinaActual, semanaRutina) => {
  Object.keys(semanaRutina).forEach((keySemana) => {
    const semanaIndex = Number(keySemana.substring(keySemana.length - 1));
    Object.keys(semanaRutina[keySemana]).forEach((keyDia) => {
      const diaIndex = Number(keyDia.substring(keyDia.length - 1));
      rutinaActual[semanaIndex][diaIndex] = semanaRutina[keySemana][keyDia];
    });
  });
};
const NEW_REVERT_SEMANA_RUTINA = (semanaRutina) => {
  const nuevaRutina = [
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []]
  ];
  Object.keys(semanaRutina).forEach((keySemana) => {
    const semanaIndex = Number(keySemana.substring(keySemana.length - 1));
    Object.keys(semanaRutina[keySemana]).forEach((keyDia) => {
      const diaIndex = Number(keyDia.substring(keyDia.length - 1));
      nuevaRutina[semanaIndex][diaIndex] = semanaRutina[keySemana][keyDia];
    });
  });
  return nuevaRutina;
};
const CREAR_PLAN_GRATUITO = async (planRutina) => await CREAR_DOCUMENTO_REALTIME("planes_gratuitos", planRutina);
const ACTUALIZAR_PLAN_GRATUITO = async (planRutina) => {
  const idPlan = planRutina.id;
  delete planRutina.id;
  return await REEMPLAZAR_DOCUMENTO_REALTIME("planes_gratuitos", idPlan, planRutina);
};
const ELIMINAR_PLAN_GRATUITO = async (idRutina) => await ELIMINAR_DOCUMENTO_REALTIME("planes_gratuitos", idRutina);
const LISTAR_RUTINAS_GRATUITAS_ENTRENADOR = async (idEntrenador) => {
  const rutinas = await LISTAR_DOCUMENTOS_REALTIME("planes_gratuitos");
  return rutinas ? rutinas.filter((element) => element.id_entrenador === idEntrenador) : [];
};
const ASIGNAR_SEMANA_COMODIN = async (idDeportista, fechaSemana) => {
  const rutinaComodin = await LISTAR_RUTINAS_COMODIN();
  const plantGratis = NEW_REVERT_SEMANA_RUTINA(rutinaComodin[0].plan);
  const semana = plantGratis[0];
  const fecha = new Date(fechaSemana.getTime());
  const siguienteLunes = ObtenerSiguienteLunes(fecha);
  const idexDiaDomingo = 6;
  const indexDiaSabado = 0;
  while (fecha < siguienteLunes) {
    semana.forEach((dia, index) => {
      if (fecha.getDay() === indexDiaSabado && dia.length !== 0 && index === idexDiaDomingo) {
        CREAR_RUTINA_PERSONALIZADA({
          ...dia,
          fecha,
          id_deportista: idDeportista,
          id_entrenador: "QKDHvESUFrb4nPkCGAFuTdk74bo2"
        });
      } else if (dia.length !== indexDiaSabado && index === fecha.getDay() - 1) {
        CREAR_RUTINA_PERSONALIZADA({
          ...dia,
          fecha,
          id_deportista: idDeportista,
          id_entrenador: "QKDHvESUFrb4nPkCGAFuTdk74bo2"
        });
      }
    });
    fecha.setDate(fecha.getDate() + 1);
  }
};
const ASIGNAR_RUTINA_DESDE_BRONCE = async (idDeportista, rutinaBronce) => {
  const { plan } = rutinaBronce;
  const fechaActual = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );
  const indexLunes = 1;
  let lunesSemana = ObtenerLunesActual(fechaActual);
  if (fechaActual.getDay() !== indexLunes) {
    await ASIGNAR_SEMANA_COMODIN(idDeportista, fechaActual);
    lunesSemana = ObtenerSiguienteLunes(fechaActual);
  }
  plan.forEach((semana) => {
    semana.forEach((dia, index) => {
      if (Object.keys(dia).length !== 0) {
        const fecha = new Date(lunesSemana.getTime());
        fecha.setDate(fecha.getDate() + index);
        CREAR_RUTINA_PERSONALIZADA({
          ...dia,
          fecha,
          id_deportista: idDeportista,
          id_entrenador: "QKDHvESUFrb4nPkCGAFuTdk74bo2"
        });
      }
    });
    lunesSemana = ObtenerSiguienteLunes(lunesSemana);
  });
};
const LISTAR_RUTINAS_COMODIN = async () => await LISTAR_DOCUMENTOS_REALTIME("rutinas_comodin");
const CREAR_RUTINA_COMODIN = async (datosRutina) => await CREAR_DOCUMENTO_REALTIME("rutinas_comodin", datosRutina);
const ACTUALIZAR_RUTINA_COMODIN = async (rutina) => {
  const idPlan = rutina.id;
  delete rutina.id;
  await REEMPLAZAR_DOCUMENTO_REALTIME("rutinas_comodin", idPlan, rutina);
};
const ELIMINAR_RUTINA_COMODIN = async (idRutina) => await ELIMINAR_DOCUMENTO_REALTIME("rutinas_comodin", idRutina);
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
const ACTUALIZAR_RUTINA_PERSONALIZADA = async (idRutina, rutina) => {
  const rutinaGuardar = { ...rutina };
  delete rutinaGuardar.id;
  await ACTUALIZAR_DOCUMENTO_FIRESTORE("rutinas", idRutina, rutinaGuardar);
};
const ELIMINAR_RUTINA_PERSONALIZADA = async (idRutina) => await ELIMINAR_DOCUMENTO_FIRESTORE("rutinas", idRutina);
export { ACTUALIZAR_RUTINA_PERSONALIZADA as A, CREAR_RUTINA_PERSONALIZADA as C, ELIMINAR_RUTINA_PERSONALIZADA as E, LISTAR_RUTINAS_GRATUITAS_ENTRENADOR as L, NEW_REVERT_SEMANA_RUTINA as N, REVERT_SEMANA_RUTINA as R, LISTAR_RUTINAS_DEPORTISTA_ENTRENADOR as a, LISTAR_RUTINAS_DEPORTISTA as b, CONVERT_SEMANA_RUTINA as c, CREAR_PLAN_GRATUITO as d, ACTUALIZAR_PLAN_GRATUITO as e, ELIMINAR_PLAN_GRATUITO as f, ASIGNAR_RUTINA_DESDE_BRONCE as g, CREAR_RUTINA_COMODIN as h, ACTUALIZAR_RUTINA_COMODIN as i, LISTAR_RUTINAS_COMODIN as j, ELIMINAR_RUTINA_COMODIN as k };
