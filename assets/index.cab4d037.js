import { _ as _sfc_main$6 } from "./VDropdown.a45445fa.js";
import { y as defineComponent, p as resolveComponent, o as openBlock, f as createBlock, w as withCtx, q as createVNode, j as createBaseVNode, z as ref, N as onBeforeMount, i as createElementBlock, t as toDisplayString, A as onMounted, e as computed, Y as withDirectives, a1 as vModelText, D as unref, k as normalizeClass, F as Fragment, s as renderList, ap as TransitionGroup, P as useHead } from "./index.aedac316.js";
import { e as onValue, r as ref$1, d as database } from "./config.9bf2e6c5.js";
import { b as GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR, L as LISTARENTRENADORES } from "./superentrenador.3ee7d721.js";
import { L as LISTAR_RUTINAS_GRATUITAS_ENTRENADOR } from "./rutinas.5a00d2f9.js";
import { f as formatDate } from "./general.a67d6d2f.js";
import { _ as _sfc_main$9 } from "./VAvatar.ad12e553.js";
import { _ as _sfc_main$8 } from "./VPlaceholderPage.efd177bc.js";
import { a as __unplugin_components_2, b as _sfc_main$7 } from "./VControl.bc2cde1a.js";
import { u as useViewWrapper } from "./viewWrapper.e58f1ab4.js";
import "./main.03abd8f7.js";
import "./deportista.b3f8517f.js";
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      const _component_VDropdown = _sfc_main$6;
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
              _hoisted_1$1,
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
              _hoisted_4$1,
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    id: String
  },
  setup(__props) {
    const props = __props;
    const solicitudes = ref([]);
    onBeforeMount(async () => {
      onValue(ref$1(database, "solicitudes"), async (snapshot) => {
        if (snapshot.exists()) {
          solicitudes.value = await GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR(
            props.id ? props.id : "",
            snapshot.val()
          );
        } else {
          solicitudes.value = [];
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, toDisplayString(solicitudes.value.length), 1);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    id: String
  },
  setup(__props) {
    const props = __props;
    const planesGratuitos = ref([]);
    onBeforeMount(async () => {
      planesGratuitos.value = await LISTAR_RUTINAS_GRATUITAS_ENTRENADOR(
        props.id ? props.id : ""
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, toDisplayString(planesGratuitos.value.length), 1);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    fecha: String
  },
  setup(__props) {
    const props = __props;
    const fecha = ref();
    onMounted(async () => {
      fecha.value = await formatDate(props.fecha ? props.fecha : "");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, toDisplayString(fecha.value), 1);
    };
  }
});
var _imports_0 = "/assets/search-1.78685bd5.svg";
var _imports_1 = "/assets/search-1-dark.2f181a27.svg";
var ListaEntrenadores_vue_vue_type_style_index_0_lang = "";
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
    const filteredData = computed(() => {
      if (!filters.value) {
        return entrenadores.value;
      } else {
        return entrenadores.value.filter((item) => {
          return item.nombres.match(new RegExp(filters.value, "i")) || item.apellidos.match(new RegExp(filters.value, "i"));
        });
      }
    });
    onBeforeMount(async () => {
      const data = await LISTARENTRENADORES();
      if (Array.isArray(data)) {
        entrenadores.value = data;
      }
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$7;
      const _component_VPlaceholderPage = _sfc_main$8;
      const _component_VAvatar = _sfc_main$9;
      const _component_FechaRegistro = _sfc_main$2;
      const _component_ContadorPlanes = _sfc_main$3;
      const _component_ContadorDeportistas = _sfc_main$4;
      const _component_OpcionesListaEntrenadores = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
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
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "No pudimos encontrar ning\xFAn resultado.",
              subtitle: "Parece que no pudimos encontrar ning\xFAn resultado con el\n          t\xE9rmino de b\xFAsqueda que ha ingresado. Pruebe con diferentes t\xE9rminos de b\xFAsqueda o\n          criterios.",
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
                          picture: item.foto_url || "/src/assets/avatars/user.jpg",
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
      ]);
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
