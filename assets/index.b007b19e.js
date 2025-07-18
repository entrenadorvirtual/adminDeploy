import { _ as _sfc_main$7 } from "./ViewProfile.5dbe4dfd.js";
import { y as defineComponent, z as ref, e as computed, C as watch, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, $ as withDirectives, a3 as vModelText, D as unref, f as createBlock, l as createCommentVNode, F as Fragment, s as renderList, t as toDisplayString, m as createTextVNode, O as _sfc_main$6, V as _export_sfc, M as useRoute, N as onBeforeMount, r as reactive, v as withModifiers, W as pushScopeId, X as popScopeId, P as useHead } from "./index.5c29604d.js";
import { _ as _sfc_main$5 } from "./VAvatar.750ed0e1.js";
import { _ as _sfc_main$4 } from "./VPlaceholderPage.1e018e4f.js";
import { _ as _sfc_main$3 } from "./VField.f8c867a3.js";
import { a as __unplugin_components_0$1 } from "./VControl.383acded.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.fb3880a5.js";
import { u as usePlanRutina, _ as _sfc_main$a, a as _sfc_main$b } from "./ListWidgetSingle.c6d29775.js";
import { _ as _sfc_main$9 } from "./VFlex.6ebcaf24.js";
import { _ as _sfc_main$8 } from "./VFlexItem.2c1366fa.js";
import { c as GET_DATOS_RUTINA_GRATUITA } from "./superentrenador.4ffd9b17.js";
import { E as ENOpcionesCru, n as nombreDiasSemana } from "./constantes.e793b8cd.js";
import { o as LISTARDEPORTISTASPLANGRATUITO } from "./administracion.3c1ed90f.js";
import { u as useViewWrapper } from "./viewWrapper.93f5013f.js";
import "./VInput.d6498d97.js";
import "./fechas.5f05a473.js";
import "./VTextarea.1b74e8e4.js";
import "./deportista.ce37417f.js";
import "./config.f3c9bc1b.js";
import "./general.505a96f7.js";
import "./main.1a95f887.js";
import "./globales.d54e5eed.js";
import "./rutinas.0b8f0138.js";
import "./useNotyf.e3af1d9e.js";
import "./useThemeColors.37241be5.js";
var TablaDeportistasPlanGratuito_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = {
  key: 0,
  class: "-inner"
};
const _hoisted_2$1 = { class: "account-wrapper" };
const _hoisted_3$1 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_4$1 = { class: "flex-list-wrapper flex-list-v1" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_7$1 = { class: "card-grid-item" };
const _hoisted_8$1 = { class: "left" };
const _hoisted_9$1 = { class: "info" };
const _hoisted_10$1 = { class: "nombre" };
const _hoisted_11$1 = { class: "email" };
const _hoisted_12$1 = { class: "fecha-registro" };
const _hoisted_13$1 = { class: "card-buttons" };
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("span", {
  class: "icon",
  style: { "margin-right": "1px" }
}, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:user"
  })
], -1);
const _hoisted_15$1 = /* @__PURE__ */ createTextVNode(" Perfil ");
const _hoisted_16$1 = { class: "pagination" };
const _hoisted_17$1 = /* @__PURE__ */ createTextVNode(" ANTERIOR ");
const _hoisted_18$1 = /* @__PURE__ */ createTextVNode(" SIGUIENTE ");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    deportistas: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const currentPage = ref(1);
    const itemsPerPage = 15;
    const solicitudActual = ref(void 0);
    const mostrarVerPerfilDeportista = ref(false);
    const verPerfil = async (solicitud) => {
      solicitudActual.value = solicitud;
      mostrarVerPerfilDeportista.value = true;
    };
    const cerrarPerfil = () => {
      mostrarVerPerfilDeportista.value = false;
      solicitudActual.value = void 0;
    };
    const filters = ref("");
    const fechaInicial = ref("");
    const fechaFinal = ref("");
    const filteredData = computed(() => {
      let filteredItems = props.deportistas;
      if (filters.value) {
        const filterRe = new RegExp(filters.value, "i");
        filteredItems = filteredItems.filter((item) => {
          return item.UserID.toString().match(filterRe) || item.identificacion.toString().match(filterRe) || item.nombres.match(filterRe) || item.apellidos.match(filterRe) || item.nameUser.match(filterRe) || item.fecha_nacimiento.toString().match(filterRe) || item.telefono.toString().match(filterRe) || item.fecha_registro.toString().match(filterRe);
        });
      }
      if (fechaInicial.value && fechaFinal.value) {
        filteredItems = filteredItems.filter((item) => {
          const fechaRegistro = new Date(item.fecha_registro);
          return fechaRegistro >= new Date(fechaInicial.value) && fechaRegistro <= new Date(fechaFinal.value);
        });
      }
      return filteredItems;
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredData.value.length / itemsPerPage);
    });
    const startIndex = ref(0);
    const endIndex = ref(15);
    const displayedItems = computed(() => {
      startIndex.value = (currentPage.value - 1) * itemsPerPage;
      endIndex.value = startIndex.value + itemsPerPage;
      return filteredData.value.slice(startIndex.value, endIndex.value);
    });
    function previousPage() {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    }
    function nextPage() {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    }
    watch(
      () => filters.value,
      () => {
        startIndex.value = 0;
        endIndex.value = 15;
        currentPage.value = 1;
      }
    );
    function getPaginatedInfo(currentPage2) {
      const itemsPerPage2 = 15;
      const totalItems = filteredData.value.length;
      const startIndex2 = (currentPage2 - 1) * itemsPerPage2 + 1;
      const endIndex2 = Math.min(currentPage2 * itemsPerPage2, totalItems);
      return `${startIndex2}-${endIndex2} DE ${totalItems}`;
    }
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_0$1;
      const _component_VField = _sfc_main$3;
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_VButton = _sfc_main$6;
      const _component_ViewProfile = _sfc_main$7;
      return openBlock(), createElementBlock(Fragment, null, [
        !solicitudActual.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3$1, [
              createVNode(_component_VField, null, {
                default: withCtx(() => [
                  createVNode(_component_VControl, { icon: "feather:search" }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                        class: "input custom-text-filter",
                        placeholder: " Buscar..."
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
            createBaseVNode("div", _hoisted_4$1, [
              !unref(filteredData).length ? (openBlock(), createBlock(_component_VPlaceholderPage, {
                key: 0,
                title: "No se encuentran deportistas registrados a este plan."
              }, {
                image: withCtx(() => [
                  _hoisted_5$1,
                  _hoisted_6$1
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_7$1, [
                unref(displayedItems).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(displayedItems), (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.UserID,
                    class: "card"
                  }, [
                    createBaseVNode("div", _hoisted_8$1, [
                      createVNode(_component_VAvatar, {
                        size: "big",
                        class: "card-avatar",
                        src: item.foto_url
                      }, null, 8, ["src"]),
                      createBaseVNode("div", _hoisted_9$1, [
                        createBaseVNode("span", _hoisted_10$1, toDisplayString(item.nombres) + " " + toDisplayString(item.apellidos), 1),
                        createBaseVNode("div", _hoisted_11$1, [
                          createBaseVNode("span", null, toDisplayString(item.email), 1)
                        ]),
                        createBaseVNode("div", _hoisted_12$1, [
                          createBaseVNode("span", null, "Fecha Registro: " + toDisplayString(item.fecha_registro), 1)
                        ]),
                        createBaseVNode("div", _hoisted_13$1, [
                          createVNode(_component_VButton, {
                            "dark-outlined": "",
                            rounded: "",
                            onClick: ($event) => verPerfil(item)
                          }, {
                            default: withCtx(() => [
                              _hoisted_14$1,
                              _hoisted_15$1
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ])
                    ])
                  ]);
                }), 128)) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_16$1, [
              createVNode(_component_VButton, {
                disabled: currentPage.value === 1,
                color: "primary",
                outlined: "",
                onClick: previousPage
              }, {
                default: withCtx(() => [
                  _hoisted_17$1
                ]),
                _: 1
              }, 8, ["disabled"]),
              createBaseVNode("p", null, [
                createBaseVNode("strong", null, [
                  createBaseVNode("span", null, "P\xC1GINA" + toDisplayString(currentPage.value) + ":", 1),
                  createTextVNode("( " + toDisplayString(getPaginatedInfo(currentPage.value)) + " DISPONIBLES)", 1)
                ])
              ]),
              createVNode(_component_VButton, {
                disabled: currentPage.value >= unref(totalPages),
                color: "primary",
                outlined: "",
                onClick: nextPage
              }, {
                default: withCtx(() => [
                  _hoisted_18$1
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : createCommentVNode("", true),
        solicitudActual.value && mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_ViewProfile, {
          key: 1,
          iddeportista: solicitudActual.value.id,
          onCerrar: cerrarPerfil
        }, null, 8, ["iddeportista"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var adminPlanGratuitoEntrenador_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-3a51b449"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "login-form" };
const _hoisted_2 = { class: "columns is-multiline is-mobile" };
const _hoisted_3 = { class: "column is-1-desktop is-half-mobile" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Deporte", -1));
const _hoisted_5 = { class: "subtitle is-6" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "is-divider-vertical" }, null, -1));
const _hoisted_7 = { class: "column is-2-desktop is-half-mobile" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Nombre del Plan", -1));
const _hoisted_9 = { class: "subtitle is-6" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "is-divider-vertical" }, null, -1));
const _hoisted_11 = { class: "column is-full-mobile" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Descripci\xF3n", -1));
const _hoisted_13 = { class: "subtitle is-6" };
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "is-divider-vertical" }, null, -1));
const _hoisted_15 = { class: "column is-full-mobile" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Objetivos", -1));
const _hoisted_17 = { class: "subtitle is-6" };
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_19 = { class: "columns is-multiline widget-demo-columns half-columns" };
const _hoisted_20 = { class: "timeline-item" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "timeline-icon" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "btn-add-plan-g" }, "+")
], -1));
const _hoisted_22 = { class: "timeline-content" };
const _hoisted_23 = {
  key: 0,
  style: { "display": "flex", "gap": "2px" }
};
const _hoisted_24 = ["onClick"];
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:eye",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_26 = [
  _hoisted_25
];
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title-deportistas" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "title is-3" }, "DEPORTISTAS SUSCRITOS")
], -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const diasSemana = nombreDiasSemana;
    const route = useRoute();
    const planGratuito = ref();
    const planRutinaStore = usePlanRutina();
    const deportistasPlanGratuito = ref([]);
    onBeforeMount(async () => {
      planGratuito.value = await GET_DATOS_RUTINA_GRATUITA(route.params.id.toString());
      planRutinaStore.asignarBloquesSemana(planGratuito == null ? void 0 : planGratuito.value.plan);
      deportistasPlanGratuito.value = await LISTARDEPORTISTASPLANGRATUITO(
        route.params.id.toString()
      );
    });
    const isOpenCrearSesion = ref(false);
    const posicionPlan = reactive({
      indexsemana: 0,
      indexdia: 0
    });
    const seleccionarPosicionPlan = (indexSemana, indexDia) => {
      posicionPlan.indexsemana = indexSemana;
      posicionPlan.indexdia = indexDia;
      isOpenCrearSesion.value = true;
    };
    const verSesion = (indexSemana, indexDia) => {
      opcionactual.value = ENOpcionesCru.VER;
      seleccionarPosicionPlan(indexSemana, indexDia);
    };
    const opcionactual = ref(ENOpcionesCru.CREAR);
    const handleBack = () => {
      window.history.back();
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      const _component_VButton = _sfc_main$6;
      const _component_VFlexItem = _sfc_main$8;
      const _component_VFlex = _sfc_main$9;
      const _component_ListWidgetSingle = _sfc_main$a;
      const _component_SesionRutinaGratuita = _sfc_main$b;
      const _component_TablaDeportistasPlanGratuito = _sfc_main$2;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              _hoisted_4,
              createBaseVNode("p", _hoisted_5, toDisplayString((_a = planGratuito.value) == null ? void 0 : _a.deporte), 1)
            ]),
            _hoisted_6,
            createBaseVNode("div", _hoisted_7, [
              _hoisted_8,
              createBaseVNode("p", _hoisted_9, toDisplayString((_b = planGratuito.value) == null ? void 0 : _b.nombre_plan), 1)
            ]),
            _hoisted_10,
            createBaseVNode("div", _hoisted_11, [
              _hoisted_12,
              createBaseVNode("p", _hoisted_13, toDisplayString((_c = planGratuito.value) == null ? void 0 : _c.descripcion), 1)
            ]),
            _hoisted_14,
            createBaseVNode("div", _hoisted_15, [
              _hoisted_16,
              createBaseVNode("p", _hoisted_17, toDisplayString((_d = planGratuito.value) == null ? void 0 : _d.objetivos), 1)
            ])
          ]),
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
                      _hoisted_18
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_19, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(planRutinaStore).semanasRutina, (semana, indexSemana) => {
              return openBlock(), createElementBlock("div", {
                key: indexSemana,
                class: "column is-4"
              }, [
                createVNode(_component_ListWidgetSingle, {
                  title: "Semana " + (indexSemana + 1),
                  class: "list-widget-v3"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(semana, (dia, indexDia) => {
                      return openBlock(), createElementBlock("div", {
                        key: indexDia,
                        class: "icon-timeline"
                      }, [
                        createBaseVNode("div", _hoisted_20, [
                          _hoisted_21,
                          createBaseVNode("div", _hoisted_22, [
                            createBaseVNode("p", null, toDisplayString(unref(diasSemana)[indexDia]), 1),
                            Object.keys(dia).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_23, [
                              createBaseVNode("button", {
                                class: "btn btn-view",
                                onClick: withModifiers(($event) => verSesion(indexSemana, indexDia), ["stop"])
                              }, _hoisted_26, 8, _hoisted_24)
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["title"])
              ]);
            }), 128))
          ]),
          isOpenCrearSesion.value ? (openBlock(), createBlock(_component_SesionRutinaGratuita, {
            key: 0,
            opcionactual: unref(ENOpcionesCru).VER,
            semanaindex: unref(posicionPlan).indexsemana,
            diaindex: unref(posicionPlan).indexdia,
            "is-open": isOpenCrearSesion.value,
            onClose: _cache[0] || (_cache[0] = ($event) => isOpenCrearSesion.value = false)
          }, null, 8, ["opcionactual", "semanaindex", "diaindex", "is-open"])) : createCommentVNode("", true)
        ]),
        _hoisted_27,
        createVNode(_component_TablaDeportistasPlanGratuito, { deportistas: deportistasPlanGratuito.value }, null, 8, ["deportistas"])
      ], 64);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3a51b449"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Planes Gratuitos");
    useHead({
      title: "Planes Gratuitos"
    });
    return (_ctx, _cache) => {
      const _component_adminPlanGratuitoEntrenador = __unplugin_components_0;
      return openBlock(), createBlock(_component_adminPlanGratuitoEntrenador);
    };
  }
});
export { _sfc_main as default };
