import { _ as _sfc_main$8 } from "./SuperentrenadorLayout.4dba50af.js";
import { _ as _sfc_main$7 } from "./ViewProfile.58807f28.js";
import { _ as __unplugin_components_6 } from "./Calendario.f0e44068.js";
import { _ as _sfc_main$6 } from "./VIcon.e7104a19.js";
import { a as __unplugin_components_0 } from "./VControl.98993b64.js";
import { _ as _sfc_main$5 } from "./VAvatar.9f06558c.js";
import { _ as _sfc_main$4 } from "./VFlex.36d3ad63.js";
import { _ as _sfc_main$3 } from "./VFlexItem.bfb22d89.js";
import { y as defineComponent, M as useRoute, z as ref, A as onMounted, C as watch, e as computed, p as resolveComponent, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, j as createBaseVNode, t as toDisplayString, D as unref, f as createBlock, l as createCommentVNode, Y as withDirectives, a1 as vModelText, al as vModelSelect, F as Fragment, s as renderList, an as TransitionGroup, k as normalizeClass, v as withModifiers, m as createTextVNode, O as _sfc_main$2, P as useHead } from "./index.a70cc630.js";
import { e as onValue, r as ref$1, d as database } from "./config.f3ec4a91.js";
import { G as GET_DATOS_GENERAL_ENTRENADOR, b as GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR } from "./superentrenador.0e30a47c.js";
import { L as LISTAR_RUTINAS_GRATUITAS_ENTRENADOR } from "./rutinas.7b83777e.js";
import { u as useViewWrapper } from "./viewWrapper.6b9a60ad.js";
import "./NotificationsMobileDropdown.35349e6f.js";
import "./VDropdown.8f5160b9.js";
import "./useNotyf.629a4adf.js";
import "./useThemeColors.11afe8e0.js";
import "./VCollapseLinks.e2aee4a0.js";
import "./VInput.6b1f9cb4.js";
import "./fechas.5f05a473.js";
import "./VTextarea.7d683e94.js";
import "./deportista.856eeeab.js";
import "./general.502a4700.js";
import "./main.9958a253.js";
import "./VModal.f3344cad.js";
import "./BloquesDistancia.e064c532.js";
import "./VFlexTable.9d888ccf.js";
import "./VIconButton.07463c5a.js";
import "./VOption.3c84cb31.js";
import "./globales.d54e5eed.js";
import "./VTag.8a91efb1.js";
var DeportistasTest_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_3 = { class: "mb-4" };
const _hoisted_4 = { class: "dashboard-header" };
const _hoisted_5 = { class: "user-meta is-dark-bordered-12" };
const _hoisted_6 = { class: "title is-4 is-narrow is-bold" };
const _hoisted_7 = { class: "light-text" };
const _hoisted_8 = { class: "user-action" };
const _hoisted_9 = { class: "title is-2 is-narrow" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, "Planes gratuitos", -1);
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Ver planes gratuitos");
const _hoisted_12 = { class: "user-grid-toolbar" };
const _hoisted_13 = { class: "items-per-page-selector" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("label", { for: "itemsPerPage" }, "Mostrar:", -1);
const _hoisted_15 = ["value"];
const _hoisted_16 = { key: 1 };
const _hoisted_17 = { class: "user-grid user-grid-v1" };
const _hoisted_18 = { class: "grid-item" };
const _hoisted_19 = { class: "dark-inverted" };
const _hoisted_20 = { class: "buttons" };
const _hoisted_21 = ["onClick"];
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:calendar"
  })
], -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", null, "Ver rutinas", -1);
const _hoisted_24 = [
  _hoisted_22,
  _hoisted_23
];
const _hoisted_25 = ["onClick"];
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:user"
  })
], -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", null, "Ver perfil", -1);
const _hoisted_28 = [
  _hoisted_26,
  _hoisted_27
];
const _hoisted_29 = {
  class: "v-flex flex-pagination pagination is-rounded",
  role: "navigation",
  "aria-label": "pagination"
};
const _hoisted_30 = { class: "pagination-list" };
const _hoisted_31 = ["onClick"];
const _hoisted_32 = {
  key: 1,
  class: "pagination-ellipsis"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const solicitudes = ref([]);
    const solicitudActual = ref();
    const mostrarVerPerfilDeportista = ref(false);
    const entrenador = ref();
    const planesGratuitos = ref([]);
    const paginaActual = ref(1);
    const itemsPerPagina = ref(8);
    onMounted(async () => {
      solicitudActual.value = void 0;
      onValue(ref$1(database, "solicitudes"), async (snapshot) => {
        if (snapshot.exists()) {
          solicitudes.value = await GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR(
            route.params.id.toString(),
            snapshot.val()
          );
        } else {
          solicitudes.value = [];
        }
      });
      entrenador.value = await GET_DATOS_GENERAL_ENTRENADOR(route.params.id.toString());
      planesGratuitos.value = await LISTAR_RUTINAS_GRATUITAS_ENTRENADOR(
        route.params.id.toString()
      );
    });
    const verSolicitud = async (solicitud) => {
      solicitudActual.value = solicitud;
    };
    const verPerfil = async (solicitud) => {
      solicitudActual.value = solicitud;
      mostrarVerPerfilDeportista.value = true;
    };
    const cerrarPerfil = () => {
      mostrarVerPerfilDeportista.value = false;
      solicitudActual.value = void 0;
    };
    const filtro = ref("");
    const usuarios = ref([]);
    watch(filtro, () => {
      const filtroTexto = filtro.value.toLowerCase();
      usuarios.value = solicitudes.value.filter((solicitud) => {
        const nombre = solicitud.nombres.toLowerCase();
        return nombre.includes(filtroTexto);
      });
    });
    watch(solicitudes, () => {
      usuarios.value = solicitudes.value;
    });
    const handleBack = () => {
      window.history.back();
    };
    const paginaData = computed(() => {
      const comenzar = (paginaActual.value - 1) * itemsPerPagina.value;
      const final = comenzar + itemsPerPagina.value;
      return usuarios.value.slice(comenzar, final);
    });
    const totalPaginas = computed(() => {
      return Math.ceil(usuarios.value.length / itemsPerPagina.value);
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
        let comenzarPagina = Math.max(paginaActual.value - 1, 2);
        let finPagina = Math.min(
          comenzarPagina + maxVisiblesPaginas - 2,
          totalPaginas.value - 1
        );
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
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      const _component_VButton = _sfc_main$2;
      const _component_VFlexItem = _sfc_main$3;
      const _component_VFlex = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VControl = __unplugin_components_0;
      const _component_VIcon = _sfc_main$6;
      const _component_Calendario = __unplugin_components_6;
      const _component_ViewProfile = _sfc_main$7;
      return openBlock(), createElementBlock("div", null, [
        !solicitudActual.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(_component_VFlex, {
            class: "mb-2 pegar",
            "justify-content": "space-between"
          }, {
            default: withCtx(() => [
              createVNode(_component_VFlexItem, null, {
                default: withCtx(() => [
                  createVNode(_component_VButton, {
                    color: "warning",
                    rounded: "",
                    raised: "",
                    icon: "fas fa-arrow-circle-left",
                    onClick: handleBack
                  }, {
                    default: withCtx(() => [
                      _hoisted_2
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VAvatar, {
                picture: (_a = entrenador.value) == null ? void 0 : _a.foto_url,
                size: "xl"
              }, null, 8, ["picture"]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("h3", _hoisted_6, " Entrenador, " + toDisplayString((_b = entrenador.value) == null ? void 0 : _b.nombres) + " " + toDisplayString((_c = entrenador.value) == null ? void 0 : _c.apellidos), 1),
                createBaseVNode("p", _hoisted_7, toDisplayString((_d = entrenador.value) == null ? void 0 : _d.especialidad), 1)
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("h3", _hoisted_9, toDisplayString(planesGratuitos.value.length), 1),
                _hoisted_10,
                unref(route).params.id.toString() ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: {
                    name: "superentrenador-planes-entrenador",
                    params: { id: unref(route).params.id.toString() }
                  },
                  class: "action-link",
                  tabindex: "0"
                }, {
                  default: withCtx(() => [
                    _hoisted_11
                  ]),
                  _: 1
                }, 8, ["to"])) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            createVNode(_component_VControl, { icon: "feather:search" }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filtro.value = $event),
                  class: "input custom-text-filter",
                  placeholder: "Search..."
                }, null, 512), [
                  [vModelText, filtro.value]
                ])
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_13, [
              _hoisted_14,
              withDirectives(createBaseVNode("select", {
                id: "itemsPerPage",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => itemsPerPagina.value = $event),
                onChange: cambiarItemsPerPagina
              }, [
                (openBlock(), createElementBlock(Fragment, null, renderList(8, (n) => {
                  return createBaseVNode("option", {
                    key: n,
                    value: n * 8
                  }, toDisplayString(n * 8), 9, _hoisted_15);
                }), 64))
              ], 544), [
                [vModelSelect, itemsPerPagina.value]
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        !solicitudActual.value ? (openBlock(), createElementBlock("div", _hoisted_16, [
          createBaseVNode("div", _hoisted_17, [
            createVNode(TransitionGroup, {
              name: "list",
              tag: "div",
              class: "columns is-multiline"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paginaData), (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.id,
                    class: "column is-3"
                  }, [
                    createBaseVNode("div", _hoisted_18, [
                      createVNode(_component_VAvatar, {
                        picture: item.foto || "/images/avatars/svg/vuero-1.svg",
                        size: "big"
                      }, null, 8, ["picture"]),
                      createBaseVNode("h3", _hoisted_19, toDisplayString(item.nombres), 1),
                      createBaseVNode("p", null, toDisplayString(item.deporte), 1),
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("button", {
                          class: "button v-button is-dark-outlined",
                          onClick: () => verSolicitud(item)
                        }, _hoisted_24, 8, _hoisted_21),
                        createBaseVNode("button", {
                          class: "button v-button is-dark-outlined",
                          onClick: () => verPerfil(item)
                        }, _hoisted_28, 8, _hoisted_25)
                      ])
                    ])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_29, [
          createBaseVNode("ul", _hoisted_30, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paginasVisibles), (page, index) => {
              return openBlock(), createElementBlock("li", { key: index }, [
                page !== "..." ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: "javascript:void(0)",
                  class: normalizeClass(["pagination-link", { "is-current": paginaActual.value === page }]),
                  onClick: withModifiers(($event) => typeof page === "number" && cambiarPagina(page), ["prevent"])
                }, toDisplayString(page), 11, _hoisted_31)) : (openBlock(), createElementBlock("span", _hoisted_32, "\u2026"))
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
        ]),
        solicitudActual.value && !mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_Calendario, {
          key: 2,
          iddeportista: solicitudActual.value.id_deportista,
          identrenador: solicitudActual.value.id_entrenador,
          onClose: _cache[4] || (_cache[4] = ($event) => solicitudActual.value = void 0)
        }, null, 8, ["iddeportista", "identrenador"])) : createCommentVNode("", true),
        solicitudActual.value && mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_ViewProfile, {
          key: 3,
          iddeportista: solicitudActual.value.id_deportista,
          onCerrar: cerrarPerfil
        }, null, 8, ["iddeportista"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Lista entrenadores");
    useHead({
      title: "Main Dashboard - My app"
    });
    return (_ctx, _cache) => {
      const _component_DeportistasTest = _sfc_main$1;
      const _component_SuperentrenadorLayout = _sfc_main$8;
      return openBlock(), createBlock(_component_SuperentrenadorLayout, null, {
        default: withCtx(() => [
          createVNode(_component_DeportistasTest)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
