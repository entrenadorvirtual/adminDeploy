import { a as _imports_0, b as _sfc_main$2, c as _sfc_main$3, d as _sfc_main$7, e as _sfc_main$b, f as __unplugin_components_11, g as __unplugin_components_12, h as _sfc_main$c } from "./NotificationsMobileDropdown.e58f3010.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as __unplugin_components_4, c as _sfc_main$6, d as _sfc_main$a } from "./MobileNavbar.018c7bb2.js";
import { _ as _sfc_main$8, a as _sfc_main$9 } from "./DashboardsEntrenadorMenuPrincipal.0c1425fc.js";
import { y as defineComponent, N as useRoute, z as ref, O as watchPostEffect, C as watch, p as resolveComponent, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, j as createBaseVNode, k as normalizeClass, M as withKeys, v as withModifiers, f as createBlock, l as createCommentVNode, T as Transition, g as renderSlot, t as toDisplayString, D as unref, Q as resolveDynamicComponent } from "./index.420249be.js";
import { u as useViewWrapper } from "./viewWrapper.621f0af8.js";
import { b as block0 } from "./route-block.7fdbc26a.js";
import "./VAvatar.3dbb7ab0.js";
import "./config.3d78ff49.js";
import "./useNotyf.2a8b6e84.js";
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
    watch(() => route.fullPath, () => {
      isMobileSidebarOpen.value = false;
      if (props.closeOnChange && isDesktopSidebarOpen.value) {
        isDesktopSidebarOpen.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NotificationsMobileDropdown = _sfc_main$2;
      const _component_UserProfileDropdown = _sfc_main$3;
      const _component_MobileNavbar = _sfc_main$4;
      const _component_MobileSidebar = _sfc_main$5;
      const _component_DashboardsMobileEntrenadorMenuPrincipal = __unplugin_components_4;
      const _component_DashboardsMobileEntrenadorDeportistas = _sfc_main$6;
      const _component_Sidebar = _sfc_main$7;
      const _component_DashboardsEntrenadorMenuPrincipal = _sfc_main$8;
      const _component_DashboardsEntrenadorDeportistas = _sfc_main$9;
      const _component_LanguagesPanel = _sfc_main$a;
      const _component_Toolbar = _sfc_main$b;
      const _component_VPageContent = __unplugin_components_11;
      const _component_VPageContentWrapper = __unplugin_components_12;
      const _component_VViewWrapper = _sfc_main$c;
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
          "bottom-links": withCtx(() => [
            createBaseVNode("li", null, [
              createVNode(_component_UserProfileDropdown, { up: "" })
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
      const _component_EntrenadorLayout = _sfc_main$1;
      return openBlock(), createBlock(_component_EntrenadorLayout, null, {
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
