import { y as defineComponent, a7 as useHead, p as resolveComponent, o as openBlock, f as createBlock } from "./index.4254dce5.js";
import { u as useViewWrapper } from "./viewWrapper.3e84b41c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Morfolog\xEDa");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_Morfologico = resolveComponent("Morfologico");
      return openBlock(), createBlock(_component_Morfologico);
    };
  }
});
export { _sfc_main as default };
