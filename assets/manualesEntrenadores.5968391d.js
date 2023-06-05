import { y as defineComponent, an as useCssVars, D as unref, e as computed, o as openBlock, i as createElementBlock, g as renderSlot, V as useI18n, O as useRoute, p as resolveComponent, f as createBlock, w as withCtx, j as createBaseVNode, q as createVNode, k as normalizeClass, N as withKeys, v as withModifiers, l as createCommentVNode, s as renderList, m as createTextVNode, t as toDisplayString, F as Fragment, z as ref, a2 as _sfc_main$4, a7 as storeToRefs, A as onMounted, W as withDirectives, a8 as vModelText, ao as TransitionGroup } from "./index.5117c21f.js";
import { _ as _sfc_main$8, a as _sfc_main$9 } from "./VFlexTable.d73f528b.js";
import { _ as _sfc_main$5 } from "./VModal.61ebb5be.js";
import { _ as _sfc_main$7 } from "./VPlaceholderPage.1493dbfa.js";
import { _ as _sfc_main$6 } from "./VField.950615c2.js";
import { _ as __unplugin_components_2 } from "./VControl.a2f9c194.js";
import { a as administracionStore, h as LISTAR_MANUALES_ENTRENADOR } from "./administracion.4cb4eff8.js";
import "./VLabel.a843cb32.js";
import "./config.fc5b324a.js";
import "./main.3bd39e21.js";
var VFlex_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "v-flex" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    inline: { type: Boolean },
    flexDirection: { default: "row" },
    flexWrap: { default: "nowrap" },
    justifyContent: { default: "normal" },
    alignItems: { default: "normal" },
    alignContent: { default: "normal" },
    rowGap: { default: "normal" },
    columnGap: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "2c5d33dd": unref(display),
      "547e1a23": props.flexDirection,
      "7779a726": props.flexWrap,
      "97eaae68": props.justifyContent,
      "09038384": props.alignItems,
      "61083912": props.alignContent,
      "d6245ac2": props.rowGap,
      "60f25cbd": props.columnGap
    }));
    const display = computed(() => props.inline ? "inline-flex" : "flex");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Gehe zu Seite ", _interpolate(_named("page"))]);
        }
      },
      "en": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Goto page ", _interpolate(_named("page"))]);
        }
      },
      "es-MX": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Ir a la p\xE1gina ", _interpolate(_named("page"))]);
        }
      },
      "es": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Ir a la p\xE1gina ", _interpolate(_named("page"))]);
        }
      },
      "fr-FR": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Aller \xE0 la page ", _interpolate(_named("page"))]);
        }
      },
      "zh-CN": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["\u8F6C\u5230\u7B2C", _interpolate(_named("page")), "\u9875"]);
        }
      }
    }
  });
}
const _hoisted_1$2 = { class: "pagination-list" };
const _hoisted_2$2 = /* @__PURE__ */ createTextVNode(" 1 ");
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("span", { class: "pagination-ellipsis" }, "\u2026", -1);
const _hoisted_5$1 = [
  _hoisted_4$1
];
const _hoisted_6$1 = { key: 1 };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", { class: "pagination-ellipsis" }, "\u2026", -1);
const _hoisted_8$1 = [
  _hoisted_7$1
];
const _hoisted_9$1 = { key: 2 };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    itemPerPage: null,
    totalItems: null,
    currentPage: { default: 1 },
    maxLinksDisplayed: { default: 4 },
    noRouter: { type: Boolean },
    routerQueryKey: { default: "page" }
  },
  emits: ["update:currentPage"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    const route = useRoute();
    const lastPage = computed(() => Math.ceil(props.totalItems / props.itemPerPage) || 1);
    const totalPageDisplayed = computed(
      () => lastPage.value > props.maxLinksDisplayed + 2 ? props.maxLinksDisplayed + 2 : lastPage.value
    );
    const pages = computed(() => {
      const _pages = [];
      let firstButton = props.currentPage - Math.floor(totalPageDisplayed.value / 2);
      let lastButton = firstButton + (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2));
      if (firstButton < 1) {
        firstButton = 1;
        lastButton = firstButton + (totalPageDisplayed.value - 1);
      }
      if (lastButton > lastPage.value) {
        lastButton = lastPage.value;
        firstButton = lastButton - (totalPageDisplayed.value - 1);
      }
      for (let page = firstButton; page <= lastButton; page += 1) {
        if (page === firstButton || page === lastButton) {
          continue;
        }
        _pages.push(page);
      }
      return _pages;
    });
    const showLastLink = computed(() => lastPage.value > 1);
    const paginatedLink = (page = 1) => {
      if (props.noRouter) {
        return {};
      }
      const _page = Math.max(1, Math.min(page, lastPage.value));
      const query = {
        ...route.query
      };
      if (props.routerQueryKey) {
        query[props.routerQueryKey] = _page <= 1 ? void 0 : _page;
      }
      return {
        name: route.name,
        params: route.params,
        query
      };
    };
    const handleLinkClick = (e, page = 1) => {
      const _page = Math.max(1, Math.min(page, lastPage.value));
      emits("update:currentPage", _page);
      if (props.noRouter) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VFlex = _sfc_main$3;
      return openBlock(), createBlock(_component_VFlex, {
        role: "navigation",
        class: "flex-pagination pagination is-rounded",
        "aria-label": "pagination",
        "justify-content": "space-between"
      }, {
        default: withCtx(() => [
          createBaseVNode("ul", _hoisted_1$2, [
            renderSlot(_ctx.$slots, "before-pagination"),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, {
                to: paginatedLink(1),
                tabindex: "0",
                class: normalizeClass(["pagination-link", [__props.currentPage === 1 && "is-current"]]),
                "aria-label": unref(t)("goto-page-title", { page: 1 }),
                onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
                onClick: _cache[1] || (_cache[1] = (e) => handleLinkClick(e, 1))
              }, {
                default: withCtx(() => [
                  _hoisted_2$2
                ]),
                _: 1
              }, 8, ["to", "aria-label", "class"])
            ]),
            unref(showLastLink) && (unref(pages).length === 0 || unref(pages)[0] > 2) ? (openBlock(), createElementBlock("li", _hoisted_3$1, _hoisted_5$1)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pages), (page) => {
              return openBlock(), createElementBlock("li", { key: page }, [
                createVNode(_component_RouterLink, {
                  to: paginatedLink(page),
                  tabindex: "0",
                  class: normalizeClass(["pagination-link", [__props.currentPage === page && "is-current"]]),
                  "aria-label": unref(t)("goto-page-title", { page }),
                  "aria-current": __props.currentPage === page ? "page" : void 0,
                  onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
                  onClick: (e) => handleLinkClick(e, page)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(page), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "aria-label", "aria-current", "class", "onClick"])
              ]);
            }), 128)),
            unref(showLastLink) && unref(pages)[unref(pages).length - 1] < unref(lastPage) - 1 ? (openBlock(), createElementBlock("li", _hoisted_6$1, _hoisted_8$1)) : createCommentVNode("", true),
            unref(showLastLink) ? (openBlock(), createElementBlock("li", _hoisted_9$1, [
              createVNode(_component_RouterLink, {
                to: paginatedLink(unref(lastPage)),
                tabindex: "0",
                class: normalizeClass(["pagination-link", [__props.currentPage === unref(lastPage) && "is-current"]]),
                "aria-label": unref(t)("goto-page-title", { page: unref(lastPage) }),
                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
                onClick: _cache[4] || (_cache[4] = (e) => handleLinkClick(e, unref(lastPage)))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(lastPage)), 1)
                ]),
                _: 1
              }, 8, ["to", "aria-label", "class"])
            ])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "after-pagination")
          ]),
          renderSlot(_ctx.$slots, "before-navigation"),
          createVNode(_component_RouterLink, {
            to: paginatedLink(__props.currentPage - 1),
            tabindex: "0",
            class: "pagination-previous has-chevron",
            onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
            onClick: _cache[6] || (_cache[6] = (e) => handleLinkClick(e, __props.currentPage - 1))
          }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }, 8, ["to"]),
          createVNode(_component_RouterLink, {
            to: paginatedLink(__props.currentPage + 1),
            tabindex: "0",
            class: "pagination-next has-chevron",
            onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"])),
            onClick: _cache[8] || (_cache[8] = (e) => handleLinkClick(e, __props.currentPage + 1))
          }, {
            default: withCtx(() => [
              _hoisted_11
            ]),
            _: 1
          }, 8, ["to"]),
          renderSlot(_ctx.$slots, "after-navigation")
        ]),
        _: 3
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$2);
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("Ver");
const _hoisted_2$1 = ["src"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const centeredActionsOpen = ref(false);
    const closeModal = () => {
      centeredActionsOpen.value = false;
    };
    const mostrarInfo = () => {
      centeredActionsOpen.value = true;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$4;
      const _component_VModal = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_VButton, {
          color: "primary",
          onClick: mostrarInfo
        }, {
          default: withCtx(() => [
            _hoisted_1$1
          ]),
          _: 1
        }),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          "onUpdate:open": _cache[0] || (_cache[0] = ($event) => centeredActionsOpen.value = $event),
          title: "Vista",
          size: "big",
          noscroll: "",
          actions: "center",
          onClose: closeModal
        }, {
          content: withCtx(() => [
            createBaseVNode("iframe", {
              src: props.data.url,
              title: "Terminos y Condiciones",
              width: "100%",
              height: "400"
            }, null, 8, _hoisted_2$1)
          ]),
          _: 1
        }, 8, ["open"])
      ]);
    };
  }
});
const _hoisted_1 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_2 = { class: "tab-content is-active" };
const _hoisted_3 = { class: "item-name dark-inverted" };
const _hoisted_4 = { class: "item-meta" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_6 = { class: "light-text" };
const _hoisted_7 = { class: "light-text" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Actualizar");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Eliminar");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { manualesEntrenador } = storeToRefs(administracionStore());
    const filters = ref("");
    const columns = {
      Nombre: "nombre",
      version: "version",
      tipo: "tipo",
      visualizar: "visualizar",
      actualizar: "actualizar",
      eliminar: "eliminar"
    };
    const filteredData = computed(() => {
      if (!filters.value) {
        return manualesEntrenador.value;
      } else {
        const filterRe = new RegExp(filters.value, "i");
        return manualesEntrenador.value.filter((item) => {
          return item.nombre.match(filterRe);
        });
      }
    });
    onMounted(async () => {
      await LISTAR_MANUALES_ENTRENADOR();
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$6;
      const _component_VPlaceholderPage = _sfc_main$7;
      const _component_VFlexTableCell = _sfc_main$8;
      const _component_modalManualesEntrenador = _sfc_main$1;
      const _component_VButton = _sfc_main$4;
      const _component_VFlexTable = _sfc_main$9;
      const _component_VFlexPagination = _sfc_main$2;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
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
          }),
          !unref(filteredData).length ? (openBlock(), createBlock(_component_VPlaceholderPage, {
            key: 0,
            title: "No hay resultados",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",
            larger: ""
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_2, [
          unref(filteredData).length ? (openBlock(), createBlock(_component_VFlexTable, {
            key: 0,
            columns: unref(columns),
            rounded: "",
            data: unref(manualesEntrenador)
          }, {
            body: withCtx(() => [
              createVNode(TransitionGroup, {
                name: "list",
                tag: "div",
                class: "flex-list-inner"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (elemento) => {
                    return openBlock(), createElementBlock("div", {
                      key: elemento.id,
                      class: "flex-table-item"
                    }, [
                      createVNode(_component_VFlexTableCell, { column: { media: true, grow: true } }, {
                        default: withCtx(() => [
                          createBaseVNode("div", null, [
                            createBaseVNode("span", _hoisted_3, toDisplayString(elemento.nombre), 1),
                            createBaseVNode("span", _hoisted_4, [
                              createBaseVNode("span", null, [
                                _hoisted_5,
                                createTextVNode("Estado: " + toDisplayString(elemento.estado), 1)
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_6, toDisplayString(elemento.version), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_7, toDisplayString(elemento.tipo), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          createVNode(_component_modalManualesEntrenador, { data: elemento }, null, 8, ["data"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          createVNode(_component_VButton, {
                            size: "medium",
                            color: "success"
                          }, {
                            default: withCtx(() => [
                              _hoisted_8
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VFlexTableCell, { column: { align: "end" } }, {
                        default: withCtx(() => [
                          createVNode(_component_VButton, {
                            size: "medium",
                            color: "danger"
                          }, {
                            default: withCtx(() => [
                              _hoisted_9
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["columns", "data"])) : createCommentVNode("", true),
          unref(filteredData).length > 2 ? (openBlock(), createBlock(_component_VFlexPagination, {
            key: 1,
            "item-per-page": 5,
            "total-items": 4,
            "current-page": 1,
            "max-links-displayed": 7
          })) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
