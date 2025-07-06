import { y as defineComponent, ag as useCssVars, o as openBlock, i as createElementBlock, g as renderSlot } from "./index.5c29604d.js";
var VFlexItem_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "v-flex-item" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    order: { default: 0 },
    flexGrow: { default: 0 },
    flexShrink: { default: 0 },
    flexBasis: { default: "auto" },
    alignSelf: { default: "auto" }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "2ff03aec": props.order,
      "7990c964": props.flexGrow,
      "30a71af8": props.flexShrink,
      "b924a73a": props.flexBasis,
      "7713848f": props.alignSelf
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
export { _sfc_main as _ };
