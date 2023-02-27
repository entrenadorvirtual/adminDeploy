import { _ as _sfc_main$3 } from "./VBlock.68f81a1f.js";
import { _ as _sfc_main$2 } from "./VIconBox.e13404cf.js";
import { R as _export_sfc, am as resolveDirective, o as openBlock, i as createElementBlock, j as createBaseVNode, a2 as withDirectives, q as createVNode, w as withCtx, F as Fragment, m as createTextVNode, y as defineComponent, a6 as useHead, f as createBlock } from "./index.420249be.js";
import { u as useViewWrapper } from "./viewWrapper.621f0af8.js";
var Facturacion_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {};
const _hoisted_1 = { class: "personal-dashboard personal-dashboard-v1" };
const _hoisted_2 = { class: "dashboard-body" };
const _hoisted_3 = { class: "columns is-multiline" };
const _hoisted_4 = { class: "column is-12" };
const _hoisted_5 = { class: "dashboard-card" };
const _hoisted_6 = { class: "quick-stats" };
const _hoisted_7 = { class: "quick-stats-inner" };
const _hoisted_8 = {
  class: "quick-stat",
  color: "solid",
  label: "Bubble"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-analytics-alt-1"
}, null, -1);
const _hoisted_10 = {
  class: "quick-stat",
  color: "solid",
  label: "Bubble"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-handshake"
}, null, -1);
const _hoisted_12 = { class: "personal-dashboard personal-dashboard-v1" };
const _hoisted_13 = { class: "dashboard-body" };
const _hoisted_14 = { class: "columns is-multiline" };
const _hoisted_15 = { class: "column is-12" };
const _hoisted_16 = {
  class: "dashboard-card",
  color: "solid",
  label: "Bubble"
};
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" tabla ");
const _hoisted_18 = [
  _hoisted_17
];
function _sfc_render(_ctx, _cache) {
  const _component_VIconBox = _sfc_main$2;
  const _component_VBlock = _sfc_main$3;
  const _directive_tooltip = resolveDirective("tooltip");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  withDirectives((openBlock(), createElementBlock("div", _hoisted_8, [
                    createVNode(_component_VBlock, {
                      title: "Medio de Pago",
                      subtitle: "pago",
                      center: "",
                      "m-responsive": "",
                      "t-responsive": ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VIconBox, {
                          color: "purple",
                          rounded: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_9
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])), [
                    [
                      _directive_tooltip,
                      "Este es tu metodo de pago",
                      void 0,
                      {
                        primary: true,
                        bubble: true
                      }
                    ]
                  ]),
                  withDirectives((openBlock(), createElementBlock("div", _hoisted_10, [
                    createVNode(_component_VBlock, {
                      title: "Fecha de Corte",
                      subtitle: "24 / 03 / 2023",
                      center: "",
                      "m-responsive": "",
                      "t-responsive": ""
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_VIconBox, {
                          color: "orange",
                          rounded: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_11
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])), [
                    [
                      _directive_tooltip,
                      "Este dia es tu fecha de corte, asegurate de pagar antes",
                      void 0,
                      {
                        primary: true,
                        bubble: true
                      }
                    ]
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_12, [
      createBaseVNode("div", _hoisted_13, [
        createBaseVNode("div", _hoisted_14, [
          createBaseVNode("div", _hoisted_15, [
            withDirectives((openBlock(), createElementBlock("div", _hoisted_16, _hoisted_18)), [
              [
                _directive_tooltip,
                "Estos son los ultimos pagos que has realizado",
                void 0,
                {
                  primary: true,
                  bubble: true
                }
              ]
            ])
          ])
        ])
      ])
    ])
  ], 64);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Facturaci\xF3n");
    useHead({
      title: "Planes"
    });
    return (_ctx, _cache) => {
      const _component_Facturacion = __unplugin_components_0;
      return openBlock(), createBlock(_component_Facturacion);
    };
  }
});
export { _sfc_main as default };
