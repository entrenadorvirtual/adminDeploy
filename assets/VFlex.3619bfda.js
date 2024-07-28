import { y as defineComponent, ag as useCssVars, D as unref, e as computed, o as openBlock, i as createElementBlock, g as renderSlot } from "./index.e9744070.js";
var VFlex_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "v-flex" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    inline: { type: Boolean },
    flexDirection: { default: "row" },
    flexWrap: { default: "nowrap" },
    justifyContent: { default: "normal" },
    alignItems: { default: "normal" },
    alignContent: { default: "normal" },
    rowGap: { default: "normal" },
    columnGap: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "3e3bf628": unref(display),
      "54feccb2": props.flexDirection,
      "52495737": props.flexWrap,
      "78bf6fc6": props.justifyContent,
      "61222e0f": props.alignItems,
      "5be32308": props.alignContent,
      "5d475a20": props.rowGap,
      "3fcea268": props.columnGap
    }));
    const display = computed(() => props.inline ? "inline-flex" : "flex");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
export { _sfc_main as _ };
