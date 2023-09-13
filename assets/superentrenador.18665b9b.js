import { _ as _sfc_main$1 } from "./SuperentrenadorLayout.041e9c90.js";
import { y as defineComponent, M as useRoute, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, q as createVNode, T as Transition, a3 as resolveDynamicComponent, D as unref } from "./index.a7fc5dec.js";
import { b as block0 } from "./route-block.89f12ae7.js";
import "./NotificationsMobileDropdown.cb10062c.js";
import "./viewWrapper.0c20b402.js";
import "./VDropdown.8656c252.js";
import "./VAvatar.39b9c3a4.js";
import "./config.0fd79a34.js";
import "./useNotyf.ce7ee7f1.js";
import "./notyf.es.f84e4201.js";
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
