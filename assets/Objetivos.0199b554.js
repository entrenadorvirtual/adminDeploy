import { _ as _sfc_main$7 } from "./VSwitchBlock.7afcfb92.js";
import { _ as _sfc_main$6 } from "./VIconButton.336a029e.js";
import { _ as _sfc_main$5 } from "./VTextarea.9eda26d4.js";
import { _ as _sfc_main$4 } from "./VInput.5920a8ca.js";
import { _ as _sfc_main$2, a as __unplugin_components_2, b as _sfc_main$3 } from "./VControl.4d17fa85.js";
import { y as defineComponent, a as useUserSession, z as ref, az as useWindowScroll, e as computed, r as reactive, A as onMounted, C as watch, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, k as normalizeClass, D as unref, q as createVNode, w as withCtx, Q as withKeys, v as withModifiers, t as toDisplayString, l as createCommentVNode, x as mergeProps, aE as toHandlers, F as Fragment, s as renderList, m as createTextVNode, O as _sfc_main$1 } from "./index.a7fc5dec.js";
import { u as useNotyf } from "./useNotyf.ce7ee7f1.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { c as getObjetivos, p as getCategorias, q as getSubCategorias, r as updateObjetivo } from "./deportista.892d7693.js";
var Objetivos_vue_vue_type_style_index_0_lang = "";
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
const _hoisted_14 = { class: "fieldset-heading" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n Objetivos:", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("p", null, "Nos gustaria que registraras tus Objetivos para conocerte mejor", -1);
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Obligatorio ");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_19 = { class: "m-3" };
const _hoisted_20 = /* @__PURE__ */ createTextVNode(" A\xF1adir Objetivos ");
const _hoisted_21 = { class: "columns is-multiline" };
const _hoisted_22 = { class: "column is-3" };
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Deporte ");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_25 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_26 = { class: "column is-3" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode("Objetivo General ");
const _hoisted_28 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_29 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_30 = { class: "column is-3" };
const _hoisted_31 = /* @__PURE__ */ createTextVNode("Fecha ");
const _hoisted_32 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_33 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_34 = { class: "column is-3" };
const _hoisted_35 = /* @__PURE__ */ createTextVNode("Nombre Objetivo");
const _hoisted_36 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_37 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_38 = {
  key: 0,
  class: "column is-6"
};
const _hoisted_39 = {
  raw: "",
  class: "auth-label"
};
const _hoisted_40 = /* @__PURE__ */ createTextVNode(" Tiempo Marca ");
const _hoisted_41 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_42 = { class: "columns is-multiline" };
const _hoisted_43 = { class: "column is-4" };
const _hoisted_44 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_45 = { class: "column is-4" };
const _hoisted_46 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_47 = { class: "column is-4" };
const _hoisted_48 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_49 = {
  key: 1,
  class: "column is-6"
};
const _hoisted_50 = /* @__PURE__ */ createTextVNode("Objetivo Especifico ");
const _hoisted_51 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_52 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-6" }, [
  /* @__PURE__ */ createBaseVNode("h1", null, [
    /* @__PURE__ */ createBaseVNode("u", null, "Objetivos Registrados")
  ])
], -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_55 = { class: "mx-2" };
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Meta")
], -1);
const _hoisted_57 = { for: "meta" };
const _hoisted_58 = { class: "mx-2" };
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "General")
], -1);
const _hoisted_60 = { for: "meta" };
const _hoisted_61 = { class: "mx-2" };
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Especialidad")
], -1);
const _hoisted_63 = { for: "meta" };
const _hoisted_64 = { class: "mx-2" };
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha")
], -1);
const _hoisted_66 = { for: "meta" };
const _hoisted_67 = { class: "mx-2" };
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Especifico")
], -1);
const _hoisted_69 = { for: "meta" };
const _hoisted_70 = { class: "mx-2" };
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Nombre")
], -1);
const _hoisted_72 = { for: "meta" };
const _hoisted_73 = { class: "colmuns" };
const _hoisted_74 = { class: "columns" };
const _hoisted_75 = { class: "column is-12" };
const _hoisted_76 = { class: "account-box is-navigation" };
const _hoisted_77 = { class: "form-body" };
const _hoisted_78 = { class: "fieldset" };
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Disponibilidad :")
], -1);
const _hoisted_80 = { class: "columns is-multiline" };
const _hoisted_81 = { class: "column is-3" };
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Lunes")
], -1);
const _hoisted_83 = { class: "column is-3" };
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Martes")
], -1);
const _hoisted_85 = { class: "column is-3" };
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Miercoles")
], -1);
const _hoisted_87 = { class: "column is-3" };
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Jueves")
], -1);
const _hoisted_89 = { class: "columns is-multiline" };
const _hoisted_90 = { class: "column is-3" };
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Viernes")
], -1);
const _hoisted_92 = { class: "column is-3" };
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Sabado")
], -1);
const _hoisted_94 = { class: "column is-3" };
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Domingo")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const isLoading = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const categorias = ref("");
    const subCategorias = ref("");
    const generalMensaje = ref("");
    const deporteMensaje = ref("");
    const fechaMensaje = ref("");
    const inputDeporte = ref(null);
    const inputGeneral = ref(null);
    const inputEspecifico = ref("");
    const especificoHoras = ref("");
    const especificotext = ref("");
    const inputEspecificoH = ref(null);
    const inputEspecificoM = ref(null);
    const inputEspecificoS = ref(null);
    const inputFecha = ref(null);
    const nombreObjetivo = ref("");
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const estadoAddObjetivos = computed(() => {
      let botonLesion = true;
      especifico();
      asignarEspecifico();
      if (inputGeneral.value != null && inputFecha.value != null && nombreObjetivo.value != "" && inputEspecifico.value != "") {
        botonLesion = false;
      } else {
        botonLesion = true;
      }
      if (datosObjetivos.meta_deportiva.length >= 5) {
        botonLesion = true;
      }
      return botonLesion;
    });
    const especifico = async () => {
      if (inputEspecificoH.value && inputEspecificoM.value && inputEspecificoS.value) {
        especificoHoras.value = inputEspecificoH.value + ":" + inputEspecificoM.value + ":" + inputEspecificoS.value;
      } else {
        especificoHoras.value = null;
      }
    };
    const asignarEspecifico = () => {
      if (especificoHoras.value) {
        inputEspecifico.value = especificoHoras.value;
      } else {
        inputEspecifico.value = especificotext.value;
      }
    };
    const selectedDeporte = () => {
      let existe = false;
      if (inputDeporte.value == null) {
        inputGeneral.value = null;
        deporteMensaje.value = '"Escoge un Deporte"';
        existe = true;
      }
      return existe;
    };
    const selectedGeneral = () => {
      let existe = false;
      if (inputGeneral.value == null) {
        generalMensaje.value = '"Escoge un objetivo general"';
        existe = true;
      }
      return existe;
    };
    const selectedFecha = () => {
      let existe = false;
      if (inputFecha.value == null) {
        fechaMensaje.value = '"Escoge una fecha"';
        existe = true;
      }
      return existe;
    };
    const addObjetivo = () => {
      datosObjetivos.meta_deportiva.push({
        deporte: inputDeporte.value,
        general: inputGeneral.value,
        especifico: inputEspecifico.value,
        especificoH: inputEspecificoH.value,
        especificoM: inputEspecificoM.value,
        especificoS: inputEspecificoS.value,
        fecha: inputFecha.value,
        nombre: nombreObjetivo.value
      });
      inputDeporte.value = null;
      inputGeneral.value = null;
      inputEspecifico.value = "";
      inputEspecificoH.value = null;
      inputEspecificoM.value = null;
      inputEspecificoS.value = null;
      especificotext.value = "";
      inputFecha.value = null;
      nombreObjetivo.value = "";
    };
    const eliminarMeta = (meta) => {
      datosObjetivos.meta_deportiva.splice(meta, 1);
    };
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      await updateObjetivo(userSession.userId, datosObjetivos);
      emit("update");
      notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
      isLoading.value = false;
    };
    const datosObjetivos = reactive({
      meta_deportiva: [],
      dias_entrenamiento: {}
    });
    onMounted(async () => {
      const datos = await getObjetivos(userSession.userId);
      categorias.value = await getCategorias();
      datosObjetivos.meta_deportiva = (datos == null ? void 0 : datos.meta_deportiva) || [];
      datosObjetivos.dias_entrenamiento = (datos == null ? void 0 : datos.dias_entrenamiento) || {};
    });
    watch(inputDeporte, async (newDeporte) => {
      inputGeneral.value = null;
      inputEspecificoH.value = null;
      inputEspecificoM.value = null;
      inputEspecificoS.value = null;
      inputEspecifico.value = "";
      subCategorias.value = await getSubCategorias(newDeporte);
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$2;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_VInput = _sfc_main$4;
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_VTextarea = _sfc_main$5;
      const _component_VIconButton = _sfc_main$6;
      const _component_VSwitchBlock = _sfc_main$7;
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
                          disabled: _ctx.activarBoton,
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
                    createBaseVNode("div", _hoisted_14, [
                      _hoisted_15,
                      _hoisted_16,
                      createBaseVNode("p", null, [
                        _hoisted_17,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_18
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_19, [
                      createVNode(_component_VButton, {
                        color: "primary",
                        outlined: "",
                        disabled: unref(estadoAddObjetivos),
                        onClick: addObjetivo
                      }, {
                        default: withCtx(() => [
                          _hoisted_20
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    createBaseVNode("div", _hoisted_21, [
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
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: inputDeporte.value,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputDeporte.value = $event),
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: categorias.value,
                                  required: ""
                                }, null, 8, ["modelValue", "attrs", "options"]),
                                selectedDeporte() ? (openBlock(), createElementBlock("p", _hoisted_25, toDisplayString(deporteMensaje.value), 1)) : createCommentVNode("", true)
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
                                    createVNode(_component_font, {
                                      size: "4",
                                      color: "red"
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_28
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: inputGeneral.value,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => inputGeneral.value = $event),
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: subCategorias.value,
                                  required: ""
                                }, null, 8, ["modelValue", "attrs", "options"]),
                                selectedGeneral() ? (openBlock(), createElementBlock("p", _hoisted_29, toDisplayString(generalMensaje.value), 1)) : createCommentVNode("", true)
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
                                createVNode(_component_font, {
                                  size: "4",
                                  color: "red"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_32
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
                                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => inputFecha.value = $event),
                                      "min-date": new Date(),
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
                                    }, 8, ["modelValue", "min-date"])
                                  ]),
                                  _: 1
                                }),
                                selectedFecha() ? (openBlock(), createElementBlock("p", _hoisted_33, toDisplayString(fechaMensaje.value), 1)) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_34, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_35,
                                createVNode(_component_font, {
                                  size: "4",
                                  color: "red"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_36
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, { icon: "feather:user" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: nombreObjetivo.value,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => nombreObjetivo.value = $event),
                                  type: "text",
                                  placeholder: "Nombre Objetivo",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"]),
                                nombreObjetivo.value === "" ? (openBlock(), createElementBlock("p", _hoisted_37, " Dale un nombre al objetivo ")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      inputDeporte.value === "Atletismo" || inputDeporte.value === "Ciclismo" || inputDeporte.value === "Natacion" || inputDeporte.value === "Triatlon" ? (openBlock(), createElementBlock("div", _hoisted_38, [
                        createBaseVNode("label", _hoisted_39, [
                          _hoisted_40,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_41
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_42, [
                          createBaseVNode("div", _hoisted_43, [
                            createVNode(_component_VField, null, {
                              default: withCtx(() => [
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VInput, {
                                      modelValue: inputEspecificoH.value,
                                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => inputEspecificoH.value = $event),
                                      type: "number",
                                      placeholder: "HH",
                                      autocomplete: "off",
                                      min: "0"
                                    }, null, 8, ["modelValue"]),
                                    inputEspecificoH.value === null ? (openBlock(), createElementBlock("p", _hoisted_44, " Digita una Hora ")) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", _hoisted_45, [
                            createVNode(_component_VField, null, {
                              default: withCtx(() => [
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VInput, {
                                      modelValue: inputEspecificoM.value,
                                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => inputEspecificoM.value = $event),
                                      type: "number",
                                      placeholder: "MM",
                                      autocomplete: "off",
                                      min: "0"
                                    }, null, 8, ["modelValue"]),
                                    inputEspecificoM.value === null ? (openBlock(), createElementBlock("p", _hoisted_46, " Digita los minutos ")) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", _hoisted_47, [
                            createVNode(_component_VField, null, {
                              default: withCtx(() => [
                                createVNode(_component_VControl, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VInput, {
                                      modelValue: inputEspecificoS.value,
                                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => inputEspecificoS.value = $event),
                                      type: "number",
                                      placeholder: "SS",
                                      autocomplete: "off",
                                      min: "0"
                                    }, null, 8, ["modelValue"]),
                                    inputEspecificoS.value === null ? (openBlock(), createElementBlock("p", _hoisted_48, " Digita los Segundos ")) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])) : createCommentVNode("", true),
                      inputDeporte.value === "Gimnasio" || inputDeporte.value === "Vida Activa" ? (openBlock(), createElementBlock("div", _hoisted_49, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VLabel, {
                              raw: "",
                              class: "auth-label"
                            }, {
                              default: withCtx(() => [
                                _hoisted_50,
                                createVNode(_component_font, {
                                  size: "4",
                                  color: "red"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_51
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VTextarea, {
                                  modelValue: especificotext.value,
                                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => especificotext.value = $event),
                                  type: "text",
                                  placeholder: "Objetivo Especifico",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"]),
                                inputEspecifico.value === "" ? (openBlock(), createElementBlock("p", _hoisted_52, " Ingresa el objetivo especifico ")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _hoisted_53,
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datosObjetivos).meta_deportiva, (meta, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: meta,
                      class: "columns is-multiline m-4"
                    }, [
                      _hoisted_54,
                      createBaseVNode("div", _hoisted_55, [
                        _hoisted_56,
                        createBaseVNode("label", _hoisted_57, toDisplayString(meta.deporte), 1)
                      ]),
                      createBaseVNode("div", _hoisted_58, [
                        _hoisted_59,
                        createBaseVNode("label", _hoisted_60, toDisplayString(meta.general), 1)
                      ]),
                      createBaseVNode("div", _hoisted_61, [
                        _hoisted_62,
                        createBaseVNode("label", _hoisted_63, toDisplayString(meta.especialidad), 1)
                      ]),
                      createBaseVNode("div", _hoisted_64, [
                        _hoisted_65,
                        createBaseVNode("label", _hoisted_66, toDisplayString(meta.fecha), 1)
                      ]),
                      createBaseVNode("div", _hoisted_67, [
                        _hoisted_68,
                        createBaseVNode("label", _hoisted_69, toDisplayString(meta.especifico), 1)
                      ]),
                      createBaseVNode("div", _hoisted_70, [
                        _hoisted_71,
                        createBaseVNode("label", _hoisted_72, toDisplayString(meta.nombre), 1)
                      ]),
                      createBaseVNode("div", _hoisted_73, [
                        createVNode(_component_VIconButton, {
                          color: "warning",
                          outlined: "",
                          circle: "",
                          icon: "feather:trash-2",
                          onClick: ($event) => eliminarMeta(index)
                        }, null, 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_74, [
            createBaseVNode("div", _hoisted_75, [
              createBaseVNode("div", _hoisted_76, [
                createBaseVNode("div", _hoisted_77, [
                  createBaseVNode("div", _hoisted_78, [
                    _hoisted_79,
                    createBaseVNode("div", _hoisted_80, [
                      createBaseVNode("div", _hoisted_81, [
                        _hoisted_82,
                        createVNode(_component_VField, { grouped: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.lunesM,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(datosObjetivos).dias_entrenamiento.lunesM = $event),
                                  color: "success",
                                  label: "Ma\xF1ana"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.lunesT,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(datosObjetivos).dias_entrenamiento.lunesT = $event),
                                  color: "success",
                                  label: "Tarde"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_83, [
                        _hoisted_84,
                        createVNode(_component_VField, { grouped: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.martesM,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(datosObjetivos).dias_entrenamiento.martesM = $event),
                                  color: "success",
                                  label: "Ma\xF1ana"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.martesT,
                                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(datosObjetivos).dias_entrenamiento.martesT = $event),
                                  color: "success",
                                  label: "Tarde"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_85, [
                        _hoisted_86,
                        createVNode(_component_VField, { grouped: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.miercolesM,
                                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(datosObjetivos).dias_entrenamiento.miercolesM = $event),
                                  color: "success",
                                  label: "Ma\xF1ana"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.miercolesT,
                                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(datosObjetivos).dias_entrenamiento.miercolesT = $event),
                                  color: "success",
                                  label: "Tarde"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_87, [
                        _hoisted_88,
                        createVNode(_component_VField, { grouped: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.juevesM,
                                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(datosObjetivos).dias_entrenamiento.juevesM = $event),
                                  color: "success",
                                  label: "Ma\xF1ana"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.juevesT,
                                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(datosObjetivos).dias_entrenamiento.juevesT = $event),
                                  color: "success",
                                  label: "Tarde"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_89, [
                      createBaseVNode("div", _hoisted_90, [
                        _hoisted_91,
                        createVNode(_component_VField, { grouped: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.viernesM,
                                  "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(datosObjetivos).dias_entrenamiento.viernesM = $event),
                                  color: "success",
                                  label: "Ma\xF1ana"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.viernesT,
                                  "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => unref(datosObjetivos).dias_entrenamiento.viernesT = $event),
                                  color: "success",
                                  label: "Tarde"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_92, [
                        _hoisted_93,
                        createVNode(_component_VField, { grouped: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.sabadoM,
                                  "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => unref(datosObjetivos).dias_entrenamiento.sabadoM = $event),
                                  color: "success",
                                  label: "Ma\xF1ana"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.sabadoT,
                                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => unref(datosObjetivos).dias_entrenamiento.sabadoT = $event),
                                  color: "success",
                                  label: "Tarde"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_94, [
                        _hoisted_95,
                        createVNode(_component_VField, { grouped: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.domingoM,
                                  "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => unref(datosObjetivos).dias_entrenamiento.domingoM = $event),
                                  color: "success",
                                  label: "Ma\xF1ana"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, { subcontrol: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_VSwitchBlock, {
                                  modelValue: unref(datosObjetivos).dias_entrenamiento.domingoT,
                                  "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => unref(datosObjetivos).dias_entrenamiento.domingoT = $event),
                                  color: "success",
                                  label: "Tarde"
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
      ]);
    };
  }
});
export { _sfc_main as _ };
