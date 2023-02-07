import { _ as _sfc_main$5 } from "./VField.40eec146.js";
import { _ as __unplugin_components_2 } from "./VControl.c459fb91.js";
import { _ as _sfc_main$4 } from "./VInput.bb7a011d.js";
import { a as useForm, _ as _sfc_main$3 } from "./VLabel.c9d776c3.js";
import { y as defineComponent, a as useUserSession, z as ref, aq as useWindowScroll, e as computed, A as onMounted, p as resolveComponent, ar as resolveDirective, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, M as withKeys, v as withModifiers, k as normalizeClass, a1 as withDirectives, t as toDisplayString, l as createCommentVNode, x as mergeProps, as as toHandlers, m as createTextVNode, Y as _sfc_main$2, a5 as useHead, f as createBlock } from "./index.3437b938.js";
import { u as useNotyf } from "./useNotyf.c1050c77.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { d as updateMorfologia, e as getMorfologiaDeportista } from "./deportista.87466242.js";
import { t as toFormValidator, m as mod } from "./index.1fbd2b5e.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
import "./config.165bca36.js";
import "./general.34b73030.js";
import "./main.06195782.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n General"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edita la informac\xEDon de morfolog\xEDa")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Guardar cambios ");
const _hoisted_8 = { class: "p-6" };
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = { class: "fieldset-heading" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n Morfolog\xEDa:", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "Otras personas quieren conocerte m\xE1s", -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Obligatorio ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_15 = { class: "columns is-multiline" };
const _hoisted_16 = { class: "column is-4" };
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" Estatura [80 - 220 ]");
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
const _hoisted_22 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_23 = { class: "column is-4" };
const _hoisted_24 = /* @__PURE__ */ createTextVNode(" Peso >30 (Kg) ");
const _hoisted_25 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_26 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_28 = [
  _hoisted_27
];
const _hoisted_29 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_30 = { class: "column is-4" };
const _hoisted_31 = /* @__PURE__ */ createTextVNode(" Grasa ");
const _hoisted_32 = {
  onclick: "",
  class: "has-tooltip-multiline"
};
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_34 = [
  _hoisted_33
];
const _hoisted_35 = { class: "column is-4" };
const _hoisted_36 = /* @__PURE__ */ createTextVNode(" IMC ");
const _hoisted_37 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_39 = [
  _hoisted_38
];
const _hoisted_40 = { class: "column is-4" };
const _hoisted_41 = /* @__PURE__ */ createTextVNode("Somatipo ");
const _hoisted_42 = {
  onclick: "",
  class: "has-tooltip-multiline"
};
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_44 = [
  _hoisted_43
];
const _hoisted_45 = { class: "fieldset-heading" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_47 = /* @__PURE__ */ createTextVNode(" Perimetros ");
const _hoisted_48 = {
  onclick: "",
  class: "has-tooltip-multiline"
};
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_50 = [
  _hoisted_49
];
const _hoisted_51 = { class: "columns is-multiline" };
const _hoisted_52 = { class: "column is-2" };
const _hoisted_53 = /* @__PURE__ */ createTextVNode(" Cintura ");
const _hoisted_54 = { class: "column is-5" };
const _hoisted_55 = { class: "column is-5" };
const _hoisted_56 = { class: "column is-2" };
const _hoisted_57 = /* @__PURE__ */ createTextVNode(" Brazo ");
const _hoisted_58 = { class: "column is-5" };
const _hoisted_59 = { class: "column is-5" };
const _hoisted_60 = { class: "column is-2" };
const _hoisted_61 = /* @__PURE__ */ createTextVNode(" Muslo Medio ");
const _hoisted_62 = { class: "column is-5" };
const _hoisted_63 = { class: "column is-5" };
const _hoisted_64 = { class: "column is-2" };
const _hoisted_65 = /* @__PURE__ */ createTextVNode(" Pantorrilla ");
const _hoisted_66 = { class: "column is-5" };
const _hoisted_67 = { class: "column is-5" };
const _hoisted_68 = { class: "column is-2" };
const _hoisted_69 = /* @__PURE__ */ createTextVNode(" Pecho ");
const _hoisted_70 = { class: "column is-5" };
const _hoisted_71 = { class: "column is-5" };
const _hoisted_72 = { class: "column is-2" };
const _hoisted_73 = /* @__PURE__ */ createTextVNode(" Hombros ");
const _hoisted_74 = { class: "column is-5" };
const _hoisted_75 = { class: "column is-5" };
const _hoisted_76 = { class: "column is-2" };
const _hoisted_77 = /* @__PURE__ */ createTextVNode(" Gluteos ");
const _hoisted_78 = { class: "column is-5" };
const _hoisted_79 = { class: "column is-5" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const isLoading = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const somatipos = ["Estomorfico", "Mesom\xF3rfico", "Endomorfico"];
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const returnIMC = () => {
      datosMorfologia.value.IMC = (datosMorfologia.value.peso / Math.pow(datosMorfologia.value.estatura / 100, 2)).toFixed(2);
      return datosMorfologia.value.IMC;
    };
    const returnEstatura = () => {
      datosMorfologia.value.estatura = datosMorfologia.value.estatura.replace(/e/g, "");
      return datosMorfologia.value.estatura;
    };
    const returnPeso = () => {
      datosMorfologia.value.peso = datosMorfologia.value.peso.replace(/e/g, "");
      return datosMorfologia.value.peso;
    };
    const activarBoton = computed(() => {
      let disabled = true;
      if (Number(datosMorfologia.value.peso) >= 30 && datosMorfologia.value.peso.substring(0, 1) != 0 && Number(datosMorfologia.value.estatura) >= 80 && Number(datosMorfologia.value.estatura) <= 220 && datosMorfologia.value.estatura.substring(0, 1) != 0) {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    });
    const validationSchema = toFormValidator(mod.object({
      estatura: mod.string({
        required_error: "requerido",
        invalid_type_error: "tipo ivalido"
      }).min(2, "Debes escribir dos digitos"),
      peso: mod.string({
        required_error: "requerido",
        invalid_type_error: "tipo ivalido"
      }).min(2, "Debes escribir dos digitos")
    }));
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        estatura: "",
        peso: ""
      }
    });
    const onSave = handleSubmit(async () => {
      isLoading.value = true;
      await sleep();
      await updateMorfologia(userSession.userId, datosMorfologia.value);
      emit("update");
      notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
      isLoading.value = false;
    });
    const datosMorfologia = ref({
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
      datosMorfologia.value = await getMorfologiaDeportista(userSession.userId);
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$3;
      const _component_VInput = _sfc_main$4;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$5;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
        }, [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VButton, {
                  to: { name: "deportista" },
                  icon: "lnir lnir-arrow-left rem-100",
                  light: "",
                  "dark-outlined": ""
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: "",
                  loading: isLoading.value,
                  disabled: unref(activarBoton),
                  tabindex: "0",
                  onKeydown: withKeys(withModifiers(unref(onSave), ["prevent"]), ["space"]),
                  onClick: unref(onSave)
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }, 8, ["loading", "disabled", "onKeydown", "onClick"])
              ])
            ])
          ])
        ], 2),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              _hoisted_11,
              _hoisted_12,
              createBaseVNode("p", null, [
                _hoisted_13,
                createVNode(_component_font, {
                  size: "4",
                  color: "red"
                }, {
                  default: withCtx(() => [
                    _hoisted_14
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                createVNode(_component_VField, { id: "estatura" }, {
                  default: withCtx(({ field }) => [
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
                            "En centimetros",
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
                          modelValue: datosMorfologia.value.estatura,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datosMorfologia.value.estatura = $event),
                          value: returnEstatura(),
                          type: "text",
                          required: "",
                          placeholder: "Estatura",
                          autocomplete: "estatura"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_22, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_23, [
                createVNode(_component_VField, { id: "peso" }, {
                  default: withCtx(({ field }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_24,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_25
                          ]),
                          _: 1
                        }),
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_26, _hoisted_28)), [
                          [
                            _directive_tooltip,
                            "En Kg",
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
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.peso,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosMorfologia.value.peso = $event),
                          value: returnPeso(),
                          required: "",
                          type: "text",
                          placeholder: "Peso",
                          autocomplete: "peso"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_29, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
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
                        _hoisted_31,
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_32, _hoisted_34)), [
                          [
                            _directive_tooltip,
                            "Medida para distinguir la grasa del musculo, ideal mujeres 20-30%, hombres 10-20%",
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
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.grasa,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosMorfologia.value.grasa = $event),
                          type: "text",
                          placeholder: "% Grasa",
                          autocomplete: "% Grasa"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_35, [
                createVNode(_component_VField, { id: "IMC" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_36,
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_37, _hoisted_39)), [
                          [
                            _directive_tooltip,
                            "Indice de masa corporal, evalua la obesidad, ideal 20-25",
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
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.IMC,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosMorfologia.value.IMC = $event),
                          value: returnIMC(),
                          required: "",
                          type: "text",
                          placeholder: "Peso",
                          autocomplete: "peso"
                        }, null, 8, ["modelValue", "value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_40, [
                createVNode(_component_VField, null, {
                  default: withCtx(({ id }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_41,
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_42, _hoisted_44)), [
                          [
                            _directive_tooltip,
                            "Selecciona un somatipo",
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
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: datosMorfologia.value.somatipo,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosMorfologia.value.somatipo = $event),
                          value: datosMorfologia.value.somatipo,
                          attrs: { id },
                          placeholder: "Seleccione uno",
                          options: somatipos,
                          required: ""
                        }, null, 8, ["modelValue", "value", "attrs"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_45, [
              createBaseVNode("h4", null, [
                _hoisted_46,
                _hoisted_47,
                withDirectives((openBlock(), createElementBlock("span", _hoisted_48, _hoisted_50)), [
                  [
                    _directive_tooltip,
                    "En cms para cada contorno",
                    void 0,
                    {
                      primary: true,
                      bubble: true
                    }
                  ]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_51, [
              createBaseVNode("div", _hoisted_52, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_53
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_54, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_VDatePicker, {
                              modelValue: datosMorfologia.value.fecha_cintura,
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => datosMorfologia.value.fecha_cintura = $event),
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
              createBaseVNode("div", _hoisted_55, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.medida_cintura,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => datosMorfologia.value.medida_cintura = $event),
                          type: "text",
                          placeholder: "medida",
                          autocomplete: "medida"
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
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_57
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_58, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_VDatePicker, {
                              modelValue: datosMorfologia.value.fecha_brazo,
                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => datosMorfologia.value.fecha_brazo = $event),
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
              createBaseVNode("div", _hoisted_59, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.medida_brazo,
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => datosMorfologia.value.medida_brazo = $event),
                          type: "text",
                          placeholder: "medida",
                          autocomplete: "medida"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_60, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_61
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_62, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_VDatePicker, {
                              modelValue: datosMorfologia.value.fecha_muslo,
                              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => datosMorfologia.value.fecha_muslo = $event),
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
              createBaseVNode("div", _hoisted_63, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.medida_muslo,
                          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => datosMorfologia.value.medida_muslo = $event),
                          type: "text",
                          placeholder: "medida",
                          autocomplete: "medida"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_64, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_65
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_66, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_VDatePicker, {
                              modelValue: datosMorfologia.value.fecha_pantorrilla,
                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => datosMorfologia.value.fecha_pantorrilla = $event),
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
              createBaseVNode("div", _hoisted_67, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.medida_pantorrilla,
                          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => datosMorfologia.value.medida_pantorrilla = $event),
                          type: "text",
                          placeholder: "medida",
                          autocomplete: "medida"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_68, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_69
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_70, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_VDatePicker, {
                              modelValue: datosMorfologia.value.fecha_pecho,
                              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => datosMorfologia.value.fecha_pecho = $event),
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
              createBaseVNode("div", _hoisted_71, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.medida_pecho,
                          "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => datosMorfologia.value.medida_pecho = $event),
                          type: "text",
                          placeholder: "medida",
                          autocomplete: "medida"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_72, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_73
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_74, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_VDatePicker, {
                              modelValue: datosMorfologia.value.fecha_hombros,
                              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => datosMorfologia.value.fecha_hombros = $event),
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
              createBaseVNode("div", _hoisted_75, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.medida_hombros,
                          "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => datosMorfologia.value.medida_hombros = $event),
                          type: "text",
                          placeholder: "medida",
                          autocomplete: "medida"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_76, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_77
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_78, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:calendar" }, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_VDatePicker, {
                              modelValue: datosMorfologia.value.fecha_gluteos,
                              "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => datosMorfologia.value.fecha_gluteos = $event),
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
              createBaseVNode("div", _hoisted_79, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.medida_gluteos,
                          "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => datosMorfologia.value.medida_gluteos = $event),
                          type: "text",
                          placeholder: "medida",
                          autocomplete: "medida"
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
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Morfolog\xEDa");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_Morfologico = _sfc_main$1;
      return openBlock(), createBlock(_component_Morfologico);
    };
  }
});
export { _sfc_main as default };
