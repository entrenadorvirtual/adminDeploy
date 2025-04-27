import { _ as _sfc_main$3 } from "./VIcon.02741722.js";
import { _ as _sfc_main$4 } from "./VDropdown.dafd4ef1.js";
import { y as defineComponent, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, q as createVNode, j as createBaseVNode, z as ref, e as computed, N as onBeforeMount, i as createElementBlock, Y as withDirectives, a1 as vModelText, D as unref, t as toDisplayString, al as vModelSelect, F as Fragment, s as renderList, k as normalizeClass, an as TransitionGroup, v as withModifiers, P as useHead } from "./index.7bbae714.js";
import { _ as _sfc_main$9, a as _sfc_main$a } from "./ContadorPlanes.b9740b44.js";
import { _ as _imports_0, a as _imports_1, b as _sfc_main$8 } from "./search-1-dark.db7edb37.js";
import { _ as _sfc_main$7 } from "./VAvatar.857f15d4.js";
import { _ as _sfc_main$6 } from "./VPlaceholderPage.cf7fe017.js";
import { _ as _sfc_main$5 } from "./VField.74eec4bb.js";
import { a as __unplugin_components_0 } from "./VControl.329fee09.js";
import { d as LISTARENTRENADORES } from "./superentrenador.37580e46.js";
import { u as useViewWrapper } from "./viewWrapper.e8abb625.js";
import "./config.cf3a8941.js";
import "./rutinas.f9a29ddc.js";
import "./main.abb91ed8.js";
import "./general.436cc3e4.js";
import "./deportista.721fdc30.js";
const _hoisted_1$1 = { class: "icon" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Perfil"),
  /* @__PURE__ */ createBaseVNode("span", null, "Ver entrenador")
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_4$1 = { class: "icon" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Deportistas"),
  /* @__PURE__ */ createBaseVNode("span", null, "Ver deportistas vincualdos")
], -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_7$1 = { class: "icon" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Planes"),
  /* @__PURE__ */ createBaseVNode("span", null, "Ver planes registrados")
], -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    dataEntrenador: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["documentos", "planes", "seleccion"],
  setup(__props, { emit: emits }) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_VIcon = _sfc_main$3;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VDropdown = _sfc_main$4;
      return openBlock(), createBlock(_component_VDropdown, {
        icon: "feather:more-vertical",
        spaced: "",
        right: ""
      }, {
        content: withCtx(() => [
          createVNode(_component_RouterLink, {
            to: {
              name: "superentrenador-perfil-entrenador",
              params: { id: props.dataEntrenador.id }
            },
            role: "menuitem",
            class: "dropdown-item is-media"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                createVNode(_component_VIcon, { icon: "lucide:user" })
              ]),
              _hoisted_2$1
            ]),
            _: 1
          }, 8, ["to"]),
          _hoisted_3$1,
          createVNode(_component_RouterLink, {
            to: {
              name: "superentrenador-deportistas-entrenador",
              params: { id: props.dataEntrenador.id }
            },
            role: "menuitem",
            href: "#",
            class: "dropdown-item is-media"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4$1, [
                createVNode(_component_VIcon, { icon: "lucide:activity" })
              ]),
              _hoisted_5$1
            ]),
            _: 1
          }, 8, ["to"]),
          _hoisted_6$1,
          createVNode(_component_RouterLink, {
            to: {
              name: "superentrenador-planes-entrenador",
              params: { id: props.dataEntrenador.id }
            },
            role: "menuitem",
            href: "#",
            class: "dropdown-item is-media"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_7$1, [
                createVNode(_component_VIcon, { icon: "lucide:book" })
              ]),
              _hoisted_8$1
            ]),
            _: 1
          }, 8, ["to"]),
          _hoisted_9$1
        ]),
        _: 1
      });
    };
  }
});
var ListaEntrenadores_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-view-toolbar" };
const _hoisted_2 = { class: "list-info" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "items-per-page-selector" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("label", { for: "itemsPerPage" }, "Mostrar:", -1);
const _hoisted_7 = ["value"];
const _hoisted_8 = { class: "page-content-inner" };
const _hoisted_9 = { class: "list-view list-view-v1" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_12 = { class: "list-view-inner" };
const _hoisted_13 = { class: "list-view-item-inner" };
const _hoisted_14 = { class: "meta-left" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_16 = { class: "meta-right" };
const _hoisted_17 = { class: "stats" };
const _hoisted_18 = { class: "stat" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "Fecha registro", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_21 = { class: "stat" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "Planes", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_24 = { class: "stat" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", null, "Deportistas", -1);
const _hoisted_26 = {
  class: "v-flex flex-pagination pagination is-rounded",
  role: "navigation",
  "aria-label": "pagination"
};
const _hoisted_27 = { class: "pagination-list" };
const _hoisted_28 = ["onClick"];
const _hoisted_29 = {
  key: 1,
  class: "pagination-ellipsis"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const entrenadores = ref([]);
    const paginaActual = ref(1);
    const itemsPerPagina = ref(5);
    const filteredData = computed(() => {
      if (!filters.value) {
        return entrenadores.value;
      } else {
        return entrenadores.value.filter((item) => {
          return item.nombres.match(new RegExp(filters.value, "i")) || item.apellidos.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const paginaData = computed(() => {
      const comenzar = (paginaActual.value - 1) * itemsPerPagina.value;
      const final = comenzar + itemsPerPagina.value;
      return filteredData.value.slice(comenzar, final);
    });
    const totalPaginas = computed(() => {
      return Math.ceil(filteredData.value.length / itemsPerPagina.value);
    });
    const cambiarPagina = (page) => {
      if (page >= 1 && page <= totalPaginas.value) {
        paginaActual.value = page;
      }
    };
    const paginasVisibles = computed(() => {
      const maxVisiblesPaginas = 8;
      const pages = [];
      pages.push(1);
      if (totalPaginas.value <= maxVisiblesPaginas) {
        for (let i = 2; i <= totalPaginas.value; i++) {
          pages.push(i);
        }
      } else {
        let comenzarPagina = Math.max(paginaActual.value - 3, 2);
        let finPagina = Math.min(paginaActual.value + 3, totalPaginas.value - 1);
        if (comenzarPagina > 2) {
          pages.push("...");
        }
        for (let i = comenzarPagina; i <= finPagina; i++) {
          pages.push(i);
        }
        if (finPagina < totalPaginas.value - 1) {
          pages.push("...");
        }
        pages.push(totalPaginas.value);
      }
      return pages;
    });
    const cambiarItemsPerPagina = (event) => {
      const target = event.target;
      itemsPerPagina.value = Number(target.value);
      paginaActual.value = 1;
    };
    onBeforeMount(async () => {
      const data = await LISTARENTRENADORES();
      if (Array.isArray(data)) {
        entrenadores.value = data;
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$5;
      const _component_VPlaceholderPage = _sfc_main$6;
      const _component_VAvatar = _sfc_main$7;
      const _component_FechaRegistro = _sfc_main$8;
      const _component_ContadorPlanes = _sfc_main$9;
      const _component_ContadorDeportistas = _sfc_main$a;
      const _component_OpcionesListaEntrenadores = _sfc_main$2;
      const _component_VIcon = _sfc_main$3;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_VField, null, {
              default: withCtx(() => [
                createVNode(_component_VControl, { icon: "feather:search" }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                      class: "input custom-text-filter",
                      placeholder: "Search..."
                    }, null, 512), [
                      [vModelText, filters.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2, [
              unref(filteredData).length === 1 ? (openBlock(), createElementBlock("span", _hoisted_3, "1 Entrenador")) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(filteredData).length) + " Entrenadores", 1))
            ]),
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              withDirectives(createBaseVNode("select", {
                id: "itemsPerPage",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => itemsPerPagina.value = $event),
                onChange: cambiarItemsPerPagina
              }, [
                (openBlock(), createElementBlock(Fragment, null, renderList(5, (n) => {
                  return createBaseVNode("option", {
                    key: n,
                    value: n * 5
                  }, toDisplayString(n * 5), 9, _hoisted_7);
                }), 64))
              ], 544), [
                [vModelSelect, itemsPerPagina.value]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_VPlaceholderPage, {
                class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
                title: "No pudimos encontrar ning\xFAn resultado.",
                subtitle: "Parece que no pudimos encontrar ning\xFAn resultado con el\n          t\xE9rmino de b\xFAsqueda que ha ingresado. Pruebe con diferentes t\xE9rminos de b\xFAsqueda o\n          criterios.",
                larger: ""
              }, {
                image: withCtx(() => [
                  _hoisted_10,
                  _hoisted_11
                ]),
                _: 1
              }, 8, ["class"]),
              createBaseVNode("div", _hoisted_12, [
                createVNode(TransitionGroup, {
                  name: "list-complete",
                  tag: "div"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paginaData), (item, key) => {
                      return openBlock(), createElementBlock("div", {
                        key,
                        class: "list-view-item"
                      }, [
                        createBaseVNode("div", _hoisted_13, [
                          createVNode(_component_VAvatar, {
                            picture: item.foto_url || "/src/assets/avatars/user.jpg",
                            size: "large"
                          }, null, 8, ["picture"]),
                          createBaseVNode("div", _hoisted_14, [
                            createBaseVNode("h3", null, toDisplayString(item.nombres) + " " + toDisplayString(item.apellidos), 1),
                            createBaseVNode("span", null, [
                              _hoisted_15,
                              createBaseVNode("span", null, toDisplayString(item.ciudad), 1)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_16, [
                            createBaseVNode("div", _hoisted_17, [
                              createBaseVNode("div", _hoisted_18, [
                                createBaseVNode("span", null, [
                                  createVNode(_component_FechaRegistro, {
                                    fecha: item.fecha_registro
                                  }, null, 8, ["fecha"])
                                ]),
                                _hoisted_19
                              ]),
                              _hoisted_20,
                              createBaseVNode("div", _hoisted_21, [
                                createBaseVNode("span", null, [
                                  createVNode(_component_ContadorPlanes, {
                                    id: item.id
                                  }, null, 8, ["id"])
                                ]),
                                _hoisted_22
                              ]),
                              _hoisted_23,
                              createBaseVNode("div", _hoisted_24, [
                                createBaseVNode("span", null, [
                                  createVNode(_component_ContadorDeportistas, {
                                    id: item.id
                                  }, null, 8, ["id"])
                                ]),
                                _hoisted_25
                              ])
                            ]),
                            createVNode(_component_OpcionesListaEntrenadores, { "data-entrenador": item }, null, 8, ["data-entrenador"])
                          ])
                        ])
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_26, [
          createBaseVNode("ul", _hoisted_27, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paginasVisibles), (page, index) => {
              return openBlock(), createElementBlock("li", { key: index }, [
                page !== "..." ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: "javascript:void(0)",
                  class: normalizeClass([["pagination-link", { "is-current": paginaActual.value === page }], "router-link-active router-link-exact-active pagination-link"]),
                  tabindex: "0",
                  onClick: withModifiers(($event) => cambiarPagina(page), ["prevent"])
                }, toDisplayString(page), 11, _hoisted_28)) : (openBlock(), createElementBlock("span", _hoisted_29, "\u2026"))
              ]);
            }), 128))
          ]),
          createBaseVNode("a", {
            href: "javascript:void(0)",
            class: normalizeClass(["pagination-previous has-chevron", { "is-disabled": paginaActual.value === 1 }]),
            "aria-current": "page",
            tabindex: "0",
            onClick: _cache[2] || (_cache[2] = withModifiers(($event) => cambiarPagina(paginaActual.value - 1), ["prevent"]))
          }, [
            createVNode(_component_VIcon, { icon: "lucide:chevron-left" })
          ], 2),
          createBaseVNode("a", {
            href: "javascript:void(0)",
            class: normalizeClass(["pagination-next has-chevron", { "is-disabled": paginaActual.value === unref(totalPaginas) }]),
            "aria-current": "page",
            tabindex: "0",
            onClick: _cache[3] || (_cache[3] = withModifiers(($event) => cambiarPagina(paginaActual.value + 1), ["prevent"]))
          }, [
            createVNode(_component_VIcon, { icon: "lucide:chevron-right" })
          ], 2)
        ])
      ], 64);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Lista entrenadores");
    useHead({
      title: "Entrenadores"
    });
    return (_ctx, _cache) => {
      const _component_ListaEntrenadores = _sfc_main$1;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_ListaEntrenadores)
      ]);
    };
  }
});
export { _sfc_main as default };
