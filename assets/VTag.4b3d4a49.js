import { x as defineComponent, o as openBlock, g as createElementBlock, f as renderSlot, l as createTextVNode, t as toDisplayString, j as normalizeClass } from "./index.7277f539.js";
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
export { _sfc_main as _ };
