import { a as _sfc_main$3 } from "./VField.2f4065eb.js";
import { _ as __unplugin_components_2 } from "./VControl.f1021bc2.js";
import { _ as _sfc_main$2 } from "./VSwitchBlock.ad04fd05.js";
import { g as getFecha } from "./fechas.6bd42486.js";
import { y as defineComponent, r as reactive, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, F as Fragment, s as renderList, t as toDisplayString, D as unref, q as createVNode, w as withCtx, z as ref, a as useUserSession, N as onBeforeMount, k as normalizeClass, f as createBlock, l as createCommentVNode, m as createTextVNode, O as _sfc_main$5 } from "./index.0f5aa7c2.js";
import { _ as _sfc_main$b } from "./Salud.26898872.js";
import { _ as _sfc_main$a } from "./Deportivo.fd57a343.js";
import { _ as _sfc_main$9 } from "./Rendimiento.65cd5510.js";
import { _ as _sfc_main$8 } from "./CapacidadFisica.0f1b2686.js";
import { _ as _sfc_main$7 } from "./Morfologico.6ac21918.js";
import { _ as _sfc_main$6 } from "./Personales.0393f986.js";
import { _ as _sfc_main$4 } from "./VAvatar.c41d574f.js";
import { g as getSemicooper, a as getMorfologiaDeportista, b as getDeportes, c as getObjetivos, d as getDatosDeportista } from "./deportista.892d7693.js";
var Objetivo_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "page-content-inner" };
const _hoisted_2$1 = { class: "account-wrapper" };
const _hoisted_3$1 = { class: "columns" };
const _hoisted_4$1 = { class: "column is-12" };
const _hoisted_5$1 = { class: "account-box is-form is-footerless" };
const _hoisted_6$1 = { action: "signup-form" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Objetivo")
    ])
  ])
], -1);
const _hoisted_8$1 = { class: "p-6" };
const _hoisted_9$1 = { class: "fieldset" };
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, null, -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-6" }, [
  /* @__PURE__ */ createBaseVNode("h1", null, [
    /* @__PURE__ */ createBaseVNode("u", null, "Objetivos Registrados")
  ])
], -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_13$1 = { class: "mx-2" };
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Meta")
], -1);
const _hoisted_15$1 = { for: "meta" };
const _hoisted_16$1 = { class: "mx-2" };
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "General")
], -1);
const _hoisted_18$1 = { for: "meta" };
const _hoisted_19$1 = { class: "mx-2" };
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha")
], -1);
const _hoisted_21$1 = { for: "meta" };
const _hoisted_22$1 = { class: "mx-2" };
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Especifico")
], -1);
const _hoisted_24$1 = { for: "meta" };
const _hoisted_25$1 = { class: "mx-2" };
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Nombre")
], -1);
const _hoisted_27$1 = { for: "meta" };
const _hoisted_28$1 = { class: "p-6" };
const _hoisted_29$1 = { class: "fieldset" };
const _hoisted_30$1 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Disponibilidad:")
], -1);
const _hoisted_31$1 = { class: "columns is-multiline" };
const _hoisted_32$1 = { class: "column is-3" };
const _hoisted_33$1 = { class: "column is-3" };
const _hoisted_34$1 = { class: "column is-3" };
const _hoisted_35$1 = { class: "column is-3" };
const _hoisted_36$1 = { class: "columns is-multiline" };
const _hoisted_37$1 = { class: "column is-3" };
const _hoisted_38$1 = { class: "column is-3" };
const _hoisted_39$1 = { class: "column is-3" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    datosObjetivos: Object
  },
  setup(__props) {
    const props = __props;
    const datosObjetivos = reactive({
      meta_deportiva: [],
      dias_entrenamiento: {}
    });
    onMounted(async () => {
      var _a, _b;
      datosObjetivos.meta_deportiva = ((_a = props.datosObjetivos) == null ? void 0 : _a.meta_deportiva) || [];
      datosObjetivos.dias_entrenamiento = ((_b = props.datosObjetivos) == null ? void 0 : _b.dias_entrenamiento) || [];
    });
    return (_ctx, _cache) => {
      const _component_VSwitchBlock = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5$1, [
                createBaseVNode("form", _hoisted_6$1, [
                  _hoisted_7$1,
                  createBaseVNode("div", _hoisted_8$1, [
                    createBaseVNode("div", _hoisted_9$1, [
                      _hoisted_10$1,
                      _hoisted_11$1,
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datosObjetivos).meta_deportiva, (meta, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: meta,
                          class: "columns is-multiline m-4"
                        }, [
                          _hoisted_12$1,
                          createBaseVNode("div", _hoisted_13$1, [
                            _hoisted_14$1,
                            createBaseVNode("label", _hoisted_15$1, toDisplayString(meta.deporte), 1)
                          ]),
                          createBaseVNode("div", _hoisted_16$1, [
                            _hoisted_17$1,
                            createBaseVNode("label", _hoisted_18$1, toDisplayString(meta.general), 1)
                          ]),
                          createBaseVNode("div", _hoisted_19$1, [
                            _hoisted_20$1,
                            createBaseVNode("label", _hoisted_21$1, toDisplayString(unref(getFecha)(meta.fecha)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_22$1, [
                            _hoisted_23$1,
                            createBaseVNode("label", _hoisted_24$1, toDisplayString(meta.especifico), 1)
                          ]),
                          createBaseVNode("div", _hoisted_25$1, [
                            _hoisted_26$1,
                            createBaseVNode("label", _hoisted_27$1, toDisplayString(meta.nombre), 1)
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_28$1, [
                    createBaseVNode("div", _hoisted_29$1, [
                      _hoisted_30$1,
                      createBaseVNode("div", _hoisted_31$1, [
                        createBaseVNode("div", _hoisted_32$1, [
                          createVNode(_component_VField, { grouped: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { subcontrol: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VSwitchBlock, {
                                    modelValue: unref(datosObjetivos).dias_entrenamiento.lunes,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(datosObjetivos).dias_entrenamiento.lunes = $event),
                                    color: "success",
                                    label: "Lunes",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_33$1, [
                          createVNode(_component_VField, { grouped: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { subcontrol: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VSwitchBlock, {
                                    modelValue: unref(datosObjetivos).dias_entrenamiento.martes,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(datosObjetivos).dias_entrenamiento.martes = $event),
                                    color: "success",
                                    label: "Martes",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_34$1, [
                          createVNode(_component_VField, { grouped: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { subcontrol: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VSwitchBlock, {
                                    modelValue: unref(datosObjetivos).dias_entrenamiento.miercoles,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(datosObjetivos).dias_entrenamiento.miercoles = $event),
                                    color: "success",
                                    label: "Mi\xE9rcoles",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_35$1, [
                          createVNode(_component_VField, { grouped: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { subcontrol: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VSwitchBlock, {
                                    modelValue: unref(datosObjetivos).dias_entrenamiento.jueves,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(datosObjetivos).dias_entrenamiento.jueves = $event),
                                    color: "success",
                                    label: "Jueves",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_36$1, [
                        createBaseVNode("div", _hoisted_37$1, [
                          createVNode(_component_VField, { grouped: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { subcontrol: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VSwitchBlock, {
                                    modelValue: unref(datosObjetivos).dias_entrenamiento.viernes,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(datosObjetivos).dias_entrenamiento.viernes = $event),
                                    color: "success",
                                    label: "Viernes",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_38$1, [
                          createVNode(_component_VField, { grouped: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { subcontrol: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VSwitchBlock, {
                                    modelValue: unref(datosObjetivos).dias_entrenamiento.sabado,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(datosObjetivos).dias_entrenamiento.sabado = $event),
                                    color: "success",
                                    label: "S\xE1bado",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_39$1, [
                          createVNode(_component_VField, { grouped: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { subcontrol: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VSwitchBlock, {
                                    modelValue: unref(datosObjetivos).dias_entrenamiento.domingo,
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(datosObjetivos).dias_entrenamiento.domingo = $event),
                                    color: "success",
                                    label: "Domingo",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
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
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var ViewProfile_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "profile-wrapper" };
const _hoisted_2 = { class: "column is-12" };
const _hoisted_3 = { class: "block-header" };
const _hoisted_4 = { class: "left" };
const _hoisted_5 = { class: "current-user" };
const _hoisted_6 = { class: "center" };
const _hoisted_7 = { class: "nombre" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Cerrar perfil");
const _hoisted_9 = { class: "right" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h4", { class: "block-heading" }, "Rese\xF1a", -1);
const _hoisted_11 = { class: "block-text" };
const _hoisted_12 = { class: "profile-body" };
const _hoisted_13 = { class: "signup-steps" };
const _hoisted_14 = { class: "steps-container" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:user"
  })
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Perfil", -1);
const _hoisted_17 = [
  _hoisted_15,
  _hoisted_16
];
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "lnir lnir-weight-machine",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Morfolog\xEDa", -1);
const _hoisted_20 = [
  _hoisted_18,
  _hoisted_19
];
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "fas fa-running",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Cap f\xEDsica", -1);
const _hoisted_23 = [
  _hoisted_21,
  _hoisted_22
];
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "aria-hidden": "true",
    "data-icon": "feather:activity"
  })
], -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Rendimiento", -1);
const _hoisted_26 = [
  _hoisted_24,
  _hoisted_25
];
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "fas fa-running",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Deportivo", -1);
const _hoisted_29 = [
  _hoisted_27,
  _hoisted_28
];
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "fas fa-chalkboard-teacher",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Salud", -1);
const _hoisted_32 = [
  _hoisted_30,
  _hoisted_31
];
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "lnir lnir-graph-alt-1",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Objetivo", -1);
const _hoisted_35 = [
  _hoisted_33,
  _hoisted_34
];
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("progress", {
  class: "progress",
  value: 100,
  max: 6
}, "100%", -1);
const _hoisted_37 = { class: "columns" };
const _hoisted_38 = { class: "column is-12" };
const _hoisted_39 = { class: "profile-card" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    iddeportista: null,
    aprobado: { type: Boolean }
  },
  emits: ["cerrar", "aceptar", "rechazar"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const vistaPerfil = ref(false);
    const vistaMorfologia = ref(false);
    const vistaFisico = ref(false);
    const vistaRendimiento = ref(false);
    const vistaDeportivo = ref(false);
    const vistaSalud = ref(false);
    const vistaObjetivos = ref(false);
    const morfologiaDeportista = ref();
    const semicooperDeportista = ref();
    const deportista = ref();
    const datosDeportivos = ref();
    const datosObjetivos = ref();
    useUserSession();
    onBeforeMount(async () => {
      semicooperDeportista.value = await getSemicooper(props.iddeportista);
      morfologiaDeportista.value = await getMorfologiaDeportista(props.iddeportista);
      datosDeportivos.value = await getDeportes(props.iddeportista);
      datosObjetivos.value = await await getObjetivos(props.iddeportista);
      deportista.value = await getDatosDeportista(props.iddeportista);
      vistaPerfil.value = true;
    });
    const cerrarPerfil = () => {
      emits("cerrar");
    };
    const verPerfil = () => {
      vistaPerfil.value = true;
      vistaMorfologia.value = false;
      vistaFisico.value = false;
      vistaRendimiento.value = false;
      vistaDeportivo.value = false;
      vistaSalud.value = false;
      vistaObjetivos.value = false;
    };
    const verMorfologia = () => {
      vistaPerfil.value = false;
      vistaMorfologia.value = true;
      vistaFisico.value = false;
      vistaRendimiento.value = false;
      vistaDeportivo.value = false;
      vistaSalud.value = false;
      vistaObjetivos.value = false;
    };
    const verCapacidad = () => {
      vistaPerfil.value = false;
      vistaMorfologia.value = false;
      vistaFisico.value = true;
      vistaRendimiento.value = false;
      vistaDeportivo.value = false;
      vistaSalud.value = false;
      vistaObjetivos.value = false;
    };
    const verRendimiento = () => {
      vistaPerfil.value = false;
      vistaMorfologia.value = false;
      vistaFisico.value = false;
      vistaRendimiento.value = true;
      vistaDeportivo.value = false;
      vistaSalud.value = false;
      vistaObjetivos.value = false;
    };
    const verDeportivo = () => {
      vistaPerfil.value = false;
      vistaMorfologia.value = false;
      vistaFisico.value = false;
      vistaRendimiento.value = false;
      vistaDeportivo.value = true;
      vistaSalud.value = false;
      vistaObjetivos.value = false;
    };
    const verSalud = () => {
      vistaPerfil.value = false;
      vistaMorfologia.value = false;
      vistaFisico.value = false;
      vistaRendimiento.value = false;
      vistaDeportivo.value = false;
      vistaSalud.value = true;
      vistaObjetivos.value = false;
    };
    const verObjetivos = () => {
      vistaPerfil.value = false;
      vistaMorfologia.value = false;
      vistaFisico.value = false;
      vistaRendimiento.value = false;
      vistaDeportivo.value = false;
      vistaSalud.value = false;
      vistaObjetivos.value = true;
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const _component_VAvatar = _sfc_main$4;
      const _component_VButton = _sfc_main$5;
      const _component_Personales = _sfc_main$6;
      const _component_Morfologico = _sfc_main$7;
      const _component_CapacidadFisica = _sfc_main$8;
      const _component_Rendimiento = _sfc_main$9;
      const _component_Deportivo = _sfc_main$a;
      const _component_Salud = _sfc_main$b;
      const _component_Objetivo = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VAvatar, {
                  size: "xl",
                  picture: ((_a = deportista.value) == null ? void 0 : _a.foto_url) || "/images/avatars/svg/vuero-1.svg"
                }, null, 8, ["picture"])
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("h3", _hoisted_7, toDisplayString((_b = deportista.value) == null ? void 0 : _b.nombres) + " " + toDisplayString((_c = deportista.value) == null ? void 0 : _c.apellidos), 1),
              createVNode(_component_VButton, {
                color: "danger",
                rounded: "",
                onClick: cerrarPerfil
              }, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_9, [
              _hoisted_10,
              createBaseVNode("p", _hoisted_11, toDisplayString((_d = datosDeportivos.value) == null ? void 0 : _d.resenia), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_12, [
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", {
                class: normalizeClass(["step-icon", [vistaPerfil.value && "is-active"]]),
                onClick: verPerfil
              }, _hoisted_17, 2),
              createBaseVNode("div", {
                class: normalizeClass(["step-icon", [vistaMorfologia.value && "is-active"]]),
                onClick: verMorfologia
              }, _hoisted_20, 2),
              createBaseVNode("div", {
                class: normalizeClass(["step-icon", [vistaFisico.value && "is-active"]]),
                onClick: verCapacidad
              }, _hoisted_23, 2),
              createBaseVNode("div", {
                class: normalizeClass(["step-icon", [vistaRendimiento.value && "is-active"]]),
                onClick: verRendimiento
              }, _hoisted_26, 2),
              createBaseVNode("div", {
                class: normalizeClass(["step-icon", [vistaDeportivo.value && "is-active"]]),
                onClick: verDeportivo
              }, _hoisted_29, 2),
              createBaseVNode("div", {
                class: normalizeClass(["step-icon", [vistaSalud.value && "is-active"]]),
                onClick: verSalud
              }, _hoisted_32, 2),
              createBaseVNode("div", {
                class: normalizeClass(["step-icon", [vistaObjetivos.value && "is-active"]]),
                onClick: verObjetivos
              }, _hoisted_35, 2),
              _hoisted_36
            ])
          ]),
          createBaseVNode("div", _hoisted_37, [
            createBaseVNode("div", _hoisted_38, [
              createBaseVNode("div", _hoisted_39, [
                vistaPerfil.value ? (openBlock(), createBlock(_component_Personales, {
                  key: 0,
                  nombres: (_e = deportista.value) == null ? void 0 : _e.nombres,
                  apellidos: (_f = deportista.value) == null ? void 0 : _f.apellidos,
                  identificacion: (_g = deportista.value) == null ? void 0 : _g.identificacion,
                  fecha_nacimiento: (_h = deportista.value) == null ? void 0 : _h.fecha_nacimiento,
                  "ciudad-actual": (_i = deportista.value) == null ? void 0 : _i.ciudadActual,
                  "pais-actual": (_j = deportista.value) == null ? void 0 : _j.paisActual,
                  "name-user": (_k = deportista.value) == null ? void 0 : _k.nameUser
                }, null, 8, ["nombres", "apellidos", "identificacion", "fecha_nacimiento", "ciudad-actual", "pais-actual", "name-user"])) : createCommentVNode("", true),
                vistaMorfologia.value ? (openBlock(), createBlock(_component_Morfologico, {
                  key: 1,
                  "morfologia-deportista": morfologiaDeportista.value
                }, null, 8, ["morfologia-deportista"])) : createCommentVNode("", true),
                vistaFisico.value ? (openBlock(), createBlock(_component_CapacidadFisica, {
                  key: 2,
                  fc_min: (_l = morfologiaDeportista.value) == null ? void 0 : _l.FCmin,
                  fc_max: (_m = morfologiaDeportista.value) == null ? void 0 : _m.FCmax
                }, null, 8, ["fc_min", "fc_max"])) : createCommentVNode("", true),
                vistaRendimiento.value ? (openBlock(), createBlock(_component_Rendimiento, {
                  key: 3,
                  "semicooper-deportista": semicooperDeportista.value,
                  "id-deportista": _ctx.$props.iddeportista
                }, null, 8, ["semicooper-deportista", "id-deportista"])) : createCommentVNode("", true),
                vistaDeportivo.value ? (openBlock(), createBlock(_component_Deportivo, {
                  key: 4,
                  "datos-deportivos": datosDeportivos.value
                }, null, 8, ["datos-deportivos"])) : createCommentVNode("", true),
                vistaSalud.value ? (openBlock(), createBlock(_component_Salud, {
                  key: 5,
                  "datos-deportivos": datosDeportivos.value
                }, null, 8, ["datos-deportivos"])) : createCommentVNode("", true),
                vistaObjetivos.value ? (openBlock(), createBlock(_component_Objetivo, {
                  key: 6,
                  "datos-objetivos": datosObjetivos.value
                }, null, 8, ["datos-objetivos"])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
