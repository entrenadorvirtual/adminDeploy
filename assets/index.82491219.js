import { y as defineComponent, P as useHead, o as openBlock, i as createElementBlock, j as createBaseVNode } from "./index.e9744070.js";
import { u as useViewWrapper } from "./viewWrapper.f8d88ad3.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h2", null, "Panel Administracion", -1);
const _hoisted_2 = [
  _hoisted_1
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Administracion");
    useHead({
      title: "Main Dashboard - My app"
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, _hoisted_2);
    };
  }
});
export { _sfc_main as default };
