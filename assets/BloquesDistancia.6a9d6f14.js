import { _ as _sfc_main$f } from "./VModal.72068d4c.js";
import { _ as _sfc_main$e } from "./VFlex.ecceb9be.js";
import { _ as _sfc_main$d } from "./VField.44da70b8.js";
import { _ as _sfc_main$c } from "./VFlexItem.847a3ad8.js";
import { _ as _sfc_main$b } from "./VTextarea.c3d16e44.js";
import { _ as _sfc_main$7, a as _sfc_main$a } from "./VFlexTable.fb38fd2d.js";
import { _ as _sfc_main$9 } from "./VIconButton.8c37066f.js";
import { _ as _sfc_main$8 } from "./VInput.85dd5294.js";
import { a as __unplugin_components_0$1 } from "./VControl.f6d74c4b.js";
import { _ as _sfc_main$5, a as _sfc_main$6 } from "./VOption.e9c09adb.js";
import { y as defineComponent, o as openBlock, i as createElementBlock, t as toDisplayString, l as createCommentVNode, m as createTextVNode, j as createBaseVNode, Q as withKeys, v as withModifiers, g as renderSlot, k as normalizeClass, U as defineStore, z as ref, as as storeToRefs, V as _export_sfc, r as reactive, A as onMounted, C as watch, p as resolveComponent, D as unref, q as createVNode, w as withCtx, f as createBlock, F as Fragment, s as renderList, n as normalizeStyle, ae as pushScopeId, af as popScopeId, O as _sfc_main$4 } from "./index.7ac0c9d2.js";
import { a as GET_OPCIONES_INSIDAD_RUTINA, t as tiposDeBloque, b as TIPO_RANGO_BLOQUE, c as bloqueIsHidden } from "./globales.d54e5eed.js";
import { l as labelEsfuerzo } from "./general.436cc3e4.js";
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$2 = { key: 0 };
const _hoisted_3$2 = { key: 1 };
const _hoisted_4$2 = { key: 2 };
const _hoisted_5$2 = { key: 3 };
const _hoisted_6$2 = { key: 4 };
const _hoisted_7$2 = { key: 5 };
const _hoisted_8$2 = { key: 6 };
const _hoisted_9$2 = { key: 7 };
const _hoisted_10$2 = { key: 8 };
const _hoisted_11$2 = { key: 9 };
const _hoisted_12$2 = { key: 10 };
const _hoisted_13$2 = { key: 11 };
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_15$2 = { key: 12 };
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_17$2 = { key: 13 };
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_19$2 = { key: 14 };
const _hoisted_20$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_21$2 = { key: 15 };
const _hoisted_22$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_23$2 = { key: 16 };
const _hoisted_24$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_25$2 = { key: 17 };
const _hoisted_26$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_27$2 = { key: 18 };
const _hoisted_28$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_29$2 = { key: 19 };
const _hoisted_30$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_31$2 = { key: 20 };
const _hoisted_32$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_33$2 = { key: 21 };
const _hoisted_34$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_35$2 = { key: 22 };
const _hoisted_36$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_37$2 = { key: 23 };
const _hoisted_38$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-arrows-horizontal",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_39$2 = { key: 24 };
const _hoisted_40$2 = { key: 1 };
const _hoisted_41$2 = /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1);
const _hoisted_42$2 = [
  _hoisted_41$2
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    lengthdFC: null,
    intensidad: null,
    valSensaciones: null,
    dFC: null,
    dZR: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return props.lengthdFC > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
        props.intensidad === "0" ? (openBlock(), createElementBlock("div", _hoisted_2$2, toDisplayString(props.valSensaciones[0]), 1)) : props.intensidad === "1" ? (openBlock(), createElementBlock("div", _hoisted_3$2, toDisplayString(props.valSensaciones[1]), 1)) : props.intensidad === "2" ? (openBlock(), createElementBlock("div", _hoisted_4$2, toDisplayString(props.valSensaciones[2]), 1)) : props.intensidad === "3" ? (openBlock(), createElementBlock("div", _hoisted_5$2, toDisplayString(props.valSensaciones[3]), 1)) : props.intensidad === "4" ? (openBlock(), createElementBlock("div", _hoisted_6$2, toDisplayString(props.valSensaciones[4]), 1)) : props.intensidad === "5" ? (openBlock(), createElementBlock("div", _hoisted_7$2, toDisplayString(props.valSensaciones[5]), 1)) : props.intensidad === "6" ? (openBlock(), createElementBlock("div", _hoisted_8$2, toDisplayString(props.valSensaciones[6]), 1)) : props.intensidad === "7" ? (openBlock(), createElementBlock("div", _hoisted_9$2, toDisplayString(props.valSensaciones[7]), 1)) : props.intensidad === "8" ? (openBlock(), createElementBlock("div", _hoisted_10$2, toDisplayString(props.valSensaciones[8]), 1)) : props.intensidad === "9" ? (openBlock(), createElementBlock("div", _hoisted_11$2, toDisplayString(props.valSensaciones[9]), 1)) : props.intensidad === "10" ? (openBlock(), createElementBlock("div", _hoisted_12$2, toDisplayString(props.valSensaciones[10]), 1)) : createCommentVNode("", true),
        props.intensidad === "Z0" ? (openBlock(), createElementBlock("div", _hoisted_13$2, [
          createTextVNode(toDisplayString(props.dFC.z0min) + " ", 1),
          _hoisted_14$2,
          createTextVNode(" " + toDisplayString(props.dFC.z0max), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "Z1" ? (openBlock(), createElementBlock("div", _hoisted_15$2, [
          createTextVNode(toDisplayString(props.dFC.z1min) + " ", 1),
          _hoisted_16$2,
          createTextVNode(" " + toDisplayString(props.dFC.z1max), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "Z2" ? (openBlock(), createElementBlock("div", _hoisted_17$2, [
          createTextVNode(toDisplayString(props.dFC.z2min) + " ", 1),
          _hoisted_18$2,
          createTextVNode(" " + toDisplayString(props.dFC.z2max), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "Z3" ? (openBlock(), createElementBlock("div", _hoisted_19$2, [
          createTextVNode(toDisplayString(props.dFC.z3min) + " ", 1),
          _hoisted_20$2,
          createTextVNode(" " + toDisplayString(props.dFC.z3max), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "Z4" ? (openBlock(), createElementBlock("div", _hoisted_21$2, [
          createTextVNode(toDisplayString(props.dFC.z4min) + " ", 1),
          _hoisted_22$2,
          createTextVNode(" " + toDisplayString(props.dFC.z4max), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "Z5" ? (openBlock(), createElementBlock("div", _hoisted_23$2, [
          createTextVNode(toDisplayString(props.dFC.z5min) + " ", 1),
          _hoisted_24$2,
          createTextVNode(" " + toDisplayString(props.dFC.z5max), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "R0" ? (openBlock(), createElementBlock("div", _hoisted_25$2, [
          createTextVNode(toDisplayString(props.dZR.R0max) + " ", 1),
          _hoisted_26$2,
          createTextVNode(" " + toDisplayString(props.dZR.R0min), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "R1" ? (openBlock(), createElementBlock("div", _hoisted_27$2, [
          createTextVNode(toDisplayString(props.dZR.R1max) + " ", 1),
          _hoisted_28$2,
          createTextVNode(" " + toDisplayString(props.dZR.R1min), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "R2" ? (openBlock(), createElementBlock("div", _hoisted_29$2, [
          createTextVNode(toDisplayString(props.dZR.R2max) + " ", 1),
          _hoisted_30$2,
          createTextVNode(" " + toDisplayString(props.dZR.R2min), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "R3" ? (openBlock(), createElementBlock("div", _hoisted_31$2, [
          createTextVNode(toDisplayString(props.dZR.R3max) + " ", 1),
          _hoisted_32$2,
          createTextVNode(" " + toDisplayString(props.dZR.R3min), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "R3+" ? (openBlock(), createElementBlock("div", _hoisted_33$2, [
          createTextVNode(toDisplayString(props.dZR.R3pmax) + " ", 1),
          _hoisted_34$2,
          createTextVNode(" " + toDisplayString(props.dZR.R3pmin), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "R4" ? (openBlock(), createElementBlock("div", _hoisted_35$2, [
          createTextVNode(toDisplayString(props.dZR.R4max) + " ", 1),
          _hoisted_36$2,
          createTextVNode(" " + toDisplayString(props.dZR.R4min), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "R5" ? (openBlock(), createElementBlock("div", _hoisted_37$2, [
          createTextVNode(toDisplayString(props.dZR.R5max) + " ", 1),
          _hoisted_38$2,
          createTextVNode(" " + toDisplayString(props.dZR.R5min), 1)
        ])) : createCommentVNode("", true),
        props.intensidad === "R6" ? (openBlock(), createElementBlock("div", _hoisted_39$2, toDisplayString(props.dZR.R6min), 1)) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("div", _hoisted_40$2, _hoisted_42$2));
    };
  }
});
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
const seriesFaseCentralStore = defineStore("series_central", {
  state: () => ({
    numeroSeries: 0,
    coloresSeries: [
      "#E0F0E0",
      "#FFD9EF",
      "#E8E2F4",
      "#FFE6E6",
      "#D4E8F3",
      "#FFEAF2",
      "#F3F0FF",
      "#FFFAD5",
      "#E8F3EB",
      "#FFF0E9"
    ]
  }),
  actions: {
    setNumeroSeries(numeroSeries) {
      this.numeroSeries = numeroSeries;
    },
    getNumeroSeries() {
      return this.numeroSeries;
    },
    getColoresSeries() {
      return this.coloresSeries;
    }
  }
});
const serieEditarStore = defineStore("serie_editar", () => {
  const serieEditar = ref();
  const isSerieEditando = ref(false);
  function setSerieEditar(serie) {
    serieEditar.value = serie;
  }
  function setIsSerieEditando(payload) {
    isSerieEditando.value = payload;
  }
  return {
    serieEditar,
    setSerieEditar,
    isSerieEditando,
    setIsSerieEditando
  };
});
const rutinaPersonalizadaStore = defineStore("rutina_personalizada", {
  state: () => ({
    rutinaPersonalizada: {
      titulo: "",
      tipo_esfuerzo: "",
      tipo_medicion: "",
      tipo_terreno: "",
      descripcion: "",
      objetivos: "",
      sesiones_calentamiento: [],
      sesiones_central: {
        numero_series: 1,
        series: [
          {
            nombre: "serie_1",
            sesiones: [],
            color: "#C1E1C1",
            repeticiones: 1,
            creada: false,
            editando: false,
            inicio: -1,
            final: -1
          }
        ]
      },
      sesiones_calma: [],
      id: "",
      fecha: "",
      id_deportista: "",
      id_entrenador: "",
      comentarios: [],
      comentarios_fase_calentamiento: "",
      comentarios_fase_central: "",
      comentarios_fase_calma: "",
      rept_centrales: 0,
      completa: false
    },
    rutinaValida: false,
    serieAEditar: "",
    rutinaCopiar: null
  }),
  actions: {
    setSerieEditar(serie) {
      this.serieAEditar = serie;
    },
    setRutinaPersonalizada(rutina) {
      this.rutinaPersonalizada = rutina;
    },
    setRutinaCopiar(rutina) {
      this.rutinaCopiar = rutina;
    },
    limpiarRutinaPersonalizada() {
      this.rutinaPersonalizada = {
        titulo: "",
        tipo_esfuerzo: "",
        tipo_medicion: "",
        tipo_terreno: "",
        descripcion: "",
        objetivos: "",
        sesiones_calentamiento: [],
        sesiones_central: {
          numero_series: 1,
          series: [
            {
              nombre: "serie_1",
              sesiones: [],
              color: "#C1E1C1",
              repeticiones: 1,
              creada: false,
              editando: false,
              inicio: -1,
              final: -1
            }
          ]
        },
        sesiones_calma: [],
        id: "",
        fecha: "",
        id_deportista: "",
        id_entrenador: "",
        comentarios: [],
        comentarios_fase_calentamiento: "",
        comentarios_fase_central: "",
        comentarios_fase_calma: "",
        rept_centrales: 0,
        completa: false
      };
    },
    agregarSesionFaseCalentamiento(sesion) {
      var _a;
      (_a = this.rutinaPersonalizada.sesiones_calentamiento) == null ? void 0 : _a.push({ ...sesion });
    },
    agregarSesionFaseCentral(sesion, nombreSerie) {
      var _a;
      const seriesStore = seriesFaseCentralStore();
      const { numeroSeries } = storeToRefs(seriesStore);
      const nombreSesion = nombreSerie ? nombreSerie : `serie_${numeroSeries.value}`;
      const serieEncontrada = (_a = this.rutinaPersonalizada.sesiones_central.series) == null ? void 0 : _a.find(
        (serie) => serie.nombre === nombreSesion
      );
      if (serieEncontrada) {
        if (!serieEncontrada.hasOwnProperty("sesiones") || !Array.isArray(serieEncontrada.sesiones)) {
          serieEncontrada.sesiones = [];
        }
        serieEncontrada.sesiones.push({ ...sesion });
      }
    },
    agregarSesionFaseCalma(sesion) {
      var _a;
      (_a = this.rutinaPersonalizada.sesiones_calma) == null ? void 0 : _a.push({ ...sesion });
    },
    eliminarSesionFaseCalentamiento(index) {
      var _a;
      (_a = this.rutinaPersonalizada.sesiones_calentamiento) == null ? void 0 : _a.splice(index, 1);
    },
    eliminarSesionFaseCentral(index, serie) {
      var _a;
      const { setIsSerieEditando } = serieEditarStore();
      const serieEncontrada = (_a = this.rutinaPersonalizada.sesiones_central.series) == null ? void 0 : _a.find(
        (item_serie) => item_serie.nombre === (serie == null ? void 0 : serie.nombre)
      );
      if (serieEncontrada) {
        const sesion = serieEncontrada.sesiones[index];
        if (sesion.marca === "inicio") {
          serieEncontrada.inicio = -1;
          serieEncontrada.editando = true;
          setIsSerieEditando(true);
        } else if (sesion.marca === "final") {
          serieEncontrada.final = -1;
          serieEncontrada.editando = true;
          setIsSerieEditando(true);
        }
        serieEncontrada.sesiones.splice(index, 1);
        if (serieEncontrada.sesiones.length === 0) {
          this.eliminarSerie(serieEncontrada);
        }
      }
    },
    eliminarSesionFaseCalma(index) {
      var _a;
      (_a = this.rutinaPersonalizada.sesiones_calma) == null ? void 0 : _a.splice(index, 1);
    },
    eliminarSerie(serie) {
      const index = this.rutinaPersonalizada.sesiones_central.series.findIndex(
        (serieItem) => serieItem.nombre === serie.nombre
      );
      if (index !== -1) {
        this.rutinaPersonalizada.sesiones_central.series.splice(index, 1);
      }
    },
    duplicarSesionFaseCalentamiento(sesion) {
      var _a;
      (_a = this.rutinaPersonalizada.sesiones_calentamiento) == null ? void 0 : _a.push(sesion);
    },
    duplicarSesionFaseCentral(sesion, serie) {
      var _a;
      const serieEncontrada = (_a = this.rutinaPersonalizada.sesiones_central.series) == null ? void 0 : _a.find(
        (item_serie) => item_serie.nombre === (serie == null ? void 0 : serie.nombre)
      );
      if (serieEncontrada) {
        const sesionCopy = { ...sesion };
        sesionCopy.marca = "";
        serieEncontrada.sesiones.push(sesionCopy);
      }
    },
    duplicarSesionFaseCalma(sesion) {
      var _a;
      (_a = this.rutinaPersonalizada.sesiones_calma) == null ? void 0 : _a.push(sesion);
    },
    getNumeroSesionesFaseCalentambiento() {
      var _a, _b;
      return (_b = (_a = this.rutinaPersonalizada.sesiones_calentamiento) == null ? void 0 : _a.length) != null ? _b : 0;
    },
    getNumeroSesionesFaseCentral() {
      let numeroSesiones = 0;
      this.rutinaPersonalizada.sesiones_central.series.forEach((serie) => {
        numeroSesiones += serie.sesiones ? serie.sesiones.length : 0;
      });
      return numeroSesiones;
    },
    getNumeroSesionesFaseCalma() {
      var _a, _b;
      return (_b = (_a = this.rutinaPersonalizada.sesiones_calma) == null ? void 0 : _a.length) != null ? _b : 0;
    },
    getNumeroTotalSesionesRutina() {
      return this.getNumeroSesionesFaseCalentambiento() + this.getNumeroSesionesFaseCentral() + this.getNumeroSesionesFaseCalma();
    },
    getSesionesFaseCalentambiento() {
      var _a;
      return (_a = this.rutinaPersonalizada.sesiones_calentamiento) != null ? _a : [];
    },
    getSesionesFaseCentral() {
      const sesiones = [];
      this.rutinaPersonalizada.sesiones_central.series.forEach((serie) => {
        var _a, _b, _c, _d;
        if (serie.inicio !== -1 && serie.final !== -1) {
          const serieEncontrada = (_a = serie.sesiones) == null ? void 0 : _a.slice(serie.inicio, serie.final + 1);
          for (let index = 0; index < serie.repeticiones; index++) {
            serieEncontrada.forEach((sesion) => {
              sesiones.push(sesion);
            });
          }
          const parte1 = (_b = serie.sesiones) == null ? void 0 : _b.slice(0, serie.inicio);
          const parte2 = (_c = serie.sesiones) == null ? void 0 : _c.slice(serie.final + 1);
          const elementosFaltantes = parte1.concat(parte2);
          elementosFaltantes.forEach((sesion) => {
            sesiones.push(sesion);
          });
        } else {
          (_d = serie.sesiones) == null ? void 0 : _d.forEach((sesion) => {
            sesiones.push(sesion);
          });
        }
      });
      return sesiones;
    },
    getSesionesFaseCalma() {
      var _a;
      return (_a = this.rutinaPersonalizada.sesiones_calma) != null ? _a : [];
    },
    getIndexSerieFaseCentral(nombre) {
      return this.rutinaPersonalizada.sesiones_central.series.findIndex(
        (serie) => serie.nombre === nombre
      );
    },
    validarRestricciones(sesiones) {
      var _a;
      return (_a = sesiones.some(
        (sesion) => intensidadNoPermitida(sesion.intensidad)
      )) != null ? _a : false;
    },
    getSesionesCalentamientoConRestriccion() {
      var _a;
      const sesiones = [];
      (_a = this.rutinaPersonalizada.sesiones_calentamiento) == null ? void 0 : _a.filter(
        (sesion, index) => {
          if (intensidadNoPermitida(sesion.intensidad)) {
            sesion.index = index + 1;
            sesiones.push(sesion);
          }
        }
      );
      return sesiones;
    },
    getSesionesCalmaConRestriccion() {
      var _a;
      const sesiones = [];
      (_a = this.rutinaPersonalizada.sesiones_calma) == null ? void 0 : _a.filter(
        (sesion, index) => {
          if (intensidadNoPermitida(sesion.intensidad)) {
            sesion.index = index + 1;
            sesiones.push(sesion);
          }
        }
      );
      return sesiones;
    },
    validarRutinaPersonalizada() {
      const isTituloValido = this.rutinaPersonalizada.titulo.trim().length >= 4 && this.rutinaPersonalizada.titulo.trim().length <= 60 ? true : false;
      const isValidaDescripcion = this.rutinaPersonalizada.descripcion.trim().length >= 4 && this.rutinaPersonalizada.descripcion.trim().length <= 500 ? true : false;
      const isValidaObjetivos = this.rutinaPersonalizada.objetivos.trim().length >= 4 && this.rutinaPersonalizada.objetivos.trim().length <= 500 ? true : false;
      let seriesCompletas = false;
      let seriesIncompletas = false;
      this.rutinaPersonalizada.sesiones_central.series.forEach((serie) => {
        if (serie.creada || serie.editando) {
          if (serie.inicio !== -1 && serie.final !== -1) {
            seriesCompletas = true;
          } else {
            seriesIncompletas = true;
          }
        }
        if (!serie.creada && serie.inicio === -1 && serie.final === -1) {
          seriesCompletas = true;
        } else {
          seriesCompletas = false;
        }
        if (serie.editando) {
          seriesCompletas = false;
          seriesIncompletas = true;
        }
      });
      if (isTituloValido && isValidaDescripcion && isValidaObjetivos && this.getNumeroSesionesFaseCalentambiento() > 0 && this.getNumeroSesionesFaseCentral() > 0 && this.getNumeroSesionesFaseCalma() > 0 && seriesCompletas && !seriesIncompletas) {
        this.rutinaValida = true;
      } else {
        this.rutinaValida = false;
      }
    },
    restaurarIntensidades() {
      var _a, _b, _c;
      const opcionesIntensidad = GET_OPCIONES_INSIDAD_RUTINA(
        this.rutinaPersonalizada.tipo_esfuerzo
      ).valuesEntrenador;
      (_a = this.rutinaPersonalizada.sesiones_calentamiento) == null ? void 0 : _a.forEach(
        (sesion) => {
          sesion.intensidad = opcionesIntensidad[0];
        }
      );
      (_b = this.rutinaPersonalizada.sesiones_central.series) == null ? void 0 : _b.forEach((serie) => {
        serie.sesiones.forEach((sesion) => {
          sesion.intensidad = opcionesIntensidad[0];
        });
      });
      (_c = this.rutinaPersonalizada.sesiones_calma) == null ? void 0 : _c.forEach(
        (sesion) => {
          sesion.intensidad = opcionesIntensidad[0];
        }
      );
    },
    isSesionDistancia(sesion) {
      return sesion.tipo_medicion !== void 0;
    },
    isSesionTiempo(sesion) {
      return sesion.duracion_min !== void 0;
    }
  }
});
function intensidadNoPermitida(intensidad) {
  const intensidadesInvalidas = [
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Z2",
    "R2",
    "Z3",
    "R3",
    "Z4",
    "R4",
    "Z5",
    "R5",
    "R3+",
    "R6"
  ];
  return intensidadesInvalidas.includes(intensidad);
}
const formatearHoraDobleDigito = (horas, minutos) => {
  const horasFormateadas = horas.toString().padStart(2, "0");
  const minutosFormateados = minutos.toString().padStart(2, "0");
  return `${horasFormateadas} : ${minutosFormateados}`;
};
var BloquesTiempo_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-5655489f"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = {
  key: 0,
  class: "columns"
};
const _hoisted_3$1 = { class: "column" };
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode("En esta secci\xF3n debes agregar tus bloques de rutina ");
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { style: { "font-weight": "bold" } }, " (M\xEDnimo un bloque por cada fase)", -1));
const _hoisted_6$1 = {
  key: 1,
  class: "columns"
};
const _hoisted_7$1 = { class: "column" };
const _hoisted_8$1 = /* @__PURE__ */ createTextVNode("Al menos debe haber un bloque de ");
const _hoisted_9$1 = { style: { "font-weight": "bold" } };
const _hoisted_10$1 = {
  key: 1,
  class: "columns is-mobile sticky"
};
const _hoisted_11$1 = { class: "column is-12" };
const _hoisted_12$1 = { class: "columns is-mobile is-multiline" };
const _hoisted_13$1 = { class: "column is-4 column-gap" };
const _hoisted_14$1 = /* @__PURE__ */ createTextVNode("Fase Calentamiento ");
const _hoisted_15$1 = { class: "contador" };
const _hoisted_16$1 = { class: "column is-4 column-gap" };
const _hoisted_17$1 = /* @__PURE__ */ createTextVNode("Fase Central ");
const _hoisted_18$1 = { class: "contador" };
const _hoisted_19$1 = { class: "column is-4 column-gap" };
const _hoisted_20$1 = /* @__PURE__ */ createTextVNode("Fase Vuelta a la Calma ");
const _hoisted_21$1 = { class: "contador" };
const _hoisted_22$1 = {
  key: 2,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_23$1 = /* @__PURE__ */ createTextVNode("Fase Calentamiento");
const _hoisted_24$1 = /* @__PURE__ */ createTextVNode("Existen bloques con intensidad no recomendada ");
const _hoisted_25$1 = { class: "invoice-wrapper" };
const _hoisted_26$1 = { class: "invoice-body" };
const _hoisted_27$1 = { class: "invoice-card" };
const _hoisted_28$1 = { class: "invoice-section" };
const _hoisted_29$1 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_30$1 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_31$1 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_32$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_33$1 = { key: 0 };
const _hoisted_34$1 = { key: 1 };
const _hoisted_35$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z1: Aerobico ligero", -1));
const _hoisted_36$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z2: Aerobico medio", -1));
const _hoisted_37$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z3: Aerobico intenso", -1));
const _hoisted_38$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z4: Umbral anaerobico", -1));
const _hoisted_39$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z5: Maxima intensidad", -1));
const _hoisted_40$1 = [
  _hoisted_35$1,
  _hoisted_36$1,
  _hoisted_37$1,
  _hoisted_38$1,
  _hoisted_39$1
];
const _hoisted_41$1 = { key: 2 };
const _hoisted_42$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R0: Regenerativo", -1));
const _hoisted_43$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R1: Umbral aerobico", -1));
const _hoisted_44$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R2: Umbral anaerobico", -1));
const _hoisted_45$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R3: Vo2 submaximo", -1));
const _hoisted_46$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R3+: Vo2 maximo", -1));
const _hoisted_47$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R4: Capacidad aer\xF3bica", -1));
const _hoisted_48$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R5: Potencia anaerobica", -1));
const _hoisted_49$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R6: Potencia alactica", -1));
const _hoisted_50$1 = [
  _hoisted_42$1,
  _hoisted_43$1,
  _hoisted_44$1,
  _hoisted_45$1,
  _hoisted_46$1,
  _hoisted_47$1,
  _hoisted_48$1,
  _hoisted_49$1
];
const _hoisted_51$1 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_52$1 = {
  key: 1,
  class: "text"
};
const _hoisted_53$1 = {
  key: 1,
  class: "dos_puntos",
  for: "dots"
};
const _hoisted_54$1 = {
  key: 3,
  class: "text"
};
const _hoisted_55$1 = {
  key: 1,
  class: "text"
};
const _hoisted_56$1 = { class: "column-acciones" };
const _hoisted_57$1 = { key: 0 };
const _hoisted_58$1 = { key: 1 };
const _hoisted_59$1 = { key: 1 };
const _hoisted_60$1 = { key: 0 };
const _hoisted_61$1 = {
  key: 3,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_62$1 = /* @__PURE__ */ createTextVNode("Fase Central");
const _hoisted_63$1 = { class: "btn-crear-serie sticky-serie" };
const _hoisted_64$1 = /* @__PURE__ */ createTextVNode("Crear Serie");
const _hoisted_65$1 = { class: "invoice-wrapper" };
const _hoisted_66$1 = { class: "invoice-body" };
const _hoisted_67$1 = { class: "invoice-card" };
const _hoisted_68$1 = { class: "invoice-section" };
const _hoisted_69$1 = { class: "m-0" };
const _hoisted_70$1 = {
  key: 0,
  class: "opciones-serie"
};
const _hoisted_71$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("b", null, "Serie", -1));
const _hoisted_72$1 = {
  key: 1,
  style: { "display": "flex", "justify-content": "space-between", "margin-bottom": "10px" }
};
const _hoisted_73$1 = /* @__PURE__ */ createTextVNode("Guardar Serie");
const _hoisted_74$1 = /* @__PURE__ */ createTextVNode("Eliminar Serie");
const _hoisted_75$1 = /* @__PURE__ */ createTextVNode("Agregar Ejercicio");
const _hoisted_76$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("label", { for: "repetir" }, "Repetir:", -1));
const _hoisted_77$1 = /* @__PURE__ */ createTextVNode(" * Marca el Inicio de la Serie ");
const _hoisted_78$1 = /* @__PURE__ */ createTextVNode(" * Marca el Final de la Serie ");
const _hoisted_79$1 = /* @__PURE__ */ createTextVNode(" * Error, no puedes colocar el ");
const _hoisted_80$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("b", null, "INICIO", -1));
const _hoisted_81$1 = /* @__PURE__ */ createTextVNode(" de serie despues del ");
const _hoisted_82$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("b", null, "FINAL", -1));
const _hoisted_83$1 = /* @__PURE__ */ createTextVNode(" de serie ");
const _hoisted_84$1 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_85$1 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_86$1 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_87$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_88$1 = { key: 0 };
const _hoisted_89$1 = { key: 1 };
const _hoisted_90$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z1: Aerobico ligero", -1));
const _hoisted_91$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z2: Aerobico medio", -1));
const _hoisted_92$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z3: Aerobico intenso", -1));
const _hoisted_93$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z4: Umbral anaerobico", -1));
const _hoisted_94$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z5: Maxima intensidad", -1));
const _hoisted_95$1 = [
  _hoisted_90$1,
  _hoisted_91$1,
  _hoisted_92$1,
  _hoisted_93$1,
  _hoisted_94$1
];
const _hoisted_96$1 = { key: 2 };
const _hoisted_97$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R0: Regenerativo", -1));
const _hoisted_98$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R1: Umbral aerobico", -1));
const _hoisted_99$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R2: Umbral anaerobico", -1));
const _hoisted_100$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R3: Vo2 submaximo", -1));
const _hoisted_101$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R3+: Vo2 maximo", -1));
const _hoisted_102$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R4: Capacidad aer\xF3bica", -1));
const _hoisted_103$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R5: Potencia anaerobica", -1));
const _hoisted_104$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R6: Potencia alactica", -1));
const _hoisted_105$1 = [
  _hoisted_97$1,
  _hoisted_98$1,
  _hoisted_99$1,
  _hoisted_100$1,
  _hoisted_101$1,
  _hoisted_102$1,
  _hoisted_103$1,
  _hoisted_104$1
];
const _hoisted_106$1 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_107$1 = {
  key: 1,
  class: "text"
};
const _hoisted_108$1 = {
  key: 1,
  class: "dos_puntos",
  for: "dots"
};
const _hoisted_109$1 = {
  key: 3,
  class: "text"
};
const _hoisted_110$1 = {
  key: 1,
  class: "text"
};
const _hoisted_111$1 = /* @__PURE__ */ createTextVNode(" Inicio ");
const _hoisted_112$1 = /* @__PURE__ */ createTextVNode(" Final ");
const _hoisted_113$1 = { class: "column-acciones" };
const _hoisted_114$1 = { key: 0 };
const _hoisted_115$1 = { key: 1 };
const _hoisted_116$1 = { key: 1 };
const _hoisted_117$1 = { key: 0 };
const _hoisted_118$1 = {
  key: 4,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_119$1 = /* @__PURE__ */ createTextVNode("Fase vuelta a la calma");
const _hoisted_120$1 = /* @__PURE__ */ createTextVNode("Existen bloques con intensidad no recomendada ");
const _hoisted_121$1 = { class: "invoice-wrapper" };
const _hoisted_122$1 = { class: "invoice-body" };
const _hoisted_123$1 = { class: "invoice-card" };
const _hoisted_124$1 = { class: "invoice-section" };
const _hoisted_125$1 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_126$1 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_127$1 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_128$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_129$1 = { key: 0 };
const _hoisted_130$1 = { key: 1 };
const _hoisted_131$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z1: Aerobico ligero", -1));
const _hoisted_132$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z2: Aerobico medio", -1));
const _hoisted_133$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z3: Aerobico intenso", -1));
const _hoisted_134$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z4: Umbral anaerobico", -1));
const _hoisted_135$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "Z5: Maxima intensidad", -1));
const _hoisted_136$1 = [
  _hoisted_131$1,
  _hoisted_132$1,
  _hoisted_133$1,
  _hoisted_134$1,
  _hoisted_135$1
];
const _hoisted_137$1 = { key: 2 };
const _hoisted_138$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R0: Regenerativo", -1));
const _hoisted_139$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R1: Umbral aerobico", -1));
const _hoisted_140$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R2: Umbral anaerobico", -1));
const _hoisted_141$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R3: Vo2 submaximo", -1));
const _hoisted_142$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R3+: Vo2 maximo", -1));
const _hoisted_143$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R4: Capacidad aer\xF3bica", -1));
const _hoisted_144$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R5: Potencia anaerobica", -1));
const _hoisted_145$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("li", null, "R6: Potencia alactica", -1));
const _hoisted_146$1 = [
  _hoisted_138$1,
  _hoisted_139$1,
  _hoisted_140$1,
  _hoisted_141$1,
  _hoisted_142$1,
  _hoisted_143$1,
  _hoisted_144$1,
  _hoisted_145$1
];
const _hoisted_147$1 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_148$1 = {
  key: 1,
  class: "text"
};
const _hoisted_149$1 = {
  key: 1,
  class: "dos_puntos",
  for: "dots"
};
const _hoisted_150$1 = {
  key: 3,
  class: "text"
};
const _hoisted_151$1 = {
  key: 1,
  class: "text"
};
const _hoisted_152$1 = { class: "column-acciones" };
const _hoisted_153$1 = { key: 0 };
const _hoisted_154$1 = { key: 1 };
const _hoisted_155$1 = { key: 1 };
const _hoisted_156$1 = { key: 0 };
const _hoisted_157$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("h1", null, [
    /* @__PURE__ */ createBaseVNode("b", null, "\xBF"),
    /* @__PURE__ */ createTextVNode("Est\xE1s seguro de borrar la serie "),
    /* @__PURE__ */ createBaseVNode("b", null, "?")
  ])
], -1));
const _hoisted_158$1 = /* @__PURE__ */ createTextVNode(" Cerrar ");
const _hoisted_159$1 = /* @__PURE__ */ createTextVNode(" Confirmar");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    deportistaId: { default: "" },
    opcionactual: { default: void 0 },
    dFC: { default: () => {
      return {};
    } },
    dZR: { default: () => {
      return {};
    } }
  },
  emits: ["crear-serie"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const serieStore = seriesFaseCentralStore();
    const { rutinaPersonalizada } = storeToRefs(rutinaPersonalizadaStore());
    const { serieEditar, isSerieEditando } = storeToRefs(serieEditarStore());
    const { setIsSerieEditando } = serieEditarStore();
    const {
      duplicarSesionFaseCalentamiento,
      duplicarSesionFaseCentral,
      duplicarSesionFaseCalma,
      eliminarSesionFaseCalentamiento,
      eliminarSesionFaseCentral,
      eliminarSesionFaseCalma,
      agregarSesionFaseCalentamiento,
      agregarSesionFaseCentral,
      agregarSesionFaseCalma,
      getNumeroSesionesFaseCalentambiento,
      getNumeroSesionesFaseCentral,
      getNumeroSesionesFaseCalma,
      getNumeroTotalSesionesRutina,
      validarRestricciones,
      getIndexSerieFaseCentral,
      eliminarSerie
    } = rutinaPersonalizadaStore();
    const mostrarRrestriccionFaseCalentamiento = ref(false);
    const mostrarRestricionFaseVueltaALaCalma = ref(false);
    const tipoMedicion = TIPO_RANGO_BLOQUE;
    const opcionesIntensidad = ref(
      GET_OPCIONES_INSIDAD_RUTINA(rutinaPersonalizada.value.tipo_esfuerzo).valuesEntrenador
    );
    const valSensaciones = ref(
      GET_OPCIONES_INSIDAD_RUTINA(rutinaPersonalizada.value.tipo_esfuerzo).valuesDeportista
    );
    const refrescarValidaciones = ref(0);
    const serieAProcesar = ref("");
    const serieEliminar = ref(null);
    const serieControlRenderBtnCrearSerie = ref("");
    const btnCrearSerie = ref(false);
    const isBorrarSerie = ref(false);
    const datosNuevaSesion = reactive({
      tipo: tipoMedicion[0],
      duracion_min: 5,
      duracion_seg: 0,
      intensidad: opcionesIntensidad.value[0],
      marca: ""
    });
    const handleMarcarSerie = (marca, index, serieNombre) => {
      var _a, _b, _c;
      switch (marca) {
        case "inicio":
          const serieInicio = (_a = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _a.series.find(
            (serieInicio2) => serieInicio2.nombre === serieNombre
          );
          serieInicio == null ? void 0 : serieInicio.sesiones.forEach((sesion) => {
            if (sesion.marca === "inicio") {
              sesion.marca = "";
              serieInicio.inicio = -1;
            }
          });
          if (serieInicio && serieInicio.sesiones[index]) {
            serieInicio.sesiones[index].marca = "inicio";
            serieInicio.inicio = index;
            if (index === serieInicio.final) {
              serieInicio.final = -1;
            }
          }
          break;
        case "final":
          const serieFinal = (_b = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _b.series.find(
            (serieFinal2) => serieFinal2.nombre === serieNombre
          );
          serieFinal == null ? void 0 : serieFinal.sesiones.forEach((sesion) => {
            if (sesion.marca === "final") {
              sesion.marca = "";
              serieFinal.final = -1;
            }
          });
          if (serieFinal && serieFinal.sesiones[index]) {
            serieFinal.sesiones[index].marca = "final";
            serieFinal.final = index;
            if (index === serieFinal.inicio) {
              serieFinal.inicio = -1;
            }
          }
          break;
      }
      const serie = (_c = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _c.series.find(
        (serieInicio) => serieInicio.nombre === serieNombre
      );
      const sesionesContenidasEnSerie = serie == null ? void 0 : serie.sesiones.slice(
        serie.inicio ? serie.inicio : 0,
        serie.final ? serie.final : 0
      );
      if ((serie == null ? void 0 : serie.inicio) !== -1 && (serie == null ? void 0 : serie.final) !== -1) {
        serie == null ? void 0 : serie.sesiones.forEach((sesion) => {
          if (sesion.marca == "serie") {
            sesion.marca = "";
          }
        });
        sesionesContenidasEnSerie == null ? void 0 : sesionesContenidasEnSerie.forEach((sesion) => {
          if (sesion.marca !== "inicio" && sesion.marca !== "final") {
            sesion.marca = "serie";
          }
        });
      } else {
        serie == null ? void 0 : serie.sesiones.forEach((sesion) => {
          if (sesion.marca == "serie") {
            sesion.marca = "";
          }
        });
      }
      refrescarValidaciones.value++;
    };
    const handleValidarRestriccionIntensidad = (fase) => {
      var _a, _b;
      switch (fase) {
        case "calentamiento":
          mostrarRrestriccionFaseCalentamiento.value = validarRestricciones(
            (_a = rutinaPersonalizada.value.sesiones_calentamiento) != null ? _a : []
          );
          break;
        case "calma":
          mostrarRestricionFaseVueltaALaCalma.value = validarRestricciones(
            (_b = rutinaPersonalizada.value.sesiones_calma) != null ? _b : []
          );
          break;
      }
    };
    const handleCrearSesion = (fase) => {
      datosNuevaSesion.tipo = tiposDeBloque[0].label;
      switch (fase) {
        case "calentamiento":
          agregarSesionFaseCalentamiento(datosNuevaSesion);
          break;
        case "central":
          agregarSesionFaseCentral(datosNuevaSesion);
          break;
        case "calma":
          agregarSesionFaseCalma(datosNuevaSesion);
          break;
      }
    };
    const columns = reactive({
      tipo: { label: "Tipo", align: "center" },
      duracion_min: { label: "min:seg", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: {
        label: labelEsfuerzo(rutinaPersonalizada.value.tipo_esfuerzo),
        align: "center"
      },
      accion: { label: "Acci\xF3n", align: "center" }
    });
    const columnsCentral = reactive({
      tipo: { label: "Tipo", align: "center" },
      duracion_min: { label: "min:seg", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: {
        label: labelEsfuerzo(rutinaPersonalizada.value.tipo_esfuerzo),
        align: "center"
      },
      serie: { label: "Serie", align: "center" },
      accion: { label: "Acci\xF3n", align: "center" }
    });
    const columns_ver_rutina = reactive({
      tipo: { label: "Tipo", align: "center" },
      duracion_min: { label: "min:seg", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: {
        label: labelEsfuerzo(rutinaPersonalizada.value.tipo_esfuerzo),
        align: "center"
      }
    });
    const validarMostrarBotonCrearSerie = () => {
      var _a, _b;
      const serieEncontrada = (_a = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _a.series.find(
        (itemSerie) => itemSerie.nombre === serieControlRenderBtnCrearSerie.value
      );
      if (serieEncontrada) {
        btnCrearSerie.value = ((_b = serieEncontrada.sesiones) == null ? void 0 : _b.length) >= 2 && serieEncontrada.editando === false;
      } else {
        btnCrearSerie.value = false;
      }
    };
    const crearSerie = () => {
      var _a;
      serieAProcesar.value = `serie_${serieStore.getNumeroSeries()}`;
      serieControlRenderBtnCrearSerie.value = `serie_${serieStore.getNumeroSeries()}`;
      const serieEncontrada = (_a = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _a.series.find(
        (itemSerie) => itemSerie.nombre === serieAProcesar.value
      );
      if (serieEncontrada) {
        serieEncontrada.editando = true;
      }
    };
    const editarSerie = (actual, anterior) => {
      var _a, _b;
      const serieEncontrada = (_a = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _a.series.find(
        (itemSerie) => itemSerie.nombre === actual
      );
      if (serieEncontrada) {
        serieEncontrada.editando = true;
        serieStore.setNumeroSeries(getIndexSerieFaseCentral(actual) + 1);
        setIsSerieEditando(true);
        serieAProcesar.value = actual;
        serieControlRenderBtnCrearSerie.value = actual;
      }
      const serieEncontradaAnterior = (_b = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _b.series.find(
        (itemSerie) => itemSerie.nombre === anterior
      );
      if (serieEncontradaAnterior) {
        serieEncontradaAnterior.editando = false;
        serieStore.setNumeroSeries(rutinaPersonalizada.value.sesiones_central.numero_series);
      }
    };
    const handleAgregarSesionASerie = (serie) => {
      datosNuevaSesion.tipo = tiposDeBloque[0].label;
      agregarSesionFaseCentral(datosNuevaSesion, serie.nombre);
    };
    const handleGuardarSerie = (serie) => {
      var _a;
      const serieEncontrada = (_a = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _a.series.find(
        (itemSerie) => itemSerie.nombre === serie.nombre
      );
      if (serieEncontrada) {
        if (!serieEncontrada.creada) {
          serieEncontrada.creada = true;
          serieEncontrada.editando = false;
          serieStore.setNumeroSeries(serieStore.getNumeroSeries() + 1);
          rutinaPersonalizada.value.sesiones_central.numero_series = serieStore.getNumeroSeries();
          emits("crear-serie");
          serieAProcesar.value = "";
          serieControlRenderBtnCrearSerie.value = `serie_${serieStore.getNumeroSeries()}`;
        } else {
          serieEncontrada.editando = false;
          serieStore.setNumeroSeries(rutinaPersonalizada.value.sesiones_central.numero_series);
          serieAProcesar.value = "";
          serieControlRenderBtnCrearSerie.value = `serie_${rutinaPersonalizada.value.sesiones_central.numero_series}`;
        }
      }
      setIsSerieEditando(false);
    };
    const handleEliminarSerie = (serie) => {
      isBorrarSerie.value = true;
      serieEliminar.value = serie;
    };
    const eliminarSerieModal = () => {
      if (serieEliminar.value) {
        eliminarSerie(serieEliminar.value);
        if (serieEliminar.value.creada) {
          serieStore.setNumeroSeries(rutinaPersonalizada.value.sesiones_central.numero_series);
          serieControlRenderBtnCrearSerie.value = `serie_${serieStore.getNumeroSeries()}`;
          serieAProcesar.value = "";
        } else {
          serieStore.setNumeroSeries(serieStore.getNumeroSeries() + 1);
          rutinaPersonalizada.value.sesiones_central.numero_series = serieStore.getNumeroSeries();
          emits("crear-serie");
          serieAProcesar.value = "";
          serieControlRenderBtnCrearSerie.value = `serie_${serieStore.getNumeroSeries()}`;
        }
      }
      isBorrarSerie.value = false;
      serieEliminar.value = null;
      setIsSerieEditando(false);
    };
    const validacionErrorIncioDespuesDeFinal = (serie) => {
      let serieValida = false;
      if (serie.inicio !== -1 && serie.final !== -1) {
        serieValida = serie.inicio > serie.final;
      }
      return serieValida;
    };
    const verificarSerieEnEdicion = () => {
      const serieEnEdicion = rutinaPersonalizada == null ? void 0 : rutinaPersonalizada.value.sesiones_central.series.find(
        (s) => s.editando
      );
      if (serieEnEdicion) {
        setIsSerieEditando(true);
      } else {
        setIsSerieEditando(false);
      }
    };
    onMounted(() => {
      serieControlRenderBtnCrearSerie.value = `serie_${serieStore.getNumeroSeries()}`;
      verificarSerieEnEdicion();
    });
    watch(
      () => serieEditar.value,
      (actual, anterior) => {
        var _a, _b;
        editarSerie((_a = actual == null ? void 0 : actual.nombre) != null ? _a : "", (_b = anterior == null ? void 0 : anterior.nombre) != null ? _b : "");
      }
    );
    watch(rutinaPersonalizada.value, () => {
      validarMostrarBotonCrearSerie();
    });
    return (_ctx, _cache) => {
      var _a, _b, _c;
      const _component_VMessage = _sfc_main$2;
      const _component_VButton = _sfc_main$4;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VOption = _sfc_main$5;
      const _component_VSelect = _sfc_main$6;
      const _component_VControl = __unplugin_components_0$1;
      const _component_VFlexTableCell = _sfc_main$7;
      const _component_VInput = _sfc_main$8;
      const _component_VistaRangos = _sfc_main$3;
      const _component_VIconButton = _sfc_main$9;
      const _component_VFlexTable = _sfc_main$a;
      const _component_VTextarea = _sfc_main$b;
      const _component_CircularMenuSerie = resolveComponent("CircularMenuSerie");
      const _component_VFlexItem = _sfc_main$c;
      const _component_VField = _sfc_main$d;
      const _component_VFlex = _sfc_main$e;
      const _component_VModal = _sfc_main$f;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
            unref(getNumeroTotalSesionesRutina)() === 0 ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, [
                createVNode(_component_VMessage, { color: "info" }, {
                  default: withCtx(() => [
                    _hoisted_4$1,
                    _hoisted_5$1
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true),
            unref(getNumeroTotalSesionesRutina)() > 0 && (unref(getNumeroSesionesFaseCalentambiento)() === 0 || unref(getNumeroSesionesFaseCentral)() === 0 || unref(getNumeroSesionesFaseCalma)() === 0) ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
              createBaseVNode("div", _hoisted_7$1, [
                createVNode(_component_VMessage, { color: "warning" }, {
                  default: withCtx(() => [
                    _hoisted_8$1,
                    createBaseVNode("span", _hoisted_9$1, toDisplayString(unref(getNumeroSesionesFaseCalentambiento)() === 0 ? " (Calentamiento) " : "") + toDisplayString(unref(getNumeroSesionesFaseCentral)() === 0 ? " (Central) " : "") + toDisplayString(unref(getNumeroSesionesFaseCalma)() === 0 ? " (Calma) " : ""), 1)
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
            createBaseVNode("div", _hoisted_11$1, [
              createBaseVNode("div", _hoisted_12$1, [
                createBaseVNode("div", _hoisted_13$1, [
                  createVNode(_component_VButton, {
                    class: "btn",
                    icon: "feather:plus",
                    color: "success",
                    onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => handleCrearSesion("calentamiento"), ["prevent"]), ["space"])),
                    onClick: _cache[1] || (_cache[1] = ($event) => handleCrearSesion("calentamiento"))
                  }, {
                    default: withCtx(() => [
                      _hoisted_14$1,
                      createBaseVNode("span", _hoisted_15$1, toDisplayString(unref(getNumeroSesionesFaseCalentambiento)()), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_16$1, [
                  createVNode(_component_VButton, {
                    class: "btn",
                    icon: "feather:plus",
                    color: "success",
                    onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => handleCrearSesion("central"), ["prevent"]), ["space"])),
                    onClick: _cache[3] || (_cache[3] = ($event) => handleCrearSesion("central"))
                  }, {
                    default: withCtx(() => [
                      _hoisted_17$1,
                      createBaseVNode("span", _hoisted_18$1, toDisplayString(unref(getNumeroSesionesFaseCentral)()), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_19$1, [
                  createVNode(_component_VButton, {
                    class: "btn",
                    icon: "feather:plus",
                    color: "success",
                    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => handleCrearSesion("calma"), ["prevent"]), ["space"])),
                    onClick: _cache[5] || (_cache[5] = ($event) => handleCrearSesion("calma"))
                  }, {
                    default: withCtx(() => [
                      _hoisted_20$1,
                      createBaseVNode("span", _hoisted_21$1, toDisplayString(unref(getNumeroSesionesFaseCalma)()), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(getNumeroSesionesFaseCalentambiento)() > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_22$1, [
            createBaseVNode("legend", null, [
              createVNode(_component_VMessage, {
                color: "info",
                class: "legend"
              }, {
                default: withCtx(() => [
                  _hoisted_23$1
                ]),
                _: 1
              })
            ]),
            mostrarRrestriccionFaseCalentamiento.value ? (openBlock(), createBlock(_component_VMessage, {
              key: 0,
              color: "warning"
            }, {
              default: withCtx(() => [
                _hoisted_24$1
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_25$1, [
              createBaseVNode("div", _hoisted_26$1, [
                createBaseVNode("div", _hoisted_27$1, [
                  createBaseVNode("div", _hoisted_28$1, [
                    createVNode(_component_VFlexTable, {
                      data: (_a = unref(rutinaPersonalizada).sesiones_calentamiento) != null ? _a : [],
                      columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                      fase: "calentamiento",
                      rounded: "",
                      reactive: ""
                    }, {
                      "header-column": withCtx(({ column }) => [
                        column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_29$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "duracion_min" ? (openBlock(), createElementBlock("span", _hoisted_30$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_31$1, [
                          createTextVNode(toDisplayString(column.label) + " ", 1),
                          props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                            content: withCtx(() => [
                              createBaseVNode("section", null, [
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_33$1, " Sensaciones ")) : createCommentVNode("", true),
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("ul", _hoisted_34$1, _hoisted_40$1)) : createCommentVNode("", true),
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("ul", _hoisted_41$1, _hoisted_50$1)) : createCommentVNode("", true)
                              ])
                            ]),
                            default: withCtx(() => [
                              _hoisted_32$1
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_51$1, toDisplayString(column.label), 1)) : createCommentVNode("", true)
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
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_52$1, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
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
                                  placeholder: "mm",
                                  style: { "width": "70px" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("label", _hoisted_53$1, " : ")) : createCommentVNode("", true),
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 2 }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: row.duracion_seg,
                                  "onUpdate:modelValue": ($event) => row.duracion_seg = $event,
                                  modelModifiers: { number: true },
                                  class: "is-rounded",
                                  type: "number",
                                  min: "0",
                                  placeholder: "ss",
                                  style: { "width": "70px" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_54$1, toDisplayString(unref(formatearHoraDobleDigito)(row.duracion_min, row.duracion_seg)), 1)) : createCommentVNode("", true)
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
                                  class: normalizeClass({
                                    "is-rounded": true,
                                    "is-warning": row.intensidad >= 4 || row.intensidad === "Z2" || row.intensidad === "R2" || row.intensidad === "R3" || row.intensidad === "R4" || row.intensidad === "R5" || row.intensidad === "R6" || row.intensidad === "R3+" || row.intensidad === "Z3" || row.intensidad === "Z4" || row.intensidad === "Z5"
                                  }),
                                  onChange: _cache[6] || (_cache[6] = withModifiers(($event) => handleValidarRestriccionIntensidad("calentamiento"), ["stop"]))
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
                                }, 1032, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_55$1, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 3,
                          column: { align: "start" }
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
                        column.key === "accion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 4,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_56$1, [
                              props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_57$1, [
                                createVNode(_component_VIconButton, {
                                  icon: "feather:copy",
                                  color: "success",
                                  circle: "",
                                  outlined: "",
                                  onKeydown: withKeys(withModifiers(($event) => unref(duplicarSesionFaseCalentamiento)(row), ["prevent"]), ["space"]),
                                  onClick: ($event) => unref(duplicarSesionFaseCalentamiento)(row)
                                }, null, 8, ["onKeydown", "onClick"])
                              ])) : createCommentVNode("", true),
                              props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_58$1, [
                                createVNode(_component_VIconButton, {
                                  icon: "feather:trash",
                                  color: "danger",
                                  circle: "",
                                  outlined: "",
                                  onKeydown: withKeys(withModifiers(($event) => unref(eliminarSesionFaseCalentamiento)(index), ["prevent"]), ["space"]),
                                  onClick: ($event) => unref(eliminarSesionFaseCalentamiento)(index)
                                }, null, 8, ["onKeydown", "onClick"])
                              ])) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["data", "columns"]),
                    props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_VTextarea, {
                          modelValue: unref(rutinaPersonalizada).comentarios_fase_calentamiento,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(rutinaPersonalizada).comentarios_fase_calentamiento = $event),
                          class: "textarea is-info-focus",
                          rows: "2",
                          placeholder: "Ingresa comentarios",
                          disabled: __props.opcionactual === "ver"
                        }, null, 8, ["modelValue", "disabled"])
                      ]),
                      _: 1
                    })) : (openBlock(), createElementBlock("span", _hoisted_59$1, [
                      ((_b = unref(rutinaPersonalizada).comentarios_fase_calentamiento.length) != null ? _b : 0) ? (openBlock(), createElementBlock("p", _hoisted_60$1, toDisplayString(unref(rutinaPersonalizada).comentarios_fase_calentamiento), 1)) : createCommentVNode("", true)
                    ]))
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(getNumeroSesionesFaseCentral)() > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_61$1, [
            createBaseVNode("legend", null, [
              createVNode(_component_VMessage, {
                color: "info",
                class: "legend"
              }, {
                default: withCtx(() => [
                  _hoisted_62$1
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_63$1, [
              serieAProcesar.value === "" && btnCrearSerie.value ? (openBlock(), createBlock(_component_VButton, {
                key: 0,
                color: "primary",
                onClick: crearSerie
              }, {
                default: withCtx(() => [
                  _hoisted_64$1
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_65$1, [
              createBaseVNode("div", _hoisted_66$1, [
                createBaseVNode("div", _hoisted_67$1, [
                  createBaseVNode("div", _hoisted_68$1, [
                    createBaseVNode("fieldset", _hoisted_69$1, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList((_c = unref(rutinaPersonalizada).sesiones_central) == null ? void 0 : _c.series, (serie, i) => {
                        var _a2;
                        return openBlock(), createElementBlock("div", { key: i }, [
                          props.opcionactual === "editar" || props.opcionactual === "crear" || props.opcionactual === "ver" && !serie.editando ? (openBlock(), createElementBlock("div", {
                            key: 0,
                            class: "serie",
                            style: normalizeStyle({
                              borderColor: serie.creada && serie.editando ? "orange" : serie.creada ? serie.color : serie.editando ? "orange" : "transparent",
                              borderWidth: "3px",
                              borderStyle: "dashed"
                            })
                          }, [
                            serie.creada && !serie.editando ? (openBlock(), createElementBlock("div", _hoisted_70$1, [
                              createBaseVNode("h1", null, [
                                _hoisted_71$1,
                                createTextVNode(": " + toDisplayString(i + 1), 1)
                              ]),
                              __props.opcionactual !== "ver" && !unref(isSerieEditando) ? (openBlock(), createBlock(_component_CircularMenuSerie, {
                                key: 0,
                                serie,
                                onEliminarSerie: handleEliminarSerie
                              }, null, 8, ["serie"])) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            props.opcionactual === "editar" || props.opcionactual === "crear" ? (openBlock(), createElementBlock("div", _hoisted_72$1, [
                              serie.editando ? (openBlock(), createBlock(_component_VButton, {
                                key: 0,
                                color: "primary",
                                disabled: serie.inicio === -1 || serie.final === -1 || validacionErrorIncioDespuesDeFinal(serie),
                                onClick: () => handleGuardarSerie(serie)
                              }, {
                                default: withCtx(() => [
                                  _hoisted_73$1
                                ]),
                                _: 2
                              }, 1032, ["disabled", "onClick"])) : createCommentVNode("", true),
                              serie.editando ? (openBlock(), createBlock(_component_VButton, {
                                key: 1,
                                color: "danger",
                                onClick: () => handleEliminarSerie(serie)
                              }, {
                                default: withCtx(() => [
                                  _hoisted_74$1
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              serie.creada && serie.editando ? (openBlock(), createBlock(_component_VButton, {
                                key: 2,
                                color: "warning",
                                onClick: () => handleAgregarSesionASerie(serie)
                              }, {
                                default: withCtx(() => [
                                  _hoisted_75$1
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              serie.editando ? (openBlock(), createElementBlock("legend", {
                                key: 3,
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
                                        _hoisted_76$1
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
                                                  modelValue: serie.repeticiones,
                                                  "onUpdate:modelValue": ($event) => serie.repeticiones = $event,
                                                  modelModifiers: { number: true },
                                                  min: "1",
                                                  type: "number",
                                                  placeholder: "0"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ], 2)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            serie.inicio === -1 && (serie.creada || serie.editando) ? (openBlock(), createBlock(_component_VMessage, {
                              key: refrescarValidaciones.value,
                              color: "danger"
                            }, {
                              default: withCtx(() => [
                                _hoisted_77$1
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            serie.final === -1 && (serie.creada || serie.editando) ? (openBlock(), createBlock(_component_VMessage, {
                              key: refrescarValidaciones.value,
                              color: "danger"
                            }, {
                              default: withCtx(() => [
                                _hoisted_78$1
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            validacionErrorIncioDespuesDeFinal(serie) && (serie.creada || serie.editando) ? (openBlock(), createBlock(_component_VMessage, {
                              key: 4,
                              color: "danger"
                            }, {
                              default: withCtx(() => [
                                _hoisted_79$1,
                                _hoisted_80$1,
                                _hoisted_81$1,
                                _hoisted_82$1,
                                _hoisted_83$1
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_VFlexTable, {
                              data: (_a2 = unref(rutinaPersonalizada).sesiones_central) == null ? void 0 : _a2.series[i].sesiones,
                              columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columnsCentral) : unref(columns_ver_rutina),
                              serie,
                              fase: "central",
                              rounded: "",
                              reactive: ""
                            }, {
                              "header-column": withCtx(({ column }) => [
                                column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_84$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                                column.key === "duracion_min" ? (openBlock(), createElementBlock("span", _hoisted_85$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                                column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_86$1, [
                                  createTextVNode(toDisplayString(column.label) + " ", 1),
                                  props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                                    content: withCtx(() => [
                                      createBaseVNode("section", null, [
                                        unref(rutinaPersonalizada).tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_88$1, " Sensaciones ")) : createCommentVNode("", true),
                                        unref(rutinaPersonalizada).tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("ul", _hoisted_89$1, _hoisted_95$1)) : createCommentVNode("", true),
                                        unref(rutinaPersonalizada).tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("ul", _hoisted_96$1, _hoisted_105$1)) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    default: withCtx(() => [
                                      _hoisted_87$1
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true),
                                column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_106$1, toDisplayString(column.label), 1)) : createCommentVNode("", true)
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
                                    props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_107$1, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
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
                                          placeholder: "mm",
                                          style: { "width": "70px" }
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true),
                                    props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("label", _hoisted_108$1, " : ")) : createCommentVNode("", true),
                                    props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 2 }, {
                                      default: withCtx(() => [
                                        createVNode(_component_VInput, {
                                          modelValue: row.duracion_seg,
                                          "onUpdate:modelValue": ($event) => row.duracion_seg = $event,
                                          modelModifiers: { number: true },
                                          class: "is-rounded",
                                          type: "number",
                                          min: "0",
                                          placeholder: "ss",
                                          style: { "width": "70px" }
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true),
                                    props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_109$1, toDisplayString(unref(formatearHoraDobleDigito)(row.duracion_min, row.duracion_seg)), 1)) : createCommentVNode("", true)
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
                                    props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_110$1, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                column.key === "rango" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                                  key: 3,
                                  column: { align: "start" }
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
                                        !serie.creada || serie.editando ? (openBlock(), createBlock(_component_VSelect, {
                                          key: 0,
                                          modelValue: row.marca,
                                          "onUpdate:modelValue": ($event) => row.marca = $event,
                                          class: "is-rounded",
                                          onChange: withModifiers(($event) => handleMarcarSerie(row.marca, index, serie.nombre), ["stop"])
                                        }, {
                                          default: withCtx(() => [
                                            index < serie.sesiones.length - 1 ? (openBlock(), createBlock(_component_VOption, {
                                              key: 0,
                                              value: "inicio",
                                              onClick: () => handleMarcarSerie("inicio", index, serie.nombre)
                                            }, {
                                              default: withCtx(() => [
                                                _hoisted_111$1
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])) : createCommentVNode("", true),
                                            index > 0 ? (openBlock(), createBlock(_component_VOption, {
                                              key: 1,
                                              value: "final",
                                              onClick: () => handleMarcarSerie("final", index, serie.nombre)
                                            }, {
                                              default: withCtx(() => [
                                                _hoisted_112$1
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])) : createCommentVNode("", true),
                                            createVNode(_component_VOption, { value: null })
                                          ]),
                                          _: 2
                                        }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                column.key === "accion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                                  key: 5,
                                  column: { align: "center" }
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_113$1, [
                                      props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_114$1, [
                                        createVNode(_component_VIconButton, {
                                          icon: "feather:copy",
                                          color: "success",
                                          circle: "",
                                          outlined: "",
                                          onKeydown: withKeys(withModifiers(($event) => unref(duplicarSesionFaseCentral)(row, serie), ["prevent"]), ["space"]),
                                          onClick: ($event) => unref(duplicarSesionFaseCentral)(row, serie)
                                        }, null, 8, ["onKeydown", "onClick"])
                                      ])) : createCommentVNode("", true),
                                      props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_115$1, [
                                        createVNode(_component_VIconButton, {
                                          icon: "feather:trash",
                                          color: "danger",
                                          circle: "",
                                          outlined: "",
                                          onKeydown: withKeys(withModifiers(($event) => unref(eliminarSesionFaseCentral)(index, serie), ["prevent"]), ["space"]),
                                          onClick: ($event) => unref(eliminarSesionFaseCentral)(index, serie)
                                        }, null, 8, ["onKeydown", "onClick"])
                                      ])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["data", "columns", "serie"])
                          ], 4)) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ]),
                    props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_VTextarea, {
                          modelValue: unref(rutinaPersonalizada).comentarios_fase_central,
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(rutinaPersonalizada).comentarios_fase_central = $event),
                          class: "textarea is-info-focus",
                          rows: "2",
                          placeholder: "Ingresa comentarios",
                          disabled: __props.opcionactual === "ver"
                        }, null, 8, ["modelValue", "disabled"])
                      ]),
                      _: 1
                    })) : (openBlock(), createElementBlock("span", _hoisted_116$1, [
                      unref(rutinaPersonalizada).comentarios_fase_central.length > 0 ? (openBlock(), createElementBlock("p", _hoisted_117$1, toDisplayString(unref(rutinaPersonalizada).comentarios_fase_central), 1)) : createCommentVNode("", true)
                    ]))
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(getNumeroSesionesFaseCalma)() > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_118$1, [
            createBaseVNode("legend", null, [
              createVNode(_component_VMessage, {
                color: "info",
                class: "legend"
              }, {
                default: withCtx(() => [
                  _hoisted_119$1
                ]),
                _: 1
              })
            ]),
            mostrarRestricionFaseVueltaALaCalma.value ? (openBlock(), createBlock(_component_VMessage, {
              key: 0,
              color: "warning"
            }, {
              default: withCtx(() => [
                _hoisted_120$1
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_121$1, [
              createBaseVNode("div", _hoisted_122$1, [
                createBaseVNode("div", _hoisted_123$1, [
                  createBaseVNode("div", _hoisted_124$1, [
                    createVNode(_component_VFlexTable, {
                      data: unref(rutinaPersonalizada).sesiones_calma,
                      columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                      fase: "calma",
                      rounded: "",
                      reactive: ""
                    }, {
                      "header-column": withCtx(({ column }) => [
                        column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_125$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "duracion_min" ? (openBlock(), createElementBlock("span", _hoisted_126$1, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_127$1, [
                          createTextVNode(toDisplayString(column.label) + " ", 1),
                          props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                            content: withCtx(() => [
                              createBaseVNode("section", null, [
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_129$1, " Sensaciones ")) : createCommentVNode("", true),
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("ul", _hoisted_130$1, _hoisted_136$1)) : createCommentVNode("", true),
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("ul", _hoisted_137$1, _hoisted_146$1)) : createCommentVNode("", true)
                              ])
                            ]),
                            default: withCtx(() => [
                              _hoisted_128$1
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_147$1, toDisplayString(column.label), 1)) : createCommentVNode("", true)
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
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_148$1, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
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
                                  placeholder: "mm",
                                  style: { "width": "70px" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("label", _hoisted_149$1, " : ")) : createCommentVNode("", true),
                            props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 2 }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: row.duracion_seg,
                                  "onUpdate:modelValue": ($event) => row.duracion_seg = $event,
                                  modelModifiers: { number: true },
                                  class: "is-rounded",
                                  type: "number",
                                  min: "0",
                                  placeholder: "ss",
                                  style: { "width": "70px" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_150$1, toDisplayString(unref(formatearHoraDobleDigito)(row.duracion_min, row.duracion_seg)), 1)) : createCommentVNode("", true)
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
                                  class: normalizeClass({
                                    "is-rounded": true,
                                    "is-warning": row.intensidad >= 4 || row.intensidad === "Z2" || row.intensidad === "R2" || row.intensidad === "R3" || row.intensidad === "R4" || row.intensidad === "R5" || row.intensidad === "R6" || row.intensidad === "R3+" || row.intensidad === "Z3" || row.intensidad === "Z4" || row.intensidad === "Z5"
                                  }),
                                  onChange: _cache[9] || (_cache[9] = withModifiers(($event) => handleValidarRestriccionIntensidad("calma"), ["stop"]))
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
                                }, 1032, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_151$1, toDisplayString(row.intensidad), 1)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 3,
                          column: { align: "start" }
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
                        column.key === "accion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 4,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_152$1, [
                              props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_153$1, [
                                createVNode(_component_VIconButton, {
                                  icon: "feather:copy",
                                  color: "success",
                                  circle: "",
                                  outlined: "",
                                  onKeydown: withKeys(withModifiers(($event) => unref(duplicarSesionFaseCalma)(row), ["prevent"]), ["space"]),
                                  onClick: ($event) => unref(duplicarSesionFaseCalma)(row)
                                }, null, 8, ["onKeydown", "onClick"])
                              ])) : createCommentVNode("", true),
                              props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_154$1, [
                                createVNode(_component_VIconButton, {
                                  icon: "feather:trash",
                                  color: "danger",
                                  circle: "",
                                  outlined: "",
                                  onKeydown: withKeys(withModifiers(($event) => unref(eliminarSesionFaseCalma)(index), ["prevent"]), ["space"]),
                                  onClick: ($event) => unref(eliminarSesionFaseCalma)(index)
                                }, null, 8, ["onKeydown", "onClick"])
                              ])) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["data", "columns"]),
                    props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_VTextarea, {
                          modelValue: unref(rutinaPersonalizada).comentarios_fase_calma,
                          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(rutinaPersonalizada).comentarios_fase_calma = $event),
                          class: "textarea is-info-focus",
                          rows: "2",
                          placeholder: "Ingresa comentarios",
                          disabled: __props.opcionactual === "ver"
                        }, null, 8, ["modelValue", "disabled"])
                      ]),
                      _: 1
                    })) : (openBlock(), createElementBlock("span", _hoisted_155$1, [
                      unref(rutinaPersonalizada).comentarios_fase_calma.length > 0 ? (openBlock(), createElementBlock("p", _hoisted_156$1, toDisplayString(unref(rutinaPersonalizada).comentarios_fase_calma), 1)) : createCommentVNode("", true)
                    ]))
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        createVNode(_component_VModal, {
          open: isBorrarSerie.value,
          title: "Recomendaci\xF3n",
          actions: "center",
          size: "small",
          noscroll: ""
        }, {
          content: withCtx(() => [
            _hoisted_157$1
          ]),
          cancel: withCtx(() => [
            createVNode(_component_VButton, {
              color: "danger",
              onClick: _cache[11] || (_cache[11] = ($event) => isBorrarSerie.value = false)
            }, {
              default: withCtx(() => [
                _hoisted_158$1
              ]),
              _: 1
            })
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              class: "success",
              color: "success",
              onClick: eliminarSerieModal
            }, {
              default: withCtx(() => [
                _hoisted_159$1
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5655489f"]]);
var BloquesDistancia_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-0b9ef8c5"), n = n(), popScopeId(), n);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 0,
  class: "columns"
};
const _hoisted_3 = { class: "column" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("En esta secci\xF3n debes agregar tus bloques de rutina ");
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { style: { "font-weight": "bold" } }, " (M\xEDnimo un bloque por cada fase)", -1));
const _hoisted_6 = {
  key: 1,
  class: "columns"
};
const _hoisted_7 = { class: "column" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Al menos debe haber un bloque de ");
const _hoisted_9 = { style: { "font-weight": "bold" } };
const _hoisted_10 = {
  key: 1,
  class: "columns is-mobile sticky"
};
const _hoisted_11 = { class: "column is-12" };
const _hoisted_12 = { class: "columns is-multiline is-mobile" };
const _hoisted_13 = { class: "column is-4 column-gap" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Fase Calentamiento ");
const _hoisted_15 = { class: "contador" };
const _hoisted_16 = { class: "column is-4 column-gap" };
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Fase Central ");
const _hoisted_18 = { class: "contador" };
const _hoisted_19 = { class: "column is-4 column-gap" };
const _hoisted_20 = /* @__PURE__ */ createTextVNode("Fase Vuelta a la Calma ");
const _hoisted_21 = { class: "contador" };
const _hoisted_22 = {
  key: 2,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_23 = /* @__PURE__ */ createTextVNode("Fase Calentamiento");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("Existen bloques con intensidad no recomendada ");
const _hoisted_25 = { class: "invoice-wrapper" };
const _hoisted_26 = { class: "invoice-body" };
const _hoisted_27 = { class: "invoice-card" };
const _hoisted_28 = { class: "invoice-section" };
const _hoisted_29 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_30 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_31 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_32 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_34 = { key: 0 };
const _hoisted_35 = { key: 1 };
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z1: Aerobico ligero", -1));
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z2: Aerobico medio", -1));
const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z3: Aerobico intenso", -1));
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z4: Umbral anaerobico", -1));
const _hoisted_40 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z5: Maxima intensidad", -1));
const _hoisted_41 = [
  _hoisted_36,
  _hoisted_37,
  _hoisted_38,
  _hoisted_39,
  _hoisted_40
];
const _hoisted_42 = { key: 2 };
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R0: Regenerativo", -1));
const _hoisted_44 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R1: Umbral aerobico", -1));
const _hoisted_45 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R2: Umbral anaerobico", -1));
const _hoisted_46 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R3: Vo2 submaximo", -1));
const _hoisted_47 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R3+: Vo2 maximo", -1));
const _hoisted_48 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R4: Capacidad aer\xF3bica", -1));
const _hoisted_49 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R5: Potencia anaerobica", -1));
const _hoisted_50 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R6: Potencia alactica", -1));
const _hoisted_51 = [
  _hoisted_43,
  _hoisted_44,
  _hoisted_45,
  _hoisted_46,
  _hoisted_47,
  _hoisted_48,
  _hoisted_49,
  _hoisted_50
];
const _hoisted_52 = {
  key: 4,
  class: "cell-center"
};
const _hoisted_53 = {
  key: 1,
  class: "text"
};
const _hoisted_54 = { key: 1 };
const _hoisted_55 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_56 = [
  _hoisted_55
];
const _hoisted_57 = { class: "column-acciones" };
const _hoisted_58 = { key: 0 };
const _hoisted_59 = { key: 1 };
const _hoisted_60 = { key: 1 };
const _hoisted_61 = { key: 0 };
const _hoisted_62 = {
  key: 3,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_63 = /* @__PURE__ */ createTextVNode("Fase Central");
const _hoisted_64 = { class: "btn-crear-serie sticky-serie" };
const _hoisted_65 = /* @__PURE__ */ createTextVNode("Crear Serie");
const _hoisted_66 = { class: "invoice-wrapper" };
const _hoisted_67 = { class: "invoice-body" };
const _hoisted_68 = { class: "invoice-card" };
const _hoisted_69 = { class: "invoice-section" };
const _hoisted_70 = { class: "m-0" };
const _hoisted_71 = {
  key: 0,
  class: "opciones-serie"
};
const _hoisted_72 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("b", null, "Serie", -1));
const _hoisted_73 = {
  key: 1,
  style: { "display": "flex", "justify-content": "space-between", "margin-bottom": "10px" }
};
const _hoisted_74 = /* @__PURE__ */ createTextVNode("Guardar Serie");
const _hoisted_75 = /* @__PURE__ */ createTextVNode("Eliminar Serie");
const _hoisted_76 = /* @__PURE__ */ createTextVNode("Agregar Ejercicio");
const _hoisted_77 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "repetir" }, "Repetir:", -1));
const _hoisted_78 = /* @__PURE__ */ createTextVNode(" * Marca el Inicio de la Serie ");
const _hoisted_79 = /* @__PURE__ */ createTextVNode(" * Marca el Final de la Serie ");
const _hoisted_80 = /* @__PURE__ */ createTextVNode(" * Error, no puedes colocar el ");
const _hoisted_81 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("b", null, "INICIO", -1));
const _hoisted_82 = /* @__PURE__ */ createTextVNode(" de serie despues del ");
const _hoisted_83 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("b", null, "FINAL", -1));
const _hoisted_84 = /* @__PURE__ */ createTextVNode(" de serie ");
const _hoisted_85 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_86 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_87 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_88 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_89 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_90 = { key: 0 };
const _hoisted_91 = { key: 1 };
const _hoisted_92 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z1: Aerobico ligero", -1));
const _hoisted_93 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z2: Aerobico medio", -1));
const _hoisted_94 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z3: Aerobico intenso", -1));
const _hoisted_95 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z4: Umbral anaerobico", -1));
const _hoisted_96 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z5: Maxima intensidad", -1));
const _hoisted_97 = [
  _hoisted_92,
  _hoisted_93,
  _hoisted_94,
  _hoisted_95,
  _hoisted_96
];
const _hoisted_98 = { key: 2 };
const _hoisted_99 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R0: Regenerativo", -1));
const _hoisted_100 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R1: Umbral aerobico", -1));
const _hoisted_101 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R2: Umbral anaerobico", -1));
const _hoisted_102 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R3: Vo2 submaximo", -1));
const _hoisted_103 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R3+: Vo2 maximo", -1));
const _hoisted_104 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R4: Capacidad aer\xF3bica", -1));
const _hoisted_105 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R5: Potencia anaerobica", -1));
const _hoisted_106 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R6: Potencia alactica", -1));
const _hoisted_107 = [
  _hoisted_99,
  _hoisted_100,
  _hoisted_101,
  _hoisted_102,
  _hoisted_103,
  _hoisted_104,
  _hoisted_105,
  _hoisted_106
];
const _hoisted_108 = {
  key: 4,
  class: "cell-center"
};
const _hoisted_109 = {
  key: 1,
  class: "text"
};
const _hoisted_110 = { key: 1 };
const _hoisted_111 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_112 = [
  _hoisted_111
];
const _hoisted_113 = /* @__PURE__ */ createTextVNode(" Inicio ");
const _hoisted_114 = /* @__PURE__ */ createTextVNode(" Final ");
const _hoisted_115 = { key: 1 };
const _hoisted_116 = { class: "column-acciones" };
const _hoisted_117 = { key: 0 };
const _hoisted_118 = { key: 1 };
const _hoisted_119 = { key: 1 };
const _hoisted_120 = { key: 0 };
const _hoisted_121 = {
  key: 4,
  class: "fieldset-fase pb-6 burbuja"
};
const _hoisted_122 = /* @__PURE__ */ createTextVNode("Fase Vuelta a la calma");
const _hoisted_123 = /* @__PURE__ */ createTextVNode("Existen bloques con intensidad no recomendada ");
const _hoisted_124 = { class: "invoice-wrapper" };
const _hoisted_125 = { class: "invoice-body" };
const _hoisted_126 = { class: "invoice-card" };
const _hoisted_127 = { class: "invoice-section" };
const _hoisted_128 = {
  key: 0,
  class: "cell-center"
};
const _hoisted_129 = {
  key: 1,
  class: "cell-center"
};
const _hoisted_130 = {
  key: 2,
  class: "cell-center"
};
const _hoisted_131 = {
  key: 3,
  class: "cell-center"
};
const _hoisted_132 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify mi-tooltip",
  "data-icon": "feather:help-circle"
}, null, -1));
const _hoisted_133 = { key: 0 };
const _hoisted_134 = { key: 1 };
const _hoisted_135 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z1: Aerobico ligero", -1));
const _hoisted_136 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z2: Aerobico medio", -1));
const _hoisted_137 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z3: Aerobico intenso", -1));
const _hoisted_138 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z4: Umbral anaerobico", -1));
const _hoisted_139 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "Z5: Maxima intensidad", -1));
const _hoisted_140 = [
  _hoisted_135,
  _hoisted_136,
  _hoisted_137,
  _hoisted_138,
  _hoisted_139
];
const _hoisted_141 = { key: 2 };
const _hoisted_142 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R0: Regenerativo", -1));
const _hoisted_143 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R1: Umbral aerobico", -1));
const _hoisted_144 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R2: Umbral anaerobico", -1));
const _hoisted_145 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R3: Vo2 submaximo", -1));
const _hoisted_146 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R3+: Vo2 maximo", -1));
const _hoisted_147 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R4: Capacidad aer\xF3bica", -1));
const _hoisted_148 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R5: Potencia anaerobica", -1));
const _hoisted_149 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, "R6: Potencia alactica", -1));
const _hoisted_150 = [
  _hoisted_142,
  _hoisted_143,
  _hoisted_144,
  _hoisted_145,
  _hoisted_146,
  _hoisted_147,
  _hoisted_148,
  _hoisted_149
];
const _hoisted_151 = {
  key: 4,
  class: "cell-center"
};
const _hoisted_152 = {
  key: 1,
  class: "text"
};
const _hoisted_153 = { key: 1 };
const _hoisted_154 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "------------------", -1));
const _hoisted_155 = [
  _hoisted_154
];
const _hoisted_156 = { class: "column-acciones" };
const _hoisted_157 = { key: 0 };
const _hoisted_158 = { key: 1 };
const _hoisted_159 = { key: 1 };
const _hoisted_160 = { key: 0 };
const _hoisted_161 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("h1", null, [
    /* @__PURE__ */ createBaseVNode("b", null, "\xBF"),
    /* @__PURE__ */ createTextVNode("Est\xE1s seguro de borrar la serie "),
    /* @__PURE__ */ createBaseVNode("b", null, "?")
  ])
], -1));
const _hoisted_162 = /* @__PURE__ */ createTextVNode(" Cerrar ");
const _hoisted_163 = /* @__PURE__ */ createTextVNode(" Confirmar");
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    deportistaId: { default: "" },
    opcionactual: { default: void 0 },
    dFC: { default: () => {
      return {};
    } },
    dZR: { default: () => {
      return {};
    } }
  },
  emits: ["crear-serie"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const serieStore = seriesFaseCentralStore();
    const { rutinaPersonalizada } = storeToRefs(rutinaPersonalizadaStore());
    const { serieEditar, isSerieEditando } = storeToRefs(serieEditarStore());
    const { setIsSerieEditando } = serieEditarStore();
    const {
      duplicarSesionFaseCalentamiento,
      duplicarSesionFaseCentral,
      duplicarSesionFaseCalma,
      eliminarSesionFaseCalentamiento,
      eliminarSesionFaseCentral,
      eliminarSesionFaseCalma,
      agregarSesionFaseCalentamiento,
      agregarSesionFaseCentral,
      agregarSesionFaseCalma,
      getNumeroSesionesFaseCalentambiento,
      getNumeroSesionesFaseCentral,
      getNumeroSesionesFaseCalma,
      getNumeroTotalSesionesRutina,
      validarRestricciones,
      getIndexSerieFaseCentral,
      eliminarSerie
    } = rutinaPersonalizadaStore();
    const mostrarRrestriccionFaseCalentamiento = ref(false);
    const mostrarRestricionFaseVueltaALaCalma = ref(false);
    const tipoBloque = ref(tiposDeBloque);
    const tipoMedicion = TIPO_RANGO_BLOQUE;
    const opcionesIntensidad = ref(
      GET_OPCIONES_INSIDAD_RUTINA(rutinaPersonalizada.value.tipo_esfuerzo).valuesEntrenador
    );
    const valSensaciones = ref(
      GET_OPCIONES_INSIDAD_RUTINA(rutinaPersonalizada.value.tipo_esfuerzo).valuesDeportista
    );
    const refrescarValidaciones = ref(0);
    const serieAProcesar = ref("");
    const isBorrarSerie = ref(false);
    const serieEliminar = ref(null);
    const serieControlRenderBtnCrearSerie = ref("");
    const btnCrearSerie = ref(false);
    const datosNuevaSesion = reactive({
      distancia: 50,
      tipo_medicion: tipoMedicion[1],
      intensidad: opcionesIntensidad.value[0],
      tipo: tipoBloque.value[0].label,
      marca: ""
    });
    const handleMarcarSerie = (marca, index, serieNombre) => {
      var _a, _b, _c;
      switch (marca) {
        case "inicio":
          const serieInicio = (_a = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _a.series.find(
            (serieInicio2) => serieInicio2.nombre === serieNombre
          );
          serieInicio == null ? void 0 : serieInicio.sesiones.forEach((sesion) => {
            if (sesion.marca === "inicio") {
              sesion.marca = "";
              serieInicio.inicio = -1;
            }
          });
          if (serieInicio && serieInicio.sesiones[index]) {
            serieInicio.sesiones[index].marca = "inicio";
            serieInicio.inicio = index;
            if (index === serieInicio.final) {
              serieInicio.final = -1;
            }
          }
          break;
        case "final":
          const serieFinal = (_b = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _b.series.find(
            (serieFinal2) => serieFinal2.nombre === serieNombre
          );
          serieFinal == null ? void 0 : serieFinal.sesiones.forEach((sesion) => {
            if (sesion.marca === "final") {
              sesion.marca = "";
              serieFinal.final = -1;
            }
          });
          if (serieFinal && serieFinal.sesiones[index]) {
            serieFinal.sesiones[index].marca = "final";
            serieFinal.final = index;
            if (index === serieFinal.inicio) {
              serieFinal.inicio = -1;
            }
          }
          break;
      }
      const serie = (_c = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _c.series.find(
        (serieInicio) => serieInicio.nombre === serieNombre
      );
      const sesionesContenidasEnSerie = serie == null ? void 0 : serie.sesiones.slice(
        serie.inicio ? serie.inicio : 0,
        serie.final ? serie.final : 0
      );
      if ((serie == null ? void 0 : serie.inicio) !== -1 && (serie == null ? void 0 : serie.final) !== -1) {
        serie == null ? void 0 : serie.sesiones.forEach((sesion) => {
          if (sesion.marca == "serie") {
            sesion.marca = "";
          }
        });
        sesionesContenidasEnSerie == null ? void 0 : sesionesContenidasEnSerie.forEach((sesion) => {
          if (sesion.marca !== "inicio" && sesion.marca !== "final") {
            sesion.marca = "serie";
          }
        });
      } else {
        serie == null ? void 0 : serie.sesiones.forEach((sesion) => {
          if (sesion.marca == "serie") {
            sesion.marca = "";
          }
        });
      }
      refrescarValidaciones.value++;
    };
    const handleValidarRestriccionIntensidad = (fase) => {
      var _a, _b;
      switch (fase) {
        case "calentamiento":
          mostrarRrestriccionFaseCalentamiento.value = validarRestricciones(
            (_a = rutinaPersonalizada.value.sesiones_calentamiento) != null ? _a : []
          );
          break;
        case "calma":
          mostrarRestricionFaseVueltaALaCalma.value = validarRestricciones(
            (_b = rutinaPersonalizada.value.sesiones_calma) != null ? _b : []
          );
          break;
      }
    };
    const handleCrearSesion = (fase) => {
      datosNuevaSesion.tipo = tiposDeBloque[0].label;
      switch (fase) {
        case "calentamiento":
          agregarSesionFaseCalentamiento(datosNuevaSesion);
          break;
        case "central":
          agregarSesionFaseCentral(datosNuevaSesion);
          break;
        case "calma":
          agregarSesionFaseCalma(datosNuevaSesion);
          break;
      }
    };
    const columns = reactive({
      tipo: { label: "Tipo", align: "center" },
      medicion: { label: "Medici\xF3n", align: "center" },
      distancia: { label: "Distancia", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: {
        label: labelEsfuerzo(rutinaPersonalizada.value.tipo_esfuerzo),
        align: "center"
      },
      accion: { label: "Acci\xF3n", align: "center" }
    });
    const columnsCentral = reactive({
      tipo: { label: "Tipo", align: "right" },
      medicion: { label: "Medici\xF3n", align: "center" },
      distancia: { label: "Distancia", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: {
        label: labelEsfuerzo(rutinaPersonalizada.value.tipo_esfuerzo),
        align: "center"
      },
      serie: { label: "Serie", align: "center" },
      accion: { label: "Acci\xF3n", align: "center" }
    });
    const columns_ver_rutina = reactive({
      tipo: { label: "Tipo", align: "center" },
      medicion: { label: "Medici\xF3n", align: "center" },
      distancia: { label: "Distancia", align: "center" },
      intensidad: { label: "Intensidad", align: "center" },
      rango: {
        label: labelEsfuerzo(rutinaPersonalizada.value.tipo_esfuerzo),
        align: "center"
      }
    });
    const validarMostrarBotonCrearSerie = () => {
      var _a, _b;
      const serieEncontrada = (_a = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _a.series.find(
        (itemSerie) => itemSerie.nombre === serieControlRenderBtnCrearSerie.value
      );
      if (serieEncontrada) {
        btnCrearSerie.value = ((_b = serieEncontrada.sesiones) == null ? void 0 : _b.length) >= 2 && serieEncontrada.editando === false;
      } else {
        btnCrearSerie.value = false;
      }
    };
    const crearSerie = () => {
      var _a;
      serieAProcesar.value = `serie_${serieStore.getNumeroSeries()}`;
      serieControlRenderBtnCrearSerie.value = `serie_${serieStore.getNumeroSeries()}`;
      const serieEncontrada = (_a = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _a.series.find(
        (itemSerie) => itemSerie.nombre === serieAProcesar.value
      );
      if (serieEncontrada) {
        serieEncontrada.editando = true;
      }
    };
    const editarSerie = (actual, anterior) => {
      var _a, _b;
      const serieEncontrada = (_a = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _a.series.find(
        (itemSerie) => itemSerie.nombre === actual
      );
      if (serieEncontrada) {
        serieEncontrada.editando = true;
        serieStore.setNumeroSeries(getIndexSerieFaseCentral(actual) + 1);
        serieAProcesar.value = actual;
        serieControlRenderBtnCrearSerie.value = actual;
        setIsSerieEditando(true);
      }
      const serieEncontradaAnterior = (_b = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _b.series.find(
        (itemSerie) => itemSerie.nombre === anterior
      );
      if (serieEncontradaAnterior) {
        serieEncontradaAnterior.editando = false;
        serieStore.setNumeroSeries(rutinaPersonalizada.value.sesiones_central.numero_series);
      }
    };
    const handleAgregarSesionASerie = (serie) => {
      agregarSesionFaseCentral(datosNuevaSesion, serie.nombre);
    };
    const handleGuardarSerie = (serie) => {
      var _a;
      const serieEncontrada = (_a = rutinaPersonalizada.value.sesiones_central) == null ? void 0 : _a.series.find(
        (itemSerie) => itemSerie.nombre === serie.nombre
      );
      if (serieEncontrada) {
        if (!serieEncontrada.creada) {
          serieEncontrada.creada = true;
          serieEncontrada.editando = false;
          serieStore.setNumeroSeries(serieStore.getNumeroSeries() + 1);
          rutinaPersonalizada.value.sesiones_central.numero_series = serieStore.getNumeroSeries();
          emits("crear-serie");
          serieAProcesar.value = "";
          serieControlRenderBtnCrearSerie.value = `serie_${serieStore.getNumeroSeries()}`;
        } else {
          serieEncontrada.editando = false;
          serieStore.setNumeroSeries(rutinaPersonalizada.value.sesiones_central.numero_series);
          serieAProcesar.value = "";
          serieControlRenderBtnCrearSerie.value = `serie_${rutinaPersonalizada.value.sesiones_central.numero_series}`;
        }
      }
      setIsSerieEditando(false);
    };
    const handleEliminarSerie = (serie) => {
      isBorrarSerie.value = true;
      serieEliminar.value = serie;
    };
    const eliminarSerieModal = () => {
      if (serieEliminar.value) {
        eliminarSerie(serieEliminar.value);
        if (serieEliminar.value.creada) {
          serieStore.setNumeroSeries(rutinaPersonalizada.value.sesiones_central.numero_series);
          serieControlRenderBtnCrearSerie.value = `serie_${serieStore.getNumeroSeries()}`;
          serieAProcesar.value = "";
        } else {
          serieStore.setNumeroSeries(serieStore.getNumeroSeries() + 1);
          rutinaPersonalizada.value.sesiones_central.numero_series = serieStore.getNumeroSeries();
          emits("crear-serie");
          serieAProcesar.value = "";
          serieControlRenderBtnCrearSerie.value = `serie_${serieStore.getNumeroSeries()}`;
        }
      }
      isBorrarSerie.value = false;
      serieEliminar.value = null;
      setIsSerieEditando(false);
    };
    const validacionErrorIncioDespuesDeFinal = (serie) => {
      let serieValida = false;
      if (serie.inicio !== -1 && serie.final !== -1) {
        serieValida = serie.inicio > serie.final;
      }
      return serieValida;
    };
    const verificarSerieEnEdicion = () => {
      const serieEnEdicion = rutinaPersonalizada == null ? void 0 : rutinaPersonalizada.value.sesiones_central.series.find(
        (s) => s.editando
      );
      if (serieEnEdicion) {
        setIsSerieEditando(true);
      } else {
        setIsSerieEditando(false);
      }
    };
    onMounted(() => {
      serieControlRenderBtnCrearSerie.value = `serie_${serieStore.getNumeroSeries()}`;
      verificarSerieEnEdicion();
      validarMostrarBotonCrearSerie();
    });
    watch(
      () => serieEditar.value,
      (actual, anterior) => {
        var _a, _b;
        editarSerie((_a = actual == null ? void 0 : actual.nombre) != null ? _a : "", (_b = anterior == null ? void 0 : anterior.nombre) != null ? _b : "");
      }
    );
    watch(rutinaPersonalizada.value, () => {
      validarMostrarBotonCrearSerie();
    });
    return (_ctx, _cache) => {
      var _a, _b, _c;
      const _component_VMessage = _sfc_main$2;
      const _component_VButton = _sfc_main$4;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VOption = _sfc_main$5;
      const _component_VSelect = _sfc_main$6;
      const _component_VControl = __unplugin_components_0$1;
      const _component_VFlexTableCell = _sfc_main$7;
      const _component_VInput = _sfc_main$8;
      const _component_VistaRangos = _sfc_main$3;
      const _component_VIconButton = _sfc_main$9;
      const _component_VFlexTable = _sfc_main$a;
      const _component_VTextarea = _sfc_main$b;
      const _component_CircularMenuSerie = resolveComponent("CircularMenuSerie");
      const _component_VFlexItem = _sfc_main$c;
      const _component_VField = _sfc_main$d;
      const _component_VFlex = _sfc_main$e;
      const _component_VModal = _sfc_main$f;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_1, [
            unref(getNumeroTotalSesionesRutina)() === 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_VMessage, { color: "info" }, {
                  default: withCtx(() => [
                    _hoisted_4,
                    _hoisted_5
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true),
            unref(getNumeroTotalSesionesRutina)() > 0 && (unref(getNumeroSesionesFaseCalentambiento)() === 0 || unref(getNumeroSesionesFaseCentral)() === 0 || unref(getNumeroSesionesFaseCalma)() === 0) ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createVNode(_component_VMessage, { color: "warning" }, {
                  default: withCtx(() => [
                    _hoisted_8,
                    createBaseVNode("span", _hoisted_9, toDisplayString(unref(getNumeroSesionesFaseCalentambiento)() === 0 ? " (Calentamiento) " : "") + toDisplayString(unref(getNumeroSesionesFaseCentral)() === 0 ? " (Central) " : "") + toDisplayString(unref(getNumeroSesionesFaseCalma)() === 0 ? " (Calma) " : ""), 1)
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  createVNode(_component_VButton, {
                    class: "btn",
                    icon: "feather:plus",
                    color: "success",
                    onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => handleCrearSesion("calentamiento"), ["prevent"]), ["space"])),
                    onClick: _cache[1] || (_cache[1] = ($event) => handleCrearSesion("calentamiento"))
                  }, {
                    default: withCtx(() => [
                      _hoisted_14,
                      createBaseVNode("span", _hoisted_15, toDisplayString(unref(getNumeroSesionesFaseCalentambiento)()), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_16, [
                  createVNode(_component_VButton, {
                    class: "btn",
                    icon: "feather:plus",
                    color: "success",
                    onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => handleCrearSesion("central"), ["prevent"]), ["space"])),
                    onClick: _cache[3] || (_cache[3] = ($event) => handleCrearSesion("central"))
                  }, {
                    default: withCtx(() => [
                      _hoisted_17,
                      createBaseVNode("span", _hoisted_18, toDisplayString(unref(getNumeroSesionesFaseCentral)()), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_19, [
                  createVNode(_component_VButton, {
                    class: "btn",
                    icon: "feather:plus",
                    color: "success",
                    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => handleCrearSesion("calma"), ["prevent"]), ["space"])),
                    onClick: _cache[5] || (_cache[5] = ($event) => handleCrearSesion("calma"))
                  }, {
                    default: withCtx(() => [
                      _hoisted_20,
                      createBaseVNode("span", _hoisted_21, toDisplayString(unref(getNumeroSesionesFaseCalma)()), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(getNumeroSesionesFaseCalentambiento)() > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_22, [
            createBaseVNode("legend", null, [
              createVNode(_component_VMessage, {
                color: "info",
                class: "legend"
              }, {
                default: withCtx(() => [
                  _hoisted_23
                ]),
                _: 1
              })
            ]),
            mostrarRrestriccionFaseCalentamiento.value ? (openBlock(), createBlock(_component_VMessage, {
              key: 0,
              color: "warning"
            }, {
              default: withCtx(() => [
                _hoisted_24
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("div", _hoisted_28, [
                    createVNode(_component_VFlexTable, {
                      data: (_a = unref(rutinaPersonalizada).sesiones_calentamiento) != null ? _a : [],
                      columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                      reactive: "",
                      rounded: "",
                      fase: "calentamiento"
                    }, {
                      "header-column": withCtx(({ column }) => [
                        column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_29, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "medicion" ? (openBlock(), createElementBlock("span", _hoisted_30, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "distancia" ? (openBlock(), createElementBlock("span", _hoisted_31, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_32, [
                          createTextVNode(toDisplayString(column.label) + " ", 1),
                          props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                            content: withCtx(() => [
                              createBaseVNode("section", null, [
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_34, " Sensaciones ")) : createCommentVNode("", true),
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("ul", _hoisted_35, _hoisted_41)) : createCommentVNode("", true),
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("ul", _hoisted_42, _hoisted_51)) : createCommentVNode("", true)
                              ])
                            ]),
                            default: withCtx(() => [
                              _hoisted_33
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_52, toDisplayString(column.label), 1)) : createCommentVNode("", true)
                      ]),
                      "body-cell": withCtx(({ column, row, index }) => [
                        column.key === "tipo" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 0,
                          column: { align: "start" }
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
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_53, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "medicion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 1,
                          column: { align: "start" }
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
                          column: { align: "start" }
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
                          column: { align: "start" }
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
                                  class: normalizeClass({
                                    "is-rounded": true,
                                    "is-warning": row.intensidad >= 4 || row.intensidad === "Z2" || row.intensidad === "R2" || row.intensidad === "Z3" || row.intensidad === "R3" || row.intensidad === "Z4" || row.intensidad === "R4" || row.intensidad === "Z5" || row.intensidad === "R5" || row.intensidad === "R3+" || row.intensidad === "R6"
                                  }),
                                  onChange: _cache[6] || (_cache[6] = withModifiers(($event) => handleValidarRestriccionIntensidad("calentamiento"), ["stop"]))
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
                                }, 1032, ["modelValue", "onUpdate:modelValue", "class"])
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
                          column: { align: "start" }
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
                            ], 2)) : (openBlock(), createElementBlock("div", _hoisted_54, _hoisted_56))
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "accion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 5,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_57, [
                              props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_58, [
                                createVNode(_component_VIconButton, {
                                  icon: "feather:copy",
                                  color: "success",
                                  circle: "",
                                  outlined: "",
                                  onKeydown: withKeys(withModifiers(($event) => unref(duplicarSesionFaseCalentamiento)(row), ["prevent"]), ["space"]),
                                  onClick: ($event) => unref(duplicarSesionFaseCalentamiento)(row)
                                }, null, 8, ["onKeydown", "onClick"])
                              ])) : createCommentVNode("", true),
                              props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_59, [
                                createVNode(_component_VIconButton, {
                                  icon: "feather:trash",
                                  color: "danger",
                                  circle: "",
                                  outlined: "",
                                  onKeydown: withKeys(withModifiers(($event) => unref(eliminarSesionFaseCalentamiento)(index), ["prevent"]), ["space"]),
                                  onClick: ($event) => unref(eliminarSesionFaseCalentamiento)(index)
                                }, null, 8, ["onKeydown", "onClick"])
                              ])) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["data", "columns"]),
                    props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_VTextarea, {
                          modelValue: unref(rutinaPersonalizada).comentarios_fase_calentamiento,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(rutinaPersonalizada).comentarios_fase_calentamiento = $event),
                          class: "textarea is-info-focus",
                          rows: "2",
                          placeholder: "Ingresa comentarios"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })) : (openBlock(), createElementBlock("span", _hoisted_60, [
                      ((_b = unref(rutinaPersonalizada).comentarios_fase_calentamiento.length) != null ? _b : 0) ? (openBlock(), createElementBlock("p", _hoisted_61, toDisplayString(unref(rutinaPersonalizada).comentarios_fase_calentamiento), 1)) : createCommentVNode("", true)
                    ]))
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(getNumeroSesionesFaseCentral)() > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_62, [
            createBaseVNode("legend", null, [
              createVNode(_component_VMessage, {
                color: "info",
                class: "legend"
              }, {
                default: withCtx(() => [
                  _hoisted_63
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_64, [
              serieAProcesar.value === "" && btnCrearSerie.value ? (openBlock(), createBlock(_component_VButton, {
                key: 0,
                color: "primary",
                onClick: crearSerie
              }, {
                default: withCtx(() => [
                  _hoisted_65
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_66, [
              createBaseVNode("div", _hoisted_67, [
                createBaseVNode("div", _hoisted_68, [
                  createBaseVNode("div", _hoisted_69, [
                    createBaseVNode("fieldset", _hoisted_70, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList((_c = unref(rutinaPersonalizada).sesiones_central) == null ? void 0 : _c.series, (serie, i) => {
                        var _a2;
                        return openBlock(), createElementBlock("div", { key: i }, [
                          props.opcionactual === "editar" || props.opcionactual === "crear" || props.opcionactual === "ver" && !serie.editando ? (openBlock(), createElementBlock("div", {
                            key: 0,
                            class: "serie",
                            style: normalizeStyle({
                              borderColor: serie.creada && serie.editando ? "orange" : serie.creada ? serie.color : serie.editando ? "orange" : "transparent",
                              borderWidth: "3px",
                              borderStyle: "dashed"
                            })
                          }, [
                            serie.creada && !serie.editando ? (openBlock(), createElementBlock("div", _hoisted_71, [
                              createBaseVNode("h1", null, [
                                _hoisted_72,
                                createTextVNode(": " + toDisplayString(i + 1), 1)
                              ]),
                              __props.opcionactual !== "ver" && !unref(isSerieEditando) ? (openBlock(), createBlock(_component_CircularMenuSerie, {
                                key: 0,
                                serie,
                                onEliminarSerie: handleEliminarSerie
                              }, null, 8, ["serie"])) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            props.opcionactual === "editar" || props.opcionactual === "crear" ? (openBlock(), createElementBlock("div", _hoisted_73, [
                              serie.editando ? (openBlock(), createBlock(_component_VButton, {
                                key: 0,
                                color: "primary",
                                disabled: serie.inicio === -1 || serie.final === -1 || validacionErrorIncioDespuesDeFinal(serie),
                                onClick: () => handleGuardarSerie(serie)
                              }, {
                                default: withCtx(() => [
                                  _hoisted_74
                                ]),
                                _: 2
                              }, 1032, ["disabled", "onClick"])) : createCommentVNode("", true),
                              serie.editando ? (openBlock(), createBlock(_component_VButton, {
                                key: 1,
                                color: "danger",
                                onClick: () => handleEliminarSerie(serie)
                              }, {
                                default: withCtx(() => [
                                  _hoisted_75
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              serie.creada && serie.editando ? (openBlock(), createBlock(_component_VButton, {
                                key: 2,
                                color: "warning",
                                onClick: () => handleAgregarSesionASerie(serie)
                              }, {
                                default: withCtx(() => [
                                  _hoisted_76
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              serie.editando ? (openBlock(), createElementBlock("legend", {
                                key: 3,
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
                                        _hoisted_77
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
                                                  modelValue: serie.repeticiones,
                                                  "onUpdate:modelValue": ($event) => serie.repeticiones = $event,
                                                  modelModifiers: { number: true },
                                                  min: "1",
                                                  type: "number",
                                                  placeholder: "0"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ], 2)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            serie.inicio === -1 && (serie.creada || serie.editando) ? (openBlock(), createBlock(_component_VMessage, {
                              key: refrescarValidaciones.value,
                              color: "danger"
                            }, {
                              default: withCtx(() => [
                                _hoisted_78
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            serie.final === -1 && (serie.creada || serie.editando) ? (openBlock(), createBlock(_component_VMessage, {
                              key: refrescarValidaciones.value,
                              color: "danger"
                            }, {
                              default: withCtx(() => [
                                _hoisted_79
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            validacionErrorIncioDespuesDeFinal(serie) && (serie.creada || serie.editando) ? (openBlock(), createBlock(_component_VMessage, {
                              key: 4,
                              color: "danger"
                            }, {
                              default: withCtx(() => [
                                _hoisted_80,
                                _hoisted_81,
                                _hoisted_82,
                                _hoisted_83,
                                _hoisted_84
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_VFlexTable, {
                              data: (_a2 = unref(rutinaPersonalizada).sesiones_central) == null ? void 0 : _a2.series[i].sesiones,
                              columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columnsCentral) : unref(columns_ver_rutina),
                              serie,
                              fase: "central",
                              rounded: "",
                              reactive: ""
                            }, {
                              "header-column": withCtx(({ column }) => [
                                column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_85, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                                column.key === "medicion" ? (openBlock(), createElementBlock("span", _hoisted_86, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                                column.key === "distancia" ? (openBlock(), createElementBlock("span", _hoisted_87, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                                column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_88, [
                                  createTextVNode(toDisplayString(column.label) + " ", 1),
                                  props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                                    content: withCtx(() => [
                                      createBaseVNode("section", null, [
                                        unref(rutinaPersonalizada).tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_90, " Sensaciones ")) : createCommentVNode("", true),
                                        unref(rutinaPersonalizada).tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("ul", _hoisted_91, _hoisted_97)) : createCommentVNode("", true),
                                        unref(rutinaPersonalizada).tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("ul", _hoisted_98, _hoisted_107)) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    default: withCtx(() => [
                                      _hoisted_89
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true),
                                column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_108, toDisplayString(column.label), 1)) : createCommentVNode("", true)
                              ]),
                              "body-cell": withCtx(({ column, row, index }) => [
                                column.key === "tipo" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                                  key: 0,
                                  column: { align: "start" }
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
                                    props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_109, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                column.key === "medicion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                                  key: 1,
                                  column: { align: "start" }
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
                                  column: { align: "start" }
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
                                  column: { align: "start" }
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
                                  column: { align: "start" }
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
                                    ], 2)) : (openBlock(), createElementBlock("div", _hoisted_110, _hoisted_112))
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
                                        !serie.creada || serie.editando ? (openBlock(), createBlock(_component_VSelect, {
                                          key: 0,
                                          modelValue: row.marca,
                                          "onUpdate:modelValue": ($event) => row.marca = $event,
                                          class: "is-rounded",
                                          onChange: withModifiers(($event) => handleMarcarSerie(row.marca, index, serie.nombre), ["stop"])
                                        }, {
                                          default: withCtx(() => [
                                            index < serie.sesiones.length - 1 ? (openBlock(), createBlock(_component_VOption, {
                                              key: 0,
                                              value: "inicio",
                                              onClick: () => handleMarcarSerie("inicio", index, serie.nombre)
                                            }, {
                                              default: withCtx(() => [
                                                _hoisted_113
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])) : createCommentVNode("", true),
                                            index > 0 ? (openBlock(), createBlock(_component_VOption, {
                                              key: 1,
                                              value: "final",
                                              onClick: () => handleMarcarSerie("final", index, serie.nombre)
                                            }, {
                                              default: withCtx(() => [
                                                _hoisted_114
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])) : createCommentVNode("", true),
                                            createVNode(_component_VOption, {
                                              value: null,
                                              onClick: ($event) => handleMarcarSerie("", index, serie.nombre)
                                            }, null, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])) : (openBlock(), createElementBlock("h1", _hoisted_115, toDisplayString(row.marca), 1))
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                column.key === "accion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                                  key: 6,
                                  column: { align: "center" }
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_116, [
                                      props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_117, [
                                        createVNode(_component_VIconButton, {
                                          icon: "feather:copy",
                                          color: "success",
                                          circle: "",
                                          outlined: "",
                                          onKeydown: withKeys(withModifiers(($event) => unref(duplicarSesionFaseCentral)(row, serie), ["prevent"]), ["space"]),
                                          onClick: ($event) => unref(duplicarSesionFaseCentral)(row, serie)
                                        }, null, 8, ["onKeydown", "onClick"])
                                      ])) : createCommentVNode("", true),
                                      props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_118, [
                                        createVNode(_component_VIconButton, {
                                          icon: "feather:trash",
                                          color: "danger",
                                          circle: "",
                                          outlined: "",
                                          onKeydown: withKeys(withModifiers(($event) => unref(eliminarSesionFaseCentral)(index, serie), ["prevent"]), ["space"]),
                                          onClick: ($event) => unref(eliminarSesionFaseCentral)(index, serie)
                                        }, null, 8, ["onKeydown", "onClick"])
                                      ])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["data", "columns", "serie"])
                          ], 4)) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ]),
                    props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_VTextarea, {
                          modelValue: unref(rutinaPersonalizada).comentarios_fase_central,
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(rutinaPersonalizada).comentarios_fase_central = $event),
                          class: "textarea is-info-focus",
                          rows: "2",
                          placeholder: "Ingresa comentarios"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })) : (openBlock(), createElementBlock("span", _hoisted_119, [
                      unref(rutinaPersonalizada).comentarios_fase_central.length > 0 ? (openBlock(), createElementBlock("p", _hoisted_120, toDisplayString(unref(rutinaPersonalizada).comentarios_fase_central), 1)) : createCommentVNode("", true)
                    ]))
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(getNumeroSesionesFaseCalma)() > 0 ? (openBlock(), createElementBlock("fieldset", _hoisted_121, [
            createBaseVNode("legend", null, [
              createVNode(_component_VMessage, {
                color: "info",
                class: "legend"
              }, {
                default: withCtx(() => [
                  _hoisted_122
                ]),
                _: 1
              })
            ]),
            mostrarRestricionFaseVueltaALaCalma.value ? (openBlock(), createBlock(_component_VMessage, {
              key: 0,
              color: "warning"
            }, {
              default: withCtx(() => [
                _hoisted_123
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_124, [
              createBaseVNode("div", _hoisted_125, [
                createBaseVNode("div", _hoisted_126, [
                  createBaseVNode("div", _hoisted_127, [
                    createVNode(_component_VFlexTable, {
                      data: unref(rutinaPersonalizada).sesiones_calma,
                      columns: props.opcionactual === "crear" || props.opcionactual === "editar" ? unref(columns) : unref(columns_ver_rutina),
                      fase: "calma",
                      rounded: "",
                      reactive: ""
                    }, {
                      "header-column": withCtx(({ column }) => [
                        column.key === "tipo" ? (openBlock(), createElementBlock("span", _hoisted_128, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "medicion" ? (openBlock(), createElementBlock("span", _hoisted_129, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "distancia" ? (openBlock(), createElementBlock("span", _hoisted_130, toDisplayString(column.label), 1)) : createCommentVNode("", true),
                        column.key === "intensidad" ? (openBlock(), createElementBlock("span", _hoisted_131, [
                          createTextVNode(toDisplayString(column.label) + " ", 1),
                          props.opcionactual === "ver" ? (openBlock(), createBlock(_component_Tippy, { key: 0 }, {
                            content: withCtx(() => [
                              createBaseVNode("section", null, [
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Sensaciones" ? (openBlock(), createElementBlock("p", _hoisted_133, " Sensaciones ")) : createCommentVNode("", true),
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Zonas FC" ? (openBlock(), createElementBlock("ul", _hoisted_134, _hoisted_140)) : createCommentVNode("", true),
                                unref(rutinaPersonalizada).tipo_esfuerzo === "Zona de Ritmos" ? (openBlock(), createElementBlock("ul", _hoisted_141, _hoisted_150)) : createCommentVNode("", true)
                              ])
                            ]),
                            default: withCtx(() => [
                              _hoisted_132
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        column.key === "rango" ? (openBlock(), createElementBlock("span", _hoisted_151, toDisplayString(column.label), 1)) : createCommentVNode("", true)
                      ]),
                      "body-cell": withCtx(({ column, row, index }) => [
                        column.key === "tipo" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 0,
                          column: { align: "start" }
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
                            props.opcionactual === "ver" ? (openBlock(), createElementBlock("label", _hoisted_152, toDisplayString(row.tipo), 1)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "medicion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 1,
                          column: { align: "start" }
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
                          column: { align: "start" }
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
                          column: { align: "start" }
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
                                  class: normalizeClass({
                                    "is-rounded": true,
                                    "is-warning": row.intensidad >= 4 || row.intensidad === "Z2" || row.intensidad === "R2" || row.intensidad === "Z3" || row.intensidad === "R3" || row.intensidad === "Z4" || row.intensidad === "R4" || row.intensidad === "R3+" || row.intensidad === "R6" || row.intensidad === "Z5"
                                  }),
                                  onChange: _cache[9] || (_cache[9] = withModifiers(($event) => handleValidarRestriccionIntensidad("calma"), ["stop"]))
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
                                }, 1032, ["modelValue", "onUpdate:modelValue", "class"])
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
                          column: { align: "start" }
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
                            ], 2)) : (openBlock(), createElementBlock("div", _hoisted_153, _hoisted_155))
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        column.key === "accion" ? (openBlock(), createBlock(_component_VFlexTableCell, {
                          key: 5,
                          column: { align: "center" }
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_156, [
                              props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_157, [
                                createVNode(_component_VIconButton, {
                                  icon: "feather:copy",
                                  color: "success",
                                  circle: "",
                                  outlined: "",
                                  onKeydown: withKeys(withModifiers(($event) => unref(duplicarSesionFaseCalma)(row), ["prevent"]), ["space"]),
                                  onClick: ($event) => unref(duplicarSesionFaseCalma)(row)
                                }, null, 8, ["onKeydown", "onClick"])
                              ])) : createCommentVNode("", true),
                              props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createElementBlock("div", _hoisted_158, [
                                createVNode(_component_VIconButton, {
                                  icon: "feather:trash",
                                  color: "danger",
                                  circle: "",
                                  outlined: "",
                                  onKeydown: withKeys(withModifiers(($event) => unref(eliminarSesionFaseCalma)(index), ["prevent"]), ["space"]),
                                  onClick: ($event) => unref(eliminarSesionFaseCalma)(index)
                                }, null, 8, ["onKeydown", "onClick"])
                              ])) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["data", "columns"]),
                    props.opcionactual === "crear" || props.opcionactual === "editar" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_VTextarea, {
                          modelValue: unref(rutinaPersonalizada).comentarios_fase_calma,
                          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(rutinaPersonalizada).comentarios_fase_calma = $event),
                          class: "textarea is-info-focus",
                          rows: "2",
                          placeholder: "Ingresa comentarios"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })) : (openBlock(), createElementBlock("span", _hoisted_159, [
                      unref(rutinaPersonalizada).comentarios_fase_calma.length > 0 ? (openBlock(), createElementBlock("p", _hoisted_160, toDisplayString(unref(rutinaPersonalizada).comentarios_fase_calma), 1)) : createCommentVNode("", true)
                    ]))
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        createVNode(_component_VModal, {
          open: isBorrarSerie.value,
          title: "Recomendaci\xF3n",
          actions: "center",
          size: "small",
          noscroll: ""
        }, {
          content: withCtx(() => [
            _hoisted_161
          ]),
          cancel: withCtx(() => [
            createVNode(_component_VButton, {
              color: "danger",
              onClick: _cache[11] || (_cache[11] = ($event) => isBorrarSerie.value = false)
            }, {
              default: withCtx(() => [
                _hoisted_162
              ]),
              _: 1
            })
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              class: "success",
              color: "success",
              onClick: eliminarSerieModal
            }, {
              default: withCtx(() => [
                _hoisted_163
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
});
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b9ef8c5"]]);
export { __unplugin_components_1 as _, __unplugin_components_0 as a, _sfc_main$2 as b, rutinaPersonalizadaStore as r, seriesFaseCentralStore as s };
