var estadosRutina = /* @__PURE__ */ ((estadosRutina2) => {
  estadosRutina2["PENDIENTE"] = "Pendiente";
  estadosRutina2["REALIZADA"] = "Realizada";
  estadosRutina2["PARCIAL"] = "Parcial";
  estadosRutina2["NO_REALIZADA"] = "No_realizada";
  return estadosRutina2;
})(estadosRutina || {});
var tiposBloque = /* @__PURE__ */ ((tiposBloque2) => {
  tiposBloque2["CARRERA"] = "Carrera";
  tiposBloque2["CAMINATA"] = "Caminata";
  tiposBloque2["FLEXIBILIDAD"] = "Flexibilidad";
  tiposBloque2["MOVILIDAD_ARTICULAR"] = "Movilidad Articular";
  tiposBloque2["PAUSA_INACTIVA"] = "Pausa Inactiva";
  tiposBloque2["TECNICA"] = "T\xE9cnica";
  return tiposBloque2;
})(tiposBloque || {});
var tiposBloque = /* @__PURE__ */ ((tiposBloque2) => {
  tiposBloque2["CARRERA"] = "Carrera";
  tiposBloque2["CAMINATA"] = "Caminata";
  tiposBloque2["FLEXIBILIDAD"] = "Flexibilidad";
  tiposBloque2["MOVILIDAD_ARTICULAR"] = "Movilidad Articular";
  tiposBloque2["PAUSA_INACTIVA"] = "Pausa Inactiva";
  tiposBloque2["TECNICA"] = "T\xE9cnica";
  return tiposBloque2;
})(tiposBloque || {});
const TIPO_BLOQUE_TEST = [
  { bloque: "calentamiento", tipo: "Movilidad artucular" },
  { bloque: "calentamiento", tipo: "Activacion" },
  { bloque: "central", tipo: "Carrera" },
  { bloque: "central", tipo: "Recuperacion" }
];
const tiposDeBloque = [
  { label: tiposBloque.CARRERA, hidden: false },
  { label: tiposBloque.CAMINATA, hidden: false },
  { label: tiposBloque.FLEXIBILIDAD, hidden: true },
  { label: tiposBloque.MOVILIDAD_ARTICULAR, hidden: true },
  { label: tiposBloque.PAUSA_INACTIVA, hidden: false },
  { label: tiposBloque.TECNICA, hidden: false }
];
function bloqueIsHidden(labelTipo) {
  const res = tiposDeBloque.find((tipo) => tipo.label === labelTipo);
  return (res == null ? void 0 : res.hidden) || false;
}
const TIPO_TERRENO = [
  "LLano",
  "Cuesta",
  "Campo traviesa",
  "Monta\xF1a",
  "Pista",
  "Cualquiera"
];
const TIPO_RANGO_BLOQUE = ["Kilometros", "metros"];
const TIPO_MEDICION_RUTINA = ["Tiempo", "Distancia"];
const INTENSIDAD_RUTINAS = [
  {
    nombre: "Sensaciones",
    valuesEntrenador: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    valuesDeportista: [
      "Nada",
      "Muy muy suave",
      "Muy suave",
      "Suave",
      "No tan suave",
      "Moderado",
      "No tan fuerte",
      "Medianamente fuerte",
      "Fuerte",
      "Muy fuerte",
      "Muy muy fuerte"
    ]
  },
  {
    nombre: "Zonas FC",
    valuesEntrenador: ["Z0", "Z1", "Z2", "Z3", "Z4", "Z5"],
    valuesDeportista: [
      "Aer\xF3bico ligero",
      "Aer\xF3bico medio",
      "Aer\xF3bico intenso",
      "Umbral anaer\xF3bico",
      "M\xE1xima intensidad"
    ]
  },
  {
    nombre: "Zona de Ritmos",
    valuesEntrenador: ["R0", "R1", "R2", "R3", "R3+", "R4", "R5", "R6"],
    valuesDeportista: [
      "Regenerativo",
      "Umbral aer\xF3bico",
      "Umbral anaer\xF3bico",
      "Vo2 submaximo",
      "Vo2 maximo",
      "Capacidad aer\xF3bica",
      "Potencia anaer\xF3bica",
      "Potencia al\xE1ctica"
    ]
  }
];
const GET_TIPOS_INTENSIDAD_RUTINAS = () => {
  return INTENSIDAD_RUTINAS.map((val) => val.nombre);
};
const GET_OPCIONES_INSIDAD_RUTINA = (nombre) => {
  const result = {
    valuesEntrenador: [],
    valuesDeportista: []
  };
  INTENSIDAD_RUTINAS.forEach((val) => {
    if (val.nombre === nombre) {
      result.valuesEntrenador = val.valuesEntrenador;
      result.valuesDeportista = val.valuesDeportista;
    }
  });
  return result;
};
const compararObjetos = (obj1, obj2) => {
  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  const toDate = (value) => {
    const date = new Date(value);
    return isNaN(date.getTime()) ? null : date;
  };
  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (val1.length !== val2.length) {
        return false;
      }
      for (let i = 0; i < val1.length; i++) {
        if (!compararObjetos(val1[i], val2[i])) {
          return false;
        }
      }
    } else {
      const date1 = toDate(val1);
      const date2 = toDate(val2);
      if (date1 && date2) {
        if (date1.getTime() !== date2.getTime()) {
          return false;
        }
      } else if (typeof val1 === "object" && typeof val2 === "object") {
        if (!compararObjetos(val1, val2)) {
          return false;
        }
      } else if (val1 !== val2) {
        return false;
      }
    }
  }
  return true;
};
export { GET_TIPOS_INTENSIDAD_RUTINAS as G, TIPO_MEDICION_RUTINA as T, GET_OPCIONES_INSIDAD_RUTINA as a, TIPO_RANGO_BLOQUE as b, bloqueIsHidden as c, TIPO_BLOQUE_TEST as d, compararObjetos as e, TIPO_TERRENO as f, estadosRutina as g, tiposDeBloque as t };
