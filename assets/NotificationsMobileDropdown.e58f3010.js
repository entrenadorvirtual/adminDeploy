var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { u as useViewWrapper } from "./viewWrapper.621f0af8.js";
import { y as defineComponent, o as openBlock, i as createElementBlock, g as renderSlot, k as normalizeClass, D as unref, R as _export_sfc, S as useDarkmode, j as createBaseVNode, M as withKeys, v as withModifiers, N as useRoute, z as ref, C as watch, h, T as Transition, e as computed, p as resolveComponent, q as createVNode, w as withCtx, r as reactive, U as onClickOutside, V as watchEffect, t as toDisplayString, l as createCommentVNode, f as createBlock, W as normalizeProps, X as guardReactiveProps, Y as useRouter, a as useUserSession, m as createTextVNode, Z as _sfc_main$b, $ as createStaticVNode } from "./index.420249be.js";
import { _ as _sfc_main$a, o as onceImageErrored } from "./VAvatar.3dbb7ab0.js";
import { a as auth } from "./config.3d78ff49.js";
import { u as useNotyf } from "./useNotyf.2a8b6e84.js";
var VViewWrapper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    topNav: { type: Boolean },
    full: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const viewWrapper = useViewWrapper();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["view-wrapper", [
          props.topNav && "has-top-nav",
          props.full && "view-wrapper-full",
          unref(viewWrapper).isPushed && "is-pushed-full",
          unref(viewWrapper).isPushedBlock && "is-pushed-block"
        ]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var VPageContentWrapper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = {};
const _hoisted_1$7 = { class: "page-content-wrapper" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var __unplugin_components_12 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$1]]);
var VPageContent_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {};
const _hoisted_1$6 = { class: "page-content" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var __unplugin_components_11 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render]]);
const _hoisted_1$5 = { class: "toolbar ml-auto" };
const _hoisted_2$4 = { class: "toolbar-link" };
const _hoisted_3$4 = ["checked"];
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const darkmode = useDarkmode();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("label", {
            tabindex: "0",
            class: "dark-mode ml-auto",
            onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"]))
          }, [
            createBaseVNode("input", {
              type: "checkbox",
              checked: !unref(darkmode).isDark,
              onChange: _cache[0] || (_cache[0] = (...args) => unref(darkmode).onChange && unref(darkmode).onChange(...args))
            }, null, 40, _hoisted_3$4),
            _hoisted_4$3
          ], 32)
        ]),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
