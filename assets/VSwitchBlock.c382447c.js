import { _ as _sfc_main$2 } from "./VLabel.82cb8353.js";
import { _ as _sfc_main$1 } from "./VInput.8bd6418e.js";
import { y as defineComponent, z as ref, ac as useAttrs, C as watch, o as openBlock, i as createElementBlock, f as createBlock, w as withCtx, q as createVNode, x as mergeProps, D as unref, k as normalizeClass, M as withKeys, v as withModifiers, j as createBaseVNode, t as toDisplayString, l as createCommentVNode } from "./index.420249be.js";
var VSwitchBlock_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "slider" }, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" }, null, -1);
const _hoisted_3 = {
  key: 2,
  class: "text"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { default: false },
    label: { default: void 0 },
    color: { default: void 0 },
    thin: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const value = ref(props.modelValue);
    const attrs = useAttrs();
    watch(value, () => {
      emit("update:modelValue", value.value);
    });
    watch(() => props.modelValue, () => {
      value.value = props.modelValue;
    });
    return (_ctx, _cache) => {
      const _component_VInput = _sfc_main$1;
      const _component_VLabel = _sfc_main$2;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          props.label && "switch-block",
          props.thin && props.label && "thin-switch-block"
        ])
      }, [
        props.thin ? (openBlock(), createBlock(_component_VLabel, {
          key: 0,
          raw: "",
          class: normalizeClass(["thin-switch", [props.color && `is-${props.color}`]]),
          tabindex: "0",
          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => emit("update:modelValue", !props.modelValue), ["prevent"]), ["space"]))
        }, {
          default: withCtx(() => [
            createVNode(_component_VInput, mergeProps({
              modelValue: value.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
              type: "checkbox"
            }, unref(attrs)), null, 16, ["modelValue"]),
            _hoisted_1
          ]),
          _: 1
        }, 8, ["class"])) : (openBlock(), createBlock(_component_VLabel, {
          key: 1,
          raw: "",
          class: normalizeClass(["form-switch", [props.color && `is-${props.color}`]])
        }, {
          default: withCtx(() => [
            createVNode(_component_VInput, mergeProps({
              raw: "",
              checked: props.modelValue,
              type: "checkbox",
              class: "is-switch"
            }, _ctx.$attrs, {
              onChange: _cache[2] || (_cache[2] = ($event) => emit("update:modelValue", !props.modelValue))
            }), null, 16, ["checked"]),
            _hoisted_2
          ]),
          _: 1
        }, 8, ["class"])),
        props.label ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createVNode(_component_VLabel, { raw: "" }, {
            default: withCtx(() => [
              createBaseVNode("span", null, toDisplayString(props.label), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export { _sfc_main as _ };
