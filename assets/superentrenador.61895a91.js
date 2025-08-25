import { _ as _sfc_main$1 } from "./SuperentrenadorLayout.34d0ca6a.js";
import { x as defineComponent, L as useRoute, m as resolveComponent, o as openBlock, e as createBlock, w as withCtx, p as createVNode, T as Transition, a7 as resolveDynamicComponent, C as unref, av as block0 } from "./index.7277f539.js";
import "./NotificationsMobileDropdown.2cb6d867.js";
import "./viewWrapper.d9a08fd8.js";
import "./config.28ac5e58.js";
import "./VDropdown.40b2c764.js";
import "./VIcon.3ee9f83c.js";
import "./VAvatar.ea1017a0.js";
import "./useNotyf.04745937.js";
import "./useThemeColors.2a03c1d8.js";
import "./VCollapseLinks.dbe3933a.js";
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
