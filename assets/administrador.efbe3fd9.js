import { _ as __unplugin_components_0, a as _imports_0, b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$5, e as _sfc_main$6, f as _sfc_main$7, g as _sfc_main$8, h as _sfc_main$9, i as __unplugin_components_9, j as __unplugin_components_10, k as _sfc_main$a } from "./NotificationsMobileDropdown.74d2f1bb.js";
import { y as defineComponent, a as useUserSession, z as ref, M as onBeforeMount, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, N as withKeys, v as withModifiers, q as createVNode, w as withCtx, m as createTextVNode, O as useRoute, P as watchPostEffect, C as watch, k as normalizeClass, f as createBlock, l as createCommentVNode, T as Transition, Q as KeepAlive, g as renderSlot, t as toDisplayString, D as unref, R as resolveDynamicComponent } from "./index.695461b3.js";
import { e as onValue, r as ref$1, d as database } from "./config.dae7a527.js";
import { u as useViewWrapper } from "./viewWrapper.5166164c.js";
import { b as block0 } from "./route-block.7fdbc26a.js";
import "./VAvatar.652ec997.js";
import "./useNotyf.130c1122.js";
var DashboardsAdministradorMenuprincipal_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "sidebar-panel is-generic" };
const _hoisted_2$1 = { class: "subpanel-header" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "Men\xFA", -1);
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
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode(" Administraci\xF3n ");
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("span", null, "Entrenadores ", -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-flag"
}, null, -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("span", null, "Ciudades ", -1);
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-target"
}, null, -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("span", null, "Distancias", -1);
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_16$1 = /* @__PURE__ */ createTextVNode(" Imagenes de Bienvenida ");
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnir lnir-image"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "Administrar imagenes", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnir lnir-image"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", null, "Subir imagenes ", -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Reportes ");
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", null, "Reporte de Entrenadores", -1);
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
                  to: { name: "administrador-adminEntrenadores-administracionEntrenadores" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$1,
                    _hoisted_10$1
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminCiudades-administracionCiudades" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_11$1,
                    _hoisted_12$1
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminDistancias" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_13$1,
                    _hoisted_14$1
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _hoisted_15$1,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_16$1,
                _hoisted_17
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminImagenes" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_18,
                    _hoisted_19
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminImagenes-cargarImagenes" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_20,
                    _hoisted_21
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _hoisted_22,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_23,
                _hoisted_24
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminReportes" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_25,
                    _hoisted_26
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
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:home"
}, null, -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = { class: "page-title has-text-centered" };
const _hoisted_12 = { class: "menu-toggle has-chevron" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
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
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = { class: "title-wrap" };
const _hoisted_16 = { class: "title is-4" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const _component_DashboardsAdministradorMenuprincipal = _sfc_main$2;
      const _component_Sidebar = _sfc_main$7;
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
          onToggle: _cache[5] || (_cache[5] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                tabindex: "0",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "dashboard", ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = ($event) => activeMobileSubsidebar.value = "dashboard")
              }, _hoisted_6, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashsolicitudes" && "is-active"]),
                tabindex: "0",
                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "dashsolicitudes", ["prevent"]), ["space"])),
                onClick: _cache[4] || (_cache[4] = ($event) => activeMobileSubsidebar.value = "dashsolicitudes")
              }, _hoisted_8, 34)
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DashboardsAdministradorMenuprincipal, {
              key: 0,
              onClose: _cache[6] || (_cache[6] = ($event) => isDesktopSidebarOpen.value = false)
            })) : createCommentVNode("", true)
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
                onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => switchSidebar("dashboard"), ["prevent"]), ["space"])),
                onClick: _cache[8] || (_cache[8] = ($event) => switchSidebar("dashboard"))
              }, _hoisted_10, 34)
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
            (openBlock(), createBlock(KeepAlive, null, [
              isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DashboardsAdministradorMenuprincipal, {
                key: 0,
                onClose: _cache[9] || (_cache[9] = ($event) => isDesktopSidebarOpen.value = false)
              })) : createCommentVNode("", true)
            ], 1024))
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
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", {
                        class: "vuero-hamburger nav-trigger push-resize",
                        tabindex: "0",
                        onKeydown: _cache[10] || (_cache[10] = withKeys(withModifiers(($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value, ["prevent"]), ["space"])),
                        onClick: _cache[11] || (_cache[11] = ($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value)
                      }, [
                        createBaseVNode("span", _hoisted_12, [
                          createBaseVNode("span", {
                            class: normalizeClass([[isDesktopSidebarOpen.value && "active"], "icon-box-toggle"])
                          }, _hoisted_14, 2)
                        ])
                      ], 32),
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("h1", _hoisted_16, toDisplayString(unref(viewWrapper).pageTitle), 1)
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      const _component_AdministradorLayout = _sfc_main$1;
      return openBlock(), createBlock(_component_AdministradorLayout, null, {
        default: withCtx(() => [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "fade-fast",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component), {
                    key: unref(route).fullPath
                  }))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as default };