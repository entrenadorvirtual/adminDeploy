import { _ as _sfc_main$3 } from "./VDropdown.40b2c764.js";
import { x as defineComponent, m as resolveComponent, o as openBlock, e as createBlock, w as withCtx, p as createVNode, i as createBaseVNode, y as ref, b as computed, M as onBeforeMount, g as createElementBlock, Z as withDirectives, a2 as vModelText, C as unref, t as toDisplayString, j as normalizeClass, F as Fragment, q as renderList, am as TransitionGroup, O as useHead } from "./index.7277f539.js";
import { _ as _sfc_main$9, a as _sfc_main$a } from "./ContadorPlanes.e4c0532d.js";
import { _ as _imports_0, a as _imports_1, b as _sfc_main$8 } from "./search-1-dark.3fc8872e.js";
import { _ as _sfc_main$7 } from "./VAvatar.ea1017a0.js";
import { _ as _sfc_main$6 } from "./VPlaceholderPage.370af12f.js";
import { _ as _sfc_main$5 } from "./Paginador.ff77bb04.js";
import { _ as _sfc_main$4 } from "./VField.04329715.js";
import { a as __unplugin_components_0 } from "./VControl.258dc3fc.js";
import { d as LISTARENTRENADORES } from "./superentrenador.0814834f.js";
import { u as useViewWrapper } from "./viewWrapper.d9a08fd8.js";
import "./VIcon.3ee9f83c.js";
import "./config.28ac5e58.js";
import "./rutinas.4c182eb4.js";
import "./main.a2946418.js";
import "./general.651d3f13.js";
import "./VIconButton.73697e59.js";
import "./deportista.7005e8cc.js";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-user-alt"
  })
], -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Perfil"),
  /* @__PURE__ */ createBaseVNode("span", null, "Ver entrenador")
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-user-alt"
  })
], -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Deportistas"),
  /* @__PURE__ */ createBaseVNode("span", null, "Ver deportistas vincualdos")
], -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-user-alt"
  })
], -1);
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
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VDropdown = _sfc_main$3;
      return openBlock(), createBlock(_component_VDropdown, {
        icon: "feather:more-vertical",
        spaced: "",
        right: ""
      }, {
        content: withCtx(() => [
          createVNode(_component_RouterLink, {
            to: {
              name: "administrador-adminPerfilEntrenador",
              params: { id: props.dataEntrenador.id }
            },
            role: "menuitem",
            class: "dropdown-item is-media"
          }, {
            default: withCtx(() => [
              _hoisted_1$1,
              _hoisted_2$1
            ]),
            _: 1
          }, 8, ["to"]),
          _hoisted_3$1,
          createVNode(_component_RouterLink, {
            to: {
              name: "administrador-adminListaDeportistas",
              params: { id: props.dataEntrenador.id }
            },
            role: "menuitem",
            href: "#",
            class: "dropdown-item is-media"
          }, {
            default: withCtx(() => [
              _hoisted_4$1,
              _hoisted_5$1
            ]),
            _: 1
          }, 8, ["to"]),
          _hoisted_6$1,
          createVNode(_component_RouterLink, {
            to: {
              name: "administrador-adminPlanesGratuitos",
              params: { id: props.dataEntrenador.id }
            },
            role: "menuitem",
            href: "#",
            class: "dropdown-item is-media"
          }, {
            default: withCtx(() => [
              _hoisted_7$1,
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
var TablaPlanesGratuitos_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "list-view-toolbar" };
const _hoisted_2 = { class: "list-info" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "page-content-inner" };
const _hoisted_6 = { class: "list-view list-view-v1" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_9 = { class: "list-view-inner" };
const _hoisted_10 = { class: "list-view-item-inner" };
const _hoisted_11 = { class: "meta-left" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_13 = { class: "meta-right" };
const _hoisted_14 = { class: "stats" };
const _hoisted_15 = { class: "stat" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", null, "Fecha registro", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_18 = { class: "stat" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "Planes", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_21 = { class: "stat" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "Deportistas", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const entrenadores = ref([]);
    const itemsPerPage = 5;
    const currentPage = ref(1);
    const filteredData = computed(() => {
      const filtered = !filters.value ? entrenadores.value : entrenadores.value.filter(
        (item) => item.nombres.match(new RegExp(filters.value, "i")) || item.apellidos.match(new RegExp(filters.value, "i"))
      );
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      return filtered.slice(startIndex, startIndex + itemsPerPage);
    });
    onBeforeMount(async () => {
      const data = await LISTARENTRENADORES();
      if (Array.isArray(data)) {
        entrenadores.value = data;
      }
    });
    function getAvatarUrl(foto_url) {
      if (!foto_url || typeof foto_url !== "string" || foto_url.trim() === "" || foto_url === "null" || foto_url === "undefined") {
        return new URL("@/assets/avatars/user.jpg", self.location).href;
      }
      return foto_url;
    }
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$4;
      const _component_Paginador = _sfc_main$5;
      const _component_VPlaceholderPage = _sfc_main$6;
      const _component_VAvatar = _sfc_main$7;
      const _component_FechaRegistro = _sfc_main$8;
      const _component_ContadorPlanes = _sfc_main$9;
      const _component_ContadorDeportistas = _sfc_main$a;
      const _component_adminListaEntrenadores = _sfc_main$2;
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
          createBaseVNode("div", _hoisted_2, [
            unref(filteredData).length === 1 ? (openBlock(), createElementBlock("span", _hoisted_3, "1 Entrenador")) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(filteredData).length) + " Entrenadores", 1))
          ])
        ]),
        createVNode(_component_Paginador, {
          currentPage: currentPage.value,
          "onUpdate:currentPage": _cache[1] || (_cache[1] = ($event) => currentPage.value = $event),
          "total-items": entrenadores.value.length,
          "items-per-page": itemsPerPage
        }, null, 8, ["currentPage", "total-items"]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "No pudimos encontrar ning\xFAn resultado.",
              subtitle: "Parece que no pudimos encontrar ning\xFAn resultado con el\r\n          t\xE9rmino de b\xFAsqueda que ha ingresado. Pruebe con diferentes t\xE9rminos de b\xFAsqueda o\r\n          criterios.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_7,
                _hoisted_8
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", _hoisted_9, [
              createVNode(TransitionGroup, {
                name: "list-complete",
                tag: "div"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item, key) => {
                    return openBlock(), createElementBlock("div", {
                      key,
                      class: "list-view-item"
                    }, [
                      createBaseVNode("div", _hoisted_10, [
                        createVNode(_component_VAvatar, {
                          picture: getAvatarUrl(item.foto_url),
                          size: "large"
                        }, null, 8, ["picture"]),
                        createBaseVNode("div", _hoisted_11, [
                          createBaseVNode("h3", null, toDisplayString(item.nombres) + " " + toDisplayString(item.apellidos), 1),
                          createBaseVNode("span", null, [
                            _hoisted_12,
                            createBaseVNode("span", null, toDisplayString(item.ciudad), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_13, [
                          createBaseVNode("div", _hoisted_14, [
                            createBaseVNode("div", _hoisted_15, [
                              createBaseVNode("span", null, [
                                createVNode(_component_FechaRegistro, {
                                  fecha: item.fecha_registro
                                }, null, 8, ["fecha"])
                              ]),
                              _hoisted_16
                            ]),
                            _hoisted_17,
                            createBaseVNode("div", _hoisted_18, [
                              createBaseVNode("span", null, [
                                createVNode(_component_ContadorPlanes, {
                                  id: item.id
                                }, null, 8, ["id"])
                              ]),
                              _hoisted_19
                            ]),
                            _hoisted_20,
                            createBaseVNode("div", _hoisted_21, [
                              createBaseVNode("span", null, [
                                createVNode(_component_ContadorDeportistas, {
                                  id: item.id
                                }, null, 8, ["id"])
                              ]),
                              _hoisted_22
                            ])
                          ]),
                          createVNode(_component_adminListaEntrenadores, { "data-entrenador": item }, null, 8, ["data-entrenador"])
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
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Reporte Planes Gratuitos");
    useHead({
      title: "Reporte Planes Gratuitos"
    });
    return (_ctx, _cache) => {
      const _component_TablaPlanesGratuitos = _sfc_main$1;
      return openBlock(), createBlock(_component_TablaPlanesGratuitos);
    };
  }
});
export { _sfc_main as default };
