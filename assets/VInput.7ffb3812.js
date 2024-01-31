import { y as defineComponent, r as reactive, z as ref, C as watch, e as computed, Y as withDirectives, a1 as vModelText, o as openBlock, i as createElementBlock, D as unref, k as normalizeClass } from "./index.aedac316.js";
import { u as useVFieldContext } from "./VControl.bc2cde1a.js";
const _hoisted_1 = ["id", "name", "true-value", "false-value"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    raw: { type: Boolean },
    modelValue: { default: "" },
    trueValue: { type: Boolean, default: true },
    falseValue: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    const vFieldContext = reactive(
      useVFieldContext({
        create: false,
        help: "VInput"
      })
    );
    const value = ref((_b = (_a = vFieldContext.field) == null ? void 0 : _a.value) != null ? _b : props.modelValue);
    watch(value, () => {
      emits("update:modelValue", value.value);
    });
    watch(
      () => props.modelValue,
      () => {
        value.value = props.modelValue;
      }
    );
    const classes = computed(() => {
      if (props.raw)
        return [];
      return ["input"];
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("input", {
        id: unref(vFieldContext).id,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        class: normalizeClass(unref(classes)),
        name: unref(vFieldContext).id,
        "true-value": props.trueValue,
        "false-value": props.falseValue,
        onChange: _cache[1] || (_cache[1] = (...args) => {
          var _a2, _b2;
          return ((_a2 = unref(vFieldContext).field) == null ? void 0 : _a2.handleChange) && ((_b2 = unref(vFieldContext).field) == null ? void 0 : _b2.handleChange(...args));
        }),
        onBlur: _cache[2] || (_cache[2] = (...args) => {
          var _a2, _b2;
          return ((_a2 = unref(vFieldContext).field) == null ? void 0 : _a2.handleBlur) && ((_b2 = unref(vFieldContext).field) == null ? void 0 : _b2.handleBlur(...args));
        })
      }, null, 42, _hoisted_1)), [
        [vModelText, value.value]
      ]);
    };
  }
});
export { _sfc_main as _ };
