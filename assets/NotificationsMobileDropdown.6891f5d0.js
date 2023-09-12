import { u as useViewWrapper } from "./viewWrapper.218364e8.js";
import { y as defineComponent, o as openBlock, i as createElementBlock, g as renderSlot, k as normalizeClass, D as unref, V as _export_sfc, W as useDarkmode, j as createBaseVNode, Q as withKeys, v as withModifiers, U as defineStore, u as useStorage, X as useI18n, C as watch, t as toDisplayString, Y as withDirectives, Z as vModelRadio, G as isRef, M as useRoute, z as ref, h, T as Transition, e as computed, p as resolveComponent, q as createVNode, w as withCtx, l as createCommentVNode, F as Fragment, $ as useRouter, a as useUserSession, f as createBlock, m as createTextVNode, O as _sfc_main$c, a0 as createStaticVNode } from "./index.0f5aa7c2.js";
import { _ as _sfc_main$d, u as useDropdown } from "./VDropdown.8f5c2ced.js";
import { _ as _sfc_main$b, o as onceImageErrored } from "./VAvatar.c41d574f.js";
import { a as auth } from "./config.0fd79a34.js";
import { u as useNotyf } from "./useNotyf.602f0974.js";
var VViewWrapper_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
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
const _sfc_main$9 = {};
const _hoisted_1$8 = { class: "page-content-wrapper" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var __unplugin_components_10 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$1]]);
var VPageContent_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = {};
const _hoisted_1$7 = { class: "page-content" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render]]);
const _hoisted_1$6 = { class: "toolbar ml-auto" };
const _hoisted_2$6 = { class: "toolbar-link" };
const _hoisted_3$6 = ["checked"];
const _hoisted_4$6 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const darkmode = useDarkmode();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("label", {
            tabindex: "0",
            class: "dark-mode ml-auto",
            onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"]))
          }, [
            createBaseVNode("input", {
              type: "checkbox",
              checked: !unref(darkmode).isDark,
              onChange: _cache[0] || (_cache[0] = (...args) => unref(darkmode).onChange && unref(darkmode).onChange(...args))
            }, null, 40, _hoisted_3$6),
            _hoisted_4$6
          ], 32)
        ]),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
