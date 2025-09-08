import { _ as _sfc_main$1 } from "./VIconButton.174a0a95.js";
import { x as defineComponent, b as computed, o as openBlock, g as createElementBlock, p as createVNode, F as Fragment, q as renderList, j as normalizeClass, P as withKeys, t as toDisplayString, C as unref } from "./index.5859d3e2.js";
var Paginador_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "pagination" };
const _hoisted_2 = ["onClick", "onKeydown"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    totalItems: null,
    currentPage: null,
    itemsPerPage: null
  },
  emits: ["update:currentPage"],
  setup(__props, { emit }) {
    const props = __props;
    const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));
    const visiblePages = computed(() => {
      const totalPagesCount = totalPages.value;
      const currentPage = props.currentPage;
      const pages = [];
      if (totalPagesCount <= 5) {
        for (let i = 1; i <= totalPagesCount; i++) {
          pages.push(i);
        }
        return pages;
      }
      if (currentPage < 5) {
        for (let i = 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        if (currentPage + 1 < totalPagesCount - 1) {
          pages.push("...");
        }
        pages.push(totalPagesCount);
      } else if (currentPage >= 5 && currentPage <= totalPagesCount - 3) {
        pages.push(1, "...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...", totalPagesCount);
      } else {
        pages.push(1, "...");
        for (let i = totalPagesCount - 3; i <= totalPagesCount; i++) {
          pages.push(i);
        }
      }
      if (totalPagesCount <= 5) {
        for (let i = 1; i <= totalPagesCount; i++) {
          pages.push(i);
        }
      }
      return pages;
    });
    const changePage = (page) => {
      if (page !== "..." && page >= 1 && page <= totalPages.value) {
        emit("update:currentPage", page);
      }
    };
    return (_ctx, _cache) => {
      const _component_VIconButton = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VIconButton, {
          disabled: props.currentPage === 1,
          icon: "lucide:chevrons-left",
          class: "pagination-button",
          onClick: _cache[0] || (_cache[0] = ($event) => changePage(props.currentPage - 1))
        }, null, 8, ["disabled"]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(visiblePages), (page) => {
          return openBlock(), createElementBlock("span", {
            key: page,
            tabindex: "0",
            class: normalizeClass(["pagination-page", { active: page === props.currentPage }]),
            onClick: ($event) => changePage(page),
            onKeydown: [
              withKeys(($event) => changePage(page), ["enter"]),
              withKeys(($event) => changePage(page), ["space"])
            ]
          }, toDisplayString(page), 43, _hoisted_2);
        }), 128)),
        createVNode(_component_VIconButton, {
          disabled: props.currentPage === unref(totalPages),
          icon: "lucide:chevrons-right",
          class: "pagination-button",
          onClick: _cache[1] || (_cache[1] = ($event) => changePage(props.currentPage + 1))
        }, null, 8, ["disabled"])
      ]);
    };
  }
});
export { _sfc_main as _ };
