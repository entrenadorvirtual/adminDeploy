import { y as defineComponent, P as useHead, p as resolveComponent, o as openBlock, f as createBlock } from "./index.0f5aa7c2.js";
import { u as useViewWrapper } from "./viewWrapper.218364e8.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Usuario");
    useHead({
      title: "Mis Datos"
    });
    return (_ctx, _cache) => {
      const _component_Usuario = resolveComponent("Usuario");
      return openBlock(), createBlock(_component_Usuario);
    };
  }
});
export { _sfc_main as default };