var _imports_0$2 = "/images/icons/flags/united-states-of-america.svg";
var _imports_1$1 = "/images/icons/flags/france.svg";
var _imports_2$1 = "/images/icons/flags/spain.svg";
var _imports_3$1 = "/images/icons/flags/germany.svg";
var _imports_4 = "/images/icons/flags/mexico.svg";
var _imports_5 = "/images/icons/flags/china.svg";
var _imports_6 = "/assets/languages.7b1df35e.svg";
var _imports_7 = "/assets/languages-dark.e1954b48.svg";
const usePanels = defineStore("panels", () => {
  const active = useStorage("active-panel", "none");
  function setActive(panelId) {
    active.value = panelId;
  }
  function close() {
    active.value = "none";
  }
  return {
    active,
    setActive,
    close
  };
});
var LanguagesPanel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$5 = { class: "right-panel" };
const _hoisted_2$5 = { class: "right-panel-head" };
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_4$5 = [
  _hoisted_3$5
];
const _hoisted_5$4 = { class: "right-panel-body has-slimscroll" };
const _hoisted_6$4 = { class: "languages-boxes" };
const _hoisted_7$2 = { class: "language-box" };
const _hoisted_8$2 = { class: "language-option" };
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0$2,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_10$1 = { class: "language-box" };
const _hoisted_11$1 = { class: "language-option" };
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1$1,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_13$1 = { class: "language-box" };
const _hoisted_14$1 = { class: "language-option" };
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2$1,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_16$1 = { class: "language-box" };
const _hoisted_17$1 = { class: "language-option" };
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_3$1,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_19$1 = { class: "language-box" };
const _hoisted_20 = { class: "language-option" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_4,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_22 = { class: "language-box" };
const _hoisted_23 = { class: "language-option" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_5,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "img-wrap has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "light-image",
    src: _imports_6,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "dark-image",
    src: _imports_7,
    alt: ""
  })
], -1);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const panels = usePanels();
    const { locale, t } = useI18n();
    const defaultLocale = useStorage("locale", (navigator == null ? void 0 : navigator.language) || "en");
    watch(locale, () => {
      defaultLocale.value = locale.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "languages-panel",
        class: normalizeClass([[unref(panels).active === "languages" && "is-active"], "right-panel-wrapper is-languages"])
      }, [
        createBaseVNode("div", {
          class: "panel-overlay",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(panels).close(), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = ($event) => unref(panels).close())
        }, null, 32),
        createBaseVNode("div", _hoisted_1$5, [
          createBaseVNode("div", _hoisted_2$5, [
            createBaseVNode("h3", null, toDisplayString(unref(t)("select-language")), 1),
            createBaseVNode("a", {
              class: "close-panel",
              tabindex: "0",
              onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(panels).close(), ["prevent"]), ["space"])),
              onClick: _cache[3] || (_cache[3] = ($event) => unref(panels).close())
            }, _hoisted_4$5, 32)
          ]),
          createBaseVNode("div", _hoisted_5$4, [
            createBaseVNode("div", _hoisted_6$4, [
              createBaseVNode("div", _hoisted_7$2, [
                createBaseVNode("div", _hoisted_8$2, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "en",
                    checked: ""
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_9$1
                ])
              ]),
              createBaseVNode("div", _hoisted_10$1, [
                createBaseVNode("div", _hoisted_11$1, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "fr"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_12$1
                ])
              ]),
              createBaseVNode("div", _hoisted_13$1, [
                createBaseVNode("div", _hoisted_14$1, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "es"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_15$1
                ])
              ]),
              createBaseVNode("div", _hoisted_16$1, [
                createBaseVNode("div", _hoisted_17$1, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "de"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_18$1
                ])
              ]),
              createBaseVNode("div", _hoisted_19$1, [
                createBaseVNode("div", _hoisted_20, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "es-MX"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_21
                ])
              ]),
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("div", _hoisted_23, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "zh-CN"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_24
                ])
              ])
            ]),
            _hoisted_25
          ])
        ])
      ], 2);
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
    const isOpen = ref(
      Boolean(
        hasNestedLinkActive.value || typeof props.collapseId === "string" && props.open === props.collapseId || typeof props.collapseId === "undefined" && props.open === true
      )
    );
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
    watch(
      () => props.open,
      (val) => {
        isOpen.value = Boolean(
          typeof props.collapseId === "string" && unref(val) === props.collapseId || typeof props.collapseId === "undefined" && unref(val) === true
        );
      }
    );
    return () => {
      var _a2, _b2, _c;
      const header = (_a2 = slots.header) == null ? void 0 : _a2.call(slots);
      const slotContent2 = (_c = (_b2 = slots.default) == null ? void 0 : _b2.call(slots)) != null ? _c : [];
      const links = slotContent2.map((child) => h("li", {}, child));
      const parentLink = h(
        "a",
        {
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
        },
        header
      );
      const collapseWrap = h("div", { class: "collapse-wrap" }, parentLink);
      const content = isOpen.value ? h("ul", {}, links) : void 0;
      return h(
        "li",
        {
          class: ["collapse-links has-children", isOpen.value && "active"]
        },
        [
          collapseWrap,
          h(
            Transition,
            {
              name: "collapse-links-transition",
              mode: "out-in",
              class: "collapse-content"
            },
            {
              default() {
                return content;
              }
            }
          )
        ]
      );
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b7b8ae54"]]);
var _imports_0$1 = "/assets/mvt-icon.0fd5cf72.png";
var Sidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "sidebar-brand" };
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0$1,
  alt: ""
}, null, -1);
const _hoisted_3$4 = { class: "sidebar-inner" };
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("div", { class: "naver" }, null, -1);
const _hoisted_5$3 = { class: "icon-menu has-slimscroll" };
const _hoisted_6$3 = { class: "bottom-menu" };
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
              _hoisted_2$4
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3$4, [
          _hoisted_4$4,
          createBaseVNode("ul", _hoisted_5$3, [
            renderSlot(_ctx.$slots, "links")
          ]),
          createBaseVNode("ul", _hoisted_6$3, [
            renderSlot(_ctx.$slots, "bottom-links")
          ])
        ])
      ], 2);
    };
  }
});
var MobileSidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "inner" };
const _hoisted_2$3 = { class: "icon-side-menu" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    "aria-label": "Back to homepage",
    href: "/"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:activity"
    })
  ])
], -1);
const _hoisted_4$3 = { class: "bottom-icon-side-menu" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: normalizeClass([[props.isOpen && "is-active"], "mobile-main-sidebar"])
        }, [
          createBaseVNode("div", _hoisted_1$3, [
            createBaseVNode("ul", _hoisted_2$3, [
              renderSlot(_ctx.$slots, "links", {}, () => [
                _hoisted_3$3
              ])
            ]),
            createBaseVNode("ul", _hoisted_4$3, [
              renderSlot(_ctx.$slots, "bottom-links")
            ])
          ])
        ], 2),
        props.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "mobile-overlay",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("toggle"), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = ($event) => emit("toggle"))
        }, null, 32)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var MobileNavbar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = {
  class: "navbar mobile-navbar is-hidden-desktop is-hidden-tablet",
  "aria-label": "main navigation"
};
const _hoisted_2$2 = { class: "container" };
const _hoisted_3$2 = { class: "navbar-brand" };
const _hoisted_4$2 = { class: "brand-start" };
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_8$1 = [
  _hoisted_5$2,
  _hoisted_6$2,
  _hoisted_7$1
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("div", _hoisted_4$2, [
              createBaseVNode("div", {
                class: normalizeClass(["navbar-burger", [props.isOpen && "is-active"]]),
                tabindex: "0",
                onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("toggle"), ["prevent"]), ["space"])),
                onClick: _cache[1] || (_cache[1] = ($event) => emit("toggle"))
              }, _hoisted_8$1, 34)
            ]),
            renderSlot(_ctx.$slots, "brand")
          ])
        ])
      ]);
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
      const _component_VAvatar = _sfc_main$b;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VButton = _sfc_main$c;
      const _component_VDropdown = _sfc_main$d;
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
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(
            (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args),
            ["prevent"]
          ), ["space"])),
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
export { __unplugin_components_0 as _, _imports_0$1 as a, _sfc_main as b, _sfc_main$1 as c, _sfc_main$2 as d, _sfc_main$3 as e, _sfc_main$4 as f, _sfc_main$6 as g, _sfc_main$7 as h, __unplugin_components_9 as i, __unplugin_components_10 as j, _sfc_main$a as k };
