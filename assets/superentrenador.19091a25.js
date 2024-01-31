import { _ as _sfc_main$1 } from "./SuperentrenadorLayout.e04c1865.js";
import { y as defineComponent, M as useRoute, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, q as createVNode, T as Transition, a3 as resolveDynamicComponent, D as unref } from "./index.b73b5b5a.js";
import { b as block0 } from "./route-block.89f12ae7.js";
import "./NotificationsMobileDropdown.3a0952a4.js";
import "./viewWrapper.ceba3981.js";
import "./VDropdown.d3ce7ec9.js";
import "./VAvatar.88d8c3d1.js";
import "./config.9bf2e6c5.js";
import "./useNotyf.e18afbdb.js";
import "./notyf.es.f84e4201.js";
import "./VCollapseLinks.a6e4c2b1.js";
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
