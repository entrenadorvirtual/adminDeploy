import { x as defineComponent, O as useHead, o as openBlock, g as createElementBlock, i as createBaseVNode } from "./index.7277f539.js";
import { u as useViewWrapper } from "./viewWrapper.d9a08fd8.js";
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
