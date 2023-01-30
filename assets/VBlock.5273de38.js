import { y as defineComponent, o as openBlock, i as createElementBlock, g as renderSlot, j as createBaseVNode, t as toDisplayString, l as createCommentVNode, k as normalizeClass } from "./index.9a2a8c84.js";
var VBlock_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "flex-end" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    subtitle: { default: void 0 },
    infratitle: { default: void 0 },
    center: { type: Boolean },
    lighter: { type: Boolean },
    narrow: { type: Boolean },
    mResponsive: { type: Boolean },
    tResponsive: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          !props.center && "media-flex",
          props.center && "media-flex-center",
          props.narrow && "no-margin",
          props.mResponsive && "is-responsive-mobile",
          props.tResponsive && "is-responsive-tablet-p"
        ])
      }, [
        renderSlot(_ctx.$slots, "icon"),
        createBaseVNode("div", {
          class: normalizeClass(["flex-meta", [props.lighter && "is-lighter"]])
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createBaseVNode("span", null, toDisplayString(props.title), 1),
            props.subtitle ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(props.subtitle), 1)) : createCommentVNode("", true),
            props.infratitle ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(props.infratitle), 1)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default")
        ], 2),
        createBaseVNode("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "action")
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _ };
