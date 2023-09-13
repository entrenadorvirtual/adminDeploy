import { _ as _sfc_main$1, a as __unplugin_components_2, b as _sfc_main$3 } from "./VControl.4d17fa85.js";
import { _ as _sfc_main$2 } from "./VInput.5920a8ca.js";
import { g as getFecha } from "./fechas.6bd42486.js";
import { y as defineComponent, r as reactive, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, F as Fragment, s as renderList, t as toDisplayString, m as createTextVNode } from "./index.a7fc5dec.js";
var Salud_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-12" };
const _hoisted_5 = { class: "account-box is-form is-footerless" };
const _hoisted_6 = { action: "" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Salud")
    ])
  ])
], -1);
const _hoisted_8 = { class: "p-6" };
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = { class: "columns is-multiline" };
const _hoisted_11 = { class: "column is-4" };
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Esfuerzo f\xEDsico en el trabajo ");
const _hoisted_13 = { class: "column is-4" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" Horas de Sue\xF1o ");
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "columns is-multiline is-desktop" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
        /* @__PURE__ */ createBaseVNode("h4", null, "Enfermedades")
      ])
    ])
  ])
], -1);
const _hoisted_17 = { class: "columns is-multiline" };
const _hoisted_18 = { class: "mx-2" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Zona")
], -1);
const _hoisted_20 = { for: "zoa" };
const _hoisted_21 = { class: "mx-2" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Tratamiento")
], -1);
const _hoisted_23 = { for: "zoa" };
const _hoisted_24 = { class: "mx-2" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha Inicio")
], -1);
const _hoisted_26 = { for: "zoa" };
const _hoisted_27 = { class: "mx-2" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Duraci\xF3n")
], -1);
const _hoisted_29 = { for: "zoa" };
const _hoisted_30 = { class: "mx-2" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Actualmente la tiene")
], -1);
const _hoisted_32 = { for: "zoa" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "columns is-multiline is-desktop" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
        /* @__PURE__ */ createBaseVNode("h4", null, "Lesioness")
      ])
    ])
  ])
], -1);
const _hoisted_35 = { class: "columns is-multiline" };
const _hoisted_36 = { class: "mx-2" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Zona")
], -1);
const _hoisted_38 = { for: "zoa" };
const _hoisted_39 = { class: "mx-2" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Tratamiento")
], -1);
const _hoisted_41 = { for: "zoa" };
const _hoisted_42 = { class: "mx-2" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha Inicio")
], -1);
const _hoisted_44 = { for: "zoa" };
const _hoisted_45 = { class: "mx-2" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Duraci\xF3n")
], -1);
const _hoisted_47 = { for: "zoa" };
const _hoisted_48 = { class: "mx-2" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Actualmente la tiene")
], -1);
const _hoisted_50 = { for: "zoa" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    datosDeportivos: Object
  },
  setup(__props) {
    const props = __props;
    const datosDeportes = reactive({
      esfuerzo_trabajo: "",
      sue\u00F1o: "",
      enfermedades: [],
      lesiones: []
    });
    onMounted(async () => {
      var _a, _b, _c, _d;
      datosDeportes.esfuerzo_trabajo = (_a = props.datosDeportivos) == null ? void 0 : _a.esfuerzo_trabajo;
      datosDeportes.sue\u00F1o = (_b = props.datosDeportivos) == null ? void 0 : _b.sue\u00F1o;
      datosDeportes.enfermedades = ((_c = props.datosDeportivos) == null ? void 0 : _c.enfermedades) || [];
      datosDeportes.lesiones = ((_d = props.datosDeportivos) == null ? void 0 : _d.lesiones) || [];
    });
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$1;
      const _component_VInput = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
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
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    value: unref(datosDeportes).esfuerzo_trabajo,
                                    type: "text"
                                  }, null, 8, ["value"])
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
                                  createVNode(_component_VInput, {
                                    disabled: "",
                                    value: unref(datosDeportes).sue\u00F1o,
                                    type: "text"
                                  }, null, 8, ["value"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _hoisted_15,
                    _hoisted_16,
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datosDeportes).enfermedades, (enfermedad, index) => {
                      return openBlock(), createElementBlock("div", {
                        key: enfermedad,
                        class: "account-box"
                      }, [
                        createBaseVNode("div", _hoisted_17, [
                          createBaseVNode("div", _hoisted_18, [
                            _hoisted_19,
                            createBaseVNode("label", _hoisted_20, toDisplayString(enfermedad.zona), 1)
                          ]),
                          createBaseVNode("div", _hoisted_21, [
                            _hoisted_22,
                            createBaseVNode("label", _hoisted_23, toDisplayString(enfermedad.tratamiento), 1)
                          ]),
                          createBaseVNode("div", _hoisted_24, [
                            _hoisted_25,
                            createBaseVNode("label", _hoisted_26, toDisplayString(unref(getFecha)(enfermedad.fecha_inicio)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_27, [
                            _hoisted_28,
                            createBaseVNode("label", _hoisted_29, toDisplayString(enfermedad.duracion), 1)
                          ]),
                          createBaseVNode("div", _hoisted_30, [
                            _hoisted_31,
                            createBaseVNode("label", _hoisted_32, toDisplayString(enfermedad.actual), 1)
                          ])
                        ])
                      ]);
                    }), 128)),
                    _hoisted_33,
                    _hoisted_34,
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datosDeportes).lesiones, (lesion, index) => {
                      return openBlock(), createElementBlock("div", {
                        key: lesion,
                        class: "account-box"
                      }, [
                        createBaseVNode("div", _hoisted_35, [
                          createBaseVNode("div", _hoisted_36, [
                            _hoisted_37,
                            createBaseVNode("label", _hoisted_38, toDisplayString(lesion.zona), 1)
                          ]),
                          createBaseVNode("div", _hoisted_39, [
                            _hoisted_40,
                            createBaseVNode("label", _hoisted_41, toDisplayString(lesion.tratamiento), 1)
                          ]),
                          createBaseVNode("div", _hoisted_42, [
                            _hoisted_43,
                            createBaseVNode("label", _hoisted_44, toDisplayString(unref(getFecha)(lesion.fecha_inicio)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_45, [
                            _hoisted_46,
                            createBaseVNode("label", _hoisted_47, toDisplayString(lesion.duracion), 1)
                          ]),
                          createBaseVNode("div", _hoisted_48, [
                            _hoisted_49,
                            createBaseVNode("label", _hoisted_50, toDisplayString(lesion.actual), 1)
                          ])
                        ])
                      ]);
                    }), 128)),
                    _hoisted_51
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
