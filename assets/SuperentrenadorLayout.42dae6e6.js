import { _ as _imports_0, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$6, e as _sfc_main$7, f as _sfc_main$8, g as _sfc_main$9, h as __unplugin_components_9, i as __unplugin_components_10, j as _sfc_main$a } from "./NotificationsMobileDropdown.ea0c9d6f.js";
import { _ as __unplugin_components_0 } from "./VCollapseLinks.7347956c.js";
import { y as defineComponent, a as useUserSession, z as ref, N as onBeforeMount, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, Q as withKeys, v as withModifiers, q as createVNode, w as withCtx, m as createTextVNode, M as useRoute, S as watchPostEffect, C as watch, k as normalizeClass, f as createBlock, l as createCommentVNode, T as Transition, g as renderSlot, t as toDisplayString, D as unref } from "./index.5c29604d.js";
import { e as onValue, r as ref$1, d as database } from "./config.f3c9bc1b.js";
import { u as useViewWrapper } from "./viewWrapper.93f5013f.js";
var DashboardsSuperEntrenador_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "sidebar-panel is-generic" };
const _hoisted_2$2 = { class: "subpanel-header" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "Men\xFA", -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_4$2
];
const _hoisted_6$2 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$2 = /* @__PURE__ */ createTextVNode(" Entrenadores ");
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-flag"
}, null, -1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("span", null, "Visualizar entrenadores", -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_12$1 = /* @__PURE__ */ createTextVNode(" Rutinas Comodin ");
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-flag"
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", null, "Administrar rutinas", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const bienvenida = ref(7);
    onBeforeMount(async () => {
      onValue(ref$1(database, "users/" + userSession.userId + "/bienvenida"), (snapshot) => {
        if (snapshot.exists()) {
          bienvenida.value = snapshot.val();
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          _hoisted_3$2,
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
          }, _hoisted_5$2, 32)
        ]),
        createBaseVNode("div", _hoisted_6$2, [
          createBaseVNode("ul", null, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_7$2,
                _hoisted_8$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "superentrenador-entrenadores" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$2,
                    _hoisted_10$1
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _hoisted_11$1
          ]),
          createBaseVNode("ul", null, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_12$1,
                _hoisted_13$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "superentrenador-rutinasComodin" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_14$1,
                    _hoisted_15
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _hoisted_16
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "mobile-subsidebar" };
const _hoisted_2$1 = { class: "inner" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Entrenadores")
], -1);
const _hoisted_4$1 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode(" Entrenadores ");
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-flag"
}, null, -1);
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("span", null, "Visualizar entrenadores", -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    const bienvenida = ref(7);
    onBeforeMount(async () => {
      onValue(ref$1(database, "users/" + userSession.userId + "/bienvenida"), (snapshot) => {
        if (snapshot.exists()) {
          bienvenida.value = snapshot.val();
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("ul", _hoisted_4$1, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_5$1,
                _hoisted_6$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "superentrenador-entrenadores" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_7$1,
                    _hoisted_8$1
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _hoisted_9$1
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "sidebar-layout" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_4 = { class: "brand-end" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:home"
}, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:home"
}, null, -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = { class: "page-title has-text-centered" };
const _hoisted_10 = { class: "menu-toggle has-chevron" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-top"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-center"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-bottom"
  })
], -1);
const _hoisted_12 = [
  _hoisted_11
];
const _hoisted_13 = { class: "title-wrap" };
const _hoisted_14 = { class: "title is-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "default" },
    defaultSidebar: { default: "dashboard" },
    closeOnChange: { type: Boolean },
    openOnMounted: { type: Boolean },
    nowrap: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const viewWrapper = useViewWrapper();
    const route = useRoute();
    const isMobileSidebarOpen = ref(false);
    const isDesktopSidebarOpen = ref(props.openOnMounted);
    const activeMobileSubsidebar = ref(props.defaultSidebar);
    function switchSidebar(id) {
      if (id === activeMobileSubsidebar.value) {
        isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value;
      } else {
        isDesktopSidebarOpen.value = true;
        activeMobileSubsidebar.value = id;
      }
    }
    watchPostEffect(() => {
      var _a;
      viewWrapper.setPushed((_a = isDesktopSidebarOpen.value) != null ? _a : false);
    });
    watch(
      () => route.fullPath,
      () => {
        isMobileSidebarOpen.value = false;
        if (props.closeOnChange && isDesktopSidebarOpen.value) {
          isDesktopSidebarOpen.value = false;
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NotificationsMobileDropdown = _sfc_main$3;
      const _component_UserProfileDropdown = _sfc_main$4;
      const _component_MobileNavbar = _sfc_main$5;
      const _component_MobileSidebar = _sfc_main$6;
      const _component_DashMobileSuperEntrenador = _sfc_main$1;
      const _component_Sidebar = _sfc_main$7;
      const _component_DashboardsSuperEntrenador = _sfc_main$2;
      const _component_LanguagesPanel = _sfc_main$8;
      const _component_Toolbar = _sfc_main$9;
      const _component_VPageContent = __unplugin_components_9;
      const _component_VPageContentWrapper = __unplugin_components_10;
      const _component_VViewWrapper = _sfc_main$a;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_MobileNavbar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          brand: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "navbar-item is-brand"
            }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_NotificationsMobileDropdown),
              createVNode(_component_UserProfileDropdown)
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_MobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[3] || (_cache[3] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                tabindex: "0",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "dashboard", ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = ($event) => activeMobileSubsidebar.value = "dashboard")
              }, _hoisted_6, 34)
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isMobileSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DashMobileSuperEntrenador, { key: 0 })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_Sidebar, {
          theme: props.theme,
          "is-open": isDesktopSidebarOpen.value
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                "data-content": "Dashboards",
                tabindex: "0",
                onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => switchSidebar("dashboard"), ["prevent"]), ["space"])),
                onClick: _cache[5] || (_cache[5] = ($event) => switchSidebar("dashboard"))
              }, _hoisted_8, 34)
            ])
          ]),
          "bottom-links": withCtx(() => [
            createBaseVNode("li", null, [
              createVNode(_component_UserProfileDropdown, { up: "" })
            ])
          ]),
          _: 1
        }, 8, ["theme", "is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DashboardsSuperEntrenador, {
              key: 0,
              onClose: _cache[6] || (_cache[6] = ($event) => isDesktopSidebarOpen.value = false)
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_LanguagesPanel),
        createVNode(_component_VViewWrapper, null, {
          default: withCtx(() => [
            createVNode(_component_VPageContentWrapper, null, {
              default: withCtx(() => [
                props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_VPageContent, {
                  key: 1,
                  class: "is-relative"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", {
                        class: "vuero-hamburger nav-trigger push-resize",
                        tabindex: "0",
                        onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value, ["prevent"]), ["space"])),
                        onClick: _cache[8] || (_cache[8] = ($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value)
                      }, [
                        createBaseVNode("span", _hoisted_10, [
                          createBaseVNode("span", {
                            class: normalizeClass([[isDesktopSidebarOpen.value && "active"], "icon-box-toggle"])
                          }, _hoisted_12, 2)
                        ])
                      ], 32),
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("h1", _hoisted_14, toDisplayString(unref(viewWrapper).pageTitle), 1)
                      ]),
                      createVNode(_component_Toolbar, { class: "desktop-toolbar" })
                    ]),
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }))
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]);
    };
  }
});
export { _sfc_main as _ };
