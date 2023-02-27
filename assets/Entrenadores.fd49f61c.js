var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { y as defineComponent, o as openBlock, i as createElementBlock, g as renderSlot, k as normalizeClass, N as useRoute, e as computed, h, aw as RouterLink, z as ref, ax as refDebounced, C as watch, V as watchEffect, r as reactive, ah as provide, ai as inject, H as isReactive, ay as toRaw, F as Fragment, s as renderList, f as createBlock, Q as resolveDynamicComponent, t as toDisplayString, D as unref, l as createCommentVNode, j as createBaseVNode, w as withCtx, M as withKeys, v as withModifiers, a as useUserSession, au as withAsyncContext, A as onMounted, p as resolveComponent, q as createVNode, a2 as withDirectives, a8 as vModelText, az as TransitionGroup, m as createTextVNode, Z as _sfc_main$7 } from "./index.420249be.js";
import { _ as _sfc_main$a, a as _sfc_main$b } from "./ModalCancelar.777638d8.js";
import { _ as _sfc_main$8, a as _sfc_main$9 } from "./VTag.18512bb3.js";
import { _ as _sfc_main$6 } from "./VAvatar.3dbb7ab0.js";
import { _ as _sfc_main$5 } from "./VPlaceholderPage.62cc82b5.js";
import { _ as _sfc_main$4 } from "./VField.20e6a090.js";
import { _ as __unplugin_components_2 } from "./VControl.fa82c9c6.js";
import { e as onValue, r as ref$1, d as database } from "./config.3d78ff49.js";
import { u as useViewWrapper } from "./viewWrapper.621f0af8.js";
import { G as GET_ENTRENADORES_VALIDOS } from "./entrenador.803a0518.js";
import { O as OBTENER_PLAN_DEPORTISTA, g as getDatosDeportista } from "./deportista.d647ed5b.js";
import { G as GET_SOLICITUDES_DEPORTISTA, V as VERIFICAR_MATCH } from "./match.a9331782.js";
var VFlexTableCell_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = ["data-th"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
      ], 10, _hoisted_1$2);
    };
  }
});
const _sfc_main$2 = defineComponent({
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
    const rawSort = computed(() => {
      var _a, _b;
      return (_b = (_a = props.modelValue) != null ? _a : route.query[props.routerQueryKey]) != null ? _b : "";
    });
    const isAsc = computed(() => rawSort.value === `${props.id}:asc`);
    const isDesc = computed(() => rawSort.value === `${props.id}:desc`);
    const nextSort = computed(() => {
      return isAsc.value ? `${props.id}:desc` : isDesc.value ? void 0 : `${props.id}:asc`;
    });
    const sortedLink = computed(() => {
      if (props.noRouter) {
        return {};
      }
      const query = __spreadValues({}, route.query);
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
      const link = h(RouterLink, {
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
      }, {
        default() {
          const icon = h("span", { key: `${rawSort.value}`, class: "is-inline" }, h("span", {
            class: "ml-3 iconify is-inline",
            "data-icon": isAsc.value ? "fa:sort-asc" : isDesc.value ? "fa:sort-desc" : "fa:sort"
          }));
          return [slotContent != null ? slotContent : props.label, icon];
        }
      });
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
          acc[key] = __spreadValues({
            format: defaultFormatter,
            label: key,
            key
          }, value);
          if (value.sortable === true) {
            if (value.renderHeader) {
              acc[key].renderHeader = () => {
                return h(_sfc_main$2, {
                  id: key,
                  noRouter: true,
                  modelValue: sort.value,
                  "onUpdate:modelValue": (value2) => sort.value = value2
                }, {
                  default: value.renderHeader
                });
              };
            } else {
              acc[key].renderHeader = () => {
                var _a;
                return h(_sfc_main$2, {
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
    const totalPages = computed(() => total.value ? Math.ceil(total.value / limit.value) : 0);
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
const _hoisted_1$1 = {
  key: 0,
  class: "flex-table-header"
};
const _hoisted_2$1 = ["tabindex", "onKeydown", "onClick"];
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = { class: "language-json py-4" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
            columns2.push(__spreadValues({
              format: defaultFormatter2,
              label: key,
              key
            }, label));
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
      const _component_VFlexTableCell = _sfc_main$3;
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
          !props.noHeader ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
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
                class: normalizeClass(["flex-table-item", [props.clickable && "is-clickable"]]),
                tabindex: props.clickable ? 0 : void 0,
                onKeydown: withKeys(withModifiers(() => {
                  props.clickable && emits("rowClick", row, index);
                }, ["prevent"]), ["space"]),
                onClick: () => {
                  props.clickable && emits("rowClick", row, index);
                }
              }, [
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
                            __props.printObjects ? (openBlock(), createElementBlock("details", _hoisted_3$1, [
                              createBaseVNode("div", _hoisted_4$1, [
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
              ], 42, _hoisted_2$1),
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
var Entrenadores_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_4 = {
  key: 0,
  class: "flex-table-item"
};
const _hoisted_5 = { class: "item-name dark-inverted" };
const _hoisted_6 = { class: "item-meta" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Visitar Perfil ");
const _hoisted_8 = { class: "item-name dark-inverted" };
const _hoisted_9 = { class: "item-meta" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Visitar Perfil ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Enviar Solicitud");
const _sfc_main = /* @__PURE__ */ defineComponent({
  async setup(__props) {
    let __temp, __restore;
    const filters = ref("");
    const userSession = useUserSession();
    const columns = {
      username: {
        label: "Entrenador",
        grow: true,
        media: true
      },
      estrellas: "Estrellas",
      preview: "Perfil",
      actions: {
        label: "Solicitud",
        align: "end"
      }
    };
    let entrenadores = ref([]);
    let entrenador = ref({});
    let solicitudes = ref([]);
    let resMatch = ref({});
    let datosDeportista = ref({
      nombres: "",
      apellidos: "",
      email: "",
      descripcion: "",
      nameUser: "",
      identificacion: "",
      fecha_nacimiento: "",
      fecha_registro: "",
      telefono: "",
      genero: "",
      ciudad: "",
      pais: "",
      pictureName: ""
    });
    const plan = ([__temp, __restore] = withAsyncContext(() => OBTENER_PLAN_DEPORTISTA(userSession.userId)), __temp = await __temp, __restore(), __temp);
    const contadorSolicitudes = ref();
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Solicitudes");
    const filteredData = computed(() => {
      if (!filters.value) {
        return entrenadores.value;
      } else {
        const filterRe = new RegExp(filters.value, "i");
        return entrenadores.value.filter((item) => {
          return item.nombres.match(filterRe) || item.apellidos.match(filterRe);
        });
      }
    });
    onMounted(async () => {
      datosDeportista.value = await getDatosDeportista(userSession.userId);
      contadorSolicitudes.value = plan.solicitudesEnviadas;
      onValue(ref$1(database, "users"), (snapshot) => {
        if (snapshot.exists()) {
          entrenadores.value = GET_ENTRENADORES_VALIDOS(snapshot.val());
        } else {
          entrenadores = null;
        }
      });
      onValue(ref$1(database, "solicitudes"), (snapshot) => {
        if (snapshot.exists()) {
          solicitudes.value = GET_SOLICITUDES_DEPORTISTA(userSession.userId, snapshot.val());
          resMatch.value = VERIFICAR_MATCH(userSession.userId, snapshot.val());
          if (resMatch.value.match) {
            onValue(ref$1(database, "users/" + resMatch.value.entrenador), (snapshot2) => {
              if (snapshot2.exists()) {
                entrenador.value = snapshot2.val();
                entrenador.value.id = resMatch.value.entrenador;
              } else {
                console.log("no existe");
                entrenador = null;
              }
            });
          }
        } else {
          solicitudes = null;
        }
      });
      onValue(ref$1(database, "users/" + userSession.userId + "/plan/solicitudesEnviadas"), (snapshot) => {
        if (snapshot.exists()) {
          contadorSolicitudes.value = snapshot.val();
        } else {
          contadorSolicitudes.value = null;
        }
      });
    });
    const verificarSolicitud = (idEntrenador) => {
      let value = false;
      solicitudes.value.forEach((solicitud) => {
        if (solicitud.id_entrenador === idEntrenador && solicitud.estado === "Pendiente") {
          value = true;
        }
      });
      return value;
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$4;
      const _component_VPlaceholderPage = _sfc_main$5;
      const _component_VAvatar = _sfc_main$6;
      const _component_VFlexTableCell = _sfc_main$3;
      const _component_VButton = _sfc_main$7;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VTag = _sfc_main$8;
      const _component_VTags = _sfc_main$9;
      const _component_ModalCancelar = _sfc_main$a;
      const _component_ModalEnviar = _sfc_main$b;
      const _component_VFlexTable = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VField, null, {
              default: withCtx(() => [
                createVNode(_component_VControl, { icon: "feather:search" }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                      class: "input custom-text-filter",
                      placeholder: "Buscar..."
                    }, null, 512), [
                      [vModelText, filters.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          !unref(filteredData).length ? (openBlock(), createBlock(_component_VPlaceholderPage, {
            key: 0,
            title: "No pudimos encontrar ning\xFAn resultado coincidente.",
            subtitle: "Parece que no pudimos encontrar ning\xFAn resultado que coincida con los t\xE9rminos de b\xFAsqueda que ingres\xF3. Pruebe diferentes t\xE9rminos o criterios de b\xFAsqueda.",
            larger: ""
          })) : createCommentVNode("", true),
          unref(filteredData).length ? (openBlock(), createBlock(_component_VFlexTable, {
            key: 1,
            data: unref(filteredData),
            columns: unref(columns),
            compact: ""
          }, {
            body: withCtx(() => [
              createVNode(TransitionGroup, {
                name: "list",
                tag: "div",
                class: "flex-list-inner"
              }, {
                default: withCtx(() => [
                  unref(resMatch).match ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    createVNode(_component_VFlexTableCell, { column: { media: true, grow: true } }, {
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          picture: unref(entrenador).foto_url,
                          badge: unref(entrenador).badge,
                          color: unref(entrenador).color,
                          initials: unref(entrenador).initials,
                          size: "medium"
                        }, null, 8, ["picture", "badge", "color", "initials"]),
                        createBaseVNode("div", null, [
                          createBaseVNode("span", _hoisted_5, toDisplayString(unref(entrenador).nombres) + " " + toDisplayString(unref(entrenador).apellidos), 1),
                          createBaseVNode("span", _hoisted_6, [
                            createBaseVNode("span", null, toDisplayString(unref(entrenador).rol), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VFlexTableCell, null, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(entrenador).estrellas, (estrellas) => {
                          return openBlock(), createElementBlock("i", {
                            key: estrellas,
                            class: "fas fa-star",
                            "aria-hidden": "true"
                          });
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VFlexTableCell, null, {
                      default: withCtx(() => [
                        createVNode(_component_RouterLink, {
                          to: {
                            name: "deportista-profile-preViewEntrenador",
                            params: { data: JSON.stringify(unref(entrenador)) }
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VButton, {
                              rounded: "",
                              raised: "",
                              color: "primary",
                              bold: ""
                            }, {
                              default: withCtx(() => [
                                _hoisted_7
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VFlexTableCell, { column: { align: "end" } }, {
                      default: withCtx(() => [
                        createVNode(_component_VTags, null, {
                          default: withCtx(() => [
                            createVNode(_component_VTag, {
                              rounded: "",
                              size: "medium",
                              color: "green",
                              label: "Este es tu entrenador"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.id,
                      class: "flex-table-item"
                    }, [
                      createVNode(_component_VFlexTableCell, { column: { media: true, grow: true } }, {
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            picture: item.foto_url,
                            badge: item.badge,
                            color: item.color,
                            initials: item.initials,
                            size: "medium"
                          }, null, 8, ["picture", "badge", "color", "initials"]),
                          createBaseVNode("div", null, [
                            createBaseVNode("span", _hoisted_8, toDisplayString(item.nombres) + " " + toDisplayString(item.apellidos), 1),
                            createBaseVNode("span", _hoisted_9, [
                              createBaseVNode("span", null, toDisplayString(item.rol), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.estrellas, (estrellas) => {
                            return openBlock(), createElementBlock("i", {
                              key: estrellas,
                              class: "fas fa-star",
                              "aria-hidden": "true"
                            });
                          }), 128))
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          createVNode(_component_RouterLink, {
                            to: {
                              name: "deportista-profile-preViewEntrenador",
                              params: { data: JSON.stringify(item) }
                            }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                rounded: "",
                                raised: "",
                                color: "primary",
                                bold: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_10
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, { column: { align: "end" } }, {
                        default: withCtx(() => [
                          item.id === unref(resMatch).entrenador ? (openBlock(), createBlock(_component_VTags, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_VTag, {
                                rounded: "",
                                size: "medium",
                                color: "green",
                                label: "Este es tu entrenador"
                              })
                            ]),
                            _: 1
                          })) : contadorSolicitudes.value >= unref(plan).solicitudes || unref(resMatch).match ? (openBlock(), createBlock(_component_VButton, {
                            key: 1,
                            color: "primary",
                            bold: "",
                            rounded: "",
                            raised: "",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_11
                            ]),
                            _: 1
                          })) : verificarSolicitud(item.id) ? (openBlock(), createBlock(_component_ModalCancelar, {
                            key: 2,
                            id: unref(userSession).userId,
                            solicitudes: unref(solicitudes),
                            "id-entrenador": item.id
                          }, null, 8, ["id", "solicitudes", "id-entrenador"])) : (openBlock(), createBlock(_component_ModalEnviar, {
                            key: 3,
                            id: unref(userSession).userId,
                            "datos-deportista": unref(datosDeportista),
                            entrenador: item
                          }, null, 8, ["id", "datos-deportista", "entrenador"]))
                        ]),
                        _: 2
                      }, 1024)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data", "columns"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
