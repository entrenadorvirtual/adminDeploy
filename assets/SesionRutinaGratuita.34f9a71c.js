import { _ as _sfc_main$6 } from "./VModal.86fed773.js";
import { a as useUserSession, U as defineStore, z as ref, e as computed, y as defineComponent, A as onMounted, o as openBlock, f as createBlock, aw as createSlots, w as withCtx, q as createVNode, m as createTextVNode, t as toDisplayString, D as unref, j as createBaseVNode, i as createElementBlock, s as renderList, F as Fragment, l as createCommentVNode, O as _sfc_main$5 } from "./index.0f5aa7c2.js";
import { G as GET_TIPOS_INTENSIDAD_RUTINAS, T as TIPO_MEDICION_RUTINA, a as __unplugin_components_5, _ as __unplugin_components_4 } from "./BloquesTiempo.c11a0b08.js";
import { b as useForm, a as _sfc_main$4 } from "./VField.2f4065eb.js";
import { _ as _sfc_main$3 } from "./VTextarea.9bbf9d4d.js";
import { _ as __unplugin_components_2 } from "./VControl.f1021bc2.js";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./VOption.63c661e6.js";
import { R as REVERT_SEMANA_RUTINA, e as CONVERT_SEMANA_RUTINA, f as CREAR_PLAN_GRATUITO, g as ACTUALIZAR_PLAN_GRATUITO } from "./rutinas.f6dc35e6.js";
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
const _hoisted_1 = { class: "columns" };
const _hoisted_2 = {
  class: "column",
  style: { "display": "flex", "flex-direction": "column", "align-items": "start" }
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold" } }, "Tipo esfuerzo", -1);
const _hoisted_4 = { key: 0 };
const _hoisted_5 = {
  class: "column",
  style: { "display": "flex", "flex-direction": "column", "align-items": "start" }
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold" } }, "Tipo medici\xF3n", -1);
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { class: "columns" };
const _hoisted_9 = {
  class: "column is-6",
  style: { "display": "flex", "flex-direction": "column", "align-items": "start" }
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold" } }, "Descripci\xF3n", -1);
const _hoisted_11 = { key: 0 };
const _hoisted_12 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_13 = {
  class: "column is-6",
  style: { "display": "flex", "flex-direction": "column", "align-items": "start" }
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold" } }, "Comentarios rutina", -1);
const _hoisted_15 = { key: 0 };
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Cancelar");
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      const _component_VOption = _sfc_main$1;
      const _component_VSelect = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VTextarea = _sfc_main$3;
      const _component_VField = _sfc_main$4;
      const _component_BloquesDistancia = __unplugin_components_5;
      const _component_BloquesTiempo = __unplugin_components_4;
      const _component_VButton = _sfc_main$5;
      const _component_VModal = _sfc_main$6;
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
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_4, toDisplayString(datosRutina.value.tipo_esfuerzo), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: datosRutina.value.tipo_esfuerzo,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datosRutina.value.tipo_esfuerzo = $event),
                    disabled: datosRutina.value.bloques.length > 0
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
                  }, 8, ["modelValue", "disabled"])
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
export { _sfc_main as _, usePlanRutina as u };
