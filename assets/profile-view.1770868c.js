import { _ as _sfc_main$2 } from "./VAvatar.ca051eb6.js";
import { a as getSemicooper } from "./deportista.87466242.js";
import { y as defineComponent, a as useUserSession, z as ref, A as onMounted, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, D as unref, t as toDisplayString, w as withCtx, a5 as useHead } from "./index.3437b938.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
import "./config.165bca36.js";
import "./general.34b73030.js";
import "./main.06195782.js";
var ViewProfile_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "profile-wrapper" };
const _hoisted_2 = { class: "profile-header has-text-centered" };
const _hoisted_3 = { class: "title is-4 is-narrow is-thin" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, " Encuentra en este lugar todos los datos que has registrado en la plataforma. ", -1);
const _hoisted_5 = { class: "profile-body" };
const _hoisted_6 = { class: "columns" };
const _hoisted_7 = { class: "column is-12" };
const _hoisted_8 = { class: "profile-card" };
const _hoisted_9 = { class: "profile-card-section" };
const _hoisted_10 = { class: "section-title" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h4", null, "Sobre mi", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_13 = { class: "section-content" };
const _hoisted_14 = { class: "description" };
const _hoisted_15 = { class: "profile-card-section" };
const _hoisted_16 = { class: "section-title" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("h4", null, "Mi Perfil", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_19 = { class: "section-content" };
const _hoisted_20 = { class: "experience-wrapper" };
const _hoisted_21 = { class: "experience-item" };
const _hoisted_22 = { class: "meta" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Pais / ciudad", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle"
}, null, -1);
const _hoisted_25 = { class: "experience-item" };
const _hoisted_26 = { class: "meta" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Genero", -1);
const _hoisted_28 = { class: "experience-item" };
const _hoisted_29 = { class: "meta" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Usuario", -1);
const _hoisted_31 = { class: "experience-item" };
const _hoisted_32 = { class: "meta" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Identificacion", -1);
const _hoisted_34 = { class: "experience-item" };
const _hoisted_35 = { class: "meta" };
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Telefono", -1);
const _hoisted_37 = { class: "profile-card-section" };
const _hoisted_38 = { class: "section-title" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("h4", null, "Test Semicooper", -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pencil"
}, null, -1);
const _hoisted_41 = { class: "section-content" };
const _hoisted_42 = { class: "languages-wrapper" };
const _hoisted_43 = { class: "languages-item" };
const _hoisted_44 = { class: "meta" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "Semicooper", -1);
const _hoisted_46 = { class: "languages-item" };
const _hoisted_47 = { class: "meta" };
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "VAM", -1);
const _hoisted_49 = { class: "languages-item" };
const _hoisted_50 = { class: "meta" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("span", { class: "dark-inverted" }, "VAM Decimal", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    const datosSemicooper = ref("");
    onMounted(async () => {
      console.log("id es: ", userSession.userId);
      datosSemicooper.value = await getSemicooper(userSession.userId);
      console.log("datos semi:", datosSemicooper.value);
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_VAvatar = _sfc_main$2;
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_VAvatar, {
            size: "xl",
            picture: unref(userSession).imagenUrl,
            badge: "/images/icons/flags/united-states-of-america.svg"
          }, null, 8, ["picture"]),
          createBaseVNode("h3", _hoisted_3, toDisplayString((_a = unref(userSession).userData) == null ? void 0 : _a.nombres) + " " + toDisplayString((_b = unref(userSession).userData) == null ? void 0 : _b.apellidos), 1),
          _hoisted_4
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    _hoisted_11,
                    createVNode(_component_RouterLink, { to: { name: "deportista-misDatos-misDatosEdit-personalesEdit" } }, {
                      default: withCtx(() => [
                        _hoisted_12
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("p", _hoisted_14, toDisplayString((_c = unref(userSession).userData) == null ? void 0 : _c.descripcion), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    _hoisted_17,
                    createVNode(_component_RouterLink, { to: { name: "deportista-misDatos-misDatosEdit-personalesEdit" } }, {
                      default: withCtx(() => [
                        _hoisted_18
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_19, [
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("div", _hoisted_22, [
                          _hoisted_23,
                          createBaseVNode("span", null, [
                            createBaseVNode("span", null, toDisplayString((_d = unref(userSession).userData) == null ? void 0 : _d.pais), 1),
                            _hoisted_24,
                            createBaseVNode("span", null, toDisplayString((_e = unref(userSession).userData) == null ? void 0 : _e.ciudad), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_25, [
                        createBaseVNode("div", _hoisted_26, [
                          _hoisted_27,
                          createBaseVNode("span", null, toDisplayString((_f = unref(userSession).userData) == null ? void 0 : _f.genero), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_28, [
                        createBaseVNode("div", _hoisted_29, [
                          _hoisted_30,
                          createBaseVNode("span", null, toDisplayString((_g = unref(userSession).userData) == null ? void 0 : _g.nameUser), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("div", _hoisted_32, [
                          _hoisted_33,
                          createBaseVNode("span", null, toDisplayString((_h = unref(userSession).userData) == null ? void 0 : _h.identificacion), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_34, [
                        createBaseVNode("div", _hoisted_35, [
                          _hoisted_36,
                          createBaseVNode("span", null, toDisplayString((_i = unref(userSession).userData) == null ? void 0 : _i.telefono), 1)
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_37, [
                  createBaseVNode("div", _hoisted_38, [
                    _hoisted_39,
                    createVNode(_component_RouterLink, { to: { name: "deportista-perfil-perfilEdit-rendimientoEdit" } }, {
                      default: withCtx(() => [
                        _hoisted_40
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_41, [
                    createBaseVNode("div", _hoisted_42, [
                      createBaseVNode("div", _hoisted_43, [
                        createBaseVNode("div", _hoisted_44, [
                          _hoisted_45,
                          createBaseVNode("span", null, toDisplayString(datosSemicooper.value.semicooper), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_46, [
                        createBaseVNode("div", _hoisted_47, [
                          _hoisted_48,
                          createBaseVNode("span", null, toDisplayString(datosSemicooper.value.VAM), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_49, [
                        createBaseVNode("div", _hoisted_50, [
                          _hoisted_51,
                          createBaseVNode("span", null, toDisplayString(datosSemicooper.value.VAM_decimal), 1)
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
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Profile View");
    useHead({
      title: "Profile View - Sidebar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_ViewProfile = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ViewProfile)
      ]);
    };
  }
});
export { _sfc_main as default };
