import { _ as _imports_0, a as _imports_1, b as _sfc_main$4, c as _sfc_main$5 } from "./search-4-dark.97684c13.js";
import { _ as __unplugin_components_4 } from "./Calendario.13383da4.js";
import { _ as _sfc_main$3 } from "./VAvatar.39b9c3a4.js";
import { _ as _sfc_main$2 } from "./VPlaceholderPage.7bdd20c5.js";
import { a as __unplugin_components_2 } from "./VControl.4d17fa85.js";
import { y as defineComponent, a as useUserSession, z as ref, A as onMounted, C as watch, o as openBlock, i as createElementBlock, j as createBaseVNode, f as createBlock, w as withCtx, Y as withDirectives, a1 as vModelText, l as createCommentVNode, q as createVNode, F as Fragment, s as renderList, t as toDisplayString, am as TransitionGroup, V as _export_sfc } from "./index.a7fc5dec.js";
import { e as onValue, r as ref$1, d as database } from "./config.0fd79a34.js";
import { G as GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR } from "./match.1a597960.js";
import "./VSwitchBlock.7afcfb92.js";
import "./VInput.5920a8ca.js";
import "./fechas.6bd42486.js";
import "./VCheckbox.9c48ffd8.js";
import "./VTextarea.9eda26d4.js";
import "./deportista.892d7693.js";
import "./general.8b156443.js";
import "./main.cf1f8e20.js";
import "./VModal.6ca1fc6c.js";
import "./VBlock.f1c78c75.js";
import "./auth.12bba30e.js";
import "./managePictures.df5702c9.js";
import "./administracion.b83e2e82.js";
import "./useNotyf.ce7ee7f1.js";
import "./notyf.es.f84e4201.js";
import "./mainfirestore.b9d64d68.js";
import "./BloquesDistancia.82637331.js";
import "./VFlexTable.d8d849dc.js";
import "./VFlex.122176e5.js";
import "./VFlexItem.a5d61664.js";
import "./VIconButton.336a029e.js";
import "./VOption.ee07ba1d.js";
import "./convert.prod.1f5d8f54.js";
import "./vee-validate-zod.esm.9452dbca.js";
import "./VTag.e06822ec.js";
import "./rutinas.71165fa8.js";
var SolicitudesAprobadas_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "mb-6 tile-grid-toolbar" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "user-grid user-grid-v2" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_7 = { class: "grid-item-wrap" };
const _hoisted_8 = { class: "grid-item-head" };
const _hoisted_9 = { class: "flex-head" };
const _hoisted_10 = { class: "meta" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", {
  style: { "color": "white", "font-weight": "bold" },
  class: "dark-inverted"
}, " Deportista ", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "status-icon" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    style: { "width": "30px" },
    class: "icon"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:user"
    })
  ])
], -1);
const _hoisted_13 = { class: "grid-item" };
const _hoisted_14 = { class: "dark-inverted" };
const _hoisted_15 = { class: "buttons" };
const _hoisted_16 = ["onClick"];
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:calendar"
  })
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", null, "Crear rutina", -1);
const _hoisted_19 = [
  _hoisted_17,
  _hoisted_18
];
const _hoisted_20 = ["onClick"];
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:user"
  })
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "Ver perfil", -1);
const _hoisted_23 = [
  _hoisted_21,
  _hoisted_22
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userStore = useUserSession();
    const solicitudes = ref([]);
    const solicitudActual = ref();
    const mostrarVerPerfilDeportista = ref(false);
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
    onMounted(async () => {
      solicitudActual.value = void 0;
      onValue(ref$1(database, "solicitudes"), async (snapshot) => {
        if (snapshot.exists()) {
          solicitudes.value = await GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR(
            userStore.userId,
            snapshot.val()
          );
        } else {
          solicitudes.value = [];
        }
      });
    });
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
    return (_ctx, _cache) => {
      var _a;
      const _component_VControl = __unplugin_components_2;
      const _component_VPlaceholderPage = _sfc_main$2;
      const _component_VAvatar = _sfc_main$3;
      const _component_NombrePlan = _sfc_main$4;
      const _component_Calendario = __unplugin_components_4;
      const _component_PerfilDeportista = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            !mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_VControl, {
              key: 0,
              icon: "feather:search"
            }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filtro.value = $event),
                  class: "input custom-text-filter",
                  placeholder: "Buscar..."
                }, null, 512), [
                  [vModelText, filtro.value]
                ])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          !solicitudActual.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              usuarios.value.length === 0 ? (openBlock(), createBlock(_component_VPlaceholderPage, {
                key: 0,
                title: "No se han encontrado deportistas.",
                subtitle: "Parece que no pudimos encontrar ning\xFAn resultado que coincida con el\n            t\xE9rmino de b\xFAsqueda que ha ingresado. Pruebe con diferentes t\xE9rminos de b\xFAsqueda o\n            criterios.",
                larger: ""
              }, {
                image: withCtx(() => [
                  _hoisted_5,
                  _hoisted_6
                ]),
                _: 1
              })) : createCommentVNode("", true),
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
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("div", _hoisted_8, [
                          createBaseVNode("div", _hoisted_9, [
                            createBaseVNode("div", _hoisted_10, [
                              _hoisted_11,
                              createBaseVNode("span", null, toDisplayString(item.estado), 1)
                            ]),
                            _hoisted_12
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_13, [
                          createVNode(_component_VAvatar, {
                            picture: item.foto || "/images/avatars/svg/vuero-1.svg",
                            size: "big"
                          }, null, 8, ["picture"]),
                          createBaseVNode("h3", _hoisted_14, toDisplayString(item.nombres), 1),
                          createVNode(_component_NombrePlan, {
                            iddeportista: item.id_deportista
                          }, null, 8, ["iddeportista"]),
                          createBaseVNode("p", null, toDisplayString(item.deporte), 1),
                          createBaseVNode("div", _hoisted_15, [
                            createBaseVNode("button", {
                              class: "button v-button is-dark-outlined",
                              onClick: () => verSolicitud(item)
                            }, _hoisted_19, 8, _hoisted_16),
                            createBaseVNode("button", {
                              class: "button v-button is-dark-outlined",
                              onClick: () => verPerfil(item)
                            }, _hoisted_23, 8, _hoisted_20)
                          ])
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ])
          ])) : createCommentVNode("", true)
        ]),
        solicitudActual.value && !mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_Calendario, {
          key: 0,
          iddeportista: solicitudActual.value.id_deportista,
          identrenador: solicitudActual.value.id_entrenador,
          onClose: _cache[1] || (_cache[1] = ($event) => solicitudActual.value = void 0)
        }, null, 8, ["iddeportista", "identrenador"])) : createCommentVNode("", true),
        solicitudActual.value && mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_PerfilDeportista, {
          key: 1,
          iddeportista: (_a = solicitudActual.value) == null ? void 0 : _a.id_deportista,
          onCerrar: cerrarPerfil
        }, null, 8, ["iddeportista"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_SolicitudesAprobadas = _sfc_main$1;
  return openBlock(), createBlock(_component_SolicitudesAprobadas);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
