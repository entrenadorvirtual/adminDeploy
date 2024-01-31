import { y as defineComponent, M as useRoute, z as ref, C as watch, h, T as Transition, D as unref, V as _export_sfc } from "./index.b73b5b5a.js";
var VCollapseLinks_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  props: {
    open: {
      type: [Boolean, String],
      default: void 0
    },
    collapseId: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(props, { slots, emit }) {
    var _a, _b;
    const route = useRoute();
    const hasNestedLinkActive = ref(false);
    const slotContent = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
    const currentRoute = route.name;
    slotContent.forEach((child) => {
      var _a2, _b2;
      if (((_b2 = (_a2 = child.props) == null ? void 0 : _a2.to) == null ? void 0 : _b2.name) && currentRoute === child.props.to.name) {
        hasNestedLinkActive.value = true;
      }
    });
    const isOpen = ref(
      Boolean(
        hasNestedLinkActive.value || typeof props.collapseId === "string" && props.open === props.collapseId || typeof props.collapseId === "undefined" && props.open === true
      )
    );
    function toggle() {
      if (typeof props.collapseId === "string") {
        if (props.collapseId === props.open) {
          emit("update:open");
        } else {
          emit("update:open", props.collapseId);
        }
      } else {
        isOpen.value = !isOpen.value;
      }
    }
    watch(
      () => props.open,
      (val) => {
        isOpen.value = Boolean(
          typeof props.collapseId === "string" && unref(val) === props.collapseId || typeof props.collapseId === "undefined" && unref(val) === true
        );
      }
    );
    return () => {
      var _a2, _b2, _c;
      const header = (_a2 = slots.header) == null ? void 0 : _a2.call(slots);
      const slotContent2 = (_c = (_b2 = slots.default) == null ? void 0 : _b2.call(slots)) != null ? _c : [];
      const links = slotContent2.map((child) => h("li", {}, child));
      const parentLink = h(
        "a",
        {
          tabindex: 0,
          class: "parent-link",
          onClick: (e) => {
            e.preventDefault();
            toggle();
          },
          onKeydown(e) {
            if (e.code === "Space") {
              e.preventDefault();
              e.stopPropagation();
              toggle();
            }
          }
        },
        header
      );
      const collapseWrap = h("div", { class: "collapse-wrap" }, parentLink);
      const content = isOpen.value ? h("ul", {}, links) : void 0;
      return h(
        "li",
        {
          class: ["collapse-links has-children", isOpen.value && "active"]
        },
        [
          collapseWrap,
          h(
            Transition,
            {
              name: "collapse-links-transition",
              mode: "out-in",
              class: "collapse-content"
            },
            {
              default() {
                return content;
              }
            }
          )
        ]
      );
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b7b8ae54"]]);
export { __unplugin_components_0 as _ };
