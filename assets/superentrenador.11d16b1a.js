import { _ as _sfc_main$1 } from "./SuperentrenadorLayout.2b35f12f.js";
import { y as defineComponent, M as useRoute, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, q as createVNode, T as Transition, a3 as resolveDynamicComponent, D as unref } from "./index.5157bb01.js";
import { b as block0 } from "./route-block.89f12ae7.js";
import "./NotificationsMobileDropdown.0b088ce3.js";
import "./viewWrapper.69c18bb9.js";
import "./VDropdown.10b7b857.js";
import "./VAvatar.8e44eaae.js";
import "./config.9bf2e6c5.js";
import "./useNotyf.f331df09.js";
import "./notyf.es.f84e4201.js";
import "./VCollapseLinks.ecf44ab7.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      const _component_SuperentrenadorLayout = _sfc_main$1;
      return openBlock(), createBlock(_component_SuperentrenadorLayout, null, {
        default: withCtx(() => [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "fade-fast",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component), {
                    key: unref(route).fullPath
                  }))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as default };
