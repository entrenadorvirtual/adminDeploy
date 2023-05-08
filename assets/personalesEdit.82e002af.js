import { y as defineComponent, a7 as useHead, p as resolveComponent, o as openBlock, f as createBlock } from "./index.695461b3.js";
import { u as useViewWrapper } from "./viewWrapper.5166164c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Personales");
    useHead({
      title: "Mis Datos"
    });
    return (_ctx, _cache) => {
      const _component_Personales = resolveComponent("Personales");
      return openBlock(), createBlock(_component_Personales);
    };
  }
});
export { _sfc_main as default };
