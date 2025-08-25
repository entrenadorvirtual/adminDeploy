import { _ as _sfc_main$5 } from "./VField.04329715.js";
import { a as __unplugin_components_0 } from "./VControl.258dc3fc.js";
import { _ as _sfc_main$4 } from "./VFlex.67564e84.js";
import { a as useUserSession, S as defineStore, y as ref, b as computed, x as defineComponent, z as onMounted, o as openBlock, g as createElementBlock, p as createVNode, w as withCtx, i as createBaseVNode, t as toDisplayString, k as createCommentVNode, F as Fragment, l as createTextVNode, N as _sfc_main$2, au as _sfc_main$3, f as renderSlot, j as normalizeClass } from "./index.7277f539.js";
import { G as GET_TIPOS_INTENSIDAD_RUTINAS, d as TIPO_BLOQUE_TEST, T as TIPO_MEDICION_RUTINA } from "./globales.d54e5eed.js";
import { d as CREAR_PLAN_GRATUITO, e as ACTUALIZAR_PLAN_GRATUITO } from "./rutinas.4c182eb4.js";
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
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_2$1 = { class: "login-form" };
const _hoisted_3$1 = { class: "columns" };
const _hoisted_4 = { class: "column" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Tipo esfuerzo", -1);
const _hoisted_6 = { style: { "text-align": "start" } };
const _hoisted_7 = { class: "column" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Tipo medici\xF3n", -1);
const _hoisted_9 = { style: { "text-align": "start" } };
const _hoisted_10 = { class: "columns" };
const _hoisted_11 = { class: "column is-6" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Descripci\xF3n", -1);
const _hoisted_13 = { style: { "text-align": "start" } };
const _hoisted_14 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_15 = { class: "column is-6" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h2", { style: { "font-weight": "bold", "text-align": "start" } }, "Comentarios rutina", -1);
const _hoisted_17 = { style: { "text-align": "start" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    opcionactual: { default: void 0 },
    isOpen: { type: Boolean, default: void 0 },
    semanaindex: { default: void 0 },
    diaindex: { default: void 0 }
  },
  emits: ["close"],
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
    onMounted(() => {
      console.log("Initial datosRutina:", datosRutina.value);
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
      console.log("datosRutina after fetching:", datosRutina.value);
    });
    const ocultar = () => {
      emits("close");
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VCard = _sfc_main$3;
      const _component_VFlex = _sfc_main$4;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$5;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VFlex, {
          class: "mb-5 pegar",
          "justify-content": "space-between"
        }, {
          default: withCtx(() => [
            createVNode(_component_VCard, { radius: "small" }, {
              default: withCtx(() => [
                createVNode(_component_VButton, {
                  color: "warning",
                  raised: "",
                  icon: "feather:arrow-left-circle",
                  onClick: ocultar
                }, {
                  default: withCtx(() => [
                    _hoisted_1$1
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(_component_VCard, {
            class: "mb-5",
            radius: "small"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4, [
                  _hoisted_5,
                  createBaseVNode("h2", _hoisted_6, toDisplayString(datosRutina.value.tipo_esfuerzo), 1)
                ]),
                createBaseVNode("div", _hoisted_7, [
                  _hoisted_8,
                  createBaseVNode("h2", _hoisted_9, toDisplayString(datosRutina.value.tipo_medicion), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  _hoisted_12,
                  createBaseVNode("h2", _hoisted_13, toDisplayString(datosRutina.value.descripcion ? datosRutina.value.descripcion : "Sin descripci\xF3n"), 1),
                  createVNode(_component_VField, { id: "descripcion" }, {
                    default: withCtx(({ field }) => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_14, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_15, [
                  _hoisted_16,
                  createBaseVNode("h2", _hoisted_17, toDisplayString(datosRutina.value.comentarios), 1)
                ])
              ])
            ]),
            _: 1
          })
        ])
      ], 64);
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
