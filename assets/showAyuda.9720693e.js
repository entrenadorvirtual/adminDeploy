import { y as defineComponent, z as ref, ar as resolveDirective, o as openBlock, i as createElementBlock, j as createBaseVNode, a1 as withDirectives, v as withModifiers, a7 as vModelText, q as createVNode, w as withCtx, m as createTextVNode, Y as _sfc_main$2, Z as createStaticVNode, a5 as useHead, f as createBlock } from "./index.3437b938.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
var Ayuda_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "personal-dashboard personal-dashboard-v3" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-4" };
const _hoisted_4 = {
  class: "dashboard-card is-welcome",
  color: "solid",
  label: "Bubble"
};
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="welcome-title"><h3 class="dark-inverted">FAQ</h3><p>Para FAQ contactarse al siguiente correo.</p></div><div class="welcome-progress"><div class="meta"><span></span><span class="dark-inverted"> info@myvirtualtrainer.co </span></div></div>', 2);
const _hoisted_7 = [
  _hoisted_5
];
const _hoisted_8 = { class: "column is-4" };
const _hoisted_9 = {
  class: "dashboard-card is-welcome",
  color: "solid",
  label: "Bubble"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "welcome-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Contacto")
], -1);
const _hoisted_11 = { class: "welcome-progress" };
const _hoisted_12 = ["onSubmit"];
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" Cu\xE1l es tu duda?: ");
const _hoisted_14 = { class: "button-wrap" };
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" Enviar ");
const _hoisted_16 = { class: "column is-4" };
const _hoisted_17 = { class: "dashboard-card is-welcome" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "welcome-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Notificaciones"),
  /* @__PURE__ */ createBaseVNode("p", null, " You have 6 interviews to conduct during this week. Your current progress is great. ")
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "welcome-progress" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Your Progress"),
    /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, [
      /* @__PURE__ */ createTextVNode("Outstanding "),
      /* @__PURE__ */ createBaseVNode("span", {
        role: "img",
        "aria-label": "Party Popper"
      }, "\u{1F389}")
    ])
  ])
], -1);
const _hoisted_20 = { class: "button-wrap" };
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" View Schedule ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const mensaje = ref("");
    const enviar = () => {
      console.log("Mensaje -> ", mensaje.value);
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            withDirectives((openBlock(), createElementBlock("div", _hoisted_4, _hoisted_7)), [
              [
                _directive_tooltip,
                "Secci\xF3n de preguntas frecuentes",
                void 0,
                {
                  primary: true,
                  bubble: true
                }
              ]
            ])
          ]),
          createBaseVNode("div", _hoisted_8, [
            withDirectives((openBlock(), createElementBlock("div", _hoisted_9, [
              _hoisted_10,
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("form", {
                  onSubmit: withModifiers(enviar, ["prevent"])
                }, [
                  createBaseVNode("label", null, [
                    _hoisted_13,
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mensaje.value = $event),
                      placeholder: "Escribe un comentario o consulta",
                      required: ""
                    }, null, 512), [
                      [vModelText, mensaje.value]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(_component_VButton, {
                      type: "submit",
                      color: "primary",
                      size: "big",
                      fullwidth: "",
                      raised: ""
                    }, {
                      default: withCtx(() => [
                        _hoisted_15
                      ]),
                      _: 1
                    })
                  ])
                ], 40, _hoisted_12)
              ])
            ])), [
              [
                _directive_tooltip,
                "Nos puedes contactar para solucionar tus dudas",
                void 0,
                {
                  primary: true,
                  bubble: true
                }
              ]
            ])
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("div", _hoisted_17, [
              _hoisted_18,
              _hoisted_19,
              createBaseVNode("div", _hoisted_20, [
                createVNode(_component_VButton, {
                  color: "primary",
                  size: "big",
                  fullwidth: "",
                  raised: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_21
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Ayuda");
    useHead({
      title: "Configuraci\xF3n"
    });
    return (_ctx, _cache) => {
      const _component_Ayuda = _sfc_main$1;
      return openBlock(), createBlock(_component_Ayuda);
    };
  }
});
export { _sfc_main as default };
