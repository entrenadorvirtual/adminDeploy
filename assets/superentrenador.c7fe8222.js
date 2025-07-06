import { _ as _sfc_main$1 } from "./SuperentrenadorLayout.42dae6e6.js";
import { y as defineComponent, M as useRoute, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, q as createVNode, T as Transition, a8 as resolveDynamicComponent, D as unref } from "./index.5c29604d.js";
import { b as block0 } from "./route-block.b5bad31b.js";
import "./NotificationsMobileDropdown.ea0c9d6f.js";
import "./viewWrapper.93f5013f.js";
import "./config.f3c9bc1b.js";
import "./VDropdown.7ce6b615.js";
import "./VIcon.f1c6decb.js";
import "./VAvatar.750ed0e1.js";
import "./useNotyf.e3af1d9e.js";
import "./useThemeColors.37241be5.js";
import "./VCollapseLinks.7347956c.js";
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
