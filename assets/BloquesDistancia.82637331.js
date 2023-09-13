import { _ as _sfc_main$7, a as _sfc_main$c } from "./VFlexTable.d8d849dc.js";
import { _ as _sfc_main$b } from "./VFlex.122176e5.js";
import { c as useForm, a as __unplugin_components_2, b as _sfc_main$a } from "./VControl.4d17fa85.js";
import { _ as _sfc_main$9 } from "./VFlexItem.a5d61664.js";
import { _ as _sfc_main$8 } from "./VTextarea.9eda26d4.js";
import { _ as _sfc_main$6 } from "./VIconButton.336a029e.js";
import { _ as _sfc_main$5 } from "./VInput.5920a8ca.js";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./VOption.ee07ba1d.js";
import { _ as _sfc_main$2, a } from "./convert.prod.1f5d8f54.js";
import { V as _export_sfc, y as defineComponent, z as ref, r as reactive, e as computed, C as watch, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, l as createCommentVNode, D as unref, t as toDisplayString, F as Fragment, f as createBlock, s as renderList, m as createTextVNode, Q as withKeys, v as withModifiers, G as isRef, k as normalizeClass, ae as pushScopeId, af as popScopeId } from "./index.a7fc5dec.js";
import { t as toFormValidator, z } from "./vee-validate-zod.esm.9452dbca.js";
import { b as buildRitmo } from "./general.8b156443.js";
import { N as Notyf } from "./notyf.es.f84e4201.js";
const TIPO_BLOQUE = [
  "Calentamiento",
  "Enfriamiento",
  "Estiramiento",
  "Recuperaci\xF3n",
  "Ritmo"
];
const TIPO_BLOQUE_CALENTAMIENTO = [
  "Caminata",
  "Carrera",
  "Flexibilidad",
  "Movilidad Articular",
  "Pausa Inactiva",
  "T\xE9cnica"
];
const TIPO_BLOQUE_TEST = [
  { bloque: "calentamiento", tipo: "Movilidad artucular" },
  { bloque: "calentamiento", tipo: "Activacion" },
  { bloque: "central", tipo: "Carrera" },
  { bloque: "central", tipo: "Recuperacion" }
];
const TIPO_BLOQUE_CENTRAL = [
  "Caminata",
  "Carrera",
  "Flexibilidad",
  "Movilidad Articular",
  "Pausa Inactiva",
  "T\xE9cnica"
];
const TIPO_BLOQUE_VUELTA_A_LA_CALMA = [
  "Caminata",
  "Carrera",
  "Flexibilidad",
  "Movilidad Articular",
  "Pausa Inactiva",
  "T\xE9cnica"
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
    valuesEntrenador: ["Z1", "Z2", "Z3", "Z4", "Z5"],
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
const calcularSegundos = (min, seg) => {
  if (typeof min !== "number" || typeof seg !== "number")
    return 0;
  if (Number(min) < 0 || Number(seg) < 0)
    return 0;
  return Number(min) * 60 + Number(seg);
};
const validarBloqueTiempo = (bloque) => {
  if (!bloque.tipo || bloque.intensidad === "" || typeof bloque.duracion_min !== "number" || typeof bloque.duracion_seg !== "number" || calcularSegundos(bloque.duracion_min, bloque.duracion_seg) < 1 || bloque.duracion_seg > 59) {
    return false;
  }
  return true;
};
const validarBloqueDistancia = (bloque) => {
  if (!bloque.tipo || bloque.intensidad === "" || bloque.tipo_medicion === "" || typeof bloque.distancia !== "number" || bloque.distancia < 1) {
    return false;
  }
  return true;
};
var BloquesTiempo_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-3fc07f60"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("hr", { style: { "background-color": "gray", "height": "1px", "opacity": "0.5" } }, null, -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "columns" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
    /* @__PURE__ */ createBaseVNode("h3", { style: { "font-weight": "bold" } }, "Bloques de rutina")
  ])
], -1));
const _hoisted_4$1 = {
  key: 0,
  class: "columns"
};
const _hoisted_5$1 = { class: "column" };
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode("En esta secci\xF3n debes agregar tus bloques de rutina ");
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { style: { "font-weight": "bold" } }, " (M\xEDnimo un bloque por cada fase)", -1));
const _hoisted_8$1 = {
  key: 1,
  class: "columns"
};
const _hoisted_9$1 = { class: "column" };
const _hoisted_10$1 = /* @__PURE__ */ createTextVNode("Al menos debe haber un bloque de ");
const _hoisted_11$1 = { style: { "font-weight": "bold" } };
const _hoisted_12$1 = {
  key: 1,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_13$1 = /* @__PURE__ */ createTextVNode("Fase Calentamiento");
const _hoisted_14$1 = { class: "invoice-wrapper" };
const _hoisted_15$1 = { class: "invoice-body" };
const _hoisted_16$1 = { class: "invoice-card" };
const _hoisted_17$1 = { class: "invoice-section" };
const _hoisted_18$1 = { class: "column" };
const _hoisted_19$1 = {
  key: 0,
  class: "text"
};
const _hoisted_20$1 = { class: "column" };
const _hoisted_21$1 = {
  key: 0,
  class: "text"
};
const _hoisted_22$1 = { class: "column" };
const _hoisted_23$1 = {
  key: 0,
  class: "text"
};
const _hoisted_24$1 = {
  key: 0,
  class: "column"
};
const _hoisted_25$1 = {
  key: 0,
  class: "column"
};
const _hoisted_26$1 = {
  key: 1,
  class: "column"
};
const _hoisted_27$1 = {
  key: 2,
  class: "column"
};
const _hoisted_28$1 = {
  key: 3,
  class: "column"
};
const _hoisted_29$1 = {
  key: 4,
  class: "column"
};
const _hoisted_30$1 = {
  key: 5,
  class: "column"
};
const _hoisted_31$1 = {
  key: 6,
  class: "column"
};
const _hoisted_32$1 = {
  key: 7,
  class: "column"
};
const _hoisted_33$1 = {
  key: 8,
  cass: "column"
};
const _hoisted_34$1 = {
  key: 9,
  cass: "column"
};
const _hoisted_35$1 = {
  key: 10,
  class: "column"
};
const _hoisted_36$1 = {
  key: 11,
  class: "column"
};
const _hoisted_37$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_38$1 = {
  key: 12,
  class: "column"
};
const _hoisted_39$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_40$1 = {
  key: 13,
  class: "column"
};
const _hoisted_41$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_42$1 = {
  key: 14,
  class: "column"
};
const _hoisted_43$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_44$1 = {
  key: 15,
  class: "column"
};
const _hoisted_45$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_46$1 = {
  key: 16,
  class: "column"
};
const _hoisted_47$1 = {
  key: 17,
  class: "column"
};
const _hoisted_48$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_49$1 = {
  key: 18,
  class: "column"
};
const _hoisted_50$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_51$1 = {
  key: 19,
  class: "column"
};
const _hoisted_52$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_53$1 = {
  key: 20,
  class: "column"
};
const _hoisted_54$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_55$1 = {
  key: 21,
  class: "column"
};
const _hoisted_56$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_57$1 = {
  key: 22,
  class: "column"
};
const _hoisted_58$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_59$1 = {
  key: 23,
  class: "column"
};
const _hoisted_60$1 = { key: 1 };
const _hoisted_61$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_62$1 = [
  _hoisted_61$1
];
const _hoisted_63$1 = { key: 0 };
const _hoisted_64$1 = { class: "column text-area" };
const _hoisted_65$1 = {
  key: 2,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_66$1 = /* @__PURE__ */ createTextVNode("Fase Centrales");
const _hoisted_67$1 = { class: "invoice-wrapper" };
const _hoisted_68$1 = { class: "invoice-body" };
const _hoisted_69$1 = { class: "invoice-card" };
const _hoisted_70$1 = { class: "invoice-section" };
const _hoisted_71$1 = { class: "m-0" };
const _hoisted_72$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("label", { for: "repetir" }, "Repetir:", -1));
const _hoisted_73$1 = { key: 1 };
const _hoisted_74$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "init" }, "Inicio Serie", -1));
const _hoisted_75$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_76$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "end" }, "Final Serie", -1));
const _hoisted_77$1 = {
  key: 1,
  class: "column"
};
const _hoisted_78$1 = { class: "text" };
const _hoisted_79$1 = { class: "column" };
const _hoisted_80$1 = {
  key: 0,
  class: "text"
};
const _hoisted_81$1 = { class: "column" };
const _hoisted_82$1 = {
  key: 0,
  class: "text"
};
const _hoisted_83$1 = { class: "column" };
const _hoisted_84$1 = {
  key: 0,
  class: "text"
};
const _hoisted_85$1 = {
  key: 0,
  class: "column"
};
const _hoisted_86$1 = {
  key: 0,
  class: "column"
};
const _hoisted_87$1 = {
  key: 1,
  class: "column"
};
const _hoisted_88$1 = {
  key: 2,
  class: "column"
};
const _hoisted_89$1 = {
  key: 3,
  class: "column"
};
const _hoisted_90$1 = {
  key: 4,
  class: "column"
};
const _hoisted_91$1 = {
  key: 5,
  class: "column"
};
const _hoisted_92$1 = {
  key: 6,
  class: "column"
};
const _hoisted_93$1 = {
  key: 7,
  class: "column"
};
const _hoisted_94$1 = {
  key: 8,
  cass: "column"
};
const _hoisted_95$1 = {
  key: 9,
  cass: "column"
};
const _hoisted_96$1 = {
  key: 10,
  class: "column"
};
const _hoisted_97$1 = {
  key: 11,
  class: "column"
};
const _hoisted_98$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_99$1 = {
  key: 12,
  class: "column"
};
const _hoisted_100$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_101$1 = {
  key: 13,
  class: "column"
};
const _hoisted_102$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_103$1 = {
  key: 14,
  class: "column"
};
const _hoisted_104$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_105$1 = {
  key: 15,
  class: "column"
};
const _hoisted_106$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_107$1 = {
  key: 16,
  class: "column"
};
const _hoisted_108$1 = {
  key: 17,
  class: "column"
};
const _hoisted_109$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_110$1 = {
  key: 18,
  class: "column"
};
const _hoisted_111$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_112$1 = {
  key: 19,
  class: "column"
};
const _hoisted_113$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_114$1 = {
  key: 20,
  class: "column"
};
const _hoisted_115$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_116$1 = {
  key: 21,
  class: "column"
};
const _hoisted_117$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_118$1 = {
  key: 22,
  class: "column"
};
const _hoisted_119$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_120$1 = {
  key: 23,
  class: "column"
};
const _hoisted_121$1 = { key: 1 };
const _hoisted_122$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_123$1 = [
  _hoisted_122$1
];
const _hoisted_124$1 = { key: 0 };
const _hoisted_125$1 = /* @__PURE__ */ createTextVNode(" Inicio ");
const _hoisted_126$1 = /* @__PURE__ */ createTextVNode(" Final ");
const _hoisted_127$1 = { key: 0 };
const _hoisted_128$1 = { class: "column text-area" };
const _hoisted_129$1 = {
  key: 3,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_130$1 = /* @__PURE__ */ createTextVNode("Fase vuelta a la calma");
const _hoisted_131$1 = { class: "invoice-wrapper" };
const _hoisted_132$1 = { class: "invoice-body" };
const _hoisted_133$1 = { class: "invoice-card" };
const _hoisted_134$1 = { class: "invoice-section" };
const _hoisted_135$1 = { class: "column" };
const _hoisted_136$1 = {
  key: 0,
  class: "text"
};
const _hoisted_137$1 = { class: "column" };
const _hoisted_138$1 = {
  key: 0,
  class: "text"
};
const _hoisted_139$1 = { class: "column" };
const _hoisted_140$1 = {
  key: 0,
  class: "text"
};
const _hoisted_141$1 = {
  key: 0,
  class: "column"
};
const _hoisted_142$1 = {
  key: 0,
  class: "column"
};
const _hoisted_143$1 = {
  key: 1,
  class: "column"
};
const _hoisted_144$1 = {
  key: 2,
  class: "column"
};
const _hoisted_145$1 = {
  key: 3,
  class: "column"
};
const _hoisted_146$1 = {
  key: 4,
  class: "column"
};
const _hoisted_147$1 = {
  key: 5,
  class: "column"
};
const _hoisted_148$1 = {
  key: 6,
  class: "column"
};
const _hoisted_149$1 = {
  key: 7,
  class: "column"
};
const _hoisted_150$1 = {
  key: 8,
  cass: "column"
};
const _hoisted_151$1 = {
  key: 9,
  cass: "column"
};
const _hoisted_152$1 = {
  key: 10,
  class: "column"
};
const _hoisted_153$1 = {
  key: 11,
  class: "column"
};
const _hoisted_154$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_155$1 = {
  key: 12,
  class: "column"
};
const _hoisted_156$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_157$1 = {
  key: 13,
  class: "column"
};
const _hoisted_158$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_159$1 = {
  key: 14,
  class: "column"
};
const _hoisted_160$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_161$1 = {
  key: 15,
  class: "column"
};
const _hoisted_162$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_163$1 = {
  key: 16,
  class: "column"
};
const _hoisted_164$1 = {
  key: 17,
  class: "column"
};
const _hoisted_165$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_166$1 = {
  key: 18,
  class: "column"
};
const _hoisted_167$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_168$1 = {
  key: 19,
  class: "column"
};
const _hoisted_169$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_170$1 = {
  key: 20,
  class: "column"
};
const _hoisted_171$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_172$1 = {
  key: 21,
  class: "column"
};
const _hoisted_173$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_174$1 = {
  key: 22,
  class: "column"
};
const _hoisted_175$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_176$1 = {
  key: 23,
  class: "column"
};
const _hoisted_177$1 = { key: 1 };
const _hoisted_178$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_179$1 = [
  _hoisted_178$1
];
const _hoisted_180$1 = { key: 0 };
const _hoisted_181$1 = { class: "column text-area" };
const _hoisted_182$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "columns" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
    /* @__PURE__ */ createBaseVNode("hr", { style: { "background-color": "gray", "height": "1px", "opacity": "0.5" } })
  ])
], -1));
const _hoisted_183$1 = {
  key: 4,
  class: "columns flotar"
};
const _hoisted_184$1 = { class: "column" };
const _hoisted_185$1 = { style: { "font-weight": "bold" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    datosrutina: { default: void 0 },
    opcionactual: { default: void 0 },
    dFC: { default: () => {
      return {};
    } },
    dZR: { default: () => {
      return {};
    } }
  },
  emits: ["sync", "agregar", "eliminar"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const hayBloques = ref(false);
    const notyf = new Notyf();
    const showReplicador = ref(false);
    const indexInit = ref(null);
    const indexEnd = ref(null);
    const tipoBloque = TIPO_BLOQUE;
    const opcionesIntensidad = ref(
      GET_OPCIONES_INSIDAD_RUTINA(props.datosrutina.tipo_esfuerzo).valuesEntrenador
    );
    const valSensaciones = ref(
      GET_OPCIONES_INSIDAD_RUTINA(props.datosrutina.tipo_esfuerzo).valuesDeportista
    );
    const datosNuevoBloque = reactive({
      fase: "",
      tipo: tipoBloque[0],
      duracion_min: 5,
      duracion_seg: 0,
      intensidad: opcionesIntensidad.value[0]
    });
    const tiempoTotalComputed = computed(() => {
      let minutos = 0;
      let minCalen = 0;
      let minCentral = 0;
      let minCalma = 0;
      bloquesCalenta.value.forEach((bloque) => {
        minCalen += bloque.duracion_min + bloque.duracion_seg / 60;
      });
      bloquesCent.value.forEach((bloque, index) => {
        if (index >= indexInit.value && index <= indexEnd.value && indexInit.value != null && indexEnd.value != null)
          minCentral += (bloque.duracion_min + bloque.duracion_seg / 60) * rept_centrales.value;
        else
          minCentral += bloque.duracion_min + bloque.duracion_seg / 60;
      });
      bloquesCalma.value.forEach((bloque) => {
        minCalma += bloque.duracion_min + bloque.duracion_seg / 60;
      });
      minutos = minCalen + minCentral + minCalma;
      minutos = buildRitmo(minutos);
      return minutos;
    });
    let calentamiento = ref(false);
    let central = ref(false);
    let calma = ref(false);
    const bloquesCalenta = ref([]);
    const bloquesCent = ref([]);
    const bloquesCalma = ref([]);
    const nuevoBloqueCalentamiento = ref(false);
    const nuevoBloqueCentral = ref(false);
    const nuevoBloqueVueltaALaCalma = ref(false);
    watch(props.datosrutina.bloques, () => {
      let valido = true;
      if (props.datosrutina.bloques.length === 0) {
        valido = false;
      }
      props.datosrutina.bloques.forEach((bloque) => {
        if (!validarBloqueTiempo(bloque)) {
          valido = false;
        }
      });
      props.datosrutina.bloques.forEach((bloque) => {
        if (bloque.fase === "calentamiento") {
          calentamiento.value = true;
        } else if (bloque.fase === "central") {
          central.value = true;
        } else if (bloque.fase === "calma") {
          calma.value = true;
        }
      });
      if (!calentamiento.value || !central.value || !calma.value) {
        valido = false;
      }
      emits("sync", valido);
    });
    watch(
      () => props.datosrutina.tipo_esfuerzo,
      () => {
        opcionesIntensidad.value = GET_OPCIONES_INSIDAD_RUTINA(
          props.datosrutina.tipo_esfuerzo
        ).valuesEntrenador;
        datosNuevoBloque.intensidad = opcionesIntensidad.value[0];
        bloquesCalenta.value.forEach((bloque) => {
          bloque.intensidad = opcionesIntensidad.value[0];
        });
        bloquesCent.value.forEach((bloque) => {
          bloque.intensidad = opcionesIntensidad.value[0];
        });
        bloquesCalma.value.forEach((bloque) => {
          bloque.intensidad = opcionesIntensidad.value[0];
        });
      }
    );
    const validarReplicador = () => {
      if (indexEnd.value != null && indexInit.value != null) {
        if (indexEnd.value > indexInit.value) {
          showReplicador.value = true;
        } else {
          bloquesCent.value[indexInit.value].marca = null;
          bloquesCent.value[indexEnd.value].marca = null;
          indexInit.value = null;
          indexEnd.value = null;
          showReplicador.value = false;
          notyf.error({
            message: "\xA1Error temporal! El inicio no puede ser despu\xE9s del final. Por favor <b>limpia los campos</b> y selecciona un inicio y fin adecuados para la rutina.",
            duration: 6e3,
            dismissible: true
          });
        }
      }
    };
    const marcar = (marca, index) => {
      switch (marca) {
        case "inicio":
          if (indexInit.value != null) {
            bloquesCent.value[indexInit.value].marca = null;
          }
          indexInit.value = index;
          validarReplicador();
          break;
        case "final":
          if (indexEnd.value != null) {
            bloquesCent.value[indexEnd.value].marca = null;
          }
          indexEnd.value = index;
          validarReplicador();
          break;
      }
    };
    watch(nuevoBloqueCalentamiento, () => {
      bloquesCalenta.value = [];
      props.datosrutina.bloques.forEach((bloque) => {
        if (bloque.fase === "calentamiento") {
          bloquesCalenta.value.push(bloque);
        }
      });
    });
    watch(nuevoBloqueCentral, () => {
      bloquesCent.value = [];
      props.datosrutina.bloques.forEach((bloque) => {
        if (bloque.fase === "central") {
          bloquesCent.value.push(bloque);
        }
      });
    });
    watch(nuevoBloqueVueltaALaCalma, () => {
      bloquesCalma.value = [];
      props.datosrutina.bloques.forEach((bloque) => {
        if (bloque.fase === "calma") {
          bloquesCalma.value.push(bloque);
        }
      });
    });
    let enableButtons = ref(false);
    watch(props.datosrutina, () => {
      if (props.datosrutina.descripcion.length > 5) {
        enableButtons.value = true;
      } else {
        enableButtons.value = false;
      }
    });
    onMounted(() => {
      const valoresArray = Object.values(props.datosrutina.bloques);
      if (props.opcionactual === "editar" || props.opcionactual === "ver") {
        let valido = true;
        valoresArray.forEach((bloque) => {
          if (bloque.fase === "calentamiento") {
            bloquesCalenta.value.push(bloque);
            calentamiento.value = true;
          }
          if (bloque.fase === "central") {
            bloquesCent.value.push(bloque);
            central.value = true;
            if (bloque.marca === "inicio") {
              indexInit.value = bloquesCent.value.length - 1;
            }
            if (bloque.marca === "final") {
              indexEnd.value = bloquesCent.value.length - 1;
            }
          }
          if (bloque.fase === "calma") {
            bloquesCalma.value.push(bloque);
            calma.value = true;
          }
        });
        validarReplicador();
        bloquesCalentamiento.value = bloquesCalenta.value.length;
        bloquesCentrales.value = bloquesCent.value.length;
        bloquesVueltaALaCalma.value = bloquesCalma.value.length;
        if (!calentamiento.value || !central.value || !calma.value) {
          valido = false;
        }
        emits("sync", valido);
      }
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      if (props.datosrutina.descripcion.length > 5) {
        enableButtons.value = true;
      } else {
        enableButtons.value = false;
      }
      comentarios_fase_calentamiento.value = props.datosrutina.comentarios_fase_calentamiento;
      comentarios_fase_central.value = props.datosrutina.comentarios_fase_central;
      comentarios_fase_calma.value = props.datosrutina.comentarios_fase_calma;
      rept_centrales.value = props.datosrutina.rept_centrales || 1;
    });
    const validationSchema = toFormValidator(
      z.object({
        duracion_min: z.number({
          required_error: "Este campo es requerido",
          invalid_type_error: "Valor de segundos invalido"
        }).min(0, "Valor M\xEDnimo debe ser 1"),
        duracion_seg: z.number({
          required_error: "Este campo es requerido",
          invalid_type_error: "Valor de segundos invalido"
        }).min(0, "Valor no valido").max(59, "Valor M\xE1ximo debe ser 59")
      })
    );
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        duracion_min: 5,
        duracion_seg: 0
      }
    });
    handleSubmit(() => {
      bloquesCalentamiento.value += 1;
      datosNuevoBloque.tipo = TIPO_BLOQUE_CALENTAMIENTO[0];
      datosNuevoBloque.fase = "calentamiento";
      emits("agregar", datosNuevoBloque);
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      nuevoBloqueCalentamiento.value = !nuevoBloqueCalentamiento.value;
    });
    handleSubmit(() => {
      bloquesCentrales.value += 1;
      datosNuevoBloque.tipo = TIPO_BLOQUE_CENTRAL[0];
      datosNuevoBloque.fase = "central";
      emits("agregar", datosNuevoBloque);
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      nuevoBloqueCentral.value = !nuevoBloqueCentral.value;
    });
    handleSubmit(() => {
      bloquesVueltaALaCalma.value += 1;
      datosNuevoBloque.tipo = TIPO_BLOQUE_VUELTA_A_LA_CALMA[0];
      datosNuevoBloque.fase = "calma";
      emits("agregar", datosNuevoBloque);
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      nuevoBloqueVueltaALaCalma.value = !nuevoBloqueVueltaALaCalma.value;
    });
    const bloquesCalentamiento = ref(0);
    const bloquesCentrales = ref(0);
    const bloquesVueltaALaCalma = ref(0);
    const eliminarBloque = (_index, fase, bloque) => {
      if (fase === "calentamiento") {
        bloquesCalentamiento.value -= 1;
        if (bloquesCalentamiento.value === 0) {
          calentamiento.value = false;
        }
      } else if (fase === "central") {
        bloquesCentrales.value -= 1;
        if (bloquesCentrales.value === 0) {
          central.value = false;
        }
      } else if (fase === "calma") {
        bloquesVueltaALaCalma.value -= 1;
        if (bloquesVueltaALaCalma.value === 0) {
          calma.value = false;
        }
      }
      props.datosrutina.bloques.find((b, ind) => {
        if (b === bloque) {
          if (b.fase === "calentamiento") {
            bloquesCalenta.value.splice(ind, 1);
            nuevoBloqueCalentamiento.value = !nuevoBloqueCalentamiento.value;
          } else if (b.fase === "central") {
            bloquesCent.value.splice(ind, 1);
            nuevoBloqueCentral.value = !nuevoBloqueCentral.value;
          } else if (b.fase === "calma") {
            bloquesCalma.value.splice(ind, 1);
            nuevoBloqueVueltaALaCalma.value = !nuevoBloqueVueltaALaCalma.value;
          }
          emits("eliminar", ind);
        }
      });
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
    };
    const columns = {
      tipo: "tipo",
      duracion_min: "Duracion(Min)",
      duracion_seg: "Duracion(Seg)",
      intensidad: "intensidad",
      rango: "rango",
      eliminar: "eliminar"
    };
    const columnsCentral = {
      tipo: "tipo",
      duracion_min: "Duracion(Min)",
      duracion_seg: "Duracion(Seg)",
      intensidad: "intensidad",
      rango: "rango",
      serie: "serie",
      eliminar: "eliminar"
    };
    const columns_ver_rutina = {
      tipo: "tipo",
      duracion_min: "Duracion(Min)",
      duracion_seg: "Duracion(Seg)",
      intensidad: "intensidad",
      rango: "rango"
    };
    let comentarios_fase_calentamiento = ref();
    let comentarios_fase_central = ref();
    let comentarios_fase_calma = ref();
    const rept_centrales = ref(0);
    watch(comentarios_fase_calentamiento, () => {
      props.datosrutina.comentarios_fase_calentamiento = comentarios_fase_calentamiento.value;
    });
    watch(comentarios_fase_central, () => {
      props.datosrutina.comentarios_fase_central = comentarios_fase_central.value;
    });
    watch(rept_centrales, () => {
      props.datosrutina.rept_centrales = rept_centrales.value;
    });
    watch(comentarios_fase_calma, () => {
      props.datosrutina.comentarios_fase_calma = comentarios_fase_calma.value;
    });
    return (_ctx, _cache) => {
      const _component_VMessage = _sfc_main$2;
      const _component_VOption = _sfc_main$3;
      const _component_VSelect = _sfc_main$4;
      const _component_VControl = __unplugin_components_2;
      const _component_VInput = _sfc_main$5;
      const _component_VIconButton = _sfc_main$6;
      const _component_VFlexTable = _sfc_main$7;
      const _component_VTextarea = _sfc_main$8;
      const _component_VFlexItem = _sfc_main$9;
      const _component_VField = _sfc_main$a;
      const _component_VFlex = _sfc_main$b;
      const _component_VFlexTableCell = _sfc_main$c;
      return openBlock(), createElementBlock("div", null, [
        __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          _hoisted_2$1,
          _hoisted_3$1,
          !hayBloques.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(_component_VMessage, { color: "info" }, {
                default: withCtx(() => [
                  _hoisted_6$1,
                  _hoisted_7$1
                ]),
                _: 1
              })
            ])
          ])) : createCommentVNode("", true),
          hayBloques.value && (!unref(calentamiento) || !unref(central) || !unref(calma)) ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
            createBaseVNode("div", _hoisted_9$1, [
              createVNode(_component_VMessage, { color: "warning" }, {
                default: withCtx(() => [
                  _hoisted_10$1,
                  createBaseVNode("span", _hoisted_11$1, toDisplayString(!unref(calentamiento) ? " (Calentamiento) " : "") + toDisplayString(!unref(central) ? " (Central) " : "") + toDisplayString(!unref(calma) ? " (Calma) " : ""), 1)
                ]),
                _: 1
              })
            ])
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        bloquesCalenta.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_12$1, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_13$1
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_14$1, [
            createBaseVNode("div", _hoisted_15$1, [
              createBaseVNode("div", _hoisted_16$1, [
                createBaseVNode("div", _hoisted_17$1, [
                  createVNode(_component_VFlexTable, {
                    data: bloquesCalenta.value,
                    columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                    rounded: "",
                    reactive: ""
                  }, {
                    "body-cell": withCtx(({ column, row, index }) => [
                      column.key === "tipo" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            row.fase === "central" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 0,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CENTRAL), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calentamiento" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 1,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CALENTAMIENTO), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calma" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 2,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_VUELTA_A_LA_CALMA), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ], 64)) : createCommentVNode("", true),
                      column.key === "duracion_min" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: row.duracion_min,
                              "onUpdate:modelValue": ($event) => row.duracion_min = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              min: "0",
                              placeholder: "Ingrese duraci\xF3n en minutos"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_18$1, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_19$1, toDisplayString(row.duracion_min), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "duracion_seg" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: row.duracion_seg,
                              "onUpdate:modelValue": ($event) => row.duracion_seg = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              min: "0",
                              placeholder: "Ingrese duraci\xF3n en segundos"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_20$1, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_21$1, toDisplayString(row.duracion_seg), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VSelect, {
                              modelValue: row.intensidad,
                              "onUpdate:modelValue": ($event) => row.intensidad = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, indexIn) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexIn,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_22$1, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_23$1, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                        Object.keys(props.dFC).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_24$1, [
                          row.intensidad === "0" ? (openBlock(), createElementBlock("div", _hoisted_25$1, toDisplayString(valSensaciones.value[0]), 1)) : createCommentVNode("", true),
                          row.intensidad === "1" ? (openBlock(), createElementBlock("div", _hoisted_26$1, toDisplayString(valSensaciones.value[1]), 1)) : createCommentVNode("", true),
                          row.intensidad === "2" ? (openBlock(), createElementBlock("div", _hoisted_27$1, toDisplayString(valSensaciones.value[2]), 1)) : createCommentVNode("", true),
                          row.intensidad === "3" ? (openBlock(), createElementBlock("div", _hoisted_28$1, toDisplayString(valSensaciones.value[3]), 1)) : createCommentVNode("", true),
                          row.intensidad === "4" ? (openBlock(), createElementBlock("div", _hoisted_29$1, toDisplayString(valSensaciones.value[4]), 1)) : createCommentVNode("", true),
                          row.intensidad === "5" ? (openBlock(), createElementBlock("div", _hoisted_30$1, toDisplayString(valSensaciones.value[5]), 1)) : createCommentVNode("", true),
                          row.intensidad === "6" ? (openBlock(), createElementBlock("div", _hoisted_31$1, toDisplayString(valSensaciones.value[6]), 1)) : createCommentVNode("", true),
                          row.intensidad === "7" ? (openBlock(), createElementBlock("div", _hoisted_32$1, toDisplayString(valSensaciones.value[7]), 1)) : createCommentVNode("", true),
                          row.intensidad === "8" ? (openBlock(), createElementBlock("div", _hoisted_33$1, toDisplayString(valSensaciones.value[8]), 1)) : createCommentVNode("", true),
                          row.intensidad === "9" ? (openBlock(), createElementBlock("div", _hoisted_34$1, toDisplayString(valSensaciones.value[9]), 1)) : createCommentVNode("", true),
                          row.intensidad === "10" ? (openBlock(), createElementBlock("div", _hoisted_35$1, toDisplayString(valSensaciones.value[10]), 1)) : createCommentVNode("", true),
                          row.intensidad === "Z1" ? (openBlock(), createElementBlock("div", _hoisted_36$1, [
                            createTextVNode(toDisplayString(props.dFC.z1min) + " ", 1),
                            _hoisted_37$1,
                            createTextVNode(" " + toDisplayString(props.dFC.z1max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z2" ? (openBlock(), createElementBlock("div", _hoisted_38$1, [
                            createTextVNode(toDisplayString(props.dFC.z2min) + " ", 1),
                            _hoisted_39$1,
                            createTextVNode(" " + toDisplayString(props.dFC.z2max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z3" ? (openBlock(), createElementBlock("div", _hoisted_40$1, [
                            createTextVNode(toDisplayString(props.dFC.z3min) + " ", 1),
                            _hoisted_41$1,
                            createTextVNode(" " + toDisplayString(props.dFC.z3max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z4" ? (openBlock(), createElementBlock("div", _hoisted_42$1, [
                            createTextVNode(toDisplayString(props.dFC.z4min) + " ", 1),
                            _hoisted_43$1,
                            createTextVNode(" " + toDisplayString(props.dFC.z4max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z5" ? (openBlock(), createElementBlock("div", _hoisted_44$1, [
                            createTextVNode(toDisplayString(props.dFC.z5min) + " ", 1),
                            _hoisted_45$1,
                            createTextVNode(" " + toDisplayString(props.dFC.z5max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R0" ? (openBlock(), createElementBlock("div", _hoisted_46$1, toDisplayString(props.dZR.R0max), 1)) : createCommentVNode("", true),
                          row.intensidad === "R1" ? (openBlock(), createElementBlock("div", _hoisted_47$1, [
                            createTextVNode(toDisplayString(props.dZR.R1max) + " ", 1),
                            _hoisted_48$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R1min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R2" ? (openBlock(), createElementBlock("div", _hoisted_49$1, [
                            createTextVNode(toDisplayString(props.dZR.R2max) + " ", 1),
                            _hoisted_50$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R2min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R3" ? (openBlock(), createElementBlock("div", _hoisted_51$1, [
                            createTextVNode(toDisplayString(props.dZR.R3max) + " ", 1),
                            _hoisted_52$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R3min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R3+" ? (openBlock(), createElementBlock("div", _hoisted_53$1, [
                            createTextVNode(toDisplayString(props.dZR.R3pmax) + " ", 1),
                            _hoisted_54$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R3pmin), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R4" ? (openBlock(), createElementBlock("div", _hoisted_55$1, [
                            createTextVNode(toDisplayString(props.dZR.R4max) + " ", 1),
                            _hoisted_56$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R4min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R5" ? (openBlock(), createElementBlock("div", _hoisted_57$1, [
                            createTextVNode(toDisplayString(props.dZR.R5max) + " ", 1),
                            _hoisted_58$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R5min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R6" ? (openBlock(), createElementBlock("div", _hoisted_59$1, toDisplayString(props.dZR.R6min), 1)) : createCommentVNode("", true)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_60$1, _hoisted_62$1))
                      ], 64)) : createCommentVNode("", true),
                      column.key === "eliminar" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_63$1, [
                          createVNode(_component_VIconButton, {
                            icon: "feather:trash",
                            color: "danger",
                            circle: "",
                            outlined: "",
                            onKeydown: withKeys(withModifiers(($event) => eliminarBloque(index, row.fase, row), ["prevent"]), ["space"]),
                            onClick: ($event) => eliminarBloque(index, row.fase, row)
                          }, null, 8, ["onKeydown", "onClick"])
                        ])) : createCommentVNode("", true)
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["data", "columns"]),
                  createBaseVNode("div", _hoisted_64$1, [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VTextarea, {
                          modelValue: unref(comentarios_fase_calentamiento),
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(comentarios_fase_calentamiento) ? comentarios_fase_calentamiento.value = $event : comentarios_fase_calentamiento = $event),
                          class: "textarea is-info-focus",
                          rows: "2",
                          placeholder: "Ingresa comentarios",
                          disabled: __props.opcionactual === "ver"
                        }, null, 8, ["modelValue", "disabled"])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        bloquesCent.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_65$1, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_66$1
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_67$1, [
            createBaseVNode("div", _hoisted_68$1, [
              createBaseVNode("div", _hoisted_69$1, [
                createBaseVNode("div", _hoisted_70$1, [
                  createBaseVNode("fieldset", _hoisted_71$1, [
                    showReplicador.value ? (openBlock(), createElementBlock("legend", {
                      key: 0,
                      class: normalizeClass(
                        __props.opcionactual === "editar" || __props.opcionactual === "crear" ? "legend-repeticiones" : ""
                      )
                    }, [
                      __props.opcionactual === "editar" || __props.opcionactual === "crear" ? (openBlock(), createBlock(_component_VFlex, {
                        key: 0,
                        "flex-wrap": "wrap",
                        "align-items": "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VFlexItem, null, {
                            default: withCtx(() => [
                              _hoisted_72$1
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VFlexItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VInput, {
                                        modelValue: rept_centrales.value,
                                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => rept_centrales.value = $event),
                                        min: "1",
                                        type: "number",
                                        placeholder: "0"
                                      }, null, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : (openBlock(), createElementBlock("div", _hoisted_73$1, [
                        _hoisted_74$1,
                        _hoisted_75$1,
                        _hoisted_76$1,
                        createTextVNode("x" + toDisplayString(rept_centrales.value), 1)
                      ]))
                    ], 2)) : createCommentVNode("", true),
                    createVNode(_component_VFlexTable, {
                      data: bloquesCent.value,
                      columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columnsCentral) : unref(columns_ver_rutina),
                      rounded: "",
                      reactive: ""
                    }, {
                      "body-cell": withCtx(({ column, row, index }) => [
                        column.key === "tipo" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 0 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                              default: withCtx(() => [
                                row.fase === "central" ? (openBlock(), createBlock(_component_VSelect, {
                                  key: 0,
                                  modelValue: row.tipo,
                                  "onUpdate:modelValue": ($event) => row.tipo = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CENTRAL), (deporte, indexTp) => {
                                      return openBlock(), createBlock(_component_VOption, {
                                        key: indexTp,
                                        value: deporte
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deporte), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calentamiento" ? (openBlock(), createBlock(_component_VSelect, {
                                  key: 1,
                                  modelValue: row.tipo,
                                  "onUpdate:modelValue": ($event) => row.tipo = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CALENTAMIENTO), (deporte, indexTp) => {
                                      return openBlock(), createBlock(_component_VOption, {
                                        key: indexTp,
                                        value: deporte
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deporte), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calma" ? (openBlock(), createBlock(_component_VSelect, {
                                  key: 2,
                                  modelValue: row.tipo,
                                  "onUpdate:modelValue": ($event) => row.tipo = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_VUELTA_A_LA_CALMA), (deporte, indexTp) => {
                                      return openBlock(), createBlock(_component_VOption, {
                                        key: indexTp,
                                        value: deporte
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deporte), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("div", _hoisted_77$1, [
                              createBaseVNode("label", _hoisted_78$1, toDisplayString(row.tipo), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "duracion_min" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 1 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: row.duracion_min,
                                  "onUpdate:modelValue": ($event) => row.duracion_min = $event,
                                  modelModifiers: { number: true },
                                  type: "number",
                                  min: "0",
                                  placeholder: "Ingrese duraci\xF3n en minutos"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_79$1, [
                              props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_80$1, toDisplayString(row.duracion_min), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "duracion_seg" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 2 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: row.duracion_seg,
                                  "onUpdate:modelValue": ($event) => row.duracion_seg = $event,
                                  modelModifiers: { number: true },
                                  type: "number",
                                  min: "0",
                                  placeholder: "Ingrese duraci\xF3n en segundos"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_81$1, [
                              props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_82$1, toDisplayString(row.duracion_seg), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "intensidad" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 3 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: row.intensidad,
                                  "onUpdate:modelValue": ($event) => row.intensidad = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, indexIn) => {
                                      return openBlock(), createBlock(_component_VOption, {
                                        key: indexIn,
                                        value: deporte
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deporte), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_83$1, [
                              props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_84$1, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 4 }, {
                          default: withCtx(() => [
                            Object.keys(props.dFC).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_85$1, [
                              row.intensidad === "0" ? (openBlock(), createElementBlock("div", _hoisted_86$1, toDisplayString(valSensaciones.value[0]), 1)) : createCommentVNode("", true),
                              row.intensidad === "1" ? (openBlock(), createElementBlock("div", _hoisted_87$1, toDisplayString(valSensaciones.value[1]), 1)) : createCommentVNode("", true),
                              row.intensidad === "2" ? (openBlock(), createElementBlock("div", _hoisted_88$1, toDisplayString(valSensaciones.value[2]), 1)) : createCommentVNode("", true),
                              row.intensidad === "3" ? (openBlock(), createElementBlock("div", _hoisted_89$1, toDisplayString(valSensaciones.value[3]), 1)) : createCommentVNode("", true),
                              row.intensidad === "4" ? (openBlock(), createElementBlock("div", _hoisted_90$1, toDisplayString(valSensaciones.value[4]), 1)) : createCommentVNode("", true),
                              row.intensidad === "5" ? (openBlock(), createElementBlock("div", _hoisted_91$1, toDisplayString(valSensaciones.value[5]), 1)) : createCommentVNode("", true),
                              row.intensidad === "6" ? (openBlock(), createElementBlock("div", _hoisted_92$1, toDisplayString(valSensaciones.value[6]), 1)) : createCommentVNode("", true),
                              row.intensidad === "7" ? (openBlock(), createElementBlock("div", _hoisted_93$1, toDisplayString(valSensaciones.value[7]), 1)) : createCommentVNode("", true),
                              row.intensidad === "8" ? (openBlock(), createElementBlock("div", _hoisted_94$1, toDisplayString(valSensaciones.value[8]), 1)) : createCommentVNode("", true),
                              row.intensidad === "9" ? (openBlock(), createElementBlock("div", _hoisted_95$1, toDisplayString(valSensaciones.value[9]), 1)) : createCommentVNode("", true),
                              row.intensidad === "10" ? (openBlock(), createElementBlock("div", _hoisted_96$1, toDisplayString(valSensaciones.value[10]), 1)) : createCommentVNode("", true),
                              row.intensidad === "Z1" ? (openBlock(), createElementBlock("div", _hoisted_97$1, [
                                createTextVNode(toDisplayString(props.dFC.z1min) + " ", 1),
                                _hoisted_98$1,
                                createTextVNode(" " + toDisplayString(props.dFC.z1max), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "Z2" ? (openBlock(), createElementBlock("div", _hoisted_99$1, [
                                createTextVNode(toDisplayString(props.dFC.z2min) + " ", 1),
                                _hoisted_100$1,
                                createTextVNode(" " + toDisplayString(props.dFC.z2max), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "Z3" ? (openBlock(), createElementBlock("div", _hoisted_101$1, [
                                createTextVNode(toDisplayString(props.dFC.z3min) + " ", 1),
                                _hoisted_102$1,
                                createTextVNode(" " + toDisplayString(props.dFC.z3max), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "Z4" ? (openBlock(), createElementBlock("div", _hoisted_103$1, [
                                createTextVNode(toDisplayString(props.dFC.z4min) + " ", 1),
                                _hoisted_104$1,
                                createTextVNode(" " + toDisplayString(props.dFC.z4max), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "Z5" ? (openBlock(), createElementBlock("div", _hoisted_105$1, [
                                createTextVNode(toDisplayString(props.dFC.z5min) + " ", 1),
                                _hoisted_106$1,
                                createTextVNode(" " + toDisplayString(props.dFC.z5max), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R0" ? (openBlock(), createElementBlock("div", _hoisted_107$1, toDisplayString(props.dZR.R0max), 1)) : createCommentVNode("", true),
                              row.intensidad === "R1" ? (openBlock(), createElementBlock("div", _hoisted_108$1, [
                                createTextVNode(toDisplayString(props.dZR.R1max) + " ", 1),
                                _hoisted_109$1,
                                createTextVNode(" " + toDisplayString(props.dZR.R1min), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R2" ? (openBlock(), createElementBlock("div", _hoisted_110$1, [
                                createTextVNode(toDisplayString(props.dZR.R2max) + " ", 1),
                                _hoisted_111$1,
                                createTextVNode(" " + toDisplayString(props.dZR.R2min), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R3" ? (openBlock(), createElementBlock("div", _hoisted_112$1, [
                                createTextVNode(toDisplayString(props.dZR.R3max) + " ", 1),
                                _hoisted_113$1,
                                createTextVNode(" " + toDisplayString(props.dZR.R3min), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R3+" ? (openBlock(), createElementBlock("div", _hoisted_114$1, [
                                createTextVNode(toDisplayString(props.dZR.R3pmax) + " ", 1),
                                _hoisted_115$1,
                                createTextVNode(" " + toDisplayString(props.dZR.R3pmin), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R4" ? (openBlock(), createElementBlock("div", _hoisted_116$1, [
                                createTextVNode(toDisplayString(props.dZR.R4max) + " ", 1),
                                _hoisted_117$1,
                                createTextVNode(" " + toDisplayString(props.dZR.R4min), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R5" ? (openBlock(), createElementBlock("div", _hoisted_118$1, [
                                createTextVNode(toDisplayString(props.dZR.R5max) + " ", 1),
                                _hoisted_119$1,
                                createTextVNode(" " + toDisplayString(props.dZR.R5min), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R6" ? (openBlock(), createElementBlock("div", _hoisted_120$1, toDisplayString(props.dZR.R6min), 1)) : createCommentVNode("", true)
                            ])) : (openBlock(), createElementBlock("div", _hoisted_121$1, _hoisted_123$1))
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "serie" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 5 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_124$1, [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VSelect, {
                                        modelValue: row.marca,
                                        "onUpdate:modelValue": ($event) => row.marca = $event,
                                        class: "is-rounded",
                                        onChange: withModifiers(($event) => marcar(row.marca, index), ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_VOption, {
                                            value: "inicio",
                                            onClick: ($event) => marcar("inicio", index)
                                          }, {
                                            default: withCtx(() => [
                                              _hoisted_125$1
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(_component_VOption, {
                                            value: "final",
                                            onClick: ($event) => marcar("final", index)
                                          }, {
                                            default: withCtx(() => [
                                              _hoisted_126$1
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(_component_VOption, { value: null })
                                        ]),
                                        _: 2
                                      }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "eliminar" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 6 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_127$1, [
                              createVNode(_component_VIconButton, {
                                icon: "feather:trash",
                                color: "danger",
                                circle: "",
                                outlined: "",
                                onKeydown: withKeys(withModifiers(($event) => eliminarBloque(index, row.fase, row), ["prevent"]), ["space"]),
                                onClick: ($event) => eliminarBloque(index, row.fase, row)
                              }, null, 8, ["onKeydown", "onClick"])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["data", "columns"])
                  ]),
                  createBaseVNode("div", _hoisted_128$1, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VTextarea, {
                              modelValue: unref(comentarios_fase_central),
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(comentarios_fase_central) ? comentarios_fase_central.value = $event : comentarios_fase_central = $event),
                              class: "textarea is-info-focus",
                              rows: "2",
                              placeholder: "Ingresa comentarios",
                              disabled: __props.opcionactual === "ver"
                            }, null, 8, ["modelValue", "disabled"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        bloquesCalma.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_129$1, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_130$1
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_131$1, [
            createBaseVNode("div", _hoisted_132$1, [
              createBaseVNode("div", _hoisted_133$1, [
                createBaseVNode("div", _hoisted_134$1, [
                  createVNode(_component_VFlexTable, {
                    data: bloquesCalma.value,
                    columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                    rounded: "",
                    reactive: ""
                  }, {
                    "body-cell": withCtx(({ column, row, index }) => [
                      column.key === "tipo" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            row.fase === "central" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 0,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CENTRAL), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calentamiento" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 1,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CALENTAMIENTO), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calma" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 2,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_VUELTA_A_LA_CALMA), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ], 64)) : createCommentVNode("", true),
                      column.key === "duracion_min" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: row.duracion_min,
                              "onUpdate:modelValue": ($event) => row.duracion_min = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              min: "0",
                              placeholder: "Ingrese duraci\xF3n en minutos"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_135$1, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_136$1, toDisplayString(row.duracion_min), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "duracion_seg" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: row.duracion_seg,
                              "onUpdate:modelValue": ($event) => row.duracion_seg = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              min: "0",
                              placeholder: "Ingrese duraci\xF3n en segundos"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_137$1, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_138$1, toDisplayString(row.duracion_seg), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VSelect, {
                              modelValue: row.intensidad,
                              "onUpdate:modelValue": ($event) => row.intensidad = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, indexIn) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexIn,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_139$1, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_140$1, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                        Object.keys(props.dFC).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_141$1, [
                          row.intensidad === "0" ? (openBlock(), createElementBlock("div", _hoisted_142$1, toDisplayString(valSensaciones.value[0]), 1)) : createCommentVNode("", true),
                          row.intensidad === "1" ? (openBlock(), createElementBlock("div", _hoisted_143$1, toDisplayString(valSensaciones.value[1]), 1)) : createCommentVNode("", true),
                          row.intensidad === "2" ? (openBlock(), createElementBlock("div", _hoisted_144$1, toDisplayString(valSensaciones.value[2]), 1)) : createCommentVNode("", true),
                          row.intensidad === "3" ? (openBlock(), createElementBlock("div", _hoisted_145$1, toDisplayString(valSensaciones.value[3]), 1)) : createCommentVNode("", true),
                          row.intensidad === "4" ? (openBlock(), createElementBlock("div", _hoisted_146$1, toDisplayString(valSensaciones.value[4]), 1)) : createCommentVNode("", true),
                          row.intensidad === "5" ? (openBlock(), createElementBlock("div", _hoisted_147$1, toDisplayString(valSensaciones.value[5]), 1)) : createCommentVNode("", true),
                          row.intensidad === "6" ? (openBlock(), createElementBlock("div", _hoisted_148$1, toDisplayString(valSensaciones.value[6]), 1)) : createCommentVNode("", true),
                          row.intensidad === "7" ? (openBlock(), createElementBlock("div", _hoisted_149$1, toDisplayString(valSensaciones.value[7]), 1)) : createCommentVNode("", true),
                          row.intensidad === "8" ? (openBlock(), createElementBlock("div", _hoisted_150$1, toDisplayString(valSensaciones.value[8]), 1)) : createCommentVNode("", true),
                          row.intensidad === "9" ? (openBlock(), createElementBlock("div", _hoisted_151$1, toDisplayString(valSensaciones.value[9]), 1)) : createCommentVNode("", true),
                          row.intensidad === "10" ? (openBlock(), createElementBlock("div", _hoisted_152$1, toDisplayString(valSensaciones.value[10]), 1)) : createCommentVNode("", true),
                          row.intensidad === "Z1" ? (openBlock(), createElementBlock("div", _hoisted_153$1, [
                            createTextVNode(toDisplayString(props.dFC.z1min) + " ", 1),
                            _hoisted_154$1,
                            createTextVNode(" " + toDisplayString(props.dFC.z1max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z2" ? (openBlock(), createElementBlock("div", _hoisted_155$1, [
                            createTextVNode(toDisplayString(props.dFC.z2min) + " ", 1),
                            _hoisted_156$1,
                            createTextVNode(" " + toDisplayString(props.dFC.z2max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z3" ? (openBlock(), createElementBlock("div", _hoisted_157$1, [
                            createTextVNode(toDisplayString(props.dFC.z3min) + " ", 1),
                            _hoisted_158$1,
                            createTextVNode(" " + toDisplayString(props.dFC.z3max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z4" ? (openBlock(), createElementBlock("div", _hoisted_159$1, [
                            createTextVNode(toDisplayString(props.dFC.z4min) + " ", 1),
                            _hoisted_160$1,
                            createTextVNode(" " + toDisplayString(props.dFC.z4max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z5" ? (openBlock(), createElementBlock("div", _hoisted_161$1, [
                            createTextVNode(toDisplayString(props.dFC.z5min) + " ", 1),
                            _hoisted_162$1,
                            createTextVNode(" " + toDisplayString(props.dFC.z5max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R0" ? (openBlock(), createElementBlock("div", _hoisted_163$1, toDisplayString(props.dZR.R0max), 1)) : createCommentVNode("", true),
                          row.intensidad === "R1" ? (openBlock(), createElementBlock("div", _hoisted_164$1, [
                            createTextVNode(toDisplayString(props.dZR.R1max) + " ", 1),
                            _hoisted_165$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R1min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R2" ? (openBlock(), createElementBlock("div", _hoisted_166$1, [
                            createTextVNode(toDisplayString(props.dZR.R2max) + " ", 1),
                            _hoisted_167$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R2min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R3" ? (openBlock(), createElementBlock("div", _hoisted_168$1, [
                            createTextVNode(toDisplayString(props.dZR.R3max) + " ", 1),
                            _hoisted_169$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R3min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R3+" ? (openBlock(), createElementBlock("div", _hoisted_170$1, [
                            createTextVNode(toDisplayString(props.dZR.R3pmax) + " ", 1),
                            _hoisted_171$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R3pmin), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R4" ? (openBlock(), createElementBlock("div", _hoisted_172$1, [
                            createTextVNode(toDisplayString(props.dZR.R4max) + " ", 1),
                            _hoisted_173$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R4min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R5" ? (openBlock(), createElementBlock("div", _hoisted_174$1, [
                            createTextVNode(toDisplayString(props.dZR.R5max) + " ", 1),
                            _hoisted_175$1,
                            createTextVNode(" " + toDisplayString(props.dZR.R5min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R6" ? (openBlock(), createElementBlock("div", _hoisted_176$1, toDisplayString(props.dZR.R6min), 1)) : createCommentVNode("", true)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_177$1, _hoisted_179$1))
                      ], 64)) : createCommentVNode("", true),
                      column.key === "eliminar" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_180$1, [
                          createVNode(_component_VIconButton, {
                            icon: "feather:trash",
                            color: "danger",
                            circle: "",
                            outlined: "",
                            onKeydown: withKeys(withModifiers(($event) => eliminarBloque(index, row.fase, row), ["prevent"]), ["space"]),
                            onClick: ($event) => eliminarBloque(index, row.fase, row)
                          }, null, 8, ["onKeydown", "onClick"])
                        ])) : createCommentVNode("", true)
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["data", "columns"]),
                  createBaseVNode("div", _hoisted_181$1, [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VTextarea, {
                          modelValue: unref(comentarios_fase_calma),
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(comentarios_fase_calma) ? comentarios_fase_calma.value = $event : comentarios_fase_calma = $event),
                          class: "textarea is-info-focus",
                          rows: "2",
                          placeholder: "Ingresa comentarios",
                          disabled: __props.opcionactual === "ver"
                        }, null, 8, ["modelValue", "disabled"])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        _hoisted_182$1,
        hayBloques.value ? (openBlock(), createElementBlock("div", _hoisted_183$1, [
          createBaseVNode("div", _hoisted_184$1, [
            createBaseVNode("h3", _hoisted_185$1, "Total (min:seg) : " + toDisplayString(unref(tiempoTotalComputed)), 1)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3fc07f60"]]);
var BloquesDistancia_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-6a2106c4"), n = n(), popScopeId(), n);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "hr" }, null, -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "columns" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
    /* @__PURE__ */ createBaseVNode("h3", { class: "encabezado" }, "Bloques de rutina")
  ])
], -1));
const _hoisted_4 = {
  key: 0,
  class: "columns"
};
const _hoisted_5 = { class: "column" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode("En esta secci\xF3n debes agregar tus bloques de rutina ");
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { style: { "font-weight": "bold" } }, " (M\xEDnimo un bloque por cada fase)", -1));
const _hoisted_8 = {
  key: 1,
  class: "columns"
};
const _hoisted_9 = { class: "column" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Al menos debe haber un bloque de ");
const _hoisted_11 = { style: { "font-weight": "bold" } };
const _hoisted_12 = {
  key: 1,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Fase Calentamiento");
const _hoisted_14 = { class: "invoice-wrapper" };
const _hoisted_15 = { class: "invoice-body" };
const _hoisted_16 = { class: "invoice-card" };
const _hoisted_17 = { class: "invoice-section" };
const _hoisted_18 = { class: "column" };
const _hoisted_19 = {
  key: 0,
  class: "text"
};
const _hoisted_20 = { class: "column" };
const _hoisted_21 = {
  key: 0,
  class: "text"
};
const _hoisted_22 = { class: "column" };
const _hoisted_23 = {
  key: 0,
  class: "text"
};
const _hoisted_24 = {
  key: 0,
  class: "column"
};
const _hoisted_25 = {
  key: 0,
  class: "column"
};
const _hoisted_26 = {
  key: 1,
  class: "column"
};
const _hoisted_27 = {
  key: 2,
  class: "column"
};
const _hoisted_28 = {
  key: 3,
  class: "column"
};
const _hoisted_29 = {
  key: 4,
  class: "column"
};
const _hoisted_30 = {
  key: 5,
  class: "column"
};
const _hoisted_31 = {
  key: 6,
  class: "column"
};
const _hoisted_32 = {
  key: 7,
  class: "column"
};
const _hoisted_33 = {
  key: 8,
  cass: "column"
};
const _hoisted_34 = {
  key: 9,
  cass: "column"
};
const _hoisted_35 = {
  key: 10,
  class: "column"
};
const _hoisted_36 = {
  key: 11,
  class: "column"
};
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_38 = {
  key: 12,
  class: "column"
};
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_40 = {
  key: 13,
  class: "column"
};
const _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_42 = {
  key: 14,
  class: "column"
};
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_44 = {
  key: 15,
  class: "column"
};
const _hoisted_45 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_46 = {
  key: 16,
  class: "column"
};
const _hoisted_47 = {
  key: 17,
  class: "column"
};
const _hoisted_48 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_49 = {
  key: 18,
  class: "column"
};
const _hoisted_50 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_51 = {
  key: 19,
  class: "column"
};
const _hoisted_52 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_53 = {
  key: 20,
  class: "column"
};
const _hoisted_54 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_55 = {
  key: 21,
  class: "column"
};
const _hoisted_56 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_57 = {
  key: 22,
  class: "column"
};
const _hoisted_58 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_59 = {
  key: 23,
  class: "column"
};
const _hoisted_60 = { key: 1 };
const _hoisted_61 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_62 = [
  _hoisted_61
];
const _hoisted_63 = { key: 0 };
const _hoisted_64 = { class: "column text-area" };
const _hoisted_65 = {
  key: 2,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_66 = /* @__PURE__ */ createTextVNode("Fase Central");
const _hoisted_67 = { class: "invoice-wrapper" };
const _hoisted_68 = { class: "invoice-body" };
const _hoisted_69 = { class: "invoice-card" };
const _hoisted_70 = { class: "invoice-section" };
const _hoisted_71 = { class: "m-0" };
const _hoisted_72 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "repetir" }, "Repetir:", -1));
const _hoisted_73 = { key: 1 };
const _hoisted_74 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "init" }, "Inicio Serie", -1));
const _hoisted_75 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_76 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "end" }, "Final Serie", -1));
const _hoisted_77 = {
  key: 1,
  class: "column"
};
const _hoisted_78 = { class: "text" };
const _hoisted_79 = { class: "column" };
const _hoisted_80 = {
  key: 0,
  class: "text"
};
const _hoisted_81 = { class: "column" };
const _hoisted_82 = {
  key: 0,
  class: "text"
};
const _hoisted_83 = { class: "column" };
const _hoisted_84 = {
  key: 0,
  class: "text"
};
const _hoisted_85 = {
  key: 0,
  class: "column"
};
const _hoisted_86 = {
  key: 0,
  class: "column"
};
const _hoisted_87 = {
  key: 1,
  class: "column"
};
const _hoisted_88 = {
  key: 2,
  class: "column"
};
const _hoisted_89 = {
  key: 3,
  class: "column"
};
const _hoisted_90 = {
  key: 4,
  class: "column"
};
const _hoisted_91 = {
  key: 5,
  class: "column"
};
const _hoisted_92 = {
  key: 6,
  class: "column"
};
const _hoisted_93 = {
  key: 7,
  class: "column"
};
const _hoisted_94 = {
  key: 8,
  cass: "column"
};
const _hoisted_95 = {
  key: 9,
  cass: "column"
};
const _hoisted_96 = {
  key: 10,
  class: "column"
};
const _hoisted_97 = {
  key: 11,
  class: "column"
};
const _hoisted_98 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_99 = {
  key: 12,
  class: "column"
};
const _hoisted_100 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_101 = {
  key: 13,
  class: "column"
};
const _hoisted_102 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_103 = {
  key: 14,
  class: "column"
};
const _hoisted_104 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_105 = {
  key: 15,
  class: "column"
};
const _hoisted_106 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_107 = {
  key: 16,
  class: "column"
};
const _hoisted_108 = {
  key: 17,
  class: "column"
};
const _hoisted_109 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_110 = {
  key: 18,
  class: "column"
};
const _hoisted_111 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_112 = {
  key: 19,
  class: "column"
};
const _hoisted_113 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_114 = {
  key: 20,
  class: "column"
};
const _hoisted_115 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_116 = {
  key: 21,
  class: "column"
};
const _hoisted_117 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_118 = {
  key: 22,
  class: "column"
};
const _hoisted_119 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_120 = {
  key: 23,
  class: "column"
};
const _hoisted_121 = { key: 1 };
const _hoisted_122 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_123 = [
  _hoisted_122
];
const _hoisted_124 = { key: 0 };
const _hoisted_125 = /* @__PURE__ */ createTextVNode(" Inicio ");
const _hoisted_126 = /* @__PURE__ */ createTextVNode(" Final ");
const _hoisted_127 = { key: 0 };
const _hoisted_128 = { class: "column text-area" };
const _hoisted_129 = {
  key: 3,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_130 = /* @__PURE__ */ createTextVNode("Fase Vuelta a la calma");
const _hoisted_131 = { class: "invoice-wrapper" };
const _hoisted_132 = { class: "invoice-body" };
const _hoisted_133 = { class: "invoice-card" };
const _hoisted_134 = { class: "invoice-section" };
const _hoisted_135 = { class: "column" };
const _hoisted_136 = {
  key: 0,
  class: "text"
};
const _hoisted_137 = { class: "column" };
const _hoisted_138 = {
  key: 0,
  class: "text"
};
const _hoisted_139 = { class: "column" };
const _hoisted_140 = {
  key: 0,
  class: "text"
};
const _hoisted_141 = {
  key: 0,
  class: "column"
};
const _hoisted_142 = {
  key: 0,
  class: "column"
};
const _hoisted_143 = {
  key: 1,
  class: "column"
};
const _hoisted_144 = {
  key: 2,
  class: "column"
};
const _hoisted_145 = {
  key: 3,
  class: "column"
};
const _hoisted_146 = {
  key: 4,
  class: "column"
};
const _hoisted_147 = {
  key: 5,
  class: "column"
};
const _hoisted_148 = {
  key: 6,
  class: "column"
};
const _hoisted_149 = {
  key: 7,
  class: "column"
};
const _hoisted_150 = {
  key: 8,
  cass: "column"
};
const _hoisted_151 = {
  key: 9,
  cass: "column"
};
const _hoisted_152 = {
  key: 10,
  class: "column"
};
const _hoisted_153 = {
  key: 11,
  class: "column"
};
const _hoisted_154 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_155 = {
  key: 12,
  class: "column"
};
const _hoisted_156 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_157 = {
  key: 13,
  class: "column"
};
const _hoisted_158 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_159 = {
  key: 14,
  class: "column"
};
const _hoisted_160 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_161 = {
  key: 15,
  class: "column"
};
const _hoisted_162 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_163 = {
  key: 16,
  class: "column"
};
const _hoisted_164 = {
  key: 17,
  class: "column"
};
const _hoisted_165 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_166 = {
  key: 18,
  class: "column"
};
const _hoisted_167 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_168 = {
  key: 19,
  class: "column"
};
const _hoisted_169 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_170 = {
  key: 20,
  class: "column"
};
const _hoisted_171 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_172 = {
  key: 21,
  class: "column"
};
const _hoisted_173 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_174 = {
  key: 22,
  class: "column"
};
const _hoisted_175 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_176 = {
  key: 23,
  class: "column"
};
const _hoisted_177 = { key: 1 };
const _hoisted_178 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_179 = [
  _hoisted_178
];
const _hoisted_180 = { key: 0 };
const _hoisted_181 = { class: "column text-area" };
const _hoisted_182 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "columns" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
    /* @__PURE__ */ createBaseVNode("hr", { style: { "background-color": "gray", "height": "1px", "opacity": "0.5" } })
  ])
], -1));
const _hoisted_183 = {
  key: 4,
  class: "columns is-multiline flotar"
};
const _hoisted_184 = { class: "column" };
const _hoisted_185 = { style: { "font-weight": "bold" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    datosrutina: { default: void 0 },
    opcionactual: { default: void 0 },
    dFC: { default: () => {
      return {};
    } },
    dZR: { default: () => {
      return {};
    } }
  },
  emits: ["sync", "agregar", "eliminar"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const notyf = new Notyf();
    const showReplicador = ref(false);
    const indexInit = ref(null);
    const indexEnd = ref(null);
    const tipoBloque = ref(TIPO_BLOQUE_CENTRAL);
    const tipoMedicion = TIPO_RANGO_BLOQUE;
    const opcionesIntensidad = ref(
      GET_OPCIONES_INSIDAD_RUTINA(props.datosrutina.tipo_esfuerzo).valuesEntrenador
    );
    const valSensaciones = ref(
      GET_OPCIONES_INSIDAD_RUTINA(props.datosrutina.tipo_esfuerzo).valuesDeportista
    );
    const datosNuevoBloque = reactive({
      fase: "",
      tipo: tipoBloque.value[0],
      tipo_medicion: tipoMedicion[1],
      distancia: 1,
      intensidad: opcionesIntensidad.value[0]
    });
    const tiempoTotalComputed = computed(() => {
      let kilometros = 0;
      let kmCalen = 0;
      let kmCentral = 0;
      let kmCalma = 0;
      bloquesCalenta.value.forEach((bloque) => {
        if (bloque.tipo_medicion === "Kilometros") {
          kmCalen += bloque.distancia || 0;
        } else if (bloque.tipo_medicion === "metros") {
          kmCalen += a(bloque.distancia || 0, "meters").to("kilometers");
        }
      });
      bloquesCent.value.forEach((bloque, index) => {
        if (bloque.tipo_medicion === "Kilometros") {
          if (index >= indexInit.value && index <= indexEnd.value && indexInit.value != null && indexEnd.value != null)
            kmCentral += bloque.distancia || 0 * rept_centrales.value;
          else
            kmCentral += bloque.distancia || 0;
        } else if (bloque.tipo_medicion === "metros") {
          if (index >= indexInit.value && index <= indexEnd.value && indexInit.value != null && indexEnd.value != null)
            kmCentral += a(bloque.distancia || 0, "meters").to("kilometers") * rept_centrales.value;
          else
            kmCentral += a(bloque.distancia || 0, "meters").to("kilometers");
        }
      });
      bloquesCalma.value.forEach((bloque) => {
        if (bloque.tipo_medicion === "Kilometros") {
          kmCalma += bloque.distancia || 0;
        } else if (bloque.tipo_medicion === "metros") {
          kmCalma += a(bloque.distancia || 0, "meters").to("kilometers");
        }
      });
      kilometros = kmCalen + kmCentral + kmCalma;
      return kilometros.toFixed(3);
    });
    let calentamiento = ref(false);
    let central = ref(false);
    let calma = ref(false);
    const bloquesCalenta = ref([]);
    const bloquesCent = ref([]);
    const bloquesCalma = ref([]);
    const nuevoBloqueCalentamiento = ref(false);
    const nuevoBloqueCentral = ref(false);
    const nuevoBloqueVueltaALaCalma = ref(false);
    watch(props.datosrutina.bloques, () => {
      let valido = true;
      if (props.datosrutina.bloques.length === 0) {
        valido = false;
      }
      props.datosrutina.bloques.forEach((bloque) => {
        if (!validarBloqueDistancia(bloque)) {
          valido = false;
        }
      });
      props.datosrutina.bloques.forEach((bloque) => {
        if (bloque.fase === "calentamiento") {
          calentamiento.value = true;
        } else if (bloque.fase === "central") {
          central.value = true;
        } else if (bloque.fase === "calma") {
          calma.value = true;
        }
      });
      if (!calentamiento.value || !central.value || !calma.value) {
        valido = false;
      }
      emits("sync", valido);
    });
    watch(
      () => props.datosrutina.tipo_esfuerzo,
      () => {
        opcionesIntensidad.value = GET_OPCIONES_INSIDAD_RUTINA(
          props.datosrutina.tipo_esfuerzo
        ).valuesEntrenador;
        datosNuevoBloque.tipo_medicion = tipoMedicion[1];
        datosNuevoBloque.intensidad = opcionesIntensidad.value[0];
        bloquesCalenta.value.forEach((bloque) => {
          bloque.intensidad = opcionesIntensidad.value[0];
        });
        bloquesCent.value.forEach((bloque) => {
          bloque.intensidad = opcionesIntensidad.value[0];
        });
        bloquesCalma.value.forEach((bloque) => {
          bloque.intensidad = opcionesIntensidad.value[0];
        });
      }
    );
    const validarReplicador = () => {
      if (indexEnd.value != null && indexInit.value != null) {
        if (indexEnd.value > indexInit.value) {
          showReplicador.value = true;
        } else {
          bloquesCent.value[indexInit.value].marca = null;
          bloquesCent.value[indexEnd.value].marca = null;
          indexInit.value = null;
          indexEnd.value = null;
          showReplicador.value = false;
          notyf.error({
            message: "\xA1Error temporal! El inicio no puede ser despu\xE9s del final. Por favor <b>limpia los campos</b> y selecciona un inicio y fin adecuados para la rutina.",
            duration: 6e3,
            dismissible: true
          });
        }
      }
    };
    const marcar = (marca, index) => {
      switch (marca) {
        case "inicio":
          if (indexInit.value != null) {
            bloquesCent.value[indexInit.value].marca = null;
          }
          indexInit.value = index;
          validarReplicador();
          break;
        case "final":
          if (indexEnd.value != null) {
            bloquesCent.value[indexEnd.value].marca = null;
          }
          indexEnd.value = index;
          validarReplicador();
          break;
      }
    };
    watch(nuevoBloqueCalentamiento, () => {
      bloquesCalenta.value = [];
      props.datosrutina.bloques.forEach((bloque) => {
        if (bloque.fase === "calentamiento") {
          bloquesCalenta.value.push(bloque);
        }
      });
    });
    watch(nuevoBloqueCentral, () => {
      bloquesCent.value = [];
      props.datosrutina.bloques.forEach((bloque) => {
        if (bloque.fase === "central") {
          bloquesCent.value.push(bloque);
        }
      });
    });
    watch(nuevoBloqueVueltaALaCalma, () => {
      bloquesCalma.value = [];
      props.datosrutina.bloques.forEach((bloque) => {
        if (bloque.fase === "calma") {
          bloquesCalma.value.push(bloque);
        }
      });
    });
    onMounted(() => {
      const valoresArray = Object.values(props.datosrutina.bloques);
      if (props.opcionactual === "editar" || props.opcionactual === "ver") {
        let valido = true;
        valoresArray.forEach((bloque) => {
          if (bloque.fase === "calentamiento") {
            bloquesCalenta.value.push(bloque);
            calentamiento.value = true;
          }
          if (bloque.fase === "central") {
            bloquesCent.value.push(bloque);
            central.value = true;
            if (bloque.marca === "inicio") {
              indexInit.value = bloquesCent.value.length - 1;
            }
            if (bloque.marca === "final") {
              indexEnd.value = bloquesCent.value.length - 1;
            }
          }
          if (bloque.fase === "calma") {
            bloquesCalma.value.push(bloque);
            calma.value = true;
          }
        });
        validarReplicador();
        bloquesCalentamiento.value = bloquesCalenta.value.length;
        bloquesCentrales.value = bloquesCent.value.length;
        bloquesVueltaALaCalma.value = bloquesCalma.value.length;
        if (!calentamiento.value || !central.value || !calma.value) {
          valido = false;
        }
        emits("sync", valido);
      }
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      comentarios_fase_calentamiento.value = props.datosrutina.comentarios_fase_calentamiento;
      comentarios_fase_central.value = props.datosrutina.comentarios_fase_central;
      comentarios_fase_calma.value = props.datosrutina.comentarios_fase_calma;
      rept_centrales.value = props.datosrutina.rept_centrales || 1;
    });
    const hayBloques = ref(false);
    const validationSchema = toFormValidator(
      z.object({
        distancia: z.number({
          required_error: "Este campo es requerido",
          invalid_type_error: "tipo de dato invalido"
        }).min(1, "Escribe un valor valido")
      })
    );
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        distancia: 1
      }
    });
    const bloquesCalentamiento = ref(0);
    const bloquesCentrales = ref(0);
    const bloquesVueltaALaCalma = ref(0);
    handleSubmit(() => {
      bloquesCalentamiento.value += 1;
      datosNuevoBloque.tipo = TIPO_BLOQUE_CALENTAMIENTO[0];
      datosNuevoBloque.fase = "calentamiento";
      emits("agregar", datosNuevoBloque);
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      nuevoBloqueCalentamiento.value = !nuevoBloqueCalentamiento.value;
    });
    handleSubmit(() => {
      bloquesCentrales.value += 1;
      datosNuevoBloque.tipo = TIPO_BLOQUE_CENTRAL[0];
      datosNuevoBloque.fase = "central";
      emits("agregar", datosNuevoBloque);
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      nuevoBloqueCentral.value = !nuevoBloqueCentral.value;
    });
    handleSubmit(() => {
      bloquesVueltaALaCalma.value += 1;
      datosNuevoBloque.tipo = TIPO_BLOQUE_VUELTA_A_LA_CALMA[0];
      datosNuevoBloque.fase = "calma";
      emits("agregar", datosNuevoBloque);
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      nuevoBloqueVueltaALaCalma.value = !nuevoBloqueVueltaALaCalma.value;
    });
    const eliminarBloque = (_index, fase, bloque) => {
      if (fase === "calentamiento") {
        bloquesCalentamiento.value -= 1;
        if (bloquesCalentamiento.value === 0) {
          calentamiento.value = false;
        }
      } else if (fase === "central") {
        bloquesCentrales.value -= 1;
        if (bloquesCentrales.value === 0) {
          central.value = false;
        }
      } else if (fase === "calma") {
        bloquesVueltaALaCalma.value -= 1;
        if (bloquesVueltaALaCalma.value === 0) {
          calma.value = false;
        }
      }
      props.datosrutina.bloques.find((b, ind) => {
        if (b === bloque) {
          if (b.fase === "calentamiento") {
            bloquesCalenta.value.splice(ind, 1);
            nuevoBloqueCalentamiento.value = !nuevoBloqueCalentamiento.value;
          } else if (b.fase === "central") {
            bloquesCent.value.splice(ind, 1);
            nuevoBloqueCentral.value = !nuevoBloqueCentral.value;
          } else if (b.fase === "calma") {
            bloquesCalma.value.splice(ind, 1);
            nuevoBloqueVueltaALaCalma.value = !nuevoBloqueVueltaALaCalma.value;
          }
          emits("eliminar", ind);
        }
      });
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
    };
    const columns = {
      tipo: "tipo",
      medicion: "medici\xF3n",
      distancia: "distancia",
      intensidad: "intensidad",
      rango: "rango",
      eliminar: "eliminar"
    };
    const columnsCentral = {
      tipo: "tipo",
      medicion: "medici\xF3n",
      distancia: "distancia",
      intensidad: "intensidad",
      rango: "rango",
      serie: "serie",
      eliminar: "eliminar"
    };
    const columns_ver_rutina = {
      tipo: "tipo",
      medicion: "medici\xF3n",
      distancia: "distancia",
      intensidad: "intensidad",
      rango: "rango"
    };
    let comentarios_fase_calentamiento = ref();
    let comentarios_fase_central = ref();
    let comentarios_fase_calma = ref();
    const rept_centrales = ref(0);
    watch(comentarios_fase_calentamiento, () => {
      props.datosrutina.comentarios_fase_calentamiento = comentarios_fase_calentamiento.value;
    });
    watch(comentarios_fase_central, () => {
      props.datosrutina.comentarios_fase_central = comentarios_fase_central.value;
    });
    watch(rept_centrales, () => {
      props.datosrutina.rept_centrales = rept_centrales.value;
    });
    watch(comentarios_fase_calma, () => {
      props.datosrutina.comentarios_fase_calma = comentarios_fase_calma.value;
    });
    return (_ctx, _cache) => {
      const _component_VMessage = _sfc_main$2;
      const _component_VOption = _sfc_main$3;
      const _component_VSelect = _sfc_main$4;
      const _component_VControl = __unplugin_components_2;
      const _component_VInput = _sfc_main$5;
      const _component_VIconButton = _sfc_main$6;
      const _component_VFlexTable = _sfc_main$7;
      const _component_VTextarea = _sfc_main$8;
      const _component_VFlexItem = _sfc_main$9;
      const _component_VField = _sfc_main$a;
      const _component_VFlex = _sfc_main$b;
      const _component_VFlexTableCell = _sfc_main$c;
      return openBlock(), createElementBlock("div", null, [
        __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_1, [
          _hoisted_2,
          _hoisted_3,
          !hayBloques.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VMessage, { color: "info" }, {
                default: withCtx(() => [
                  _hoisted_6,
                  _hoisted_7
                ]),
                _: 1
              })
            ])
          ])) : createCommentVNode("", true),
          hayBloques.value && (!unref(calentamiento) || !unref(central) || !unref(calma)) ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_VMessage, { color: "warning" }, {
                default: withCtx(() => [
                  _hoisted_10,
                  createBaseVNode("span", _hoisted_11, toDisplayString(!unref(calentamiento) ? " (Calentamiento) " : "") + toDisplayString(!unref(central) ? " (Central) " : "") + toDisplayString(!unref(calma) ? " (Calma) " : ""), 1)
                ]),
                _: 1
              })
            ])
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        bloquesCalenta.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_12, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_13
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  createVNode(_component_VFlexTable, {
                    data: bloquesCalenta.value,
                    columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                    rounded: "",
                    reactive: ""
                  }, {
                    "body-cell": withCtx(({ column, row, index }) => [
                      column.key === "tipo" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            row.fase === "central" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 0,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CENTRAL), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calentamiento" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 1,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CALENTAMIENTO), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calma" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 2,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_VUELTA_A_LA_CALMA), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ], 64)) : createCommentVNode("", true),
                      column.key === "medicion" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VSelect, {
                              modelValue: row.tipo_medicion,
                              "onUpdate:modelValue": ($event) => row.tipo_medicion = $event,
                              disabled: !(row.tipo !== "Flexibilidad")
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tipoMedicion), (deporte, indexTm) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTm,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_18, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_19, toDisplayString(row.tipo_medicion), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "distancia" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: row.distancia,
                              "onUpdate:modelValue": ($event) => row.distancia = $event,
                              modelModifiers: { number: true },
                              disabled: !(row.tipo !== "Flexibilidad"),
                              type: "number",
                              min: "0",
                              placeholder: "Ingrese km o mts"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_20, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_21, toDisplayString(row.distancia), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VSelect, {
                              modelValue: row.intensidad,
                              "onUpdate:modelValue": ($event) => row.intensidad = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, indexIn) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexIn,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_22, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_23, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                        Object.keys(props.dFC).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
                          row.intensidad === "0" ? (openBlock(), createElementBlock("div", _hoisted_25, toDisplayString(valSensaciones.value[0]), 1)) : createCommentVNode("", true),
                          row.intensidad === "1" ? (openBlock(), createElementBlock("div", _hoisted_26, toDisplayString(valSensaciones.value[1]), 1)) : createCommentVNode("", true),
                          row.intensidad === "2" ? (openBlock(), createElementBlock("div", _hoisted_27, toDisplayString(valSensaciones.value[2]), 1)) : createCommentVNode("", true),
                          row.intensidad === "3" ? (openBlock(), createElementBlock("div", _hoisted_28, toDisplayString(valSensaciones.value[3]), 1)) : createCommentVNode("", true),
                          row.intensidad === "4" ? (openBlock(), createElementBlock("div", _hoisted_29, toDisplayString(valSensaciones.value[4]), 1)) : createCommentVNode("", true),
                          row.intensidad === "5" ? (openBlock(), createElementBlock("div", _hoisted_30, toDisplayString(valSensaciones.value[5]), 1)) : createCommentVNode("", true),
                          row.intensidad === "6" ? (openBlock(), createElementBlock("div", _hoisted_31, toDisplayString(valSensaciones.value[6]), 1)) : createCommentVNode("", true),
                          row.intensidad === "7" ? (openBlock(), createElementBlock("div", _hoisted_32, toDisplayString(valSensaciones.value[7]), 1)) : createCommentVNode("", true),
                          row.intensidad === "8" ? (openBlock(), createElementBlock("div", _hoisted_33, toDisplayString(valSensaciones.value[8]), 1)) : createCommentVNode("", true),
                          row.intensidad === "9" ? (openBlock(), createElementBlock("div", _hoisted_34, toDisplayString(valSensaciones.value[9]), 1)) : createCommentVNode("", true),
                          row.intensidad === "10" ? (openBlock(), createElementBlock("div", _hoisted_35, toDisplayString(valSensaciones.value[10]), 1)) : createCommentVNode("", true),
                          row.intensidad === "Z1" ? (openBlock(), createElementBlock("div", _hoisted_36, [
                            createTextVNode(toDisplayString(props.dFC.z1min) + " ", 1),
                            _hoisted_37,
                            createTextVNode(" " + toDisplayString(props.dFC.z1max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z2" ? (openBlock(), createElementBlock("div", _hoisted_38, [
                            createTextVNode(toDisplayString(props.dFC.z2min) + " ", 1),
                            _hoisted_39,
                            createTextVNode(" " + toDisplayString(props.dFC.z2max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z3" ? (openBlock(), createElementBlock("div", _hoisted_40, [
                            createTextVNode(toDisplayString(props.dFC.z3min) + " ", 1),
                            _hoisted_41,
                            createTextVNode(" " + toDisplayString(props.dFC.z3max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z4" ? (openBlock(), createElementBlock("div", _hoisted_42, [
                            createTextVNode(toDisplayString(props.dFC.z4min) + " ", 1),
                            _hoisted_43,
                            createTextVNode(" " + toDisplayString(props.dFC.z4max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z5" ? (openBlock(), createElementBlock("div", _hoisted_44, [
                            createTextVNode(toDisplayString(props.dFC.z5min) + " ", 1),
                            _hoisted_45,
                            createTextVNode(" " + toDisplayString(props.dFC.z5max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R0" ? (openBlock(), createElementBlock("div", _hoisted_46, toDisplayString(props.dZR.R0max), 1)) : createCommentVNode("", true),
                          row.intensidad === "R1" ? (openBlock(), createElementBlock("div", _hoisted_47, [
                            createTextVNode(toDisplayString(props.dZR.R1max) + " ", 1),
                            _hoisted_48,
                            createTextVNode(" " + toDisplayString(props.dZR.R1min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R2" ? (openBlock(), createElementBlock("div", _hoisted_49, [
                            createTextVNode(toDisplayString(props.dZR.R2max) + " ", 1),
                            _hoisted_50,
                            createTextVNode(" " + toDisplayString(props.dZR.R2min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R3" ? (openBlock(), createElementBlock("div", _hoisted_51, [
                            createTextVNode(toDisplayString(props.dZR.R3max) + " ", 1),
                            _hoisted_52,
                            createTextVNode(" " + toDisplayString(props.dZR.R3min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R3+" ? (openBlock(), createElementBlock("div", _hoisted_53, [
                            createTextVNode(toDisplayString(props.dZR.R3pmax) + " ", 1),
                            _hoisted_54,
                            createTextVNode(" " + toDisplayString(props.dZR.R3pmin), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R4" ? (openBlock(), createElementBlock("div", _hoisted_55, [
                            createTextVNode(toDisplayString(props.dZR.R4max) + " ", 1),
                            _hoisted_56,
                            createTextVNode(" " + toDisplayString(props.dZR.R4min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R5" ? (openBlock(), createElementBlock("div", _hoisted_57, [
                            createTextVNode(toDisplayString(props.dZR.R5max) + " ", 1),
                            _hoisted_58,
                            createTextVNode(" " + toDisplayString(props.dZR.R5min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R6" ? (openBlock(), createElementBlock("div", _hoisted_59, toDisplayString(props.dZR.R6min), 1)) : createCommentVNode("", true)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_60, _hoisted_62))
                      ], 64)) : createCommentVNode("", true),
                      column.key === "eliminar" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_63, [
                          createVNode(_component_VIconButton, {
                            icon: "feather:trash",
                            color: "danger",
                            circle: "",
                            outlined: "",
                            onKeydown: withKeys(withModifiers(($event) => eliminarBloque(index, row.fase, row), ["prevent"]), ["space"]),
                            onClick: ($event) => eliminarBloque(index, row.fase, row)
                          }, null, 8, ["onKeydown", "onClick"])
                        ])) : createCommentVNode("", true)
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["data", "columns"]),
                  createBaseVNode("div", _hoisted_64, [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VTextarea, {
                          modelValue: unref(comentarios_fase_calentamiento),
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(comentarios_fase_calentamiento) ? comentarios_fase_calentamiento.value = $event : comentarios_fase_calentamiento = $event),
                          class: "textarea is-info-focus",
                          rows: "2",
                          placeholder: "Ingresa comentarios",
                          disabled: __props.opcionactual === "ver"
                        }, null, 8, ["modelValue", "disabled"])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        bloquesCent.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_65, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_66
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_67, [
            createBaseVNode("div", _hoisted_68, [
              createBaseVNode("div", _hoisted_69, [
                createBaseVNode("div", _hoisted_70, [
                  createBaseVNode("fieldset", _hoisted_71, [
                    showReplicador.value ? (openBlock(), createElementBlock("legend", {
                      key: 0,
                      class: normalizeClass(
                        __props.opcionactual === "editar" || __props.opcionactual === "crear" ? "legend-repeticiones" : ""
                      )
                    }, [
                      __props.opcionactual === "editar" || __props.opcionactual === "crear" ? (openBlock(), createBlock(_component_VFlex, {
                        key: 0,
                        "flex-wrap": "wrap",
                        "align-items": "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VFlexItem, null, {
                            default: withCtx(() => [
                              _hoisted_72
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VFlexItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VInput, {
                                        modelValue: rept_centrales.value,
                                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => rept_centrales.value = $event),
                                        min: "1",
                                        type: "number",
                                        placeholder: "0"
                                      }, null, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : (openBlock(), createElementBlock("div", _hoisted_73, [
                        _hoisted_74,
                        _hoisted_75,
                        _hoisted_76,
                        createTextVNode("x" + toDisplayString(rept_centrales.value), 1)
                      ]))
                    ], 2)) : createCommentVNode("", true),
                    createVNode(_component_VFlexTable, {
                      data: bloquesCent.value,
                      columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columnsCentral) : unref(columns_ver_rutina),
                      rounded: "",
                      reactive: ""
                    }, {
                      "body-cell": withCtx(({ column, row, index }) => [
                        column.key === "tipo" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 0 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                              default: withCtx(() => [
                                row.fase === "central" ? (openBlock(), createBlock(_component_VSelect, {
                                  key: 0,
                                  modelValue: row.tipo,
                                  "onUpdate:modelValue": ($event) => row.tipo = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CENTRAL), (deporte, indexTp) => {
                                      return openBlock(), createBlock(_component_VOption, {
                                        key: indexTp,
                                        value: deporte
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deporte), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calentamiento" ? (openBlock(), createBlock(_component_VSelect, {
                                  key: 1,
                                  modelValue: row.tipo,
                                  "onUpdate:modelValue": ($event) => row.tipo = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CALENTAMIENTO), (deporte, indexTp) => {
                                      return openBlock(), createBlock(_component_VOption, {
                                        key: indexTp,
                                        value: deporte
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deporte), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calma" ? (openBlock(), createBlock(_component_VSelect, {
                                  key: 2,
                                  modelValue: row.tipo,
                                  "onUpdate:modelValue": ($event) => row.tipo = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_VUELTA_A_LA_CALMA), (deporte, indexTp) => {
                                      return openBlock(), createBlock(_component_VOption, {
                                        key: indexTp,
                                        value: deporte
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deporte), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("div", _hoisted_77, [
                              createBaseVNode("label", _hoisted_78, toDisplayString(row.tipo), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "medicion" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 1 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: row.tipo_medicion,
                                  "onUpdate:modelValue": ($event) => row.tipo_medicion = $event,
                                  disabled: !(row.tipo !== "Flexibilidad")
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tipoMedicion), (deporte, indexTm) => {
                                      return openBlock(), createBlock(_component_VOption, {
                                        key: indexTm,
                                        value: deporte
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deporte), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_79, [
                              props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_80, toDisplayString(row.tipo_medicion), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "distancia" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 2 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: row.distancia,
                                  "onUpdate:modelValue": ($event) => row.distancia = $event,
                                  modelModifiers: { number: true },
                                  disabled: !(row.tipo !== "Flexibilidad"),
                                  type: "number",
                                  min: "0",
                                  placeholder: "Ingrese km o mts"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_81, [
                              props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_82, toDisplayString(row.distancia), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "intensidad" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 3 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: row.intensidad,
                                  "onUpdate:modelValue": ($event) => row.intensidad = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, indexIn) => {
                                      return openBlock(), createBlock(_component_VOption, {
                                        key: indexIn,
                                        value: deporte
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deporte), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_83, [
                              props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_84, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 4 }, {
                          default: withCtx(() => [
                            Object.keys(props.dFC).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_85, [
                              row.intensidad === "0" ? (openBlock(), createElementBlock("div", _hoisted_86, toDisplayString(valSensaciones.value[0]), 1)) : createCommentVNode("", true),
                              row.intensidad === "1" ? (openBlock(), createElementBlock("div", _hoisted_87, toDisplayString(valSensaciones.value[1]), 1)) : createCommentVNode("", true),
                              row.intensidad === "2" ? (openBlock(), createElementBlock("div", _hoisted_88, toDisplayString(valSensaciones.value[2]), 1)) : createCommentVNode("", true),
                              row.intensidad === "3" ? (openBlock(), createElementBlock("div", _hoisted_89, toDisplayString(valSensaciones.value[3]), 1)) : createCommentVNode("", true),
                              row.intensidad === "4" ? (openBlock(), createElementBlock("div", _hoisted_90, toDisplayString(valSensaciones.value[4]), 1)) : createCommentVNode("", true),
                              row.intensidad === "5" ? (openBlock(), createElementBlock("div", _hoisted_91, toDisplayString(valSensaciones.value[5]), 1)) : createCommentVNode("", true),
                              row.intensidad === "6" ? (openBlock(), createElementBlock("div", _hoisted_92, toDisplayString(valSensaciones.value[6]), 1)) : createCommentVNode("", true),
                              row.intensidad === "7" ? (openBlock(), createElementBlock("div", _hoisted_93, toDisplayString(valSensaciones.value[7]), 1)) : createCommentVNode("", true),
                              row.intensidad === "8" ? (openBlock(), createElementBlock("div", _hoisted_94, toDisplayString(valSensaciones.value[8]), 1)) : createCommentVNode("", true),
                              row.intensidad === "9" ? (openBlock(), createElementBlock("div", _hoisted_95, toDisplayString(valSensaciones.value[9]), 1)) : createCommentVNode("", true),
                              row.intensidad === "10" ? (openBlock(), createElementBlock("div", _hoisted_96, toDisplayString(valSensaciones.value[10]), 1)) : createCommentVNode("", true),
                              row.intensidad === "Z1" ? (openBlock(), createElementBlock("div", _hoisted_97, [
                                createTextVNode(toDisplayString(props.dFC.z1min) + " ", 1),
                                _hoisted_98,
                                createTextVNode(" " + toDisplayString(props.dFC.z1max), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "Z2" ? (openBlock(), createElementBlock("div", _hoisted_99, [
                                createTextVNode(toDisplayString(props.dFC.z2min) + " ", 1),
                                _hoisted_100,
                                createTextVNode(" " + toDisplayString(props.dFC.z2max), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "Z3" ? (openBlock(), createElementBlock("div", _hoisted_101, [
                                createTextVNode(toDisplayString(props.dFC.z3min) + " ", 1),
                                _hoisted_102,
                                createTextVNode(" " + toDisplayString(props.dFC.z3max), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "Z4" ? (openBlock(), createElementBlock("div", _hoisted_103, [
                                createTextVNode(toDisplayString(props.dFC.z4min) + " ", 1),
                                _hoisted_104,
                                createTextVNode(" " + toDisplayString(props.dFC.z4max), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "Z5" ? (openBlock(), createElementBlock("div", _hoisted_105, [
                                createTextVNode(toDisplayString(props.dFC.z5min) + " ", 1),
                                _hoisted_106,
                                createTextVNode(" " + toDisplayString(props.dFC.z5max), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R0" ? (openBlock(), createElementBlock("div", _hoisted_107, toDisplayString(props.dZR.R0max), 1)) : createCommentVNode("", true),
                              row.intensidad === "R1" ? (openBlock(), createElementBlock("div", _hoisted_108, [
                                createTextVNode(toDisplayString(props.dZR.R1max) + " ", 1),
                                _hoisted_109,
                                createTextVNode(" " + toDisplayString(props.dZR.R1min), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R2" ? (openBlock(), createElementBlock("div", _hoisted_110, [
                                createTextVNode(toDisplayString(props.dZR.R2max) + " ", 1),
                                _hoisted_111,
                                createTextVNode(" " + toDisplayString(props.dZR.R2min), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R3" ? (openBlock(), createElementBlock("div", _hoisted_112, [
                                createTextVNode(toDisplayString(props.dZR.R3max) + " ", 1),
                                _hoisted_113,
                                createTextVNode(" " + toDisplayString(props.dZR.R3min), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R3+" ? (openBlock(), createElementBlock("div", _hoisted_114, [
                                createTextVNode(toDisplayString(props.dZR.R3pmax) + " ", 1),
                                _hoisted_115,
                                createTextVNode(" " + toDisplayString(props.dZR.R3pmin), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R4" ? (openBlock(), createElementBlock("div", _hoisted_116, [
                                createTextVNode(toDisplayString(props.dZR.R4max) + " ", 1),
                                _hoisted_117,
                                createTextVNode(" " + toDisplayString(props.dZR.R4min), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R5" ? (openBlock(), createElementBlock("div", _hoisted_118, [
                                createTextVNode(toDisplayString(props.dZR.R5max) + " ", 1),
                                _hoisted_119,
                                createTextVNode(" " + toDisplayString(props.dZR.R5min), 1)
                              ])) : createCommentVNode("", true),
                              row.intensidad === "R6" ? (openBlock(), createElementBlock("div", _hoisted_120, toDisplayString(props.dZR.R6min), 1)) : createCommentVNode("", true)
                            ])) : (openBlock(), createElementBlock("div", _hoisted_121, _hoisted_123))
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "serie" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 5 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_124, [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VSelect, {
                                        modelValue: row.marca,
                                        "onUpdate:modelValue": ($event) => row.marca = $event,
                                        class: "is-rounded",
                                        onChange: withModifiers(($event) => marcar(row.marca, index), ["stop"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_VOption, {
                                            value: "inicio",
                                            onClick: ($event) => marcar("inicio", index)
                                          }, {
                                            default: withCtx(() => [
                                              _hoisted_125
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(_component_VOption, {
                                            value: "final",
                                            onClick: ($event) => marcar("final", index)
                                          }, {
                                            default: withCtx(() => [
                                              _hoisted_126
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(_component_VOption, { value: null })
                                        ]),
                                        _: 2
                                      }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "eliminar" ? (openBlock(), createBlock(_component_VFlexTableCell, { key: 6 }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_127, [
                              createVNode(_component_VIconButton, {
                                icon: "feather:trash",
                                color: "danger",
                                circle: "",
                                outlined: "",
                                onKeydown: withKeys(withModifiers(($event) => eliminarBloque(index, row.fase, row), ["prevent"]), ["space"]),
                                onClick: ($event) => eliminarBloque(index, row.fase, row)
                              }, null, 8, ["onKeydown", "onClick"])
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["data", "columns"])
                  ]),
                  createBaseVNode("div", _hoisted_128, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VTextarea, {
                              modelValue: unref(comentarios_fase_central),
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(comentarios_fase_central) ? comentarios_fase_central.value = $event : comentarios_fase_central = $event),
                              class: "textarea is-info-focus",
                              rows: "2",
                              placeholder: "Ingresa comentarios",
                              disabled: __props.opcionactual === "ver"
                            }, null, 8, ["modelValue", "disabled"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        bloquesCalma.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_129, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_130
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_131, [
            createBaseVNode("div", _hoisted_132, [
              createBaseVNode("div", _hoisted_133, [
                createBaseVNode("div", _hoisted_134, [
                  createVNode(_component_VFlexTable, {
                    data: bloquesCalma.value,
                    columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                    rounded: "",
                    reactive: ""
                  }, {
                    "body-cell": withCtx(({ column, row, index }) => [
                      column.key === "tipo" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            row.fase === "central" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 0,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CENTRAL), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calentamiento" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 1,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_CALENTAMIENTO), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : row.fase === "calma" ? (openBlock(), createBlock(_component_VSelect, {
                              key: 2,
                              modelValue: row.tipo,
                              "onUpdate:modelValue": ($event) => row.tipo = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(TIPO_BLOQUE_VUELTA_A_LA_CALMA), (deporte, indexTp) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTp,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ], 64)) : createCommentVNode("", true),
                      column.key === "medicion" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VSelect, {
                              modelValue: row.tipo_medicion,
                              "onUpdate:modelValue": ($event) => row.tipo_medicion = $event,
                              disabled: !(row.tipo !== "Flexibilidad")
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tipoMedicion), (deporte, indexTm) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexTm,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_135, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_136, toDisplayString(row.tipo_medicion), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "distancia" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: row.distancia,
                              "onUpdate:modelValue": ($event) => row.distancia = $event,
                              modelModifiers: { number: true },
                              disabled: !(row.tipo !== "Flexibilidad"),
                              type: "number",
                              min: "0",
                              placeholder: "Ingrese km o mts"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_137, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_138, toDisplayString(row.distancia), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_VSelect, {
                              modelValue: row.intensidad,
                              "onUpdate:modelValue": ($event) => row.intensidad = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, indexIn) => {
                                  return openBlock(), createBlock(_component_VOption, {
                                    key: indexIn,
                                    value: deporte
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(deporte), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_139, [
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_140, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                        Object.keys(props.dFC).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_141, [
                          row.intensidad === "0" ? (openBlock(), createElementBlock("div", _hoisted_142, toDisplayString(valSensaciones.value[0]), 1)) : createCommentVNode("", true),
                          row.intensidad === "1" ? (openBlock(), createElementBlock("div", _hoisted_143, toDisplayString(valSensaciones.value[1]), 1)) : createCommentVNode("", true),
                          row.intensidad === "2" ? (openBlock(), createElementBlock("div", _hoisted_144, toDisplayString(valSensaciones.value[2]), 1)) : createCommentVNode("", true),
                          row.intensidad === "3" ? (openBlock(), createElementBlock("div", _hoisted_145, toDisplayString(valSensaciones.value[3]), 1)) : createCommentVNode("", true),
                          row.intensidad === "4" ? (openBlock(), createElementBlock("div", _hoisted_146, toDisplayString(valSensaciones.value[4]), 1)) : createCommentVNode("", true),
                          row.intensidad === "5" ? (openBlock(), createElementBlock("div", _hoisted_147, toDisplayString(valSensaciones.value[5]), 1)) : createCommentVNode("", true),
                          row.intensidad === "6" ? (openBlock(), createElementBlock("div", _hoisted_148, toDisplayString(valSensaciones.value[6]), 1)) : createCommentVNode("", true),
                          row.intensidad === "7" ? (openBlock(), createElementBlock("div", _hoisted_149, toDisplayString(valSensaciones.value[7]), 1)) : createCommentVNode("", true),
                          row.intensidad === "8" ? (openBlock(), createElementBlock("div", _hoisted_150, toDisplayString(valSensaciones.value[8]), 1)) : createCommentVNode("", true),
                          row.intensidad === "9" ? (openBlock(), createElementBlock("div", _hoisted_151, toDisplayString(valSensaciones.value[9]), 1)) : createCommentVNode("", true),
                          row.intensidad === "10" ? (openBlock(), createElementBlock("div", _hoisted_152, toDisplayString(valSensaciones.value[10]), 1)) : createCommentVNode("", true),
                          row.intensidad === "Z1" ? (openBlock(), createElementBlock("div", _hoisted_153, [
                            createTextVNode(toDisplayString(props.dFC.z1min) + " ", 1),
                            _hoisted_154,
                            createTextVNode(" " + toDisplayString(props.dFC.z1max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z2" ? (openBlock(), createElementBlock("div", _hoisted_155, [
                            createTextVNode(toDisplayString(props.dFC.z2min) + " ", 1),
                            _hoisted_156,
                            createTextVNode(" " + toDisplayString(props.dFC.z2max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z3" ? (openBlock(), createElementBlock("div", _hoisted_157, [
                            createTextVNode(toDisplayString(props.dFC.z3min) + " ", 1),
                            _hoisted_158,
                            createTextVNode(" " + toDisplayString(props.dFC.z3max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z4" ? (openBlock(), createElementBlock("div", _hoisted_159, [
                            createTextVNode(toDisplayString(props.dFC.z4min) + " ", 1),
                            _hoisted_160,
                            createTextVNode(" " + toDisplayString(props.dFC.z4max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "Z5" ? (openBlock(), createElementBlock("div", _hoisted_161, [
                            createTextVNode(toDisplayString(props.dFC.z5min) + " ", 1),
                            _hoisted_162,
                            createTextVNode(" " + toDisplayString(props.dFC.z5max), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R0" ? (openBlock(), createElementBlock("div", _hoisted_163, toDisplayString(props.dZR.R0max), 1)) : createCommentVNode("", true),
                          row.intensidad === "R1" ? (openBlock(), createElementBlock("div", _hoisted_164, [
                            createTextVNode(toDisplayString(props.dZR.R1max) + " ", 1),
                            _hoisted_165,
                            createTextVNode(" " + toDisplayString(props.dZR.R1min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R2" ? (openBlock(), createElementBlock("div", _hoisted_166, [
                            createTextVNode(toDisplayString(props.dZR.R2max) + " ", 1),
                            _hoisted_167,
                            createTextVNode(" " + toDisplayString(props.dZR.R2min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R3" ? (openBlock(), createElementBlock("div", _hoisted_168, [
                            createTextVNode(toDisplayString(props.dZR.R3max) + " ", 1),
                            _hoisted_169,
                            createTextVNode(" " + toDisplayString(props.dZR.R3min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R3+" ? (openBlock(), createElementBlock("div", _hoisted_170, [
                            createTextVNode(toDisplayString(props.dZR.R3pmax) + " ", 1),
                            _hoisted_171,
                            createTextVNode(" " + toDisplayString(props.dZR.R3pmin), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R4" ? (openBlock(), createElementBlock("div", _hoisted_172, [
                            createTextVNode(toDisplayString(props.dZR.R4max) + " ", 1),
                            _hoisted_173,
                            createTextVNode(" " + toDisplayString(props.dZR.R4min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R5" ? (openBlock(), createElementBlock("div", _hoisted_174, [
                            createTextVNode(toDisplayString(props.dZR.R5max) + " ", 1),
                            _hoisted_175,
                            createTextVNode(" " + toDisplayString(props.dZR.R5min), 1)
                          ])) : createCommentVNode("", true),
                          row.intensidad === "R6" ? (openBlock(), createElementBlock("div", _hoisted_176, toDisplayString(props.dZR.R6min), 1)) : createCommentVNode("", true)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_177, _hoisted_179))
                      ], 64)) : createCommentVNode("", true),
                      column.key === "eliminar" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
                        props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_180, [
                          createVNode(_component_VIconButton, {
                            icon: "feather:trash",
                            color: "danger",
                            circle: "",
                            outlined: "",
                            onKeydown: withKeys(withModifiers(($event) => eliminarBloque(index, row.fase, row), ["prevent"]), ["space"]),
                            onClick: ($event) => eliminarBloque(index, row.fase, row)
                          }, null, 8, ["onKeydown", "onClick"])
                        ])) : createCommentVNode("", true)
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["data", "columns"]),
                  createBaseVNode("div", _hoisted_181, [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VTextarea, {
                          modelValue: unref(comentarios_fase_calma),
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(comentarios_fase_calma) ? comentarios_fase_calma.value = $event : comentarios_fase_calma = $event),
                          class: "textarea is-info-focus",
                          rows: "2",
                          placeholder: "Ingresa comentarios",
                          disabled: __props.opcionactual === "ver"
                        }, null, 8, ["modelValue", "disabled"])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        _hoisted_182,
        hayBloques.value ? (openBlock(), createElementBlock("div", _hoisted_183, [
          createBaseVNode("div", _hoisted_184, [
            createBaseVNode("h3", _hoisted_185, "Distancia Rutina: " + toDisplayString(unref(tiempoTotalComputed)) + " km", 1)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6a2106c4"]]);
export { GET_TIPOS_INTENSIDAD_RUTINAS as G, TIPO_MEDICION_RUTINA as T, __unplugin_components_5 as _, __unplugin_components_4 as a, TIPO_BLOQUE_TEST as b };
