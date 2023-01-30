import { Q as _export_sfc, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, T as Transition, f as createBlock, P as resolveDynamicComponent } from "./index.9a2a8c84.js";
var miEntrenamiento_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-12" };
function _sfc_render(_ctx, _cache) {
  const _component_RouterView = resolveComponent("RouterView");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "translate-page-y",
                mode: "in-out"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ])
      ])
    ])
  ]);
}
var miEntrenamiento = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { miEntrenamiento as default };
