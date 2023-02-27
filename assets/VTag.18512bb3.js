import { y as defineComponent, o as openBlock, i as createElementBlock, g as renderSlot, k as normalizeClass, m as createTextVNode, t as toDisplayString } from "./index.420249be.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    addons: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tags", [props.addons && "has-addons"]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var VTag_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    label: { default: void 0 },
    color: { default: void 0 },
    size: { default: void 0 },
    rounded: { type: Boolean },
    curved: { type: Boolean },
    outlined: { type: Boolean },
    elevated: { type: Boolean },
    remove: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("small", {
        class: normalizeClass(["tag", [
          props.color && "is-" + props.color,
          props.size && "is-" + props.size,
          props.rounded && "is-rounded",
          props.curved && "is-curved",
          props.outlined && "is-outlined",
          props.elevated && "is-elevated",
          props.remove && "is-delete"
        ]])
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(props.label), 1)
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _, _sfc_main$1 as a };
