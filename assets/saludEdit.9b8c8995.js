import { _ as _sfc_main$6 } from "./VIconButton.e1b652a9.js";
import { _ as _sfc_main$5 } from "./VInput.bb7a011d.js";
import { _ as _sfc_main$4 } from "./VField.40eec146.js";
import { _ as __unplugin_components_2 } from "./VControl.c459fb91.js";
import { _ as _sfc_main$3 } from "./VLabel.c9d776c3.js";
import { y as defineComponent, a as useUserSession, z as ref, aq as useWindowScroll, e as computed, r as reactive, A as onMounted, p as resolveComponent, ar as resolveDirective, o as openBlock, i as createElementBlock, j as createBaseVNode, k as normalizeClass, D as unref, q as createVNode, w as withCtx, M as withKeys, v as withModifiers, a1 as withDirectives, x as mergeProps, as as toHandlers, F as Fragment, s as renderList, t as toDisplayString, m as createTextVNode, Y as _sfc_main$2, a5 as useHead, f as createBlock } from "./index.3437b938.js";
import { u as useNotyf } from "./useNotyf.c1050c77.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { b as getDeportes, c as updateDeportes } from "./deportista.87466242.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
import "./config.165bca36.js";
import "./general.34b73030.js";
import "./main.06195782.js";
var Salud_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-6" };
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
const _hoisted_12 = { class: "form-body" };
const _hoisted_13 = { class: "fieldset" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n Deportes:"),
  /* @__PURE__ */ createBaseVNode("p", null, "Otras personas quieren conocerte m\xE1s")
], -1);
const _hoisted_15 = { class: "columns is-multiline" };
const _hoisted_16 = { class: "column is-4" };
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" Esfuerzo fisico en el trabajo ");
const _hoisted_18 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_20 = [
  _hoisted_19
];
const _hoisted_21 = { class: "column is-4" };
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" Estado Nutrici\xF3n ");
const _hoisted_23 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_25 = [
  _hoisted_24
];
const _hoisted_26 = { class: "column is-4" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode(" Horas de Sue\xF1o ");
const _hoisted_28 = {
  onclick: "",
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
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_32 = { class: "fieldset" };
const _hoisted_33 = { class: "fieldset-heading" };
const _hoisted_34 = { class: "columns is-multiline is-desktop" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "column" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Enfermedades")
], -1);
const _hoisted_36 = { class: "column is-6" };
const _hoisted_37 = /* @__PURE__ */ createTextVNode(" A\xF1adir Enfermedad ");
const _hoisted_38 = { class: "columns is-multiline is-desktop" };
const _hoisted_39 = { class: "column is-3" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("p", null, "Zona", -1);
const _hoisted_41 = { class: "column is-3" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("p", null, "Tratamiento", -1);
const _hoisted_43 = { class: "column is-3" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("p", null, "Fecha Inicio", -1);
const _hoisted_45 = { class: "column is-3" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("p", null, "Duracion", -1);
const _hoisted_47 = { class: "column is-5" };
const _hoisted_48 = /* @__PURE__ */ createTextVNode("\xBFActualmente la tiene ?");
const _hoisted_49 = { class: "columns is-multiline" };
const _hoisted_50 = { class: "mx-2" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Zona")
], -1);
const _hoisted_52 = { for: "zoa" };
const _hoisted_53 = { class: "mx-2" };
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Tratamiento")
], -1);
const _hoisted_55 = { for: "zoa" };
const _hoisted_56 = { class: "mx-2" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha Inicio")
], -1);
const _hoisted_58 = { for: "zoa" };
const _hoisted_59 = { class: "mx-2" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Duracion")
], -1);
const _hoisted_61 = { for: "zoa" };
const _hoisted_62 = { class: "mx-2" };
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Actualmente la tiene")
], -1);
const _hoisted_64 = { for: "zoa" };
const _hoisted_65 = { class: "colmuns" };
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_67 = { class: "column is-6" };
const _hoisted_68 = { class: "account-box is-navigation" };
const _hoisted_69 = /* @__PURE__ */ createTextVNode(" A\xF1adir Lesion");
const _hoisted_70 = { class: "form-body" };
const _hoisted_71 = { class: "fieldset" };
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Lesiones:")
], -1);
const _hoisted_73 = { class: "columns is-multiline" };
const _hoisted_74 = { class: "column is-3" };
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("p", null, "Zona", -1);
const _hoisted_76 = { class: "column is-3" };
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("p", null, "Tratamiento", -1);
const _hoisted_78 = { class: "column is-3" };
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("p", null, "Fecha Inicio", -1);
const _hoisted_80 = { class: "column is-3" };
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("p", null, "Duracion", -1);
const _hoisted_82 = { class: "column is-5" };
const _hoisted_83 = /* @__PURE__ */ createTextVNode("\xBFActualmente la tiene ?");
const _hoisted_84 = { class: "columns is-multiline" };
const _hoisted_85 = { class: "mx-2" };
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Zona")
], -1);
const _hoisted_87 = { for: "zoa" };
const _hoisted_88 = { class: "mx-2" };
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Tratamiento")
], -1);
const _hoisted_90 = { for: "zoa" };
const _hoisted_91 = { class: "mx-2" };
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha Inicio")
], -1);
const _hoisted_93 = { for: "zoa" };
const _hoisted_94 = { class: "mx-2" };
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Duracion")
], -1);
const _hoisted_96 = { for: "zoa" };
const _hoisted_97 = { class: "mx-2" };
const _hoisted_98 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Actualmente la tiene")
], -1);
const _hoisted_99 = { for: "zoa" };
const _hoisted_100 = { class: "colmuns" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const isLoading = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const inputZona = ref("");
    const inputTratamieto = ref("");
    const inputFecha_inicio = ref("");
    const inputDuracion = ref("");
    const inputLesionPresente = ref("");
    const enfermedadZona = ref("");
    const enfermedadTratamieto = ref("");
    const enfermedadFecha_inicio = ref("");
    const enfermedadDuracion = ref("");
    const enfermedadPresente = ref("");
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const datosDeportes = reactive({
      edad_deportiva: "",
      lesiones: [],
      enfermedades: [],
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
    const addLesion = () => {
      datosDeportes.lesiones.push({
        zona: inputZona.value,
        tratamiento: inputTratamieto.value,
        fecha_inicio: inputFecha_inicio.value,
        duracion: inputDuracion.value,
        actual: inputLesionPresente.value
      });
      inputZona.value = "";
      inputTratamieto.value = "";
      inputFecha_inicio.value = "";
      inputDuracion.value = "";
      inputLesionPresente.value = "";
    };
    const addEnfermedad = () => {
      datosDeportes.enfermedades.push({
        zona: enfermedadZona.value,
        tratamiento: enfermedadTratamieto.value,
        fecha_inicio: enfermedadFecha_inicio.value,
        duracion: enfermedadDuracion.value,
        actual: enfermedadPresente.value
      });
      enfermedadZona.value = "";
      enfermedadTratamieto.value = "";
      enfermedadFecha_inicio.value = "";
      enfermedadDuracion.value = "";
      enfermedadLesionPresente.value = "";
    };
    const eliminarLesion = (lesion) => {
      datosDeportes.lesiones.splice(lesion, 1);
    };
    const eliminarEnfermedad = (enfermedad) => {
      datosDeportes.enfermedades.splice(enfermedad, 1);
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
      datosDeportes.enfermedades = (datos == null ? void 0 : datos.enfermedades) || [];
      datosDeportes.esfuerzo_trabajo = (datos == null ? void 0 : datos.esfuerzo_trabajo) || "";
      datosDeportes.nutricion = (datos == null ? void 0 : datos.nutricion) || "";
      datosDeportes.otros = (datos == null ? void 0 : datos.otros) || "";
      datosDeportes.otro = (datos == null ? void 0 : datos.otro) || "";
      datosDeportes.pulsometro = (datos == null ? void 0 : datos.pulsometro) || "";
      datosDeportes.subjetivo = (datos == null ? void 0 : datos.subjetivo) || "";
      datosDeportes.sue\u00F1o = (datos == null ? void 0 : datos.sue\u00F1o) || "";
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VLabel = _sfc_main$3;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$4;
      const _component_VInput = _sfc_main$5;
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_VIconButton = _sfc_main$6;
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
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_17,
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_18, _hoisted_20)), [
                                      [
                                        _directive_tooltip,
                                        "De 1 a 10 que tanto te esfuerzas durante el dia",
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
                                  modelValue: unref(datosDeportes).esfuerzo_trabajo,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(datosDeportes).esfuerzo_trabajo = $event),
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
                      createBaseVNode("div", _hoisted_21, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_22,
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_23, _hoisted_25)), [
                                      [
                                        _directive_tooltip,
                                        "De 1 a 10 que tan bien crees que te alimentas",
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
                                  modelValue: unref(datosDeportes).nutricion,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(datosDeportes).nutricion = $event),
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
                      createBaseVNode("div", _hoisted_26, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
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
                                        "Cuantas horas duermes al dia",
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
                                  modelValue: unref(datosDeportes).sue\u00F1o,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(datosDeportes).sue\u00F1o = $event),
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
                      ])
                    ])
                  ]),
                  _hoisted_31,
                  createBaseVNode("div", _hoisted_32, [
                    createBaseVNode("div", _hoisted_33, [
                      createBaseVNode("div", _hoisted_34, [
                        _hoisted_35,
                        createBaseVNode("div", _hoisted_36, [
                          createVNode(_component_VButton, {
                            color: "primary",
                            outlined: "",
                            onClick: addEnfermedad
                          }, {
                            default: withCtx(() => [
                              _hoisted_37
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_38, [
                        createBaseVNode("div", _hoisted_39, [
                          _hoisted_40,
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VInput, {
                                    modelValue: enfermedadZona.value,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => enfermedadZona.value = $event),
                                    type: "text",
                                    placeholder: "Zona",
                                    autocomplete: "off"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_41, [
                          _hoisted_42,
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VInput, {
                                    modelValue: enfermedadTratamieto.value,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => enfermedadTratamieto.value = $event),
                                    type: "text",
                                    placeholder: "Tratamiento",
                                    autocomplete: "off"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_43, [
                          _hoisted_44,
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:calendar" }, {
                                default: withCtx(() => [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VDatePicker, {
                                        modelValue: enfermedadFecha_inicio.value,
                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => enfermedadFecha_inicio.value = $event),
                                        color: "green",
                                        "trim-weeks": ""
                                      }, {
                                        default: withCtx(({ inputValue, inputEvents }) => [
                                          createVNode(_component_VField, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_VControl, { icon: "feather:calendar" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_VInput, mergeProps({ value: inputValue }, toHandlers(inputEvents)), null, 16, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue"])
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
                        createBaseVNode("div", _hoisted_45, [
                          _hoisted_46,
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VInput, {
                                    modelValue: enfermedadDuracion.value,
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => enfermedadDuracion.value = $event),
                                    type: "text",
                                    placeholder: "Duracion de enfermedad",
                                    autocomplete: "off"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_47, [
                          createVNode(_component_VField, null, {
                            default: withCtx(({ id }) => [
                              createVNode(_component_VControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VLabel, {
                                    raw: "",
                                    class: "auth-label"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_48
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Multiselect, {
                                    modelValue: enfermedadPresente.value,
                                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => enfermedadPresente.value = $event),
                                    attrs: { id },
                                    placeholder: "Seleccione uno",
                                    options: ["SI", "NO"]
                                  }, null, 8, ["modelValue", "attrs"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datosDeportes).enfermedades, (enfermedad, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: enfermedad,
                      class: "account-box"
                    }, [
                      createBaseVNode("div", _hoisted_49, [
                        createBaseVNode("div", _hoisted_50, [
                          _hoisted_51,
                          createBaseVNode("label", _hoisted_52, toDisplayString(enfermedad.zona), 1)
                        ]),
                        createBaseVNode("div", _hoisted_53, [
                          _hoisted_54,
                          createBaseVNode("label", _hoisted_55, toDisplayString(enfermedad.tratamiento), 1)
                        ]),
                        createBaseVNode("div", _hoisted_56, [
                          _hoisted_57,
                          createBaseVNode("label", _hoisted_58, toDisplayString(enfermedad.fecha_inicio), 1)
                        ]),
                        createBaseVNode("div", _hoisted_59, [
                          _hoisted_60,
                          createBaseVNode("label", _hoisted_61, toDisplayString(enfermedad.duracion), 1)
                        ]),
                        createBaseVNode("div", _hoisted_62, [
                          _hoisted_63,
                          createBaseVNode("label", _hoisted_64, toDisplayString(enfermedad.actual), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_65, [
                        createVNode(_component_VIconButton, {
                          color: "warning",
                          outlined: "",
                          circle: "",
                          icon: "feather:trash-2",
                          onClick: ($event) => eliminarEnfermedad(index)
                        }, null, 8, ["onClick"])
                      ])
                    ]);
                  }), 128)),
                  _hoisted_66
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_67, [
              createBaseVNode("div", _hoisted_68, [
                createBaseVNode("div", null, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    outlined: "",
                    onClick: addLesion
                  }, {
                    default: withCtx(() => [
                      _hoisted_69
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_70, [
                  createBaseVNode("div", _hoisted_71, [
                    _hoisted_72,
                    createBaseVNode("div", _hoisted_73, [
                      createBaseVNode("div", _hoisted_74, [
                        _hoisted_75,
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:user" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: inputZona.value,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => inputZona.value = $event),
                                  type: "text",
                                  placeholder: "Zona",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_76, [
                        _hoisted_77,
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:user" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: inputTratamieto.value,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => inputTratamieto.value = $event),
                                  type: "text",
                                  placeholder: "Tratamiento",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_78, [
                        _hoisted_79,
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:calendar" }, {
                              default: withCtx(() => [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VDatePicker, {
                                      modelValue: inputFecha_inicio.value,
                                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => inputFecha_inicio.value = $event),
                                      color: "green",
                                      "trim-weeks": ""
                                    }, {
                                      default: withCtx(({ inputValue, inputEvents }) => [
                                        createVNode(_component_VField, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_VControl, { icon: "feather:calendar" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_VInput, mergeProps({ value: inputValue }, toHandlers(inputEvents)), null, 16, ["value"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue"])
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
                      createBaseVNode("div", _hoisted_80, [
                        _hoisted_81,
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:user" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: inputDuracion.value,
                                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => inputDuracion.value = $event),
                                  type: "text",
                                  placeholder: "Duracion de lesion",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_82, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_83
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: inputLesionPresente.value,
                                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => inputLesionPresente.value = $event),
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: ["SI", "NO"]
                                }, null, 8, ["modelValue", "attrs"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datosDeportes).lesiones, (lesion, index) => {
                return openBlock(), createElementBlock("div", {
                  key: lesion,
                  class: "account-box"
                }, [
                  createBaseVNode("div", _hoisted_84, [
                    createBaseVNode("div", _hoisted_85, [
                      _hoisted_86,
                      createBaseVNode("label", _hoisted_87, toDisplayString(lesion.zona), 1)
                    ]),
                    createBaseVNode("div", _hoisted_88, [
                      _hoisted_89,
                      createBaseVNode("label", _hoisted_90, toDisplayString(lesion.tratamiento), 1)
                    ]),
                    createBaseVNode("div", _hoisted_91, [
                      _hoisted_92,
                      createBaseVNode("label", _hoisted_93, toDisplayString(lesion.fecha_inicio), 1)
                    ]),
                    createBaseVNode("div", _hoisted_94, [
                      _hoisted_95,
                      createBaseVNode("label", _hoisted_96, toDisplayString(lesion.duracion), 1)
                    ]),
                    createBaseVNode("div", _hoisted_97, [
                      _hoisted_98,
                      createBaseVNode("label", _hoisted_99, toDisplayString(lesion.actual), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_100, [
                    createVNode(_component_VIconButton, {
                      color: "warning",
                      outlined: "",
                      circle: "",
                      icon: "feather:trash-2",
                      onClick: ($event) => eliminarLesion(index)
                    }, null, 8, ["onClick"])
                  ])
                ]);
              }), 128))
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
    viewWrapper.setPageTitle("Salud");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_Salud = _sfc_main$1;
      return openBlock(), createBlock(_component_Salud);
    };
  }
});
export { _sfc_main as default };
