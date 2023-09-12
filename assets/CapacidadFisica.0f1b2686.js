import { _ as _sfc_main$1, a as _sfc_main$3 } from "./VField.2f4065eb.js";
import { _ as __unplugin_components_2 } from "./VControl.f1021bc2.js";
import { _ as _sfc_main$2 } from "./VInput.144983c9.js";
import { y as defineComponent, r as reactive, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, m as createTextVNode } from "./index.0f5aa7c2.js";
const _hoisted_1 = { class: "account-box is-form is-footerless" };
const _hoisted_2 = { action: "signup-form" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head stuck-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
      /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Capacidad F\xEDsica")
    ])
  ])
], -1);
const _hoisted_4 = { class: "p-6" };
const _hoisted_5 = { class: "fieldset" };
const _hoisted_6 = { class: "columns is-multiline" };
const _hoisted_7 = { class: "column is-4" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Frecuencia M\xEDnima ");
const _hoisted_9 = { class: "column is-4" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Frecuencia M\xE1xima ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    fc_min: String,
    fc_max: String
  },
  setup(__props) {
    const props = __props;
    const deportista = reactive({
      fc_min: "",
      fc_max: ""
    });
    onMounted(() => {
      deportista.fc_min = props.fc_min;
      deportista.fc_max = props.fc_max;
    });
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$1;
      const _component_VInput = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("form", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  createVNode(_component_VField, { id: "fcMin" }, {
                    default: withCtx(() => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_8
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          createVNode(_component_VInput, {
                            value: unref(deportista).fc_min,
                            type: "text",
                            placeholder: "FCmin",
                            autocomplete: "off",
                            disabled: ""
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createVNode(_component_VField, { id: "fcMax" }, {
                    default: withCtx(() => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_10
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          createVNode(_component_VInput, {
                            value: unref(deportista).fc_max,
                            type: "text",
                            placeholder: "FCMax",
                            autocomplete: "off",
                            disabled: ""
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
