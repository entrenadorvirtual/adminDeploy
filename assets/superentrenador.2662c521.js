import { _ as _sfc_main$1 } from "./SuperentrenadorLayout.e6a88ca6.js";
import { x as defineComponent, L as useRoute, m as resolveComponent, o as openBlock, e as createBlock, w as withCtx, p as createVNode, T as Transition, a7 as resolveDynamicComponent, C as unref, av as block0 } from "./index.5859d3e2.js";
import "./NotificationsMobileDropdown.06db330b.js";
import "./viewWrapper.1dcacd6c.js";
import "./config.28ac5e58.js";
import "./VDropdown.68e8cd17.js";
import "./VIcon.5b901e87.js";
import "./VAvatar.8dd3f809.js";
import "./useNotyf.2ce0502b.js";
import "./useThemeColors.c1c0138a.js";
import "./VCollapseLinks.bf7afbc4.js";
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
