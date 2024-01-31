import { _ as _sfc_main$d } from "./VFlex.59ff65c3.js";
import { c as useForm, a as __unplugin_components_2, b as _sfc_main$c } from "./VControl.bc2cde1a.js";
import { _ as _sfc_main$b } from "./VFlexItem.0d122dff.js";
import { _ as _sfc_main$a } from "./VTextarea.5cd5a703.js";
import { _ as _sfc_main$7, a as _sfc_main$9 } from "./VFlexTable.77127372.js";
import { _ as _sfc_main$8 } from "./VIconButton.666e1b24.js";
import { y as defineComponent, o as openBlock, i as createElementBlock, Q as withKeys, v as withModifiers, l as createCommentVNode, j as createBaseVNode, g as renderSlot, k as normalizeClass, V as _export_sfc, z as ref, r as reactive, e as computed, C as watch, A as onMounted, p as resolveComponent, q as createVNode, w as withCtx, D as unref, t as toDisplayString, F as Fragment, s as renderList, f as createBlock, m as createTextVNode, G as isRef, ae as pushScopeId, af as popScopeId, O as _sfc_main$6 } from "./index.aedac316.js";
import { _ as _sfc_main$5 } from "./VInput.7ffb3812.js";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./VOption.b597c93e.js";
import { a as convertirMinutosAHMS, l as labelEsfuerzo, t as toFixedIfNecessary } from "./general.a67d6d2f.js";
import { N as Notyf } from "./notyf.es.f84e4201.js";
var VMessage_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "message-body" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    color: { default: void 0 },
    closable: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["message", [props.color && `is-${props.color}`]])
      }, [
        props.closable ? (openBlock(), createElementBlock("a", {
          key: 0,
          "aria-label": "Dismiss",
          class: "delete",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("close"), ["prevent"]))
        }, null, 32)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_1$2, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
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
const TIPO_BLOQUE = [
  "Calentamiento",
  "Enfriamiento",
  "Estiramiento",
  "Recuperaci\xF3n",
  "Ritmo"
];
const TIPO_TERRENO = [
  "Cuesta",
  "Campo traviesa",
  "LLano",
  "Monta\xF1a",
  "Pista",
  "Por asignar"
];
const TIPO_BLOQUE_TEST = [
  { bloque: "calentamiento", tipo: "Movilidad artucular" },
  { bloque: "calentamiento", tipo: "Activacion" },
  { bloque: "central", tipo: "Carrera" },
  { bloque: "central", tipo: "Recuperacion" }
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
const _withScopeId$1 = (n) => (pushScopeId("data-v-6f25c006"), n = n(), popScopeId(), n);
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
  class: "columns is-mobile sticky"
};
const _hoisted_13$1 = {
  style: { "display": "none" },
  class: "column"
};
const _hoisted_14$1 = {
  style: { "display": "none" },
  class: "column"
};
const _hoisted_15$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_16$1 = {
  style: { "display": "none" },
  class: "column"
};
const _hoisted_17$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_18$1 = {
  style: { "display": "none" },
  class: "column"
};
const _hoisted_19$1 = { class: "column is-12" };
const _hoisted_20$1 = { class: "columns is-mobile is-multiline" };
const _hoisted_21$1 = { class: "column is-4 column-gap" };
const _hoisted_22$1 = /* @__PURE__ */ createTextVNode("Bloque calentamiento ");
const _hoisted_23$1 = { class: "contador" };
const _hoisted_24$1 = { class: "column is-4 column-gap" };
const _hoisted_25$1 = /* @__PURE__ */ createTextVNode("Bloque central ");
const _hoisted_26$1 = { class: "contador" };
const _hoisted_27$1 = { class: "column is-4 column-gap" };
const _hoisted_28$1 = /* @__PURE__ */ createTextVNode("Bloque vuelta a la calma ");
const _hoisted_29$1 = { class: "contador" };
const _hoisted_30$1 = {
  key: 2,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_31$1 = /* @__PURE__ */ createTextVNode("Fase Calentamiento");
const _hoisted_32$1 = { class: "invoice-wrapper" };
const _hoisted_33$1 = { class: "invoice-body" };
const _hoisted_34$1 = { class: "invoice-card" };
const _hoisted_35$1 = { class: "invoice-section" };
const _hoisted_36$1 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_37$1 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_38$1 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_39$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_40$1 = { key: 0 };
const _hoisted_41$1 = { key: 1 };
const _hoisted_42$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "Z1:", -1));
const _hoisted_43$1 = /* @__PURE__ */ createTextVNode(" Aerobico ligero ");
const _hoisted_44$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "Z2:", -1));
const _hoisted_45$1 = /* @__PURE__ */ createTextVNode(" Aerobico medio ");
const _hoisted_46$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "Z3:", -1));
const _hoisted_47$1 = /* @__PURE__ */ createTextVNode(" Aerobico intenso ");
const _hoisted_48$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "Z4:", -1));
const _hoisted_49$1 = /* @__PURE__ */ createTextVNode(" Umbral anaerobico ");
const _hoisted_50$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "Z5:", -1));
const _hoisted_51$1 = /* @__PURE__ */ createTextVNode(" Maxima intensidad ");
const _hoisted_52$1 = [
  _hoisted_42$1,
  _hoisted_43$1,
  _hoisted_44$1,
  _hoisted_45$1,
  _hoisted_46$1,
  _hoisted_47$1,
  _hoisted_48$1,
  _hoisted_49$1,
  _hoisted_50$1,
  _hoisted_51$1
];
const _hoisted_53$1 = { key: 2 };
const _hoisted_54$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "R0:", -1));
const _hoisted_55$1 = /* @__PURE__ */ createTextVNode(" Regenerativo ");
const _hoisted_56$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "R1:", -1));
const _hoisted_57$1 = /* @__PURE__ */ createTextVNode(" Umbral aerobico ");
const _hoisted_58$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "R2:", -1));
const _hoisted_59$1 = /* @__PURE__ */ createTextVNode(" Umbral anaerobico ");
const _hoisted_60$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "R3:", -1));
const _hoisted_61$1 = /* @__PURE__ */ createTextVNode(" Vo2 submaximo ");
const _hoisted_62$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "R3+:", -1));
const _hoisted_63$1 = /* @__PURE__ */ createTextVNode(" Vo2 maximo ");
const _hoisted_64$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "R4:", -1));
const _hoisted_65$1 = /* @__PURE__ */ createTextVNode(" Capacidad aer\xF3bica ");
const _hoisted_66$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "R5:", -1));
const _hoisted_67$1 = /* @__PURE__ */ createTextVNode(" Potencia anaerobica ");
const _hoisted_68$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("strong", null, "R6:", -1));
const _hoisted_69$1 = /* @__PURE__ */ createTextVNode(" Potencia alactica ");
const _hoisted_70$1 = [
  _hoisted_54$1,
  _hoisted_55$1,
  _hoisted_56$1,
  _hoisted_57$1,
  _hoisted_58$1,
  _hoisted_59$1,
  _hoisted_60$1,
  _hoisted_61$1,
  _hoisted_62$1,
  _hoisted_63$1,
  _hoisted_64$1,
  _hoisted_65$1,
  _hoisted_66$1,
  _hoisted_67$1,
  _hoisted_68$1,
  _hoisted_69$1
];
const _hoisted_71$1 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_72$1 = {
  key: 1,
  class: "text"
};
const _hoisted_73$1 = {
  key: 1,
  class: "dos_puntos",
  for: "dots"
};
const _hoisted_74$1 = {
  key: 3,
  class: "text"
};
const _hoisted_75$1 = {
  key: 1,
  class: "text"
};
const _hoisted_76$1 = { key: 0 };
const _hoisted_77$1 = { key: 1 };
const _hoisted_78$1 = { key: 0 };
const _hoisted_79$1 = {
  key: 3,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_80$1 = /* @__PURE__ */ createTextVNode("Fase Centrales");
const _hoisted_81$1 = { class: "invoice-wrapper" };
const _hoisted_82$1 = { class: "invoice-body" };
const _hoisted_83$1 = { class: "invoice-card" };
const _hoisted_84$1 = { class: "invoice-section" };
const _hoisted_85$1 = { class: "m-0" };
const _hoisted_86$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("label", { for: "repetir" }, "Repetir:", -1));
const _hoisted_87$1 = { key: 1 };
const _hoisted_88$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "init" }, "Inicio Serie", -1));
const _hoisted_89$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_90$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "end" }, "Final Serie", -1));
const _hoisted_91$1 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_92$1 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_93$1 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_94$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_95$1 = { key: 0 };
const _hoisted_96$1 = { key: 1 };
const _hoisted_97$1 = { key: 2 };
const _hoisted_98$1 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_99$1 = {
  key: 1,
  class: "text"
};
const _hoisted_100$1 = {
  key: 1,
  class: "dos_puntos",
  for: "dots"
};
const _hoisted_101$1 = {
  key: 3,
  class: "text"
};
const _hoisted_102$1 = {
  key: 1,
  class: "text"
};
const _hoisted_103$1 = /* @__PURE__ */ createTextVNode(" Inicio ");
const _hoisted_104$1 = /* @__PURE__ */ createTextVNode(" Final ");
const _hoisted_105$1 = { key: 0 };
const _hoisted_106$1 = { key: 1 };
const _hoisted_107$1 = { key: 0 };
const _hoisted_108$1 = {
  key: 4,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_109$1 = /* @__PURE__ */ createTextVNode("Fase vuelta a la calma");
const _hoisted_110$1 = { class: "invoice-wrapper" };
const _hoisted_111$1 = { class: "invoice-body" };
const _hoisted_112$1 = { class: "invoice-card" };
const _hoisted_113$1 = { class: "invoice-section" };
const _hoisted_114$1 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_115$1 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_116$1 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_117$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_118$1 = { key: 0 };
const _hoisted_119$1 = { key: 1 };
const _hoisted_120$1 = { key: 2 };
const _hoisted_121$1 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_122 = {
  key: 1,
  class: "text"
};
const _hoisted_123 = {
  key: 1,
  class: "dos_puntos",
  for: "dots"
};
const _hoisted_124 = {
  key: 3,
  class: "text"
};
const _hoisted_125 = {
  key: 1,
  class: "text"
};
const _hoisted_126 = { key: 0 };
const _hoisted_127 = { key: 1 };
const _hoisted_128 = { key: 0 };
const _hoisted_129 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "columns" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
    /* @__PURE__ */ createBaseVNode("hr", { style: { "background-color": "gray", "height": "1px", "opacity": "0.5" } })
  ])
], -1));
const _hoisted_130 = {
  key: 5,
  class: "columns flotar"
};
const _hoisted_131 = { class: "column" };
const _hoisted_132 = { style: { "font-weight": "bold" } };
const _hoisted_133 = /* @__PURE__ */ createTextVNode(" Total ");
const _hoisted_134 = /* @__PURE__ */ createTextVNode(" Clic para mostrar subtotales ");
const _hoisted_135 = { key: 0 };
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
    const mostrarSubTotales = ref(false);
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
    const tiempoTotal = computed(() => {
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
      minutos = convertirMinutosAHMS(minutos);
      return {
        total: minutos,
        calentamiento: convertirMinutosAHMS(minCalen),
        central: convertirMinutosAHMS(minCentral),
        calma: convertirMinutosAHMS(minCalma)
      };
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
        valSensaciones.value = GET_OPCIONES_INSIDAD_RUTINA(
          props.datosrutina.tipo_esfuerzo
        ).valuesDeportista;
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
      if (props.opcionactual === "editar" || props.opcionactual === "ver") {
        let valido = true;
        props.datosrutina.bloques.forEach((bloque) => {
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
      comentarios_fase_calentamiento.value = props.datosrutina.comentarios_fase_calentamiento || "";
      comentarios_fase_central.value = props.datosrutina.comentarios_fase_central || "";
      comentarios_fase_calma.value = props.datosrutina.comentarios_fase_calma || "";
      rept_centrales.value = props.datosrutina.rept_centrales || 1;
    });
    const { handleSubmit } = useForm({
      initialValues: {
        duracion_min: 5,
        duracion_seg: 0
      }
    });
    const agregarBloqueCalentamiento = handleSubmit(() => {
      bloquesCalentamiento.value += 1;
      datosNuevoBloque.tipo = tiposDeBloque[0].label;
      datosNuevoBloque.fase = "calentamiento";
      emits("agregar", datosNuevoBloque);
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      nuevoBloqueCalentamiento.value = !nuevoBloqueCalentamiento.value;
    });
    const agregarBloqueCentral = handleSubmit(() => {
      bloquesCentrales.value += 1;
      datosNuevoBloque.tipo = tiposDeBloque[0].label;
      datosNuevoBloque.fase = "central";
      emits("agregar", datosNuevoBloque);
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      nuevoBloqueCentral.value = !nuevoBloqueCentral.value;
    });
    const agregarBloqueVueltaALaCalma = handleSubmit(() => {
      bloquesVueltaALaCalma.value += 1;
      datosNuevoBloque.tipo = tiposDeBloque[0].label;
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
    const columns = reactive({
      tipo: { label: "Tipo", align: "center" },
      duracion_min: { label: "min:seg", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: { label: labelEsfuerzo(props.datosrutina.tipo_esfuerzo), align: "center" },
      eliminar: { label: "Eliminar", align: "center" }
    });
    const columnsCentral = reactive({
      tipo: { label: "Tipo", align: "center" },
      duracion_min: { label: "min:seg", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: { label: labelEsfuerzo(props.datosrutina.tipo_esfuerzo), align: "center" },
      serie: { label: "Serie", align: "center" },
      eliminar: { label: "Eliminar", align: "center" }
    });
    const columns_ver_rutina = reactive({
      tipo: { label: "Tipo", align: "center" },
      duracion_min: { label: "min:seg", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: { label: labelEsfuerzo(props.datosrutina.tipo_esfuerzo), align: "center" }
    });
    let comentarios_fase_calentamiento = ref();
    let comentarios_fase_central = ref();
    let comentarios_fase_calma = ref();
    const rept_centrales = ref(0);
    const mostrarTodo = () => {
      mostrarSubTotales.value = !mostrarSubTotales.value;
    };
    watch(
      () => props.datosrutina.tipo_esfuerzo,
      (nuevo) => {
        columns.rango = nuevo;
        columnsCentral.rango = nuevo;
      }
    );
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
      const _component_VButton = _sfc_main$6;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VFlexTableCell = _sfc_main$7;
      const _component_VistaRangos = resolveComponent("VistaRangos");
      const _component_VIconButton = _sfc_main$8;
      const _component_VFlexTable = _sfc_main$9;
      const _component_VTextarea = _sfc_main$a;
      const _component_VFlexItem = _sfc_main$b;
      const _component_VField = _sfc_main$c;
      const _component_VFlex = _sfc_main$d;
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
        __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
          createBaseVNode("div", _hoisted_13$1, [
            createVNode(_component_VControl, null, {
              default: withCtx(() => [
                createVNode(_component_VSelect, {
                  modelValue: unref(datosNuevoBloque).tipo,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(datosNuevoBloque).tipo = $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tipoBloque), (deporte, index) => {
                      return openBlock(), createBlock(_component_VOption, {
                        key: index,
                        value: deporte
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(deporte), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_14$1, [
            createVNode(_component_VControl, { id: "duracion_min" }, {
              default: withCtx(({ field }) => [
                createVNode(_component_VInput, {
                  modelValue: unref(datosNuevoBloque).duracion_min,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(datosNuevoBloque).duracion_min = $event),
                  modelModifiers: { number: true },
                  type: "text",
                  placeholder: "Ingrese duraci\xF3n en minutos"
                }, null, 8, ["modelValue"]),
                (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_15$1, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_16$1, [
            createVNode(_component_VControl, { id: "duracion_seg" }, {
              default: withCtx(({ field }) => [
                createVNode(_component_VInput, {
                  modelValue: unref(datosNuevoBloque).duracion_seg,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(datosNuevoBloque).duracion_seg = $event),
                  modelModifiers: { number: true },
                  type: "text",
                  placeholder: "Ingrese duraci\xF3n en segundos"
                }, null, 8, ["modelValue"]),
                (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_17$1, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_18$1, [
            createVNode(_component_VControl, null, {
              default: withCtx(() => [
                createVNode(_component_VSelect, {
                  modelValue: unref(datosNuevoBloque).intensidad,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(datosNuevoBloque).intensidad = $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, index) => {
                      return openBlock(), createBlock(_component_VOption, {
                        key: index,
                        value: deporte
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(deporte), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_19$1, [
            createBaseVNode("div", _hoisted_20$1, [
              createBaseVNode("div", _hoisted_21$1, [
                createVNode(_component_VButton, {
                  class: "btn",
                  icon: "feather:plus",
                  color: "success",
                  onKeydown: withKeys(withModifiers(unref(agregarBloqueCalentamiento), ["prevent"]), ["space"]),
                  onClick: unref(agregarBloqueCalentamiento)
                }, {
                  default: withCtx(() => [
                    _hoisted_22$1,
                    createBaseVNode("span", _hoisted_23$1, toDisplayString(bloquesCalentamiento.value), 1)
                  ]),
                  _: 1
                }, 8, ["onKeydown", "onClick"])
              ]),
              createBaseVNode("div", _hoisted_24$1, [
                createVNode(_component_VButton, {
                  class: "btn",
                  icon: "feather:plus",
                  color: "success",
                  onKeydown: withKeys(withModifiers(unref(agregarBloqueCentral), ["prevent"]), ["space"]),
                  onClick: unref(agregarBloqueCentral)
                }, {
                  default: withCtx(() => [
                    _hoisted_25$1,
                    createBaseVNode("span", _hoisted_26$1, toDisplayString(bloquesCentrales.value), 1)
                  ]),
                  _: 1
                }, 8, ["onKeydown", "onClick"])
              ]),
              createBaseVNode("div", _hoisted_27$1, [
                createVNode(_component_VButton, {
                  class: "btn",
                  icon: "feather:plus",
                  color: "success",
                  onKeydown: withKeys(withModifiers(unref(agregarBloqueVueltaALaCalma), ["prevent"]), ["space"]),
                  onClick: unref(agregarBloqueVueltaALaCalma)
                }, {
                  default: withCtx(() => [
                    _hoisted_28$1,
                    createBaseVNode("span", _hoisted_29$1, toDisplayString(bloquesVueltaALaCalma.value), 1)
                  ]),
                  _: 1
                }, 8, ["onKeydown", "onClick"])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        bloquesCalenta.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_30$1, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_31$1
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_32$1, [
            createBaseVNode("div", _hoisted_33$1, [
              createBaseVNode("div", _hoisted_34$1, [
                createBaseVNode("div", _hoisted_35$1, [
                  createVNode(_component_VFlexTable, {
                    data: bloquesCalenta.value,
                    columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                    rounded: "",
                    reactive: ""
                  }, {
                    "header-column": withCtx(({ column }) => [
                      column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_36$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                      column.key === "duracion_min" ? (openBlock(), createElementBlock("span", _hoisted_37$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_38$1, [
                        createTextVNode(toDisplayString(column.label) + " ", 1),
                        props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                          content: withCtx(() => [
                            createBaseVNode("section", null, [
                              props.datosrutina.tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_40$1, " Sensaciones ")) : createCommentVNode("", true),
                              props.datosrutina.tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("label", _hoisted_41$1, _hoisted_52$1)) : createCommentVNode("", true),
                              props.datosrutina.tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("label", _hoisted_53$1, _hoisted_70$1)) : createCommentVNode("", true)
                            ])
                          ]),
                          default: withCtx(() => [
                            _hoisted_39$1
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_71$1, toDisplayString(column.label), 1)) : createCommentVNode("", true)
                    ]),
                    "body-cell": withCtx(({ column, row, index }) => [
                      column.key === "tipo" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 0,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            fullwidth: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: row.tipo,
                                "onUpdate:modelValue": ($event) => row.tipo = $event,
                                class: "is-rounded"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposDeBloque), (deporte, indexTp) => {
                                    return openBlock(), createBlock(_component_VOption, {
                                      key: indexTp,
                                      value: deporte.label
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(deporte.label), 1)
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
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_72$1, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "duracion_min" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 1,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: row.duracion_min,
                                "onUpdate:modelValue": ($event) => row.duracion_min = $event,
                                modelModifiers: { number: true },
                                class: "is-rounded",
                                type: "number",
                                min: "0",
                                placeholder: "mm"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("label", _hoisted_73$1, " : ")) : createCommentVNode("", true),
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 2 }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: row.duracion_seg,
                                "onUpdate:modelValue": ($event) => row.duracion_seg = $event,
                                modelModifiers: { number: true },
                                class: "is-rounded",
                                type: "number",
                                min: "0",
                                placeholder: "ss"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_74$1, toDisplayString(row.duracion_min) + ":" + toDisplayString(row.duracion_seg), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 2,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            fullwidth: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: row.intensidad,
                                "onUpdate:modelValue": ($event) => row.intensidad = $event,
                                class: "is-rounded"
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
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_75$1, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 3,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VistaRangos, {
                            "lengthd-f-c": Object.keys(props.dFC).length,
                            intensidad: row.intensidad,
                            "val-sensaciones": valSensaciones.value,
                            "d-f-c": __props.dFC,
                            "d-z-r": __props.dZR
                          }, null, 8, ["lengthd-f-c", "intensidad", "val-sensaciones", "d-f-c", "d-z-r"])
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "eliminar" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 4,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_76$1, [
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
                  }, 8, ["data", "columns"]),
                  props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_VTextarea, {
                        modelValue: unref(comentarios_fase_calentamiento),
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(comentarios_fase_calentamiento) ? comentarios_fase_calentamiento.value = $event : comentarios_fase_calentamiento = $event),
                        class: "textarea is-info-focus",
                        rows: "2",
                        placeholder: "Ingresa comentarios",
                        disabled: __props.opcionactual === "ver"
                      }, null, 8, ["modelValue", "disabled"])
                    ]),
                    _: 1
                  })) : (openBlock(), createElementBlock("span", _hoisted_77$1, [
                    unref(comentarios_fase_calentamiento).length > 0 ? (openBlock(), createElementBlock("p", _hoisted_78$1, toDisplayString(unref(comentarios_fase_calentamiento)), 1)) : createCommentVNode("", true)
                  ]))
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        bloquesCent.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_79$1, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_80$1
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_81$1, [
            createBaseVNode("div", _hoisted_82$1, [
              createBaseVNode("div", _hoisted_83$1, [
                createBaseVNode("div", _hoisted_84$1, [
                  createBaseVNode("fieldset", _hoisted_85$1, [
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
                              _hoisted_86$1
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
                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => rept_centrales.value = $event),
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
                      })) : (openBlock(), createElementBlock("div", _hoisted_87$1, [
                        _hoisted_88$1,
                        _hoisted_89$1,
                        _hoisted_90$1,
                        createTextVNode("x" + toDisplayString(rept_centrales.value), 1)
                      ]))
                    ], 2)) : createCommentVNode("", true),
                    createVNode(_component_VFlexTable, {
                      data: bloquesCent.value,
                      columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columnsCentral) : unref(columns_ver_rutina),
                      rounded: "",
                      reactive: ""
                    }, {
                      "header-column": withCtx(({ column }) => [
                        column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_91$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "duracion_min" ? (openBlock(), createElementBlock("span", _hoisted_92$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_93$1, [
                          createTextVNode(toDisplayString(column.label) + " ", 1),
                          props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                            content: withCtx(() => [
                              createBaseVNode("section", null, [
                                props.datosrutina.tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_95$1, " Sensaciones ")) : createCommentVNode("", true),
                                props.datosrutina.tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("p", _hoisted_96$1, " Z1: Aerobico ligero Z2: Aerobico medio Z3: Aerobico intenso Z4: Umbral anaerobico Z5: Maxima intensidad ")) : createCommentVNode("", true),
                                props.datosrutina.tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("p", _hoisted_97$1, " R0: Regenerativo R1: Umbral aerobico R2: Umbral anaerobico R3: Vo2 submaximo R3+: Vo2 maximo R4: Capacidad aer\xF3bica R5: Potencia anaerobica R6: Potencia alactica ")) : createCommentVNode("", true)
                              ])
                            ]),
                            default: withCtx(() => [
                              _hoisted_94$1
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_98$1, toDisplayString(column.label), 1)) : createCommentVNode("", true)
                      ]),
                      "body-cell": withCtx(({ column, row, index }) => [
                        column.key === "tipo" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 0,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                              key: 0,
                              fullwidth: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: row.tipo,
                                  "onUpdate:modelValue": ($event) => row.tipo = $event,
                                  class: "is-rounded"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposDeBloque), (deporte, indexTp) => {
                                      return openBlock(), createBlock(_component_VOption, {
                                        key: indexTp,
                                        value: deporte.label
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deporte.label), 1)
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
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_99$1, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "duracion_min" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 1,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: row.duracion_min,
                                  "onUpdate:modelValue": ($event) => row.duracion_min = $event,
                                  modelModifiers: { number: true },
                                  class: "is-rounded",
                                  type: "number",
                                  min: "0",
                                  placeholder: "mm"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("label", _hoisted_100$1, " : ")) : createCommentVNode("", true),
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 2 }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: row.duracion_seg,
                                  "onUpdate:modelValue": ($event) => row.duracion_seg = $event,
                                  modelModifiers: { number: true },
                                  class: "is-rounded",
                                  type: "number",
                                  min: "0",
                                  placeholder: "ss"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_101$1, toDisplayString(row.duracion_min) + ":" + toDisplayString(row.duracion_seg), 1)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "intensidad" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 2,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                              key: 0,
                              fullwidth: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: row.intensidad,
                                  "onUpdate:modelValue": ($event) => row.intensidad = $event,
                                  class: "is-rounded"
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
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_102$1, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 3,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VistaRangos, {
                              "lengthd-f-c": Object.keys(props.dFC).length,
                              intensidad: row.intensidad,
                              "val-sensaciones": valSensaciones.value,
                              "d-f-c": __props.dFC,
                              "d-z-r": __props.dZR
                            }, null, 8, ["lengthd-f-c", "intensidad", "val-sensaciones", "d-f-c", "d-z-r"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "serie" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 4,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                              key: 0,
                              fullwidth: ""
                            }, {
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
                                        _hoisted_103$1
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(_component_VOption, {
                                      value: "final",
                                      onClick: ($event) => marcar("final", index)
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_104$1
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(_component_VOption, { value: null })
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "eliminar" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 5,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_105$1, [
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
                  props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_VTextarea, {
                        modelValue: unref(comentarios_fase_central),
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(comentarios_fase_central) ? comentarios_fase_central.value = $event : comentarios_fase_central = $event),
                        class: "textarea is-info-focus",
                        rows: "2",
                        placeholder: "Ingresa comentarios",
                        disabled: __props.opcionactual === "ver"
                      }, null, 8, ["modelValue", "disabled"])
                    ]),
                    _: 1
                  })) : (openBlock(), createElementBlock("span", _hoisted_106$1, [
                    unref(comentarios_fase_central).length > 0 ? (openBlock(), createElementBlock("p", _hoisted_107$1, toDisplayString(unref(comentarios_fase_central)), 1)) : createCommentVNode("", true)
                  ]))
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        bloquesCalma.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_108$1, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_109$1
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_110$1, [
            createBaseVNode("div", _hoisted_111$1, [
              createBaseVNode("div", _hoisted_112$1, [
                createBaseVNode("div", _hoisted_113$1, [
                  createVNode(_component_VFlexTable, {
                    data: bloquesCalma.value,
                    columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                    rounded: "",
                    reactive: ""
                  }, {
                    "header-column": withCtx(({ column }) => [
                      column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_114$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                      column.key === "duracion_min" ? (openBlock(), createElementBlock("span", _hoisted_115$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_116$1, [
                        createTextVNode(toDisplayString(column.label) + " ", 1),
                        props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                          content: withCtx(() => [
                            createBaseVNode("section", null, [
                              props.datosrutina.tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_118$1, " Sensaciones ")) : createCommentVNode("", true),
                              props.datosrutina.tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("p", _hoisted_119$1, " Z1: Aerobico ligero Z2: Aerobico medio Z3: Aerobico intenso Z4: Umbral anaerobico Z5: Maxima intensidad ")) : createCommentVNode("", true),
                              props.datosrutina.tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("p", _hoisted_120$1, " R0: Regenerativo R1: Umbral aerobico R2: Umbral anaerobico R3: Vo2 submaximo R3+: Vo2 maximo R4: Capacidad aer\xF3bica R5: Potencia anaerobica R6: Potencia alactica ")) : createCommentVNode("", true)
                            ])
                          ]),
                          default: withCtx(() => [
                            _hoisted_117$1
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_121$1, toDisplayString(column.label), 1)) : createCommentVNode("", true)
                    ]),
                    "body-cell": withCtx(({ column, row, index }) => [
                      column.key === "tipo" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 0,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            fullwidth: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: row.tipo,
                                "onUpdate:modelValue": ($event) => row.tipo = $event,
                                class: "is-rounded"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposDeBloque), (deporte, indexTp) => {
                                    return openBlock(), createBlock(_component_VOption, {
                                      key: indexTp,
                                      value: deporte.label
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(deporte.label), 1)
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
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_122, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "duracion_min" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 1,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: row.duracion_min,
                                "onUpdate:modelValue": ($event) => row.duracion_min = $event,
                                modelModifiers: { number: true },
                                class: "is-rounded",
                                type: "number",
                                min: "0",
                                placeholder: "mm"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("label", _hoisted_123, " : ")) : createCommentVNode("", true),
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 2 }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: row.duracion_seg,
                                "onUpdate:modelValue": ($event) => row.duracion_seg = $event,
                                modelModifiers: { number: true },
                                class: "is-rounded",
                                type: "number",
                                min: "0",
                                placeholder: "ss"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_124, toDisplayString(row.duracion_min) + ":" + toDisplayString(row.duracion_seg), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 2,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            fullwidth: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: row.intensidad,
                                "onUpdate:modelValue": ($event) => row.intensidad = $event,
                                class: "is-rounded"
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
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_125, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 3,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VistaRangos, {
                            "lengthd-f-c": Object.keys(props.dFC).length,
                            intensidad: row.intensidad,
                            "val-sensaciones": valSensaciones.value,
                            "d-f-c": __props.dFC,
                            "d-z-r": __props.dZR
                          }, null, 8, ["lengthd-f-c", "intensidad", "val-sensaciones", "d-f-c", "d-z-r"])
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "eliminar" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 4,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_126, [
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
                  }, 8, ["data", "columns"]),
                  props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_VTextarea, {
                        modelValue: unref(comentarios_fase_calma),
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(comentarios_fase_calma) ? comentarios_fase_calma.value = $event : comentarios_fase_calma = $event),
                        class: "textarea is-info-focus",
                        rows: "2",
                        placeholder: "Ingresa comentarios",
                        disabled: __props.opcionactual === "ver"
                      }, null, 8, ["modelValue", "disabled"])
                    ]),
                    _: 1
                  })) : (openBlock(), createElementBlock("span", _hoisted_127, [
                    unref(comentarios_fase_calma).length > 0 ? (openBlock(), createElementBlock("p", _hoisted_128, toDisplayString(unref(comentarios_fase_calma)), 1)) : createCommentVNode("", true)
                  ]))
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        _hoisted_129,
        hayBloques.value ? (openBlock(), createElementBlock("div", _hoisted_130, [
          createBaseVNode("div", _hoisted_131, [
            createBaseVNode("h3", _hoisted_132, [
              createBaseVNode("label", {
                onClick: _cache[8] || (_cache[8] = ($event) => mostrarTodo()),
                onKeyup: _cache[9] || (_cache[9] = withKeys(withModifiers(($event) => mostrarTodo(), ["prevent"]), ["space"]))
              }, [
                createVNode(_component_Tippy, null, {
                  content: withCtx(() => [
                    _hoisted_134
                  ]),
                  default: withCtx(() => [
                    _hoisted_133
                  ]),
                  _: 1
                })
              ], 32),
              createTextVNode(" (hh:mm:ss) : " + toDisplayString(unref(tiempoTotal).total) + " ", 1),
              mostrarSubTotales.value ? (openBlock(), createElementBlock("label", _hoisted_135, " (calentamiento: " + toDisplayString(unref(tiempoTotal).calentamiento) + ") (central: " + toDisplayString(unref(tiempoTotal).central) + ") (calma: " + toDisplayString(unref(tiempoTotal).calma) + ") ", 1)) : createCommentVNode("", true)
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6f25c006"]]);
const e = { __proto__: null, radian: [0, 1], radians: [0, 1], rad: [0, 1], rads: [0, 1], r: [0, 1], turn: [0, 6.283185307179586], turns: [0, 6.283185307179586], degree: [0, 0.017453292519943295], degrees: [0, 0.017453292519943295], deg: [0, 0.017453292519943295], degs: [0, 0.017453292519943295], "\xB0": [0, 0.017453292519943295], gradian: [0, 0.015707963267948967], gradians: [0, 0.015707963267948967], gon: [0, 0.015707963267948967], gons: [0, 0.015707963267948967], grad: [0, 0.015707963267948967], grads: [0, 0.015707963267948967], grade: [0, 0.015707963267948967], grades: [0, 0.015707963267948967], "square meter": [1, 1], "square meters": [1, 1], "square metre": [1, 1], "square metres": [1, 1], "m\xB2": [1, 1], m2: [1, 1], "square petameter": [1, 1e30], "square petametre": [1, 1e30], "square petameters": [1, 1e30], "square petametres": [1, 1e30], "Pm\xB2": [1, 1e30], Pm2: [1, 1e30], "square terameter": [1, 1e24], "square terametre": [1, 1e24], "square terameters": [1, 1e24], "square terametres": [1, 1e24], "Tm\xB2": [1, 1e24], Tm2: [1, 1e24], "square gigameter": [1, 1e18], "square gigametre": [1, 1e18], "square gigameters": [1, 1e18], "square gigametres": [1, 1e18], "Gm\xB2": [1, 1e18], Gm2: [1, 1e18], "square megameter": [1, 1e12], "square megametre": [1, 1e12], "square megameters": [1, 1e12], "square megametres": [1, 1e12], "Mm\xB2": [1, 1e12], Mm2: [1, 1e12], "square kilometer": [1, 1e6], "square kilometre": [1, 1e6], "square kilometers": [1, 1e6], "square kilometres": [1, 1e6], "km\xB2": [1, 1e6], km2: [1, 1e6], "square hectometer": [1, 1e4], "square hectometre": [1, 1e4], "square hectometers": [1, 1e4], "square hectometres": [1, 1e4], "hm\xB2": [1, 1e4], hm2: [1, 1e4], "square decameter": [1, 100], "square decametre": [1, 100], "square decameters": [1, 100], "square decametres": [1, 100], "dam\xB2": [1, 100], dam2: [1, 100], "square decimeter": [1, 0.1], "square decimetre": [1, 0.1], "square decimeters": [1, 0.1], "square decimetres": [1, 0.1], "dm\xB2": [1, 0.1], dm2: [1, 0.1], "square centimeter": [1, 1e-4], "square centimetre": [1, 1e-4], "square centimeters": [1, 1e-4], "square centimetres": [1, 1e-4], "cm\xB2": [1, 1e-4], cm2: [1, 1e-4], "square millimeter": [1, 1e-6], "square millimetre": [1, 1e-6], "square millimeters": [1, 1e-6], "square millimetres": [1, 1e-6], "mm\xB2": [1, 1e-6], mm2: [1, 1e-6], "square micrometer": [1, 1e-12], "square micrometre": [1, 1e-12], "square micrometers": [1, 1e-12], "square micrometres": [1, 1e-12], "\u03BCm\xB2": [1, 1e-12], \u03BCm2: [1, 1e-12], "square nanometer": [1, 1e-18], "square nanometre": [1, 1e-18], "square nanometers": [1, 1e-18], "square nanometres": [1, 1e-18], "nm\xB2": [1, 1e-18], nm2: [1, 1e-18], "square picometer": [1, 1e-24], "square picometre": [1, 1e-24], "square picometers": [1, 1e-24], "square picometres": [1, 1e-24], "pm\xB2": [1, 1e-24], pm2: [1, 1e-24], "square femtometer": [1, 1e-30], "square femtometre": [1, 1e-30], "square femtometers": [1, 1e-30], "square femtometres": [1, 1e-30], "fm\xB2": [1, 1e-30], fm2: [1, 1e-30], acre: [1, 4046.8564224], acres: [1, 4046.8564224], ac: [1, 4046.8564224], centiare: [1, 1], centiares: [1, 1], ca: [1, 1], deciare: [1, 10], deciares: [1, 10], da: [1, 10], are: [1, 100], ares: [1, 100], decare: [1, 1e3], decares: [1, 1e3], daa: [1, 1e3], hectare: [1, 1e4], hectares: [1, 1e4], ha: [1, 1e4], "square foot": [1, 0.09290304], "square feet": [1, 0.09290304], "sq ft": [1, 0.09290304], "ft\xB2": [1, 0.09290304], ft2: [1, 0.09290304], "square inch": [1, 64516e-8], "square inches": [1, 64516e-8], "sq in": [1, 64516e-8], "in\xB2": [1, 64516e-8], in2: [1, 64516e-8], "square yard": [1, 0.83612736], "square yards": [1, 0.83612736], "sq yd": [1, 0.83612736], "yd\xB2": [1, 0.83612736], yd2: [1, 0.83612736], "square mile": [1, 2589988110336e-6], "square miles": [1, 2589988110336e-6], "sq mi": [1, 2589988110336e-6], "mi\xB2": [1, 2589988110336e-6], mi2: [1, 2589988110336e-6], bit: [2, 1], bits: [2, 1], b: [2, 1], pebibit: [2, 1125899906842624], pebibits: [2, 1125899906842624], Pib: [2, 1125899906842624], tebibit: [2, 1099511627776], tebibits: [2, 1099511627776], Tib: [2, 1099511627776], gibibit: [2, 1073741824], gibibits: [2, 1073741824], Gib: [2, 1073741824], mebibit: [2, 1048576], mebibits: [2, 1048576], Mib: [2, 1048576], kibibit: [2, 1024], kibibits: [2, 1024], Kib: [2, 1024], Kb: [2, 1e3], KB: [2, 8e3], petabit: [2, 1e15], petabits: [2, 1e15], Pb: [2, 1e15], terabit: [2, 1e12], terabits: [2, 1e12], Tb: [2, 1e12], gigabit: [2, 1e9], gigabits: [2, 1e9], Gb: [2, 1e9], megabit: [2, 1e6], megabits: [2, 1e6], Mb: [2, 1e6], kilobit: [2, 1e3], kilobits: [2, 1e3], kb: [2, 1e3], hectobit: [2, 100], hectobits: [2, 100], hb: [2, 100], decabit: [2, 10], decabits: [2, 10], dab: [2, 10], decibit: [2, 0.1], decibits: [2, 0.1], db: [2, 0.1], centibit: [2, 0.01], centibits: [2, 0.01], cb: [2, 0.01], millibit: [2, 1e-3], millibits: [2, 1e-3], mb: [2, 1e-3], microbit: [2, 1e-6], microbits: [2, 1e-6], \u03BCb: [2, 1e-6], nanobit: [2, 1e-9], nanobits: [2, 1e-9], nb: [2, 1e-9], picobit: [2, 1e-12], picobits: [2, 1e-12], pb: [2, 1e-12], femtobit: [2, 1e-15], femtobits: [2, 1e-15], fb: [2, 1e-15], nibble: [2, 4], nibbles: [2, 4], semioctet: [2, 4], semioctets: [2, 4], halfbyte: [2, 4], halfbytes: [2, 4], byte: [2, 8], bytes: [2, 8], octect: [2, 8], octects: [2, 8], B: [2, 8], pebibyte: [2, 9007199254740992], pebibytes: [2, 9007199254740992], PiB: [2, 9007199254740992], tebibyte: [2, 8796093022208], tebibytes: [2, 8796093022208], TiB: [2, 8796093022208], gibibyte: [2, 8589934592], gibibytes: [2, 8589934592], GiB: [2, 8589934592], mebibyte: [2, 8388608], mebibytes: [2, 8388608], MiB: [2, 8388608], kibibyte: [2, 8192], kibibytes: [2, 8192], KiB: [2, 8192], petabyte: [2, 8e15], petabytes: [2, 8e15], PB: [2, 8e15], terabyte: [2, 8e12], terabytes: [2, 8e12], TB: [2, 8e12], gigabyte: [2, 8e9], gigabytes: [2, 8e9], GB: [2, 8e9], megabyte: [2, 8e6], megabytes: [2, 8e6], MB: [2, 8e6], kilobyte: [2, 8e3], kilobytes: [2, 8e3], kB: [2, 8e3], hectobyte: [2, 800], hectobytes: [2, 800], hB: [2, 800], decabyte: [2, 80], decabytes: [2, 80], daB: [2, 80], decibyte: [2, 0.8], decibytes: [2, 0.8], dB: [2, 0.8], centibyte: [2, 0.08], centibytes: [2, 0.08], cB: [2, 0.08], millibyte: [2, 8e-3], millibytes: [2, 8e-3], mB: [2, 8e-3], microbyte: [2, 8e-6], microbytes: [2, 8e-6], \u03BCB: [2, 8e-6], nanobyte: [2, 8e-9], nanobytes: [2, 8e-9], nB: [2, 8e-9], picobyte: [2, 8e-12], picobytes: [2, 8e-12], pB: [2, 8e-12], femtobyte: [2, 8e-15], femtobytes: [2, 8e-15], fB: [2, 8e-15], hextet: [2, 16], hextets: [2, 16], joule: [3, 1], joules: [3, 1], J: [3, 1], petajoule: [3, 1e15], petajoules: [3, 1e15], PJ: [3, 1e15], terajoule: [3, 1e12], terajoules: [3, 1e12], TJ: [3, 1e12], gigajoule: [3, 1e9], gigajoules: [3, 1e9], GJ: [3, 1e9], megajoule: [3, 1e6], megajoules: [3, 1e6], MJ: [3, 1e6], kilojoule: [3, 1e3], kilojoules: [3, 1e3], kJ: [3, 1e3], hectojoule: [3, 100], hectojoules: [3, 100], hJ: [3, 100], decajoule: [3, 10], decajoules: [3, 10], daJ: [3, 10], decijoule: [3, 0.1], decijoules: [3, 0.1], dJ: [3, 0.1], centijoule: [3, 0.01], centijoules: [3, 0.01], cJ: [3, 0.01], millijoule: [3, 1e-3], millijoules: [3, 1e-3], mJ: [3, 1e-3], microjoule: [3, 1e-6], microjoules: [3, 1e-6], \u03BCJ: [3, 1e-6], nanojoule: [3, 1e-9], nanojoules: [3, 1e-9], nJ: [3, 1e-9], picojoule: [3, 1e-12], picojoules: [3, 1e-12], pJ: [3, 1e-12], femtojoule: [3, 1e-15], femtojoules: [3, 1e-15], fJ: [3, 1e-15], "kilowatt-hour": [3, 36e5], "kW\u22C5h": [3, 36e5], "kW h": [3, 36e5], kWh: [3, 36e5], newton: [4, 1], newtons: [4, 1], N: [4, 1], petanewton: [4, 1e15], petanewtons: [4, 1e15], PN: [4, 1e15], teranewton: [4, 1e12], teranewtons: [4, 1e12], TN: [4, 1e12], giganewton: [4, 1e9], giganewtons: [4, 1e9], GN: [4, 1e9], meganewton: [4, 1e6], meganewtons: [4, 1e6], MN: [4, 1e6], kilonewton: [4, 1e3], kilonewtons: [4, 1e3], kN: [4, 1e3], hectonewton: [4, 100], hectonewtons: [4, 100], hN: [4, 100], decanewton: [4, 10], decanewtons: [4, 10], daN: [4, 10], decinewton: [4, 0.1], decinewtons: [4, 0.1], dN: [4, 0.1], centinewton: [4, 0.01], centinewtons: [4, 0.01], cN: [4, 0.01], millinewton: [4, 1e-3], millinewtons: [4, 1e-3], mN: [4, 1e-3], micronewton: [4, 1e-6], micronewtons: [4, 1e-6], \u03BCN: [4, 1e-6], nanonewton: [4, 1e-9], nanonewtons: [4, 1e-9], nN: [4, 1e-9], piconewton: [4, 1e-12], piconewtons: [4, 1e-12], pN: [4, 1e-12], femtonewton: [4, 1e-15], femtonewtons: [4, 1e-15], fN: [4, 1e-15], dyne: [4, 1e-5], dynes: [4, 1e-5], dyn: [4, 1e-5], "pound of force": [4, 4.448222], "pound-force": [4, 4.448222], lbf: [4, 4.448222], kip: [4, 4448.2216], klb: [4, 4448.2216], kipf: [4, 4448.2216], klbf: [4, 4448.2216], poundal: [4, 0.138255], poundals: [4, 0.138255], pdl: [4, 0.138255], "kilogram-force": [4, 9.80665], kilopond: [4, 9.80665], kiloponds: [4, 9.80665], kgf: [4, 9.80665], kp: [4, 9.80665], "tonne-force": [4, 9806.65], "metric ton-force": [4, 9806.65], "megagram-force": [4, 9806.65], megapond: [4, 9806.65], tf: [4, 9806.65], Mp: [4, 9806.65], meter: [5, 1], meters: [5, 1], metre: [5, 1], metres: [5, 1], m: [5, 1], petameter: [5, 1e15], petametre: [5, 1e15], petameters: [5, 1e15], petametres: [5, 1e15], Pm: [5, 1e15], terameter: [5, 1e12], terametre: [5, 1e12], terameters: [5, 1e12], terametres: [5, 1e12], Tm: [5, 1e12], gigameter: [5, 1e9], gigametre: [5, 1e9], gigameters: [5, 1e9], gigametres: [5, 1e9], Gm: [5, 1e9], megameter: [5, 1e6], megametre: [5, 1e6], megameters: [5, 1e6], megametres: [5, 1e6], Mm: [5, 1e6], kilometer: [5, 1e3], kilometre: [5, 1e3], kilometers: [5, 1e3], kilometres: [5, 1e3], km: [5, 1e3], hectometer: [5, 100], hectometre: [5, 100], hectometers: [5, 100], hectometres: [5, 100], hm: [5, 100], decameter: [5, 10], decametre: [5, 10], decameters: [5, 10], decametres: [5, 10], dam: [5, 10], decimeter: [5, 0.1], decimetre: [5, 0.1], decimeters: [5, 0.1], decimetres: [5, 0.1], dm: [5, 0.1], centimeter: [5, 0.01], centimetre: [5, 0.01], centimeters: [5, 0.01], centimetres: [5, 0.01], cm: [5, 0.01], millimeter: [5, 1e-3], millimetre: [5, 1e-3], millimeters: [5, 1e-3], millimetres: [5, 1e-3], mm: [5, 1e-3], micrometer: [5, 1e-6], micrometre: [5, 1e-6], micrometers: [5, 1e-6], micrometres: [5, 1e-6], \u03BCm: [5, 1e-6], nanometer: [5, 1e-9], nanometre: [5, 1e-9], nanometers: [5, 1e-9], nanometres: [5, 1e-9], nm: [5, 1e-9], picometer: [5, 1e-12], picometre: [5, 1e-12], picometers: [5, 1e-12], picometres: [5, 1e-12], pm: [5, 1e-12], femtometer: [5, 1e-15], femtometre: [5, 1e-15], femtometers: [5, 1e-15], femtometres: [5, 1e-15], fm: [5, 1e-15], foot: [5, 0.3048], feet: [5, 0.3048], ft: [5, 0.3048], "'": [5, 0.3048], inch: [5, 0.0254], inches: [5, 0.0254], "in": [5, 0.0254], '"': [5, 0.0254], yard: [5, 0.9144], yards: [5, 0.9144], yd: [5, 0.9144], mile: [5, 1609.344], miles: [5, 1609.344], mi: [5, 1609.344], "nautical mile": [5, 1852], "nautical miles": [5, 1852], M: [5, 1852], NM: [5, 1852], nmi: [5, 1852], "light-year": [5, 9460730472580800], "light-years": [5, 9460730472580800], ly: [5, 9460730472580800], pica: [5, 42333e-7], picas: [5, 42333e-7], pc: [5, 42333e-7], point: [5, 3528e-7], points: [5, 3528e-7], gram: [6, 1], grams: [6, 1], g: [6, 1], petagram: [6, 1e15], petagrams: [6, 1e15], Pg: [6, 1e15], teragram: [6, 1e12], teragrams: [6, 1e12], Tg: [6, 1e12], gigagram: [6, 1e9], gigagrams: [6, 1e9], Gg: [6, 1e9], megagram: [6, 1e6], megagrams: [6, 1e6], Mg: [6, 1e6], kilogram: [6, 1e3], kilograms: [6, 1e3], kg: [6, 1e3], hectogram: [6, 100], hectograms: [6, 100], hg: [6, 100], decagram: [6, 10], decagrams: [6, 10], dag: [6, 10], decigram: [6, 0.1], decigrams: [6, 0.1], dg: [6, 0.1], centigram: [6, 0.01], centigrams: [6, 0.01], cg: [6, 0.01], milligram: [6, 1e-3], milligrams: [6, 1e-3], mg: [6, 1e-3], microgram: [6, 1e-6], micrograms: [6, 1e-6], \u03BCg: [6, 1e-6], nanogram: [6, 1e-9], nanograms: [6, 1e-9], ng: [6, 1e-9], picogram: [6, 1e-12], picograms: [6, 1e-12], pg: [6, 1e-12], femtogram: [6, 1e-15], femtograms: [6, 1e-15], fg: [6, 1e-15], tonne: [6, 1e6], tonnes: [6, 1e6], "metric ton": [6, 1e6], "metric tons": [6, 1e6], t: [6, 1e6], kilotonne: [6, 1e9], kilotonnes: [6, 1e9], kt: [6, 1e9], megatonne: [6, 1e12], megatonnes: [6, 1e12], Mt: [6, 1e12], gigatonne: [6, 1e15], gigatonnes: [6, 1e15], Gt: [6, 1e15], pound: [6, 453.59237], pounds: [6, 453.59237], lb: [6, 453.59237], stone: [6, 6350.29318], stones: [6, 6350.29318], st: [6, 6350.29318], ounce: [6, 28.349523125], ounces: [6, 28.349523125], oz: [6, 28.349523125], "\u2125": [6, 28.349523125], "short ton": [6, 907184.74], "short tons": [6, 907184.74], "US ton": [6, 907184.74], "US tons": [6, 907184.74], "long ton": [6, 10160469088e-4], "long tons": [6, 10160469088e-4], "imperial ton": [6, 10160469088e-4], "imperial tons": [6, 10160469088e-4], "displacement ton": [6, 10160469088e-4], "displacement tons": [6, 10160469088e-4], watt: [7, 1], watts: [7, 1], W: [7, 1], petawatt: [7, 1e15], petawatts: [7, 1e15], PW: [7, 1e15], terawatt: [7, 1e12], terawatts: [7, 1e12], TW: [7, 1e12], gigawatt: [7, 1e9], gigawatts: [7, 1e9], GW: [7, 1e9], megawatt: [7, 1e6], megawatts: [7, 1e6], MW: [7, 1e6], kilowatt: [7, 1e3], kilowatts: [7, 1e3], kW: [7, 1e3], hectowatt: [7, 100], hectowatts: [7, 100], hW: [7, 100], decawatt: [7, 10], decawatts: [7, 10], daW: [7, 10], deciwatt: [7, 0.1], deciwatts: [7, 0.1], dW: [7, 0.1], centiwatt: [7, 0.01], centiwatts: [7, 0.01], cW: [7, 0.01], milliwatt: [7, 1e-3], milliwatts: [7, 1e-3], mW: [7, 1e-3], microwatt: [7, 1e-6], microwatts: [7, 1e-6], \u03BCW: [7, 1e-6], nanowatt: [7, 1e-9], nanowatts: [7, 1e-9], nW: [7, 1e-9], picowatt: [7, 1e-12], picowatts: [7, 1e-12], pW: [7, 1e-12], femtowatt: [7, 1e-15], femtowatts: [7, 1e-15], fW: [7, 1e-15], horsepower: [7, 745.699872], "mechanical horsepower": [7, 745.699872], hp: [7, 745.699872], pascal: [8, 1], pascals: [8, 1], Pa: [8, 1], petapascal: [8, 1e15], petapascals: [8, 1e15], PPa: [8, 1e15], terapascal: [8, 1e12], terapascals: [8, 1e12], TPa: [8, 1e12], gigapascal: [8, 1e9], gigapascals: [8, 1e9], GPa: [8, 1e9], megapascal: [8, 1e6], megapascals: [8, 1e6], MPa: [8, 1e6], kilopascal: [8, 1e3], kilopascals: [8, 1e3], kPa: [8, 1e3], hectopascal: [8, 100], hectopascals: [8, 100], hPa: [8, 100], decapascal: [8, 10], decapascals: [8, 10], daPa: [8, 10], decipascal: [8, 0.1], decipascals: [8, 0.1], dPa: [8, 0.1], centipascal: [8, 0.01], centipascals: [8, 0.01], cPa: [8, 0.01], millipascal: [8, 1e-3], millipascals: [8, 1e-3], mPa: [8, 1e-3], micropascal: [8, 1e-6], micropascals: [8, 1e-6], \u03BCPa: [8, 1e-6], nanopascal: [8, 1e-9], nanopascals: [8, 1e-9], nPa: [8, 1e-9], picopascal: [8, 1e-12], picopascals: [8, 1e-12], pPa: [8, 1e-12], femtopascal: [8, 1e-15], femtopascals: [8, 1e-15], fPa: [8, 1e-15], bar: [8, 1e5], bars: [8, 1e5], petabar: [8, 1e20], petabars: [8, 1e20], Pbar: [8, 1e20], terabar: [8, 1e17], terabars: [8, 1e17], Tbar: [8, 1e17], gigabar: [8, 1e14], gigabars: [8, 1e14], Gbar: [8, 1e14], megabar: [8, 1e11], megabars: [8, 1e11], Mbar: [8, 1e11], kilobar: [8, 1e8], kilobars: [8, 1e8], kbar: [8, 1e8], hectobar: [8, 1e7], hectobars: [8, 1e7], hbar: [8, 1e7], decabar: [8, 1e6], decabars: [8, 1e6], dabar: [8, 1e6], decibar: [8, 1e4], decibars: [8, 1e4], dbar: [8, 1e4], centibar: [8, 1e3], centibars: [8, 1e3], cbar: [8, 1e3], millibar: [8, 100], millibars: [8, 100], mbar: [8, 100], microbar: [8, 0.1], microbars: [8, 0.1], \u03BCbar: [8, 0.1], nanobar: [8, 1e-4], nanobars: [8, 1e-4], nbar: [8, 1e-4], picobar: [8, 1e-7], picobars: [8, 1e-7], pbar: [8, 1e-7], femtobar: [8, 1e-10], femtobars: [8, 1e-10], fbar: [8, 1e-10], torr: [8, 133.32236842105263], torrs: [8, 133.32236842105263], Torr: [8, 133.32236842105263], millitorr: [8, 0.13332236842105263], mTorr: [8, 0.13332236842105263], atmosphere: [8, 101325], atmospheres: [8, 101325], atm: [8, 101325], "pound per square inch": [8, 6894.757], "pounds per square inch": [8, 6894.757], psi: [8, 6894.757], "lbf/in2": [8, 6894.757], "lbf/in\xB2": [8, 6894.757], kelvin: [9, 1], kelvins: [9, 1], K: [9, 1], petakelvin: [9, 1e15], petakelvins: [9, 1e15], PK: [9, 1e15], terakelvin: [9, 1e12], terakelvins: [9, 1e12], TK: [9, 1e12], gigakelvin: [9, 1e9], gigakelvins: [9, 1e9], GK: [9, 1e9], megakelvin: [9, 1e6], megakelvins: [9, 1e6], MK: [9, 1e6], kilokelvin: [9, 1e3], kilokelvins: [9, 1e3], kK: [9, 1e3], hectokelvin: [9, 100], hectokelvins: [9, 100], hK: [9, 100], decakelvin: [9, 10], decakelvins: [9, 10], daK: [9, 10], decikelvin: [9, 0.1], decikelvins: [9, 0.1], dK: [9, 0.1], centikelvin: [9, 0.01], centikelvins: [9, 0.01], cK: [9, 0.01], millikelvin: [9, 1e-3], millikelvins: [9, 1e-3], mK: [9, 1e-3], microkelvin: [9, 1e-6], microkelvins: [9, 1e-6], \u03BCK: [9, 1e-6], nanokelvin: [9, 1e-9], nanokelvins: [9, 1e-9], nK: [9, 1e-9], picokelvin: [9, 1e-12], picokelvins: [9, 1e-12], pK: [9, 1e-12], femtokelvin: [9, 1e-15], femtokelvins: [9, 1e-15], fK: [9, 1e-15], fahrenheit: [9, 0.5555555555555556], F: [9, 0.5555555555555556], celsius: [9, 1], C: [9, 1], rankine: [9, 0.5555555555555556], R: [9, 0.5555555555555556], second: [10, 1], seconds: [10, 1], s: [10, 1], petasecond: [10, 1e15], petaseconds: [10, 1e15], Ps: [10, 1e15], terasecond: [10, 1e12], teraseconds: [10, 1e12], Ts: [10, 1e12], gigasecond: [10, 1e9], gigaseconds: [10, 1e9], Gs: [10, 1e9], megasecond: [10, 1e6], megaseconds: [10, 1e6], Ms: [10, 1e6], kilosecond: [10, 1e3], kiloseconds: [10, 1e3], ks: [10, 1e3], hectosecond: [10, 100], hectoseconds: [10, 100], hs: [10, 100], decasecond: [10, 10], decaseconds: [10, 10], das: [10, 10], decisecond: [10, 0.1], deciseconds: [10, 0.1], ds: [10, 0.1], centisecond: [10, 0.01], centiseconds: [10, 0.01], cs: [10, 0.01], millisecond: [10, 1e-3], milliseconds: [10, 1e-3], ms: [10, 1e-3], microsecond: [10, 1e-6], microseconds: [10, 1e-6], \u03BCs: [10, 1e-6], nanosecond: [10, 1e-9], nanoseconds: [10, 1e-9], ns: [10, 1e-9], picosecond: [10, 1e-12], picoseconds: [10, 1e-12], ps: [10, 1e-12], femtosecond: [10, 1e-15], femtoseconds: [10, 1e-15], fs: [10, 1e-15], minute: [10, 60], minutes: [10, 60], min: [10, 60], hour: [10, 3600], hours: [10, 3600], h: [10, 3600], milliday: [10, 86.4], millidays: [10, 86.4], md: [10, 86.4], day: [10, 86400], days: [10, 86400], d: [10, 86400], week: [10, 604800], weeks: [10, 604800], wk: [10, 604800], fortnight: [10, 1209600], fortnights: [10, 1209600], fn: [10, 1209600], month: [10, 2592e3], months: [10, 2592e3], mo: [10, 2592e3], year: [10, 31536e3], years: [10, 31536e3], a: [10, 31536e3], y: [10, 31536e3], yr: [10, 31536e3], decade: [10, 315569520], decades: [10, 315569520], dec: [10, 315569520], century: [10, 3155695200], centuries: [10, 3155695200], millennium: [10, 31556952e3], millennia: [10, 31556952e3], moment: [10, 90], moments: [10, 90], shake: [10, 1e-8], shakes: [10, 1e-8], "time unit": [10, 1024e-6], TU: [10, 1024e-6], svedberg: [10, 1e-13], svedbergs: [10, 1e-13], S: [10, 1e-13], "cubic meter": [11, 1], "cubic meters": [11, 1], "cubic metre": [11, 1], "cubic metres": [11, 1], stere: [11, 1], steres: [11, 1], "m\xB3": [11, 1], m3: [11, 1], "cubic petameter": [11, 1e45], "cubic petameters": [11, 1e45], Pm3: [11, 1e45], "Pm\xB3": [11, 1e45], "cubic terameter": [11, 1e36], "cubic terameters": [11, 1e36], Tm3: [11, 1e36], "Tm\xB3": [11, 1e36], "cubic gigameter": [11, 1e27], "cubic gigameters": [11, 1e27], Gm3: [11, 1e27], "Gm\xB3": [11, 1e27], "cubic megameter": [11, 1e18], "cubic megameters": [11, 1e18], Mm3: [11, 1e18], "Mm\xB3": [11, 1e18], "cubic kilometer": [11, 1e9], "cubic kilometers": [11, 1e9], km3: [11, 1e9], "km\xB3": [11, 1e9], "cubic hectometer": [11, 1e6], "cubic hectometers": [11, 1e6], hm3: [11, 1e6], "hm\xB3": [11, 1e6], "cubic decameter": [11, 1e3], "cubic decameters": [11, 1e3], dam3: [11, 1e3], "dam\xB3": [11, 1e3], "cubic decimeter": [11, 1e-3], "cubic decimeters": [11, 1e-3], dm3: [11, 1e-3], "dm\xB3": [11, 1e-3], "cubic centimeter": [11, 1e-6], "cubic centimeters": [11, 1e-6], cm3: [11, 1e-6], "cm\xB3": [11, 1e-6], "cubic millimeter": [11, 1e-9], "cubic millimeters": [11, 1e-9], mm3: [11, 1e-9], "mm\xB3": [11, 1e-9], "cubic micrometer": [11, 1e-18], "cubic micrometers": [11, 1e-18], \u03BCm3: [11, 1e-18], "\u03BCm\xB3": [11, 1e-18], "cubic nanometer": [11, 1e-27], "cubic nanometers": [11, 1e-27], nm3: [11, 1e-27], "nm\xB3": [11, 1e-27], "cubic picometer": [11, 1e-36], "cubic picometers": [11, 1e-36], pm3: [11, 1e-36], "pm\xB3": [11, 1e-36], "cubic femtometer": [11, 1e-45], "cubic femtometers": [11, 1e-45], fm3: [11, 1e-45], "fm\xB3": [11, 1e-45], liter: [11, 1e-3], liters: [11, 1e-3], litre: [11, 1e-3], litres: [11, 1e-3], l: [11, 1e-3], L: [11, 1e-3], petaliter: [11, 1e12], petaliters: [11, 1e12], petalitre: [11, 1e12], petalitres: [11, 1e12], Pl: [11, 1e12], PL: [11, 1e12], teraliter: [11, 1e9], teraliters: [11, 1e9], teralitre: [11, 1e9], teralitres: [11, 1e9], Tl: [11, 1e9], TL: [11, 1e9], gigaliter: [11, 1e6], gigaliters: [11, 1e6], gigalitre: [11, 1e6], gigalitres: [11, 1e6], Gl: [11, 1e6], GL: [11, 1e6], megaliter: [11, 1e3], megaliters: [11, 1e3], megalitre: [11, 1e3], megalitres: [11, 1e3], Ml: [11, 1e3], ML: [11, 1e3], kiloliter: [11, 1], kiloliters: [11, 1], kilolitre: [11, 1], kilolitres: [11, 1], kl: [11, 1], kL: [11, 1], hectoliter: [11, 0.1], hectoliters: [11, 0.1], hectolitre: [11, 0.1], hectolitres: [11, 0.1], hl: [11, 0.1], hL: [11, 0.1], decaliter: [11, 0.01], decaliters: [11, 0.01], decalitre: [11, 0.01], decalitres: [11, 0.01], dal: [11, 0.01], daL: [11, 0.01], deciliter: [11, 1e-4], deciliters: [11, 1e-4], decilitre: [11, 1e-4], decilitres: [11, 1e-4], dl: [11, 1e-4], dL: [11, 1e-4], centiliter: [11, 1e-5], centiliters: [11, 1e-5], centilitre: [11, 1e-5], centilitres: [11, 1e-5], cl: [11, 1e-5], cL: [11, 1e-5], milliliter: [11, 1e-6], milliliters: [11, 1e-6], millilitre: [11, 1e-6], millilitres: [11, 1e-6], ml: [11, 1e-6], mL: [11, 1e-6], microliter: [11, 1e-9], microliters: [11, 1e-9], microlitre: [11, 1e-9], microlitres: [11, 1e-9], \u03BCl: [11, 1e-9], \u03BCL: [11, 1e-9], nanoliter: [11, 1e-12], nanoliters: [11, 1e-12], nanolitre: [11, 1e-12], nanolitres: [11, 1e-12], nl: [11, 1e-12], nL: [11, 1e-12], picoliter: [11, 1e-15], picoliters: [11, 1e-15], picolitre: [11, 1e-15], picolitres: [11, 1e-15], pl: [11, 1e-15], pL: [11, 1e-15], femtoliter: [11, 1e-18], femtoliters: [11, 1e-18], femtolitre: [11, 1e-18], femtolitres: [11, 1e-18], fl: [11, 1e-18], fL: [11, 1e-18], "cubic mile": [11, 4200], "cubic miles": [11, 4200], "cu mi": [11, 4200], mi3: [11, 4200], "mi\xB3": [11, 4200], "acre-foot": [11, 1233.48183754752], "acre-feet": [11, 1233.48183754752], "ac\u22C5ft": [11, 1233.48183754752], "ac ft": [11, 1233.48183754752], "cubic yard": [11, 0.76], "cubic yards": [11, 0.76], "cu yd": [11, 0.76], yd3: [11, 0.76], "yd\xB3": [11, 0.76], "cubic foot": [11, 0.028316846592], "cubic feet": [11, 0.028316846592], "cu ft": [11, 0.028316846592], ft3: [11, 0.028316846592], "ft\xB3": [11, 0.028316846592], "board foot": [11, 2359737e-9], "board feet": [11, 2359737e-9], "cubic inch": [11, 16387064e-12], "cubic inches": [11, 16387064e-12], "cu in": [11, 16387064e-12], in3: [11, 16387064e-12], "in\xB3": [11, 16387064e-12], "measurement ton": [11, 1.133], "measurement tons": [11, 1.133], MTON: [11, 1.133], "imperial barrel": [11, 0.16], "imperial barrels": [11, 0.16], "imp bbl": [11, 0.16], "imperial bushel": [11, 0.03636872], "imperial bushels": [11, 0.03636872], "imp bsh": [11, 0.03636872], "imp bu": [11, 0.03636872], "imperial peck": [11, 909218e-8], "imperial pecks": [11, 909218e-8], pk: [11, 909218e-8], "imp pk": [11, 909218e-8], "imperial gallon": [11, 454609e-8], "imperial gallons": [11, 454609e-8], "imp gal": [11, 454609e-8], "imperial quart": [11, 0.0011365225], "imperial quarts": [11, 0.0011365225], "imp qt": [11, 0.0011365225], "imperial pint": [11, 56826125e-11], "imperial pints": [11, 56826125e-11], "imp pt": [11, 56826125e-11], "imperial fluid ounce": [11, 284130625e-13], "imperial fluid ounces": [11, 284130625e-13], "imp fl oz": [11, 284130625e-13], teaspoon: [11, 492892159375e-17], teaspoons: [11, 492892159375e-17], "US teaspoon": [11, 492892159375e-17], "US teaspoons": [11, 492892159375e-17], tsp: [11, 492892159375e-17], tablespoon: [11, 1478676478125e-17], tablespoons: [11, 1478676478125e-17], "US tablespoon": [11, 1478676478125e-17], "US tablespoons": [11, 1478676478125e-17], tbsp: [11, 1478676478125e-17], "US fluid ounce": [11, 295735295625e-16], "US fluid ounces": [11, 295735295625e-16], "fl oz": [11, 295735295625e-16], "fl. oz.": [11, 295735295625e-16], "oz. fl.": [11, 295735295625e-16], cup: [11, 2365882365e-13], cups: [11, 2365882365e-13], c: [11, 2365882365e-13], "US legal cup": [11, 24e-5], "US legal cups": [11, 24e-5], "US lc": [11, 24e-5], pint: [11, 473176473e-12], pints: [11, 473176473e-12], "US liquid pint": [11, 473176473e-12], "US liquid pints": [11, 473176473e-12], pt: [11, 473176473e-12], p: [11, 473176473e-12], quart: [11, 946352946e-12], quarts: [11, 946352946e-12], "US liquid quart": [11, 946352946e-12], "US liquid quarts": [11, 946352946e-12], qt: [11, 946352946e-12], gallon: [11, 0.003785411784], gallons: [11, 0.003785411784], "US liquid gallon": [11, 0.003785411784], "US liquid gallons": [11, 0.003785411784], gal: [11, 0.003785411784], "US bushel": [11, 0.03523907016688], "US bushels": [11, 0.03523907016688], "US bsh": [11, 0.03523907016688], "US bu": [11, 0.03523907016688], "US peck": [11, 0.00880976754172], "US pk": [11, 0.00880976754172], "US dry gallon": [11, 0.00440488377086], "US dry gal": [11, 0.00440488377086], "US dry barrel": [11, 0.1156], "US dry barrels": [11, 0.1156], "US dry bbl": [11, 0.1156], "US dry quart": [11, 0.001101220942715], "US dry qt": [11, 0.001101220942715], "US dry pint": [11, 5506104713575e-16], "US dry pt": [11, 5506104713575e-16] }, t = { imperial: [[[1, "deg"]], [[1, "sq in"], [144, "sq ft"], [6272640, "ac"], [4014489600, "sq mi"]], [[1, "bits"], [8, "B"], [8192, "KiB"], [8388608, "MiB"], [8589934592, "GiB"], [8796093022208, "TiB"], [9007199254740992, "PiB"]], [[1, "J"]], [[1, "lbf"]], [[1, "in"], [12, "ft"], [36, "yd"], [63360, "mi"]], [[1, "oz"], [16, "lb"]], [[1, "W"], [1e3, "kW"], [1e6, "MW"], [1e9, "GW"], [1e12, "TW"], [1e15, "PW"]], [[1, "psi"]], [[1, "F"]], [[1, "fs"], [1e3, "ps"], [1e6, "ns"], [1e9, "\u03BCs"], [1e12, "ms"], [1e15, "s"], [6e16, "min"], [36e17, "h"], [864e17, "d"], [31536e18, "y"]], [[1, "tsp"], [3, "tbsp"], [6, "fl oz"], [48, "cup"], [96, "pt"], [192, "qt"], [768, "gal"]]], metric: [[[1, "deg"]], [[1, "mm2"], [100, "cm2"], [1e6, "m2"], [1e12, "km2"]], [[1, "bits"], [8, "B"], [8e3, "KB"], [8e6, "MB"], [8e9, "GB"], [8e12, "TB"], [8e15, "PB"]], [[1, "J"]], [[1, "N"]], [[1, "mm"], [10, "cm"], [1e3, "m"], [1e6, "km"]], [[1, "mg"], [1e3, "g"], [1e6, "kg"]], [[1, "W"], [1e3, "kW"], [1e6, "MW"], [1e9, "GW"], [1e12, "TW"], [1e15, "PW"]], [[1, "Pa"]], [[1, "C"]], [[1, "fs"], [1e3, "ps"], [1e6, "ns"], [1e9, "\u03BCs"], [1e12, "ms"], [1e15, "s"], [6e16, "min"], [36e17, "h"], [864e17, "d"], [31536e18, "y"]], [[1, "mL"], [1e3, "L"]]] }, i = { __proto__: null, fahrenheit: 459.67, F: 459.67, celsius: 273.15, C: 273.15 };
function s(s2, r = "metric") {
  if (this.i === s2)
    return this.o;
  if ("best" === s2) {
    if (!t.hasOwnProperty(r))
      throw new RangeError();
    const e2 = t[r][this.u[0]], i2 = e2[0][1];
    let s3 = a(this.o, this.i).to(i2);
    const m2 = s3 < 0 ? -s3 : s3;
    let o = i2;
    for (let t2 = 0; t2 < e2.length; t2++) {
      const i3 = e2[t2];
      m2 >= i3[0] && (o = i3[1]);
    }
    return s3 = a(s3, i2).to(o), { quantity: s3, unit: o, toString: this.k ? () => s3 + o : (e3) => (e3 === void 0 ? s3 : s3.toFixed(e3)) + o };
  }
  const m = e[s2];
  if (this.u[0] !== m[0])
    throw new RangeError();
  if (this.k) {
    if (this.i in i || s2 in i)
      throw new RangeError();
    return this.o * BigInt(this.u[1] / m[1]);
  }
  if (this.q) {
    switch (s2) {
      case "K":
      case "kelvin":
      case "kelvins":
        return this.i in i ? (this.o + i[this.i]) * this.u[1] : this.o * this.u[1];
    }
    switch (this.i) {
      case "K":
      case "kelvin":
      case "kelvins":
        return s2 in i ? this.o / m[1] - i[s2] : this.o / m[1];
    }
    return a(a(this.o, this.i).to("K"), "K").to(s2);
  }
  return this.o * (this.u[1] / m[1]);
}
function a(t2, i2) {
  const a2 = typeof t2, r = "bigint" === a2;
  if (!r && "number" !== a2)
    throw new TypeError();
  const m = e[i2];
  if (!m)
    throw new RangeError();
  return { to: s.bind({ o: t2, i: i2, u: m, k: r, q: 9 === m[0] }) };
}
var BloquesDistancia_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-9d05ab14"), n = n(), popScopeId(), n);
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
  class: "columns is-mobile sticky"
};
const _hoisted_13 = {
  style: { "display": "none" },
  class: "column"
};
const _hoisted_14 = {
  style: { "display": "none" },
  class: "column"
};
const _hoisted_15 = {
  style: { "display": "none" },
  class: "column"
};
const _hoisted_16 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_17 = {
  style: { "display": "none" },
  class: "column"
};
const _hoisted_18 = { class: "column is-12" };
const _hoisted_19 = { class: "columns is-multiline is-mobile" };
const _hoisted_20 = { class: "column is-4 column-gap" };
const _hoisted_21 = /* @__PURE__ */ createTextVNode("Bloque calentamiento ");
const _hoisted_22 = { class: "contador" };
const _hoisted_23 = { class: "column is-4 column-gap" };
const _hoisted_24 = /* @__PURE__ */ createTextVNode("Bloque central ");
const _hoisted_25 = { class: "contador" };
const _hoisted_26 = { class: "column is-4 column-gap" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode("Bloque vuelta a la calma ");
const _hoisted_28 = { class: "contador" };
const _hoisted_29 = {
  key: 2,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_30 = /* @__PURE__ */ createTextVNode("Fase Calentamiento");
const _hoisted_31 = { class: "invoice-wrapper" };
const _hoisted_32 = { class: "invoice-body" };
const _hoisted_33 = { class: "invoice-card" };
const _hoisted_34 = { class: "invoice-section" };
const _hoisted_35 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_36 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_37 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_38 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_40 = { key: 0 };
const _hoisted_41 = { key: 1 };
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z1: Aerobico ligero", -1));
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z2: Aerobico medio", -1));
const _hoisted_44 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z3: Aerobico intenso", -1));
const _hoisted_45 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z4: Umbral anaerobico", -1));
const _hoisted_46 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z5: Maxima intensidad", -1));
const _hoisted_47 = [
  _hoisted_42,
  _hoisted_43,
  _hoisted_44,
  _hoisted_45,
  _hoisted_46
];
const _hoisted_48 = { key: 2 };
const _hoisted_49 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R0: Regenerativo", -1));
const _hoisted_50 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R1: Umbral aerobico", -1));
const _hoisted_51 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R2: Umbral anaerobico", -1));
const _hoisted_52 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R3: Vo2 submaximo", -1));
const _hoisted_53 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R3+: Vo2 maximo", -1));
const _hoisted_54 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R4: Capacidad aer\xF3bica", -1));
const _hoisted_55 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R5: Potencia anaerobica", -1));
const _hoisted_56 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R6: Potencia alactica", -1));
const _hoisted_57 = [
  _hoisted_49,
  _hoisted_50,
  _hoisted_51,
  _hoisted_52,
  _hoisted_53,
  _hoisted_54,
  _hoisted_55,
  _hoisted_56
];
const _hoisted_58 = {
  key: 4,
  class: "cell-center"
};
const _hoisted_59 = {
  key: 1,
  class: "text"
};
const _hoisted_60 = { key: 1 };
const _hoisted_61 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_62 = [
  _hoisted_61
];
const _hoisted_63 = { key: 0 };
const _hoisted_64 = { key: 1 };
const _hoisted_65 = { key: 0 };
const _hoisted_66 = {
  key: 3,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_67 = /* @__PURE__ */ createTextVNode("Fase Central");
const _hoisted_68 = { class: "invoice-wrapper" };
const _hoisted_69 = { class: "invoice-body" };
const _hoisted_70 = { class: "invoice-card" };
const _hoisted_71 = { class: "invoice-section" };
const _hoisted_72 = { class: "m-0" };
const _hoisted_73 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "repetir" }, "Repetir:", -1));
const _hoisted_74 = { key: 1 };
const _hoisted_75 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "init" }, "Inicio Serie", -1));
const _hoisted_76 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_77 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "end" }, "Final Serie", -1));
const _hoisted_78 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_79 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_80 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_81 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_82 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_83 = { key: 0 };
const _hoisted_84 = { key: 1 };
const _hoisted_85 = { key: 2 };
const _hoisted_86 = {
  key: 4,
  class: "cell-center"
};
const _hoisted_87 = {
  key: 1,
  class: "text"
};
const _hoisted_88 = { key: 1 };
const _hoisted_89 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_90 = [
  _hoisted_89
];
const _hoisted_91 = /* @__PURE__ */ createTextVNode(" Inicio ");
const _hoisted_92 = /* @__PURE__ */ createTextVNode(" Final ");
const _hoisted_93 = { key: 0 };
const _hoisted_94 = { key: 1 };
const _hoisted_95 = { key: 0 };
const _hoisted_96 = {
  key: 4,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_97 = /* @__PURE__ */ createTextVNode("Fase Vuelta a la calma");
const _hoisted_98 = { class: "invoice-wrapper" };
const _hoisted_99 = { class: "invoice-body" };
const _hoisted_100 = { class: "invoice-card" };
const _hoisted_101 = { class: "invoice-section" };
const _hoisted_102 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_103 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_104 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_105 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_106 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_107 = { key: 0 };
const _hoisted_108 = { key: 1 };
const _hoisted_109 = { key: 2 };
const _hoisted_110 = {
  key: 4,
  class: "cell-center"
};
const _hoisted_111 = {
  key: 1,
  class: "text"
};
const _hoisted_112 = { key: 1 };
const _hoisted_113 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_114 = [
  _hoisted_113
];
const _hoisted_115 = { key: 0 };
const _hoisted_116 = { key: 1 };
const _hoisted_117 = { key: 0 };
const _hoisted_118 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "columns" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
    /* @__PURE__ */ createBaseVNode("hr", { style: { "background-color": "gray", "height": "1px", "opacity": "0.5" } })
  ])
], -1));
const _hoisted_119 = {
  key: 5,
  class: "columns is-multiline flotar"
};
const _hoisted_120 = { class: "column" };
const _hoisted_121 = { style: { "font-weight": "bold" } };
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
    const tipoBloque = ref(tiposDeBloque);
    const tipoMedicion = TIPO_RANGO_BLOQUE;
    const opcionesIntensidad = ref(
      GET_OPCIONES_INSIDAD_RUTINA(props.datosrutina.tipo_esfuerzo).valuesEntrenador
    );
    const valSensaciones = ref(
      GET_OPCIONES_INSIDAD_RUTINA(props.datosrutina.tipo_esfuerzo).valuesDeportista
    );
    const datosNuevoBloque = reactive({
      fase: "",
      tipo: tipoBloque.value[0].label,
      tipo_medicion: tipoMedicion[1],
      distancia: 1,
      intensidad: opcionesIntensidad.value[0]
    });
    const distanciaTotal = computed(() => {
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
            kmCentral += (bloque.distancia || 0) * rept_centrales.value;
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
      kilometros = toFixedIfNecessary(kilometros, 3);
      kmCalen = toFixedIfNecessary(kmCalen, 3);
      kmCentral = toFixedIfNecessary(kmCentral, 3);
      kmCalma = toFixedIfNecessary(kmCalma, 3);
      return {
        total: kilometros,
        calentamiento: kmCalen,
        central: kmCentral,
        calma: kmCalma
      };
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
        if (bloque.tipo == tiposBloque.FLEXIBILIDAD || bloque.tipo == tiposBloque.MOVILIDAD_ARTICULAR) {
          bloque.distancia = 0;
        }
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
        datosNuevoBloque.intensidad = opcionesIntensidad.value[0];
        valSensaciones.value = GET_OPCIONES_INSIDAD_RUTINA(
          props.datosrutina.tipo_esfuerzo
        ).valuesDeportista;
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
      if (props.opcionactual === "editar" || props.opcionactual === "ver") {
        let valido = true;
        props.datosrutina.bloques.forEach((bloque) => {
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
      comentarios_fase_calentamiento.value = props.datosrutina.comentarios_fase_calentamiento || "";
      comentarios_fase_central.value = props.datosrutina.comentarios_fase_central || "";
      comentarios_fase_calma.value = props.datosrutina.comentarios_fase_calma || "";
      rept_centrales.value = props.datosrutina.rept_centrales || 1;
    });
    const hayBloques = ref(false);
    const { handleSubmit } = useForm({
      initialValues: {
        distancia: 1
      }
    });
    const bloquesCalentamiento = ref(0);
    const bloquesCentrales = ref(0);
    const bloquesVueltaALaCalma = ref(0);
    const agregarBloqueCalentamiento = handleSubmit(() => {
      bloquesCalentamiento.value += 1;
      datosNuevoBloque.tipo = tiposDeBloque[0].label;
      datosNuevoBloque.fase = "calentamiento";
      emits("agregar", datosNuevoBloque);
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      nuevoBloqueCalentamiento.value = !nuevoBloqueCalentamiento.value;
    });
    const agregarBloqueCentral = handleSubmit(() => {
      bloquesCentrales.value += 1;
      datosNuevoBloque.tipo = tiposDeBloque[0].label;
      datosNuevoBloque.fase = "central";
      emits("agregar", datosNuevoBloque);
      hayBloques.value = props.datosrutina.bloques.length === 0 ? false : true;
      nuevoBloqueCentral.value = !nuevoBloqueCentral.value;
    });
    const agregarBloqueVueltaALaCalma = handleSubmit(() => {
      bloquesVueltaALaCalma.value += 1;
      datosNuevoBloque.tipo = tiposDeBloque[0].label;
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
    const columns = reactive({
      tipo: { label: "Tipo", align: "center" },
      medicion: { label: "Medici\xF3n", align: "center" },
      distancia: { label: "Distancia", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: {
        label: labelEsfuerzo(props.datosrutina.tipo_esfuerzo),
        align: "center"
      },
      eliminar: { label: "Eliminar", align: "center" }
    });
    const columnsCentral = reactive({
      tipo: { label: "Tipo", align: "center" },
      medicion: { label: "Medici\xF3n", align: "center" },
      distancia: { label: "Distancia", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: {
        label: labelEsfuerzo(props.datosrutina.tipo_esfuerzo),
        align: "center"
      },
      serie: { label: "Serie", align: "center" },
      eliminar: { label: "Eliminar", align: "center" }
    });
    const columns_ver_rutina = reactive({
      tipo: { label: "Tipo", align: "center" },
      medicion: { label: "Medici\xF3n", align: "center" },
      distancia: { label: "Distancia", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: {
        label: labelEsfuerzo(props.datosrutina.tipo_esfuerzo),
        align: "center"
      }
    });
    let comentarios_fase_calentamiento = ref();
    let comentarios_fase_central = ref();
    let comentarios_fase_calma = ref();
    const rept_centrales = ref(0);
    watch(
      () => props.datosrutina.tipo_esfuerzo,
      (nuevo) => {
        columns.rango = nuevo;
        columnsCentral.rango = nuevo;
      }
    );
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
      const _component_VButton = _sfc_main$6;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VFlexTableCell = _sfc_main$7;
      const _component_VistaRangos = resolveComponent("VistaRangos");
      const _component_VIconButton = _sfc_main$8;
      const _component_VFlexTable = _sfc_main$9;
      const _component_VTextarea = _sfc_main$a;
      const _component_VFlexItem = _sfc_main$b;
      const _component_VField = _sfc_main$c;
      const _component_VFlex = _sfc_main$d;
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
        __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_12, [
          createBaseVNode("div", _hoisted_13, [
            createVNode(_component_VControl, null, {
              default: withCtx(() => [
                createVNode(_component_VSelect, {
                  modelValue: unref(datosNuevoBloque).tipo,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(datosNuevoBloque).tipo = $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(tipoBloque.value, (deporte, index) => {
                      return openBlock(), createBlock(_component_VOption, {
                        key: index,
                        value: deporte.label
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(deporte.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_14, [
            createVNode(_component_VControl, null, {
              default: withCtx(() => [
                createVNode(_component_VSelect, {
                  modelValue: unref(datosNuevoBloque).tipo_medicion,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(datosNuevoBloque).tipo_medicion = $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tipoMedicion), (deporte, index) => {
                      return openBlock(), createBlock(_component_VOption, {
                        key: index,
                        value: deporte
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(deporte), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_15, [
            createVNode(_component_VControl, { id: "distancia" }, {
              default: withCtx(({ field }) => [
                createVNode(_component_VInput, {
                  modelValue: unref(datosNuevoBloque).distancia,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(datosNuevoBloque).distancia = $event),
                  modelModifiers: { number: true },
                  type: "text",
                  placeholder: "Ingrese duraci\xF3n en segundos"
                }, null, 8, ["modelValue"]),
                (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_16, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_17, [
            createVNode(_component_VControl, null, {
              default: withCtx(() => [
                createVNode(_component_VSelect, {
                  modelValue: unref(datosNuevoBloque).intensidad,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(datosNuevoBloque).intensidad = $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, index) => {
                      return openBlock(), createBlock(_component_VOption, {
                        key: index,
                        value: deporte
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(deporte), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_18, [
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, [
                createVNode(_component_VButton, {
                  class: "btn",
                  icon: "feather:plus",
                  color: "success",
                  onKeydown: withKeys(withModifiers(unref(agregarBloqueCalentamiento), ["prevent"]), ["space"]),
                  onClick: unref(agregarBloqueCalentamiento)
                }, {
                  default: withCtx(() => [
                    _hoisted_21,
                    createBaseVNode("span", _hoisted_22, toDisplayString(bloquesCalentamiento.value), 1)
                  ]),
                  _: 1
                }, 8, ["onKeydown", "onClick"])
              ]),
              createBaseVNode("div", _hoisted_23, [
                createVNode(_component_VButton, {
                  class: "btn",
                  icon: "feather:plus",
                  color: "success",
                  onKeydown: withKeys(withModifiers(unref(agregarBloqueCentral), ["prevent"]), ["space"]),
                  onClick: unref(agregarBloqueCentral)
                }, {
                  default: withCtx(() => [
                    _hoisted_24,
                    createBaseVNode("span", _hoisted_25, toDisplayString(bloquesCentrales.value), 1)
                  ]),
                  _: 1
                }, 8, ["onKeydown", "onClick"])
              ]),
              createBaseVNode("div", _hoisted_26, [
                createVNode(_component_VButton, {
                  class: "btn",
                  icon: "feather:plus",
                  color: "success",
                  onKeydown: withKeys(withModifiers(unref(agregarBloqueVueltaALaCalma), ["prevent"]), ["space"]),
                  onClick: unref(agregarBloqueVueltaALaCalma)
                }, {
                  default: withCtx(() => [
                    _hoisted_27,
                    createBaseVNode("span", _hoisted_28, toDisplayString(bloquesVueltaALaCalma.value), 1)
                  ]),
                  _: 1
                }, 8, ["onKeydown", "onClick"])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        bloquesCalenta.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_29, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_30
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("div", _hoisted_32, [
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", _hoisted_34, [
                  createVNode(_component_VFlexTable, {
                    data: bloquesCalenta.value,
                    columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                    reactive: "",
                    rounded: ""
                  }, {
                    "header-column": withCtx(({ column }) => [
                      column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_35, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                      column.key === "medicion" ? (openBlock(), createElementBlock("span", _hoisted_36, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                      column.key === "distancia" ? (openBlock(), createElementBlock("span", _hoisted_37, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_38, [
                        createTextVNode(toDisplayString(column.label) + " ", 1),
                        props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                          content: withCtx(() => [
                            createBaseVNode("section", null, [
                              props.datosrutina.tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_40, " Sensaciones ")) : createCommentVNode("", true),
                              props.datosrutina.tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("ul", _hoisted_41, _hoisted_47)) : createCommentVNode("", true),
                              props.datosrutina.tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("ul", _hoisted_48, _hoisted_57)) : createCommentVNode("", true)
                            ])
                          ]),
                          default: withCtx(() => [
                            _hoisted_39
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_58, toDisplayString(column.label), 1)) : createCommentVNode("", true)
                    ]),
                    "body-cell": withCtx(({ column, row, index }) => [
                      column.key === "tipo" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 0,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            fullwidth: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: row.tipo,
                                "onUpdate:modelValue": ($event) => row.tipo = $event,
                                class: "is-rounded"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposDeBloque), (deporte, indexTp) => {
                                    return openBlock(), createBlock(_component_VOption, {
                                      key: indexTp,
                                      value: deporte.label
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(deporte.label), 1)
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
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_59, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "medicion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 1,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            class: normalizeClass({
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            }),
                            fullwidth: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: row.tipo_medicion,
                                "onUpdate:modelValue": ($event) => row.tipo_medicion = $event,
                                class: "is-rounded"
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
                              }, 1032, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : createCommentVNode("", true),
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", {
                            key: 1,
                            class: normalizeClass([{
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            }, "text"])
                          }, toDisplayString(row.tipo_medicion), 3)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "distancia" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 2,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            class: normalizeClass({
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            }),
                            fullwidth: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: row.distancia,
                                "onUpdate:modelValue": ($event) => row.distancia = $event,
                                modelModifiers: { number: true },
                                class: "is-rounded",
                                type: "number",
                                min: "0",
                                placeholder: "Ingrese km o mts"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : createCommentVNode("", true),
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", {
                            key: 1,
                            class: normalizeClass([{
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            }, "text"])
                          }, toDisplayString(row.distancia), 3)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 3,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            class: normalizeClass({
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            }),
                            fullwidth: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: row.intensidad,
                                "onUpdate:modelValue": ($event) => row.intensidad = $event,
                                class: "is-rounded"
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
                          }, 1032, ["class"])) : createCommentVNode("", true),
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", {
                            key: 1,
                            class: normalizeClass([{
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            }, "text"])
                          }, toDisplayString(row.intensidad), 3)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 4,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          Object.keys(props.dFC).length > 0 ? (openBlock(), createElementBlock("div", {
                            key: 0,
                            class: normalizeClass({
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            })
                          }, [
                            createVNode(_component_VistaRangos, {
                              "lengthd-f-c": Object.keys(props.dFC).length,
                              intensidad: row.intensidad,
                              "val-sensaciones": valSensaciones.value,
                              "d-f-c": __props.dFC,
                              "d-z-r": __props.dZR
                            }, null, 8, ["lengthd-f-c", "intensidad", "val-sensaciones", "d-f-c", "d-z-r"])
                          ], 2)) : (openBlock(), createElementBlock("div", _hoisted_60, _hoisted_62))
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "eliminar" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 5,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
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
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["data", "columns"]),
                  props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_VTextarea, {
                        modelValue: unref(comentarios_fase_calentamiento),
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(comentarios_fase_calentamiento) ? comentarios_fase_calentamiento.value = $event : comentarios_fase_calentamiento = $event),
                        class: "textarea is-info-focus",
                        rows: "2",
                        placeholder: "Ingresa comentarios"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })) : (openBlock(), createElementBlock("span", _hoisted_64, [
                    unref(comentarios_fase_calentamiento).length > 0 ? (openBlock(), createElementBlock("p", _hoisted_65, toDisplayString(unref(comentarios_fase_calentamiento)), 1)) : createCommentVNode("", true)
                  ]))
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        bloquesCent.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_66, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_67
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_68, [
            createBaseVNode("div", _hoisted_69, [
              createBaseVNode("div", _hoisted_70, [
                createBaseVNode("div", _hoisted_71, [
                  createBaseVNode("fieldset", _hoisted_72, [
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
                              _hoisted_73
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
                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => rept_centrales.value = $event),
                                        modelModifiers: { number: true },
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
                      })) : (openBlock(), createElementBlock("div", _hoisted_74, [
                        _hoisted_75,
                        _hoisted_76,
                        _hoisted_77,
                        createTextVNode("x" + toDisplayString(rept_centrales.value), 1)
                      ]))
                    ], 2)) : createCommentVNode("", true),
                    createVNode(_component_VFlexTable, {
                      data: bloquesCent.value,
                      columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columnsCentral) : unref(columns_ver_rutina),
                      rounded: "",
                      reactive: ""
                    }, {
                      "header-column": withCtx(({ column }) => [
                        column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_78, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "medicion" ? (openBlock(), createElementBlock("span", _hoisted_79, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "distancia" ? (openBlock(), createElementBlock("span", _hoisted_80, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_81, [
                          createTextVNode(toDisplayString(column.label) + " ", 1),
                          props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                            content: withCtx(() => [
                              createBaseVNode("section", null, [
                                props.datosrutina.tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_83, " Sensaciones ")) : createCommentVNode("", true),
                                props.datosrutina.tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("p", _hoisted_84, " Z1: Aerobico ligero Z2: Aerobico medio Z3: Aerobico intenso Z4: Umbral anaerobico Z5: Maxima intensidad ")) : createCommentVNode("", true),
                                props.datosrutina.tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("p", _hoisted_85, " R0: Regenerativo R1: Umbral aerobico R2: Umbral anaerobico R3: Vo2 submaximo R3+: Vo2 maximo R4: Capacidad aer\xF3bica R5: Potencia anaerobica R6: Potencia alactica ")) : createCommentVNode("", true)
                              ])
                            ]),
                            default: withCtx(() => [
                              _hoisted_82
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_86, toDisplayString(column.label), 1)) : createCommentVNode("", true)
                      ]),
                      "body-cell": withCtx(({ column, row, index }) => [
                        column.key === "tipo" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 0,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                              key: 0,
                              fullwidth: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: row.tipo,
                                  "onUpdate:modelValue": ($event) => row.tipo = $event,
                                  class: "is-rounded"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposDeBloque), (deporte, indexTp) => {
                                      return openBlock(), createBlock(_component_VOption, {
                                        key: indexTp,
                                        value: deporte.label
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(deporte.label), 1)
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
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_87, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "medicion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 1,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                              key: 0,
                              class: normalizeClass({
                                is_hidden: unref(bloqueIsHidden)(row.tipo)
                              }),
                              fullwidth: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: row.tipo_medicion,
                                  "onUpdate:modelValue": ($event) => row.tipo_medicion = $event,
                                  class: "is-rounded"
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
                                }, 1032, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1032, ["class"])) : createCommentVNode("", true),
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", {
                              key: 1,
                              class: normalizeClass([{
                                is_hidden: unref(bloqueIsHidden)(row.tipo)
                              }, "text"])
                            }, toDisplayString(row.tipo_medicion), 3)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "distancia" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 2,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                              key: 0,
                              fullwidth: "",
                              class: normalizeClass({
                                is_hidden: unref(bloqueIsHidden)(row.tipo)
                              })
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: row.distancia,
                                  "onUpdate:modelValue": ($event) => row.distancia = $event,
                                  modelModifiers: { number: true },
                                  class: "is-rounded",
                                  type: "number",
                                  min: "0",
                                  placeholder: "Ingrese km o mts"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1032, ["class"])) : createCommentVNode("", true),
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", {
                              key: 1,
                              class: normalizeClass([{
                                is_hidden: unref(bloqueIsHidden)(row.tipo)
                              }, "text"])
                            }, toDisplayString(row.distancia), 3)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "intensidad" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 3,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                              key: 0,
                              fullwidth: "",
                              class: normalizeClass({
                                is_hidden: unref(bloqueIsHidden)(row.tipo)
                              })
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VSelect, {
                                  modelValue: row.intensidad,
                                  "onUpdate:modelValue": ($event) => row.intensidad = $event,
                                  class: "is-rounded"
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
                            }, 1032, ["class"])) : createCommentVNode("", true),
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", {
                              key: 1,
                              class: normalizeClass([{
                                is_hidden: unref(bloqueIsHidden)(row.tipo)
                              }, "text"])
                            }, toDisplayString(row.intensidad), 3)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 4,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            Object.keys(props.dFC).length > 0 ? (openBlock(), createElementBlock("div", {
                              key: 0,
                              class: normalizeClass({
                                is_hidden: unref(bloqueIsHidden)(row.tipo)
                              })
                            }, [
                              createVNode(_component_VistaRangos, {
                                "lengthd-f-c": Object.keys(props.dFC).length,
                                intensidad: row.intensidad,
                                "val-sensaciones": valSensaciones.value,
                                "d-f-c": __props.dFC,
                                "d-z-r": __props.dZR
                              }, null, 8, ["lengthd-f-c", "intensidad", "val-sensaciones", "d-f-c", "d-z-r"])
                            ], 2)) : (openBlock(), createElementBlock("div", _hoisted_88, _hoisted_90))
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "serie" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 5,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                              key: 0,
                              fullwidth: ""
                            }, {
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
                                        _hoisted_91
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(_component_VOption, {
                                      value: "final",
                                      onClick: ($event) => marcar("final", index)
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_92
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(_component_VOption, {
                                      value: null,
                                      onClick: ($event) => marcar(null, index)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "eliminar" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 6,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_93, [
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
                  props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_VTextarea, {
                        modelValue: unref(comentarios_fase_central),
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(comentarios_fase_central) ? comentarios_fase_central.value = $event : comentarios_fase_central = $event),
                        class: "textarea is-info-focus",
                        rows: "2",
                        placeholder: "Ingresa comentarios"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })) : (openBlock(), createElementBlock("span", _hoisted_94, [
                    unref(comentarios_fase_central).length > 0 ? (openBlock(), createElementBlock("p", _hoisted_95, toDisplayString(unref(comentarios_fase_central)), 1)) : createCommentVNode("", true)
                  ]))
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        bloquesCalma.value.length > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_96, [
          createBaseVNode("legend", null, [
            createVNode(_component_VMessage, {
              color: "info",
              class: "legend"
            }, {
              default: withCtx(() => [
                _hoisted_97
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_98, [
            createBaseVNode("div", _hoisted_99, [
              createBaseVNode("div", _hoisted_100, [
                createBaseVNode("div", _hoisted_101, [
                  createVNode(_component_VFlexTable, {
                    data: bloquesCalma.value,
                    columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                    rounded: "",
                    reactive: ""
                  }, {
                    "header-column": withCtx(({ column }) => [
                      column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_102, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                      column.key === "medicion" ? (openBlock(), createElementBlock("span", _hoisted_103, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                      column.key === "distancia" ? (openBlock(), createElementBlock("span", _hoisted_104, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_105, [
                        createTextVNode(toDisplayString(column.label) + " ", 1),
                        props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                          content: withCtx(() => [
                            createBaseVNode("section", null, [
                              props.datosrutina.tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_107, " Sensaciones ")) : createCommentVNode("", true),
                              props.datosrutina.tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("p", _hoisted_108, " Z1: Aerobico ligero Z2: Aerobico medio Z3: Aerobico intenso Z4: Umbral anaerobico Z5: Maxima intensidad ")) : createCommentVNode("", true),
                              props.datosrutina.tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("p", _hoisted_109, " R0: Regenerativo R1: Umbral aerobico R2: Umbral anaerobico R3: Vo2 submaximo R3+: Vo2 maximo R4: Capacidad aer\xF3bica R5: Potencia anaerobica R6: Potencia alactica ")) : createCommentVNode("", true)
                            ])
                          ]),
                          default: withCtx(() => [
                            _hoisted_106
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_110, toDisplayString(column.label), 1)) : createCommentVNode("", true)
                    ]),
                    "body-cell": withCtx(({ column, row, index }) => [
                      column.key === "tipo" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 0,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            fullwidth: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: row.tipo,
                                "onUpdate:modelValue": ($event) => row.tipo = $event,
                                class: "is-rounded"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposDeBloque), (deporte, indexTp) => {
                                    return openBlock(), createBlock(_component_VOption, {
                                      key: indexTp,
                                      value: deporte.label
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(deporte.label), 1)
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
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_111, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "medicion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 1,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            fullwidth: "",
                            class: normalizeClass({
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            })
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: row.tipo_medicion,
                                "onUpdate:modelValue": ($event) => row.tipo_medicion = $event,
                                class: "is-rounded"
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
                              }, 1032, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : createCommentVNode("", true),
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", {
                            key: 1,
                            class: normalizeClass([{
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            }, "text"])
                          }, toDisplayString(row.tipo_medicion), 3)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "distancia" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 2,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            fullwidth: "",
                            class: normalizeClass({
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            })
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: row.distancia,
                                "onUpdate:modelValue": ($event) => row.distancia = $event,
                                modelModifiers: { number: true },
                                class: "is-rounded",
                                disabled: !(row.tipo !== "Flexibilidad"),
                                type: "number",
                                min: "0",
                                placeholder: "Ingrese km o mts"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : createCommentVNode("", true),
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", {
                            key: 1,
                            class: normalizeClass([{
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            }, "text"])
                          }, toDisplayString(row.distancia), 3)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "intensidad" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 3,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, {
                            key: 0,
                            fullwidth: "",
                            class: normalizeClass({
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            })
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: row.intensidad,
                                "onUpdate:modelValue": ($event) => row.intensidad = $event,
                                class: "is-rounded"
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
                          }, 1032, ["class"])) : createCommentVNode("", true),
                          props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", {
                            key: 1,
                            class: normalizeClass([{
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            }, "text"])
                          }, toDisplayString(row.intensidad), 3)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "rango" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 4,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          Object.keys(props.dFC).length > 0 ? (openBlock(), createElementBlock("div", {
                            key: 0,
                            class: normalizeClass({
                              is_hidden: unref(bloqueIsHidden)(row.tipo)
                            })
                          }, [
                            createVNode(_component_VistaRangos, {
                              "lengthd-f-c": Object.keys(props.dFC).length,
                              intensidad: row.intensidad,
                              "val-sensaciones": valSensaciones.value,
                              "d-f-c": __props.dFC,
                              "d-z-r": __props.dZR
                            }, null, 8, ["lengthd-f-c", "intensidad", "val-sensaciones", "d-f-c", "d-z-r"])
                          ], 2)) : (openBlock(), createElementBlock("div", _hoisted_112, _hoisted_114))
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      column.key === "eliminar" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                        key: 5,
                        column: { align: "center" }
                      }, {
                        default: withCtx(() => [
                          props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_115, [
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
                  }, 8, ["data", "columns"]),
                  props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_VTextarea, {
                        modelValue: unref(comentarios_fase_calma),
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(comentarios_fase_calma) ? comentarios_fase_calma.value = $event : comentarios_fase_calma = $event),
                        class: "textarea is-info-focus",
                        rows: "2",
                        placeholder: "Ingresa comentarios"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })) : (openBlock(), createElementBlock("span", _hoisted_116, [
                    unref(comentarios_fase_calma).length > 0 ? (openBlock(), createElementBlock("p", _hoisted_117, toDisplayString(unref(comentarios_fase_calma)), 1)) : createCommentVNode("", true)
                  ]))
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        _hoisted_118,
        hayBloques.value ? (openBlock(), createElementBlock("div", _hoisted_119, [
          createBaseVNode("div", _hoisted_120, [
            createBaseVNode("h3", _hoisted_121, " Distancia Rutina: " + toDisplayString(unref(distanciaTotal).total) + " km (Calentamiento: " + toDisplayString(unref(distanciaTotal).calentamiento) + " km ) (Central: " + toDisplayString(unref(distanciaTotal).central) + " km) (Calma: " + toDisplayString(unref(distanciaTotal).calma) + " km) ", 1)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d05ab14"]]);
export { GET_TIPOS_INTENSIDAD_RUTINAS as G, TIPO_MEDICION_RUTINA as T, __unplugin_components_5 as _, __unplugin_components_6 as a, TIPO_BLOQUE_TEST as b, TIPO_TERRENO as c, _sfc_main$2 as d };
