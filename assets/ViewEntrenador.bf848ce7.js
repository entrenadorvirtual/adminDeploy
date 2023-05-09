import { _ as _sfc_main$3, a as _sfc_main$4 } from "./ModalCancelar.10d8eef4.js";
import { y as defineComponent, a as useUserSession, ay as withAsyncContext, z as ref, A as onMounted, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, t as toDisplayString, F as Fragment, s as renderList, w as withCtx, D as unref, f as createBlock, m as createTextVNode, a3 as _sfc_main$2 } from "./index.4254dce5.js";
import { _ as _sfc_main$1 } from "./VAvatar.fc27fd88.js";
import { e as onValue, r as ref$1, d as database } from "./config.dae7a527.js";
import { O as OBTENER_PLAN_DEPORTISTA, g as getDatosDeportista } from "./deportista.f81b0247.js";
import { G as GET_SOLICITUDES_DEPORTISTA, b as GET_MATCH_TOTAL, V as VERIFICAR_MATCH } from "./match.2b9f1df2.js";
var ViewEntrenador_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "profile-wrapper" };
const _hoisted_2 = { class: "profile-header has-text-centered" };
const _hoisted_3 = { class: "title is-4 is-narrow is-thin" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, " Encuentra en este lugar inforamcion interesante de un entrenador. ", -1);
const _hoisted_5 = { class: "profile-body" };
const _hoisted_6 = { class: "columns" };
const _hoisted_7 = { class: "column is-6" };
const _hoisted_8 = { class: "profile-card" };
const _hoisted_9 = { class: "profile-card-section" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Sobre el entrenador")
], -1);
const _hoisted_11 = { class: "section-content" };
const _hoisted_12 = { class: "description" };
const _hoisted_13 = { class: "profile-card-section" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Perfil Entrenador")
], -1);
const _hoisted_15 = { class: "section-content" };
const _hoisted_16 = { class: "experience-wrapper" };
const _hoisted_17 = { class: "experience-item" };
const _hoisted_18 = { class: "meta" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Genero", -1);
const _hoisted_20 = { class: "experience-item" };
const _hoisted_21 = { class: "meta" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Pais / ciudad Origen", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle"
}, null, -1);
const _hoisted_24 = { class: "experience-item" };
const _hoisted_25 = { class: "meta" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Pais / ciudad Actual", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle"
}, null, -1);
const _hoisted_28 = { class: "experience-item" };
const _hoisted_29 = { class: "meta" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Fecha Nacimiento", -1);
const _hoisted_31 = { class: "experience-item" };
const _hoisted_32 = { class: "meta" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Rese\xF1a", -1);
const _hoisted_34 = { class: "experience-item" };
const _hoisted_35 = { class: "meta" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Especialidad", -1);
const _hoisted_37 = { class: "experience-item" };
const _hoisted_38 = { class: "meta" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Hitos Deportivos", -1);
const _hoisted_40 = { class: "experience-item" };
const _hoisted_41 = { class: "meta" };
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Experiencia", -1);
const _hoisted_43 = { class: "profile-card-section" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Destacados")
], -1);
const _hoisted_45 = { class: "section-content" };
const _hoisted_46 = { class: "languages-wrapper" };
const _hoisted_47 = { class: "languages-item" };
const _hoisted_48 = { class: "meta" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Perfil", -1);
const _hoisted_50 = { class: "languages-item" };
const _hoisted_51 = { class: "meta" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Formaci\xF3n acad\xE9mica", -1);
const _hoisted_53 = { class: "languages-item" };
const _hoisted_54 = { class: "meta" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Certificaciones", -1);
const _hoisted_56 = { class: "languages-item" };
const _hoisted_57 = { class: "meta" };
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Calificaci\xF3n", -1);
const _hoisted_59 = { class: "column is-6" };
const _hoisted_60 = { class: "profile-card" };
const _hoisted_61 = { class: "profile-card-section no-padding" };
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Acciones")
], -1);
const _hoisted_63 = { class: "section-content" };
const _hoisted_64 = { class: "network-notifications" };
const _hoisted_65 = { class: "columns is-mobile is-multiline" };
const _hoisted_66 = { class: "column" };
const _hoisted_67 = /* @__PURE__ */ createTextVNode(" Regresar a lista de entrenadores ");
const _hoisted_68 = { class: "column" };
const _hoisted_69 = /* @__PURE__ */ createTextVNode("Enviar Solicitud");
const _hoisted_70 = { class: "profile-card" };
const _hoisted_71 = { class: "profile-card-section no-padding" };
const _hoisted_72 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Deportistas")
], -1);
const _hoisted_73 = { class: "section-content" };
const _hoisted_74 = { class: "people-wrapper" };
const _hoisted_75 = {
  href: "#",
  class: "people-item"
};
const _hoisted_76 = { class: "meta" };
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Deportistas Asignados", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const userSession = useUserSession();
    const plan = ([__temp, __restore] = withAsyncContext(() => OBTENER_PLAN_DEPORTISTA(userSession.userId)), __temp = await __temp, __restore(), __temp);
    let solicitudes = ref([]);
    const contadorSolicitudes = ref();
    const totalMatch = ref(0);
    let match = ref({});
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
    onMounted(async () => {
      console.log("id es: ", userSession.userId);
      datosDeportista.value = await getDatosDeportista(userSession.userId);
      contadorSolicitudes.value = plan.solicitudesEnviadas;
      onValue(ref$1(database, "solicitudes"), async (snapshot) => {
        if (snapshot.exists()) {
          solicitudes.value = GET_SOLICITUDES_DEPORTISTA(userSession.userId, snapshot.val());
          totalMatch.value = await GET_MATCH_TOTAL(props.data.id, snapshot.val());
          match.value = VERIFICAR_MATCH(userSession.userId, snapshot.val());
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
      console.log("entrenador: ", idEntrenador);
      solicitudes.value.forEach((solicitud) => {
        if (solicitud.id_entrenador === idEntrenador && solicitud.estado === "Pendiente") {
          value = true;
        }
      });
      return value;
    };
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_ModalCancelar = _sfc_main$3;
      const _component_ModalEnviar = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VAvatar, {
            size: "xl",
            picture: props.data.foto_url,
            badge: props.data.badge
          }, null, 8, ["picture", "badge"]),
          createBaseVNode("h3", _hoisted_3, toDisplayString(props.data.nombres) + " " + toDisplayString(props.data.apellidos) + " (" + toDisplayString(props.data.nameUser) + ") ", 1),
          _hoisted_4
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  _hoisted_10,
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("p", _hoisted_12, toDisplayString(props.data.descripcion), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_13, [
                  _hoisted_14,
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("div", _hoisted_18, [
                          _hoisted_19,
                          createBaseVNode("span", null, toDisplayString(props.data.genero), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("div", _hoisted_21, [
                          _hoisted_22,
                          createBaseVNode("span", null, [
                            createBaseVNode("span", null, toDisplayString(props.data.pais), 1),
                            _hoisted_23,
                            createBaseVNode("span", null, toDisplayString(props.data.ciudad), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_24, [
                        createBaseVNode("div", _hoisted_25, [
                          _hoisted_26,
                          createBaseVNode("span", null, [
                            createBaseVNode("span", null, toDisplayString(props.data.paisActual), 1),
                            _hoisted_27,
                            createBaseVNode("span", null, toDisplayString(props.data.ciudadActual), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_28, [
                        createBaseVNode("div", _hoisted_29, [
                          _hoisted_30,
                          createBaseVNode("span", null, toDisplayString(props.data.fecha_nacimiento), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("div", _hoisted_32, [
                          _hoisted_33,
                          createBaseVNode("span", null, toDisplayString(props.data.rese\u00F1a), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_34, [
                        createBaseVNode("div", _hoisted_35, [
                          _hoisted_36,
                          createBaseVNode("span", null, toDisplayString(props.data.especialidad), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_37, [
                        createBaseVNode("div", _hoisted_38, [
                          _hoisted_39,
                          createBaseVNode("span", null, toDisplayString(props.data.hitos), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_40, [
                        createBaseVNode("div", _hoisted_41, [
                          _hoisted_42,
                          createBaseVNode("span", null, toDisplayString(props.data.experiencia), 1)
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_43, [
                  _hoisted_44,
                  createBaseVNode("div", _hoisted_45, [
                    createBaseVNode("div", _hoisted_46, [
                      createBaseVNode("div", _hoisted_47, [
                        createBaseVNode("div", _hoisted_48, [
                          _hoisted_49,
                          createBaseVNode("span", null, toDisplayString(props.data.perfil), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_50, [
                        createBaseVNode("div", _hoisted_51, [
                          _hoisted_52,
                          createBaseVNode("span", null, toDisplayString(props.data.formacion_academica), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_53, [
                        createBaseVNode("div", _hoisted_54, [
                          _hoisted_55,
                          createBaseVNode("span", null, toDisplayString(props.data.certificaciones), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_56, [
                        createBaseVNode("div", _hoisted_57, [
                          _hoisted_58,
                          (openBlock(true), createElementBlock(Fragment, null, renderList(props.data.estrellas, (estrellas) => {
                            return openBlock(), createElementBlock("i", {
                              key: estrellas,
                              class: "fas fa-star",
                              "aria-hidden": "true"
                            });
                          }), 128))
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_59, [
              createBaseVNode("div", _hoisted_60, [
                createBaseVNode("div", _hoisted_61, [
                  _hoisted_62,
                  createBaseVNode("div", _hoisted_63, [
                    createBaseVNode("div", _hoisted_64, [
                      createBaseVNode("div", _hoisted_65, [
                        createBaseVNode("div", _hoisted_66, [
                          createVNode(_component_RouterLink, { to: {
                            name: "deportista-solicitud-entrenadores"
                          } }, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                rounded: "",
                                raised: "",
                                bold: "",
                                color: "warning"
                              }, {
                                default: withCtx(() => [
                                  _hoisted_67
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_68, [
                          contadorSolicitudes.value >= unref(plan).solicitudes || unref(match).match ? (openBlock(), createBlock(_component_VButton, {
                            key: 0,
                            color: "primary",
                            bold: "",
                            rounded: "",
                            raised: "",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_69
                            ]),
                            _: 1
                          })) : verificarSolicitud(props.data.id) ? (openBlock(), createBlock(_component_ModalCancelar, {
                            key: 1,
                            id: unref(userSession).userId,
                            solicitudes: unref(solicitudes),
                            "id-entrenador": props.data.id
                          }, null, 8, ["id", "solicitudes", "id-entrenador"])) : (openBlock(), createBlock(_component_ModalEnviar, {
                            key: 2,
                            id: unref(userSession).userId,
                            "datos-deportista": unref(datosDeportista),
                            entrenador: props.data
                          }, null, 8, ["id", "datos-deportista", "entrenador"]))
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_70, [
                createBaseVNode("div", _hoisted_71, [
                  _hoisted_72,
                  createBaseVNode("div", _hoisted_73, [
                    createBaseVNode("div", _hoisted_74, [
                      createBaseVNode("a", _hoisted_75, [
                        createBaseVNode("div", _hoisted_76, [
                          _hoisted_77,
                          createBaseVNode("span", null, toDisplayString(totalMatch.value), 1)
                        ])
                      ])
                    ])
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
export { _sfc_main as _ };
