import { y as defineComponent, z as ref, r as reactive, N as onBeforeMount, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, F as Fragment, s as renderList, t as toDisplayString, m as createTextVNode, O as _sfc_main$4 } from "./index.a7fc5dec.js";
import { _ as _sfc_main$1, a as __unplugin_components_2, b as _sfc_main$3 } from "./VControl.4d17fa85.js";
import { _ as _sfc_main$2 } from "./VInput.5920a8ca.js";
import { g as getFecha } from "./fechas.6bd42486.js";
import { e as getZonasDeportista, f as getRitmosDeportista, g as getSemicooper } from "./deportista.892d7693.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { action: "signup-form" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Rendimiento")
    ])
  ])
], -1);
const _hoisted_4 = { class: "fieldset p-6" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Test Semicooper:")
], -1);
const _hoisted_6 = { class: "columns is-multiline" };
const _hoisted_7 = { class: "column is-4" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" VAM ");
const _hoisted_9 = { class: "column is-6" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Test ");
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_12 = { class: "columns is-multiline" };
const _hoisted_13 = { class: "column is-5" };
const _hoisted_14 = { class: "columns is-multiline" };
const _hoisted_15 = { class: "fieldset column is-12" };
const _hoisted_16 = { class: "fieldset-heading" };
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" Zonas de frecuencia (ppm) ");
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" Son rangos para medir la intensidad del ejercicio ");
const _hoisted_20 = { class: "columns is-multiline m-2" };
const _hoisted_21 = { class: "column is-4" };
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" Z1 ");
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_24 = { class: "column is-4" };
const _hoisted_25 = { class: "column is-4" };
const _hoisted_26 = { class: "column is-4" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode(" Z2 ");
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_29 = { class: "column is-4" };
const _hoisted_30 = { class: "column is-4" };
const _hoisted_31 = { class: "column is-4" };
const _hoisted_32 = /* @__PURE__ */ createTextVNode(" Z3 ");
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_34 = { class: "column is-4" };
const _hoisted_35 = { class: "column is-4" };
const _hoisted_36 = { class: "column is-4" };
const _hoisted_37 = /* @__PURE__ */ createTextVNode(" Z4 ");
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_39 = { class: "column is-4" };
const _hoisted_40 = { class: "column is-4" };
const _hoisted_41 = { class: "column is-4" };
const _hoisted_42 = /* @__PURE__ */ createTextVNode(" Z5 ");
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_44 = { class: "column is-4" };
const _hoisted_45 = { class: "column is-4" };
const _hoisted_46 = { class: "column is-7" };
const _hoisted_47 = { class: "columns is-multili" };
const _hoisted_48 = { class: "fieldset column is-12" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Zona de ritmos (min/km)")
], -1);
const _hoisted_50 = { class: "columns is-multiline m-2" };
const _hoisted_51 = { class: "column is-4" };
const _hoisted_52 = /* @__PURE__ */ createTextVNode(" R0 ");
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_54 = { class: "column is-4" };
const _hoisted_55 = { class: "column is-4" };
const _hoisted_56 = { class: "column is-4" };
const _hoisted_57 = /* @__PURE__ */ createTextVNode(" R1 ");
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_59 = { class: "column is-4" };
const _hoisted_60 = { class: "column is-4" };
const _hoisted_61 = { class: "column is-4" };
const _hoisted_62 = /* @__PURE__ */ createTextVNode(" R2 ");
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_64 = { class: "column is-4" };
const _hoisted_65 = { class: "column is-4" };
const _hoisted_66 = { class: "column is-4" };
const _hoisted_67 = /* @__PURE__ */ createTextVNode(" R3 ");
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_69 = { class: "column is-4" };
const _hoisted_70 = { class: "column is-4" };
const _hoisted_71 = { class: "column is-4" };
const _hoisted_72 = /* @__PURE__ */ createTextVNode(" R3+ ");
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_74 = { class: "column is-4" };
const _hoisted_75 = { class: "column is-4" };
const _hoisted_76 = { class: "column is-4" };
const _hoisted_77 = /* @__PURE__ */ createTextVNode(" R4 ");
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_79 = { class: "column is-4" };
const _hoisted_80 = { class: "column is-4" };
const _hoisted_81 = { class: "column is-4" };
const _hoisted_82 = /* @__PURE__ */ createTextVNode(" R5 ");
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_84 = { class: "column is-4" };
const _hoisted_85 = { class: "column is-4" };
const _hoisted_86 = { class: "column is-4" };
const _hoisted_87 = /* @__PURE__ */ createTextVNode(" R6 ");
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_89 = { class: "column is-8" };
const _hoisted_90 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-6" }, [
  /* @__PURE__ */ createBaseVNode("h1", null, [
    /* @__PURE__ */ createBaseVNode("u", null, "Marcas Registradas")
  ])
], -1);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_93 = { class: "mx-2" };
const _hoisted_94 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Distancia")
], -1);
const _hoisted_95 = { for: "marca" };
const _hoisted_96 = { class: "mx-2" };
const _hoisted_97 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Tiempo Marca (HH:MM:SS)")
], -1);
const _hoisted_98 = { for: "marca" };
const _hoisted_99 = { class: "mx-2" };
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha")
], -1);
const _hoisted_101 = { for: "marca" };
const _hoisted_102 = { class: "mx-2" };
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Ritmo")
], -1);
const _hoisted_104 = { for: "marca" };
const _hoisted_105 = { class: "mx-2" };
const _hoisted_106 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "FC Promedio")
], -1);
const _hoisted_107 = { for: "marca" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    semicooperDeportista: Object,
    idDeportista: String
  },
  setup(__props) {
    const props = __props;
    const datosZonas = ref("");
    const datosRitmos = ref("");
    const ds = reactive({
      VAM: "",
      VAM_decimal: "",
      semicooper: "1000",
      marcas: []
    });
    onBeforeMount(async () => {
      var _a, _b;
      datosZonas.value = await getZonasDeportista(props.idDeportista);
      datosRitmos.value = await getRitmosDeportista(props.idDeportista);
      const datos = await getSemicooper(props.idDeportista);
      ds.VAM = (_a = props.semicooperDeportista) == null ? void 0 : _a.VAM;
      ds.semicooper = (_b = props.semicooperDeportista) == null ? void 0 : _b.semicooper;
      ds.marcas = (datos == null ? void 0 : datos.marcas) || [];
    });
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$1;
      const _component_VInput = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VButton = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("form", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            _hoisted_5,
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createVNode(_component_VField, { id: "estatura" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_8
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: unref(ds).VAM,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(ds).VAM = $event),
                          type: "text",
                          disabled: ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_9, [
                createVNode(_component_VField, { id: "semicooper" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_10
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: unref(ds).semicooper,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(ds).semicooper = $event),
                          type: "text",
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
            _hoisted_11,
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("h4", null, [
                        _hoisted_17,
                        createVNode(_component_Tippy, null, {
                          content: withCtx(() => [
                            _hoisted_19
                          ]),
                          default: withCtx(() => [
                            _hoisted_18
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_22,
                            _hoisted_23
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_24, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    value: (_a = datosZonas.value) == null ? void 0 : _a.z1min,
                                    type: "text",
                                    placeholder: "Z1 Minimo",
                                    autocomplete: "Z1 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_25, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    value: (_a = datosZonas.value) == null ? void 0 : _a.z1max,
                                    type: "text",
                                    placeholder: "Z1 Maximo",
                                    autocomplete: "Z1 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_26, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_27,
                            _hoisted_28
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_29, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosZonas.value) == null ? void 0 : _a.z2min,
                                    placeholder: "Z2 Minimo",
                                    autocomplete: "Z2 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_30, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosZonas.value) == null ? void 0 : _a.z2max,
                                    placeholder: "Z1 Maximo",
                                    autocomplete: "Z1 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_31, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_32,
                            _hoisted_33
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_34, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosZonas.value) == null ? void 0 : _a.z3min,
                                    placeholder: "Z3 Minimo",
                                    autocomplete: "Z3 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_35, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosZonas.value) == null ? void 0 : _a.z3max,
                                    placeholder: "Z3 Maximo",
                                    autocomplete: "Z3 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_36, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_37,
                            _hoisted_38
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_39, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosZonas.value) == null ? void 0 : _a.z4min,
                                    placeholder: "Z4 Minimo",
                                    autocomplete: "Z4 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_40, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosZonas.value) == null ? void 0 : _a.z4max,
                                    placeholder: "Z4 Maximo",
                                    autocomplete: "Z4 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_41, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_42,
                            _hoisted_43
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_44, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosZonas.value) == null ? void 0 : _a.z5min,
                                    placeholder: "Z5 Minimo",
                                    autocomplete: "Z5 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_45, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosZonas.value) == null ? void 0 : _a.z5max,
                                    placeholder: "Z5 Maximo",
                                    autocomplete: "Z5 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("div", _hoisted_48, [
                    _hoisted_49,
                    createBaseVNode("div", _hoisted_50, [
                      createBaseVNode("div", _hoisted_51, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_52,
                            _hoisted_53
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_54, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R0max,
                                    type: "text",
                                    placeholder: "Z1 Maximo",
                                    autocomplete: "Z1 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_55, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: datosRitmos.value.R0min,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosRitmos.value.R0min = $event),
                                  disabled: "",
                                  type: "text",
                                  placeholder: "Z1 Minimo",
                                  autocomplete: "Z1 Minimo"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_56, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_57,
                            _hoisted_58
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_59, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R1max,
                                    placeholder: "Z1 Maximo",
                                    autocomplete: "Z1 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_60, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R1min,
                                    placeholder: "Z1 Minimo",
                                    autocomplete: "Z1 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_61, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_62,
                            _hoisted_63
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_64, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R2max,
                                    placeholder: "Z1 Maximo",
                                    autocomplete: "Z1 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_65, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R2min,
                                    placeholder: "Z1 Minimo",
                                    autocomplete: "Z1 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_66, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_67,
                            _hoisted_68
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_69, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R3max,
                                    placeholder: "Z1 Maximo",
                                    autocomplete: "Z1 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_70, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R3min,
                                    placeholder: "Z1 Minimo",
                                    autocomplete: "Z1 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_71, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_72,
                            _hoisted_73
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_74, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R3pmax,
                                    placeholder: "Z1 Maximo",
                                    autocomplete: "Z1 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_75, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R3pmin,
                                    placeholder: "Z1 Minimo",
                                    autocomplete: "Z1 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_76, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_77,
                            _hoisted_78
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_79, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R4max,
                                    placeholder: "Z1 Maximo",
                                    autocomplete: "Z1 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_80, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R4min,
                                    placeholder: "Z1 Minimo",
                                    autocomplete: "Z1 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_81, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_82,
                            _hoisted_83
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_84, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R5max,
                                    type: "text",
                                    placeholder: "Z1 Maximo",
                                    autocomplete: "Z1 Maximo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_85, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R5min,
                                    placeholder: "Z1 Minimo",
                                    autocomplete: "Z1 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_86, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_87,
                            _hoisted_88
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_89, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:book" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    type: "text",
                                    value: (_a = datosRitmos.value) == null ? void 0 : _a.R6min,
                                    placeholder: "Z1 Minimo",
                                    autocomplete: "Z1 Minimo"
                                  }, null, 8, ["value"])
                                ];
                              }),
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
            ]),
            _hoisted_90,
            _hoisted_91,
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(ds).marcas, (marca, index) => {
              return openBlock(), createElementBlock("div", {
                key: marca,
                class: "columns is-multiline m-4"
              }, [
                _hoisted_92,
                createBaseVNode("div", _hoisted_93, [
                  _hoisted_94,
                  createBaseVNode("label", _hoisted_95, toDisplayString(marca.distancia), 1)
                ]),
                createBaseVNode("div", _hoisted_96, [
                  _hoisted_97,
                  createBaseVNode("label", _hoisted_98, toDisplayString(marca.tiempoH) + " : " + toDisplayString(marca.tiempoM) + " : " + toDisplayString(marca.tiempoS), 1)
                ]),
                createBaseVNode("div", _hoisted_99, [
                  _hoisted_100,
                  createBaseVNode("label", _hoisted_101, toDisplayString(unref(getFecha)(marca.fecha)), 1)
                ]),
                createBaseVNode("div", _hoisted_102, [
                  _hoisted_103,
                  createBaseVNode("label", _hoisted_104, toDisplayString(marca.ritmo), 1)
                ]),
                createBaseVNode("div", _hoisted_105, [
                  _hoisted_106,
                  createBaseVNode("p", _hoisted_107, toDisplayString(marca.fcProm), 1)
                ])
              ]);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
