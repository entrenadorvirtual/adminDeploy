import { y as defineComponent, P as useHead, o as openBlock, i as createElementBlock, j as createBaseVNode } from "./index.a70cc630.js";
import { u as useViewWrapper } from "./viewWrapper.6b9a60ad.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h2", null, "Super entrenador", -1);
const _hoisted_2 = [
  _hoisted_1
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Gesti\xF3n entrenadores");
    useHead({
      title: "Main Dashboard - My app"
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, _hoisted_2);
    };
  }
});
export { _sfc_main as default };
