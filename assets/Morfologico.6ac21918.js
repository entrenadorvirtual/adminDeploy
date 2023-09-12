import { y as defineComponent, r as reactive, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, m as createTextVNode, O as _sfc_main$4 } from "./index.0f5aa7c2.js";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./VField.2f4065eb.js";
import { _ as __unplugin_components_2 } from "./VControl.f1021bc2.js";
import { _ as _sfc_main$2 } from "./VInput.144983c9.js";
import { g as getFecha } from "./fechas.6bd42486.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { action: "signup-form" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Morfolog\xEDa")
    ])
  ])
], -1);
const _hoisted_4 = { class: "fieldset p-6" };
const _hoisted_5 = { class: "columns is-multiline" };
const _hoisted_6 = { class: "column is-4" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Estatura (cm) ");
const _hoisted_8 = { class: "column is-4" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Peso (Kg) ");
const _hoisted_10 = { class: "column is-4" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Grasa ");
const _hoisted_12 = { class: "column is-4" };
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" IMC ");
const _hoisted_14 = { class: "column is-4" };
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" Somatotipo ");
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, [
    /* @__PURE__ */ createBaseVNode("hr"),
    /* @__PURE__ */ createTextVNode(" Per\xEDmetros ")
  ])
], -1);
const _hoisted_17 = { class: "columns is-multiline" };
const _hoisted_18 = { class: "column is-2" };
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" Cintura ");
const _hoisted_20 = { class: "column is-5" };
const _hoisted_21 = { class: "column is-5" };
const _hoisted_22 = { class: "column is-2" };
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Brazo ");
const _hoisted_24 = { class: "column is-5" };
const _hoisted_25 = { class: "column is-5" };
const _hoisted_26 = { class: "column is-2" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode(" Muslo Medio ");
const _hoisted_28 = { class: "column is-5" };
const _hoisted_29 = { class: "column is-5" };
const _hoisted_30 = { class: "column is-2" };
const _hoisted_31 = /* @__PURE__ */ createTextVNode(" Pantorrilla ");
const _hoisted_32 = { class: "column is-5" };
const _hoisted_33 = { class: "column is-5" };
const _hoisted_34 = { class: "column is-2" };
const _hoisted_35 = /* @__PURE__ */ createTextVNode(" Pecho ");
const _hoisted_36 = { class: "column is-5" };
const _hoisted_37 = { class: "column is-5" };
const _hoisted_38 = { class: "column is-2" };
const _hoisted_39 = /* @__PURE__ */ createTextVNode(" Hombros ");
const _hoisted_40 = { class: "column is-5" };
const _hoisted_41 = { class: "column is-5" };
const _hoisted_42 = { class: "column is-2" };
const _hoisted_43 = /* @__PURE__ */ createTextVNode(" Gl\xFAteos ");
const _hoisted_44 = { class: "column is-5" };
const _hoisted_45 = { class: "column is-5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    morfologiaDeportista: Object
  },
  setup(__props) {
    const props = __props;
    const deportista = reactive({
      IMC: "",
      FCmax: "",
      FCmin: "",
      FCprom: "",
      distancia: "",
      estatura: "",
      fecha_brazo: "",
      fecha_cintura: "",
      fecha_hombros: "",
      fecha_marca: "",
      fecha_muslo: "",
      fecha_pantorrilla: "",
      fecha_pecho: "",
      fecha_gluteos: "",
      grasa: "",
      medida_brazo: "",
      medida_cintura: "",
      medida_hombros: "",
      medida_muslo: "",
      medida_pantorrilla: "",
      medida_pecho: "",
      medida_gluteos: "",
      peso: "",
      ritmo: "",
      somatipo: "",
      tiempo_marca: ""
    });
    onMounted(async () => {
      deportista.morfologiaDeportista = props.morfologiaDeportista;
    });
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$1;
      const _component_VInput = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("form", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_VField, { id: "estatura" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_7
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "lnir lnir-ruler" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.estatura,
                            type: "text",
                            disabled: ""
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_VField, { id: "peso" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_9
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "lnir lnir-weight" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.peso,
                            type: "text",
                            disabled: ""
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_11
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:percent" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.grasa,
                            type: "text",
                            disabled: ""
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_VField, { id: "IMC" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_13
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.IMC,
                            type: "text",
                            disabled: ""
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_14, [
                createVNode(_component_VField, { id: "IMC" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_15
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.somatipo,
                            type: "text",
                            disabled: ""
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _hoisted_16,
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_19
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_20, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: unref(getFecha)((_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.fecha_cintura),
                            type: "text",
                            disabled: ""
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_21, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.medida_cintura,
                            type: "text",
                            placeholder: "medida",
                            autocomplete: "medida"
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_22, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_23
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_24, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: unref(getFecha)((_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.fecha_brazo),
                            type: "text",
                            disabled: ""
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
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.medida_brazo,
                            type: "text",
                            placeholder: "medida",
                            autocomplete: "medida"
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
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_27
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_28, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: unref(getFecha)((_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.fecha_muslo),
                            type: "text",
                            disabled: ""
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
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
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.medida_muslo,
                            type: "text",
                            placeholder: "medida",
                            autocomplete: "medida"
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
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_31
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_32, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: unref(getFecha)((_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.fecha_pantorrilla),
                            type: "text",
                            disabled: ""
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_33, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.medida_pantorrilla,
                            type: "text",
                            placeholder: "medida",
                            autocomplete: "medida"
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_34, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_35
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_36, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: unref(getFecha)((_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.fecha_pecho),
                            type: "text",
                            disabled: ""
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_37, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.medida_pecho,
                            type: "text",
                            placeholder: "medida",
                            autocomplete: "medida"
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_38, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_39
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_40, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: unref(getFecha)((_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.fecha_hombros),
                            type: "text",
                            disabled: ""
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
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.medida_hombros,
                            type: "text",
                            placeholder: "medida",
                            autocomplete: "medida"
                          }, null, 8, ["value"])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_42, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_43
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_44, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_VInput, {
                            value: unref(getFecha)((_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.fecha_gluteos),
                            type: "text",
                            disabled: ""
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
                            value: (_a = unref(deportista).morfologiaDeportista) == null ? void 0 : _a.medida_gluteos,
                            type: "text",
                            placeholder: "medida",
                            autocomplete: "medida"
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
      ]);
    };
  }
});
export { _sfc_main as _ };
