import { _ as _sfc_main$7 } from "./VModal.9b3adbf3.js";
import { _ as _sfc_main$6 } from "./VAvatar.ca051eb6.js";
import { _ as _sfc_main$5 } from "./VField.40eec146.js";
import { _ as __unplugin_components_2 } from "./VControl.c459fb91.js";
import { _ as _sfc_main$4 } from "./VInput.bb7a011d.js";
import { a as useForm, _ as _sfc_main$3 } from "./VLabel.c9d776c3.js";
import { y as defineComponent, a as useUserSession, z as ref, aq as useWindowScroll, r as reactive, e as computed, A as onMounted, C as watch, p as resolveComponent, ar as resolveDirective, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, M as withKeys, v as withModifiers, k as normalizeClass, a1 as withDirectives, t as toDisplayString, l as createCommentVNode, x as mergeProps, as as toHandlers, m as createTextVNode, Y as _sfc_main$2, a5 as useHead, f as createBlock } from "./index.3437b938.js";
import { u as useNotyf } from "./useNotyf.c1050c77.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { t as toFormValidator, m as mod } from "./index.1fbd2b5e.js";
import { a as addPicture, p as preview } from "./managePictures.7b2a6d60.js";
import { f as updateDatosDeportista, h as getPaises, g as getDatosDeportista, i as getCiudades } from "./deportista.87466242.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
import "./config.165bca36.js";
import "./main.06195782.js";
import "./general.34b73030.js";
var Personales_vue_vue_type_style_index_0_lang = "";
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
const _hoisted_9 = { class: "fieldset-heading" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Foto de perfil ");
const _hoisted_11 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", null, "La foto de perfil ayuda a que otras personas te reconozcan", -1);
const _hoisted_15 = { class: "picture-selector" };
const _hoisted_16 = { class: "image-container" };
const _hoisted_17 = ["src"];
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_19 = [
  _hoisted_18
];
const _hoisted_20 = { class: "fieldset" };
const _hoisted_21 = { class: "fieldset-heading" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n Personal", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", null, "Otras personas quieren conocerte m\xE1s", -1);
const _hoisted_24 = /* @__PURE__ */ createTextVNode("Obligatorio ");
const _hoisted_25 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_26 = { class: "columns is-multiline" };
const _hoisted_27 = { class: "column is-4" };
const _hoisted_28 = /* @__PURE__ */ createTextVNode(" Nombres ");
const _hoisted_29 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_30 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_31 = { class: "column is-4" };
const _hoisted_32 = /* @__PURE__ */ createTextVNode(" Apellidos ");
const _hoisted_33 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_34 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_35 = { class: "column is-4" };
const _hoisted_36 = /* @__PURE__ */ createTextVNode("Documento de identificaci\xF3n ");
const _hoisted_37 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_38 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_40 = [
  _hoisted_39
];
const _hoisted_41 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_42 = { class: "column is-4" };
const _hoisted_43 = /* @__PURE__ */ createTextVNode(" Genero ");
const _hoisted_44 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_45 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_46 = { class: "column is-4" };
const _hoisted_47 = /* @__PURE__ */ createTextVNode(" Pais ");
const _hoisted_48 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_49 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_50 = { class: "column is-4" };
const _hoisted_51 = /* @__PURE__ */ createTextVNode(" Ciudad ");
const _hoisted_52 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_53 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_54 = { class: "column is-4" };
const _hoisted_55 = /* @__PURE__ */ createTextVNode(" Fecha de nacimiento ");
const _hoisted_56 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_57 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_59 = [
  _hoisted_58
];
const _hoisted_60 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_61 = { class: "has-text-centered" };
const _hoisted_62 = { class: "upload-demo-wrap" };
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("wbr", null, null, -1);
const _hoisted_64 = { class: "file" };
const _hoisted_65 = { class: "file-label" };
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("span", { class: "file-cta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "file-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-cloud-upload-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "file-label" }, " Choose a file\u2026 ")
], -1);
const _hoisted_67 = /* @__PURE__ */ createTextVNode(" Confirm ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const notif = useNotyf();
    const isLoading = ref(false);
    const uploadModalOpen = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const generoMensaje = ref("");
    const paisMensaje = ref("");
    const ciudadMensaje = ref("");
    const nacimientoMensaje = ref("");
    const paises = ref("");
    const ciudades = ref("");
    const fechaM = ref("");
    let imagen = reactive({
      accept: false,
      message: "",
      dataUrl: null
    });
    const imgProfile = reactive({
      picture: ""
    });
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const closeModal = () => {
      if (imagen.dataUrl) {
        console.log("preview en acas");
        const img = document.getElementById("ImageUser");
        if (img) {
          img.setAttribute("src", imagen.dataUrl);
          console.log("cargar nueva imgaen preview");
        }
      }
      uploadModalOpen.value = false;
    };
    const previewImage = async (event) => {
      const prevImagen = await preview(event);
      imgProfile.picture = prevImagen.file;
      if (prevImagen.accept) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async (e) => {
          imagen.dataUrl = e.target.result;
          imagen.message = prevImagen.message;
          imagen.accept = prevImagen.accept;
        };
      } else {
        imagen.accept = false;
        imagen.message = "";
        imagen.dataUrl = null;
        notif.error("La extension de archivo o tama\xF1o no cumple con los requisitos");
      }
    };
    const activarBoton = computed(() => {
      let disabled = true;
      if (Number(datosDeportista.value.identificacion) > 0 && datosDeportista.value.pais != "" && datosDeportista.value.pais != null && datosDeportista.value.genero != "" && datosDeportista.value.genero != null && datosDeportista.value.ciudad != "" && datosDeportista.value.ciudad != null && datosDeportista.value.fecha_nacimiento != null) {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    });
    const maxDate = async () => {
      const fecha = await new Date();
      const year = fecha.getFullYear() - 13;
      const mes = fecha.getMonth() + 1;
      const dia = fecha.getDate();
      const fechaMaxima = await new Date(mes + " " + dia + " " + year);
      return fechaMaxima;
    };
    const selectedGender = () => {
      let existe = false;
      if (datosDeportista.value.genero == null) {
        generoMensaje.value = '"Seleccione un genero por favor"';
        existe = true;
      }
      return existe;
    };
    const selectedNacimiento = () => {
      let existe = false;
      if (datosDeportista.value.fecha_nacimiento == null) {
        nacimientoMensaje.value = "Selecciona una fecha de nacimiento";
        existe = true;
      }
      return existe;
    };
    const selectedPais = () => {
      let existe = false;
      if (datosDeportista.value.pais == null) {
        paisMensaje.value = '"Seleccione un pa\xEDs por favor"';
        datosDeportista.value.ciudad = null;
        existe = true;
      }
      return existe;
    };
    const selectedCiudad = () => {
      let existe = false;
      if (datosDeportista.value.ciudad == null) {
        ciudadMensaje.value = '"Seleccione una cidad por favor"';
        existe = true;
      }
      return existe;
    };
    const returnIdentificacion = () => {
      datosDeportista.value.identificacion = datosDeportista.value.identificacion.replace(/e/g, "");
      return datosDeportista.value.identificacion;
    };
    const returnNombre = () => {
      datosDeportista.value.nombres = datosDeportista.value.nombres.replace(/[0-9]/g, "");
      return datosDeportista.value.nombres;
    };
    const returnApellido = () => {
      datosDeportista.value.apellidos = datosDeportista.value.apellidos.replace(/[0-9]/gi, "");
      return datosDeportista.value.apellidos;
    };
    const validationSchema = toFormValidator(mod.object({
      nombres: mod.string({
        required_error: "Nombres requeridos",
        invalid_type_error: "Caracteres invalidos"
      }).min(3, "Minimo tres caracteres"),
      apellidos: mod.string({
        required_error: "Apellidos requeridos",
        invalid_type_error: "Caracteres invalidos"
      }).min(3, "Minimo tres caracteres"),
      identificacion: mod.string({
        required_error: "Identificaci\xF3n requerida",
        invalid_type_error: "Identificaci\xF3n tipo invalido"
      }).min(8, "El n\xFAmero de digitos minimo es 8")
    }));
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        identificacion: ""
      }
    });
    const onSave = handleSubmit(async () => {
      isLoading.value = true;
      await sleep();
      await updateDatosDeportista(userSession.userId, datosDeportista.value);
      if (imgProfile.picture) {
        addPicture(imgProfile.picture, userSession.userId);
      }
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
      pictureName: ""
    });
    onMounted(async () => {
      fechaM.value = await maxDate();
      paises.value = await getPaises();
      datosDeportista.value = await getDatosDeportista(userSession.userId);
    });
    watch(() => datosDeportista.value.pais, async (pais, prevPais) => {
      if (prevPais != "") {
        datosDeportista.value.ciudad = null;
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
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_VAvatar = _sfc_main$6;
      const _component_VModal = _sfc_main$7;
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
          onSubmit: _cache[9] || (_cache[9] = (...args) => unref(onSave) && unref(onSave)(...args))
        }, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("h4", null, [
                _hoisted_10,
                withDirectives((openBlock(), createElementBlock("span", _hoisted_11, _hoisted_13)), [
                  [
                    _directive_tooltip,
                    "Maximo 2MB, formato jpg, png",
                    void 0,
                    {
                      primary: true,
                      bubble: true
                    }
                  ]
                ])
              ]),
              _hoisted_14
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("img", {
                  id: "ImageUser",
                  src: unref(userSession).imagenUrl,
                  alt: ""
                }, null, 8, _hoisted_17),
                createBaseVNode("div", {
                  class: "upload-button",
                  role: "button",
                  tabindex: "0",
                  onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => uploadModalOpen.value = true, ["prevent"]), ["space"])),
                  onClick: _cache[1] || (_cache[1] = ($event) => uploadModalOpen.value = true)
                }, _hoisted_19, 32)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("div", _hoisted_21, [
              _hoisted_22,
              _hoisted_23,
              createBaseVNode("p", null, [
                _hoisted_24,
                createVNode(_component_font, {
                  size: "4",
                  color: "red"
                }, {
                  default: withCtx(() => [
                    _hoisted_25
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createVNode(_component_VField, { id: "nombres" }, {
                  default: withCtx(({ field }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_28,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_29
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosDeportista.value.nombres,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosDeportista.value.nombres = $event),
                          value: returnNombre(),
                          disabled: "",
                          type: "text",
                          placeholder: "Nombres",
                          autocomplete: "given-name"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_30, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_31, [
                createVNode(_component_VField, { id: "apellidos" }, {
                  default: withCtx(({ field }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_32,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_33
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosDeportista.value.apellidos,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosDeportista.value.apellidos = $event),
                          value: returnApellido(),
                          type: "text",
                          disabled: "",
                          placeholder: "Apellidos",
                          autocomplete: "family-name"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_34, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_35, [
                createVNode(_component_VField, { id: "identificacion" }, {
                  default: withCtx(({ field }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_36,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_37
                          ]),
                          _: 1
                        }),
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_38, _hoisted_40)), [
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
                          modelValue: datosDeportista.value.identificacion,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosDeportista.value.identificacion = $event),
                          value: returnIdentificacion(),
                          type: "text",
                          placeholder: "N\xFAmero de Identificaci\xF3n",
                          required: "",
                          autocomplete: "off"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_41, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_42, [
                createVNode(_component_VField, null, {
                  default: withCtx(({ id }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_43,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_44
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: datosDeportista.value.genero,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => datosDeportista.value.genero = $event),
                          value: datosDeportista.value.genero,
                          attrs: { id },
                          placeholder: "Seleccione uno",
                          options: ["Masculino", "Femenino"],
                          required: ""
                        }, null, 8, ["modelValue", "value", "attrs"]),
                        selectedGender() ? (openBlock(), createElementBlock("p", _hoisted_45, toDisplayString(generoMensaje.value), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_46, [
                createVNode(_component_VField, null, {
                  default: withCtx(({ id }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_47,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_48
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: datosDeportista.value.pais,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => datosDeportista.value.pais = $event),
                          value: datosDeportista.value.pais,
                          attrs: { id },
                          placeholder: "Seleccione uno",
                          options: paises.value,
                          required: ""
                        }, null, 8, ["modelValue", "value", "attrs", "options"]),
                        selectedPais() ? (openBlock(), createElementBlock("p", _hoisted_49, toDisplayString(paisMensaje.value), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_50, [
                createVNode(_component_VField, null, {
                  default: withCtx(({ id }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_51,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_52
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: datosDeportista.value.ciudad,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => datosDeportista.value.ciudad = $event),
                          value: datosDeportista.value.ciudad,
                          attrs: { id },
                          placeholder: "Seleccione uno",
                          options: ciudades.value,
                          required: ""
                        }, null, 8, ["modelValue", "value", "attrs", "options"]),
                        selectedCiudad() ? (openBlock(), createElementBlock("p", _hoisted_53, toDisplayString(ciudadMensaje.value), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_54, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_55,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_56
                          ]),
                          _: 1
                        }),
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_57, _hoisted_59)), [
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
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_VDatePicker, {
                              modelValue: datosDeportista.value.fecha_nacimiento,
                              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => datosDeportista.value.fecha_nacimiento = $event),
                              "max-date": fechaM.value,
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
                        })
                      ]),
                      _: 1
                    }),
                    selectedNacimiento() ? (openBlock(), createElementBlock("p", _hoisted_60, toDisplayString(nacimientoMensaje.value), 1)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ], 32),
        createVNode(_component_VModal, {
          open: uploadModalOpen.value,
          title: "Sube tu foto",
          actions: "center",
          size: "small",
          onClose: _cache[13] || (_cache[13] = ($event) => uploadModalOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_61, [
              createBaseVNode("div", _hoisted_62, [
                createVNode(_component_VAvatar, {
                  size: "big",
                  picture: unref(imagen).dataUrl
                }, null, 8, ["picture"])
              ])
            ])
          ]),
          cancel: withCtx(() => [
            _hoisted_63
          ]),
          action: withCtx(() => [
            createVNode(_component_VField, { grouped: "" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_64, [
                      createBaseVNode("label", _hoisted_65, [
                        createBaseVNode("input", {
                          class: "file-input",
                          type: "file",
                          name: "resume",
                          onChange: _cache[10] || (_cache[10] = ($event) => previewImage($event))
                        }, null, 32),
                        _hoisted_66
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VButton, {
                      class: "upload-result",
                      size: "big",
                      outlined: "",
                      onKeydown: _cache[11] || (_cache[11] = withKeys(withModifiers(($event) => uploadModalOpen.value = false, ["prevent"]), ["space"])),
                      onClick: _cache[12] || (_cache[12] = ($event) => closeModal())
                    }, {
                      default: withCtx(() => [
                        _hoisted_67
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
          _: 1
        }, 8, ["open"])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Personales");
    useHead({
      title: "Mis Datos"
    });
    return (_ctx, _cache) => {
      const _component_Personales = _sfc_main$1;
      return openBlock(), createBlock(_component_Personales);
    };
  }
});
export { _sfc_main as default };
