import { Q as _export_sfc, o as openBlock, i as createElementBlock, Z as createStaticVNode, q as createVNode, y as defineComponent, a5 as useHead, f as createBlock } from "./index.3437b938.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
var _imports_0 = "/assets/search-7.13f8397f.svg";
var _imports_1 = "/assets/search-7-dark.9ba8d20e.svg";
const _sfc_main$2 = {};
const _hoisted_1 = { class: "columns is-multiline" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="column is-12"><div class="page-placeholder"><div class="placeholder-content"><h3>Lo Sentimos, esta p\xE1gina no est\xE1 disponible</h3><p class="is-larger">Nuestro equipo est\xE1 trabajando en ella.</p><img class="light-image" src="' + _imports_0 + '" alt="" style="width:400px;"><img class="dark-image" src="' + _imports_1 + '" alt="" style="width:400px;"></div></div></div>', 1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3);
}
var __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
const _sfc_main$1 = {};
function _sfc_render(_ctx, _cache) {
  const _component_Proximo = __unplugin_components_0$1;
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_Proximo)
  ]);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Conexi\xF3n");
    useHead({
      title: "Configuraci\xF3n"
    });
    return (_ctx, _cache) => {
      const _component_Conexion = __unplugin_components_0;
      return openBlock(), createBlock(_component_Conexion);
    };
  }
});
export { _sfc_main as default };
