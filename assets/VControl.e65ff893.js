import { Q as _export_sfc, y as defineComponent, e as computed, r as reactive, o as openBlock, i as createElementBlock, g as renderSlot, V as normalizeProps, W as guardReactiveProps, D as unref, F as Fragment, f as createBlock, w as withCtx, j as createBaseVNode, k as normalizeClass, l as createCommentVNode, v as withModifiers, M as withKeys, a9 as pushScopeId, aa as popScopeId } from "./index.9a2a8c84.js";
import { u as useVFieldContext, _ as _sfc_main$1 } from "./VLabel.66fea259.js";
var VControl_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-2c81b1a0"), n = n(), popScopeId(), n);
const _hoisted_1 = ["data-icon"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  "data-icon": "feather:check",
  class: "iconify"
}, null, -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  "data-icon": "feather:x",
  class: "iconify"
}, null, -1));
const _hoisted_4 = [
  _hoisted_3
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    id: {
      type: String,
      default: void 0
    },
    icon: {
      type: String,
      default: void 0
    },
    isValid: {
      type: Boolean,
      default: void 0
    },
    hasError: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: void 0
    },
    expanded: {
      type: Boolean,
      default: void 0
    },
    fullwidth: {
      type: Boolean,
      default: void 0
    },
    textaddon: {
      type: Boolean,
      default: void 0
    },
    nogrow: {
      type: Boolean,
      default: void 0
    },
    subcontrol: {
      type: Boolean,
      default: void 0
    },
    raw: {
      type: Boolean,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(":") !== -1;
    });
    const vFieldContext = reactive(useVFieldContext({
      id: props.id,
      inherit: !props.subcontrol
    }));
    const isValid = computed(() => props.isValid);
    const hasError = computed(() => {
      var _a, _b;
      return (vFieldContext == null ? void 0 : vFieldContext.field) ? Boolean((_b = (_a = vFieldContext == null ? void 0 : vFieldContext.field) == null ? void 0 : _a.errorMessage) == null ? void 0 : _b.value) : props.hasError;
    });
    const controlClasees = computed(() => {
      if (props.raw)
        return [];
      return [
        "control",
        props.icon && "has-icon",
        props.loading && "is-loading",
        props.expanded && "is-expanded",
        props.fullwidth && "is-fullwidth",
        props.nogrow && "is-nogrow",
        props.textaddon && "is-textarea-addon",
        isValid.value && "has-validation has-success",
        hasError.value && "has-validation has-error",
        props.subcontrol && "subcontrol"
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(controlClasees))
      }, [
        renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(unref(vFieldContext))), void 0, true),
        props.icon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          unref(isIconify) ? (openBlock(), createBlock(_sfc_main$1, {
            key: 0,
            class: "form-icon"
          }, {
            default: withCtx(() => [
              createBaseVNode("i", {
                "aria-hidden": "true",
                "data-icon": props.icon,
                class: "iconify"
              }, null, 8, _hoisted_1)
            ]),
            _: 1
          })) : (openBlock(), createBlock(_sfc_main$1, {
            key: 1,
            class: "form-icon"
          }, {
            default: withCtx(() => [
              createBaseVNode("i", {
                "aria-hidden": "true",
                class: normalizeClass(props.icon)
              }, null, 2)
            ]),
            _: 1
          }))
        ], 64)) : createCommentVNode("", true),
        unref(isValid) ? (openBlock(), createBlock(_sfc_main$1, {
          key: 1,
          class: "validation-icon is-success"
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        })) : unref(hasError) ? (openBlock(), createElementBlock("a", {
          key: 2,
          class: "validation-icon is-error",
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
            var _a, _b;
            return (_b = (_a = unref(vFieldContext).field) == null ? void 0 : _a.resetField) == null ? void 0 : _b.call(_a);
          }, ["prevent"])),
          onKeyup: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
            var _a, _b;
            return (_b = (_a = unref(vFieldContext).field) == null ? void 0 : _a.resetField) == null ? void 0 : _b.call(_a);
          }, ["prevent"]), ["enter"]))
        }, _hoisted_4, 32)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "extra", normalizeProps(guardReactiveProps(unref(vFieldContext))), void 0, true)
      ], 2);
    };
  }
});
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2c81b1a0"]]);
export { __unplugin_components_2 as _ };
