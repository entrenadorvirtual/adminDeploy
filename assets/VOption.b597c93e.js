import { y as defineComponent, r as reactive, z as ref, aq as useAttrs, C as watch, e as computed, o as openBlock, i as createElementBlock, Y as withDirectives, as as vModelSelect, j as createBaseVNode, g as renderSlot, ab as normalizeProps, ac as guardReactiveProps, D as unref, x as mergeProps, k as normalizeClass } from "./index.aedac316.js";
import { u as useVFieldContext } from "./VControl.bc2cde1a.js";
const _hoisted_1 = ["id", "name", "multiple"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    raw: { type: Boolean },
    modelValue: { default: "" },
    multiple: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    const vFieldContext = reactive(
      useVFieldContext({
        create: false,
        help: "VSelect"
      })
    );
    const value = ref((_b = (_a = vFieldContext == null ? void 0 : vFieldContext.field) == null ? void 0 : _a.value) != null ? _b : props.modelValue);
    const attrs = useAttrs();
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
      return ["select", props.multiple && "is-multiple"];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(classes))
      }, [
        withDirectives(createBaseVNode("select", mergeProps({
          id: unref(vFieldContext).id
        }, unref(attrs), {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          name: unref(vFieldContext).id,
          multiple: props.multiple,
          onChange: _cache[1] || (_cache[1] = (...args) => {
            var _a2, _b2;
            return ((_a2 = unref(vFieldContext).field) == null ? void 0 : _a2.handleChange) && ((_b2 = unref(vFieldContext).field) == null ? void 0 : _b2.handleChange(...args));
          }),
          onBlur: _cache[2] || (_cache[2] = (...args) => {
            var _a2, _b2;
            return ((_a2 = unref(vFieldContext).field) == null ? void 0 : _a2.handleBlur) && ((_b2 = unref(vFieldContext).field) == null ? void 0 : _b2.handleBlur(...args));
          })
        }), [
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({ selected: value.value, id: unref(vFieldContext).id })))
        ], 16, _hoisted_1), [
          [vModelSelect, value.value]
        ])
      ], 2);
    };
  }
});
var VOption_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const vFieldContext = reactive(
      useVFieldContext({
        create: false,
        help: "VOption"
      })
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("option", null, [
        renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(unref(vFieldContext))))
      ]);
    };
  }
});
export { _sfc_main as _, _sfc_main$1 as a };
