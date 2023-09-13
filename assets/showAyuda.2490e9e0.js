import { y as defineComponent, P as useHead, p as resolveComponent, o as openBlock, f as createBlock } from "./index.a7fc5dec.js";
import { u as useViewWrapper } from "./viewWrapper.0c20b402.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Ayuda");
    useHead({
      title: "Configuraci\xF3n"
    });
    return (_ctx, _cache) => {
      const _component_Ayuda = resolveComponent("Ayuda");
      return openBlock(), createBlock(_component_Ayuda);
    };
  }
});
export { _sfc_main as default };
