import { y as defineComponent, e as computed, h, p as resolveComponent, r as reactive, z as ref, C as watch, X as withDirectives, a9 as vModelText, o as openBlock, i as createElementBlock, D as unref, k as normalizeClass } from "./index.4254dce5.js";
import { u as useVFieldContext } from "./VLabel.3ba45fcc.js";
const _sfc_main$1 = defineComponent({
  props: {
    icon: {
      type: String,
      required: true
    },
    to: {
      type: Object,
      default: void 0
    },
    href: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([void 0, "primary", "info", "success", "warning", "danger", "white"].indexOf(
          value
        ) === -1) {
          console.warn(
            `VIconButton: invalid "${value}" color. Should be primary, info, success, warning, danger, white or undefined`
          );
          return false;
        }
        return true;
      }
    },
    dark: {
      type: String,
      default: void 0,
      validator: (value) => {
        if (!value)
          return true;
        if (["1", "2", "3", "4", "5", "6"].indexOf(value) === -1) {
          console.warn(
            `VIconButton: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`
          );
          return false;
        }
        return true;
      }
    },
    circle: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    elevated: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    darkOutlined: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { attrs }) {
    const classes = computed(() => {
      const defaultClasses = (attrs == null ? void 0 : attrs.class) || [];
      return [
        ...defaultClasses,
        props.disabled && "is-disabled",
        props.circle && "is-circle",
        props.bold && "is-bold",
        props.outlined && "is-outlined",
        props.raised && "is-raised",
        props.dark && `is-dark-bg-${props.dark}`,
        props.darkOutlined && "is-dark-outlined",
        props.elevated && "is-elevated",
        props.loading && "is-loading",
        props.color && `is-${props.color}`,
        props.light && "is-light"
      ];
    });
    const isIconify = computed(() => props.icon && props.icon.indexOf(":") !== -1);
    return () => {
      let icon;
      if (isIconify.value) {
        icon = h("i", {
          "aria-hidden": true,
          class: "iconify",
          "data-icon": props.icon
        });
      } else {
        icon = h("i", { "aria-hidden": true, class: props.icon });
      }
      const iconWrapper = h("span", { class: "icon" }, icon);
      if (props.to) {
        return h(
          resolveComponent("RouterLink"),
          {
            ...attrs,
            to: props.to,
            class: ["button", ...classes.value]
          },
          iconWrapper
        );
      } else if (props.href) {
        return h(
          "a",
          {
            ...attrs,
            href: props.href,
            class: classes.value
          },
          iconWrapper
        );
      }
      return h(
        "button",
        {
          type: "button",
          ...attrs,
          disabled: props.disabled,
          class: ["button", ...classes.value]
        },
        iconWrapper
      );
    };
  }
});
const _hoisted_1 = ["id", "name"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    raw: { type: Boolean },
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    var _a, _b;
    const props = __props;
    const vFieldContext = reactive(
      useVFieldContext({
        create: false,
        help: "VTextarea"
      })
    );
    const value = ref((_b = (_a = vFieldContext == null ? void 0 : vFieldContext.field) == null ? void 0 : _a.value) != null ? _b : props.modelValue);
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
      return ["textarea"];
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("textarea", {
        id: unref(vFieldContext).id,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        class: normalizeClass(unref(classes)),
        name: unref(vFieldContext).id,
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
export { _sfc_main$1 as _, _sfc_main as a };
