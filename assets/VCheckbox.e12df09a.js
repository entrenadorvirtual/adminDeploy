import { u as useVFieldContext, _ as _sfc_main$1 } from "./VLabel.c9d776c3.js";
import { y as defineComponent, r as reactive, z as ref, e as computed, C as watch, o as openBlock, f as createBlock, w as withCtx, a1 as withDirectives, an as vModelCheckbox, j as createBaseVNode, x as mergeProps, D as unref, g as renderSlot, m as createTextVNode, t as toDisplayString, V as normalizeProps, W as guardReactiveProps, k as normalizeClass } from "./index.3437b938.js";
var VCheckbox_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["id", "true-value", "false-value"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    raw: { type: Boolean },
    label: { default: void 0 },
    color: { default: void 0 },
    trueValue: { type: [String, Number, Boolean], default: true },
    falseValue: { type: [String, Number, Boolean], default: false },
    modelValue: { default: false },
    circle: { type: Boolean, default: false },
    solid: { type: Boolean, default: false },
    paddingless: { type: Boolean, default: false },
    wrapperClass: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    const vFieldContext = reactive(useVFieldContext());
    const $value = ref((_b = (_a = vFieldContext.field) == null ? void 0 : _a.value) != null ? _b : props.modelValue);
    const classes = computed(() => {
      if (props.raw)
        return [props.wrapperClass];
      return [
        "checkbox",
        props.wrapperClass,
        props.solid ? "is-solid" : "is-outlined",
        props.circle && "is-circle",
        props.color && `is-${props.color}`,
        props.paddingless && "is-paddingless"
      ];
    });
    watch($value, () => {
      emits("update:modelValue", $value.value);
    });
    watch(() => props.modelValue, () => {
      $value.value = props.modelValue;
    });
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$1;
      return openBlock(), createBlock(_component_VLabel, {
        raw: "",
        class: normalizeClass(unref(classes))
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("input", mergeProps({
            id: unref(vFieldContext).id,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $value.value = $event)
          }, _ctx.$attrs, {
            "true-value": props.trueValue,
            "false-value": props.falseValue,
            type: "checkbox"
          }), null, 16, _hoisted_1), [
            [vModelCheckbox, $value.value]
          ]),
          _hoisted_2,
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(unref(vFieldContext))), () => [
            createTextVNode(toDisplayString(props.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
export { _sfc_main as _ };
