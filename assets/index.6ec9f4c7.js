import { _ as _sfc_main$3 } from "./VDropdown.68e8cd17.js";
import { U as _export_sfc, x as defineComponent, y as ref, m as resolveComponent, o as openBlock, g as createElementBlock, p as createVNode, w as withCtx, s as withModifiers, i as createBaseVNode, t as toDisplayString, Z as withDirectives, a2 as vModelText, k as createCommentVNode, F as Fragment, V as pushScopeId, W as popScopeId, ay as axios, b as computed, B as watch, M as onBeforeMount, C as unref, e as createBlock, E as isRef, j as normalizeClass, q as renderList, am as TransitionGroup, O as useHead } from "./index.5859d3e2.js";
import { _ as _imports_0, a as _imports_1, b as _sfc_main$8 } from "./search-1-dark.2ee0464b.js";
import { _ as _sfc_main$7 } from "./VAvatar.8dd3f809.js";
import { _ as _sfc_main$6 } from "./VPlaceholderPage.d33aedee.js";
import { _ as _sfc_main$5 } from "./Paginador.c6cbb33c.js";
import { _ as _sfc_main$4 } from "./VField.92bd822f.js";
import { a as __unplugin_components_0 } from "./VControl.f0eb3b3c.js";
import { L as LISTADEPORTISTA } from "./deportista.7005e8cc.js";
import { u as useViewWrapper } from "./viewWrapper.1dcacd6c.js";
import "./VIcon.5b901e87.js";
import "./general.651d3f13.js";
import "./main.a2946418.js";
import "./config.28ac5e58.js";
import "./VIconButton.174a0a95.js";
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
var __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-34addc5d"]]);
function pagination(filteredData, itemsPerPage = 10) {
  const currentPage = ref(1);
  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredData.value.slice(start, start + itemsPerPage);
  });
  const getPaginatedInfo = computed(() => {
    const totalPages = Math.ceil(filteredData.value.length / itemsPerPage);
    return `P\xE1gina ${currentPage.value} de ${totalPages} disponibles`;
  });
  return {
    currentPage,
    itemsPerPage,
    paginatedData,
    getPaginatedInfo
  };
}
var TablaNuevosUsuarios_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-view-toolbar" };
const _hoisted_2 = { class: "list-info" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "page-content-inner" };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_8 = { class: "list-view list-view-v1" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_11 = { class: "list-view-inner" };
const _hoisted_12 = { class: "list-view-item-inner" };
const _hoisted_13 = { class: "meta-left" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", null, "Fecha de registro", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_16 = { class: "meta-right" };
const _hoisted_17 = { class: "stats" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_19 = { class: "signup-steps" };
const _hoisted_20 = { class: "steps-container" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:user"
  })
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Mis Datos", -1);
const _hoisted_23 = [
  _hoisted_21,
  _hoisted_22
];
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:dollar-sign",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Plan", -1);
const _hoisted_26 = [
  _hoisted_24,
  _hoisted_25
];
const _hoisted_27 = { class: "inner" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Morfolog\xEDa", -1);
const _hoisted_29 = { class: "inner" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Deportes", -1);
const _hoisted_31 = { class: "inner" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Objetivo", -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "inner" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconify",
    "data-icon": "feather:check-square",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Test", -1);
const _hoisted_35 = [
  _hoisted_33,
  _hoisted_34
];
const _hoisted_36 = { class: "inner" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("span", { class: "step-label" }, "Entrenadores", -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
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
    const {
      currentPage,
      itemsPerPage,
      paginatedData: paginatedUsuario,
      getPaginatedInfo
    } = pagination(filteredData, 5);
    watch(filters, () => {
      currentPage.value = 1;
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
      const _component_Paginador = _sfc_main$5;
      const _component_VPlaceholderPage = _sfc_main$6;
      const _component_VAvatar = _sfc_main$7;
      const _component_FechaRegistro = _sfc_main$8;
      const _component_EnviarCorreo = __unplugin_components_6;
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
          unref(filteredData).length > 0 ? (openBlock(), createBlock(_component_Paginador, {
            key: 0,
            currentPage: unref(currentPage),
            "onUpdate:currentPage": _cache[1] || (_cache[1] = ($event) => isRef(currentPage) ? currentPage.value = $event : null),
            "total-items": unref(filteredData).length,
            "items-per-page": unref(itemsPerPage)
          }, null, 8, ["currentPage", "total-items", "items-per-page"])) : createCommentVNode("", true),
          deportista.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, [
                createBaseVNode("span", null, toDisplayString(unref(getPaginatedInfo).value), 1)
              ])
            ]),
            _hoisted_7
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_8, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "No pudimos encontrar ning\xFAn resultado.",
              subtitle: "Parece que no pudimos encontrar ning\xFAn resultado con el\n          t\xE9rmino de b\xFAsqueda que ha ingresado. Pruebe con diferentes t\xE9rminos de b\xFAsqueda o\n          criterios.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_9,
                _hoisted_10
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(TransitionGroup, {
                name: "list-complete",
                tag: "div"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paginatedUsuario), (item, key) => {
                    return openBlock(), createElementBlock("div", {
                      key,
                      class: "list-view-item"
                    }, [
                      createBaseVNode("div", _hoisted_12, [
                        createVNode(_component_VAvatar, {
                          picture: item.foto_url || "/src/assets/avatars/user.jpg",
                          size: "large"
                        }, null, 8, ["picture"]),
                        createBaseVNode("div", _hoisted_13, [
                          createBaseVNode("h3", null, toDisplayString(item.nombres) + " " + toDisplayString(item.apellidos), 1),
                          createBaseVNode("span", null, [
                            createVNode(_component_FechaRegistro, {
                              fecha: item.fecha_registro
                            }, null, 8, ["fecha"])
                          ]),
                          _hoisted_14,
                          createBaseVNode("span", null, [
                            _hoisted_15,
                            createBaseVNode("span", null, toDisplayString(item.ciudad), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_16, [
                          createBaseVNode("div", _hoisted_17, [
                            _hoisted_18,
                            createBaseVNode("div", _hoisted_19, [
                              createBaseVNode("div", _hoisted_20, [
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 7 && "is-active",
                                    item.bienvenida >= 7 && "is-inactive"
                                  ]])
                                }, _hoisted_23, 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 6 && "is-active",
                                    item.bienvenida >= 6 && "is-inactive"
                                  ]])
                                }, _hoisted_26, 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 5 && "is-active",
                                    item.bienvenida >= 5 && "is-inactive"
                                  ]])
                                }, [
                                  createBaseVNode("div", _hoisted_27, [
                                    createBaseVNode("i", {
                                      class: normalizeClass(["fas fa-street-view tipoMensaje-icon", [
                                        item.bienvenida < 5 && "myIconoActive",
                                        item.bienvenida >= 5 && "myIcono"
                                      ]]),
                                      "aria-hidden": "true"
                                    }, null, 2)
                                  ]),
                                  _hoisted_28
                                ], 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 4 && "is-active",
                                    item.bienvenida >= 4 && "is-inactive"
                                  ]])
                                }, [
                                  createBaseVNode("div", _hoisted_29, [
                                    createBaseVNode("i", {
                                      class: normalizeClass(["fas fa-running", [
                                        item.bienvenida < 4 && "myIconoActive",
                                        item.bienvenida >= 4 && "myIcono"
                                      ]]),
                                      "aria-hidden": "true"
                                    }, null, 2)
                                  ]),
                                  _hoisted_30
                                ], 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 3 && "is-active",
                                    item.bienvenida >= 3 && "is-inactive"
                                  ]])
                                }, [
                                  createBaseVNode("div", _hoisted_31, [
                                    createBaseVNode("i", {
                                      class: normalizeClass([[
                                        item.bienvenida < 3 && "myIconoActive",
                                        item.bienvenida >= 3 && "myIcono"
                                      ], "fas fa-trophy tipoMensaje-icon"]),
                                      "aria-hidden": "true"
                                    }, null, 2)
                                  ]),
                                  _hoisted_32
                                ], 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 2 && "is-active",
                                    item.bienvenida >= 2 && "is-inactive"
                                  ]])
                                }, _hoisted_35, 2),
                                createBaseVNode("div", {
                                  class: normalizeClass(["step-icon", [
                                    item.bienvenida < 1 && "is-active",
                                    item.bienvenida >= 1 && "is-inactive"
                                  ]])
                                }, [
                                  createBaseVNode("div", _hoisted_36, [
                                    createBaseVNode("i", {
                                      class: normalizeClass([[
                                        item.bienvenida < 1 && "myIconoActive",
                                        item.bienvenida >= 1 && "myIcono"
                                      ], "fas fa-chalkboard-teacher"]),
                                      "aria-hidden": "true"
                                    }, null, 2)
                                  ]),
                                  _hoisted_37
                                ], 2)
                              ])
                            ]),
                            _hoisted_38
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
