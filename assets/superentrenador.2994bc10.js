import { _ as _sfc_main$1 } from "./SuperentrenadorLayout.9294a070.js";
import { y as defineComponent, M as useRoute, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, q as createVNode, T as Transition, a6 as resolveDynamicComponent, D as unref } from "./index.7bbae714.js";
import { b as block0 } from "./route-block.b5bad31b.js";
import "./NotificationsMobileDropdown.3de162af.js";
import "./viewWrapper.e8abb625.js";
import "./config.cf3a8941.js";
import "./VDropdown.dafd4ef1.js";
import "./VIcon.02741722.js";
import "./VAvatar.857f15d4.js";
import "./useNotyf.d0ecec7c.js";
import "./useThemeColors.821f44b4.js";
import "./VCollapseLinks.55b2956f.js";
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
