import { _ as _sfc_main$3, a as _sfc_main$5 } from "./VField.2f4065eb.js";
import { _ as __unplugin_components_2 } from "./VControl.f1021bc2.js";
import { _ as _sfc_main$4 } from "./VInput.144983c9.js";
import { y as defineComponent, a as useUserSession, z as ref, az as useWindowScroll, e as computed, A as onMounted, C as watch, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, k as normalizeClass, D as unref, q as createVNode, w as withCtx, t as toDisplayString, l as createCommentVNode, v as withModifiers, m as createTextVNode, O as _sfc_main$2, P as useHead, f as createBlock } from "./index.0f5aa7c2.js";
import { u as useNotyf } from "./useNotyf.602f0974.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { m as getPaises, d as getDatosDeportista, n as getCiudades, l as updateDatosDeportista } from "./deportista.892d7693.js";
import { u as useViewWrapper } from "./viewWrapper.218364e8.js";
import "./notyf.es.f84e4201.js";
import "./config.0fd79a34.js";
import "./general.8b156443.js";
import "./main.cf1f8e20.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = ["onSubmit"];
const _hoisted_3 = { class: "form-head-inner" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Contacto"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edita la informaci\xF3n de contacto")
], -1);
const _hoisted_5 = { class: "right" };
const _hoisted_6 = { class: "buttons" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Actualizar ");
const _hoisted_9 = { class: "fieldset p-6" };
const _hoisted_10 = { class: "fieldset-heading" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Obligatorio ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_13 = { class: "columns is-multiline" };
const _hoisted_14 = { class: "column is-6" };
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" Correo ");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_17 = { class: "column is-6" };
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Pa\xEDs Actual ");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_20 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_21 = { class: "column is-6" };
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" Ciudad Actual ");
const _hoisted_23 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_24 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_25 = { class: "column is-6" };
const _hoisted_26 = /* @__PURE__ */ createTextVNode(" Tel\xE9fono ");
const _hoisted_27 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_28 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_29 = { class: "column is-6" };
const _hoisted_30 = /* @__PURE__ */ createTextVNode(" Direcci\xF3n ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const regexTelefono = /^((30|31|32)\d{8}|[1-9]\d{6})$/;
    const userSession = useUserSession();
    const isLoading = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const paises = ref("");
    const ciudades = ref("");
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
    const telefonoMensaje = '"Ingresa un tel\xE9fono v\xE1lido"';
    const paisActualMensaje = '"Seleccione un pa\xEDs, por favor"';
    const ciudadActualMensaje = '"Seleccione una ciudad, por favor"';
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const isPais = computed(() => {
      return datosDeportista.value.paisActual === "" || datosDeportista.value.paisActual === null ? false : true;
    });
    const isCiudad = computed(() => {
      return datosDeportista.value.ciudadActual === "" || datosDeportista.value.ciudadActual === null ? false : true;
    });
    const isTelefono = computed(() => {
      return regexTelefono.test(datosDeportista.value.telefono) ? true : false;
    });
    const onSave = async () => {
      isLoading.value = true;
      await sleep(750);
      if (isPais.value && isCiudad.value && isTelefono.value) {
        await updateDatosDeportista(userSession.userId, datosDeportista.value);
        notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
      } else {
        notyf.error("\xA1Sus cambios no han sido guardados!");
      }
      isLoading.value = false;
    };
    onMounted(async () => {
      paises.value = await getPaises();
      datosDeportista.value = await getDatosDeportista(userSession.userId);
    });
    watch(
      () => datosDeportista.value.paisActual,
      async (pais, prevPais) => {
        if (prevPais != "") {
          datosDeportista.value.ciudadActual = null;
        }
        ciudades.value = await getCiudades(pais);
      }
    );
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$3;
      const _component_VInput = _sfc_main$4;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$5;
      const _component_Multiselect = resolveComponent("Multiselect");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("form", {
          action: "signup-form",
          onSubmit: withModifiers(onSave, ["prevent"])
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
          }, [
            createBaseVNode("div", _hoisted_3, [
              _hoisted_4,
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_VButton, {
                    to: { name: "deportista-entrenamiento-miEntrenamiento-rutinas" },
                    icon: "lnir lnir-arrow-left rem-100",
                    light: "",
                    "dark-outlined": ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VButton, {
                    color: "primary",
                    raised: "",
                    loading: isLoading.value,
                    tabindex: "0",
                    type: "submit"
                  }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("p", null, [
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
              ])
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_15,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_16
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
                          modelValue: datosDeportista.value.paisActual,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosDeportista.value.paisActual = $event),
                          class: normalizeClass(!unref(isPais) ? "fieldRequired" : ""),
                          value: datosDeportista.value.paisActual,
                          attrs: { id },
                          placeholder: "Seleccione uno",
                          options: paises.value
                        }, null, 8, ["modelValue", "class", "value", "attrs", "options"]),
                        !unref(isPais) ? (openBlock(), createElementBlock("p", _hoisted_20, toDisplayString(paisActualMensaje))) : createCommentVNode("", true)
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
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: datosDeportista.value.ciudadActual,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosDeportista.value.ciudadActual = $event),
                          class: normalizeClass(!unref(isCiudad) ? "fieldRequired" : ""),
                          value: datosDeportista.value.ciudadActual,
                          attrs: { id },
                          placeholder: "Seleccione uno",
                          options: ciudades.value
                        }, null, 8, ["modelValue", "class", "value", "attrs", "options"]),
                        !unref(isCiudad) ? (openBlock(), createElementBlock("p", _hoisted_24, toDisplayString(ciudadActualMensaje))) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_25, [
                createVNode(_component_VField, { id: "telefono" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_26,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_27
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
                          modelModifiers: { trim: true },
                          class: normalizeClass(!unref(isTelefono) ? "fieldRequired" : ""),
                          value: datosDeportista.value.telefono,
                          type: "text",
                          placeholder: "N\xFAmero de tel\xE9fono",
                          autocomplete: "off"
                        }, null, 8, ["modelValue", "class", "value"]),
                        !unref(isTelefono) ? (openBlock(), createElementBlock("p", _hoisted_28, toDisplayString(telefonoMensaje))) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_29, [
                createVNode(_component_VField, { id: "direccion" }, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_30
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:home" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosDeportista.value.direccion,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosDeportista.value.direccion = $event),
                          type: "text",
                          placeholder: "Direcci\xF3n de residencia",
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
          ])
        ], 40, _hoisted_2)
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
