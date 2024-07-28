import { _ as _sfc_main$1 } from "./SuperentrenadorLayout.6da620da.js";
import { y as defineComponent, M as useRoute, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, q as createVNode, T as Transition, a3 as resolveDynamicComponent, D as unref } from "./index.e9744070.js";
import { b as block0 } from "./route-block.b5bad31b.js";
import "./NotificationsMobileDropdown.3e638147.js";
import "./viewWrapper.f8d88ad3.js";
import "./VDropdown.40ca6dc6.js";
import "./VIcon.419634c9.js";
import "./VAvatar.ed0a34f1.js";
import "./config.88550180.js";
import "./useNotyf.acb9a433.js";
import "./useThemeColors.4844441b.js";
import "./VCollapseLinks.31849dee.js";
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
