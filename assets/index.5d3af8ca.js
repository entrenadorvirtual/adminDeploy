import { _ as _sfc_main$c } from "./VBlock.e62fa9be.js";
import { _ as _sfc_main$b } from "./VIconButton.26eb1bf0.js";
import { _ as _sfc_main$a } from "./VTextarea.1b74e8e4.js";
import { _ as _sfc_main$9 } from "./VField.f8c867a3.js";
import { _ as _sfc_main$7, a as __unplugin_components_0 } from "./VControl.383acded.js";
import { _ as _sfc_main$8 } from "./VInput.d6498d97.js";
import { _ as _sfc_main$6 } from "./VAvatar.750ed0e1.js";
import { _ as _sfc_main$5 } from "./VFlex.6ebcaf24.js";
import { _ as _sfc_main$4 } from "./VFlexItem.2c1366fa.js";
import { y as defineComponent, z as ref, M as useRoute, N as onBeforeMount, p as resolveComponent, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, j as createBaseVNode, t as toDisplayString, D as unref, f as createBlock, R as RouterLink, l as createCommentVNode, F as Fragment, s as renderList, m as createTextVNode, O as _sfc_main$3, P as useHead } from "./index.5c29604d.js";
import { _ as _sfc_main$2 } from "./VModal.785b6cae.js";
import { G as GET_DATOS_GENERAL_ENTRENADOR, a as GET_DEPORTISTAS_DE_ENTRENADOR, b as GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR } from "./superentrenador.4ffd9b17.js";
import { L as LISTAR_RUTINAS_GRATUITAS_ENTRENADOR } from "./rutinas.0b8f0138.js";
import { e as onValue, r as ref$1, d as database } from "./config.f3c9bc1b.js";
import { u as useViewWrapper } from "./viewWrapper.93f5013f.js";
import "./main.1a95f887.js";
import "./deportista.ce37417f.js";
import "./general.505a96f7.js";
var admPerfilEntrenador_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["src"];
const _hoisted_2 = { class: "personal-dashboard personal-dashboard-v2" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_4 = { class: "columns is-multiline" };
const _hoisted_5 = { class: "column is-12" };
const _hoisted_6 = { class: "dashboard-header" };
const _hoisted_7 = { class: "user-meta is-dark-bordered-12" };
const _hoisted_8 = { class: "title is-4 is-narrow is-bold" };
const _hoisted_9 = { class: "light-text" };
const _hoisted_10 = { class: "user-action" };
const _hoisted_11 = { class: "title is-2 is-narrow" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, "Deportistas vinculados", -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" Ver deportistas ");
const _hoisted_14 = { class: "user-action" };
const _hoisted_15 = { class: "title is-2 is-narrow" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, "Planes gratuitos", -1);
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Ver planes gratuitos");
const _hoisted_18 = { key: 1 };
const _hoisted_19 = { class: "column is-8" };
const _hoisted_20 = { class: "form-body dashboard-card has-margin-bottom" };
const _hoisted_21 = { class: "form-fieldset" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading mb-6" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n personal"),
  /* @__PURE__ */ createBaseVNode("p")
], -1);
const _hoisted_23 = { class: "columns is-multiline" };
const _hoisted_24 = { class: "column is-6" };
const _hoisted_25 = /* @__PURE__ */ createTextVNode("Nombres");
const _hoisted_26 = { class: "column is-6" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode("Apellidos");
const _hoisted_28 = { class: "column is-6" };
const _hoisted_29 = /* @__PURE__ */ createTextVNode("Identificaci\xF3n");
const _hoisted_30 = { class: "column is-6" };
const _hoisted_31 = /* @__PURE__ */ createTextVNode("Fecha nacimiento");
const _hoisted_32 = { class: "column is-6" };
const _hoisted_33 = /* @__PURE__ */ createTextVNode("Genero");
const _hoisted_34 = { class: "form-fieldset" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading mb-6" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n de contacto")
], -1);
const _hoisted_36 = { class: "columns is-multiline" };
const _hoisted_37 = { class: "column is-12" };
const _hoisted_38 = /* @__PURE__ */ createTextVNode("Email");
const _hoisted_39 = { class: "column is-6" };
const _hoisted_40 = /* @__PURE__ */ createTextVNode("Pais");
const _hoisted_41 = { class: "column is-6" };
const _hoisted_42 = /* @__PURE__ */ createTextVNode("Ciudad");
const _hoisted_43 = { class: "column is-6" };
const _hoisted_44 = /* @__PURE__ */ createTextVNode("Tel\xE9fono");
const _hoisted_45 = { class: "column is-12" };
const _hoisted_46 = /* @__PURE__ */ createTextVNode("Direcci\xF3n");
const _hoisted_47 = { class: "form-fieldset" };
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n acad\xE9mica")
], -1);
const _hoisted_49 = { class: "columns is-multiline" };
const _hoisted_50 = { class: "column is-12" };
const _hoisted_51 = /* @__PURE__ */ createTextVNode("Perfil");
const _hoisted_52 = { class: "column is-12" };
const _hoisted_53 = /* @__PURE__ */ createTextVNode("Rese\xF1a");
const _hoisted_54 = { class: "column is-6" };
const _hoisted_55 = /* @__PURE__ */ createTextVNode("Entidad");
const _hoisted_56 = { class: "column is-6" };
const _hoisted_57 = /* @__PURE__ */ createTextVNode("Carrera");
const _hoisted_58 = { class: "column is-6" };
const _hoisted_59 = /* @__PURE__ */ createTextVNode("A\xF1o grado");
const _hoisted_60 = { class: "form-fieldset" };
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n deportiva")
], -1);
const _hoisted_62 = { class: "columns is-multiline" };
const _hoisted_63 = { class: "column is-12" };
const _hoisted_64 = /* @__PURE__ */ createTextVNode("Experiencia");
const _hoisted_65 = { class: "column is-12" };
const _hoisted_66 = /* @__PURE__ */ createTextVNode("Hitos");
const _hoisted_67 = { class: "column is-4" };
const _hoisted_68 = { class: "column" };
const _hoisted_69 = { class: "dashboard-card has-margin-bottom" };
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Documentos")
], -1);
const _hoisted_71 = { class: "active-projects" };
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_75 = { class: "column" };
const _hoisted_76 = { class: "dashboard-card has-margin-bottom" };
const _hoisted_77 = { class: "card-head" };
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Planes gratuitos", -1);
const _hoisted_79 = /* @__PURE__ */ createTextVNode("Ver todos");
const _hoisted_80 = { class: "active-projects" };
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_82 = { class: "column" };
const _hoisted_83 = { class: "dashboard-card" };
const _hoisted_84 = { class: "card-head" };
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Deportistas", -1);
const _hoisted_86 = /* @__PURE__ */ createTextVNode("Ver todos");
const _hoisted_87 = { class: "active-team" };
const _hoisted_88 = { class: "user-list" };
const _hoisted_89 = { class: "user-list-info" };
const _hoisted_90 = { class: "name dark-inverted" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const solicitudes = ref([]);
    const route = useRoute();
    const deportistas = ref([]);
    const entrenador = ref();
    const planesGratuitos = ref([]);
    onBeforeMount(async () => {
      entrenador.value = await GET_DATOS_GENERAL_ENTRENADOR(route.params.id.toString());
      planesGratuitos.value = await LISTAR_RUTINAS_GRATUITAS_ENTRENADOR(
        route.params.id.toString()
      );
      deportistas.value = await GET_DEPORTISTAS_DE_ENTRENADOR(route.params.id.toString());
      onValue(ref$1(database, "solicitudes"), async (snapshot) => {
        if (snapshot.exists()) {
          solicitudes.value = await GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR(
            route.params.id.toString(),
            snapshot.val()
          );
        } else {
          solicitudes.value = [];
        }
      });
    });
    const handleBack = () => {
      window.history.back();
    };
    const openModal = ref(false);
    const urlDocMostrar = ref();
    const cerrarModal = () => {
      openModal.value = false;
    };
    const mostrarDocumento = (documento) => {
      urlDocMostrar.value = documento;
      openModal.value = true;
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_VModal = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VFlexItem = _sfc_main$4;
      const _component_VFlex = _sfc_main$5;
      const _component_VAvatar = _sfc_main$6;
      const _component_VLabel = _sfc_main$7;
      const _component_VInput = _sfc_main$8;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$9;
      const _component_VTextarea = _sfc_main$a;
      const _component_VIconButton = _sfc_main$b;
      const _component_VBlock = _sfc_main$c;
      const _component_Tippy = resolveComponent("Tippy");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VModal, {
          title: "Documento",
          open: openModal.value,
          actions: "center",
          onClose: cerrarModal
        }, {
          content: withCtx(() => [
            createBaseVNode("iframe", {
              src: urlDocMostrar.value,
              title: "Terminos y Condiciones",
              width: "100%",
              height: "400",
              allow: "autoplay"
            }, null, 8, _hoisted_1)
          ]),
          _: 1
        }, 8, ["open"]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VFlex, {
            class: "mb-2 pegar",
            "justify-content": "space-between"
          }, {
            default: withCtx(() => [
              createVNode(_component_VFlexItem, null, {
                default: withCtx(() => [
                  createVNode(_component_VButton, {
                    color: "warning",
                    rounded: "",
                    raised: "",
                    icon: "fas fa-arrow-circle-left",
                    onClick: handleBack
                  }, {
                    default: withCtx(() => [
                      _hoisted_3
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_VAvatar, {
                  picture: (_a = entrenador.value) == null ? void 0 : _a.foto_url,
                  size: "xl"
                }, null, 8, ["picture"]),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("h3", _hoisted_8, " Entrenador, " + toDisplayString((_b = entrenador.value) == null ? void 0 : _b.nombres) + " " + toDisplayString((_c = entrenador.value) == null ? void 0 : _c.apellidos), 1),
                  createBaseVNode("p", _hoisted_9, toDisplayString((_d = entrenador.value) == null ? void 0 : _d.especialidad), 1)
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("h3", _hoisted_11, toDisplayString(solicitudes.value.length), 1),
                  _hoisted_12,
                  unref(route).params.id.toString() ? (openBlock(), createBlock(unref(RouterLink), {
                    key: 0,
                    to: {
                      name: "administrador-adminDeportistas",
                      params: { id: unref(route).params.id.toString() }
                    },
                    class: "action-link",
                    tabindex: "0"
                  }, {
                    default: withCtx(() => [
                      _hoisted_13
                    ]),
                    _: 1
                  }, 8, ["to"])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("h3", _hoisted_15, toDisplayString(planesGratuitos.value.length), 1),
                  _hoisted_16,
                  unref(route).params.id.toString() ? (openBlock(), createBlock(unref(RouterLink), {
                    key: 0,
                    to: {
                      name: "administrador-adminPlanesGratuitos",
                      params: { id: unref(route).params.id.toString() }
                    },
                    class: "action-link",
                    tabindex: "0"
                  }, {
                    default: withCtx(() => [
                      _hoisted_17
                    ]),
                    _: 1
                  }, 8, ["to"])) : (openBlock(), createElementBlock("h1", _hoisted_18, "No hay"))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
                  _hoisted_22,
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("div", _hoisted_24, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_25
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:user" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.nombres
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_26, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_27
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:user" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.apellidos
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_28, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_29
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:user" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.identificacion
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_30, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_31
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:calendar" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  placeholder: "Select a date",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.fecha_nacimiento
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_32, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_33
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:user" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.genero
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_34, [
                  _hoisted_35,
                  createBaseVNode("div", _hoisted_36, [
                    createBaseVNode("div", _hoisted_37, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_38
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:mail" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "email",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.email
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_39, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_40
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:map" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.pais
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_41, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_42
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:map-pin" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.ciudad
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_43, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_44
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:phone" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.telefono
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_45, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_46
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:map-pin" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.direccion
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_47, [
                  _hoisted_48,
                  createBaseVNode("div", _hoisted_49, [
                    createBaseVNode("div", _hoisted_50, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_51
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:user" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "email",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.perfil
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_52, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_53
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VTextarea, {
                                  rows: "4",
                                  placeholder: "About / Bio",
                                  autocomplete: "off",
                                  autocapitalize: "off",
                                  spellcheck: "true",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.rese\u00F1a
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_54, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_55
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:user" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.entidad
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_56, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_57
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:users" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.carrera
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_58, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_59
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:calendar" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "text",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.a\u00F1o_grado
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_60, [
                  _hoisted_61,
                  createBaseVNode("div", _hoisted_62, [
                    createBaseVNode("div", _hoisted_63, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_64
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:user" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VInput, {
                                  type: "email",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.experiencia
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_65, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, null, {
                            default: withCtx(() => [
                              _hoisted_66
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(_component_VTextarea, {
                                  rows: "4",
                                  placeholder: "About / Bio",
                                  autocomplete: "off",
                                  autocapitalize: "off",
                                  spellcheck: "true",
                                  disabled: "",
                                  value: (_a2 = entrenador.value) == null ? void 0 : _a2.hitos
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_67, [
              createBaseVNode("div", _hoisted_68, [
                createBaseVNode("div", _hoisted_69, [
                  _hoisted_70,
                  createBaseVNode("div", _hoisted_71, [
                    ((_e = entrenador.value) == null ? void 0 : _e.hojadevida) ? (openBlock(), createBlock(_component_VBlock, {
                      key: 0,
                      title: "Hoja de vida",
                      subtitle: "hojadevida.pdf",
                      center: ""
                    }, {
                      action: withCtx(() => [
                        createVNode(_component_VIconButton, {
                          color: "primary",
                          raised: "",
                          circle: "",
                          icon: "feather:eye",
                          onClick: _cache[0] || (_cache[0] = () => {
                            var _a2;
                            return mostrarDocumento((_a2 = entrenador.value) == null ? void 0 : _a2.hojadevida);
                          })
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    _hoisted_72,
                    ((_f = entrenador.value) == null ? void 0 : _f.estudios) ? (openBlock(), createBlock(_component_VBlock, {
                      key: 1,
                      title: "Estudios",
                      subtitle: "estudios.pdf",
                      center: ""
                    }, {
                      action: withCtx(() => [
                        createVNode(_component_VIconButton, {
                          color: "primary",
                          raised: "",
                          circle: "",
                          icon: "feather:eye",
                          onClick: _cache[1] || (_cache[1] = () => {
                            var _a2;
                            return mostrarDocumento((_a2 = entrenador.value) == null ? void 0 : _a2.estudios);
                          })
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    _hoisted_73,
                    ((_g = entrenador.value) == null ? void 0 : _g.cedula) ? (openBlock(), createBlock(_component_VBlock, {
                      key: 2,
                      title: "C\xE9dula",
                      subtitle: "cedula.pdf",
                      center: ""
                    }, {
                      action: withCtx(() => [
                        createVNode(_component_VIconButton, {
                          color: "primary",
                          raised: "",
                          circle: "",
                          icon: "feather:eye",
                          onClick: _cache[2] || (_cache[2] = () => {
                            var _a2;
                            return mostrarDocumento((_a2 = entrenador.value) == null ? void 0 : _a2.cedula);
                          })
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    _hoisted_74,
                    ((_h = entrenador.value) == null ? void 0 : _h.otros) ? (openBlock(), createBlock(_component_VBlock, {
                      key: 3,
                      title: "Otros",
                      subtitle: "otros.pdf",
                      center: ""
                    }, {
                      action: withCtx(() => [
                        createVNode(_component_VIconButton, {
                          color: "primary",
                          raised: "",
                          circle: "",
                          icon: "feather:eye",
                          onClick: _cache[3] || (_cache[3] = () => {
                            var _a2;
                            return mostrarDocumento((_a2 = entrenador.value) == null ? void 0 : _a2.otros);
                          })
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_75, [
                createBaseVNode("div", _hoisted_76, [
                  createBaseVNode("div", _hoisted_77, [
                    _hoisted_78,
                    unref(route).params.id.toString() ? (openBlock(), createBlock(unref(RouterLink), {
                      key: 0,
                      to: {
                        name: "superentrenador-planes-entrenador",
                        params: { id: unref(route).params.id.toString() }
                      },
                      class: "action-link",
                      tabindex: "0"
                    }, {
                      default: withCtx(() => [
                        _hoisted_79
                      ]),
                      _: 1
                    }, 8, ["to"])) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_80, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(planesGratuitos.value, (plan, index) => {
                      return openBlock(), createBlock(_component_VBlock, {
                        key: index,
                        title: plan.nombre_plan,
                        center: ""
                      }, {
                        action: withCtx(() => [
                          createVNode(_component_VIconButton, {
                            to: {
                              name: "superentrenador-plan-entrenador",
                              params: { id: plan.id }
                            },
                            color: "primary",
                            raised: "",
                            circle: "",
                            icon: "feather:eye"
                          }, null, 8, ["to"])
                        ]),
                        _: 2
                      }, 1032, ["title"]);
                    }), 128)),
                    _hoisted_81
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_82, [
                createBaseVNode("div", _hoisted_83, [
                  createBaseVNode("div", _hoisted_84, [
                    _hoisted_85,
                    unref(route).params.id.toString() ? (openBlock(), createBlock(unref(RouterLink), {
                      key: 0,
                      to: {
                        name: "superentrenador-deportistas-entrenador",
                        params: { id: unref(route).params.id.toString() }
                      },
                      class: "action-link",
                      tabindex: "0"
                    }, {
                      default: withCtx(() => [
                        _hoisted_86
                      ]),
                      _: 1
                    }, 8, ["to"])) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_87, [
                    createBaseVNode("ul", _hoisted_88, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(deportistas.value, (deportista, index) => {
                        return openBlock(), createElementBlock("li", { key: index }, [
                          createBaseVNode("div", null, [
                            createVNode(_component_Tippy, {
                              class: "has-help-cursor",
                              interactive: "",
                              offset: [0, 10]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VAvatar, {
                                  picture: deportista == null ? void 0 : deportista.foto
                                }, null, 8, ["picture"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createBaseVNode("div", _hoisted_89, [
                            createBaseVNode("div", _hoisted_90, toDisplayString(deportista.nombres), 1)
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Perfil");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_admPerfilEntrenador = _sfc_main$1;
      return openBlock(), createBlock(_component_admPerfilEntrenador);
    };
  }
});
export { _sfc_main as default };
