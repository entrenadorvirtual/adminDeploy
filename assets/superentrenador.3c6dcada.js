import { _ as _sfc_main$1 } from "./SuperentrenadorLayout.6d8be646.js";
import { y as defineComponent, M as useRoute, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, q as createVNode, T as Transition, a6 as resolveDynamicComponent, D as unref } from "./index.7ac0c9d2.js";
import { b as block0 } from "./route-block.b5bad31b.js";
import "./NotificationsMobileDropdown.b6ac56ee.js";
import "./viewWrapper.22429616.js";
import "./config.cf3a8941.js";
import "./VDropdown.8c9ef7d3.js";
import "./VIcon.04f7d004.js";
import "./VAvatar.df463660.js";
import "./useNotyf.edf649d6.js";
import "./useThemeColors.31c9a907.js";
import "./VCollapseLinks.60b39851.js";
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
