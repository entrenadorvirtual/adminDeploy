import { _ as _imports_0, a as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$8, d as _sfc_main$9, e as _sfc_main$a, f as _sfc_main$b, g as _sfc_main$c, h as __unplugin_components_9, i as __unplugin_components_10, j as _sfc_main$d } from "./NotificationsMobileDropdown.ea0c9d6f.js";
import { _ as __unplugin_components_0 } from "./VCollapseLinks.7347956c.js";
import { y as defineComponent, a as useUserSession, z as ref, N as onBeforeMount, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, Q as withKeys, v as withModifiers, q as createVNode, w as withCtx, m as createTextVNode, a1 as useRouter, M as useRoute, S as watchPostEffect, C as watch, k as normalizeClass, f as createBlock, l as createCommentVNode, T as Transition, g as renderSlot, t as toDisplayString, D as unref, a8 as resolveDynamicComponent } from "./index.5c29604d.js";
import { e as onValue, r as ref$1, d as database } from "./config.f3c9bc1b.js";
import { u as useViewWrapper } from "./viewWrapper.93f5013f.js";
import { b as block0 } from "./route-block.b5bad31b.js";
import "./VDropdown.7ce6b615.js";
import "./VIcon.f1c6decb.js";
import "./VAvatar.750ed0e1.js";
import "./useNotyf.e3af1d9e.js";
import "./useThemeColors.37241be5.js";
var DashboardsEntrenador_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "sidebar-panel is-generic" };
const _hoisted_2$4 = { class: "subpanel-header" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "Menu entrenadores", -1);
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$4 = [
  _hoisted_4$4
];
const _hoisted_6$4 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$4 = /* @__PURE__ */ createTextVNode(" Entrenadores ");
const _hoisted_8$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_10$4 = /* @__PURE__ */ createBaseVNode("span", null, "Administrar entrenadores ", -1);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const bienvenida = ref(7);
    onBeforeMount(async () => {
      onValue(ref$1(database, "users/" + userSession.userId + "/bienvenida"), (snapshot) => {
        if (snapshot.exists()) {
          bienvenida.value = snapshot.val();
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          _hoisted_3$4,
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
          }, _hoisted_5$4, 32)
        ]),
        createBaseVNode("div", _hoisted_6$4, [
          createBaseVNode("ul", null, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_7$4,
                _hoisted_8$4
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminEntrenadores-administracionEntrenadores" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$4,
                    _hoisted_10$4
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
var DashboardsAdministradorMenuprincipal_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "sidebar-panel is-generic" };
const _hoisted_2$3 = { class: "subpanel-header" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "Men\xFA", -1);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$3 = [
  _hoisted_4$3
];
const _hoisted_6$3 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$3 = /* @__PURE__ */ createTextVNode(" Administraci\xF3n ");
const _hoisted_8$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-flag"
}, null, -1);
const _hoisted_10$3 = /* @__PURE__ */ createBaseVNode("span", null, "Planes", -1);
const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-flag"
}, null, -1);
const _hoisted_12$2 = /* @__PURE__ */ createBaseVNode("span", null, "Asignar Plan", -1);
const _hoisted_13$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-flag"
}, null, -1);
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("span", null, "Ciudades ", -1);
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-target-alt-1"
}, null, -1);
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("span", null, "Distancias", -1);
const _hoisted_17$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-certificate-alt"
}, null, -1);
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("span", null, "Manuales", -1);
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("span", null, "Nacionalidad", -1);
const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-diagnosis-alt"
}, null, -1);
const _hoisted_22$1 = /* @__PURE__ */ createBaseVNode("span", null, "Validar variables de usuarios", -1);
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-diagnosis-alt"
}, null, -1);
const _hoisted_24$1 = /* @__PURE__ */ createBaseVNode("span", null, "Parametrizaci\xF3n", -1);
const _hoisted_25$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-diagnosis-alt"
}, null, -1);
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("span", null, "Codigos Descuento", -1);
const _hoisted_27$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_28$1 = /* @__PURE__ */ createTextVNode(" Imagenes de Bienvenida ");
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnir lnir-image"
}, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("span", null, "Administrar imagenes", -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnir lnir-image"
}, null, -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("span", null, "Subir imagenes ", -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_35 = /* @__PURE__ */ createTextVNode(" Reportes ");
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("span", null, "Reporte de Entrenadores", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("span", null, "Reporte de Deportistas", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-book icon-margin-left"
}, null, -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", null, " Reporte de Planes Gratuitos", -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-book icon-margin-left"
}, null, -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("span", null, " Reporte nuevos usuarios", -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_46 = /* @__PURE__ */ createTextVNode(" Contenido Multimedia ");
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("span", null, "Gestionar Contenido", -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-pencil-alt",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("span", null, "Gestionar Terminos", -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_53 = /* @__PURE__ */ createTextVNode(" Alianzas comerciales ");
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("span", null, "Gestionar Alianzas", -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  emits: ["close"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const bienvenida = ref(7);
    useRouter();
    onBeforeMount(async () => {
      onValue(ref$1(database, "users/" + userSession.userId + "/bienvenida"), (snapshot) => {
        if (snapshot.exists()) {
          bienvenida.value = snapshot.val();
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          _hoisted_3$3,
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
          }, _hoisted_5$3, 32)
        ]),
        createBaseVNode("div", _hoisted_6$3, [
          createBaseVNode("ul", null, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_7$3,
                _hoisted_8$3
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminPlanes-Adminplan" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$3,
                    _hoisted_10$3
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminDeportistas-asignarPlan" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_11$2,
                    _hoisted_12$2
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminCiudades-administracionCiudades" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_13$2,
                    _hoisted_14$2
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminDistancias" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_15$2,
                    _hoisted_16$2
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminEntrenadores-manualesEntrenadores" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_17$2,
                    _hoisted_18$2
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminNacionalidad" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_19$1,
                    _hoisted_20$1
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminVariables" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_21$1,
                    _hoisted_22$1
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminParametrizaci\xF3n" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_23$1,
                    _hoisted_24$1
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-codigosDescuento" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_25$1,
                    _hoisted_26$1
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _hoisted_27$1,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_28$1,
                _hoisted_29
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminImagenes" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_30,
                    _hoisted_31
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminImagenes-cargarImagenes" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_32,
                    _hoisted_33
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _hoisted_34,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_35,
                _hoisted_36
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-reportEntrenador-entrenadores" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_37,
                    _hoisted_38
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-reportDeportistas-deporindex" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_39,
                    _hoisted_40
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-reportPlanesGratuitos" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_41,
                    _hoisted_42
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-reportenuevosusuarios" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_43,
                    _hoisted_44
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _hoisted_45,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_46,
                _hoisted_47
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-contenidoMultimedia-contenido" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_48,
                    _hoisted_49
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-contenidoMultimedia-terminos" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_50,
                    _hoisted_51
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _hoisted_52,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_53,
                _hoisted_54
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-alianzas" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_55,
                    _hoisted_56
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "mobile-subsidebar" };
const _hoisted_2$2 = { class: "inner" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Men\xFA")
], -1);
const _hoisted_4$2 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$2 = /* @__PURE__ */ createTextVNode(" Entrenadores ");
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("span", null, "Administrar entrenadores ", -1);
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_10$2 = /* @__PURE__ */ createBaseVNode("span", null, "Manuales de entrenador", -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    const bienvenida = ref(7);
    onBeforeMount(async () => {
      onValue(ref$1(database, "users/" + userSession.userId + "/bienvenida"), (snapshot) => {
        if (snapshot.exists()) {
          bienvenida.value = snapshot.val();
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          _hoisted_3$2,
          createBaseVNode("ul", _hoisted_4$2, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_5$2,
                _hoisted_6$2
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminEntrenadores-administracionEntrenadores" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_7$2,
                    _hoisted_8$2
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminEntrenadores-manualesEntrenadores" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$2,
                    _hoisted_10$2
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "mobile-subsidebar" };
const _hoisted_2$1 = { class: "inner" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Men\xFA")
], -1);
const _hoisted_4$1 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode(" Administraci\xF3n ");
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-flag"
}, null, -1);
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("span", null, "Planes", -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-flag"
}, null, -1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("span", null, "Ciudades ", -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-target"
}, null, -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("span", null, "Distancias", -1);
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-target"
}, null, -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("span", null, "Nacionalidad", -1);
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_16$1 = /* @__PURE__ */ createTextVNode(" Imagenes de Bienvenida ");
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnir lnir-image"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "Administrar imagenes", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnir lnir-image"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", null, "Subir imagenes ", -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Reportes ");
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", null, "Reporte de Entrenadores", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", null, "Reporte de Deportistas", -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    const bienvenida = ref(7);
    onBeforeMount(async () => {
      onValue(ref$1(database, "users/" + userSession.userId + "/bienvenida"), (snapshot) => {
        if (snapshot.exists()) {
          bienvenida.value = snapshot.val();
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VCollapseLinks = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("ul", _hoisted_4$1, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_5$1,
                _hoisted_6$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminPlanes-Adminplan" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_7$1,
                    _hoisted_8$1
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminCiudades-administracionCiudades" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$1,
                    _hoisted_10$1
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminDistancias" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_11$1,
                    _hoisted_12$1
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminNacionalidad" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_13$1,
                    _hoisted_14$1
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _hoisted_15$1,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_16$1,
                _hoisted_17$1
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminImagenes" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_18$1,
                    _hoisted_19
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-adminImagenes-cargarImagenes" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_20,
                    _hoisted_21
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _hoisted_22,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_23,
                _hoisted_24
              ]),
              default: withCtx(() => [
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-reportEntrenador-entrenadores" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_25,
                    _hoisted_26
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "administrador-reportDeportistas-deporindex" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_27,
                    _hoisted_28
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "sidebar-layout" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_4 = { class: "brand-end" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:home"
}, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:home"
}, null, -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_12 = [
  _hoisted_11
];
const _hoisted_13 = { class: "page-title has-text-centered" };
const _hoisted_14 = { class: "menu-toggle has-chevron" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-top"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-center"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-bottom"
  })
], -1);
const _hoisted_16 = [
  _hoisted_15
];
const _hoisted_17 = { class: "title-wrap" };
const _hoisted_18 = { class: "title is-4" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    theme: { default: "default" },
    defaultSidebar: { default: "dashboard" },
    closeOnChange: { type: Boolean },
    openOnMounted: { type: Boolean },
    nowrap: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const viewWrapper = useViewWrapper();
    const route = useRoute();
    const isMobileSidebarOpen = ref(false);
    const isDesktopSidebarOpen = ref(props.openOnMounted);
    const activeMobileSubsidebar = ref(props.defaultSidebar);
    function switchSidebar(id) {
      if (id === activeMobileSubsidebar.value) {
        isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value;
      } else {
        isDesktopSidebarOpen.value = true;
        activeMobileSubsidebar.value = id;
      }
    }
    watchPostEffect(() => {
      var _a;
      viewWrapper.setPushed((_a = isDesktopSidebarOpen.value) != null ? _a : false);
    });
    watch(
      () => route.fullPath,
      () => {
        isMobileSidebarOpen.value = false;
        if (props.closeOnChange && isDesktopSidebarOpen.value) {
          isDesktopSidebarOpen.value = false;
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NotificationsMobileDropdown = _sfc_main$6;
      const _component_UserProfileDropdown = _sfc_main$7;
      const _component_MobileNavbar = _sfc_main$8;
      const _component_MobileSidebar = _sfc_main$9;
      const _component_DDashMobileSubsidebarAdministradorPrincipal = _sfc_main$2;
      const _component_DDashMobileSubsidebarEntrenadores = _sfc_main$3;
      const _component_Sidebar = _sfc_main$a;
      const _component_DashboardsAdministradorMenuprincipal = _sfc_main$4;
      const _component_DashboardsEntrenador = _sfc_main$5;
      const _component_LanguagesPanel = _sfc_main$b;
      const _component_Toolbar = _sfc_main$c;
      const _component_VPageContent = __unplugin_components_9;
      const _component_VPageContentWrapper = __unplugin_components_10;
      const _component_VViewWrapper = _sfc_main$d;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_MobileNavbar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          brand: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "navbar-item is-brand"
            }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_NotificationsMobileDropdown),
              createVNode(_component_UserProfileDropdown)
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_MobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[5] || (_cache[5] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                tabindex: "0",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "dashboard", ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = ($event) => activeMobileSubsidebar.value = "dashboard")
              }, _hoisted_6, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashsolicitudes" && "is-active"]),
                tabindex: "0",
                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "dashsolicitudes", ["prevent"]), ["space"])),
                onClick: _cache[4] || (_cache[4] = ($event) => activeMobileSubsidebar.value = "dashsolicitudes")
              }, _hoisted_8, 34)
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isMobileSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DDashMobileSubsidebarAdministradorPrincipal, { key: 0 })) : isMobileSidebarOpen.value && activeMobileSubsidebar.value === "dashsolicitudes" ? (openBlock(), createBlock(_component_DDashMobileSubsidebarEntrenadores, { key: 1 })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_Sidebar, {
          theme: props.theme,
          "is-open": isDesktopSidebarOpen.value
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                "data-content": "Dashboards",
                tabindex: "0",
                onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => switchSidebar("dashboard"), ["prevent"]), ["space"])),
                onClick: _cache[7] || (_cache[7] = ($event) => switchSidebar("dashboard"))
              }, _hoisted_10, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashentrenadores" && "is-active"]),
                "data-content": "Dashentrenadores",
                tabindex: "0",
                onKeydown: _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => switchSidebar("dashentrenadores"), ["prevent"]), ["space"])),
                onClick: _cache[9] || (_cache[9] = ($event) => switchSidebar("dashentrenadores"))
              }, _hoisted_12, 34)
            ])
          ]),
          "bottom-links": withCtx(() => [
            createBaseVNode("li", null, [
              createVNode(_component_UserProfileDropdown, { up: "" })
            ])
          ]),
          _: 1
        }, 8, ["theme", "is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DashboardsAdministradorMenuprincipal, {
              key: 0,
              onClose: _cache[10] || (_cache[10] = ($event) => isDesktopSidebarOpen.value = false)
            })) : isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "dashentrenadores" ? (openBlock(), createBlock(_component_DashboardsEntrenador, {
              key: 1,
              onClose: _cache[11] || (_cache[11] = ($event) => isDesktopSidebarOpen.value = false)
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_LanguagesPanel),
        createVNode(_component_VViewWrapper, null, {
          default: withCtx(() => [
            createVNode(_component_VPageContentWrapper, null, {
              default: withCtx(() => [
                props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_VPageContent, {
                  key: 1,
                  class: "is-relative"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("div", {
                        class: "vuero-hamburger nav-trigger push-resize",
                        tabindex: "0",
                        onKeydown: _cache[12] || (_cache[12] = withKeys(withModifiers(($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value, ["prevent"]), ["space"])),
                        onClick: _cache[13] || (_cache[13] = ($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value)
                      }, [
                        createBaseVNode("span", _hoisted_14, [
                          createBaseVNode("span", {
                            class: normalizeClass([[isDesktopSidebarOpen.value && "active"], "icon-box-toggle"])
                          }, _hoisted_16, 2)
                        ])
                      ], 32),
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("h1", _hoisted_18, toDisplayString(unref(viewWrapper).pageTitle), 1)
                      ]),
                      createVNode(_component_Toolbar, { class: "desktop-toolbar" })
                    ]),
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }))
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      const _component_AdministradorLayout = _sfc_main$1;
      return openBlock(), createBlock(_component_AdministradorLayout, null, {
        default: withCtx(() => [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              createVNode(Transition, {
                name: "fade-fast",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component), {
                    key: unref(route).fullPath
                  }))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export { _sfc_main as default };
