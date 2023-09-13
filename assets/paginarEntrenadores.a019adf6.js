import { y as defineComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, t as toDisplayString } from "./index.a7fc5dec.js";
const _hoisted_1 = {
  class: "btn-group",
  role: "group",
  "aria-label": "Basic example"
};
const _hoisted_2 = ["disabled"];
const _hoisted_3 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: ["inicio", "fin", "tamanio"],
  emits: ["next", "prev"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => emit("prev")),
          type: "button",
          class: "btn btn-outline-primary",
          disabled: __props.inicio === 0
        }, " Previous " + toDisplayString(__props.inicio), 9, _hoisted_2),
        createBaseVNode("button", {
          onClick: _cache[1] || (_cache[1] = ($event) => emit("next")),
          type: "button",
          class: "btn btn-outline-primary",
          disabled: __props.fin >= __props.tamanio
        }, " Next " + toDisplayString(__props.fin), 9, _hoisted_3)
      ]);
    };
  }
});
export { _sfc_main as default };
