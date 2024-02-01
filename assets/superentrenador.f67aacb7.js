import { _ as _sfc_main$1 } from "./SuperentrenadorLayout.aa306da5.js";
import { y as defineComponent, M as useRoute, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, q as createVNode, T as Transition, a3 as resolveDynamicComponent, D as unref } from "./index.81c578a3.js";
import { b as block0 } from "./route-block.b5bad31b.js";
import "./NotificationsMobileDropdown.8dd5ed26.js";
import "./viewWrapper.e18c6213.js";
import "./VDropdown.bb3dd0c4.js";
import "./VAvatar.c0c71119.js";
import "./config.9bf2e6c5.js";
import "./useNotyf.321a1d89.js";
import "./notyf.es.f84e4201.js";
import "./VCollapseLinks.9daa4a8e.js";
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
