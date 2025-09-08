import { x as defineComponent, Y as useI18n, y as ref, b as computed, aa as watchEffect, D as onUnmounted, o as openBlock, e as createBlock, i as createBaseVNode, P as withKeys, t as toDisplayString, g as createElementBlock, s as withModifiers, k as createCommentVNode, j as normalizeClass, f as renderSlot, C as unref, ag as Teleport } from "./index.5859d3e2.js";
var VModal_vue_vue_type_style_index_0_lang = "";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Abbrechen"]);
        }
      },
      "en": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancel"]);
        }
      },
      "es-MX": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancelar"]);
        }
      },
      "es": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancelar"]);
        }
      },
      "fr": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Annuler"]);
        }
      },
      "zh-CN": {
        "cancel-label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u53D6\u6D88"]);
        }
      }
    }
  });
}
const _hoisted_1 = { class: "modal-content" };
const _hoisted_2 = { class: "modal-card" };
const _hoisted_3 = { class: "modal-card-head" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = { class: "inner-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    size: { default: void 0 },
    actions: { default: void 0 },
    open: { type: Boolean },
    rounded: { type: Boolean },
    noscroll: { type: Boolean },
    noclose: { type: Boolean },
    tabs: { type: Boolean },
    cancelLabel: { default: void 0 },
    noclosebutton: { type: Boolean, default: void 0 }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const wasOpen = ref(false);
    const cancelLabel = computed(() => props.cancelLabel || t("cancel-label"));
    const checkScroll = () => {
      if (props.noscroll && props.open) {
        document.documentElement.classList.add("no-scroll");
        wasOpen.value = true;
      } else if (wasOpen.value && props.noscroll && !props.open) {
        document.documentElement.classList.remove("no-scroll");
        wasOpen.value = false;
      }
    };
    watchEffect(checkScroll);
    onUnmounted(() => {
      document.documentElement.classList.remove("no-scroll");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createBaseVNode("div", {
          class: normalizeClass([[__props.open && "is-active", __props.size && `is-${__props.size}`], "modal v-modal"])
        }, [
          createBaseVNode("div", {
            class: "modal-background v-modal-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(() => __props.noclose === false && emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = () => __props.noclose === false && emit("close"))
          }, null, 32),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("header", _hoisted_3, [
                createBaseVNode("h3", null, toDisplayString(__props.title), 1),
                props.noclosebutton ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "v-modal-close ml-auto",
                  "aria-label": "close",
                  tabindex: "0",
                  onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
                  onClick: _cache[3] || (_cache[3] = ($event) => emit("close"))
                }, _hoisted_5, 32)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["modal-card-body", [props.tabs && "has-tabs"]])
              }, [
                createBaseVNode("div", _hoisted_6, [
                  renderSlot(_ctx.$slots, "content")
                ])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(["modal-card-foot", [
                  __props.actions === "center" && "is-centered",
                  __props.actions === "right" && "is-end"
                ]])
              }, [
                renderSlot(_ctx.$slots, "cancel", {
                  close: () => emit("close")
                }, () => [
                  createBaseVNode("a", {
                    tabindex: "0",
                    class: normalizeClass(["button v-button v-modal-close", [__props.rounded && "is-rounded"]]),
                    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
                    onClick: _cache[5] || (_cache[5] = ($event) => emit("close"))
                  }, toDisplayString(unref(cancelLabel)), 35)
                ]),
                renderSlot(_ctx.$slots, "action", {
                  close: () => emit("close")
                })
              ], 2)
            ])
          ])
        ], 2)
      ]);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as _ };
