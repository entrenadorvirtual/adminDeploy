import { _ as _sfc_main$5 } from "./VModal.6ca1fc6c.js";
import { _ as _sfc_main$4 } from "./VInput.5920a8ca.js";
import { a as __unplugin_components_2, b as _sfc_main$1, _ as _sfc_main$3 } from "./VControl.4d17fa85.js";
import { y as defineComponent, z as ref, A as onMounted, ay as resolveDirective, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, Y as withDirectives, a1 as vModelText, F as Fragment, s as renderList, t as toDisplayString, D as unref, m as createTextVNode, O as _sfc_main$2 } from "./index.a7fc5dec.js";
import { e as onValue, r as ref$1, d as database, u as update } from "./config.0fd79a34.js";
import "./administracion.b83e2e82.js";
import { u as useViewWrapper } from "./viewWrapper.0c20b402.js";
import "./main.cf1f8e20.js";
import "./useNotyf.ce7ee7f1.js";
import "./notyf.es.f84e4201.js";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "main-container" };
const _hoisted_2 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_3 = { class: "alert" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h3", null, "Variables de entrenadores", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_6 = {
  compact: "",
  class: "table is-hoverable is-fullwidth"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", null, "N\xB0"),
    /* @__PURE__ */ createBaseVNode("th", null, "Estado"),
    /* @__PURE__ */ createBaseVNode("th", null, "Variable"),
    /* @__PURE__ */ createBaseVNode("th", null, "Tipo"),
    /* @__PURE__ */ createBaseVNode("th", null, "Verificar variables"),
    /* @__PURE__ */ createBaseVNode("th", null, "Eliminar")
  ])
], -1);
const _hoisted_8 = { class: "job-number" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("td", null, "Entrenador", -1);
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Verificar");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Eliminar");
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h3", null, "Variables de Deportistas", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_16 = {
  compact: "",
  class: "table is-hoverable is-fullwidth"
};
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", null, "N\xB0"),
    /* @__PURE__ */ createBaseVNode("th", null, "Estado"),
    /* @__PURE__ */ createBaseVNode("th", null, "Variable"),
    /* @__PURE__ */ createBaseVNode("th", null, "Tipo"),
    /* @__PURE__ */ createBaseVNode("th", null, "Verificar variables"),
    /* @__PURE__ */ createBaseVNode("th", null, "Eliminar")
  ])
], -1);
const _hoisted_18 = { class: "job-number" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("td", null, "Deportista", -1);
const _hoisted_20 = /* @__PURE__ */ createTextVNode("Verificar");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("Eliminar");
const _hoisted_22 = { class: "has-text-centered" };
const _hoisted_23 = { action: "signup-form" };
const _hoisted_24 = { class: "form-body" };
const _hoisted_25 = { class: "columns is-multiline" };
const _hoisted_26 = { class: "column is-6" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode("Usuario ");
const _hoisted_28 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_30 = [
  _hoisted_29
];
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _hoisted_32 = { class: "column is-6" };
const _hoisted_33 = /* @__PURE__ */ createTextVNode("Variable ");
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
const _hoisted_39 = /* @__PURE__ */ createTextVNode("Usuarios con clave ");
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
const _hoisted_44 = { class: "column is-6" };
const _hoisted_45 = /* @__PURE__ */ createTextVNode("Usuarios sin la clave ");
const _hoisted_46 = {
  color: "solid",
  label: "Bubble"
};
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_48 = [
  _hoisted_47
];
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("p", { class: "help is-danger" }, null, -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("wbr", null, null, -1);
const _hoisted_51 = { class: "account-box is-form is-footerless" };
const _hoisted_52 = { action: "signup-form" };
const _hoisted_53 = { class: "form-body" };
const _hoisted_54 = { class: "columns is-multiline" };
const _hoisted_55 = { class: "column is-6" };
const _hoisted_56 = /* @__PURE__ */ createTextVNode(" Agregar ");
const _hoisted_57 = { class: "column is-6" };
const _hoisted_58 = /* @__PURE__ */ createTextVNode(" Cancelar ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Administrar variables");
    const arrayVariablesEntrenadorReactive = ref([]);
    const arrayVariablesDeportistaReactive = ref([]);
    const filters = ref("");
    const uploadModalOpen = ref(false);
    const variableSelected = ref("");
    const usuarioSelected = ref("");
    const usuarioConclave = ref(0);
    const usuarioSinclave = ref(0);
    let arrayVariablesEntrenadorSize = 0;
    const LISTARVARIABLESENTRENADOR = async () => {
      try {
        onValue(ref$1(database, `Variables/Entrenador`), (snapshot) => {
          const val = snapshot.val();
          arrayVariablesEntrenadorReactive.value = val;
        });
      } catch (error) {
        console.log(error);
      }
    };
    const LISTARVARIABLESDEPORTISTA = async () => {
      onValue(ref$1(database, `Variables/Deportista`), (snapshot) => {
        const val = snapshot.val();
        arrayVariablesDeportistaReactive.value = val;
      });
    };
    onMounted(async () => {
      try {
        await LISTARVARIABLESDEPORTISTA();
        await LISTARVARIABLESENTRENADOR();
      } catch (error) {
        console.log(error);
      }
    });
    const agregarVariable = (usuarioSelected2, claveSelected) => {
      const array = [];
      const usersRef = ref$1(database, "users/");
      onValue(usersRef, (snapshot) => {
        const val = snapshot.val();
        Object.keys(val).forEach((element) => {
          if (val[element].rol === usuarioSelected2) {
            const entre = val[element];
            entre.id = element;
            if (!entre.hasOwnProperty(claveSelected)) {
              entre[claveSelected] = "";
              array.push(entre);
            }
          }
        });
        if (array.length > 0) {
          const updates = {};
          array.forEach((usuario) => {
            updates[`users/${usuario.id}`] = usuario;
          });
          update(ref$1(database), updates).then(() => {
            console.log("Usuarios actualizados en Firebase");
          }).catch((error) => {
            console.error("Error al actualizar usuarios en Firebase:", error);
          });
        }
      });
    };
    const closeModal = () => {
      uploadModalOpen.value = false;
    };
    const validarClaves = (clave, usuario) => {
      let entrenadoresConClave = 0;
      let entrenadoresSinClave = 0;
      let deportistasConClave = 0;
      let deportistasSinClave = 0;
      variableSelected.value = clave;
      usuarioSelected.value = usuario;
      onValue(ref$1(database, "users/"), (snapshot) => {
        const arrayEntrenadores = [];
        const arrayDeportistas = [];
        const val = snapshot.val();
        Object.keys(val).forEach((element) => {
          if (val[element].rol == "Entrenador") {
            const entre = val[element];
            entre.id = element;
            arrayEntrenadores.push(entre);
          } else if (val[element].rol == "Deportista") {
            const deportista = val[element];
            deportista.id = element;
            arrayDeportistas.push(deportista);
          }
        });
        if (usuario === "Entrenador") {
          entrenadoresConClave = arrayEntrenadores.reduce((count, entrenador) => {
            return count + (entrenador.hasOwnProperty(clave) ? 1 : 0);
          }, 0);
          entrenadoresSinClave = arrayEntrenadores.length - entrenadoresConClave;
          usuarioConclave.value = entrenadoresConClave;
          usuarioSinclave.value = entrenadoresSinClave;
        } else if (usuario === "Deportista") {
          deportistasConClave = arrayDeportistas.reduce((count, deportista) => {
            return count + (deportista.hasOwnProperty(clave) ? 1 : 0);
          }, 0);
          deportistasSinClave = arrayDeportistas.length - deportistasConClave;
          usuarioConclave.value = deportistasConClave;
          usuarioSinclave.value = deportistasSinClave;
        }
      });
      uploadModalOpen.value = true;
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_VLabel = _sfc_main$3;
      const _component_VInput = _sfc_main$4;
      const _component_VModal = _sfc_main$5;
      const _directive_tooltip = resolveDirective("tooltip");
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
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          _hoisted_4,
          _hoisted_5,
          createBaseVNode("table", _hoisted_6, [
            _hoisted_7,
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(arrayVariablesEntrenadorReactive.value, (valor, clave, index) => {
                return openBlock(), createElementBlock("tr", null, [
                  createBaseVNode("td", null, toDisplayString(index + 1), 1),
                  createBaseVNode("td", null, [
                    createVNode(_component_VField, { class: "is-flex" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, {
                          raw: "",
                          subcontro: ""
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_8, toDisplayString(valor), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createBaseVNode("td", null, toDisplayString(clave), 1),
                  _hoisted_9,
                  createBaseVNode("td", null, [
                    createVNode(_component_VButton, {
                      color: "success",
                      icon: "fas fa-check",
                      elevated: "",
                      bold: true,
                      onClick: ($event) => validarClaves(clave, "Entrenador")
                    }, {
                      default: withCtx(() => [
                        _hoisted_10
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  createBaseVNode("td", null, [
                    createVNode(_component_VButton, {
                      color: "danger",
                      icon: "fas fa-trash-alt",
                      elevated: "",
                      bold: true
                    }, {
                      default: withCtx(() => [
                        _hoisted_11
                      ]),
                      _: 1
                    })
                  ])
                ]);
              }), 256))
            ])
          ]),
          _hoisted_12,
          _hoisted_13,
          _hoisted_14,
          _hoisted_15,
          createBaseVNode("table", _hoisted_16, [
            _hoisted_17,
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(arrayVariablesDeportistaReactive.value, (valor, clave, index) => {
                return openBlock(), createElementBlock("tr", null, [
                  createBaseVNode("td", null, toDisplayString(unref(arrayVariablesEntrenadorSize) + index + 1), 1),
                  createBaseVNode("td", null, [
                    createVNode(_component_VField, { class: "is-flex" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, {
                          raw: "",
                          subcontro: ""
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_18, toDisplayString(valor), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createBaseVNode("td", null, toDisplayString(clave), 1),
                  _hoisted_19,
                  createBaseVNode("td", null, [
                    createVNode(_component_VButton, {
                      color: "success",
                      icon: "fas fa-check",
                      elevated: "",
                      bold: true,
                      onClick: ($event) => validarClaves(clave, "Deportista")
                    }, {
                      default: withCtx(() => [
                        _hoisted_20
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  createBaseVNode("td", null, [
                    createVNode(_component_VButton, {
                      color: "danger",
                      icon: "fas fa-trash-alt",
                      elevated: "",
                      bold: true
                    }, {
                      default: withCtx(() => [
                        _hoisted_21
                      ]),
                      _: 1
                    })
                  ])
                ]);
              }), 256))
            ])
          ])
        ]),
        createVNode(_component_VModal, {
          open: uploadModalOpen.value,
          title: "Variables faltantes",
          actions: "center",
          size: "large",
          noscroll: "",
          onClose: _cache[7] || (_cache[7] = ($event) => uploadModalOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("form", _hoisted_23, [
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode("div", _hoisted_25, [
                    createBaseVNode("div", _hoisted_26, [
                      createVNode(_component_VField, { id: "identificacion" }, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_27,
                              withDirectives((openBlock(), createElementBlock("span", _hoisted_28, _hoisted_30)), [
                                [
                                  _directive_tooltip,
                                  "Categor\xEDa a la que pertenece el manual",
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
                          createVNode(_component_VControl, {
                            class: "has-icons-left",
                            icon: "feather:activity"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                type: "text",
                                modelValue: usuarioSelected.value,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => usuarioSelected.value = $event),
                                autocomplete: "off",
                                class: "is-primary-focus",
                                readonly: ""
                              }, null, 8, ["modelValue"]),
                              _hoisted_31
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_32, [
                      createVNode(_component_VField, { id: "identificacion" }, {
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
                                type: "text",
                                modelValue: variableSelected.value,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => variableSelected.value = $event),
                                autocomplete: "off",
                                class: "is-primary-focus",
                                readonly: ""
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
                      createVNode(_component_VField, { id: "identificacion" }, {
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
                                type: "number",
                                modelValue: usuarioConclave.value,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => usuarioConclave.value = $event),
                                autocomplete: "off",
                                class: "is-primary-focus",
                                readonly: ""
                              }, null, 8, ["modelValue"]),
                              _hoisted_43
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_44, [
                      createVNode(_component_VField, { id: "identificacion" }, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_45,
                              withDirectives((openBlock(), createElementBlock("span", _hoisted_46, _hoisted_48)), [
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
                                type: "number",
                                modelValue: usuarioSinclave.value,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => usuarioSinclave.value = $event),
                                autocomplete: "off",
                                class: "is-primary-focus",
                                readonly: ""
                              }, null, 8, ["modelValue"]),
                              _hoisted_49
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
          ]),
          cancel: withCtx(() => [
            _hoisted_50
          ]),
          action: withCtx(() => [
            createBaseVNode("div", _hoisted_51, [
              createBaseVNode("form", _hoisted_52, [
                createBaseVNode("div", _hoisted_53, [
                  createBaseVNode("div", _hoisted_54, [
                    createBaseVNode("div", _hoisted_55, [
                      createVNode(_component_VField, {
                        grouped: "",
                        class: "estilo-botones"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                disabled: usuarioSinclave.value === 0 ? true : false,
                                size: "big",
                                color: "success",
                                onClick: _cache[5] || (_cache[5] = ($event) => agregarVariable(usuarioSelected.value, variableSelected.value))
                              }, {
                                default: withCtx(() => [
                                  _hoisted_56
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_57, [
                      createVNode(_component_VField, {
                        grouped: "",
                        class: "estilo-botones"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                size: "big",
                                color: "primary",
                                onClick: _cache[6] || (_cache[6] = ($event) => closeModal())
                              }, {
                                default: withCtx(() => [
                                  _hoisted_58
                                ]),
                                _: 1
                              })
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
          ]),
          _: 1
        }, 8, ["open"])
      ]);
    };
  }
});
export { _sfc_main as default };
