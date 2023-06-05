import { y as defineComponent, a6 as useHead, p as resolveComponent, o as openBlock, f as createBlock } from "./index.5117c21f.js";
import { u as useViewWrapper } from "./viewWrapper.0d6041b0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Contacto");
    useHead({
      title: "Mis Datos"
    });
    return (_ctx, _cache) => {
      const _component_Contacto = resolveComponent("Contacto");
      return openBlock(), createBlock(_component_Contacto);
    };
  }
});
export { _sfc_main as default };
