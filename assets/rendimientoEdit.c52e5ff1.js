import { _ as _sfc_main$6 } from "./VIconButton.e1b652a9.js";
import { _ as _sfc_main$5 } from "./VField.40eec146.js";
import { _ as __unplugin_components_2 } from "./VControl.c459fb91.js";
import { _ as _sfc_main$4 } from "./VInput.bb7a011d.js";
import { a as useForm, _ as _sfc_main$3 } from "./VLabel.c9d776c3.js";
import { y as defineComponent, a as useUserSession, z as ref, aq as useWindowScroll, e as computed, r as reactive, A as onMounted, p as resolveComponent, ar as resolveDirective, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, M as withKeys, v as withModifiers, k as normalizeClass, a1 as withDirectives, t as toDisplayString, l as createCommentVNode, x as mergeProps, as as toHandlers, F as Fragment, s as renderList, m as createTextVNode, Y as _sfc_main$2, a5 as useHead, f as createBlock } from "./index.3437b938.js";
import { u as useNotyf } from "./useNotyf.c1050c77.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { u as updateSemicooper, q as getZonasDeportista, a as getSemicooper } from "./deportista.87466242.js";
import { t as toFormValidator, m as mod } from "./index.1fbd2b5e.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
import "./config.165bca36.js";
import "./general.34b73030.js";
import "./main.06195782.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Rendimiento"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edita la informac\xEDon")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Guardar cambios ");
const _hoisted_8 = { class: "p-6" };
const _hoisted_9 = { class: "fieldset" };
const _hoisted_10 = { class: "fieldset-heading" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h4", null, "Test Semicooper:", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, " Calienta 10 minutos y estira, luego corre la mayor distancia posible durante 6 minutos apunta la distancia recorrida en metros. ", -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Obligatorio ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_15 = { class: "columns is-multiline" };
const _hoisted_16 = { class: "column is-6" };
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" VAM ");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("*");
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
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Test ");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("*");
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
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_30 = { class: "fieldset" };
const _hoisted_31 = { class: "fieldset-heading" };
const _hoisted_32 = { class: "columns is-multiline is-desktop" };
const _hoisted_33 = { class: "column is-9" };
const _hoisted_34 = /* @__PURE__ */ createTextVNode(" Zonas ");
const _hoisted_35 = {
  onclick: "",
  class: "has-tooltip-multiline"
};
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_37 = [
  _hoisted_36
];
const _hoisted_38 = { class: "columns is-multiline" };
const _hoisted_39 = { class: "column is-3" };
const _hoisted_40 = /* @__PURE__ */ createTextVNode(" Z1 Minimo ");
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_42 = { class: "column is-3" };
const _hoisted_43 = { class: "column is-3" };
const _hoisted_44 = /* @__PURE__ */ createTextVNode(" Z1 Maximo ");
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_46 = { class: "column is-3" };
const _hoisted_47 = { class: "column is-3" };
const _hoisted_48 = /* @__PURE__ */ createTextVNode(" Z2 Minimo ");
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_50 = { class: "column is-3" };
const _hoisted_51 = { class: "column is-3" };
const _hoisted_52 = /* @__PURE__ */ createTextVNode(" Z2 Maximo ");
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_54 = { class: "column is-3" };
const _hoisted_55 = { class: "column is-3" };
const _hoisted_56 = /* @__PURE__ */ createTextVNode(" Z3 Minimo ");
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_58 = { class: "column is-3" };
const _hoisted_59 = { class: "column is-3" };
const _hoisted_60 = /* @__PURE__ */ createTextVNode(" Z3 Maximo ");
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_62 = { class: "column is-3" };
const _hoisted_63 = { class: "column is-3" };
const _hoisted_64 = /* @__PURE__ */ createTextVNode(" Z4 Minimo ");
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_66 = { class: "column is-3" };
const _hoisted_67 = { class: "column is-3" };
const _hoisted_68 = /* @__PURE__ */ createTextVNode(" Z4 Maximo ");
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_70 = { class: "column is-3" };
const _hoisted_71 = { class: "column is-3" };
const _hoisted_72 = /* @__PURE__ */ createTextVNode(" Z5 Minimo ");
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_74 = { class: "column is-3" };
const _hoisted_75 = { class: "column is-3" };
const _hoisted_76 = /* @__PURE__ */ createTextVNode(" Z5 Maximo ");
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("i", {
  class: "fas fa-arrow-right",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_78 = { class: "column is-3" };
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_80 = { class: "fieldset" };
const _hoisted_81 = { class: "fieldset-heading" };
const _hoisted_82 = { class: "columns is-multiline is-desktop" };
const _hoisted_83 = { class: "column is-9" };
const _hoisted_84 = /* @__PURE__ */ createTextVNode(" Records Personales ");
const _hoisted_85 = {
  onclick: "",
  class: "has-tooltip-multiline"
};
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_87 = [
  _hoisted_86
];
const _hoisted_88 = { class: "column is-3" };
const _hoisted_89 = /* @__PURE__ */ createTextVNode(" A\xF1adir Marca ");
const _hoisted_90 = { class: "columns is-multiline" };
const _hoisted_91 = { class: "column is-4" };
const _hoisted_92 = /* @__PURE__ */ createTextVNode(" Distancia ");
const _hoisted_93 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_94 = { class: "column is-4" };
const _hoisted_95 = {
  raw: "",
  class: "auth-label"
};
const _hoisted_96 = /* @__PURE__ */ createTextVNode(" Tiempo Marca ");
const _hoisted_97 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_98 = { class: "columns is-multiline" };
const _hoisted_99 = { class: "column is-4" };
const _hoisted_100 = { class: "column is-4" };
const _hoisted_101 = { class: "column is-4" };
const _hoisted_102 = { class: "column is-4" };
const _hoisted_103 = /* @__PURE__ */ createTextVNode(" Fecha ");
const _hoisted_104 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_105 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_106 = { class: "column is-4" };
const _hoisted_107 = /* @__PURE__ */ createTextVNode(" Ritmo (Calculo automatico)");
const _hoisted_108 = { class: "column is-4" };
const _hoisted_109 = /* @__PURE__ */ createTextVNode(" FC Promedio");
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-6" }, [
  /* @__PURE__ */ createBaseVNode("h1", null, [
    /* @__PURE__ */ createBaseVNode("u", null, "Marcas Registradas")
  ])
], -1);
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_112 = { class: "mx-2" };
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Distancia")
], -1);
const _hoisted_114 = { for: "marca" };
const _hoisted_115 = { class: "mx-2" };
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Tiempo Marca (HH:MM:SS)")
], -1);
const _hoisted_117 = { for: "marca" };
const _hoisted_118 = { class: "mx-2" };
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha")
], -1);
const _hoisted_120 = { for: "marca" };
const _hoisted_121 = { class: "mx-2" };
const _hoisted_122 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Ritmo")
], -1);
const _hoisted_123 = { for: "marca" };
const _hoisted_124 = { class: "mx-2" };
const _hoisted_125 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "FC Promedio")
], -1);
const _hoisted_126 = { for: "marca" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const isLoading = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const inputDistancia = ref(null);
    const inputTiempoHH = ref(null);
    const inputTiempoMM = ref(null);
    const inputTiempoSS = ref(null);
    const inputFecha = ref(null);
    const inputRitmo = ref(null);
    const inputFCprom = ref(null);
    const fechaMensaje = ref("");
    const categorias = ["1.500", "5K", "10K", "media maraton", "maraton", "otro"];
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const returnSemicooper = () => {
      datosSemicooper.semicooper = datosSemicooper.semicooper.replace(/e/g, "");
      return datosSemicooper.semicooper;
    };
    const selectedFecha = () => {
      let existe = false;
      if (inputFecha.value == null) {
        fechaMensaje.value = '"Escoge una fecha"';
        existe = true;
      }
      return existe;
    };
    const addMarca = () => {
      datosSemicooper.marcas.push({
        distancia: inputDistancia.value,
        tiempoH: inputTiempoHH.value,
        tiempoM: inputTiempoMM.value,
        tiempoS: inputTiempoSS.value,
        fecha: inputFecha.value,
        ritmo: inputRitmo.value,
        fcProm: inputFCprom.value
      });
      inputDistancia.value = null;
      inputTiempoHH.value = null;
      inputTiempoMM.value = null;
      inputTiempoSS.value = null;
      inputFecha.value = null;
      inputRitmo.value = null;
      inputFCprom.value = null;
    };
    const eliminarMarca = (marca) => {
      datosSemicooper.marcas.splice(marca, 1);
    };
    const activarBoton = computed(() => {
      let disabled = true;
      if (Number(datosSemicooper.semicooper) > 0 && datosSemicooper.semicooper.substring(0, 1) != 0) {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    });
    const validationSchema = toFormValidator(mod.object({
      semicooper: mod.string({
        required_error: "Este campo es requerido",
        invalid_type_error: "tipo de dato invalido"
      }).min(4, "Escribe minimo 4 digitos")
    }));
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        semicooper: ""
      }
    });
    const onSave = handleSubmit(async () => {
      isLoading.value = true;
      await sleep();
      await updateSemicooper(userSession.userId, datosSemicooper);
      emit("update");
      notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
      isLoading.value = false;
    });
    const datosSemicooper = reactive({
      VAM: "",
      VAM_decimal: "",
      semicooper: "",
      marcas: []
    });
    const datosZonas = ref("");
    onMounted(async () => {
      datosZonas.value = await getZonasDeportista(userSession.userId);
      const datos = await getSemicooper(userSession.userId);
      datosSemicooper.VAM = (datos == null ? void 0 : datos.VAM) || "";
      datosSemicooper.VAM_decimal = (datos == null ? void 0 : datos.VAM_decimal) || "";
      datosSemicooper.semicooper = (datos == null ? void 0 : datos.semicooper) || "";
      datosSemicooper.marcas = (datos == null ? void 0 : datos.marcas) || [];
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
      const _component_VIconButton = _sfc_main$6;
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
                createVNode(_component_VField, null, {
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
                            "Es la velocidad m\xE1xima a la que puedes correr cuando tu consumo de ox\xEDgeno est\xE1 al m\xE1ximo nivel.",
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
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: unref(datosSemicooper).VAM,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(datosSemicooper).VAM = $event),
                          value: unref(datosSemicooper).VAM,
                          type: "text",
                          placeholder: "semicooper",
                          disabled: ""
                        }, null, 8, ["modelValue", "value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_22, [
                createVNode(_component_VField, { id: "semicooper" }, {
                  default: withCtx(({ field }) => [
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
                            "Pruebas para conocer tu rendimiento deportivo",
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
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: unref(datosSemicooper).semicooper,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(datosSemicooper).semicooper = $event),
                          value: returnSemicooper(),
                          type: "text",
                          placeholder: "semicooper"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_28, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _hoisted_29,
          createBaseVNode("div", _hoisted_30, [
            createBaseVNode("div", _hoisted_31, [
              createBaseVNode("div", _hoisted_32, [
                createBaseVNode("h4", _hoisted_33, [
                  _hoisted_34,
                  withDirectives((openBlock(), createElementBlock("span", _hoisted_35, _hoisted_37)), [
                    [
                      _directive_tooltip,
                      "Son rangos para medir la intensidad del ejercicio",
                      void 0,
                      {
                        primary: true,
                        bubble: true,
                        right: true
                      }
                    ]
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_38, [
              createBaseVNode("div", _hoisted_39, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_40,
                    _hoisted_41
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_42, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosZonas.value.z1min,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosZonas.value.z1min = $event),
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
              createBaseVNode("div", _hoisted_43, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_44,
                    _hoisted_45
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_46, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosZonas.value.z1max,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosZonas.value.z1max = $event),
                          disabled: "",
                          type: "text",
                          placeholder: "Z1 Maximo",
                          autocomplete: "Z1 Maximo"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_47, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_48,
                    _hoisted_49
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_50, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosZonas.value.z2min,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosZonas.value.z2min = $event),
                          disabled: "",
                          type: "text",
                          placeholder: "Z2 Minimo",
                          autocomplete: "Z2 Minimo"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_51, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
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
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosZonas.value.z2max,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => datosZonas.value.z2max = $event),
                          disabled: "",
                          type: "text",
                          placeholder: "Z1 Maximo",
                          autocomplete: "Z1 Maximo"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_55, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_56,
                    _hoisted_57
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_58, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosZonas.value.z3min,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => datosZonas.value.z3min = $event),
                          disabled: "",
                          type: "text",
                          placeholder: "Z3 Minimo",
                          autocomplete: "Z3 Minimo"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_59, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_60,
                    _hoisted_61
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_62, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosZonas.value.z3max,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => datosZonas.value.z3max = $event),
                          disabled: "",
                          type: "text",
                          placeholder: "Z3 Maximo",
                          autocomplete: "Z3 Maximo"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_63, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_64,
                    _hoisted_65
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_66, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosZonas.value.z4min,
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => datosZonas.value.z4min = $event),
                          disabled: "",
                          type: "text",
                          placeholder: "Z4 Minimo",
                          autocomplete: "Z4 Minimo"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_67, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_68,
                    _hoisted_69
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_70, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosZonas.value.z4max,
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => datosZonas.value.z4max = $event),
                          disabled: "",
                          type: "text",
                          placeholder: "Z4 Maximo",
                          autocomplete: "Z4 Maximo"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_71, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
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
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosZonas.value.z5min,
                          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => datosZonas.value.z5min = $event),
                          disabled: "",
                          type: "text",
                          placeholder: "Z5 Minimo",
                          autocomplete: "Z5 Minimo"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_75, [
                createVNode(_component_VButton, {
                  rounded: "",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_76,
                    _hoisted_77
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_78, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosZonas.value.z5max,
                          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => datosZonas.value.z5max = $event),
                          disabled: "",
                          type: "text",
                          placeholder: "Z5 Maximo",
                          autocomplete: "Z5 Maximo"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _hoisted_79,
          createBaseVNode("div", _hoisted_80, [
            createBaseVNode("div", _hoisted_81, [
              createBaseVNode("div", _hoisted_82, [
                createBaseVNode("h4", _hoisted_83, [
                  _hoisted_84,
                  withDirectives((openBlock(), createElementBlock("span", _hoisted_85, _hoisted_87)), [
                    [
                      _directive_tooltip,
                      "Tus mejores registros en cada distancia",
                      void 0,
                      {
                        primary: true,
                        bubble: true
                      }
                    ]
                  ])
                ]),
                createBaseVNode("div", _hoisted_88, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    outlined: "",
                    onClick: addMarca
                  }, {
                    default: withCtx(() => [
                      _hoisted_89
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_90, [
              createBaseVNode("div", _hoisted_91, [
                createVNode(_component_VField, null, {
                  default: withCtx(({ id }) => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VLabel, {
                          raw: "",
                          class: "auth-label"
                        }, {
                          default: withCtx(() => [
                            _hoisted_92,
                            createVNode(_component_font, {
                              size: "4",
                              color: "red"
                            }, {
                              default: withCtx(() => [
                                _hoisted_93
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Multiselect, {
                          modelValue: inputDistancia.value,
                          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => inputDistancia.value = $event),
                          attrs: { id },
                          placeholder: "Seleccione uno",
                          options: categorias,
                          required: ""
                        }, null, 8, ["modelValue", "attrs"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_94, [
                createBaseVNode("label", _hoisted_95, [
                  _hoisted_96,
                  createVNode(_component_font, {
                    size: "4",
                    color: "red"
                  }, {
                    default: withCtx(() => [
                      _hoisted_97
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_98, [
                  createBaseVNode("div", _hoisted_99, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: inputTiempoHH.value,
                              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => inputTiempoHH.value = $event),
                              type: "number",
                              placeholder: "HH",
                              autocomplete: "off",
                              min: "0"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_100, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: inputTiempoMM.value,
                              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => inputTiempoMM.value = $event),
                              type: "number",
                              placeholder: "MM",
                              autocomplete: "off",
                              min: "0"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_101, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: inputTiempoSS.value,
                              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => inputTiempoSS.value = $event),
                              type: "number",
                              placeholder: "SS",
                              autocomplete: "off",
                              min: "0"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_102, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_103,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_104
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_VDatePicker, {
                              modelValue: inputFecha.value,
                              "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => inputFecha.value = $event),
                              "max-date": new Date(),
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
                            }, 8, ["modelValue", "max-date"])
                          ]),
                          _: 1
                        }),
                        selectedFecha() ? (openBlock(), createElementBlock("p", _hoisted_105, toDisplayString(fechaMensaje.value), 1)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_106, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VLabel, {
                          raw: "",
                          class: "auth-label"
                        }, {
                          default: withCtx(() => [
                            _hoisted_107
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VInput, {
                          modelValue: inputRitmo.value,
                          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => inputRitmo.value = $event),
                          type: "text",
                          placeholder: "Ritmo",
                          autocomplete: "off"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_108, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_VLabel, {
                          raw: "",
                          class: "auth-label"
                        }, {
                          default: withCtx(() => [
                            _hoisted_109
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VInput, {
                          modelValue: inputFCprom.value,
                          "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => inputFCprom.value = $event),
                          type: "text",
                          placeholder: "FC Promedio",
                          autocomplete: "off"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _hoisted_110,
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datosSemicooper).marcas, (marca, index) => {
            return openBlock(), createElementBlock("div", {
              key: marca,
              class: "columns is-multiline m-4"
            }, [
              _hoisted_111,
              createBaseVNode("div", _hoisted_112, [
                _hoisted_113,
                createBaseVNode("label", _hoisted_114, toDisplayString(marca.distancia), 1)
              ]),
              createBaseVNode("div", _hoisted_115, [
                _hoisted_116,
                createBaseVNode("label", _hoisted_117, toDisplayString(marca.tiempoH) + " : " + toDisplayString(marca.tiempoM) + " : " + toDisplayString(marca.tiempoS), 1)
              ]),
              createBaseVNode("div", _hoisted_118, [
                _hoisted_119,
                createBaseVNode("label", _hoisted_120, toDisplayString(marca.fecha), 1)
              ]),
              createBaseVNode("div", _hoisted_121, [
                _hoisted_122,
                createBaseVNode("label", _hoisted_123, toDisplayString(marca.ritmo), 1)
              ]),
              createBaseVNode("div", _hoisted_124, [
                _hoisted_125,
                createBaseVNode("label", _hoisted_126, toDisplayString(marca.fcProm), 1)
              ]),
              createVNode(_component_VIconButton, {
                color: "warning",
                outlined: "",
                circle: "",
                icon: "feather:trash-2",
                onClick: ($event) => eliminarMarca(index)
              }, null, 8, ["onClick"])
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Rendimiento");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_Rendimiento = _sfc_main$1;
      return openBlock(), createBlock(_component_Rendimiento);
    };
  }
});
export { _sfc_main as default };
