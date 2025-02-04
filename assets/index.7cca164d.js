import { _ as _sfc_main$3 } from "./VDropdown.8f5160b9.js";
import { V as _export_sfc, y as defineComponent, z as ref, p as resolveComponent, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, v as withModifiers, j as createBaseVNode, t as toDisplayString, Y as withDirectives, a1 as vModelText, l as createCommentVNode, F as Fragment, ae as pushScopeId, af as popScopeId, az as axios, e as computed, N as onBeforeMount, D as unref, k as normalizeClass, s as renderList, an as TransitionGroup, P as useHead, f as createBlock } from "./index.a70cc630.js";
import { _ as _imports_0, a as _imports_1, b as _sfc_main$7 } from "./search-1-dark.6ae89a4e.js";
import { _ as _sfc_main$6 } from "./VAvatar.9f06558c.js";
import { _ as _sfc_main$5 } from "./VPlaceholderPage.67b60f24.js";
import { a as __unplugin_components_0, b as _sfc_main$4 } from "./VControl.98993b64.js";
import { L as LISTADEPORTISTA } from "./deportista.856eeeab.js";
import { u as useViewWrapper } from "./viewWrapper.6b9a60ad.js";
import "./VIcon.e7104a19.js";
import "./general.502a4700.js";
import "./main.9958a253.js";
import "./config.f3ec4a91.js";
var EnviarCorreo_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-34addc5d"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-envelope"
  })
], -1));
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Enviar correo")
], -1));
const _hoisted_3$1 = {
  key: 0,
  class: "modal is-active"
};
const _hoisted_4$1 = { class: "modal-card" };
const _hoisted_5$1 = { class: "modal-card-head" };
const _hoisted_6$1 = { class: "modal-card-title" };
const _hoisted_7$1 = { class: "modal-card-body" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    email: String
  },
  setup(__props) {
    const props = __props;
    const API_URL = "http://localhost:3001/send-email";
    const isModalOpen = ref(false);
    const correo = ref("");
    const openModal = () => {
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
      correo.value = "";
    };
    const enviarCorreo = async () => {
      try {
        const response = await axios.post(API_URL, {
          from: "Acme <onboarding@resend.dev>",
          to: props.email,
          subject: "Nuevo mensaje desde la aplicaci\xF3n",
          html: `<p>${correo.value}</p>`
        });
        if (response.status === 200) {
          alert("\xA1Correo enviado con \xE9xito!");
          closeModal();
        } else {
          console.error("Error al enviar el correo:", response.data);
          alert("Hubo un problema al enviar el correo. Por favor, int\xE9ntalo de nuevo.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error al enviar el correo. Por favor, int\xE9ntalo de nuevo.");
      }
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VDropdown = _sfc_main$3;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VDropdown, {
          icon: "feather:more-vertical",
          right: ""
        }, {
          content: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: {},
              role: "menuitem",
              class: "dropdown-item is-media custom-link",
              onClick: withModifiers(openModal, ["prevent"])
            }, {
              default: withCtx(() => [
                _hoisted_1$1,
                _hoisted_2$1
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        }),
        isModalOpen.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          createBaseVNode("div", {
            class: "modal-background",
            onClick: closeModal
          }),
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("header", _hoisted_5$1, [
              createBaseVNode("p", _hoisted_6$1, "Redactar Correo: " + toDisplayString(__props.email), 1),
              createBaseVNode("button", {
                class: "delete",
                "aria-label": "close",
                onClick: closeModal
              })
            ]),
            createBaseVNode("section", _hoisted_7$1, [
              withDirectives(createBaseVNode("textarea", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => correo.value = $event),
                class: "textarea",
                placeholder: "Escribe tu mensaje aqu\xED..."
              }, null, 512), [
                [vModelText, correo.value]
              ])
            ]),
            createBaseVNode("footer", { class: "modal-card-foot" }, [
              createBaseVNode("button", {
                class: "button is-success",
                onClick: enviarCorreo
              }, "Enviar"),
              createBaseVNode("button", {
                class: "button",
                onClick: closeModal
              }, "Cancelar")
            ])
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-34addc5d"]]);
var TablaNuevosUsuarios_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-view-toolbar" };
const _hoisted_2 = { class: "list-info" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "page-content-inner" };
const _hoisted_6 = { class: "list-view list-view-v1" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_9 = { class: "list-view-inner" };
const _hoisted_10 = { class: "list-view-item-inner" };
const _hoisted_11 = { class: "meta-left" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", null, "Fecha registro", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_14 = { class: "meta-right" };
const _hoisted_15 = { class: "stats" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_17 = { class: "signup-steps" };
const _hoisted_18 = { class: "steps-container" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:user"
  })
], -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Mis Datos", -1);
const _hoisted_21 = [
  _hoisted_19,
  _hoisted_20
];
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:dollar-sign",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Plan", -1);
const _hoisted_24 = [
  _hoisted_22,
  _hoisted_23
];
const _hoisted_25 = { class: "inner" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Morfolog\xEDa", -1);
const _hoisted_27 = { class: "inner" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Deportes", -1);
const _hoisted_29 = { class: "inner" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Objetivo", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:check-square",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Test", -1);
const _hoisted_33 = [
  _hoisted_31,
  _hoisted_32
];
const _hoisted_34 = { class: "inner" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Entrenadores", -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const deportista = ref([]);
    const filteredData = computed(() => {
      if (!filters.value) {
        return deportista.value;
      } else {
        return deportista.value.filter((item) => {
          return item.nombres.match(new RegExp(filters.value, "i")) || item.apellidos.match(new RegExp(filters.value, "i")) || item.bienvenida.toString().match(new RegExp(filters.value, "i"));
        });
      }
    });
    onBeforeMount(async () => {
      const data = await LISTADEPORTISTA();
      if (Array.isArray(data)) {
        deportista.value = data;
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$4;
      const _component_VPlaceholderPage = _sfc_main$5;
      const _component_VAvatar = _sfc_main$6;
      const _component_FechaRegistro = _sfc_main$7;
      const _component_EnviarCorreo = __unplugin_components_5;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
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
          }),
          createBaseVNode("div", _hoisted_2, [
            unref(filteredData).length === 1 ? (openBlock(), createElementBlock("span", _hoisted_3, "1 Deportista")) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(filteredData).length) + " Deportistas", 1))
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "No pudimos encontrar ning\xFAn resultado.",
              subtitle: "Parece que no pudimos encontrar ning\xFAn resultado con el\n          t\xE9rmino de b\xFAsqueda que ha ingresado. Pruebe con diferentes t\xE9rminos de b\xFAsqueda o\n          criterios.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_7,
                _hoisted_8
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", _hoisted_9, [
              createVNode(TransitionGroup, {
                name: "list-complete",
                tag: "div"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item, key) => {
                    return openBlock(), createElementBlock("div", {
                      key,
                      class: "list-view-item"
                    }, [
                      createBaseVNode("div", _hoisted_10, [
                        createVNode(_component_VAvatar, {
                          picture: item.foto_url || "/src/assets/avatars/user.jpg",
                          size: "large"
                        }, null, 8, ["picture"]),
                        createBaseVNode("div", _hoisted_11, [
                          createBaseVNode("h3", null, toDisplayString(item.nombres) + " " + toDisplayString(item.apellidos), 1),
                          createBaseVNode("span", null, [
                            createVNode(_component_FechaRegistro, {
                              fecha: item.fecha_registro
                            }, null, 8, ["fecha"])
                          ]),
                          _hoisted_12,
                          createBaseVNode("span", null, [
                            _hoisted_13,
                            createBaseVNode("span", null, toDisplayString(item.ciudad), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_14, [
                          createBaseVNode("div", _hoisted_15, [
                            _hoisted_16,
                            createBaseVNode("div", _hoisted_17, [
                              createBaseVNode("div", _hoisted_18, [
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 7 && "is-active",
                                    item.bienvenida >= 7 && "is-inactive"
                                  ]])
                                }, _hoisted_21, 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 6 && "is-active",
                                    item.bienvenida >= 6 && "is-inactive"
                                  ]])
                                }, _hoisted_24, 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 5 && "is-active",
                                    item.bienvenida >= 5 && "is-inactive"
                                  ]])
                                }, [
                                  createBaseVNode("div", _hoisted_25, [
                                    createBaseVNode("i", {
                                      class: normalizeClass(["fas fa-street-view tipoMensaje-icon", [
                                        item.bienvenida < 5 && "myIconoActive",
                                        item.bienvenida >= 5 && "myIcono"
                                      ]]),
                                      "aria-hidden": "true"
                                    }, null, 2)
                                  ]),
                                  _hoisted_26
                                ], 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 4 && "is-active",
                                    item.bienvenida >= 4 && "is-inactive"
                                  ]])
                                }, [
                                  createBaseVNode("div", _hoisted_27, [
                                    createBaseVNode("i", {
                                      class: normalizeClass(["fas fa-running", [
                                        item.bienvenida < 4 && "myIconoActive",
                                        item.bienvenida >= 4 && "myIcono"
                                      ]]),
                                      "aria-hidden": "true"
                                    }, null, 2)
                                  ]),
                                  _hoisted_28
                                ], 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 3 && "is-active",
                                    item.bienvenida >= 3 && "is-inactive"
                                  ]])
                                }, [
                                  createBaseVNode("div", _hoisted_29, [
                                    createBaseVNode("i", {
                                      class: normalizeClass([[
                                        item.bienvenida < 3 && "myIconoActive",
                                        item.bienvenida >= 3 && "myIcono"
                                      ], "fas fa-trophy tipoMensaje-icon"]),
                                      "aria-hidden": "true"
                                    }, null, 2)
                                  ]),
                                  _hoisted_30
                                ], 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 2 && "is-active",
                                    item.bienvenida >= 2 && "is-inactive"
                                  ]])
                                }, _hoisted_33, 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 1 && "is-active",
                                    item.bienvenida >= 1 && "is-inactive"
                                  ]])
                                }, [
                                  createBaseVNode("div", _hoisted_34, [
                                    createBaseVNode("i", {
                                      class: normalizeClass([[
                                        item.bienvenida < 1 && "myIconoActive",
                                        item.bienvenida >= 1 && "myIcono"
                                      ], "fas fa-chalkboard-teacher"]),
                                      "aria-hidden": "true"
                                    }, null, 2)
                                  ]),
                                  _hoisted_35
                                ], 2)
                              ])
                            ]),
                            _hoisted_36
                          ]),
                          createVNode(_component_EnviarCorreo, {
                            email: item.email
                          }, null, 8, ["email"])
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
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
    viewWrapper.setPageTitle("Reporte Nuevos Usuarios");
    useHead({
      title: "Reporte Nuevos Usuarios"
    });
    return (_ctx, _cache) => {
      const _component_TablaNuevosUsuarios = _sfc_main$1;
      return openBlock(), createBlock(_component_TablaNuevosUsuarios);
    };
  }
});
export { _sfc_main as default };
