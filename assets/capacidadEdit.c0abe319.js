import { _ as _sfc_main$5 } from "./VField.227f0b66.js";
import { _ as __unplugin_components_2 } from "./VControl.e65ff893.js";
import { _ as _sfc_main$4 } from "./VInput.22932c5c.js";
import { a as useForm, _ as _sfc_main$3 } from "./VLabel.66fea259.js";
import { y as defineComponent, a as useUserSession, z as ref, aq as useWindowScroll, e as computed, A as onMounted, C as watch, p as resolveComponent, ar as resolveDirective, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, M as withKeys, v as withModifiers, k as normalizeClass, a1 as withDirectives, t as toDisplayString, l as createCommentVNode, m as createTextVNode, Y as _sfc_main$2, a5 as useHead, f as createBlock } from "./index.9a2a8c84.js";
import { u as useNotyf } from "./useNotyf.312f7415.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { d as updateMorfologia, p as updateZonas, e as getMorfologiaDeportista, a as getSemicooper } from "./deportista.87466242.js";
import { t as toFormValidator, m as mod } from "./index.1fbd2b5e.js";
import { u as useViewWrapper } from "./viewWrapper.8bde9c63.js";
import "./config.165bca36.js";
import "./general.34b73030.js";
import "./main.06195782.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Capacidad F\xEDsica"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edita la informac\xEDon")
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
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" Frecuencia Minima [ 35 - 80 ] ");
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
const _hoisted_24 = /* @__PURE__ */ createTextVNode(" Frecuencia Maxima [ 150 - 220 ] ");
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
const _hoisted_31 = /* @__PURE__ */ createTextVNode(" VO2 Max ");
const _hoisted_32 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_34 = [
  _hoisted_33
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const isLoading = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const returnZ = (variable, FCMX, FCMN) => {
      const maxi = Number(FCMX);
      const mini = Number(FCMN);
      const resta = maxi - mini;
      const multi = variable * resta;
      const result = multi + mini;
      return result;
    };
    const returnFcMax = () => {
      datosMorfologia.value.FCmax = datosMorfologia.value.FCmax.replace(/e/g, "");
      return datosMorfologia.value.FCmax;
    };
    const returnFcMin = () => {
      datosMorfologia.value.FCmin = datosMorfologia.value.FCmin.replace(/e/g, "");
      return datosMorfologia.value.FCmin;
    };
    const activarBoton = computed(() => {
      let disabled = true;
      if (Number(datosMorfologia.value.FCmax) >= 150 && Number(datosMorfologia.value.FCmax) <= 220 && datosMorfologia.value.FCmax.substring(0, 1) != 0 && Number(datosMorfologia.value.FCmin) >= 35 && Number(datosMorfologia.value.FCmin) <= 80 && datosMorfologia.value.FCmin.substring(0, 1) != 0) {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    });
    const validationSchema = toFormValidator(mod.object({
      fcMax: mod.string({
        required_error: "requerido",
        invalid_type_error: "tipo ivalido"
      }).min(3, "Debes escribir tres digitos"),
      fcMin: mod.string({
        required_error: "requerido",
        invalid_type_error: "tipo ivalido"
      }).min(2, "Debes escribir dos digitos")
    }));
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        fcMax: "",
        fcMin: ""
      }
    });
    const onSave = handleSubmit(async () => {
      isLoading.value = true;
      await sleep();
      await updateMorfologia(userSession.userId, datosMorfologia.value);
      await updateZonas(userSession.userId, Zonas.value);
      emit("update");
      notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
      isLoading.value = false;
    });
    const datosMorfologia = ref({
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
      grasa: "",
      medida_brazo: "",
      medida_cintura: "",
      medida_hombros: "",
      medida_muslo: "",
      medida_pantorrilla: "",
      medida_pecho: "",
      peso: "",
      ritmo: "",
      somatipo: "",
      tiempo_marca: ""
    });
    const datosTest = ref({
      VAM: "",
      VAM_decimal: "",
      semicooper: "",
      VO2Max: ""
    });
    const Zonas = ref({});
    onMounted(async () => {
      datosMorfologia.value = await getMorfologiaDeportista(userSession.userId);
      datosTest.value = await getSemicooper(userSession.userId);
    });
    watch([() => datosMorfologia.value.FCmin, () => datosMorfologia.value.FCmax], ([newMin, newMax]) => {
      if (newMin != "" && newMax != "") {
        Zonas.value.z1min = returnZ(0.5, newMax, newMin);
        Zonas.value.z1max = returnZ(0.6, newMax, newMin);
        Zonas.value.z2min = returnZ(0.6, newMax, newMin);
        Zonas.value.z2max = returnZ(0.7, newMax, newMin);
        Zonas.value.z3min = returnZ(0.7, newMax, newMin);
        Zonas.value.z3max = returnZ(0.8, newMax, newMin);
        Zonas.value.z4min = returnZ(0.8, newMax, newMin);
        Zonas.value.z4max = returnZ(0.9, newMax, newMin);
        Zonas.value.z5min = returnZ(0.9, newMax, newMin);
        Zonas.value.z5max = newMax;
      }
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$3;
      const _component_VInput = _sfc_main$4;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$5;
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
                createVNode(_component_VField, { id: "fcMin" }, {
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
                            "Pulsaciones de tu coraz\xF3n cuando te despiertas.",
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
                          modelValue: datosMorfologia.value.FCmin,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datosMorfologia.value.FCmin = $event),
                          value: returnFcMin(),
                          type: "text",
                          placeholder: "FCmin",
                          required: "",
                          autocomplete: "off"
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
                createVNode(_component_VField, { id: "fcMax" }, {
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
                            "M\xE1ximas pulsaciones de tu coraz\xF3n, si no sabes puedes poner 220-tu edad",
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
                          modelValue: datosMorfologia.value.FCmax,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosMorfologia.value.FCmax = $event),
                          value: returnFcMax(),
                          type: "text",
                          placeholder: "FCMax",
                          required: "",
                          autocomplete: "off"
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
                createVNode(_component_VField, { id: "vo2max" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_31,
                        createVNode(_component_font, { size: "4" }),
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_32, _hoisted_34)), [
                          [
                            _directive_tooltip,
                            "Expresa la capacidad de transportar ox\xEDgeno hacia los m\xFAsculos durante el ejercicio intenso.",
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
                          modelValue: datosTest.value.VO2Max,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosTest.value.VO2Max = $event),
                          value: datosTest.value.VO2Max,
                          type: "text",
                          placeholder: "VO2Max",
                          required: "",
                          disabled: "",
                          autocomplete: "off"
                        }, null, 8, ["modelValue", "value"])
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
    viewWrapper.setPageTitle("Capacidad F\xEDsica");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_CapacidadFisica = _sfc_main$1;
      return openBlock(), createBlock(_component_CapacidadFisica);
    };
  }
});
export { _sfc_main as default };
