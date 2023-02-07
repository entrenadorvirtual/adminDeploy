import { _ as _sfc_main$5 } from "./VField.40eec146.js";
import { _ as __unplugin_components_2 } from "./VControl.c459fb91.js";
import { _ as _sfc_main$4 } from "./VInput.bb7a011d.js";
import { a as useForm, _ as _sfc_main$3 } from "./VLabel.c9d776c3.js";
import { y as defineComponent, a as useUserSession, z as ref, aq as useWindowScroll, e as computed, A as onMounted, C as watch, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, M as withKeys, v as withModifiers, k as normalizeClass, t as toDisplayString, l as createCommentVNode, m as createTextVNode, Y as _sfc_main$2, a5 as useHead, f as createBlock } from "./index.3437b938.js";
import { u as useNotyf } from "./useNotyf.c1050c77.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { t as toFormValidator, m as mod } from "./index.1fbd2b5e.js";
import { f as updateDatosDeportista, h as getPaises, g as getDatosDeportista, i as getCiudades } from "./deportista.87466242.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
import "./config.165bca36.js";
import "./general.34b73030.js";
import "./main.06195782.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { class: "form-head-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n General"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edita la informac\xEDon general de tu cuenta")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Guardar cambios ");
const _hoisted_8 = { class: "fieldset" };
const _hoisted_9 = { class: "columns is-multiline" };
const _hoisted_10 = { class: "column is-6" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Correo ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_13 = { class: "column is-6" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" Pais Actual ");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_16 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_17 = { class: "column is-6" };
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Ciudad Actual ");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_20 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_21 = { class: "column is-6" };
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" Telefono ");
const _hoisted_23 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_24 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_25 = { class: "column is-6" };
const _hoisted_26 = /* @__PURE__ */ createTextVNode(" Direcci\xF3n ");
const _hoisted_27 = {
  key: 0,
  class: "help is-danger"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const isLoading = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const paisMensaje = ref("");
    const ciudadMensaje = ref("");
    const paises = ref("");
    const ciudades = ref("");
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const activarBoton = computed(() => {
      let disabled = true;
      if (Number(datosDeportista.value.telefono) > 0 && datosDeportista.value.paisActual != "" && datosDeportista.value.paisActual != null && datosDeportista.value.ciudadActual != "" && datosDeportista.value.ciudadActual != null) {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    });
    const selectedPais = () => {
      let existe = false;
      if (datosDeportista.value.paisActual == null) {
        paisMensaje.value = '"Seleccione un pa\xEDs por favor"';
        datosDeportista.value.ciudadActual = null;
        existe = true;
      }
      return existe;
    };
    const selectedCiudad = () => {
      let existe = false;
      if (datosDeportista.value.ciudadActual == null) {
        ciudadMensaje.value = '"Seleccione una cidad por favor"';
        existe = true;
      }
      return existe;
    };
    const returnTelefono = () => {
      datosDeportista.value.telefono = datosDeportista.value.telefono.replace(/e/g, "");
      return datosDeportista.value.telefono;
    };
    const validationSchema = toFormValidator(mod.object({
      telefono: mod.string({
        required_error: "Telefono requerido",
        invalid_type_error: "Telefono tipo invalido"
      }).min(7, "El n\xFAmero de digitos minimo es 7")
    }));
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        telefono: ""
      }
    });
    const onSave = handleSubmit(async () => {
      isLoading.value = true;
      await sleep();
      await updateDatosDeportista(userSession.userId, datosDeportista.value);
      emit("update");
      notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
      isLoading.value = false;
    });
    const datosDeportista = ref({
      nombres: "",
      apellidos: "",
      email: "",
      descripcion: "",
      nameUser: "",
      identificacion: "",
      fecha_nacimiento: "",
      fecha_registro: "",
      telefono: "",
      genero: "",
      ciudad: "",
      pais: "",
      ciudadActual: "",
      paisActual: "",
      pictureName: "",
      direccion: ""
    });
    onMounted(async () => {
      paises.value = await getPaises();
      datosDeportista.value = await getDatosDeportista(userSession.userId);
    });
    watch(() => datosDeportista.value.paisActual, async (pais, prevPais) => {
      if (prevPais != "") {
        datosDeportista.value.ciudadActual = null;
      }
      ciudades.value = await getCiudades(pais);
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$3;
      const _component_VInput = _sfc_main$4;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$5;
      const _component_Multiselect = resolveComponent("Multiselect");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
        }, [
          createBaseVNode("div", _hoisted_2, [
            _hoisted_3,
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VButton, {
                  to: { name: "deportista-rutinas" },
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
        createBaseVNode("form", {
          action: "signup-form",
          class: "p-6",
          onSubmit: _cache[5] || (_cache[5] = (...args) => unref(onSave) && unref(onSave)(...args))
        }, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_11,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_12
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosDeportista.value.email,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datosDeportista.value.email = $event),
                          disabled: "",
                          type: "text",
                          placeholder: "Correo",
                          autocomplete: "correo"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_13, [
                createVNode(_component_VField, null, {
                  default: withCtx(({ id }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_14,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_15
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: datosDeportista.value.paisActual,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosDeportista.value.paisActual = $event),
                          value: datosDeportista.value.paisActual,
                          attrs: { id },
                          placeholder: "Seleccione uno",
                          options: paises.value,
                          required: ""
                        }, null, 8, ["modelValue", "value", "attrs", "options"]),
                        selectedPais() ? (openBlock(), createElementBlock("p", _hoisted_16, toDisplayString(paisMensaje.value), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_17, [
                createVNode(_component_VField, null, {
                  default: withCtx(({ id }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_18,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_19
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: datosDeportista.value.ciudadActual,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosDeportista.value.ciudadActual = $event),
                          value: datosDeportista.value.ciudadActual,
                          attrs: { id },
                          placeholder: "Seleccione uno",
                          options: ciudades.value,
                          required: ""
                        }, null, 8, ["modelValue", "value", "attrs", "options"]),
                        selectedCiudad() ? (openBlock(), createElementBlock("p", _hoisted_20, toDisplayString(ciudadMensaje.value), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_21, [
                createVNode(_component_VField, { id: "telefono" }, {
                  default: withCtx(({ field }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_22,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_23
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:phone" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosDeportista.value.telefono,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosDeportista.value.telefono = $event),
                          value: returnTelefono(),
                          type: "text",
                          placeholder: "N\xFAmero de tel\xE9fono",
                          required: "",
                          autocomplete: "off"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_24, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_25, [
                createVNode(_component_VField, { id: "direccion" }, {
                  default: withCtx(({ field }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_26
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:phone" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosDeportista.value.direccion,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosDeportista.value.direccion = $event),
                          type: "text",
                          placeholder: "N\xFAmero de tel\xE9fono",
                          required: "",
                          autocomplete: "off"
                        }, null, 8, ["modelValue"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_27, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Contacto");
    useHead({
      title: "Mis Datos"
    });
    return (_ctx, _cache) => {
      const _component_Contacto = _sfc_main$1;
      return openBlock(), createBlock(_component_Contacto);
    };
  }
});
export { _sfc_main as default };
