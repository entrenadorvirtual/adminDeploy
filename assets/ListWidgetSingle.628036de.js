import { _ as _sfc_main$7 } from "./VModal.6f6b1366.js";
import { a as useUserSession, U as defineStore, z as ref, e as computed, y as defineComponent, A as onMounted, o as openBlock, f as createBlock, av as createSlots, w as withCtx, q as createVNode, m as createTextVNode, t as toDisplayString, D as unref, j as createBaseVNode, i as createElementBlock, s as renderList, F as Fragment, l as createCommentVNode, O as _sfc_main$6, g as renderSlot, k as normalizeClass } from "./index.e9744070.js";
import { G as GET_TIPOS_INTENSIDAD_RUTINAS, b as TIPO_BLOQUE_TEST, T as TIPO_MEDICION_RUTINA, _ as __unplugin_components_1, a as __unplugin_components_0$1 } from "./BloquesDistancia.c8f00e09.js";
import { c as useForm, a as __unplugin_components_0, b as _sfc_main$5 } from "./VControl.65501bd5.js";
import { _ as _sfc_main$4 } from "./VTextarea.8b1d4b2c.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./VOption.fbb8a1f8.js";
import { d as CREAR_PLAN_GRATUITO, e as ACTUALIZAR_PLAN_GRATUITO } from "./rutinas.e26d3df4.js";
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
const _hoisted_1$1 = { class: "columns" };
const _hoisted_2$1 = { class: "column" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Tipo esfuerzo", -1);
const _hoisted_4 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_5 = { class: "column" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Tipo medici\xF3n", -1);
const _hoisted_7 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_8 = { class: "columns" };
const _hoisted_9 = { class: "column is-6" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Descripci\xF3n", -1);
const _hoisted_11 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_12 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_13 = { class: "column is-6" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Comentarios rutina", -1);
const _hoisted_15 = {
  key: 0,
  style: { "text-align": "start" }
};
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Cancelar");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      emits("crear-rutina", { ...datosRutina.value });
    });
    return (_ctx, _cache) => {
      const _component_VOption = _sfc_main$2;
      const _component_VSelect = _sfc_main$3;
      const _component_VControl = __unplugin_components_0;
      const _component_VTextarea = _sfc_main$4;
      const _component_VField = _sfc_main$5;
      const _component_BloquesDistancia = __unplugin_components_1;
      const _component_BloquesTiempo = __unplugin_components_0$1;
      const _component_VButton = _sfc_main$6;
      const _component_VModal = _sfc_main$7;
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
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              _hoisted_3$1,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_4, toDisplayString(datosRutina.value.tipo_esfuerzo), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
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
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_7, toDisplayString(datosRutina.value.tipo_medicion), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
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
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              _hoisted_10,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_11, toDisplayString(datosRutina.value.descripcion ? datosRutina.value.descripcion : "Sin descripci\xF3n"), 1)) : (openBlock(), createBlock(_component_VField, {
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
                      (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_12, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }))
            ]),
            createBaseVNode("div", _hoisted_13, [
              _hoisted_14,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_15, toDisplayString(datosRutina.value.comentarios), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
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
              _hoisted_16
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
const _hoisted_1 = { class: "widget-head" };
const _hoisted_2 = { class: "dark-inverted" };
const _hoisted_3 = { class: "inner-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("h3", _hoisted_2, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _, _sfc_main$1 as a, usePlanRutina as u };
