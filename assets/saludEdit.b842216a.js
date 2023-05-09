import { y as defineComponent, a7 as useHead, p as resolveComponent, o as openBlock, f as createBlock } from "./index.4254dce5.js";
import { u as useViewWrapper } from "./viewWrapper.3e84b41c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Salud");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_Salud = resolveComponent("Salud");
      return openBlock(), createBlock(_component_Salud);
    };
  }
});
export { _sfc_main as default };
