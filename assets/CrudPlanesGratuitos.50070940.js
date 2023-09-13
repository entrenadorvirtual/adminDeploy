import { _ as _sfc_main$4 } from "./ModalOptions.eed626b7.js";
import { _ as __unplugin_components_0 } from "./PlanGratuito.806228dc.js";
import { y as defineComponent, z as ref, C as watch, a8 as onBeforeUnmount, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, Y as withDirectives, a1 as vModelText, F as Fragment, s as renderList, t as toDisplayString, m as createTextVNode, f as createBlock, l as createCommentVNode, O as _sfc_main$1, al as _sfc_main$3 } from "./index.a7fc5dec.js";
import { _ as _sfc_main$2 } from "./VIconButton.336a029e.js";
import { a as __unplugin_components_2 } from "./VControl.4d17fa85.js";
import { o as onAuthStateChanged, e as onValue, r as ref$1, d as database, a as auth } from "./config.0fd79a34.js";
import { E as ENOpcionesCru } from "./constantes.e793b8cd.js";
import { d as CREAR_PLAN_GRATUITO, f as ELIMINAR_PLAN_GRATUITO } from "./rutinas.71165fa8.js";
var CrudPlanesGratuitos_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "jobs-dashboard" };
const _hoisted_3 = { class: "jobs-dashboard-wrapper" };
const _hoisted_4 = { class: "main-container" };
const _hoisted_5 = { class: "searched-jobs" };
const _hoisted_6 = { class: "job-cards" };
const _hoisted_7 = { class: "tarjeta" };
const _hoisted_8 = { class: "job-card-title is-multiline" };
const _hoisted_9 = { class: "job-card-subtitle" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("strong", null, "Descripci\xF3n: ", -1);
const _hoisted_11 = { class: "job-card-subtitle" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("strong", null, "Deporte: ", -1);
const _hoisted_13 = { class: "job-card-subtitle" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("strong", null, "Objetivos: ", -1);
const _hoisted_15 = { class: "column" };
const _hoisted_16 = { class: "job-card-buttons" };
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" Ver ");
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Editar ");
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" Eliminar ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    ver: { type: Boolean },
    editar: { type: Boolean },
    eliminar: { type: Boolean },
    duplicar: { type: Boolean },
    iddeportista: null
  },
  setup(__props) {
    const props = __props;
    const planes = ref([]);
    const ver = ref(true);
    const editar = ref(true);
    const eliminar = ref(true);
    const planAnterior = ref();
    const filtro = ref("");
    const rutinas = ref([]);
    watch(filtro, () => {
      const filtroTexto = filtro.value.toLowerCase();
      rutinas.value = planes.value.filter((plan) => {
        const nombrePlan = plan.nombre_plan.toLowerCase();
        return nombrePlan.includes(filtroTexto);
      });
    });
    watch(planes, () => {
      rutinas.value = planes.value;
    });
    const opcionActual = ref(ENOpcionesCru.CREAR);
    const planEliminarId = ref("");
    const planDuplicar = ref();
    const mostrarCofirmarEliminar = ref(false);
    const mostrarCofirmarDuplicar = ref(false);
    const verPlan = (rutina) => {
      opcionActual.value = ENOpcionesCru.VER;
      ver.value = true;
      editar.value = false;
      eliminar.value = false;
      planAnterior.value = { ...rutina };
    };
    const editarPlan = (rutina) => {
      opcionActual.value = ENOpcionesCru.EDITAR;
      ver.value = false;
      editar.value = true;
      eliminar.value = true;
      planAnterior.value = { ...rutina };
    };
    const replyPlan = async () => {
      planes.value.forEach((plan) => {
        if (plan.nombre_plan === planDuplicar.value.nombre_plan) {
          planDuplicar.value.nombre_plan = obtenerNuevoNombre(
            planDuplicar.value.nombre_plan,
            planes.value
          );
        }
      });
      await CREAR_PLAN_GRATUITO(planDuplicar.value);
      mostrarCofirmarDuplicar.value = false;
    };
    const obtenerNuevoNombre = (nombre, planes2) => {
      let contador = 1;
      let nuevoNombre = nombre;
      while (planes2.some((plan) => plan.nombre_plan === nuevoNombre)) {
        nuevoNombre = `${nombre}_copia_(${contador++})`;
      }
      return nuevoNombre;
    };
    const seleccionarEliminarPlan = async (idRutina) => {
      planEliminarId.value = idRutina;
      mostrarCofirmarEliminar.value = true;
    };
    const seleccionarDuplicarPlan = async (planRutina) => {
      planDuplicar.value = planRutina;
      mostrarCofirmarDuplicar.value = true;
    };
    const eliminarPlan = async () => {
      await ELIMINAR_PLAN_GRATUITO(planEliminarId.value);
      mostrarCofirmarEliminar.value = false;
    };
    const cerrarPlan = () => {
      opcionActual.value = ENOpcionesCru.VER;
      planAnterior.value = void 0;
    };
    const planActualizado = async () => {
      planAnterior.value = void 0;
      mostrarCofirmarEliminar.value = false;
    };
    onBeforeUnmount(() => {
      ver.value = props.ver;
      editar.value = props.editar;
      eliminar.value = props.eliminar;
    });
    onMounted(async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          if (props.iddeportista) {
            onValue(ref$1(database, "planes_gratuitos"), (snapshot) => {
              if (snapshot.exists()) {
                planes.value = [];
                const planesArray = snapshot.val();
                Object.keys(planesArray).forEach((element) => {
                  const plan = planesArray[element];
                  plan["id"] = element;
                  planes.value.push(plan);
                  rutinas.value.push(plan);
                });
              } else {
                planes.value = [];
                rutinas.value = [];
              }
            });
          } else {
            onValue(ref$1(database, "planes_gratuitos"), (snapshot) => {
              if (snapshot.exists()) {
                planes.value = [];
                const planesArray = snapshot.val();
                Object.keys(planesArray).forEach((element) => {
                  const plan = planesArray[element];
                  if (plan.id_entrenador === user.uid) {
                    plan["id"] = element;
                    planes.value.push(plan);
                    rutinas.value.push(plan);
                  }
                });
              } else {
                planes.value = [];
                rutinas.value = [];
              }
            });
          }
        }
      });
      rutinas.value = planes.value;
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VButton = _sfc_main$1;
      const _component_VIconButton = _sfc_main$2;
      const _component_VButtons = _sfc_main$3;
      const _component_PlanGratuito = __unplugin_components_0;
      const _component_ModalOptions = _sfc_main$4;
      return openBlock(), createElementBlock("div", null, [
        !planAnterior.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", null, [
                createVNode(_component_VControl, { icon: "feather:search" }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filtro.value = $event),
                      class: "input custom-text-filter",
                      placeholder: "Buscar..."
                    }, null, 512), [
                      [vModelText, filtro.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(rutinas.value, (rutina, index) => {
                      return openBlock(), createElementBlock("div", {
                        key: index,
                        class: "job-card"
                      }, [
                        createBaseVNode("div", _hoisted_7, [
                          createBaseVNode("div", _hoisted_8, toDisplayString(rutina.nombre_plan), 1),
                          createBaseVNode("div", _hoisted_9, [
                            _hoisted_10,
                            createTextVNode(toDisplayString(rutina.descripcion), 1)
                          ]),
                          createBaseVNode("div", _hoisted_11, [
                            _hoisted_12,
                            createTextVNode(toDisplayString(rutina.deporte), 1)
                          ]),
                          createBaseVNode("div", _hoisted_13, [
                            _hoisted_14,
                            createTextVNode(toDisplayString(rutina.objetivos), 1)
                          ]),
                          createBaseVNode("div", _hoisted_15, [
                            createBaseVNode("h1", null, toDisplayString(rutina.nombre_entrenador), 1)
                          ]),
                          createBaseVNode("div", _hoisted_16, [
                            createVNode(_component_VButtons, null, {
                              default: withCtx(() => [
                                props.ver ? (openBlock(), createBlock(_component_VButton, {
                                  key: 0,
                                  color: "success",
                                  onClick: () => verPlan(rutina)
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_17
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true),
                                props.editar ? (openBlock(), createBlock(_component_VButton, {
                                  key: 1,
                                  color: "warning",
                                  onClick: () => editarPlan(rutina)
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_18
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true),
                                props.eliminar ? (openBlock(), createBlock(_component_VButton, {
                                  key: 2,
                                  color: "danger",
                                  onClick: () => seleccionarEliminarPlan(rutina.id)
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_19
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true),
                                props.eliminar ? (openBlock(), createBlock(_component_VIconButton, {
                                  key: 3,
                                  class: "reply-plan",
                                  icon: "lnir lnir-reflect",
                                  color: "info",
                                  circle: "",
                                  outlined: "",
                                  onClick: () => seleccionarDuplicarPlan(rutina)
                                }, null, 8, ["onClick"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ])
          ])
        ])) : (openBlock(), createBlock(_component_PlanGratuito, {
          key: 1,
          opcioncrudplanes: opcionActual.value,
          crear: false,
          ver: ver.value,
          editar: editar.value,
          eliminar: eliminar.value,
          plananterior: planAnterior.value,
          iddeportista: props.iddeportista,
          onCancelar: cerrarPlan,
          onActualizarPlan: planActualizado
        }, null, 8, ["opcioncrudplanes", "ver", "editar", "eliminar", "plananterior", "iddeportista"])),
        createVNode(_component_ModalOptions, {
          title: "Confirmaci\xF3n",
          subtitle: "Desea Eliminar este plan",
          mostrar: mostrarCofirmarEliminar.value,
          classconfirm: "danger",
          "confirm-msm": "Eliminar Plan",
          onAceptar: eliminarPlan,
          onCancelar: _cache[1] || (_cache[1] = ($event) => mostrarCofirmarEliminar.value = false)
        }, null, 8, ["mostrar"]),
        createVNode(_component_ModalOptions, {
          title: "Confirmaci\xF3n",
          subtitle: "Desea duplicar este plan",
          mostrar: mostrarCofirmarDuplicar.value,
          classconfirm: "danger",
          "confirm-msm": "Duplicar Plan",
          onAceptar: replyPlan,
          onCancelar: _cache[2] || (_cache[2] = ($event) => mostrarCofirmarDuplicar.value = false)
        }, null, 8, ["mostrar"])
      ]);
    };
  }
});
export { _sfc_main as _ };
