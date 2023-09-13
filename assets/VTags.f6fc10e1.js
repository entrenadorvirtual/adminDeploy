import { y as defineComponent, o as openBlock, i as createElementBlock, g as renderSlot, k as normalizeClass } from "./index.a7fc5dec.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
export { _sfc_main as _ };
