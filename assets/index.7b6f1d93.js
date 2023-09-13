import { _ as _imports_0, a as _imports_1, b as _sfc_main$5, c as _sfc_main$6 } from "./search-4-dark.97684c13.js";
import { _ as _sfc_main$4 } from "./VAvatar.39b9c3a4.js";
import { y as defineComponent, a as useUserSession, z as ref, A as onMounted, C as watch, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, Y as withDirectives, a1 as vModelText, f as createBlock, l as createCommentVNode, F as Fragment, s as renderList, t as toDisplayString, am as TransitionGroup, O as _sfc_main$3, V as _export_sfc } from "./index.a7fc5dec.js";
import { _ as _sfc_main$2 } from "./VPlaceholderPage.7bdd20c5.js";
import { a as __unplugin_components_2 } from "./VControl.4d17fa85.js";
import { d as EstadoSolicitudes, e as GET_SOLICITUDES_DESDE_ENTRENADOR, C as CAMBIAR_ESTADO_INVITACION } from "./match.1a597960.js";
import { e as onValue, r as ref$1, d as database } from "./config.0fd79a34.js";
import { D as DeportesDisponibles } from "./DeportesDisponibles.778c1af8.js";
import { C as CREAR_DOCUMENTO_FIRESTORE } from "./mainfirestore.b9d64d68.js";
import { A as ACTUALIZAR_DOCUMENTO_REALTIME } from "./main.cf1f8e20.js";
import "./VSwitchBlock.7afcfb92.js";
import "./VInput.5920a8ca.js";
import "./fechas.6bd42486.js";
import "./VCheckbox.9c48ffd8.js";
import "./VTextarea.9eda26d4.js";
import "./deportista.892d7693.js";
import "./general.8b156443.js";
var SolicitudesEntrenador_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "user-grid user-grid-v2" };
const _hoisted_3 = { class: "mb-6 tile-grid-toolbar" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_6 = { class: "grid-item-wrap" };
const _hoisted_7 = { class: "grid-item-head" };
const _hoisted_8 = { class: "flex-head" };
const _hoisted_9 = { class: "meta" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", {
  style: { "color": "white", "font-weight": "bold" },
  class: "dark-inverted"
}, " Deportista ", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "status-icon" }, [
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
const _hoisted_12 = { class: "buttons" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:check-circle"
  })
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", null, "Aceptar", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:x-circle"
  })
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", null, "Rechazar", -1);
const _hoisted_17 = { class: "grid-item" };
const _hoisted_18 = { class: "dark-inverted" };
const _hoisted_19 = { class: "column" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:user"
  })
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", null, "Ver perfil", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userStore = useUserSession();
    const solicitudes = ref([]);
    const mostrarVerPerfilDeportista = ref(false);
    const solicitudSeleccionada = ref({
      estado: EstadoSolicitudes.PENDIENTE,
      fecha_registro: 0,
      foto: "",
      id: "",
      id_deportista: "",
      id_entrenador: "",
      nombres: "",
      deporte: DeportesDisponibles.ATLETISMO
    });
    const aceptarSolicitud = async (idSolicitud) => {
      solicitudSeleccionada.value = idSolicitud;
      await CAMBIAR_ESTADO_INVITACION(solicitudSeleccionada.value, EstadoSolicitudes.APROBADO);
      await CREAR_DOCUMENTO_FIRESTORE("notificaciones", {
        tipo: "match",
        remitente: solicitudSeleccionada.value.id_entrenador,
        destinatario: solicitudSeleccionada.value.id_deportista,
        txt: "Solicitud Aceptada",
        fechaStr: new Date().toISOString(),
        fecha: new Date(),
        estado: "no_leido"
      });
      await ACTUALIZAR_DOCUMENTO_REALTIME(
        "users",
        solicitudSeleccionada.value.id_deportista,
        {
          notificaciones: true
        }
      );
      mostrarVerPerfilDeportista.value = false;
    };
    const cancelarSolicitud = async (idSolicitud) => {
      solicitudSeleccionada.value = idSolicitud;
      await CAMBIAR_ESTADO_INVITACION(
        solicitudSeleccionada.value,
        EstadoSolicitudes.RECHAZADO
      );
      mostrarVerPerfilDeportista.value = false;
    };
    const verPerfilDeportista = (idSolicitud) => {
      solicitudSeleccionada.value = idSolicitud;
      mostrarVerPerfilDeportista.value = true;
    };
    onMounted(async () => {
      onValue(ref$1(database, "solicitudes"), (snapshot) => {
        if (snapshot.exists()) {
          GET_SOLICITUDES_DESDE_ENTRENADOR(userStore.userId, snapshot.val()).then((result) => {
            solicitudes.value = result;
          }).catch((err) => {
            console.log(err);
          });
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
      const _component_VButton = _sfc_main$3;
      const _component_VAvatar = _sfc_main$4;
      const _component_NombrePlan = _sfc_main$5;
      const _component_PerfilDeportista = _sfc_main$6;
      return openBlock(), createElementBlock("div", null, [
        !mostrarVerPerfilDeportista.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_VControl, { icon: "feather:search" }, {
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
              })
            ]),
            usuarios.value.length === 0 ? (openBlock(), createBlock(_component_VPlaceholderPage, {
              key: 0,
              title: "No se han encontrado deportistas.",
              subtitle: "Parece que no pudimos encontrar ning\xFAn resultado que coincida con el\n            t\xE9rmino de b\xFAsqueda que ha ingresado. Pruebe con diferentes t\xE9rminos de b\xFAsqueda o\n            criterios.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_4,
                _hoisted_5
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
                    createBaseVNode("div", _hoisted_6, [
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("div", _hoisted_8, [
                          createBaseVNode("div", _hoisted_9, [
                            _hoisted_10,
                            createBaseVNode("span", null, toDisplayString(item.estado), 1)
                          ]),
                          _hoisted_11
                        ]),
                        createBaseVNode("div", _hoisted_12, [
                          createVNode(_component_VButton, {
                            rounded: "",
                            style: { "background-color": "green", "color": "white", "height": "30px" },
                            onClick: () => aceptarSolicitud(item)
                          }, {
                            default: withCtx(() => [
                              _hoisted_13,
                              _hoisted_14
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_VButton, {
                            rounded: "",
                            color: "danger",
                            style: { "color": "white", "height": "30px" },
                            onClick: () => cancelarSolicitud(item)
                          }, {
                            default: withCtx(() => [
                              _hoisted_15,
                              _hoisted_16
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_17, [
                        createVNode(_component_VAvatar, {
                          picture: item.foto || "/images/avatars/svg/vuero-10.svg",
                          badge: item.badge,
                          size: "big"
                        }, null, 8, ["picture", "badge"]),
                        createBaseVNode("h3", _hoisted_18, toDisplayString(item.nombres), 1),
                        createVNode(_component_NombrePlan, {
                          iddeportista: item.id_deportista
                        }, null, 8, ["iddeportista"]),
                        createBaseVNode("p", null, toDisplayString(item.deporte), 1),
                        createBaseVNode("div", _hoisted_19, [
                          createVNode(_component_VButton, {
                            class: "btn-perfil",
                            color: "success",
                            outlined: "",
                            onClick: ($event) => verPerfilDeportista(item)
                          }, {
                            default: withCtx(() => [
                              _hoisted_20,
                              _hoisted_21
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ])
        ])) : createCommentVNode("", true),
        mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_PerfilDeportista, {
          key: 1,
          iddeportista: (_a = solicitudSeleccionada.value) == null ? void 0 : _a.id_deportista,
          onCerrar: _cache[1] || (_cache[1] = ($event) => mostrarVerPerfilDeportista.value = false)
        }, null, 8, ["iddeportista"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_SolicitudesEntrenador = _sfc_main$1;
  return openBlock(), createBlock(_component_SolicitudesEntrenador);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
