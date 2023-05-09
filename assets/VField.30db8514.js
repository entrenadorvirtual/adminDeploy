import { u as useVFieldContext, _ as _sfc_main$1 } from "./VLabel.3ba45fcc.js";
import { y as defineComponent, r as reactive, aa as useSlots, e as computed, o as openBlock, i as createElementBlock, D as unref, F as Fragment, j as createBaseVNode, g as renderSlot, q as createVNode, w as withCtx, m as createTextVNode, t as toDisplayString, a0 as normalizeProps, a1 as guardReactiveProps, x as mergeProps, k as normalizeClass } from "./index.4254dce5.js";
const _hoisted_1 = { class: "field-label is-normal" };
const _hoisted_2 = { class: "field-body" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    id: { default: void 0 },
    label: { default: void 0 },
    addons: { type: Boolean },
    textaddon: { type: Boolean },
    grouped: { type: Boolean },
    multiline: { type: Boolean },
    horizontal: { type: Boolean },
    subcontrol: { type: Boolean },
    raw: { type: Boolean }
  },
  setup(__props, { expose }) {
    const props = __props;
    const vFieldContext = reactive(
      useVFieldContext({ id: props.id, inherit: !props.subcontrol })
    );
    const slots = useSlots();
    const hasLabel = computed(() => {
      var _a;
      return Boolean(((_a = slots == null ? void 0 : slots.label) == null ? void 0 : _a.call(slots)) || props.label);
    });
    const classes = computed(() => {
      if (props.raw)
        return [];
      return [
        "field",
        props.addons && "has-addons",
        props.textaddon && "has-textarea-addon",
        props.grouped && "is-grouped",
        props.grouped && props.multiline && "is-grouped-multiline",
        props.horizontal && "is-horizontal"
      ];
    });
    expose(vFieldContext);
    return (_ctx, _cache) => {
      const _component_VLabel = _sfc_main$1;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(classes))
      }, [
        unref(hasLabel) && props.horizontal ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "label", normalizeProps(guardReactiveProps(unref(vFieldContext))), () => [
              createVNode(_component_VLabel, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.label), 1)
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(unref(vFieldContext))))
          ])
        ], 64)) : unref(hasLabel) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          renderSlot(_ctx.$slots, "label", normalizeProps(guardReactiveProps(unref(vFieldContext))), () => [
            createVNode(_component_VLabel, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(props.label), 1)
              ]),
              _: 1
            })
          ]),
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(unref(vFieldContext))))
        ], 64)) : renderSlot(_ctx.$slots, "default", normalizeProps(mergeProps({ key: 2 }, unref(vFieldContext))))
      ], 2);
    };
  }
});
export { _sfc_main as _ };
