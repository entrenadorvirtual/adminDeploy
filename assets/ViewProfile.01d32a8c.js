import { _ as _sfc_main$b, a as __unplugin_components_0, b as _sfc_main$c, u as useVFieldContext } from "./VControl.65501bd5.js";
import { _ as _sfc_main$a } from "./VInput.44fca328.js";
import { y as defineComponent, z as ref, ao as useAttrs, C as watch, o as openBlock, i as createElementBlock, f as createBlock, w as withCtx, q as createVNode, x as mergeProps, D as unref, k as normalizeClass, Q as withKeys, v as withModifiers, j as createBaseVNode, t as toDisplayString, l as createCommentVNode, r as reactive, A as onMounted, F as Fragment, s as renderList, m as createTextVNode, e as computed, Y as withDirectives, ap as vModelCheckbox, g as renderSlot, ab as normalizeProps, ac as guardReactiveProps, N as onBeforeMount, p as resolveComponent, O as _sfc_main$e, a as useUserSession } from "./index.e9744070.js";
import { g as getFecha } from "./fechas.5f05a473.js";
import { _ as _sfc_main$d } from "./VTextarea.8b1d4b2c.js";
import { g as getZonasDeportista, a as getRitmosDeportista, b as getSemicooper, c as getMorfologiaDeportista, d as getDeportes, e as getObjetivos, f as getDatosDeportista } from "./deportista.f7e08d76.js";
import { _ as _sfc_main$f } from "./VAvatar.ed0a34f1.js";
var VSwitchBlock_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$9 = /* @__PURE__ */ createBaseVNode("div", { class: "slider" }, null, -1);
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" }, null, -1);
const _hoisted_3$8 = {
  key: 2,
  class: "text"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { default: false },
    label: { default: void 0 },
    color: { default: void 0 },
    thin: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const value = ref(props.modelValue);
    const attrs = useAttrs();
    watch(value, () => {
      emit("update:modelValue", value.value);
    });
    watch(
      () => props.modelValue,
      () => {
        value.value = props.modelValue;
      }
    );
    return (_ctx, _cache) => {
      const _component_VInput = _sfc_main$a;
      const _component_VLabel = _sfc_main$b;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          props.label && "switch-block",
          props.thin && props.label && "thin-switch-block"
        ])
      }, [
        props.thin ? (openBlock(), createBlock(_component_VLabel, {
          key: 0,
          raw: "",
          class: normalizeClass(["thin-switch", [props.color && `is-${props.color}`]]),
          tabindex: "0",
          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => emit("update:modelValue", !props.modelValue), ["prevent"]), ["space"]))
        }, {
          default: withCtx(() => [
            createVNode(_component_VInput, mergeProps({
              modelValue: value.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
              type: "checkbox"
            }, unref(attrs)), null, 16, ["modelValue"]),
            _hoisted_1$9
          ]),
          _: 1
        }, 8, ["class"])) : (openBlock(), createBlock(_component_VLabel, {
          key: 1,
          raw: "",
          class: normalizeClass(["form-switch", [props.color && `is-${props.color}`]])
        }, {
          default: withCtx(() => [
            createVNode(_component_VInput, mergeProps({
              raw: "",
              checked: props.modelValue,
              type: "checkbox",
              class: "is-switch"
            }, _ctx.$attrs, {
              onChange: _cache[2] || (_cache[2] = ($event) => emit("update:modelValue", !props.modelValue))
            }), null, 16, ["checked"]),
            _hoisted_2$9
          ]),
          _: 1
        }, 8, ["class"])),
        props.label ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
          createVNode(_component_VLabel, { raw: "" }, {
            default: withCtx(() => [
              createBaseVNode("span", null, toDisplayString(props.label), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var Objetivo_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$8 = { class: "page-content-inner" };
const _hoisted_2$8 = { class: "account-wrapper" };
const _hoisted_3$7 = { class: "columns" };
const _hoisted_4$7 = { class: "column is-12" };
const _hoisted_5$7 = { class: "account-box is-form is-footerless" };
const _hoisted_6$7 = { action: "signup-form" };
const _hoisted_7$7 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Objetivo")
    ])
  ])
], -1);
const _hoisted_8$7 = { class: "p-6" };
const _hoisted_9$7 = { class: "fieldset" };
const _hoisted_10$7 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, null, -1);
const _hoisted_11$6 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-6" }, [
  /* @__PURE__ */ createBaseVNode("h1", null, [
    /* @__PURE__ */ createBaseVNode("u", null, "Objetivos Registrados")
  ])
], -1);
const _hoisted_12$6 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_13$6 = { class: "mx-2" };
const _hoisted_14$6 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Meta")
], -1);
const _hoisted_15$6 = { for: "meta" };
const _hoisted_16$6 = { class: "mx-2" };
const _hoisted_17$6 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "General")
], -1);
const _hoisted_18$6 = { for: "meta" };
const _hoisted_19$6 = { class: "mx-2" };
const _hoisted_20$5 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha")
], -1);
const _hoisted_21$5 = { for: "meta" };
const _hoisted_22$5 = { class: "mx-2" };
const _hoisted_23$5 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Especifico")
], -1);
const _hoisted_24$5 = { for: "meta" };
const _hoisted_25$5 = { class: "mx-2" };
const _hoisted_26$5 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Nombre")
], -1);
const _hoisted_27$5 = { for: "meta" };
const _hoisted_28$5 = { class: "p-6" };
const _hoisted_29$4 = { class: "fieldset" };
const _hoisted_30$4 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Disponibilidad:")
], -1);
const _hoisted_31$4 = { class: "columns is-multiline" };
const _hoisted_32$4 = { class: "column is-3" };
const _hoisted_33$4 = { class: "column is-3" };
const _hoisted_34$4 = { class: "column is-3" };
const _hoisted_35$4 = { class: "column is-3" };
const _hoisted_36$4 = { class: "columns is-multiline" };
const _hoisted_37$4 = { class: "column is-3" };
const _hoisted_38$4 = { class: "column is-3" };
const _hoisted_39$4 = { class: "column is-3" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
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
      const _component_VSwitchBlock = _sfc_main$9;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$c;
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$8, [
          createBaseVNode("div", _hoisted_3$7, [
            createBaseVNode("div", _hoisted_4$7, [
              createBaseVNode("div", _hoisted_5$7, [
                createBaseVNode("form", _hoisted_6$7, [
                  _hoisted_7$7,
                  createBaseVNode("div", _hoisted_8$7, [
                    createBaseVNode("div", _hoisted_9$7, [
                      _hoisted_10$7,
                      _hoisted_11$6,
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datosObjetivos).meta_deportiva, (meta, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: meta,
                          class: "columns is-multiline m-4"
                        }, [
                          _hoisted_12$6,
                          createBaseVNode("div", _hoisted_13$6, [
                            _hoisted_14$6,
                            createBaseVNode("label", _hoisted_15$6, toDisplayString(meta.deporte), 1)
                          ]),
                          createBaseVNode("div", _hoisted_16$6, [
                            _hoisted_17$6,
                            createBaseVNode("label", _hoisted_18$6, toDisplayString(meta.general), 1)
                          ]),
                          createBaseVNode("div", _hoisted_19$6, [
                            _hoisted_20$5,
                            createBaseVNode("label", _hoisted_21$5, toDisplayString(unref(getFecha)(meta.fecha)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_22$5, [
                            _hoisted_23$5,
                            createBaseVNode("label", _hoisted_24$5, toDisplayString(meta.especifico), 1)
                          ]),
                          createBaseVNode("div", _hoisted_25$5, [
                            _hoisted_26$5,
                            createBaseVNode("label", _hoisted_27$5, toDisplayString(meta.nombre), 1)
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_28$5, [
                    createBaseVNode("div", _hoisted_29$4, [
                      _hoisted_30$4,
                      createBaseVNode("div", _hoisted_31$4, [
                        createBaseVNode("div", _hoisted_32$4, [
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
                        createBaseVNode("div", _hoisted_33$4, [
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
                        createBaseVNode("div", _hoisted_34$4, [
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
                        createBaseVNode("div", _hoisted_35$4, [
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
                      createBaseVNode("div", _hoisted_36$4, [
                        createBaseVNode("div", _hoisted_37$4, [
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
                        createBaseVNode("div", _hoisted_38$4, [
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
                        createBaseVNode("div", _hoisted_39$4, [
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
var Salud_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$7 = { class: "page-content-inner" };
const _hoisted_2$7 = { class: "account-wrapper" };
const _hoisted_3$6 = { class: "columns" };
const _hoisted_4$6 = { class: "column is-12" };
const _hoisted_5$6 = { class: "account-box is-form is-footerless" };
const _hoisted_6$6 = { action: "" };
const _hoisted_7$6 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Salud")
    ])
  ])
], -1);
const _hoisted_8$6 = { class: "p-6" };
const _hoisted_9$6 = { class: "fieldset" };
const _hoisted_10$6 = { class: "columns is-multiline" };
const _hoisted_11$5 = { class: "column is-4" };
const _hoisted_12$5 = /* @__PURE__ */ createTextVNode(" Esfuerzo f\xEDsico en el trabajo ");
const _hoisted_13$5 = { class: "column is-4" };
const _hoisted_14$5 = /* @__PURE__ */ createTextVNode(" Horas de Sue\xF1o ");
const _hoisted_15$5 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_16$5 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "columns is-multiline is-desktop" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
        /* @__PURE__ */ createBaseVNode("h4", null, "Enfermedades")
      ])
    ])
  ])
], -1);
const _hoisted_17$5 = { class: "columns is-multiline" };
const _hoisted_18$5 = { class: "mx-2" };
const _hoisted_19$5 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Zona")
], -1);
const _hoisted_20$4 = { for: "zoa" };
const _hoisted_21$4 = { class: "mx-2" };
const _hoisted_22$4 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Tratamiento")
], -1);
const _hoisted_23$4 = { for: "zoa" };
const _hoisted_24$4 = { class: "mx-2" };
const _hoisted_25$4 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha Inicio")
], -1);
const _hoisted_26$4 = { for: "zoa" };
const _hoisted_27$4 = { class: "mx-2" };
const _hoisted_28$4 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Duraci\xF3n")
], -1);
const _hoisted_29$3 = { for: "zoa" };
const _hoisted_30$3 = { class: "mx-2" };
const _hoisted_31$3 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Actualmente la tiene")
], -1);
const _hoisted_32$3 = { for: "zoa" };
const _hoisted_33$3 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_34$3 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "columns is-multiline is-desktop" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
        /* @__PURE__ */ createBaseVNode("h4", null, "Lesioness")
      ])
    ])
  ])
], -1);
const _hoisted_35$3 = { class: "columns is-multiline" };
const _hoisted_36$3 = { class: "mx-2" };
const _hoisted_37$3 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Zona")
], -1);
const _hoisted_38$3 = { for: "zoa" };
const _hoisted_39$3 = { class: "mx-2" };
const _hoisted_40$2 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Tratamiento")
], -1);
const _hoisted_41$2 = { for: "zoa" };
const _hoisted_42$2 = { class: "mx-2" };
const _hoisted_43$2 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha Inicio")
], -1);
const _hoisted_44$2 = { for: "zoa" };
const _hoisted_45$2 = { class: "mx-2" };
const _hoisted_46$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Duraci\xF3n")
], -1);
const _hoisted_47$1 = { for: "zoa" };
const _hoisted_48$1 = { class: "mx-2" };
const _hoisted_49$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Actualmente la tiene")
], -1);
const _hoisted_50$1 = { for: "zoa" };
const _hoisted_51$1 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
      const _component_VLabel = _sfc_main$b;
      const _component_VInput = _sfc_main$a;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$c;
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("div", _hoisted_3$6, [
            createBaseVNode("div", _hoisted_4$6, [
              createBaseVNode("div", _hoisted_5$6, [
                createBaseVNode("form", _hoisted_6$6, [
                  _hoisted_7$6,
                  createBaseVNode("div", _hoisted_8$6, [
                    createBaseVNode("div", _hoisted_9$6, [
                      createBaseVNode("div", _hoisted_10$6, [
                        createBaseVNode("div", _hoisted_11$5, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VLabel, {
                                    raw: "",
                                    class: "auth-label"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_12$5
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
                        createBaseVNode("div", _hoisted_13$5, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VLabel, {
                                    raw: "",
                                    class: "auth-label"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_14$5
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
                    _hoisted_15$5,
                    _hoisted_16$5,
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datosDeportes).enfermedades, (enfermedad, index) => {
                      return openBlock(), createElementBlock("div", {
                        key: enfermedad,
                        class: "account-box"
                      }, [
                        createBaseVNode("div", _hoisted_17$5, [
                          createBaseVNode("div", _hoisted_18$5, [
                            _hoisted_19$5,
                            createBaseVNode("label", _hoisted_20$4, toDisplayString(enfermedad.zona), 1)
                          ]),
                          createBaseVNode("div", _hoisted_21$4, [
                            _hoisted_22$4,
                            createBaseVNode("label", _hoisted_23$4, toDisplayString(enfermedad.tratamiento), 1)
                          ]),
                          createBaseVNode("div", _hoisted_24$4, [
                            _hoisted_25$4,
                            createBaseVNode("label", _hoisted_26$4, toDisplayString(unref(getFecha)(enfermedad.fecha_inicio)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_27$4, [
                            _hoisted_28$4,
                            createBaseVNode("label", _hoisted_29$3, toDisplayString(enfermedad.duracion), 1)
                          ]),
                          createBaseVNode("div", _hoisted_30$3, [
                            _hoisted_31$3,
                            createBaseVNode("label", _hoisted_32$3, toDisplayString(enfermedad.actual), 1)
                          ])
                        ])
                      ]);
                    }), 128)),
                    _hoisted_33$3,
                    _hoisted_34$3,
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datosDeportes).lesiones, (lesion, index) => {
                      return openBlock(), createElementBlock("div", {
                        key: lesion,
                        class: "account-box"
                      }, [
                        createBaseVNode("div", _hoisted_35$3, [
                          createBaseVNode("div", _hoisted_36$3, [
                            _hoisted_37$3,
                            createBaseVNode("label", _hoisted_38$3, toDisplayString(lesion.zona), 1)
                          ]),
                          createBaseVNode("div", _hoisted_39$3, [
                            _hoisted_40$2,
                            createBaseVNode("label", _hoisted_41$2, toDisplayString(lesion.tratamiento), 1)
                          ]),
                          createBaseVNode("div", _hoisted_42$2, [
                            _hoisted_43$2,
                            createBaseVNode("label", _hoisted_44$2, toDisplayString(unref(getFecha)(lesion.fecha_inicio)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_45$2, [
                            _hoisted_46$1,
                            createBaseVNode("label", _hoisted_47$1, toDisplayString(lesion.duracion), 1)
                          ]),
                          createBaseVNode("div", _hoisted_48$1, [
                            _hoisted_49$1,
                            createBaseVNode("label", _hoisted_50$1, toDisplayString(lesion.actual), 1)
                          ])
                        ])
                      ]);
                    }), 128)),
                    _hoisted_51$1
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
var VCheckbox_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$6 = ["id", "true-value", "false-value"];
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    raw: { type: Boolean },
    label: { default: void 0 },
    color: { default: void 0 },
    trueValue: { type: [String, Number, Boolean], default: true },
    falseValue: { type: [String, Number, Boolean], default: false },
    modelValue: { default: false },
    circle: { type: Boolean, default: false },
    solid: { type: Boolean, default: false },
    paddingless: { type: Boolean, default: false },
    wrapperClass: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    const vFieldContext = reactive(useVFieldContext());
    const $value = ref((_b = (_a = vFieldContext.field) == null ? void 0 : _a.value) != null ? _b : props.modelValue);
    const classes = computed(() => {
      if (props.raw)
        return [props.wrapperClass];
      return [
        "checkbox",
        props.wrapperClass,
        props.solid ? "is-solid" : "is-outlined",
        props.circle && "is-circle",
        props.color && `is-${props.color}`,
        props.paddingless && "is-paddingless"
      ];
    });
    watch($value, () => {
      emits("update:modelValue", $value.value);
    });
    watch(
      () => props.modelValue,
      () => {
        $value.value = props.modelValue;
      }
    );
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$b;
      return openBlock(), createBlock(_component_VLabel, {
        raw: "",
        class: normalizeClass(unref(classes))
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("input", mergeProps({
            id: unref(vFieldContext).id,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $value.value = $event)
          }, _ctx.$attrs, {
            "true-value": props.trueValue,
            "false-value": props.falseValue,
            type: "checkbox"
          }), null, 16, _hoisted_1$6), [
            [vModelCheckbox, $value.value]
          ]),
          _hoisted_2$6,
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(unref(vFieldContext))), () => [
            createTextVNode(toDisplayString(props.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
var Deportivo_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$5 = { class: "page-content-inner" };
const _hoisted_2$5 = { class: "account-wrapper" };
const _hoisted_3$5 = { class: "columns" };
const _hoisted_4$5 = { class: "column is-12" };
const _hoisted_5$5 = { class: "account-box is-form is-footerless" };
const _hoisted_6$5 = { action: "signup-form" };
const _hoisted_7$5 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Deportiva")
    ])
  ])
], -1);
const _hoisted_8$5 = { class: "p-6" };
const _hoisted_9$5 = { class: "fieldset" };
const _hoisted_10$5 = { class: "columns is-multiline" };
const _hoisted_11$4 = { class: "column is-6" };
const _hoisted_12$4 = /* @__PURE__ */ createTextVNode(" Rese\xF1a ");
const _hoisted_13$4 = { class: "column is-6" };
const _hoisted_14$4 = /* @__PURE__ */ createTextVNode(" Mensaje Entrenador ");
const _hoisted_15$4 = { class: "column is-6" };
const _hoisted_16$4 = { class: "columns is-multiline is-vcentered" };
const _hoisted_17$4 = { class: "column is-6" };
const _hoisted_18$4 = /* @__PURE__ */ createTextVNode("Edad Deportiva");
const _hoisted_19$4 = { class: "column is-6" };
const _hoisted_20$3 = /* @__PURE__ */ createTextVNode("Nivel deportivo subjetivo");
const _hoisted_21$3 = { class: "column is-6" };
const _hoisted_22$3 = /* @__PURE__ */ createTextVNode(" Usa Puls\xF3metro ");
const _hoisted_23$3 = { class: "column is-6" };
const _hoisted_24$3 = /* @__PURE__ */ createBaseVNode("p", null, "Marca Pulsometro", -1);
const _hoisted_25$3 = { class: "column is-6" };
const _hoisted_26$3 = /* @__PURE__ */ createBaseVNode("label", {
  raw: "",
  class: "auth-label"
}, " Otros Deportes ", -1);
const _hoisted_27$3 = { class: "column is-6" };
const _hoisted_28$3 = /* @__PURE__ */ createBaseVNode("p", null, "Otro deporte", -1);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      const _component_VLabel = _sfc_main$b;
      const _component_VTextarea = _sfc_main$d;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$c;
      const _component_VInput = _sfc_main$a;
      const _component_VCheckbox = _sfc_main$6;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("div", _hoisted_3$5, [
            createBaseVNode("div", _hoisted_4$5, [
              createBaseVNode("div", _hoisted_5$5, [
                createBaseVNode("form", _hoisted_6$5, [
                  _hoisted_7$5,
                  createBaseVNode("div", _hoisted_8$5, [
                    createBaseVNode("div", _hoisted_9$5, [
                      createBaseVNode("div", _hoisted_10$5, [
                        createBaseVNode("div", _hoisted_11$4, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VLabel, {
                                    raw: "",
                                    class: "auth-label"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_12$4
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
                        createBaseVNode("div", _hoisted_13$4, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VLabel, {
                                    raw: "",
                                    class: "auth-label"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_14$4
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
                        createBaseVNode("div", _hoisted_15$4, [
                          createBaseVNode("div", _hoisted_16$4, [
                            createBaseVNode("div", _hoisted_17$4, [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VLabel, {
                                    raw: "",
                                    class: "auth-label"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_18$4
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
                            createBaseVNode("div", _hoisted_19$4, [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VLabel, {
                                    raw: "",
                                    class: "auth-label"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_20$3
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
                            createBaseVNode("div", _hoisted_21$3, [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VLabel, {
                                        raw: "",
                                        class: "auth-label"
                                      }, {
                                        default: withCtx(() => [
                                          _hoisted_22$3
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
                            createBaseVNode("div", _hoisted_23$3, [
                              _hoisted_24$3,
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
                        createBaseVNode("div", _hoisted_25$3, [
                          _hoisted_26$3,
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
                              createBaseVNode("div", _hoisted_27$3, [
                                _hoisted_28$3,
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
const _hoisted_1$4 = { class: "account-box is-form is-footerless" };
const _hoisted_2$4 = { action: "signup-form" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Rendimiento")
    ])
  ])
], -1);
const _hoisted_4$4 = { class: "fieldset p-6" };
const _hoisted_5$4 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Test Semicooper:")
], -1);
const _hoisted_6$4 = { class: "columns is-multiline" };
const _hoisted_7$4 = { class: "column is-4" };
const _hoisted_8$4 = /* @__PURE__ */ createTextVNode(" VAM ");
const _hoisted_9$4 = { class: "column is-6" };
const _hoisted_10$4 = /* @__PURE__ */ createTextVNode(" Test ");
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_12$3 = { class: "columns is-multiline" };
const _hoisted_13$3 = { class: "column is-5" };
const _hoisted_14$3 = { class: "columns is-multiline" };
const _hoisted_15$3 = { class: "fieldset column is-12" };
const _hoisted_16$3 = { class: "fieldset-heading" };
const _hoisted_17$3 = /* @__PURE__ */ createTextVNode(" Zonas de frecuencia (ppm) ");
const _hoisted_18$3 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_19$3 = /* @__PURE__ */ createTextVNode(" Son rangos para medir la intensidad del ejercicio ");
const _hoisted_20$2 = { class: "columns is-multiline m-2" };
const _hoisted_21$2 = { class: "column is-4" };
const _hoisted_22$2 = /* @__PURE__ */ createTextVNode(" Z1 ");
const _hoisted_23$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_24$2 = { class: "column is-4" };
const _hoisted_25$2 = { class: "column is-4" };
const _hoisted_26$2 = { class: "column is-4" };
const _hoisted_27$2 = /* @__PURE__ */ createTextVNode(" Z2 ");
const _hoisted_28$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_29$2 = { class: "column is-4" };
const _hoisted_30$2 = { class: "column is-4" };
const _hoisted_31$2 = { class: "column is-4" };
const _hoisted_32$2 = /* @__PURE__ */ createTextVNode(" Z3 ");
const _hoisted_33$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_34$2 = { class: "column is-4" };
const _hoisted_35$2 = { class: "column is-4" };
const _hoisted_36$2 = { class: "column is-4" };
const _hoisted_37$2 = /* @__PURE__ */ createTextVNode(" Z4 ");
const _hoisted_38$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_39$2 = { class: "column is-4" };
const _hoisted_40$1 = { class: "column is-4" };
const _hoisted_41$1 = { class: "column is-4" };
const _hoisted_42$1 = /* @__PURE__ */ createTextVNode(" Z5 ");
const _hoisted_43$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_44$1 = { class: "column is-4" };
const _hoisted_45$1 = { class: "column is-4" };
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      const _component_VLabel = _sfc_main$b;
      const _component_VInput = _sfc_main$a;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$c;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VButton = _sfc_main$e;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("form", _hoisted_2$4, [
          _hoisted_3$4,
          createBaseVNode("div", _hoisted_4$4, [
            _hoisted_5$4,
            createBaseVNode("div", _hoisted_6$4, [
              createBaseVNode("div", _hoisted_7$4, [
                createVNode(_component_VField, { id: "estatura" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_8$4
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
              createBaseVNode("div", _hoisted_9$4, [
                createVNode(_component_VField, { id: "semicooper" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_10$4
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
            _hoisted_11$3,
            createBaseVNode("div", _hoisted_12$3, [
              createBaseVNode("div", _hoisted_13$3, [
                createBaseVNode("div", _hoisted_14$3, [
                  createBaseVNode("div", _hoisted_15$3, [
                    createBaseVNode("div", _hoisted_16$3, [
                      createBaseVNode("h4", null, [
                        _hoisted_17$3,
                        createVNode(_component_Tippy, null, {
                          content: withCtx(() => [
                            _hoisted_19$3
                          ]),
                          default: withCtx(() => [
                            _hoisted_18$3
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_20$2, [
                      createBaseVNode("div", _hoisted_21$2, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_22$2,
                            _hoisted_23$2
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_24$2, [
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
                      createBaseVNode("div", _hoisted_25$2, [
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
                      createBaseVNode("div", _hoisted_26$2, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_27$2,
                            _hoisted_28$2
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_29$2, [
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
                      createBaseVNode("div", _hoisted_30$2, [
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
                      createBaseVNode("div", _hoisted_31$2, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_32$2,
                            _hoisted_33$2
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_34$2, [
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
                      createBaseVNode("div", _hoisted_35$2, [
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
                      createBaseVNode("div", _hoisted_36$2, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_37$2,
                            _hoisted_38$2
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_39$2, [
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
                      createBaseVNode("div", _hoisted_40$1, [
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
                      createBaseVNode("div", _hoisted_41$1, [
                        createVNode(_component_VButton, {
                          rounded: "",
                          color: "success",
                          fullwidth: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_42$1,
                            _hoisted_43$1
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_44$1, [
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
                      createBaseVNode("div", _hoisted_45$1, [
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
const _hoisted_1$3 = { class: "account-box is-form is-footerless" };
const _hoisted_2$3 = { action: "signup-form" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Capacidad F\xEDsica")
    ])
  ])
], -1);
const _hoisted_4$3 = { class: "p-6" };
const _hoisted_5$3 = { class: "fieldset" };
const _hoisted_6$3 = { class: "columns is-multiline" };
const _hoisted_7$3 = { class: "column is-4" };
const _hoisted_8$3 = /* @__PURE__ */ createTextVNode(" Frecuencia M\xEDnima ");
const _hoisted_9$3 = { class: "column is-4" };
const _hoisted_10$3 = /* @__PURE__ */ createTextVNode(" Frecuencia M\xE1xima ");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    fc_min: String,
    fc_max: String
  },
  setup(__props) {
    const props = __props;
    const deportista = reactive({
      fc_min: "",
      fc_max: ""
    });
    onMounted(() => {
      if (props.fc_min !== void 0 && props.fc_max !== void 0) {
        deportista.fc_min = props.fc_min;
        deportista.fc_max = props.fc_max;
      } else {
        deportista.fc_min = "";
        deportista.fc_max = "";
      }
    });
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$b;
      const _component_VInput = _sfc_main$a;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$c;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("form", _hoisted_2$3, [
          _hoisted_3$3,
          createBaseVNode("div", _hoisted_4$3, [
            createBaseVNode("div", _hoisted_5$3, [
              createBaseVNode("div", _hoisted_6$3, [
                createBaseVNode("div", _hoisted_7$3, [
                  createVNode(_component_VField, { id: "fcMin" }, {
                    default: withCtx(() => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_8$3
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          createVNode(_component_VInput, {
                            value: unref(deportista).fc_min,
                            type: "text",
                            placeholder: "FCmin",
                            autocomplete: "off",
                            disabled: ""
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_9$3, [
                  createVNode(_component_VField, { id: "fcMax" }, {
                    default: withCtx(() => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_10$3
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          createVNode(_component_VInput, {
                            value: unref(deportista).fc_max,
                            type: "text",
                            placeholder: "FCMax",
                            autocomplete: "off",
                            disabled: ""
                          }, null, 8, ["value"])
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
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "account-box is-form is-footerless" };
const _hoisted_2$2 = { action: "signup-form" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Morfolog\xEDa")
    ])
  ])
], -1);
const _hoisted_4$2 = { class: "fieldset p-6" };
const _hoisted_5$2 = { class: "columns is-multiline" };
const _hoisted_6$2 = { class: "column is-4" };
const _hoisted_7$2 = /* @__PURE__ */ createTextVNode(" Estatura (cm) ");
const _hoisted_8$2 = { class: "column is-4" };
const _hoisted_9$2 = /* @__PURE__ */ createTextVNode(" Peso (Kg) ");
const _hoisted_10$2 = { class: "column is-4" };
const _hoisted_11$2 = /* @__PURE__ */ createTextVNode(" Grasa ");
const _hoisted_12$2 = { class: "column is-4" };
const _hoisted_13$2 = /* @__PURE__ */ createTextVNode(" IMC ");
const _hoisted_14$2 = { class: "column is-4" };
const _hoisted_15$2 = /* @__PURE__ */ createTextVNode(" Somatotipo ");
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, [
    /* @__PURE__ */ createBaseVNode("hr"),
    /* @__PURE__ */ createTextVNode(" Per\xEDmetros ")
  ])
], -1);
const _hoisted_17$2 = { class: "columns is-multiline" };
const _hoisted_18$2 = { class: "column is-2" };
const _hoisted_19$2 = /* @__PURE__ */ createTextVNode(" Cintura ");
const _hoisted_20$1 = { class: "column is-5" };
const _hoisted_21$1 = { class: "column is-5" };
const _hoisted_22$1 = { class: "column is-2" };
const _hoisted_23$1 = /* @__PURE__ */ createTextVNode(" Brazo ");
const _hoisted_24$1 = { class: "column is-5" };
const _hoisted_25$1 = { class: "column is-5" };
const _hoisted_26$1 = { class: "column is-2" };
const _hoisted_27$1 = /* @__PURE__ */ createTextVNode(" Muslo Medio ");
const _hoisted_28$1 = { class: "column is-5" };
const _hoisted_29$1 = { class: "column is-5" };
const _hoisted_30$1 = { class: "column is-2" };
const _hoisted_31$1 = /* @__PURE__ */ createTextVNode(" Pantorrilla ");
const _hoisted_32$1 = { class: "column is-5" };
const _hoisted_33$1 = { class: "column is-5" };
const _hoisted_34$1 = { class: "column is-2" };
const _hoisted_35$1 = /* @__PURE__ */ createTextVNode(" Pecho ");
const _hoisted_36$1 = { class: "column is-5" };
const _hoisted_37$1 = { class: "column is-5" };
const _hoisted_38$1 = { class: "column is-2" };
const _hoisted_39$1 = /* @__PURE__ */ createTextVNode(" Hombros ");
const _hoisted_40 = { class: "column is-5" };
const _hoisted_41 = { class: "column is-5" };
const _hoisted_42 = { class: "column is-2" };
const _hoisted_43 = /* @__PURE__ */ createTextVNode(" Gl\xFAteos ");
const _hoisted_44 = { class: "column is-5" };
const _hoisted_45 = { class: "column is-5" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      const _component_VLabel = _sfc_main$b;
      const _component_VInput = _sfc_main$a;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$c;
      const _component_VButton = _sfc_main$e;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("form", _hoisted_2$2, [
          _hoisted_3$2,
          createBaseVNode("div", _hoisted_4$2, [
            createBaseVNode("div", _hoisted_5$2, [
              createBaseVNode("div", _hoisted_6$2, [
                createVNode(_component_VField, { id: "estatura" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_7$2
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
              createBaseVNode("div", _hoisted_8$2, [
                createVNode(_component_VField, { id: "peso" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_9$2
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
              createBaseVNode("div", _hoisted_10$2, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_11$2
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
              createBaseVNode("div", _hoisted_12$2, [
                createVNode(_component_VField, { id: "IMC" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_13$2
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
              createBaseVNode("div", _hoisted_14$2, [
                createVNode(_component_VField, { id: "IMC" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_15$2
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
            _hoisted_16$2,
            createBaseVNode("div", _hoisted_17$2, [
              createBaseVNode("div", _hoisted_18$2, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_19$2
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_20$1, [
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
              createBaseVNode("div", _hoisted_21$1, [
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
              createBaseVNode("div", _hoisted_22$1, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_23$1
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_24$1, [
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
              createBaseVNode("div", _hoisted_25$1, [
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
              createBaseVNode("div", _hoisted_26$1, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_27$1
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_28$1, [
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
              createBaseVNode("div", _hoisted_29$1, [
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
              createBaseVNode("div", _hoisted_30$1, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_31$1
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_32$1, [
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
              createBaseVNode("div", _hoisted_33$1, [
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
              createBaseVNode("div", _hoisted_34$1, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_35$1
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_36$1, [
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
              createBaseVNode("div", _hoisted_37$1, [
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
              createBaseVNode("div", _hoisted_38$1, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_39$1
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
var Personales_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "account-box is-form is-footerless" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Personal")
    ])
  ])
], -1);
const _hoisted_3$1 = { class: "fieldset" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, null, -1);
const _hoisted_5$1 = { class: "columns is-multiline" };
const _hoisted_6$1 = { class: "column is-4" };
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode(" Nombres ");
const _hoisted_8$1 = { class: "column is-4" };
const _hoisted_9$1 = /* @__PURE__ */ createTextVNode(" Apellidos ");
const _hoisted_10$1 = { class: "column is-4" };
const _hoisted_11$1 = /* @__PURE__ */ createTextVNode(" Documento de identificaci\xF3n ");
const _hoisted_12$1 = { class: "column is-4" };
const _hoisted_13$1 = /* @__PURE__ */ createTextVNode(" Fecha de nacimiento ");
const _hoisted_14$1 = { class: "column is-4" };
const _hoisted_15$1 = /* @__PURE__ */ createTextVNode(" Pais ");
const _hoisted_16$1 = { class: "column is-4" };
const _hoisted_17$1 = /* @__PURE__ */ createTextVNode(" Ciudad ");
const _hoisted_18$1 = { class: "column is-4" };
const _hoisted_19$1 = /* @__PURE__ */ createTextVNode(" Usuario ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    nombres: String,
    apellidos: String,
    identificacion: String,
    fecha_nacimiento: String,
    nameUser: String,
    ciudadActual: String,
    paisActual: String
  },
  setup(__props) {
    const props = __props;
    const deportista = reactive({
      nombres: "",
      apellidos: "",
      identificacion: "",
      fecha_nacimiento: "",
      nameUser: "",
      ciudadActual: "",
      paisActual: ""
    });
    onMounted(() => {
      deportista.nombres = props.nombres;
      deportista.apellidos = props.apellidos;
      deportista.identificacion = props.identificacion;
      deportista.ciudadActual = props.ciudadActual;
      deportista.paisActual = props.paisActual;
      deportista.nameUser = props.nameUser;
      const fechaISO = new Date(props.fecha_nacimiento);
      const anio = fechaISO.getFullYear();
      const mes = (fechaISO.getMonth() + 1).toString().padStart(2, "0");
      const dia = fechaISO.getDate().toString().padStart(2, "0");
      deportista.fecha_nacimiento = `${anio}-${mes}-${dia}`;
    });
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$b;
      const _component_VInput = _sfc_main$a;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$c;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _hoisted_2$1,
        createBaseVNode("form", {
          action: "signup-form",
          class: "p-6",
          onSubmit: _cache[0] || (_cache[0] = (...args) => _ctx.onSave && _ctx.onSave(...args))
        }, [
          createBaseVNode("div", _hoisted_3$1, [
            _hoisted_4$1,
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("div", _hoisted_6$1, [
                createVNode(_component_VField, { id: "nombres" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_7$1
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          value: unref(deportista).nombres,
                          disabled: "",
                          type: "text"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_8$1, [
                createVNode(_component_VField, { id: "apellidos" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_9$1
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          value: unref(deportista).apellidos,
                          type: "text",
                          disabled: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_10$1, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, null, {
                      default: withCtx(() => [
                        _hoisted_11$1
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:credit-card" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          type: "text",
                          value: unref(deportista).identificacion,
                          disabled: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_12$1, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, null, {
                      default: withCtx(() => [
                        _hoisted_13$1
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          disabled: "",
                          type: "text",
                          value: unref(deportista).fecha_nacimiento
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_14$1, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, null, {
                      default: withCtx(() => [
                        _hoisted_15$1
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:flag" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          type: "text",
                          value: unref(deportista).paisActual,
                          disabled: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_16$1, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, null, {
                      default: withCtx(() => [
                        _hoisted_17$1
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:map" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          type: "text",
                          value: unref(deportista).ciudadActual,
                          disabled: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_18$1, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, null, {
                      default: withCtx(() => [
                        _hoisted_19$1
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          type: "text",
                          value: unref(deportista).nameUser,
                          disabled: ""
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ], 32)
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
      const _component_VAvatar = _sfc_main$f;
      const _component_VButton = _sfc_main$e;
      const _component_Personales = _sfc_main$1;
      const _component_Morfologico = _sfc_main$2;
      const _component_CapacidadFisica = _sfc_main$3;
      const _component_Rendimiento = _sfc_main$4;
      const _component_Deportivo = _sfc_main$5;
      const _component_Salud = _sfc_main$7;
      const _component_Objetivo = _sfc_main$8;
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
