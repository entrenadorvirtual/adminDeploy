import { U as _export_sfc, x as defineComponent, L as useRoute, y as ref, M as onBeforeMount, m as resolveComponent, o as openBlock, g as createElementBlock, i as createBaseVNode, p as createVNode, w as withCtx, t as toDisplayString, C as unref, e as createBlock, k as createCommentVNode, F as Fragment, q as renderList, l as createTextVNode, V as pushScopeId, W as popScopeId, N as _sfc_main$2, al as _sfc_main$6, O as useHead } from "./index.7277f539.js";
import { _ as _sfc_main$5 } from "./VAvatar.ea1017a0.js";
import { _ as _sfc_main$4 } from "./VFlex.67564e84.js";
import { _ as _sfc_main$3 } from "./VFlexItem.cf1af14d.js";
import { G as GET_DATOS_GENERAL_ENTRENADOR, a as GET_DEPORTISTAS_DE_ENTRENADOR } from "./superentrenador.0814834f.js";
import { L as LISTAR_RUTINAS_GRATUITAS_ENTRENADOR } from "./rutinas.4c182eb4.js";
import { u as useViewWrapper } from "./viewWrapper.d9a08fd8.js";
import "./config.28ac5e58.js";
import "./main.a2946418.js";
import "./deportista.7005e8cc.js";
import "./general.651d3f13.js";
var adminPlanesGratuitos_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-5407b8a1"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_2 = { class: "jobs-dashboard" };
const _hoisted_3 = { class: "jobs-dashboard-wrapper" };
const _hoisted_4 = { class: "column is-12" };
const _hoisted_5 = { class: "dashboard-header" };
const _hoisted_6 = { class: "user-meta is-dark-bordered-12" };
const _hoisted_7 = { class: "title is-4 is-narrow is-bold" };
const _hoisted_8 = { class: "light-text" };
const _hoisted_9 = { class: "user-action" };
const _hoisted_10 = { class: "title is-2 is-narrow" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, "Deportistas vinculados", -1));
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Ver deportistas");
const _hoisted_13 = { class: "main-container" };
const _hoisted_14 = { class: "searched-jobs" };
const _hoisted_15 = { class: "job-cards" };
const _hoisted_16 = { class: "tarjeta" };
const _hoisted_17 = { class: "job-card-title is-multiline" };
const _hoisted_18 = { class: "job-card-subtitle" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, "Descripci\xF3n: ", -1));
const _hoisted_20 = { class: "job-card-subtitle" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, "Deporte: ", -1));
const _hoisted_22 = { class: "job-card-subtitle" };
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", null, "Objetivos: ", -1));
const _hoisted_24 = { class: "column" };
const _hoisted_25 = { class: "job-card-buttons" };
const _hoisted_26 = /* @__PURE__ */ createTextVNode(" Ver ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const entrenador = ref();
    const planesGratuitos = ref([]);
    const deportistas = ref([]);
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
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      const _component_VButton = _sfc_main$2;
      const _component_VFlexItem = _sfc_main$3;
      const _component_VFlex = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VButtons = _sfc_main$6;
      return openBlock(), createElementBlock("div", null, [
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
                  createVNode(_component_VAvatar, {
                    picture: (_a = entrenador.value) == null ? void 0 : _a.foto_url,
                    size: "xl"
                  }, null, 8, ["picture"]),
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("h3", _hoisted_7, " Entrenador, " + toDisplayString((_b = entrenador.value) == null ? void 0 : _b.nombres) + " " + toDisplayString((_c = entrenador.value) == null ? void 0 : _c.apellidos), 1),
                    createBaseVNode("p", _hoisted_8, toDisplayString((_d = entrenador.value) == null ? void 0 : _d.especialidad), 1)
                  ]),
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("h3", _hoisted_10, toDisplayString(deportistas.value.length), 1),
                    _hoisted_11,
                    unref(route).params.id.toString() ? (openBlock(), createBlock(_component_RouterLink, {
                      key: 0,
                      to: {
                        name: "administrador-adminListaDeportistas",
                        params: { id: unref(route).params.id.toString() }
                      },
                      class: "action-link",
                      tabindex: "0"
                    }, {
                      default: withCtx(() => [
                        _hoisted_12
                      ]),
                      _: 1
                    }, 8, ["to"])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(planesGratuitos.value, (rutina, index) => {
                      return openBlock(), createElementBlock("div", {
                        key: index,
                        class: "job-card"
                      }, [
                        createBaseVNode("div", _hoisted_16, [
                          createBaseVNode("div", _hoisted_17, toDisplayString(rutina.nombre_plan), 1),
                          createBaseVNode("div", _hoisted_18, [
                            _hoisted_19,
                            createTextVNode(toDisplayString(rutina.descripcion), 1)
                          ]),
                          createBaseVNode("div", _hoisted_20, [
                            _hoisted_21,
                            createTextVNode(toDisplayString(rutina.deporte), 1)
                          ]),
                          createBaseVNode("div", _hoisted_22, [
                            _hoisted_23,
                            createTextVNode(toDisplayString(rutina.objetivos), 1)
                          ]),
                          createBaseVNode("div", _hoisted_24, [
                            createBaseVNode("h1", null, toDisplayString(rutina.nombre_entrenador), 1)
                          ]),
                          createBaseVNode("div", _hoisted_25, [
                            createVNode(_component_VButtons, null, {
                              default: withCtx(() => [
                                createVNode(_component_VButton, {
                                  to: {
                                    name: "administrador-adminPlanesEntrenadores",
                                    params: { id: rutina.id }
                                  },
                                  color: "success"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_26
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
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5407b8a1"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Planes Gratuitos");
    useHead({
      title: "Planes Gratuitos"
    });
    return (_ctx, _cache) => {
      const _component_adminPlanesGratuitos = __unplugin_components_0;
      return openBlock(), createBlock(_component_adminPlanesGratuitos);
    };
  }
});
export { _sfc_main as default };
