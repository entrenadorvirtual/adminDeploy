import { y as defineComponent, o as openBlock, i as createElementBlock, g as renderSlot, k as normalizeClass, M as useRoute, e as computed, h, R as RouterLink, z as ref, au as refDebounced, C as watch, a6 as watchEffect, r as reactive, a5 as provide, a7 as inject, H as isReactive, av as toRaw, F as Fragment, s as renderList, f as createBlock, a3 as resolveDynamicComponent, t as toDisplayString, D as unref, l as createCommentVNode, j as createBaseVNode, w as withCtx, Q as withKeys, v as withModifiers } from "./index.a7fc5dec.js";
var VFlexTableCell_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = ["data-th"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    column: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["flex-table-cell is-relative", [
          props.column.bold && "is-bold",
          props.column.media && "is-media",
          props.column.grow === true && "is-grow",
          props.column.grow === "lg" && "is-grow-lg",
          props.column.grow === "xl" && "is-grow-xl",
          props.column.scrollX && !props.column.scrollY && "has-slimscroll-x",
          !props.column.scrollX && props.column.scrollY && "has-slimscroll",
          props.column.scrollX && props.column.scrollY && "has-slimscroll-all",
          props.column.align === "end" && "cell-end",
          props.column.align === "center" && "cell-center",
          props.column.cellClass
        ]]),
        "data-th": props.column.label || void 0
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$1);
    };
  }
});
const _sfc_main$1 = defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: void 0
    },
    modelValue: {
      type: String,
      default: void 0
    },
    noRouter: {
      type: Boolean,
      default: void 0
    },
    routerQueryKey: {
      type: String,
      default: "sort"
    }
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const route = useRoute();
    const rawSort = computed(
      () => {
        var _a, _b;
        return (_b = (_a = props.modelValue) != null ? _a : route.query[props.routerQueryKey]) != null ? _b : "";
      }
    );
    const isAsc = computed(() => rawSort.value === `${props.id}:asc`);
    const isDesc = computed(() => rawSort.value === `${props.id}:desc`);
    const nextSort = computed(() => {
      return isAsc.value ? `${props.id}:desc` : isDesc.value ? void 0 : `${props.id}:asc`;
    });
    const sortedLink = computed(() => {
      if (props.noRouter) {
        return {};
      }
      const query = {
        ...route.query
      };
      if (props.routerQueryKey) {
        query[props.routerQueryKey] = nextSort.value;
      }
      return {
        name: route.name,
        params: route.params,
        query
      };
    });
    const handleLinkClick = (e) => {
      context.emit("update:modelValue", nextSort.value);
      if (props.noRouter) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    return () => {
      var _a, _b;
      const slotContent = (_b = (_a = context.slots) == null ? void 0 : _a.default) == null ? void 0 : _b.call(_a, {
        isDesc: isDesc.value,
        isAsc: isAsc.value,
        nextSort: nextSort.value,
        value: rawSort.value
      });
      const link = h(
        RouterLink,
        {
          to: sortedLink.value,
          onClick: handleLinkClick,
          onKeydown(e) {
            if (e.code === "Space") {
              e.preventDefault();
              e.stopPropagation();
              if (e.target instanceof HTMLAnchorElement) {
                e.target.dispatchEvent(new MouseEvent("click"));
              }
            }
          }
        },
        {
          default() {
            const icon = h(
              "span",
              { key: `${rawSort.value}`, class: "is-inline" },
              h("span", {
                class: "ml-3 iconify is-inline",
                "data-icon": isAsc.value ? "fa:sort-asc" : isDesc.value ? "fa:sort-desc" : "fa:sort"
              })
            );
            return [slotContent != null ? slotContent : props.label, icon];
          }
        }
      );
      return h("span", {}, link);
    };
  }
});
var VFlexTableWrapper_vue_vue_type_style_index_0_lang = "";
const flewTableWrapperSymbol = Symbol();
const defaultFormatter = (value) => value;
const defaultSortFunction = ({ key, order, a, b }) => {
  const aValue = a[key];
  const bValue = b[key];
  if (typeof aValue === "string") {
    if (order === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  }
  if (aValue > bValue) {
    return order === "asc" ? 1 : -1;
  }
  if (aValue < bValue) {
    return order === "asc" ? -1 : 1;
  }
  return 0;
};
defineComponent({
  props: {
    data: {
      type: [Array, Function],
      default: void 0
    },
    columns: {
      type: Object,
      default: void 0
    },
    sort: {
      type: String,
      default: void 0
    },
    searchTerm: {
      type: String,
      default: void 0
    },
    limit: {
      type: Number,
      default: void 0
    },
    page: {
      type: Number,
      default: void 0
    },
    total: {
      type: Number,
      default: void 0
    },
    debounceSearch: {
      type: Number,
      default: 300
    }
  },
  emits: ["update:sort", "update:page", "update:limit", "update:searchTerm"],
  setup(props, context) {
    const rawData = ref();
    const loading = ref(false);
    const defaultSort = ref("");
    const sort = computed({
      get: () => {
        var _a;
        return (_a = props.sort) != null ? _a : defaultSort.value;
      },
      set(value) {
        if (props.sort === void 0) {
          defaultSort.value = value;
        } else {
          context.emit("update:sort", value);
        }
      }
    });
    const defaultSearchInput = ref("");
    const searchInput = computed({
      get: () => {
        var _a;
        return (_a = props.searchTerm) != null ? _a : defaultSearchInput.value;
      },
      set(value) {
        if (props.searchTerm === void 0) {
          defaultSearchInput.value = value;
        } else {
          context.emit("update:searchTerm", value);
        }
      }
    });
    const defaultPage = ref(1);
    const page = computed({
      get: () => {
        var _a;
        return (_a = props.page) != null ? _a : defaultPage.value;
      },
      set(value) {
        if (props.page === void 0) {
          defaultPage.value = value;
        } else {
          context.emit("update:page", value);
        }
      }
    });
    const defaultLimit = ref(10);
    const limit = computed({
      get: () => {
        var _a;
        return Math.max(1, (_a = props.limit) != null ? _a : defaultLimit.value);
      },
      set(value) {
        if (props.limit === void 0) {
          defaultLimit.value = value;
        } else {
          context.emit("update:limit", value);
        }
      }
    });
    const columns = computed(() => {
      const columnProps = props.columns;
      if (!columnProps)
        return columnProps;
      const wrapperColumns = {};
      Object.keys(columnProps).reduce((acc, key) => {
        const value = columnProps[key];
        if (typeof value === "string") {
          acc[key] = {
            format: defaultFormatter,
            label: value,
            key
          };
        } else if (typeof value === "object") {
          acc[key] = {
            format: defaultFormatter,
            label: key,
            key,
            ...value
          };
          if (value.sortable === true) {
            if (value.renderHeader) {
              acc[key].renderHeader = () => {
                return h(
                  _sfc_main$1,
                  {
                    id: key,
                    noRouter: true,
                    modelValue: sort.value,
                    "onUpdate:modelValue": (value2) => sort.value = value2
                  },
                  {
                    default: value.renderHeader
                  }
                );
              };
            } else {
              acc[key].renderHeader = () => {
                var _a;
                return h(_sfc_main$1, {
                  id: key,
                  label: (_a = value.label) != null ? _a : key,
                  noRouter: true,
                  modelValue: sort.value,
                  "onUpdate:modelValue": (value2) => sort.value = value2
                });
              };
            }
          }
          if (value.searchable === true && !value.sort) {
            acc[key].sort = defaultSortFunction;
          }
        }
        return acc;
      }, wrapperColumns);
      return wrapperColumns;
    });
    const filteredData = computed(() => {
      let data2 = rawData.value;
      if (!data2)
        return data2;
      if (typeof props.data === "function")
        return data2;
      if (searchTerm.value) {
        const searchableColumns = columns.value ? Object.values(columns.value).filter((column) => {
          if (!column || typeof column === "string")
            return false;
          return column.searchable === true;
        }) : [];
        if (searchableColumns.length) {
          const _searchRe = new RegExp(searchTerm.value, "i");
          data2 = data2.filter((row, index) => {
            return searchableColumns.some((column) => {
              if (!column.key)
                return false;
              const value = row[column.key];
              if (column.filter) {
                return column.filter({
                  searchTerm: searchTerm.value,
                  value,
                  row,
                  column,
                  index
                });
              }
              if (typeof value === "string")
                return value.match(_searchRe);
              return false;
            });
          });
        }
      }
      return data2;
    });
    const sortedData = computed(() => {
      let data2 = filteredData.value;
      if (!data2)
        return data2;
      if (typeof props.data === "function")
        return data2;
      if (sort.value && sort.value.includes(":")) {
        const [sortField, sortOrder] = sort.value.split(":");
        const sortingColumn = columns.value ? Object.values(columns.value).find((column) => {
          if (!column || typeof column === "string")
            return false;
          return column.sortable === true && column.key === sortField;
        }) : null;
        if (sortingColumn) {
          const sorted = [...data2];
          sorted.sort((a, b) => {
            if (!sortingColumn.key)
              return 0;
            if (!sortingColumn.sort)
              return 0;
            return sortingColumn.sort({
              order: sortOrder,
              column: sortingColumn,
              key: sortingColumn.key,
              a,
              b
            });
          });
          data2 = sorted;
        }
      }
      return data2;
    });
    const data = computed(() => {
      if (typeof props.data === "function")
        return rawData.value;
      if (!rawData.value)
        return rawData.value;
      let data2 = sortedData.value;
      return data2 == null ? void 0 : data2.slice(start.value, start.value + limit.value);
    });
    const searchTerm = refDebounced(searchInput, props.debounceSearch);
    const total = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = props.total) != null ? _b : (_a = sortedData.value) == null ? void 0 : _a.length) != null ? _c : 0;
    });
    const start = computed(() => (page.value - 1) * limit.value);
    const totalPages = computed(
      () => total.value ? Math.ceil(total.value / limit.value) : 0
    );
    async function fetchData(controller) {
      if (typeof props.data === "function") {
        loading.value = true;
        try {
          rawData.value = await props.data({
            searchTerm: searchTerm.value,
            start: start.value,
            limit: limit.value,
            sort: sort.value,
            controller
          });
        } finally {
          loading.value = false;
        }
      }
    }
    watch([searchTerm, limit], () => {
      if (page.value !== 1) {
        page.value = 1;
      }
    });
    watchEffect(async (onInvalidate) => {
      let controller;
      if (typeof props.data === "function") {
        controller = new AbortController();
        await fetchData(controller);
      } else {
        rawData.value = props.data;
      }
      onInvalidate(() => {
        controller == null ? void 0 : controller.abort();
      });
    });
    const wrapperState = reactive({
      data,
      columns,
      loading,
      searchInput,
      searchTerm,
      start,
      page,
      limit,
      sort,
      total,
      totalPages,
      fetchData
    });
    provide(flewTableWrapperSymbol, wrapperState);
    return () => {
      var _a, _b;
      const slotContent = (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a, wrapperState);
      return h("div", { class: "flex-table-wrapper" }, slotContent);
    };
  }
});
var VFlexTable_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = {
  key: 0,
  class: "flex-table-header"
};
const _hoisted_2 = ["tabindex", "onKeydown", "onClick"];
const _hoisted_3 = { class: "item-index" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "language-json py-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    data: { default: () => [] },
    columns: { default: void 0 },
    printObjects: { type: Boolean },
    reactive: { type: Boolean },
    compact: { type: Boolean },
    rounded: { type: Boolean },
    separators: { type: Boolean },
    clickable: { type: Boolean },
    subtable: { type: Boolean },
    noHeader: { type: Boolean }
  },
  emits: ["rowClick"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const wrapper = inject(flewTableWrapperSymbol, null);
    const data = computed(() => {
      if (wrapper == null ? void 0 : wrapper.data)
        return wrapper.data;
      if (props.reactive) {
        if (isReactive(props.data)) {
          return props.data;
        } else {
          return reactive(props.data);
        }
      }
      return toRaw(props.data);
    });
    const defaultFormatter2 = (value) => value;
    const columns = computed(() => {
      var _a;
      const columnsSrc = (_a = wrapper == null ? void 0 : wrapper.columns) != null ? _a : props.columns;
      let columns2 = [];
      if (columnsSrc) {
        for (const [key, label] of Object.entries(columnsSrc)) {
          if (typeof label === "string") {
            columns2.push({
              format: defaultFormatter2,
              label,
              key
            });
          } else {
            columns2.push({
              format: defaultFormatter2,
              label: key,
              key,
              ...label
            });
          }
        }
      } else if (data.value.length > 0) {
        for (const [key] of Object.entries(data.value[0])) {
          columns2.push({
            format: defaultFormatter2,
            label: key,
            key
          });
        }
      }
      return columns2;
    });
    return (_ctx, _cache) => {
      const _component_VFlexTableCell = _sfc_main$2;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["flex-table", [
          props.compact && "is-compact",
          props.rounded && "is-rounded",
          props.separators && "with-separators",
          props.noHeader && "no-header",
          props.clickable && "is-table-clickable",
          props.subtable && "sub-table"
        ]])
      }, [
        renderSlot(_ctx.$slots, "header", {}, () => [
          !props.noHeader ? (openBlock(), createElementBlock("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(columns), (column) => {
              return renderSlot(_ctx.$slots, "header-column", {
                key: "col" + column.key,
                column
              }, () => [
                column.renderHeader ? (openBlock(), createBlock(resolveDynamicComponent({ render: column.renderHeader }), {
                  key: 0,
                  class: normalizeClass([
                    column.grow === true && "is-grow",
                    column.grow === "lg" && "is-grow-lg",
                    column.grow === "xl" && "is-grow-xl",
                    column.align === "end" && "cell-end",
                    column.align === "center" && "cell-center"
                  ])
                }, null, 8, ["class"])) : (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: normalizeClass([
                    column.grow === true && "is-grow",
                    column.grow === "lg" && "is-grow-lg",
                    column.grow === "xl" && "is-grow-xl",
                    column.align === "end" && "cell-end",
                    column.align === "center" && "cell-center"
                  ])
                }, toDisplayString(column.label), 3))
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        renderSlot(_ctx.$slots, "body", {}, () => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(data), (row, index) => {
            return openBlock(), createElementBlock(Fragment, { key: index }, [
              renderSlot(_ctx.$slots, "body-row-pre", {
                row,
                columns: unref(columns),
                index
              }),
              createBaseVNode("div", {
                class: normalizeClass(["flex-table-item", [
                  props.clickable && "is-clickable",
                  row.marca === "inicio" ? "inicio" : row.marca === "final" ? "final" : ""
                ]]),
                tabindex: props.clickable ? 0 : void 0,
                onKeydown: withKeys(withModifiers(
                  () => {
                    props.clickable && emits("rowClick", row, index);
                  },
                  ["prevent"]
                ), ["space"]),
                onClick: () => {
                  props.clickable && emits("rowClick", row, index);
                }
              }, [
                createBaseVNode("p", _hoisted_3, toDisplayString(index + 1), 1),
                renderSlot(_ctx.$slots, "body-row", {
                  row,
                  columns: unref(columns),
                  index
                }, () => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(columns), (column) => {
                    return openBlock(), createBlock(_component_VFlexTableCell, {
                      key: "row" + column.key,
                      column
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "body-cell", {
                          row,
                          column,
                          index,
                          value: column.format(row[column.key], row, index)
                        }, () => [
                          column.renderRow ? (openBlock(), createBlock(resolveDynamicComponent({ render: () => {
                            var _a;
                            return (_a = column.renderRow) == null ? void 0 : _a.call(column, row, column, index);
                          } }), { key: 0 })) : typeof column.format(row[column.key], row, index) === "object" ? (openBlock(), createElementBlock("span", {
                            key: 1,
                            class: normalizeClass([
                              column.cellClass,
                              column.inverted && "dark-inverted",
                              !column.inverted && (column.bold ? "dark-text" : "light-text")
                            ])
                          }, [
                            __props.printObjects ? (openBlock(), createElementBlock("details", _hoisted_4, [
                              createBaseVNode("div", _hoisted_5, [
                                createBaseVNode("pre", null, [
                                  createBaseVNode("code", null, toDisplayString(column.format(row[column.key], row, index)), 1)
                                ])
                              ])
                            ])) : createCommentVNode("", true)
                          ], 2)) : (openBlock(), createElementBlock("span", {
                            key: 2,
                            class: normalizeClass([
                              column.cellClass,
                              column.inverted && "dark-inverted",
                              !column.inverted && (column.bold ? "dark-text" : "light-text")
                            ])
                          }, toDisplayString(column.format(row[column.key], row, index)), 3))
                        ])
                      ]),
                      _: 2
                    }, 1032, ["column"]);
                  }), 128))
                ])
              ], 42, _hoisted_2),
              renderSlot(_ctx.$slots, "body-row-post", {
                row,
                columns: unref(columns),
                index
              })
            ], 64);
          }), 128))
        ])
      ], 2);
    };
  }
});
export { _sfc_main as _, _sfc_main$2 as a };
