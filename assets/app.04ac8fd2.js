import { _ as __unplugin_components_0, a as _imports_0, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$6, e as _sfc_main$7, f as _sfc_main$8, g as _sfc_main$9, h as _sfc_main$a, i as __unplugin_components_9, j as __unplugin_components_10, k as _sfc_main$b } from "./NotificationsMobileDropdown.cb10062c.js";
import { y as defineComponent, a as useUserSession, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, f as createBlock, l as createCommentVNode, m as createTextVNode, V as _export_sfc, M as useRoute, z as ref, S as watchPostEffect, C as watch, k as normalizeClass, Q as withKeys, v as withModifiers, T as Transition, g as renderSlot, t as toDisplayString, a3 as resolveDynamicComponent } from "./index.a7fc5dec.js";
import { u as useViewWrapper } from "./viewWrapper.0c20b402.js";
import { b as block0 } from "./route-block.89f12ae7.js";
import "./VDropdown.8656c252.js";
import "./VAvatar.39b9c3a4.js";
import "./config.0fd79a34.js";
import "./useNotyf.ce7ee7f1.js";
import "./notyf.es.f84e4201.js";
const _hoisted_1$2 = { class: "mobile-subsidebar" };
const _hoisted_2$2 = { class: "inner" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Deportistas")
], -1);
const _hoisted_4$2 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$2 = /* @__PURE__ */ createTextVNode(" Solicitudes ");
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("span", null, "Solicitudes Pendientes", -1);
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_10$2 = /* @__PURE__ */ createBaseVNode("span", null, "Deportistas Aprobados", -1);
const _hoisted_11$1 = /* @__PURE__ */ createTextVNode(" Planes ");
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("span", null, "Crear Plan Gratuito", -1);
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("span", null, "Ver Planes Gratuitos", -1);
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("span", null, "Crear Semana comod\xEDn", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", null, "Ver Semana comod\xEDn", -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          _hoisted_3$2,
          createBaseVNode("ul", _hoisted_4$2, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_5$2,
                _hoisted_6$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "entrenador-deportistas-solicitudes" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_7$2,
                    _hoisted_8$2
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "entrenador-deportistas-aprobados" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$2,
                    _hoisted_10$2
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_11$1,
                _hoisted_12$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "entrenador-rutinas-crear-plan-gratuito" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_13$1,
                    _hoisted_14$1
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "entrenador-rutinas-ver-planes-gratuitos" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_15$1,
                    _hoisted_16$1
                  ]),
                  _: 1
                }),
                unref(userSession).userEspecial === "SuperEntrenador" ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "entrenador-rutinas-ver-planes-gratuitos" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_17$1,
                    _hoisted_18$1
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(userSession).userEspecial === "SuperEntrenador" ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 1,
                  to: { name: "entrenador-rutinas-ver-planes-gratuitos" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_19,
                    _hoisted_20
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
const _sfc_main$2 = {};
const _hoisted_1$1 = { class: "mobile-subsidebar" };
const _hoisted_2$1 = { class: "inner" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Menu Principal")
], -1);
const _hoisted_4$1 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode(" Personal ");
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("span", null, "Datos personales", -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("span", null, "Datos Deportivos", -1);
function _sfc_render(_ctx, _cache) {
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
              to: { name: "entrenador-profile-profile-edit" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_7$1,
                _hoisted_8$1
              ]),
              _: 1
            }),
            createVNode(_component_RouterLink, {
              to: { name: "entrenador-profile-profile-deporte" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_9$1,
                _hoisted_10$1
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
var __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
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
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_12 = [
  _hoisted_11
];
const _hoisted_13 = { class: "page-title has-text-centered" };
const _hoisted_14 = { class: "menu-toggle has-chevron" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
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
const _hoisted_16 = [
  _hoisted_15
];
const _hoisted_17 = { class: "title-wrap" };
const _hoisted_18 = { class: "title is-4" };
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
      const _component_NotificationsMobileDropdown = _sfc_main$4;
      const _component_UserProfileDropdown = _sfc_main$5;
      const _component_MobileNavbar = _sfc_main$6;
      const _component_MobileSidebar = _sfc_main$7;
      const _component_DashboardsMobileEntrenadorMenuPrincipal = __unplugin_components_4;
      const _component_DashboardsMobileEntrenadorDeportistas = _sfc_main$3;
      const _component_Sidebar = _sfc_main$8;
      const _component_DashboardsEntrenadorMenuPrincipal = resolveComponent("DashboardsEntrenadorMenuPrincipal");
      const _component_DashboardsEntrenadorDeportistas = resolveComponent("DashboardsEntrenadorDeportistas");
      const _component_LanguagesPanel = _sfc_main$9;
      const _component_Toolbar = _sfc_main$a;
      const _component_VPageContent = __unplugin_components_9;
      const _component_VPageContentWrapper = __unplugin_components_10;
      const _component_VViewWrapper = _sfc_main$b;
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
            isMobileSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DashboardsMobileEntrenadorMenuPrincipal, { key: 0 })) : isMobileSidebarOpen.value && activeMobileSubsidebar.value === "dashsolicitudes" ? (openBlock(), createBlock(_component_DashboardsMobileEntrenadorDeportistas, { key: 1 })) : createCommentVNode("", true)
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
                onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => switchSidebar("dashboard"), ["prevent"]), ["space"])),
                onClick: _cache[7] || (_cache[7] = ($event) => switchSidebar("dashboard"))
              }, _hoisted_10, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashsolicitudes" && "is-active"]),
                "data-content": "Dashsolicitudes",
                tabindex: "0",
                onKeydown: _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => switchSidebar("dashsolicitudes"), ["prevent"]), ["space"])),
                onClick: _cache[9] || (_cache[9] = ($event) => switchSidebar("dashsolicitudes"))
              }, _hoisted_12, 34)
            ])
          ]),
          _: 1
        }, 8, ["theme", "is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DashboardsEntrenadorMenuPrincipal, {
              key: 0,
              onClose: _cache[10] || (_cache[10] = ($event) => isDesktopSidebarOpen.value = false)
            })) : isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "dashsolicitudes" ? (openBlock(), createBlock(_component_DashboardsEntrenadorDeportistas, {
              key: 1,
              onClose: _cache[11] || (_cache[11] = ($event) => isDesktopSidebarOpen.value = false)
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
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("div", {
                        class: "vuero-hamburger nav-trigger push-resize",
                        tabindex: "0",
                        onKeydown: _cache[12] || (_cache[12] = withKeys(withModifiers(($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value, ["prevent"]), ["space"])),
                        onClick: _cache[13] || (_cache[13] = ($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value)
                      }, [
                        createBaseVNode("span", _hoisted_14, [
                          createBaseVNode("span", {
                            class: normalizeClass([[isDesktopSidebarOpen.value && "active"], "icon-box-toggle"])
                          }, _hoisted_16, 2)
                        ])
                      ], 32),
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("h1", _hoisted_18, toDisplayString(unref(viewWrapper).pageTitle), 1)
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
      const _component_AppLayout = _sfc_main$1;
      return openBlock(), createBlock(_component_AppLayout, null, {
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