var VCollapseLinks_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = defineComponent({
  props: {
    open: {
      type: [Boolean, String],
      default: void 0
    },
    collapseId: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(props, { slots, emit }) {
    var _a, _b;
    const route = useRoute();
    const hasNestedLinkActive = ref(false);
    const slotContent = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
    const currentRoute = route.name;
    slotContent.forEach((child) => {
      var _a2, _b2;
      if (((_b2 = (_a2 = child.props) == null ? void 0 : _a2.to) == null ? void 0 : _b2.name) && currentRoute === child.props.to.name) {
        hasNestedLinkActive.value = true;
      }
    });
    const isOpen = ref(Boolean(hasNestedLinkActive.value || typeof props.collapseId === "string" && props.open === props.collapseId || typeof props.collapseId === "undefined" && props.open === true));
    function toggle() {
      if (typeof props.collapseId === "string") {
        if (props.collapseId === props.open) {
          emit("update:open");
        } else {
          emit("update:open", props.collapseId);
        }
      } else {
        isOpen.value = !isOpen.value;
      }
    }
    watch(() => props.open, (val) => {
      isOpen.value = Boolean(typeof props.collapseId === "string" && unref(val) === props.collapseId || typeof props.collapseId === "undefined" && unref(val) === true);
    });
    return () => {
      var _a2, _b2, _c;
      const header = (_a2 = slots.header) == null ? void 0 : _a2.call(slots);
      const slotContent2 = (_c = (_b2 = slots.default) == null ? void 0 : _b2.call(slots)) != null ? _c : [];
      const links = slotContent2.map((child) => h("li", {}, child));
      const parentLink = h("a", {
        tabindex: 0,
        class: "parent-link",
        onClick: (e) => {
          e.preventDefault();
          toggle();
        },
        onKeydown(e) {
          if (e.code === "Space") {
            e.preventDefault();
            e.stopPropagation();
            toggle();
          }
        }
      }, header);
      const collapseWrap = h("div", { class: "collapse-wrap" }, parentLink);
      const content = isOpen.value ? h("ul", {}, links) : void 0;
      return h("li", {
        class: ["collapse-links has-children", isOpen.value && "active"]
      }, [
        collapseWrap,
        h(Transition, {
          name: "collapse-links-transition",
          mode: "out-in",
          class: "collapse-content"
        }, {
          default() {
            return content;
          }
        })
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-1f59c5a8"]]);
var _imports_0$1 = "/assets/mvt-icon.0fd5cf72.png";
var Sidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "sidebar-brand" };
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0$1,
  alt: ""
}, null, -1);
const _hoisted_3$3 = { class: "sidebar-inner" };
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("div", { class: "naver" }, null, -1);
const _hoisted_5$2 = { class: "icon-menu has-slimscroll" };
const _hoisted_6$2 = { class: "bottom-menu" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "default" },
    isOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const themeClasses = computed(() => {
      switch (props.theme) {
        case "color":
          return "is-colored";
        case "labels":
          return "has-labels";
        case "labels-hover":
          return "has-labels has-hover-labels";
        case "float":
          return !props.isOpen ? "is-float" : "is-float is-bordered";
        case "curved":
          return !props.isOpen ? "is-curved" : "";
        case "color-curved":
          return !props.isOpen ? "is-colored is-curved" : "is-colored";
        default:
          return "";
      }
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["main-sidebar", [unref(themeClasses)]])
      }, [
        createBaseVNode("div", _hoisted_1$4, [
          createVNode(_component_RouterLink, { to: { name: "index" } }, {
            default: withCtx(() => [
              _hoisted_2$3
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3$3, [
          _hoisted_4$2,
          createBaseVNode("ul", _hoisted_5$2, [
            renderSlot(_ctx.$slots, "links")
          ]),
          createBaseVNode("ul", _hoisted_6$2, [
            renderSlot(_ctx.$slots, "bottom-links")
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$3 = ["data-icon"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    icon: null
  },
  setup(__props) {
    const props = __props;
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(":") !== -1;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        key: props.icon
      }, [
        unref(isIconify) ? (openBlock(), createElementBlock("i", {
          key: 0,
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": props.icon
        }, null, 8, _hoisted_1$3)) : (openBlock(), createElementBlock("i", {
          key: 1,
          "aria-hidden": "true",
          class: normalizeClass(props.icon)
        }, null, 2))
      ]);
    };
  }
});
function useDropdown(container) {
  const isOpen = ref(false);
  onClickOutside(container, () => {
    isOpen.value = false;
  });
  const open = () => {
    isOpen.value = true;
  };
  const close = () => {
    isOpen.value = false;
  };
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  watchEffect(() => {
    if (!container.value) {
      return;
    }
    if (isOpen.value) {
      container.value.classList.add("is-active");
    } else {
      container.value.classList.remove("is-active");
    }
  });
  return reactive({
    isOpen,
    open,
    close,
    toggle
  });
}
var VDropdown_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { key: 0 };
const _hoisted_2$2 = {
  class: "dropdown-menu",
  role: "menu"
};
const _hoisted_3$2 = { class: "dropdown-content" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: void 0 },
    color: { default: void 0 },
    icon: { default: void 0 },
    up: { type: Boolean },
    right: { type: Boolean },
    modern: { type: Boolean },
    spaced: { type: Boolean }
  },
  setup(__props, { expose }) {
    const props = __props;
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
    expose(__spreadValues({}, dropdown));
    return (_ctx, _cache) => {
      const _component_VIcon = _sfc_main$3;
      return openBlock(), createElementBlock("div", {
        ref_key: "dropdownElement",
        ref: dropdownElement,
        class: normalizeClass([[
          props.right && "is-right",
          props.up && "is-up",
          props.icon && "is-dots",
          props.modern && "is-modern",
          props.spaced && "is-spaced"
        ], "dropdown"])
      }, [
        renderSlot(_ctx.$slots, "button", normalizeProps(guardReactiveProps(unref(dropdown))), () => [
          props.icon ? (openBlock(), createElementBlock("a", {
            key: 0,
            tabindex: "0",
            class: "is-trigger dropdown-trigger",
            "aria-label": "View more actions",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers((...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
          }, [
            createVNode(_component_VIcon, {
              icon: props.icon
            }, null, 8, ["icon"])
          ], 32)) : (openBlock(), createElementBlock("a", {
            key: 1,
            tabindex: "0",
            class: normalizeClass(["is-trigger button dropdown-trigger", [props.color && `is-${props.color}`]]),
            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers((...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args), ["prevent"]), ["space"])),
            onClick: _cache[3] || (_cache[3] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
          }, [
            props.title ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(props.title), 1)) : createCommentVNode("", true),
            createBaseVNode("span", {
              class: normalizeClass([!props.modern && "base-caret", props.modern && "base-caret"])
            }, [
              !unref(dropdown).isOpen ? (openBlock(), createBlock(_component_VIcon, {
                key: 0,
                icon: "fa:angle-down"
              })) : (openBlock(), createBlock(_component_VIcon, {
                key: 1,
                icon: "fa:angle-up"
              }))
            ], 2)
          ], 34))
        ]),
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            renderSlot(_ctx.$slots, "content", normalizeProps(guardReactiveProps(unref(dropdown))))
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$1 = ["onKeydown", "onClick"];
const _hoisted_2$1 = { class: "dropdown-head" };
const _hoisted_3$1 = { class: "meta" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-user-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Perfil"),
    /* @__PURE__ */ createBaseVNode("span", null, "Ver tu perfil")
  ])
], -1);
const _hoisted_5$1 = { class: "dropdown-item is-button" };
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode(" Salir ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    const notyf = useNotyf();
    const userSession = useUserSession();
    const salir = () => {
      auth.signOut();
      router.push("/");
      notyf.success("Te esperamos pronto");
    };
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$a;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VButton = _sfc_main$b;
      const _component_VDropdown = _sfc_main$2;
      return openBlock(), createBlock(_component_VDropdown, {
        right: "",
        spaced: "",
        class: "user-dropdown profile-dropdown"
      }, {
        button: withCtx(({ toggle }) => [
          createBaseVNode("a", {
            tabindex: "0",
            class: "is-trigger dropdown-trigger",
            "aria-haspopup": "true",
            onKeydown: withKeys(withModifiers(toggle, ["prevent"]), ["space"]),
            onClick: toggle
          }, [
            createVNode(_component_VAvatar, {
              picture: unref(userSession).imagenUrl
            }, null, 8, ["picture"])
          ], 40, _hoisted_1$1)
        ]),
        content: withCtx(() => {
          var _a, _b;
          return [
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_VAvatar, {
                size: "large",
                picture: unref(userSession).imagenUrl
              }, null, 8, ["picture"]),
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("span", null, toDisplayString((_a = unref(userSession).userData) == null ? void 0 : _a.nombres), 1),
                createBaseVNode("span", null, toDisplayString((_b = unref(userSession).userData) == null ? void 0 : _b.rol), 1)
              ])
            ]),
            createVNode(_component_RouterLink, {
              to: { name: "deportista-profile-profile-view" },
              class: "is-submenu"
            }, {
              default: withCtx(() => [
                _hoisted_4$1
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(_component_VButton, {
                class: "btn-degrade-blue",
                icon: "feather:log-out",
                color: "primary",
                role: "menuitem",
                raised: "",
                fullwidth: "",
                onClick: salir
              }, {
                default: withCtx(() => [
                  _hoisted_6$1
                ]),
                _: 1
              })
            ])
          ];
        }),
        _: 1
      });
    };
  }
});
var _imports_0 = "/images/avatars/svg/vuero-4.svg";
var _imports_1 = "/images/avatars/svg/vuero-2.svg";
var _imports_2 = "/images/avatars/svg/vuero-5.svg";
var _imports_3 = "/images/avatars/svg/vuero-9.svg";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "new-indicator pulsate" }, null, -1);
const _hoisted_3 = [
  _hoisted_1,
  _hoisted_2
];
const _hoisted_4 = { class: "navbar-dropdown is-boxed is-right" };
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div>', 1);
const _hoisted_6 = { class: "inner has-slimscroll" };
const _hoisted_7 = { class: "notification-list" };
const _hoisted_8 = { class: "notification-item" };
const _hoisted_9 = { class: "img-left" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Alice C."),
    /* @__PURE__ */ createTextVNode(" left a comment. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "1 hour ago")
], -1);
const _hoisted_11 = { class: "notification-item" };
const _hoisted_12 = { class: "img-left" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Joshua S."),
    /* @__PURE__ */ createTextVNode(" uploaded a file. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 hours ago")
], -1);
const _hoisted_14 = { class: "notification-item" };
const _hoisted_15 = { class: "img-left" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Tara S."),
    /* @__PURE__ */ createTextVNode(" sent you a message. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "2 hours ago")
], -1);
const _hoisted_17 = { class: "notification-item" };
const _hoisted_18 = { class: "img-left" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "user-content" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "user-info" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "name" }, "Melany W."),
    /* @__PURE__ */ createTextVNode(" left a comment. ")
  ]),
  /* @__PURE__ */ createBaseVNode("p", { class: "time" }, "3 hours ago")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "dropdownElement",
        ref: dropdownElement,
        class: "navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"
      }, [
        createBaseVNode("a", {
          class: "navbar-link is-arrowless",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers((...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
        }, _hoisted_3, 32),
        createBaseVNode("div", _hoisted_4, [
          _hoisted_5,
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("ul", _hoisted_7, [
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_0,
                      onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_10
                ])
              ]),
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_1,
                      onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_13
                ])
              ]),
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_2,
                      onErrorOnce: _cache[4] || (_cache[4] = (event) => unref(onceImageErrored)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_16
                ])
              ]),
              createBaseVNode("li", null, [
                createBaseVNode("a", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("img", {
                      class: "user-photo",
                      alt: "",
                      src: _imports_3,
                      onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(onceImageErrored)(event, "150x150"))
                    }, null, 32)
                  ]),
                  _hoisted_19
                ])
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
});
export { __unplugin_components_0 as _, _imports_0$1 as a, _sfc_main as b, _sfc_main$1 as c, _sfc_main$4 as d, _sfc_main$6 as e, __unplugin_components_11 as f, __unplugin_components_12 as g, _sfc_main$9 as h };
