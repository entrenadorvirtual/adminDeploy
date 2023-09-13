import { _ as _sfc_main$2 } from "./VBlock.f1c78c75.js";
import { _ as _sfc_main$1 } from "./VAvatar.39b9c3a4.js";
import { y as defineComponent, a as useUserSession, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, T as Transition, f as createBlock, a3 as resolveDynamicComponent } from "./index.a7fc5dec.js";
var profileDeporte_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-4" };
const _hoisted_5 = { class: "account-box is-navigation" };
const _hoisted_6 = { class: "account-menu" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user-alt"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, "Personal", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-arrow-right"
  })
], -1);
const _hoisted_10 = { class: "account-menu" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user-alt"
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", null, "Deportivo", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "end" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-arrow-right"
  })
], -1);
const _hoisted_14 = { class: "column is-8" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_VBlock = _sfc_main$2;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VBlock, {
                  title: "Erik Kovalsky",
                  center: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_VAvatar, {
                      size: "large",
                      picture: unref(userSession).imagenUrl,
                      badge: "/images/icons/flags/united-states-of-america.svg"
                    }, null, 8, ["picture"])
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_RouterLink, {
                    to: { name: "entrenador-profile-profile-edit" },
                    class: "account-menu-item"
                  }, {
                    default: withCtx(() => [
                      _hoisted_7,
                      _hoisted_8,
                      _hoisted_9
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createVNode(_component_RouterLink, {
                    to: { name: "entrenador-profile-profile-deporte" },
                    class: "account-menu-item"
                  }, {
                    default: withCtx(() => [
                      _hoisted_11,
                      _hoisted_12,
                      _hoisted_13
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_14, [
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
    };
  }
});
export { _sfc_main as default };
