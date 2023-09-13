import { _ as _sfc_main$5 } from "./VCheckbox.9c48ffd8.js";
import { _ as _sfc_main$4 } from "./VInput.5920a8ca.js";
import { _ as _sfc_main$1, a as __unplugin_components_2, b as _sfc_main$3 } from "./VControl.4d17fa85.js";
import { _ as _sfc_main$2 } from "./VTextarea.9eda26d4.js";
import { y as defineComponent, r as reactive, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, m as createTextVNode } from "./index.a7fc5dec.js";
var Deportivo_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-12" };
const _hoisted_5 = { class: "account-box is-form is-footerless" };
const _hoisted_6 = { action: "signup-form" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Deportiva")
    ])
  ])
], -1);
const _hoisted_8 = { class: "p-6" };
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = { class: "columns is-multiline" };
const _hoisted_11 = { class: "column is-6" };
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Rese\xF1a ");
const _hoisted_13 = { class: "column is-6" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" Mensaje Entrenador ");
const _hoisted_15 = { class: "column is-6" };
const _hoisted_16 = { class: "columns is-multiline is-vcentered" };
const _hoisted_17 = { class: "column is-6" };
const _hoisted_18 = /* @__PURE__ */ createTextVNode("Edad Deportiva");
const _hoisted_19 = { class: "column is-6" };
const _hoisted_20 = /* @__PURE__ */ createTextVNode("Nivel deportivo subjetivo");
const _hoisted_21 = { class: "column is-6" };
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" Usa Puls\xF3metro ");
const _hoisted_23 = { class: "column is-6" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("p", null, "Marca Pulsometro", -1);
const _hoisted_25 = { class: "column is-6" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("label", {
  raw: "",
  class: "auth-label"
}, " Otros Deportes ", -1);
const _hoisted_27 = { class: "column is-6" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("p", null, "Otro deporte", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    datosDeportivos: Object
  },
  setup(__props) {
    const props = __props;
    const datosDeportes = reactive({
      resenia: "",
      edad_deportiva: "",
      subjetivo: "",
      otros: {},
      otro: "",
      pulsometro: "",
      marcaPulsometro: "",
      mensaje: ""
    });
    onMounted(async () => {
      var _a, _b, _c, _d, _e, _f, _g;
      datosDeportes.resenia = (_a = props.datosDeportivos) == null ? void 0 : _a.resenia;
      datosDeportes.mensaje = (_b = props.datosDeportivos) == null ? void 0 : _b.mensaje;
      datosDeportes.edad_deportiva = (_c = props.datosDeportivos) == null ? void 0 : _c.edad_deportiva;
      datosDeportes.subjetivo = (_d = props.datosDeportivos) == null ? void 0 : _d.subjetivo;
      datosDeportes.pulsometro = (_e = props.datosDeportivos) == null ? void 0 : _e.pulsometro;
      datosDeportes.otros = (_f = props.datosDeportivos) == null ? void 0 : _f.otros;
      datosDeportes.otro = (_g = props.datosDeportivos) == null ? void 0 : _g.otro;
    });
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$1;
      const _component_VTextarea = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_VInput = _sfc_main$4;
      const _component_VCheckbox = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("form", _hoisted_6, [
                  _hoisted_7,
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", _hoisted_10, [
                        createBaseVNode("div", _hoisted_11, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VLabel, {
                                    raw: "",
                                    class: "auth-label"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_12
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VTextarea, {
                                        rows: "4",
                                        value: unref(datosDeportes).resenia,
                                        placeholder: "Ingrese una corta descripci\xF3n sobre usted",
                                        autocomplete: "off",
                                        autocapitalize: "off",
                                        spellcheck: "true",
                                        disabled: ""
                                      }, null, 8, ["value"])
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
                        createBaseVNode("div", _hoisted_13, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VLabel, {
                                    raw: "",
                                    class: "auth-label"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_14
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VTextarea, {
                                        rows: "4",
                                        placeholder: "Escribe un mensaje para el entrenador",
                                        autocomplete: "off",
                                        value: unref(datosDeportes).mensaje,
                                        autocapitalize: "off",
                                        spellcheck: "true",
                                        disabled: ""
                                      }, null, 8, ["value"])
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
                        createBaseVNode("div", _hoisted_15, [
                          createBaseVNode("div", _hoisted_16, [
                            createBaseVNode("div", _hoisted_17, [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VLabel, {
                                    raw: "",
                                    class: "auth-label"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_18
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VInput, {
                                        disabled: "",
                                        value: unref(datosDeportes).edad_deportiva,
                                        type: "text"
                                      }, null, 8, ["value"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createBaseVNode("div", _hoisted_19, [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VLabel, {
                                    raw: "",
                                    class: "auth-label"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_20
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VInput, {
                                        disabled: "",
                                        value: unref(datosDeportes).subjetivo,
                                        type: "text"
                                      }, null, 8, ["value"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createBaseVNode("div", _hoisted_21, [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VLabel, {
                                        raw: "",
                                        class: "auth-label"
                                      }, {
                                        default: withCtx(() => [
                                          _hoisted_22
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_VInput, {
                                        disabled: "",
                                        value: unref(datosDeportes).pulsometro,
                                        type: "text"
                                      }, null, 8, ["value"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createBaseVNode("div", _hoisted_23, [
                              _hoisted_24,
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, { icon: "feather:user" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_VInput, {
                                        type: "text",
                                        disabled: "",
                                        placeholder: "Marca o Modelo",
                                        autocomplete: "off"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_25, [
                          _hoisted_26,
                          createVNode(_component_VField, { class: "columns is-multiline is-vcentered" }, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, {
                                raw: "",
                                subcontrol: "",
                                class: "column is-3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_VCheckbox, {
                                    modelValue: unref(datosDeportes).otros.ciclismo,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(datosDeportes).otros.ciclismo = $event),
                                    label: "Ciclismo",
                                    color: "success",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VControl, {
                                raw: "",
                                subcontrol: "",
                                class: "column is-3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_VCheckbox, {
                                    modelValue: unref(datosDeportes).otros.natacion,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(datosDeportes).otros.natacion = $event),
                                    label: "Nataci\xF3n",
                                    color: "success",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VControl, {
                                raw: "",
                                subcontrol: "",
                                class: "column is-3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_VCheckbox, {
                                    modelValue: unref(datosDeportes).otros.triatlon,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(datosDeportes).otros.triatlon = $event),
                                    label: "Triatl\xF3n",
                                    color: "success",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VControl, {
                                raw: "",
                                subcontrol: "",
                                class: "column is-3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_VCheckbox, {
                                    modelValue: unref(datosDeportes).otros.gimnasio,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(datosDeportes).otros.gimnasio = $event),
                                    label: "Gimnasio",
                                    color: "success",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VControl, {
                                raw: "",
                                subcontrol: "",
                                class: "column is-3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_VCheckbox, {
                                    modelValue: unref(datosDeportes).otros.trail,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(datosDeportes).otros.trail = $event),
                                    label: "Trail",
                                    color: "success",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VControl, {
                                raw: "",
                                subcontrol: "",
                                class: "column is-3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_VCheckbox, {
                                    modelValue: unref(datosDeportes).otros.otro,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(datosDeportes).otros.otro = $event),
                                    label: "Otro",
                                    color: "success",
                                    disabled: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              }),
                              createBaseVNode("div", _hoisted_27, [
                                _hoisted_28,
                                createVNode(_component_VField, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VControl, { icon: "feather:user" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_VInput, {
                                          modelValue: unref(datosDeportes).otro,
                                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(datosDeportes).otro = $event),
                                          type: "text",
                                          placeholder: "Otro deporte",
                                          autocomplete: "on",
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
export { _sfc_main as _ };
