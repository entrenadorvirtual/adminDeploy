import { _ as _sfc_main$7 } from "./VInput.bb7a011d.js";
import { _ as _sfc_main$6 } from "./VCheckbox.e12df09a.js";
import { _ as _sfc_main$5 } from "./VField.40eec146.js";
import { _ as __unplugin_components_2 } from "./VControl.c459fb91.js";
import { _ as _sfc_main$4 } from "./VTextarea.8694b362.js";
import { _ as _sfc_main$3 } from "./VLabel.c9d776c3.js";
import { y as defineComponent, a as useUserSession, z as ref, aq as useWindowScroll, e as computed, r as reactive, A as onMounted, p as resolveComponent, ar as resolveDirective, o as openBlock, i as createElementBlock, j as createBaseVNode, k as normalizeClass, D as unref, q as createVNode, w as withCtx, M as withKeys, v as withModifiers, a1 as withDirectives, t as toDisplayString, l as createCommentVNode, m as createTextVNode, Y as _sfc_main$2, a5 as useHead, f as createBlock } from "./index.3437b938.js";
import { u as useNotyf } from "./useNotyf.c1050c77.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { b as getDeportes, c as updateDeportes } from "./deportista.87466242.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
import "./config.165bca36.js";
import "./general.34b73030.js";
import "./main.06195782.js";
var Deportivo_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-12" };
const _hoisted_5 = { class: "account-box is-form is-footerless" };
const _hoisted_6 = { class: "form-head-inner" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n General"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edita la informac\xEDon general de tu cuenta")
], -1);
const _hoisted_8 = { class: "right" };
const _hoisted_9 = { class: "buttons" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Guardar cambios ");
const _hoisted_12 = { class: "p-6" };
const _hoisted_13 = { class: "fieldset" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n Deportes:"),
  /* @__PURE__ */ createBaseVNode("p", null, "Otras personas quieren conocerte m\xE1s")
], -1);
const _hoisted_15 = { class: "columns is-multiline" };
const _hoisted_16 = { class: "column is-6" };
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" Rese\xF1a ");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_19 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_21 = [
  _hoisted_20
];
const _hoisted_22 = { class: "column is-6" };
const _hoisted_23 = /* @__PURE__ */ createTextVNode("Edad Deportiva ");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_25 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_27 = [
  _hoisted_26
];
const _hoisted_28 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_29 = { class: "column is-3" };
const _hoisted_30 = /* @__PURE__ */ createTextVNode(" Nivel Deportivo Subjetivo ");
const _hoisted_31 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_33 = [
  _hoisted_32
];
const _hoisted_34 = { class: "column is-3" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("label", {
  raw: "",
  class: "auth-label"
}, " Otros Deportes ", -1);
const _hoisted_36 = {
  key: 0,
  class: "column is-12"
};
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("p", null, "Otro deporte", -1);
const _hoisted_38 = { class: "column is-3" };
const _hoisted_39 = /* @__PURE__ */ createTextVNode(" Usa Pulsometro ");
const _hoisted_40 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_42 = [
  _hoisted_41
];
const _hoisted_43 = {
  key: 0,
  class: "column is-3"
};
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("p", null, "Marca Pulsometro", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const isLoading = ref(false);
    const edadDeportivaMensaje = ref("");
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const datosDeportes = reactive({
      resenia: "",
      edad_deportiva: "",
      lesiones: [],
      enfermedad_actual: "",
      enfermedad_duracion: "",
      enfermedad_fech_inicio: "",
      enfermedad_tratamiento: "",
      enfermedad_zona: "",
      esfuerzo_trabajo: "",
      nutricion: "",
      otros: {},
      otro: "",
      pulsometro: "",
      subjetivo: "",
      sue\u00F1o: ""
    });
    const activarBoton = computed(() => {
      let disabled = true;
      if (datosDeportes.edad_deportiva != null && datosDeportes.edad_deportiva != "") {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    });
    const selectedEdadDeportiva = () => {
      let existe = false;
      if (datosDeportes.edad_deportiva == null) {
        edadDeportivaMensaje.value = '"Debes escoger un intervalo"';
        existe = true;
      }
      return existe;
    };
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      await updateDeportes(userSession.userId, datosDeportes);
      emit("update");
      notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
      isLoading.value = false;
    };
    onMounted(async () => {
      const datos = await getDeportes(userSession.userId);
      datosDeportes.edad_deportiva = (datos == null ? void 0 : datos.edad_deportiva) || "";
      datosDeportes.lesiones = (datos == null ? void 0 : datos.lesiones) || [];
      datosDeportes.enfermedad_actual = (datos == null ? void 0 : datos.enfermedad_actual) || "";
      datosDeportes.enfermedad_duracion = (datos == null ? void 0 : datos.enfermedad_duracion) || "";
      datosDeportes.enfermedad_fech_inicio = (datos == null ? void 0 : datos.enfermedad_fech_inicio) || "";
      datosDeportes.enfermedad_tratamiento = (datos == null ? void 0 : datos.enfermedad_tratamiento) || "";
      datosDeportes.enfermedad_zona = (datos == null ? void 0 : datos.enfermedad_zona) || "";
      datosDeportes.esfuerzo_trabajo = (datos == null ? void 0 : datos.esfuerzo_trabajo) || "";
      datosDeportes.nutricion = (datos == null ? void 0 : datos.nutricion) || "";
      datosDeportes.otros = (datos == null ? void 0 : datos.otros) || "";
      datosDeportes.otro = (datos == null ? void 0 : datos.otro) || "";
      datosDeportes.pulsometro = (datos == null ? void 0 : datos.pulsometro) || "";
      datosDeportes.subjetivo = (datos == null ? void 0 : datos.subjetivo) || "";
      datosDeportes.sue\u00F1o = (datos == null ? void 0 : datos.sue\u00F1o) || "";
      datosDeportes.resenia = (datos == null ? void 0 : datos.resenia) || "";
      datosDeportes.marcaPulsometro = (datos == null ? void 0 : datos.marcaPulsometro) || "";
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$3;
      const _component_VTextarea = _sfc_main$4;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$5;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VCheckbox = _sfc_main$6;
      const _component_VInput = _sfc_main$7;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", {
                  class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
                }, [
                  createBaseVNode("div", _hoisted_6, [
                    _hoisted_7,
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("div", _hoisted_9, [
                        createVNode(_component_VButton, {
                          to: { name: "deportista" },
                          icon: "lnir lnir-arrow-left rem-100",
                          light: "",
                          "dark-outlined": ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_10
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VButton, {
                          color: "primary",
                          raised: "",
                          loading: isLoading.value,
                          disabled: unref(activarBoton),
                          tabindex: "0",
                          onKeydown: withKeys(withModifiers(onSave, ["prevent"]), ["space"]),
                          onClick: onSave
                        }, {
                          default: withCtx(() => [
                            _hoisted_11
                          ]),
                          _: 1
                        }, 8, ["loading", "disabled", "onKeydown"])
                      ])
                    ])
                  ])
                ], 2),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    _hoisted_14,
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_17,
                                    createVNode(_component_font, {
                                      size: "4",
                                      color: "red"
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_18
                                      ]),
                                      _: 1
                                    }),
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_19, _hoisted_21)), [
                                      [
                                        _directive_tooltip,
                                        "Escribe tu resumen deportivo, para que tu entrenador la pueda conocer",
                                        void 0,
                                        {
                                          primary: true,
                                          bubble: true,
                                          right: true
                                        }
                                      ]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VTextarea, {
                                      modelValue: unref(datosDeportes).resenia,
                                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(datosDeportes).resenia = $event),
                                      rows: "4",
                                      placeholder: "Ingrese una corta descripci\xF3n sobre usted",
                                      autocomplete: "off",
                                      autocapitalize: "off",
                                      spellcheck: "true"
                                    }, null, 8, ["modelValue"])
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
                      createBaseVNode("div", _hoisted_22, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_23,
                                    createVNode(_component_font, {
                                      size: "4",
                                      color: "red"
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_24
                                      ]),
                                      _: 1
                                    }),
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_25, _hoisted_27)), [
                                      [
                                        _directive_tooltip,
                                        "Cuanto tiempo llevas entrenando",
                                        void 0,
                                        {
                                          primary: true,
                                          bubble: true
                                        }
                                      ]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: unref(datosDeportes).edad_deportiva,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(datosDeportes).edad_deportiva = $event),
                                  value: unref(datosDeportes).edad_deportiva,
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: [
                                    "< 1 A\xF1o",
                                    "1 - 2 A\xF1os",
                                    "3 - 5 A\xF1os",
                                    "6 - 10 A\xF1os",
                                    "10 + A\xF1os"
                                  ],
                                  required: ""
                                }, null, 8, ["modelValue", "value", "attrs"]),
                                selectedEdadDeportiva() ? (openBlock(), createElementBlock("p", _hoisted_28, toDisplayString(edadDeportivaMensaje.value), 1)) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_29, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_30,
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_31, _hoisted_33)), [
                                      [
                                        _directive_tooltip,
                                        "De 1 a 10 que tan bueno crees que eres en tu deporte",
                                        void 0,
                                        {
                                          primary: true,
                                          bubble: true
                                        }
                                      ]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: unref(datosDeportes).subjetivo,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(datosDeportes).subjetivo = $event),
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                                  required: ""
                                }, null, 8, ["modelValue", "attrs"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_34, [
                        _hoisted_35,
                        createVNode(_component_VField, { class: "columns is-multiline" }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.ciclismo,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(datosDeportes).otros.ciclismo = $event),
                                  label: "Ciclismo",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.natacion,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(datosDeportes).otros.natacion = $event),
                                  label: "Nataci\xF3n",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.triatlon,
                                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(datosDeportes).otros.triatlon = $event),
                                  label: "Triatlon",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.gimnasio,
                                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(datosDeportes).otros.gimnasio = $event),
                                  label: "Gimnasio",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.trail,
                                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(datosDeportes).otros.trail = $event),
                                  label: "Trail",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.otro,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(datosDeportes).otros.otro = $event),
                                  label: "Otro",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        unref(datosDeportes).otros.otro ? (openBlock(), createElementBlock("div", _hoisted_36, [
                          _hoisted_37,
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VInput, {
                                    modelValue: unref(datosDeportes).otro,
                                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(datosDeportes).otro = $event),
                                    type: "text",
                                    placeholder: "Otro deporte",
                                    autocomplete: "on"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("div", _hoisted_38, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_39,
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_40, _hoisted_42)), [
                                      [
                                        _directive_tooltip,
                                        "Reloj de entrenamiento para medir la frecuencia cardiaca",
                                        void 0,
                                        {
                                          primary: true,
                                          bubble: true
                                        }
                                      ]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: unref(datosDeportes).pulsometro,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(datosDeportes).pulsometro = $event),
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: ["si", "no"],
                                  required: ""
                                }, null, 8, ["modelValue", "attrs"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      unref(datosDeportes).pulsometro == "si" ? (openBlock(), createElementBlock("div", _hoisted_43, [
                        _hoisted_44,
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:user" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: unref(datosDeportes).marcaPulsometro,
                                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(datosDeportes).marcaPulsometro = $event),
                                  type: "text",
                                  placeholder: "Marca o Modelo",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true)
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Deportivo");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_Deportivo = _sfc_main$1;
      return openBlock(), createBlock(_component_Deportivo);
    };
  }
});
export { _sfc_main as default };
