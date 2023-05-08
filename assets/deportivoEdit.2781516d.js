import { y as defineComponent, a7 as useHead, p as resolveComponent, o as openBlock, f as createBlock } from "./index.695461b3.js";
import { u as useViewWrapper } from "./viewWrapper.5166164c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Deportivo");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_Deportivo = resolveComponent("Deportivo");
      return openBlock(), createBlock(_component_Deportivo);
    };
  }
});
export { _sfc_main as default };
