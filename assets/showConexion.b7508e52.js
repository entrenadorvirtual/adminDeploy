import { y as defineComponent, P as useHead, p as resolveComponent, o as openBlock, f as createBlock } from "./index.a7fc5dec.js";
import { u as useViewWrapper } from "./viewWrapper.0c20b402.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Conexi\xF3n");
    useHead({
      title: "Configuraci\xF3n"
    });
    return (_ctx, _cache) => {
      const _component_Conexion = resolveComponent("Conexion");
      return openBlock(), createBlock(_component_Conexion);
    };
  }
});
export { _sfc_main as default };
