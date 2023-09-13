import { a as _sfc_main$4, _ as _sfc_main$a } from "./VFlexTable.d8d849dc.js";
import { _ as _sfc_main$8, a as _sfc_main$9 } from "./ModalCancelar.1054c0b2.js";
import { _ as _sfc_main$7 } from "./VTags.f6fc10e1.js";
import { _ as _sfc_main$6 } from "./VTag.e06822ec.js";
import { y as defineComponent, z as ref, a as useUserSession, ap as withAsyncContext, e as computed, A as onMounted, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, Y as withDirectives, a1 as vModelText, D as unref, f as createBlock, l as createCommentVNode, t as toDisplayString, F as Fragment, s as renderList, am as TransitionGroup, m as createTextVNode, O as _sfc_main$5 } from "./index.a7fc5dec.js";
import { _ as _sfc_main$3 } from "./VAvatar.39b9c3a4.js";
import { _ as _sfc_main$2 } from "./VPlaceholderPage.7bdd20c5.js";
import { a as __unplugin_components_2, b as _sfc_main$1 } from "./VControl.4d17fa85.js";
import { e as onValue, r as ref$1, d as database } from "./config.0fd79a34.js";
import { u as useViewWrapper } from "./viewWrapper.0c20b402.js";
import { G as GET_ENTRENADORES_VALIDOS } from "./entrenador.6ead06d4.js";
import { O as OBTENER_PLAN_DEPORTISTA, d as getDatosDeportista } from "./deportista.892d7693.js";
import { a as GET_SOLICITUDES_DEPORTISTA, V as VERIFICAR_MATCH } from "./match.1a597960.js";
var Entrenadores_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_4 = {
  key: 0,
  class: "flex-table-item"
};
const _hoisted_5 = { class: "item-name dark-inverted" };
const _hoisted_6 = { class: "item-meta" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Visitar Perfil ");
const _hoisted_8 = { class: "item-name dark-inverted" };
const _hoisted_9 = { class: "item-meta" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Visitar Perfil ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Enviar Solicitud");
const _sfc_main = /* @__PURE__ */ defineComponent({
  async setup(__props) {
    let __temp, __restore;
    const filters = ref("");
    const userSession = useUserSession();
    const columns = {
      username: {
        label: "Entrenador",
        grow: true,
        media: true
      },
      estrellas: "Estrellas",
      preview: "Perfil",
      actions: {
        label: "Solicitud",
        align: "end"
      }
    };
    let entrenadores = ref([]);
    let entrenador = ref({});
    let solicitudes = ref([]);
    let resMatch = ref({});
    let datosDeportista = ref({
      nombres: "",
      apellidos: "",
      email: "",
      descripcion: "",
      nameUser: "",
      identificacion: "",
      fecha_nacimiento: "",
      fecha_registro: "",
      telefono: "",
      genero: "",
      ciudad: "",
      pais: "",
      pictureName: ""
    });
    const plan = ([__temp, __restore] = withAsyncContext(() => OBTENER_PLAN_DEPORTISTA(userSession.userId)), __temp = await __temp, __restore(), __temp);
    const contadorSolicitudes = ref();
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Solicitudes");
    const filteredData = computed(() => {
      if (!filters.value) {
        return entrenadores.value;
      } else {
        const filterRe = new RegExp(filters.value, "i");
        return entrenadores.value.filter((item) => {
          return item.nombres.match(filterRe) || item.apellidos.match(filterRe);
        });
      }
    });
    onMounted(async () => {
      datosDeportista.value = await getDatosDeportista(userSession.userId);
      contadorSolicitudes.value = plan.solicitudesEnviadas;
      onValue(ref$1(database, "users"), (snapshot) => {
        if (snapshot.exists()) {
          entrenadores.value = GET_ENTRENADORES_VALIDOS(snapshot.val());
        } else {
          entrenadores = null;
        }
      });
      onValue(ref$1(database, "solicitudes"), (snapshot) => {
        if (snapshot.exists()) {
          solicitudes.value = GET_SOLICITUDES_DEPORTISTA(userSession.userId, snapshot.val());
          resMatch.value = VERIFICAR_MATCH(userSession.userId, snapshot.val());
          if (resMatch.value.match) {
            onValue(ref$1(database, "users/" + resMatch.value.entrenador), (snapshot2) => {
              if (snapshot2.exists()) {
                entrenador.value = snapshot2.val();
                entrenador.value.id = resMatch.value.entrenador;
              } else {
                console.log("no existe");
                entrenador = null;
              }
            });
          }
        } else {
          solicitudes = null;
        }
      });
      onValue(
        ref$1(database, "users/" + userSession.userId + "/plan/solicitudesEnviadas"),
        (snapshot) => {
          if (snapshot.exists()) {
            contadorSolicitudes.value = snapshot.val();
          } else {
            contadorSolicitudes.value = null;
          }
        }
      );
    });
    const verificarSolicitud = (idEntrenador) => {
      let value = false;
      solicitudes.value.forEach((solicitud) => {
        if (solicitud.id_entrenador === idEntrenador && solicitud.estado === "Pendiente") {
          value = true;
        }
      });
      return value;
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$1;
      const _component_VPlaceholderPage = _sfc_main$2;
      const _component_VAvatar = _sfc_main$3;
      const _component_VFlexTableCell = _sfc_main$4;
      const _component_VButton = _sfc_main$5;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VTag = _sfc_main$6;
      const _component_VTags = _sfc_main$7;
      const _component_ModalCancelar = _sfc_main$8;
      const _component_ModalEnviar = _sfc_main$9;
      const _component_VFlexTable = _sfc_main$a;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
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
            })
          ]),
          !unref(filteredData).length ? (openBlock(), createBlock(_component_VPlaceholderPage, {
            key: 0,
            title: "No pudimos encontrar ning\xFAn resultado coincidente.",
            subtitle: "Parece que no pudimos encontrar ning\xFAn resultado que coincida con los t\xE9rminos de b\xFAsqueda que ingres\xF3. Pruebe diferentes t\xE9rminos o criterios de b\xFAsqueda.",
            larger: ""
          })) : createCommentVNode("", true),
          unref(filteredData).length ? (openBlock(), createBlock(_component_VFlexTable, {
            key: 1,
            data: unref(filteredData),
            columns: unref(columns),
            compact: ""
          }, {
            body: withCtx(() => [
              createVNode(TransitionGroup, {
                name: "list",
                tag: "div",
                class: "flex-list-inner"
              }, {
                default: withCtx(() => [
                  unref(resMatch).match ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    createVNode(_component_VFlexTableCell, { column: { media: true, grow: true } }, {
                      default: withCtx(() => [
                        createVNode(_component_VAvatar, {
                          picture: unref(entrenador).foto_url,
                          badge: unref(entrenador).badge,
                          color: unref(entrenador).color,
                          initials: unref(entrenador).initials,
                          size: "medium"
                        }, null, 8, ["picture", "badge", "color", "initials"]),
                        createBaseVNode("div", null, [
                          createBaseVNode("span", _hoisted_5, toDisplayString(unref(entrenador).nombres) + " " + toDisplayString(unref(entrenador).apellidos), 1),
                          createBaseVNode("span", _hoisted_6, [
                            createBaseVNode("span", null, toDisplayString(unref(entrenador).rol), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VFlexTableCell, null, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(entrenador).estrellas, (estrellas) => {
                          return openBlock(), createElementBlock("i", {
                            key: estrellas,
                            class: "fas fa-star",
                            "aria-hidden": "true"
                          });
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VFlexTableCell, null, {
                      default: withCtx(() => [
                        createVNode(_component_RouterLink, {
                          to: {
                            name: "deportista-profile-preViewEntrenador",
                            params: { data: JSON.stringify(unref(entrenador)) }
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_VButton, {
                              rounded: "",
                              raised: "",
                              color: "primary",
                              bold: ""
                            }, {
                              default: withCtx(() => [
                                _hoisted_7
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VFlexTableCell, { column: { align: "end" } }, {
                      default: withCtx(() => [
                        createVNode(_component_VTags, null, {
                          default: withCtx(() => [
                            createVNode(_component_VTag, {
                              rounded: "",
                              size: "medium",
                              color: "green",
                              label: "Este es tu entrenador"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.id,
                      class: "flex-table-item"
                    }, [
                      createVNode(_component_VFlexTableCell, { column: { media: true, grow: true } }, {
                        default: withCtx(() => [
                          createVNode(_component_VAvatar, {
                            picture: item.foto_url,
                            badge: item.badge,
                            color: item.color,
                            initials: item.initials,
                            size: "medium"
                          }, null, 8, ["picture", "badge", "color", "initials"]),
                          createBaseVNode("div", null, [
                            createBaseVNode("span", _hoisted_8, toDisplayString(item.nombres) + " " + toDisplayString(item.apellidos), 1),
                            createBaseVNode("span", _hoisted_9, [
                              createBaseVNode("span", null, toDisplayString(item.rol), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.estrellas, (estrellas) => {
                            return openBlock(), createElementBlock("i", {
                              key: estrellas,
                              class: "fas fa-star",
                              "aria-hidden": "true"
                            });
                          }), 128))
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, null, {
                        default: withCtx(() => [
                          createVNode(_component_RouterLink, {
                            to: {
                              name: "deportista-profile-preViewEntrenador",
                              params: { data: JSON.stringify(item) }
                            }
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                rounded: "",
                                raised: "",
                                color: "primary",
                                bold: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_10
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VFlexTableCell, { column: { align: "end" } }, {
                        default: withCtx(() => [
                          item.id === unref(resMatch).entrenador ? (openBlock(), createBlock(_component_VTags, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_VTag, {
                                rounded: "",
                                size: "medium",
                                color: "green",
                                label: "Este es tu entrenador"
                              })
                            ]),
                            _: 1
                          })) : contadorSolicitudes.value >= unref(plan).solicitudes || unref(resMatch).match ? (openBlock(), createBlock(_component_VButton, {
                            key: 1,
                            color: "primary",
                            bold: "",
                            rounded: "",
                            raised: "",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_11
                            ]),
                            _: 1
                          })) : verificarSolicitud(item.id) ? (openBlock(), createBlock(_component_ModalCancelar, {
                            key: 2,
                            id: unref(userSession).userId,
                            solicitudes: unref(solicitudes),
                            "id-entrenador": item.id
                          }, null, 8, ["id", "solicitudes", "id-entrenador"])) : (openBlock(), createBlock(_component_ModalEnviar, {
                            key: 3,
                            id: unref(userSession).userId,
                            "datos-deportista": unref(datosDeportista),
                            entrenador: item
                          }, null, 8, ["id", "datos-deportista", "entrenador"]))
                        ]),
                        _: 2
                      }, 1024)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data", "columns"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
