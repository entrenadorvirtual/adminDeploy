import { y as defineComponent, a7 as useHead, p as resolveComponent, o as openBlock, f as createBlock } from "./index.695461b3.js";
import { u as useViewWrapper } from "./viewWrapper.5166164c.js";
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
