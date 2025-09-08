import { _ as _sfc_main$6 } from "./ViewProfile.7b96555b.js";
import { _ as __unplugin_components_6 } from "./Calendario.f4da3bce.js";
import { a as __unplugin_components_0 } from "./VControl.f0eb3b3c.js";
import { _ as _sfc_main$5 } from "./VAvatar.8dd3f809.js";
import { _ as _sfc_main$4 } from "./VFlex.6991b095.js";
import { _ as _sfc_main$3 } from "./VFlexItem.061a8e75.js";
import { x as defineComponent, L as useRoute, y as ref, z as onMounted, B as watch, m as resolveComponent, o as openBlock, g as createElementBlock, p as createVNode, w as withCtx, i as createBaseVNode, t as toDisplayString, C as unref, e as createBlock, k as createCommentVNode, Z as withDirectives, a2 as vModelText, F as Fragment, q as renderList, am as TransitionGroup, l as createTextVNode, N as _sfc_main$2, O as useHead } from "./index.5859d3e2.js";
import { e as onValue, r as ref$1, d as database } from "./config.28ac5e58.js";
import { b as GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR, G as GET_DATOS_GENERAL_ENTRENADOR } from "./superentrenador.0814834f.js";
import { L as LISTAR_RUTINAS_GRATUITAS_ENTRENADOR } from "./rutinas.4c182eb4.js";
import { u as useViewWrapper } from "./viewWrapper.1dcacd6c.js";
import "./VField.92bd822f.js";
import "./VInput.5b7bc738.js";
import "./fechas.5f05a473.js";
import "./VTextarea.2e342521.js";
import "./deportista.7005e8cc.js";
import "./general.651d3f13.js";
import "./main.a2946418.js";
import "./VModal.d5a66cf6.js";
import "./BloquesDistancia.8b68f508.js";
import "./VFlexTable.fd7f9f12.js";
import "./VIconButton.174a0a95.js";
import "./VOption.3572f2a0.js";
import "./globales.d54e5eed.js";
import "./useThemeColors.c1c0138a.js";
import "./VTag.aa2580b3.js";
var adminDeportistas_vue_vue_type_style_index_0_lang = "";
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
const _hoisted_13 = { key: 1 };
const _hoisted_14 = { class: "user-grid user-grid-v1" };
const _hoisted_15 = { class: "grid-item" };
const _hoisted_16 = { class: "dark-inverted" };
const _hoisted_17 = { class: "buttons" };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:calendar"
  })
], -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", null, "Ver rutinas", -1);
const _hoisted_21 = [
  _hoisted_19,
  _hoisted_20
];
const _hoisted_22 = ["onClick"];
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:user"
  })
], -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", null, "Ver perfil", -1);
const _hoisted_25 = [
  _hoisted_23,
  _hoisted_24
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const solicitudes = ref([]);
    const solicitudActual = ref();
    const mostrarVerPerfilDeportista = ref(false);
    const entrenador = ref();
    const planesGratuitos = ref([]);
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
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      const _component_VButton = _sfc_main$2;
      const _component_VFlexItem = _sfc_main$3;
      const _component_VFlex = _sfc_main$4;
      const _component_VAvatar = _sfc_main$5;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VControl = __unplugin_components_0;
      const _component_Calendario = __unplugin_components_6;
      const _component_ViewProfile = _sfc_main$6;
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
                    name: "administrador-adminPlanesGratuitos",
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
            })
          ])
        ])) : createCommentVNode("", true),
        !solicitudActual.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
          createBaseVNode("div", _hoisted_14, [
            createVNode(TransitionGroup, {
              name: "list",
              tag: "div",
              class: "columns is-multiline"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(usuarios.value, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.id,
                    class: "column is-3"
                  }, [
                    createBaseVNode("div", _hoisted_15, [
                      createVNode(_component_VAvatar, {
                        picture: item.foto || "/images/avatars/svg/vuero-1.svg",
                        size: "big"
                      }, null, 8, ["picture"]),
                      createBaseVNode("h3", _hoisted_16, toDisplayString(item.nombres), 1),
                      createBaseVNode("p", null, toDisplayString(item.deporte), 1),
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("button", {
                          class: "button v-button is-dark-outlined",
                          onClick: () => verSolicitud(item)
                        }, _hoisted_21, 8, _hoisted_18),
                        createBaseVNode("button", {
                          class: "button v-button is-dark-outlined",
                          onClick: () => verPerfil(item)
                        }, _hoisted_25, 8, _hoisted_22)
                      ])
                    ])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ])
        ])) : createCommentVNode("", true),
        solicitudActual.value && !mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_Calendario, {
          key: 2,
          iddeportista: solicitudActual.value.id_deportista,
          identrenador: solicitudActual.value.id_entrenador,
          onClose: _cache[1] || (_cache[1] = ($event) => solicitudActual.value = void 0)
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
    viewWrapper.setPageTitle("Lista de Deportistas");
    useHead({
      title: "Lista de Deportistas"
    });
    return (_ctx, _cache) => {
      const _component_adminDeportistas = _sfc_main$1;
      return openBlock(), createBlock(_component_adminDeportistas);
    };
  }
});
export { _sfc_main as default };
