import { _ as _sfc_main$6 } from "./SuperentrenadorLayout.aa306da5.js";
import { _ as _sfc_main$5 } from "./VAvatar.c0c71119.js";
import { _ as _sfc_main$4 } from "./VFlex.82603e9e.js";
import { _ as _sfc_main$3 } from "./VFlexItem.7fc46327.js";
import { y as defineComponent, M as useRoute, z as ref, N as onBeforeMount, p as resolveComponent, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, j as createBaseVNode, t as toDisplayString, D as unref, f as createBlock, l as createCommentVNode, ap as TransitionGroup, m as createTextVNode, O as _sfc_main$2, P as useHead } from "./index.81c578a3.js";
import { G as GET_DATOS_GENERAL_ENTRENADOR, a as GET_DEPORTISTAS_DE_ENTRENADOR } from "./superentrenador.3ee7d721.js";
import { L as LISTAR_RUTINAS_GRATUITAS_ENTRENADOR } from "./rutinas.5a00d2f9.js";
import { u as useViewWrapper } from "./viewWrapper.e18c6213.js";
import "./NotificationsMobileDropdown.8dd5ed26.js";
import "./VDropdown.bb3dd0c4.js";
import "./config.9bf2e6c5.js";
import "./useNotyf.321a1d89.js";
import "./notyf.es.f84e4201.js";
import "./VCollapseLinks.9daa4a8e.js";
import "./main.03abd8f7.js";
import "./deportista.b3f8517f.js";
import "./general.a67d6d2f.js";
var Documentos_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "personal-dashboard personal-dashboard-v2" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_3 = { class: "columns is-multiline" };
const _hoisted_4 = { class: "column is-12" };
const _hoisted_5 = { class: "dashboard-header" };
const _hoisted_6 = { class: "user-meta is-dark-bordered-12" };
const _hoisted_7 = { class: "title is-4 is-narrow is-bold" };
const _hoisted_8 = { class: "light-text" };
const _hoisted_9 = { class: "user-action" };
const _hoisted_10 = { class: "title is-2 is-narrow" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, "Deportistas vinculados", -1);
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Ver deportistas");
const _hoisted_13 = { class: "user-action" };
const _hoisted_14 = { class: "title is-2 is-narrow" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, "Planes gratuitos", -1);
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Ver planes gratuitos");
const _hoisted_17 = { key: 1 };
const _hoisted_18 = { class: "column is-4" };
const _hoisted_19 = { class: "tile-grid-item" };
const _hoisted_20 = { class: "tile-grid-item-inner" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Pdf"),
  /* @__PURE__ */ createBaseVNode("span", null, "pdf")
], -1);
const _hoisted_22 = { class: "column ml-4" };
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Ver Perfil ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const deportistas = ref([]);
    const entrenador = ref();
    const planesGratuitos = ref([]);
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
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
                    name: "superentrenador-deportistas-entrenador",
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
              ]),
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("h3", _hoisted_14, toDisplayString(planesGratuitos.value.length), 1),
                _hoisted_15,
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
                    _hoisted_16
                  ]),
                  _: 1
                }, 8, ["to"])) : (openBlock(), createElementBlock("h1", _hoisted_17, "No hay"))
              ])
            ])
          ]),
          createVNode(TransitionGroup, {
            name: "list",
            tag: "div",
            class: "columns is-multiline"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("div", _hoisted_20, [
                    createVNode(_component_VAvatar, {
                      picture: " '/images/avatars/svg/vuero-10.svg'",
                      size: "medium"
                    }),
                    _hoisted_21,
                    createBaseVNode("div", _hoisted_22, [
                      createVNode(_component_VButton, { color: "success" }, {
                        default: withCtx(() => [
                          _hoisted_23
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Documentos entrenador");
    useHead({
      title: "Documentos entrenador"
    });
    return (_ctx, _cache) => {
      const _component_Documentos = _sfc_main$1;
      const _component_SuperentrenadorLayout = _sfc_main$6;
      return openBlock(), createBlock(_component_SuperentrenadorLayout, null, {
        default: withCtx(() => [
          createVNode(_component_Documentos)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
