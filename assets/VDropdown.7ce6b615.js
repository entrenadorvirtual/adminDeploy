import { _ as _sfc_main$1 } from "./VIcon.f1c6decb.js";
import { r as reactive, z as ref, ai as onClickOutside, ab as watchEffect, y as defineComponent, o as openBlock, i as createElementBlock, g as renderSlot, Q as withKeys, v as withModifiers, D as unref, q as createVNode, k as normalizeClass, t as toDisplayString, l as createCommentVNode, j as createBaseVNode, f as createBlock, a5 as normalizeProps, a6 as guardReactiveProps } from "./index.5c29604d.js";
function useDropdown(container) {
  const isOpen = ref(false);
  onClickOutside(container, () => {
    isOpen.value = false;
  });
  const open = () => {
    isOpen.value = true;
  };
  const close = () => {
    isOpen.value = false;
  };
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  watchEffect(() => {
    if (!container.value) {
      return;
    }
    if (isOpen.value) {
      container.value.classList.add("is-active");
    } else {
      container.value.classList.remove("is-active");
    }
  });
  return reactive({
    isOpen,
    open,
    close,
    toggle
  });
}
var VDropdown_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  class: "dropdown-menu",
  role: "menu"
};
const _hoisted_3 = { class: "dropdown-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: void 0 },
    color: { default: void 0 },
    icon: { default: void 0 },
    up: { type: Boolean },
    right: { type: Boolean },
    modern: { type: Boolean },
    spaced: { type: Boolean }
  },
  setup(__props, { expose }) {
    const props = __props;
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
    expose({
      ...dropdown
    });
    return (_ctx, _cache) => {
      const _component_VIcon = _sfc_main$1;
      return openBlock(), createElementBlock("div", {
        ref_key: "dropdownElement",
        ref: dropdownElement,
        class: normalizeClass([[
          props.right && "is-right",
          props.up && "is-up",
          props.icon && "is-dots",
          props.modern && "is-modern",
          props.spaced && "is-spaced"
        ], "dropdown"])
      }, [
        renderSlot(_ctx.$slots, "button", normalizeProps(guardReactiveProps(unref(dropdown))), () => [
          props.icon ? (openBlock(), createElementBlock("a", {
            key: 0,
            tabindex: "0",
            class: "is-trigger dropdown-trigger",
            "aria-label": "View more actions",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(
              (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args),
              ["prevent"]
            ), ["space"])),
            onClick: _cache[1] || (_cache[1] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
          }, [
            createVNode(_component_VIcon, {
              icon: props.icon
            }, null, 8, ["icon"])
          ], 32)) : (openBlock(), createElementBlock("a", {
            key: 1,
            tabindex: "0",
            class: normalizeClass(["is-trigger button dropdown-trigger", [props.color && `is-${props.color}`]]),
            onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(
              (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args),
              ["prevent"]
            ), ["space"])),
            onClick: _cache[3] || (_cache[3] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
          }, [
            props.title ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(props.title), 1)) : createCommentVNode("", true),
            createBaseVNode("span", {
              class: normalizeClass([!props.modern && "base-caret", props.modern && "base-caret"])
            }, [
              !unref(dropdown).isOpen ? (openBlock(), createBlock(_component_VIcon, {
                key: 0,
                icon: "fa:angle-down"
              })) : (openBlock(), createBlock(_component_VIcon, {
                key: 1,
                icon: "fa:angle-up"
              }))
            ], 2)
          ], 34))
        ]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "content", normalizeProps(guardReactiveProps(unref(dropdown))))
          ])
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _, useDropdown as u };
