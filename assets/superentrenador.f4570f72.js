import { _ as _sfc_main$1 } from "./SuperentrenadorLayout.9a00aa2b.js";
import { y as defineComponent, M as useRoute, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, q as createVNode, T as Transition, a3 as resolveDynamicComponent, D as unref } from "./index.aedac316.js";
import { b as block0 } from "./route-block.89f12ae7.js";
import "./NotificationsMobileDropdown.5f380183.js";
import "./viewWrapper.e58f1ab4.js";
import "./VDropdown.a45445fa.js";
import "./VAvatar.ad12e553.js";
import "./config.9bf2e6c5.js";
import "./useNotyf.cd06cfe3.js";
import "./notyf.es.f84e4201.js";
import "./VCollapseLinks.63649503.js";
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
