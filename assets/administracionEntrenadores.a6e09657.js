import { _ as _sfc_main$a } from "./VModal.d925f0b3.js";
import { _ as _sfc_main$7, a as __unplugin_components_2, b as _sfc_main$9 } from "./VControl.bc2cde1a.js";
import { _ as _sfc_main$8 } from "./VInput.7ffb3812.js";
import { _ as _sfc_main$6 } from "./VAvatar.ad12e553.js";
import { _ as _sfc_main$5 } from "./VIconBox.16cea0aa.js";
import { h as LISTARTODOSLOSENTRENADORES, i as CAMBIARESTADOENTRENADOR, a as administracionStore } from "./administracion.01d49e38.js";
import { y as defineComponent, z as ref, A as onMounted, ay as resolveDirective, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, j as createBaseVNode, t as toDisplayString, Y as withDirectives, F as Fragment, m as createTextVNode, O as _sfc_main$b, f as createBlock, a1 as vModelText, l as createCommentVNode, at as storeToRefs, e as computed, D as unref, s as renderList, P as useHead } from "./index.aedac316.js";
import { _ as _sfc_main$c, a as _sfc_main$d } from "./VOption.b597c93e.js";
import { u as useNotyf } from "./useNotyf.cd06cfe3.js";
import { _ as _sfc_main$e } from "./VPlaceholderPage.efd177bc.js";
import { u as useViewWrapper } from "./viewWrapper.e58f1ab4.js";
import "./config.9bf2e6c5.js";
import "./main.03abd8f7.js";
import "./notyf.es.f84e4201.js";
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:user"
}, null, -1);
const _hoisted_2$3 = { class: "account-box is-form is-footerless" };
const _hoisted_3$3 = { action: "signup-form" };
const _hoisted_4$3 = { class: "form-body" };
const _hoisted_5$3 = { class: "fieldset" };
const _hoisted_6$3 = { class: "picture-selector" };
const _hoisted_7$2 = { class: "image-container" };
const _hoisted_8$2 = { class: "fieldset" };
const _hoisted_9$2 = { class: "columns is-multiline" };
const _hoisted_10$2 = { class: "column is-6" };
const _hoisted_11$2 = /* @__PURE__ */ createTextVNode("Documento de identificaci\xF3n ");
const _hoisted_12$2 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_13$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_14$2 = [
  _hoisted_13$2
];
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _hoisted_16$2 = { class: "column is-6" };
const _hoisted_17$2 = /* @__PURE__ */ createTextVNode(" Genero ");
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _hoisted_19$2 = { class: "column is-6" };
const _hoisted_20$2 = /* @__PURE__ */ createTextVNode(" Pais ");
const _hoisted_21$2 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _hoisted_22$1 = { class: "column is-6" };
const _hoisted_23$1 = /* @__PURE__ */ createTextVNode(" Ciudad ");
const _hoisted_24$1 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _hoisted_25 = { class: "column is-6" };
const _hoisted_26 = /* @__PURE__ */ createTextVNode("Usuario ");
const _hoisted_27 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_29 = [
  _hoisted_28
];
const _hoisted_30 = { class: "column is-6" };
const _hoisted_31 = /* @__PURE__ */ createTextVNode("Correo ");
const _hoisted_32 = { class: "column is-6" };
const _hoisted_33 = /* @__PURE__ */ createTextVNode("Telefono ");
const _hoisted_34 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_36 = [
  _hoisted_35
];
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _hoisted_38 = { class: "column is-6" };
const _hoisted_39 = /* @__PURE__ */ createTextVNode("Fecha de nacimiento ");
const _hoisted_40 = {
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
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const centeredActionsOpen = ref(false);
    const nombres = ref("");
    const apellidos = ref("");
    const docId = ref("");
    const genero = ref("");
    const pais = ref("");
    const ciudad = ref("");
    const usuario = ref("");
    const correo = ref("");
    const telefono = ref("");
    const fecha_nacimiento = ref("");
    onMounted(async () => {
      await LISTARTODOSLOSENTRENADORES();
      nombres.value = props.data.nombres;
      apellidos.value = props.data.apellidos;
      docId.value = props.data.identificacion;
      genero.value = props.data.genero;
      pais.value = props.data.pais;
      ciudad.value = props.data.ciudad;
      usuario.value = props.data.nombre_usuario;
      correo.value = props.data.email;
      telefono.value = props.data.telefono;
      fecha_nacimiento.value = props.data.fecha_nacimiento;
    });
    const mostrarInfo = () => {
      centeredActionsOpen.value = true;
    };
    return (_ctx, _cache) => {
      const _component_VIconBox = _sfc_main$5;
      const _component_VAvatar = _sfc_main$6;
      const _component_VLabel = _sfc_main$7;
      const _component_VInput = _sfc_main$8;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$9;
      const _component_VModal = _sfc_main$a;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VIconBox, {
          size: "medium",
          color: "primary",
          rounded: "",
          bordered: true,
          onClick: mostrarInfo
        }, {
          default: withCtx(() => [
            _hoisted_1$3
          ]),
          _: 1
        }),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          title: "Perfil Entrenador",
          actions: "center",
          size: "medium",
          noscroll: "",
          onClose: _cache[8] || (_cache[8] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_2$3, [
              createBaseVNode("form", _hoisted_3$3, [
                createBaseVNode("div", _hoisted_4$3, [
                  createBaseVNode("div", _hoisted_5$3, [
                    createBaseVNode("div", _hoisted_6$3, [
                      createBaseVNode("div", _hoisted_7$2, [
                        createVNode(_component_VAvatar, {
                          size: "large",
                          picture: props.data.foto_url
                        }, null, 8, ["picture"]),
                        createBaseVNode("h2", null, toDisplayString(props.data.nombres + " " + props.data.apellidos), 1)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_8$2, [
                    createBaseVNode("div", _hoisted_9$2, [
                      createBaseVNode("div", _hoisted_10$2, [
                        createVNode(_component_VField, { id: "identificacion" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_11$2,
                                withDirectives((openBlock(), createElementBlock("span", _hoisted_12$2, _hoisted_14$2)), [
                                  [
                                    _directive_tooltip,
                                    "Para posible facturaci\xF3n",
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
                            createVNode(_component_VControl, { icon: "feather:briefcase" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: docId.value,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => docId.value = $event),
                                  type: "text",
                                  readonly: "",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"]),
                                _hoisted_15$2
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_16$2, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_17$2
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: genero.value,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => genero.value = $event),
                                  type: "text",
                                  readonly: ""
                                }, null, 8, ["modelValue"]),
                                _hoisted_18$2
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_19$2, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_20$2
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: pais.value,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => pais.value = $event),
                                  type: "text",
                                  readonly: ""
                                }, null, 8, ["modelValue"]),
                                _hoisted_21$2
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_22$1, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_23$1
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: ciudad.value,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => ciudad.value = $event),
                                  type: "text",
                                  readonly: ""
                                }, null, 8, ["modelValue"]),
                                _hoisted_24$1
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_25, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_26,
                                withDirectives((openBlock(), createElementBlock("span", _hoisted_27, _hoisted_29)), [
                                  [
                                    _directive_tooltip,
                                    "Apodo (No es obligatorio)",
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
                            createVNode(_component_VControl, { icon: "feather:user" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: usuario.value,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => usuario.value = $event),
                                  type: "text",
                                  readonly: ""
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_30, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_31
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, { icon: "feather:user" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: correo.value,
                                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => correo.value = $event),
                                  readonly: "",
                                  type: "text",
                                  autocomplete: "correo"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_32, [
                        createVNode(_component_VField, { id: "telefono" }, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_33,
                                withDirectives((openBlock(), createElementBlock("span", _hoisted_34, _hoisted_36)), [
                                  [
                                    _directive_tooltip,
                                    "Completa este campo con el n\xFAmero de cotacto",
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
                            createVNode(_component_VControl, { icon: "feather:phone" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: telefono.value,
                                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => telefono.value = $event),
                                  type: "text",
                                  readonly: "",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"]),
                                _hoisted_37
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_38, [
                        createVNode(_component_VField, null, {
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
                                    "Completa este campo con tu fecha de nacimiento",
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
                            createVNode(_component_VControl, { icon: "feather:calendar" }, {
                              default: withCtx(() => [
                                createVNode(_component_VField, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_VInput, {
                                          modelValue: fecha_nacimiento.value,
                                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => fecha_nacimiento.value = $event),
                                          readonly: ""
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            _hoisted_43
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
});
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:paperclip"
}, null, -1);
const _hoisted_2$2 = { class: "picture-selector" };
const _hoisted_3$2 = { class: "image-container" };
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_6$2 = { class: "colum" };
const _hoisted_7$1 = { class: "columnas" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("h2", null, "Hoja de vida", -1);
const _hoisted_9$1 = /* @__PURE__ */ createTextVNode("Ver");
const _hoisted_10$1 = { class: "columnas" };
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("h2", null, "Estudios", -1);
const _hoisted_12$1 = /* @__PURE__ */ createTextVNode("Ver");
const _hoisted_13$1 = { class: "columnas" };
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("h2", null, "Cedula", -1);
const _hoisted_15$1 = /* @__PURE__ */ createTextVNode("Ver");
const _hoisted_16$1 = { class: "columnas" };
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("h2", null, "Otros", -1);
const _hoisted_18$1 = /* @__PURE__ */ createTextVNode("Ver");
const _hoisted_19$1 = { class: "account-box is-form is-footerless" };
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "right" })
  ])
], -1);
const _hoisted_21$1 = ["src"];
const _hoisted_22 = ["src"];
const _hoisted_23 = ["src"];
const _hoisted_24 = ["src"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const centeredActionsOpen = ref(false);
    ref(false);
    const nombres = ref("");
    const apellidos = ref("");
    const uploadModalOpenhojadevida = ref(false);
    const uploadModalOpenEstudios = ref(false);
    const uploadModalOpenCedula = ref(false);
    const uploadModalOpenOtros = ref(false);
    onMounted(async () => {
      await LISTARTODOSLOSENTRENADORES();
      nombres.value = props.data.nombres;
      apellidos.value = props.data.apellidos;
    });
    const mostrarInfo = () => {
      centeredActionsOpen.value = true;
    };
    return (_ctx, _cache) => {
      const _component_VIconBox = _sfc_main$5;
      const _component_VAvatar = _sfc_main$6;
      const _component_VButton = _sfc_main$b;
      const _component_VModal = _sfc_main$a;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_VIconBox, {
          size: "medium",
          color: "purple",
          rounded: "",
          bordered: true,
          onClick: mostrarInfo
        }, {
          default: withCtx(() => [
            _hoisted_1$2
          ]),
          _: 1
        }),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          title: "Visualizaci\xF3n de documentos",
          actions: "center",
          size: "medium",
          noscroll: "",
          onClose: _cache[8] || (_cache[8] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("div", _hoisted_3$2, [
                createVNode(_component_VAvatar, {
                  size: "large",
                  picture: props.data.foto_url
                }, null, 8, ["picture"])
              ]),
              _hoisted_4$2,
              createBaseVNode("h2", null, toDisplayString(props.data.nombres + " " + props.data.apellidos), 1),
              _hoisted_5$2
            ]),
            createBaseVNode("div", _hoisted_6$2, [
              createBaseVNode("div", _hoisted_7$1, [
                _hoisted_8$1,
                createVNode(_component_VButton, {
                  disabled: props.data.hojadevida == "" || props.data.hojadevida == null ? true : false,
                  onClick: _cache[0] || (_cache[0] = ($event) => uploadModalOpenhojadevida.value = true),
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$1
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              createBaseVNode("div", _hoisted_10$1, [
                _hoisted_11$1,
                createVNode(_component_VButton, {
                  disabled: props.data.estudios == "" || props.data.estudios == null ? true : false,
                  onClick: _cache[1] || (_cache[1] = ($event) => uploadModalOpenEstudios.value = true),
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    _hoisted_12$1
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              createBaseVNode("div", _hoisted_13$1, [
                _hoisted_14$1,
                createVNode(_component_VButton, {
                  disabled: props.data.cedula == "" || props.data.cedula == null ? true : false,
                  onClick: _cache[2] || (_cache[2] = ($event) => uploadModalOpenCedula.value = true),
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    _hoisted_15$1
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              createBaseVNode("div", _hoisted_16$1, [
                _hoisted_17$1,
                createVNode(_component_VButton, {
                  disabled: props.data.otros == "" || props.data.otros == null ? true : false,
                  onClick: _cache[3] || (_cache[3] = ($event) => uploadModalOpenOtros.value = true),
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    _hoisted_18$1
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ]),
            createBaseVNode("div", _hoisted_19$1, [
              _hoisted_20$1,
              createVNode(_component_VModal, {
                open: uploadModalOpenhojadevida.value,
                title: "Hoja de vida de " + props.data.nombres + " " + props.data.apellidos,
                size: "big",
                actions: "center",
                onClose: _cache[4] || (_cache[4] = ($event) => uploadModalOpenhojadevida.value = false)
              }, {
                content: withCtx(() => [
                  createBaseVNode("iframe", {
                    src: props.data.hojadevida,
                    title: "Terminos y Condiciones",
                    width: "100%",
                    height: "400"
                  }, null, 8, _hoisted_21$1)
                ]),
                _: 1
              }, 8, ["open", "title"]),
              createVNode(_component_VModal, {
                open: uploadModalOpenEstudios.value,
                title: "Estudios de " + props.data.nombres + " " + props.data.apellidos,
                size: "big",
                actions: "center",
                onClose: _cache[5] || (_cache[5] = ($event) => uploadModalOpenEstudios.value = false)
              }, {
                content: withCtx(() => [
                  createBaseVNode("iframe", {
                    src: props.data.estudios,
                    title: "Terminos y Condiciones",
                    width: "100%",
                    height: "400"
                  }, null, 8, _hoisted_22)
                ]),
                _: 1
              }, 8, ["open", "title"]),
              createVNode(_component_VModal, {
                open: uploadModalOpenCedula.value,
                title: "Cedula de " + props.data.nombres + " " + props.data.apellidos,
                size: "big",
                actions: "center",
                onClose: _cache[6] || (_cache[6] = ($event) => uploadModalOpenCedula.value = false)
              }, {
                content: withCtx(() => [
                  createBaseVNode("iframe", {
                    src: props.data.cedula,
                    title: "Cedula del entrenador",
                    width: "100%",
                    height: "400"
                  }, null, 8, _hoisted_23)
                ]),
                _: 1
              }, 8, ["open", "title"]),
              createVNode(_component_VModal, {
                open: uploadModalOpenOtros.value,
                title: "Otros estudios de " + props.data.nombres + " " + props.data.apellidos,
                size: "big",
                actions: "center",
                onClose: _cache[7] || (_cache[7] = ($event) => uploadModalOpenOtros.value = false)
              }, {
                content: withCtx(() => [
                  createBaseVNode("iframe", {
                    src: props.data.otros,
                    title: "Otros estudios",
                    width: "100%",
                    height: "400"
                  }, null, 8, _hoisted_24)
                ]),
                _: 1
              }, 8, ["open", "title"])
            ])
          ]),
          _: 1
        }, 8, ["open"])
      ]);
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:check"
}, null, -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_4$1 = { class: "picture-selector" };
const _hoisted_5$1 = { class: "image-container" };
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h2", null, "Seleccione Categoria!", -1);
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Deporte ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Gimnasio ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Vida Activa ");
const _hoisted_12 = { class: "modal-form" };
const _hoisted_13 = { class: "field" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("label", null, "Descripcion", -1);
const _hoisted_15 = { class: "control" };
const _hoisted_16 = { class: "field" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("label", null, "Calificacion", -1);
const _hoisted_18 = { class: "control" };
const _hoisted_19 = { key: 0 };
const _hoisted_20 = { key: 1 };
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" cerrar ");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const notif = useNotyf();
    const centeredActionsOpen = ref(false);
    const confirmOpen = ref(false);
    const opcionDeporte = ref("");
    const descripcion = ref("");
    const calificacion = ref("");
    onMounted(async () => {
      await LISTARTODOSLOSENTRENADORES();
      descripcion.value = props.data.descripcion;
      opcionDeporte.value = props.data.categoria;
      calificacion.value = props.data.estrellas;
    });
    const mostrarInfo1 = () => {
      confirmOpen.value = true;
    };
    const mostrarInfo = () => {
      centeredActionsOpen.value = true;
    };
    const cambiarEstadoEntrenador = (id, estado) => {
      notif.dismissAll();
      if (descripcion.value !== "") {
        CAMBIARESTADOENTRENADOR(
          id,
          estado === "Aprobado" ? "Pendiente" : "Aprobado",
          descripcion.value,
          opcionDeporte.value,
          calificacion.value
        );
        centeredActionsOpen.value = false;
      } else {
        notif.error("Debe agregar alguna descripcion para el entrenador");
      }
    };
    return (_ctx, _cache) => {
      const _component_VIconBox = _sfc_main$5;
      const _component_VAvatar = _sfc_main$6;
      const _component_VOption = _sfc_main$c;
      const _component_VSelect = _sfc_main$d;
      const _component_VControl = __unplugin_components_2;
      const _component_VButton = _sfc_main$b;
      const _component_VModal = _sfc_main$a;
      return openBlock(), createElementBlock(Fragment, null, [
        props.data.estado === "Aprobado" ? (openBlock(), createBlock(_component_VIconBox, {
          key: 0,
          size: "medium",
          color: "green",
          rounded: "",
          bordered: true,
          onClick: mostrarInfo
        }, {
          default: withCtx(() => [
            _hoisted_1$1
          ]),
          _: 1
        })) : (openBlock(), createBlock(_component_VIconBox, {
          key: 1,
          size: "medium",
          color: "danger",
          rounded: "",
          bordered: true,
          onClick: mostrarInfo
        }, {
          default: withCtx(() => [
            _hoisted_2$1
          ]),
          _: 1
        })),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          title: "Aprobar perfil deportista",
          actions: "center",
          size: "medium",
          noscroll: "",
          onClose: _cache[5] || (_cache[5] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("h1", null, "Userid: " + toDisplayString(props.data.UserID), 1),
            _hoisted_3$1,
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5$1, [
                createVNode(_component_VAvatar, {
                  size: "large",
                  picture: props.data.foto_url
                }, null, 8, ["picture"])
              ]),
              _hoisted_6$1,
              createBaseVNode("h2", null, toDisplayString(props.data.nombres + " " + props.data.apellidos), 1),
              _hoisted_7
            ]),
            _hoisted_8,
            createVNode(_component_VControl, {
              class: "has-icons-left",
              icon: "feather:globe"
            }, {
              default: withCtx(() => [
                createVNode(_component_VSelect, {
                  modelValue: opcionDeporte.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => opcionDeporte.value = $event)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_VOption, null, {
                      default: withCtx(() => [
                        _hoisted_9
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VOption, null, {
                      default: withCtx(() => [
                        _hoisted_10
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VOption, null, {
                      default: withCtx(() => [
                        _hoisted_11
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createBaseVNode("form", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                _hoisted_14,
                createBaseVNode("div", _hoisted_15, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => descripcion.value = $event),
                    type: "text",
                    class: "input"
                  }, null, 512), [
                    [vModelText, descripcion.value]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_16, [
                _hoisted_17,
                createBaseVNode("div", _hoisted_18, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => calificacion.value = $event),
                    type: "number",
                    class: "input",
                    max: "5",
                    min: "0",
                    step: "1"
                  }, null, 512), [
                    [vModelText, calificacion.value]
                  ])
                ])
              ])
            ])
          ]),
          action: withCtx(() => [
            createBaseVNode("div", null, [
              createVNode(_component_VButton, {
                color: props.data.estado === "Aprobado" ? "danger" : "primary",
                raised: "",
                onClick: mostrarInfo1
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.data.estado === "Aprobado" ? "Bloquear" : "Aprobar"), 1)
                ]),
                _: 1
              }, 8, ["color"])
            ]),
            createVNode(_component_VModal, {
              open: confirmOpen.value,
              actions: "center",
              size: "small",
              noscroll: ""
            }, {
              content: withCtx(() => [
                createBaseVNode("div", null, [
                  props.data.estado === "Aprobado" ? (openBlock(), createElementBlock("h1", _hoisted_19, " \xBFEst\xE1 seguro que quiere revocar los permisos al entrenador? ")) : createCommentVNode("", true),
                  props.data.estado !== "Aprobado" ? (openBlock(), createElementBlock("h1", _hoisted_20, " \xBFEst\xE1 seguro que quiere conceder permisos al entrenador? ")) : createCommentVNode("", true)
                ])
              ]),
              cancel: withCtx(() => [
                createVNode(_component_VButton, {
                  outlined: "",
                  raised: "",
                  color: "warning",
                  onClick: _cache[3] || (_cache[3] = ($event) => confirmOpen.value = false)
                }, {
                  default: withCtx(() => [
                    _hoisted_21
                  ]),
                  _: 1
                })
              ]),
              action: withCtx(() => [
                createVNode(_component_VButton, {
                  outlined: "",
                  raised: "",
                  color: props.data.estado === "Aprobado" ? "danger" : "primary",
                  onClick: _cache[4] || (_cache[4] = ($event) => (cambiarEstadoEntrenador(props.data.id, props.data.estado), confirmOpen.value = false))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.data.estado === "Aprobado" ? "Bloquear" : "Aprobar"), 1)
                  ]),
                  _: 1
                }, 8, ["color"])
              ]),
              _: 1
            }, 8, ["open"])
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_3 = ["data"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Nombres"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Fecha de registro"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Categor\xEDa"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Descripci\xF3n"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Estrellas"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Aprobar/Bloquear"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Ver adjuntos"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Info")
  ])
], -1);
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { entrenadores } = storeToRefs(administracionStore());
    const filters = ref("");
    onMounted(async () => {
      await LISTARTODOSLOSENTRENADORES();
    });
    const fechaRegistro = (fechas) => {
      const fecha = new Date(fechas);
      const dia = fecha.getDate();
      const mes = fecha.getMonth();
      const anio = fecha.getFullYear();
      const fechaString = `${dia}/${mes}/${anio}`;
      return fechaString;
    };
    const filteredData = computed(() => {
      if (!filters.value) {
        return entrenadores.value;
      } else {
        const filterRe = new RegExp(filters.value, "i");
        return entrenadores.value.filter((item) => {
          return item.nombres.match(filterRe) || item.descripcion.match(filterRe);
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$9;
      const _component_VPlaceholderPage = _sfc_main$e;
      const _component_AprobacionEntrenadorModal = _sfc_main$2;
      const _component_verArchivosAdjuntos = _sfc_main$3;
      const _component_InfoModal = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VField, null, {
            default: withCtx(() => [
              createVNode(_component_VControl, { icon: "feather:search" }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                    class: "input custom-text-filter",
                    placeholder: "Buscar..."
                  }, null, 512), [
                    [vModelText, filters.value]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          !unref(filteredData).length ? (openBlock(), createBlock(_component_VPlaceholderPage, {
            key: 0,
            title: "We couldn't find any matching results.",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",
            larger: ""
          })) : createCommentVNode("", true)
        ]),
        unref(filteredData).length ? (openBlock(), createElementBlock("table", {
          key: 0,
          data: unref(filteredData),
          compact: "",
          class: "table is-hoverable is-fullwidth"
        }, [
          _hoisted_4,
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (entrenador, index) => {
              return openBlock(), createElementBlock("tr", { key: index }, [
                createBaseVNode("td", null, toDisplayString(entrenador.nombres) + " " + toDisplayString(entrenador.apellidos), 1),
                createBaseVNode("td", null, toDisplayString(fechaRegistro(entrenador.fecha_registro)), 1),
                entrenador.categoria ? (openBlock(), createElementBlock("td", _hoisted_5, toDisplayString(entrenador.categoria), 1)) : (openBlock(), createElementBlock("td", _hoisted_6, "Sin categoria")),
                createBaseVNode("td", null, toDisplayString(entrenador.descripcion), 1),
                createBaseVNode("td", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(entrenador.estrellas, (estrellas) => {
                    return openBlock(), createElementBlock("i", {
                      key: estrellas,
                      class: "fas fa-star",
                      "aria-hidden": "true"
                    });
                  }), 128))
                ]),
                createBaseVNode("td", null, [
                  createVNode(_component_AprobacionEntrenadorModal, { data: entrenador }, null, 8, ["data"])
                ]),
                createBaseVNode("td", null, [
                  createVNode(_component_verArchivosAdjuntos, { data: entrenador }, null, 8, ["data"])
                ]),
                createBaseVNode("td", null, [
                  createVNode(_component_InfoModal, { data: entrenador }, null, 8, ["data"])
                ])
              ]);
            }), 128))
          ])
        ], 8, _hoisted_3)) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Administrador de entrenadores");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_aprobacionEntrenadores = _sfc_main$1;
      return openBlock(), createBlock(_component_aprobacionEntrenadores);
    };
  }
});
export { _sfc_main as default };
