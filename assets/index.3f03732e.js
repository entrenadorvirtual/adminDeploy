import { _ as _sfc_main$8 } from "./SuperentrenadorLayout.9294a070.js";
import { _ as _sfc_main$7 } from "./VIcon.02741722.js";
import { V as _export_sfc, y as defineComponent, M as useRoute, z as ref, e as computed, N as onBeforeMount, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, t as toDisplayString, D as unref, f as createBlock, l as createCommentVNode, Y as withDirectives, al as vModelSelect, F as Fragment, s as renderList, m as createTextVNode, k as normalizeClass, v as withModifiers, ae as pushScopeId, af as popScopeId, O as _sfc_main$2, am as _sfc_main$6, P as useHead } from "./index.7bbae714.js";
import { _ as _sfc_main$5 } from "./VAvatar.857f15d4.js";
import { _ as _sfc_main$4 } from "./VFlex.c6e16b5b.js";
import { _ as _sfc_main$3 } from "./VFlexItem.aee6d66e.js";
import { G as GET_DATOS_GENERAL_ENTRENADOR, a as GET_DEPORTISTAS_DE_ENTRENADOR } from "./superentrenador.37580e46.js";
import { L as LISTAR_RUTINAS_GRATUITAS_ENTRENADOR } from "./rutinas.f9a29ddc.js";
import { u as useViewWrapper } from "./viewWrapper.e8abb625.js";
import "./NotificationsMobileDropdown.3de162af.js";
import "./config.cf3a8941.js";
import "./VDropdown.dafd4ef1.js";
import "./useNotyf.d0ecec7c.js";
import "./useThemeColors.821f44b4.js";
import "./VCollapseLinks.55b2956f.js";
import "./main.abb91ed8.js";
import "./deportista.721fdc30.js";
import "./general.436cc3e4.js";
var PlanesGratuitos_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-ba393404"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_2 = { class: "personal-dashboard-v2" };
const _hoisted_3 = { class: "jobs-dashboard" };
const _hoisted_4 = { class: "jobs-dashboard-wrapper" };
const _hoisted_5 = { class: "column is-12" };
const _hoisted_6 = { class: "dashboard-header" };
const _hoisted_7 = { class: "user-meta is-dark-bordered-12" };
const _hoisted_8 = { class: "title is-4 is-narrow is-bold" };
const _hoisted_9 = { class: "light-text" };
const _hoisted_10 = { class: "user-action" };
const _hoisted_11 = { class: "title is-2 is-narrow" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, "Deportistas vinculados", -1));
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Ver deportistas");
const _hoisted_14 = { class: "items-per-page-selector" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "itemsPerPage" }, "Mostrar:", -1));
const _hoisted_16 = ["value"];
const _hoisted_17 = { class: "main-container" };
const _hoisted_18 = { class: "searched-jobs" };
const _hoisted_19 = { class: "job-cards" };
const _hoisted_20 = { class: "tarjeta" };
const _hoisted_21 = { class: "job-card-title is-multiline" };
const _hoisted_22 = { class: "job-card-subtitle" };
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, "Descripci\xF3n: ", -1));
const _hoisted_24 = { class: "job-card-subtitle" };
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, "Deporte: ", -1));
const _hoisted_26 = { class: "job-card-subtitle" };
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, "Objetivos: ", -1));
const _hoisted_28 = { class: "column" };
const _hoisted_29 = { class: "job-card-buttons" };
const _hoisted_30 = /* @__PURE__ */ createTextVNode(" Ver ");
const _hoisted_31 = {
  class: "v-flex flex-pagination pagination is-rounded",
  role: "navigation",
  "aria-label": "pagination"
};
const _hoisted_32 = { class: "pagination-list" };
const _hoisted_33 = ["onClick"];
const _hoisted_34 = {
  key: 1,
  class: "pagination-ellipsis"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const entrenador = ref();
    const planesGratuitos = ref([]);
    const deportistas = ref([]);
    const paginaActual = ref(1);
    const itemsPorPagina = ref(3);
    const filtro = ref("");
    const totalPaginas = computed(() => {
      return Math.ceil(planesFiltrados.value.length / itemsPorPagina.value);
    });
    const paginasVisibles = computed(() => {
      const total = totalPaginas.value;
      const actual = paginaActual.value;
      const range = [];
      if (total <= 5) {
        for (let i = 1; i <= total; i++) {
          range.push(i);
        }
      } else {
        if (actual <= 3) {
          range.push(1, 2, 3, 4, "...", total);
        } else if (actual >= total - 2) {
          range.push(1, "...", total - 3, total - 2, total - 1, total);
        } else {
          range.push(1, "...", actual - 1, actual, actual + 1, "...", total);
        }
      }
      return range;
    });
    const planesFiltrados = computed(() => {
      return planesGratuitos.value.filter(
        (plan) => plan.nombre_plan.toLowerCase().includes(filtro.value.toLowerCase())
      );
    });
    const paginaData = computed(() => {
      const comenzar = (paginaActual.value - 1) * itemsPorPagina.value;
      const final = comenzar + itemsPorPagina.value;
      return planesFiltrados.value.slice(comenzar, final);
    });
    const cambiarPagina = (pagina) => {
      if (pagina > 0 && pagina <= totalPaginas.value) {
        paginaActual.value = pagina;
      }
    };
    const cambiarItemsPerPagina = () => {
      paginaActual.value = 1;
    };
    onBeforeMount(async () => {
      planesGratuitos.value = await LISTAR_RUTINAS_GRATUITAS_ENTRENADOR(
        route.params.id.toString()
      );
      entrenador.value = await GET_DATOS_GENERAL_ENTRENADOR(route.params.id.toString());
      deportistas.value = await GET_DEPORTISTAS_DE_ENTRENADOR(route.params.id.toString());
    });
    const handleBack = () => {
      window.history.back();
    };
    const truncate = (text, length) => {
      if (text.length > length) {
        return text.substring(0, length) + "...";
      }
      return text;
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      const _component_VButton = _sfc_main$2;
      const _component_VFlexItem = _sfc_main$3;
      const _component_VFlex = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VButtons = _sfc_main$6;
      const _component_VIcon = _sfc_main$7;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createBaseVNode("div", null, [
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
                        _hoisted_1
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(_component_VAvatar, {
                        picture: (_a = entrenador.value) == null ? void 0 : _a.foto_url,
                        size: "xl"
                      }, null, 8, ["picture"]),
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("h3", _hoisted_8, " Entrenador, " + toDisplayString((_b = entrenador.value) == null ? void 0 : _b.nombres) + " " + toDisplayString((_c = entrenador.value) == null ? void 0 : _c.apellidos), 1),
                        createBaseVNode("p", _hoisted_9, toDisplayString((_d = entrenador.value) == null ? void 0 : _d.especialidad), 1)
                      ]),
                      createBaseVNode("div", _hoisted_10, [
                        createBaseVNode("h3", _hoisted_11, toDisplayString(deportistas.value.length), 1),
                        _hoisted_12,
                        unref(route).params.id.toString() ? (openBlock(), createBlock(_component_RouterLink, {
                          key: 0,
                          to: {
                            name: "superentrenador-deportistas-entrenador",
                            params: { id: unref(route).params.id.toString() }
                          },
                          class: "action-link",
                          tabindex: "0"
                        }, {
                          default: withCtx(() => [
                            _hoisted_13
                          ]),
                          _: 1
                        }, 8, ["to"])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    _hoisted_15,
                    withDirectives(createBaseVNode("select", {
                      id: "itemsPerPage",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => itemsPorPagina.value = $event),
                      onChange: cambiarItemsPerPagina
                    }, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(5, (n) => {
                        return createBaseVNode("option", {
                          key: n,
                          value: n * 3
                        }, toDisplayString(n * 3), 9, _hoisted_16);
                      }), 64))
                    ], 544), [
                      [vModelSelect, itemsPorPagina.value]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("div", _hoisted_18, [
                      createBaseVNode("div", _hoisted_19, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paginaData), (rutina, index) => {
                          return openBlock(), createElementBlock("div", {
                            key: index,
                            class: "job-card"
                          }, [
                            createBaseVNode("div", _hoisted_20, [
                              createBaseVNode("div", _hoisted_21, toDisplayString(rutina.nombre_plan), 1),
                              createBaseVNode("div", _hoisted_22, [
                                _hoisted_23,
                                createTextVNode(toDisplayString(truncate(rutina.descripcion, 99)), 1)
                              ]),
                              createBaseVNode("div", _hoisted_24, [
                                _hoisted_25,
                                createTextVNode(toDisplayString(truncate(rutina.deporte, 50)), 1)
                              ]),
                              createBaseVNode("div", _hoisted_26, [
                                _hoisted_27,
                                createTextVNode(toDisplayString(truncate(rutina.objetivos, 99)), 1)
                              ]),
                              createBaseVNode("div", _hoisted_28, [
                                createBaseVNode("h1", null, toDisplayString(rutina.nombre_entrenador), 1)
                              ]),
                              createBaseVNode("div", _hoisted_29, [
                                createVNode(_component_VButtons, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VButton, {
                                      to: {
                                        name: "superentrenador-plan-entrenador",
                                        params: { id: rutina.id }
                                      },
                                      color: "success"
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_30
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_31, [
          createBaseVNode("ul", _hoisted_32, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paginasVisibles), (page, index) => {
              return openBlock(), createElementBlock("li", { key: index }, [
                page !== "..." ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: "javascript:void(0)",
                  class: normalizeClass(["pagination-link", { "is-current": paginaActual.value === page }]),
                  onClick: withModifiers(($event) => typeof page === "number" && cambiarPagina(page), ["prevent"])
                }, toDisplayString(page), 11, _hoisted_33)) : (openBlock(), createElementBlock("span", _hoisted_34, "\u2026"))
              ]);
            }), 128))
          ]),
          createBaseVNode("a", {
            href: "javascript:void(0)",
            class: normalizeClass(["pagination-previous has-chevron", { "is-disabled": paginaActual.value === 1 }]),
            "aria-current": "page",
            tabindex: "0",
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => cambiarPagina(paginaActual.value - 1), ["prevent"]))
          }, [
            createVNode(_component_VIcon, { icon: "lucide:chevron-left" })
          ], 2),
          createBaseVNode("a", {
            href: "javascript:void(0)",
            class: normalizeClass(["pagination-next has-chevron", { "is-disabled": paginaActual.value === unref(totalPaginas) }]),
            "aria-current": "page",
            tabindex: "0",
            onClick: _cache[2] || (_cache[2] = withModifiers(($event) => cambiarPagina(paginaActual.value + 1), ["prevent"]))
          }, [
            createVNode(_component_VIcon, { icon: "lucide:chevron-right" })
          ], 2)
        ])
      ], 64);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ba393404"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Planes gratuitos");
    useHead({
      title: "Planes gratuitos"
    });
    return (_ctx, _cache) => {
      const _component_PlanesGratuitos = __unplugin_components_0;
      const _component_SuperentrenadorLayout = _sfc_main$8;
      return openBlock(), createBlock(_component_SuperentrenadorLayout, null, {
        default: withCtx(() => [
          createVNode(_component_PlanesGratuitos)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
