import { _ as __unplugin_components_0 } from "./AnimatedLogo.ace36e31.js";
import { x as defineComponent, X as useDarkmode, o as openBlock, g as createElementBlock, i as createBaseVNode, p as createVNode, Z as withDirectives, ao as vModelCheckbox, C as unref, a1 as createStaticVNode } from "./index.7277f539.js";
var LandingEmptyNavigation_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = {
  class: "navbar is-fixed-top is-transparent is-docked",
  "aria-label": "main navigation"
};
const _hoisted_2 = { class: "navbar-brand" };
const _hoisted_3 = {
  href: "https://myvirtualtrainer.co/",
  class: "navbar-item",
  target: "_blank"
};
const _hoisted_4 = { class: "brand-icon" };
const _hoisted_5 = { class: "navbar-menu" };
const _hoisted_6 = { class: "navbar-end" };
const _hoisted_7 = { class: "navbar-item" };
const _hoisted_8 = { class: "theme-toggle" };
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<span class="toggler"><span class="dark"><i aria-hidden="true" class="iconify" data-icon="feather:moon"></i></span><span class="light"><i aria-hidden="true" class="iconify" data-icon="feather:sun"></i></span></span>', 1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const darkmode = useDarkmode();
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      return openBlock(), createElementBlock("nav", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("a", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_AnimatedLogo, {
                width: "34px",
                height: "34px"
              })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("label", _hoisted_8, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(darkmode).isDark = $event),
                  type: "checkbox"
                }, null, 512), [
                  [vModelCheckbox, unref(darkmode).isDark]
                ]),
                _hoisted_9
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
