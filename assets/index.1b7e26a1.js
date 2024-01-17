import { _ as _sfc_main$c } from "./SuperentrenadorLayout.2b35f12f.js";
import { _ as _sfc_main$9 } from "./VModal.ec061947.js";
import { a as useUserSession, U as defineStore, z as ref, e as computed, y as defineComponent, A as onMounted, o as openBlock, f as createBlock, aw as createSlots, w as withCtx, q as createVNode, m as createTextVNode, t as toDisplayString, D as unref, j as createBaseVNode, i as createElementBlock, s as renderList, F as Fragment, l as createCommentVNode, O as _sfc_main$8, g as renderSlot, k as normalizeClass, V as _export_sfc, M as useRoute, N as onBeforeMount, r as reactive, v as withModifiers, ae as pushScopeId, af as popScopeId, P as useHead } from "./index.5157bb01.js";
import { G as GET_TIPOS_INTENSIDAD_RUTINAS, b as TIPO_BLOQUE_TEST, T as TIPO_MEDICION_RUTINA, _ as __unplugin_components_5, a as __unplugin_components_6 } from "./BloquesDistancia.c1d21308.js";
import { c as useForm, a as __unplugin_components_2, b as _sfc_main$7 } from "./VControl.57f34405.js";
import { _ as _sfc_main$6 } from "./VTextarea.0bc91ea1.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./VOption.ee5711b3.js";
import { e as CREAR_PLAN_GRATUITO, f as ACTUALIZAR_PLAN_GRATUITO } from "./rutinas.5a00d2f9.js";
import { _ as _sfc_main$b } from "./VFlex.f2bdc229.js";
import { _ as _sfc_main$a } from "./VFlexItem.23d6ee09.js";
import { c as GET_DATOS_RUTINA_GRATUITA } from "./superentrenador.3ee7d721.js";
import { E as ENOpcionesCru, n as nombreDiasSemana } from "./constantes.e793b8cd.js";
import { u as useViewWrapper } from "./viewWrapper.69c18bb9.js";
import "./NotificationsMobileDropdown.0b088ce3.js";
import "./VDropdown.10b7b857.js";
import "./VAvatar.8e44eaae.js";
import "./config.9bf2e6c5.js";
import "./useNotyf.f331df09.js";
import "./notyf.es.f84e4201.js";
import "./VCollapseLinks.ecf44ab7.js";
import "./VFlexTable.6cc0dbba.js";
import "./VIconButton.166911be.js";
import "./VInput.580f11e1.js";
import "./general.a67d6d2f.js";
import "./main.03abd8f7.js";
import "./deportista.b3f8517f.js";
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
const storeUseUserSession = useUserSession();
const usePlanRutina = defineStore("planRutina", () => {
  const semanasRutina = ref([
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}]
  ]);
  const validarSemana = computed(() => {
    let value = true;
    const numDiasValido = 1;
    const numSesiones = 1;
    semanasRutina.value.forEach((semana) => {
      let dias = 0;
      semana.forEach((dia) => {
        if (Object.keys(dia).length >= numSesiones) {
          dias++;
        }
      });
      if (dias < numDiasValido) {
        value = false;
      }
    });
    return value;
  });
  function adicionarSesion(sesion, semana, dia) {
    semanasRutina.value[semana][dia] = sesion;
  }
  function obtenerSesion(semanaindex, diaindex) {
    return { ...semanasRutina.value[semanaindex][diaindex] };
  }
  function eliminarSesion(semana, dia) {
    semanasRutina.value[semana][dia] = {};
  }
  function asignarBloquesSemana(semanaRutina) {
    REVERT_SEMANA_RUTINA(semanasRutina.value, semanaRutina);
  }
  function resetValues() {
    semanasRutina.value = [
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}]
    ];
  }
  async function guardarPlan(plan) {
    plan.plan = CONVERT_SEMANA_RUTINA(semanasRutina.value);
    plan.id_entrenador = storeUseUserSession.userId;
    await CREAR_PLAN_GRATUITO(plan);
    resetValues();
  }
  async function actualizarPlan(plan) {
    plan.plan = CONVERT_SEMANA_RUTINA(semanasRutina.value);
    plan.id_entrenador = storeUseUserSession.userId;
    await ACTUALIZAR_PLAN_GRATUITO(plan);
    resetValues();
  }
  return {
    semanasRutina,
    validarSemana,
    adicionarSesion,
    eliminarSesion,
    asignarBloquesSemana,
    obtenerSesion,
    guardarPlan,
    resetValues,
    actualizarPlan
  };
});
const _hoisted_1$2 = { class: "columns" };
const _hoisted_2$2 = { class: "column" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Tipo esfuerzo", -1);
const _hoisted_4$1 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_5$1 = { class: "column" };
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Tipo medici\xF3n", -1);
const _hoisted_7$1 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_8$1 = { class: "columns" };
const _hoisted_9$1 = { class: "column is-6" };
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Descripci\xF3n", -1);
const _hoisted_11$1 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_12$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_13$1 = { class: "column is-6" };
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Comentarios rutina", -1);
const _hoisted_15$1 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_16$1 = /* @__PURE__ */ createTextVNode("Cancelar");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    opcionactual: { default: void 0 },
    isOpen: { type: Boolean, default: void 0 },
    semanaindex: { default: void 0 },
    diaindex: { default: void 0 }
  },
  emits: ["close", "crear-rutina"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const tiposBloques = ref([]);
    const storeUsePlanRutina = usePlanRutina();
    const tiposIntensidad = GET_TIPOS_INTENSIDAD_RUTINAS();
    const tiposMedicion = TIPO_MEDICION_RUTINA;
    const datosRutina = ref({
      tipo_esfuerzo: "",
      tipo_medicion: "",
      descripcion: "",
      bloques: [],
      comentarios_fase_calentamiento: "",
      comentarios_fase_central: "",
      comentarios_fase_calma: ""
    });
    const { handleSubmit } = useForm({
      initialValues: {
        semicooper: ""
      }
    });
    const validacionCrearRutina = ref(false);
    onMounted(() => {
      let tipos = [];
      TIPO_BLOQUE_TEST.forEach((tipo) => {
        tipos.push(tipo.tipo);
      });
      tiposBloques.value = tipos;
      if (props.opcionactual === "ver" || props.opcionactual === "editar") {
        datosRutina.value = storeUsePlanRutina.obtenerSesion(
          props.semanaindex,
          props.diaindex
        );
      } else {
        datosRutina.value.tipo_esfuerzo = tiposIntensidad[0];
        datosRutina.value.tipo_medicion = tiposMedicion[1];
      }
    });
    const agregarBloque = (bloque) => {
      var _a;
      (_a = datosRutina.value.bloques) == null ? void 0 : _a.push({ ...bloque });
    };
    const eliminarBloque = (index) => {
      var _a;
      (_a = datosRutina.value.bloques) == null ? void 0 : _a.splice(index, 1);
    };
    const cerrarRutina = () => {
      emits("close");
    };
    const syncValidacionCrearRutina = (valor) => {
      validacionCrearRutina.value = valor;
    };
    const crearRutina = handleSubmit(async () => {
      console.log("actualizar");
      emits("crear-rutina", { ...datosRutina.value });
    });
    return (_ctx, _cache) => {
      const _component_VOption = _sfc_main$4;
      const _component_VSelect = _sfc_main$5;
      const _component_VControl = __unplugin_components_2;
      const _component_VTextarea = _sfc_main$6;
      const _component_VField = _sfc_main$7;
      const _component_BloquesDistancia = __unplugin_components_5;
      const _component_BloquesTiempo = __unplugin_components_6;
      const _component_VButton = _sfc_main$8;
      const _component_VModal = _sfc_main$9;
      return openBlock(), createBlock(_component_VModal, {
        open: props.isOpen,
        noclosebutton: "",
        title: "Rutina",
        size: "big",
        actions: "center",
        noscroll: "",
        noclose: ""
      }, createSlots({
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$2, [
              _hoisted_3$2,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_4$1, toDisplayString(datosRutina.value.tipo_esfuerzo), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: datosRutina.value.tipo_esfuerzo,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datosRutina.value.tipo_esfuerzo = $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposIntensidad), (deporte, index) => {
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
              }))
            ]),
            createBaseVNode("div", _hoisted_5$1, [
              _hoisted_6$1,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_7$1, toDisplayString(datosRutina.value.tipo_medicion), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: datosRutina.value.tipo_medicion,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosRutina.value.tipo_medicion = $event),
                    disabled: datosRutina.value.bloques.length > 0
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposMedicion), (deporte, index) => {
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
                  }, 8, ["modelValue", "disabled"])
                ]),
                _: 1
              }))
            ])
          ]),
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("div", _hoisted_9$1, [
              _hoisted_10$1,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_11$1, toDisplayString(datosRutina.value.descripcion ? datosRutina.value.descripcion : "Sin descripci\xF3n"), 1)) : (openBlock(), createBlock(_component_VField, {
                key: 1,
                id: "descripcion"
              }, {
                default: withCtx(({ field }) => [
                  createVNode(_component_VControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_VTextarea, {
                        modelValue: datosRutina.value.descripcion,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosRutina.value.descripcion = $event),
                        rows: "4",
                        placeholder: "Descripci\xF3n"
                      }, null, 8, ["modelValue"]),
                      (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_12$1, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }))
            ]),
            createBaseVNode("div", _hoisted_13$1, [
              _hoisted_14$1,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_15$1, toDisplayString(datosRutina.value.comentarios), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_VTextarea, {
                    modelValue: datosRutina.value.comentarios,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosRutina.value.comentarios = $event),
                    rows: "4",
                    placeholder: "Comentarios rutina"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }))
            ])
          ]),
          datosRutina.value.tipo_medicion === unref(tiposMedicion)[1] ? (openBlock(), createBlock(_component_BloquesDistancia, {
            key: 0,
            datosrutina: datosRutina.value,
            opcionactual: props.opcionactual,
            tiposbloques: tiposBloques.value,
            onSync: syncValidacionCrearRutina,
            onAgregar: agregarBloque,
            onEliminar: eliminarBloque
          }, null, 8, ["datosrutina", "opcionactual", "tiposbloques"])) : createCommentVNode("", true),
          datosRutina.value.tipo_medicion === unref(tiposMedicion)[0] ? (openBlock(), createBlock(_component_BloquesTiempo, {
            key: 1,
            datosrutina: datosRutina.value,
            opcionactual: props.opcionactual,
            onSync: syncValidacionCrearRutina,
            onAgregar: agregarBloque,
            onEliminar: eliminarBloque
          }, null, 8, ["datosrutina", "opcionactual"])) : createCommentVNode("", true)
        ]),
        cancel: withCtx(() => [
          createVNode(_component_VButton, {
            raised: "",
            onClick: cerrarRutina
          }, {
            default: withCtx(() => [
              _hoisted_16$1
            ]),
            _: 1
          })
        ]),
        _: 2
      }, [
        props.opcionactual !== "ver" ? {
          name: "action",
          fn: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              disabled: !validacionCrearRutina.value,
              raised: "",
              onClick: unref(crearRutina)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.opcionactual === "crear" ? "Crear Rutina" : "Actualizar Rutina"), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ])
        } : void 0
      ]), 1032, ["open"]);
    };
  }
});
var ListWidgetSingle_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "widget-head" };
const _hoisted_2$1 = { class: "dark-inverted" };
const _hoisted_3$1 = { class: "inner-list" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "List Widget" },
    straight: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["list-widget", [props.straight && "is-straight"]])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("h3", _hoisted_2$1, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
var PlanGratuitoEntrenador_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-3778b704"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "login-form" };
const _hoisted_2 = { class: "columns is-multiline is-mobile" };
const _hoisted_3 = { class: "column is-1-desktop is-half-mobile" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Deporte", -1));
const _hoisted_5 = { class: "subtitle is-6" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "is-divider-vertical" }, null, -1));
const _hoisted_7 = { class: "column is-2-desktop is-half-mobile" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Nombre del Plan", -1));
const _hoisted_9 = { class: "subtitle is-6" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "is-divider-vertical" }, null, -1));
const _hoisted_11 = { class: "column is-full-mobile" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Descripci\xF3n", -1));
const _hoisted_13 = { class: "subtitle is-6" };
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "is-divider-vertical" }, null, -1));
const _hoisted_15 = { class: "column is-full-mobile" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Objetivos", -1));
const _hoisted_17 = { class: "subtitle is-6" };
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_19 = { class: "columns is-multiline widget-demo-columns half-columns" };
const _hoisted_20 = { class: "timeline-item" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "timeline-icon" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "btn-add-plan-g" }, "+")
], -1));
const _hoisted_22 = { class: "timeline-content" };
const _hoisted_23 = {
  key: 0,
  style: { "display": "flex", "gap": "2px" }
};
const _hoisted_24 = ["onClick"];
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:eye",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_26 = [
  _hoisted_25
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const diasSemana = nombreDiasSemana;
    const route = useRoute();
    const planGratuito = ref();
    const planRutinaStore = usePlanRutina();
    onBeforeMount(async () => {
      planGratuito.value = await GET_DATOS_RUTINA_GRATUITA(route.params.id.toString());
      planRutinaStore.asignarBloquesSemana(planGratuito == null ? void 0 : planGratuito.value.plan);
    });
    const isOpenCrearSesion = ref(false);
    const posicionPlan = reactive({
      indexsemana: 0,
      indexdia: 0
    });
    const seleccionarPosicionPlan = (indexSemana, indexDia) => {
      posicionPlan.indexsemana = indexSemana;
      posicionPlan.indexdia = indexDia;
      isOpenCrearSesion.value = true;
    };
    const verSesion = (indexSemana, indexDia) => {
      opcionactual.value = ENOpcionesCru.VER;
      seleccionarPosicionPlan(indexSemana, indexDia);
    };
    const opcionactual = ref(ENOpcionesCru.CREAR);
    const handleBack = () => {
      window.history.back();
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      const _component_VButton = _sfc_main$8;
      const _component_VFlexItem = _sfc_main$a;
      const _component_VFlex = _sfc_main$b;
      const _component_ListWidgetSingle = _sfc_main$2;
      const _component_SesionRutinaGratuita = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            createBaseVNode("p", _hoisted_5, toDisplayString((_a = planGratuito.value) == null ? void 0 : _a.deporte), 1)
          ]),
          _hoisted_6,
          createBaseVNode("div", _hoisted_7, [
            _hoisted_8,
            createBaseVNode("p", _hoisted_9, toDisplayString((_b = planGratuito.value) == null ? void 0 : _b.nombre_plan), 1)
          ]),
          _hoisted_10,
          createBaseVNode("div", _hoisted_11, [
            _hoisted_12,
            createBaseVNode("p", _hoisted_13, toDisplayString((_c = planGratuito.value) == null ? void 0 : _c.descripcion), 1)
          ]),
          _hoisted_14,
          createBaseVNode("div", _hoisted_15, [
            _hoisted_16,
            createBaseVNode("p", _hoisted_17, toDisplayString((_d = planGratuito.value) == null ? void 0 : _d.objetivos), 1)
          ])
        ]),
        createVNode(_component_VFlex, {
          class: "mb-2 pegar",
          "justify-content": "space-between"
        }, {
          default: withCtx(() => [
            createVNode(_component_VFlexItem, null, {
              default: withCtx(() => [
                createVNode(_component_VButton, {
                  color: "warning",
                  rounded: "",
                  raised: "",
                  icon: "fas fa-arrow-circle-left",
                  onClick: handleBack
                }, {
                  default: withCtx(() => [
                    _hoisted_18
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_19, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(planRutinaStore).semanasRutina, (semana, indexSemana) => {
            return openBlock(), createElementBlock("div", {
              key: indexSemana,
              class: "column is-4"
            }, [
              createVNode(_component_ListWidgetSingle, {
                title: "Semana " + (indexSemana + 1),
                class: "list-widget-v3"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(semana, (dia, indexDia) => {
                    return openBlock(), createElementBlock("div", {
                      key: indexDia,
                      class: "icon-timeline"
                    }, [
                      createBaseVNode("div", _hoisted_20, [
                        _hoisted_21,
                        createBaseVNode("div", _hoisted_22, [
                          createBaseVNode("p", null, toDisplayString(unref(diasSemana)[indexDia]), 1),
                          Object.keys(dia).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_23, [
                            createBaseVNode("button", {
                              class: "btn btn-view",
                              onClick: withModifiers(($event) => verSesion(indexSemana, indexDia), ["stop"])
                            }, _hoisted_26, 8, _hoisted_24)
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["title"])
            ]);
          }), 128))
        ]),
        isOpenCrearSesion.value ? (openBlock(), createBlock(_component_SesionRutinaGratuita, {
          key: 0,
          opcionactual: unref(ENOpcionesCru).VER,
          semanaindex: unref(posicionPlan).indexsemana,
          diaindex: unref(posicionPlan).indexdia,
          "is-open": isOpenCrearSesion.value,
          onClose: _cache[0] || (_cache[0] = ($event) => isOpenCrearSesion.value = false),
          onCrearRutina: _ctx.agregarSesion
        }, null, 8, ["opcionactual", "semanaindex", "diaindex", "is-open", "onCrearRutina"])) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3778b704"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Plan gratuito");
    useHead({
      title: "Plan gratuito"
    });
    return (_ctx, _cache) => {
      const _component_PlanGratuitoEntrenador = __unplugin_components_0;
      const _component_SuperentrenadorLayout = _sfc_main$c;
      return openBlock(), createBlock(_component_SuperentrenadorLayout, null, {
        default: withCtx(() => [
          createVNode(_component_PlanGratuitoEntrenador)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
