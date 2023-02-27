import { _ as __unplugin_components_0 } from "./NotificationsMobileDropdown.e58f3010.js";
import { y as defineComponent, a as useUserSession, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, M as withKeys, v as withModifiers, q as createVNode, w as withCtx, D as unref, f as createBlock, l as createCommentVNode, m as createTextVNode } from "./index.420249be.js";
var DashboardsEntrenadorDeportistas_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "sidebar-panel is-generic" };
const _hoisted_2$1 = { class: "subpanel-header" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "Deportistas", -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_4$1
];
const _hoisted_6$1 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode(" Solicitudes ");
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("span", null, "Solicitudes Pendientes", -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("span", null, "Deportistas Aprobados", -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" Planes ");
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", null, "Crear Plan Gratuito", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", null, "Ver Planes Gratuitos", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", null, "Crear Semana comod\xEDn", -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "Ver Semanas comod\xEDn", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
          }, _hoisted_5$1, 32)
        ]),
        createBaseVNode("div", _hoisted_6$1, [
          createBaseVNode("ul", null, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_7$1,
                _hoisted_8$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "entrenador-deportistas-solicitudes" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$1,
                    _hoisted_10$1
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "entrenador-deportistas-aprobados" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_11$1,
                    _hoisted_12$1
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_13,
                _hoisted_14
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "entrenador-rutinas-crear-plan-gratuito" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_15,
                    _hoisted_16
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "entrenador-rutinas-ver-planes-gratuitos" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_17,
                    _hoisted_18
                  ]),
                  _: 1
                }),
                unref(userSession).userEspecial === "SuperEntrenador" ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "entrenador-rutinas-crear-semana-comodin" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_19,
                    _hoisted_20
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(userSession).userEspecial === "SuperEntrenador" ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 1,
                  to: { name: "entrenador-rutinas-ver-semanas-comodin" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_21,
                    _hoisted_22
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
var DashboardsEntrenadorMenuPrincipal_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "sidebar-panel is-generic" };
const _hoisted_2 = { class: "subpanel-header" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "Menu Principal", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Personal ");
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", null, "Datos personales", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", null, "Datos Deportivos", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
          }, _hoisted_5, 32)
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("ul", null, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_7,
                _hoisted_8
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "entrenador-profile-profile-edit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9,
                    _hoisted_10
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "entrenador-profile-profile-deporte" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_11,
                    _hoisted_12
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _, _sfc_main$1 as a };
