import { y as defineComponent, P as useHead, p as resolveComponent, o as openBlock, f as createBlock } from "./index.a7fc5dec.js";
import { u as useViewWrapper } from "./viewWrapper.0c20b402.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Facturaci\xF3n");
    useHead({
      title: "Planes"
    });
    return (_ctx, _cache) => {
      const _component_Facturacion = resolveComponent("Facturacion");
      return openBlock(), createBlock(_component_Facturacion);
    };
  }
});
export { _sfc_main as default };