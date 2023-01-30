import { _ as __unplugin_components_0, b as _sfc_main$a, c as _sfc_main$b, d as _sfc_main$c, e as _sfc_main$d, f as __unplugin_components_11, g as __unplugin_components_12, h as _sfc_main$e } from "./NotificationsMobileDropdown.4f99105b.js";
import { y as defineComponent, a as useUserSession, z as ref, am as onBeforeMount, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, M as withKeys, v as withModifiers, q as createVNode, w as withCtx, f as createBlock, m as createTextVNode, l as createCommentVNode, g as renderSlot, k as normalizeClass, F as Fragment, N as useRoute, O as watchPostEffect, C as watch, ap as KeepAlive, T as Transition, t as toDisplayString, D as unref, al as __unplugin_components_0$1, P as resolveDynamicComponent } from "./index.9a2a8c84.js";
import { e as onValue, r as ref$1, d as database } from "./config.165bca36.js";
import { u as useViewWrapper } from "./viewWrapper.8bde9c63.js";
import { b as block0 } from "./route-block.7fdbc26a.js";
import "./VAvatar.2fd462f4.js";
import "./useNotyf.312f7415.js";
var DDashRutina_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$8 = { class: "sidebar-panel is-generic" };
const _hoisted_2$8 = { class: "subpanel-header" };
const _hoisted_3$8 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "Men\xFA Rutina", -1);
const _hoisted_4$8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$7 = [
  _hoisted_4$8
];
const _hoisted_6$7 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$7 = /* @__PURE__ */ createTextVNode(" Rutina ");
const _hoisted_8$7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_10$6 = /* @__PURE__ */ createBaseVNode("span", null, "Ver Rutina", -1);
const _hoisted_11$6 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_12$6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_13$5 = /* @__PURE__ */ createBaseVNode("span", null, "Ver Rutina", -1);
const _hoisted_14$5 = [
  _hoisted_12$6,
  _hoisted_13$5
];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$8, [
          _hoisted_3$8,
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => _ctx.emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.emit("close"))
          }, _hoisted_5$7, 32)
        ]),
        createBaseVNode("div", _hoisted_6$7, [
          createBaseVNode("ul", null, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_7$7,
                _hoisted_8$7
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-rutinas" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$6,
                    _hoisted_10$6
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_11$6, _hoisted_14$5))
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
var DDashSuscription_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$7 = { class: "sidebar-panel is-generic" };
const _hoisted_2$7 = { class: "subpanel-header" };
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "Men\xFA Suscripci\xF3n", -1);
const _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$6 = [
  _hoisted_4$7
];
const _hoisted_6$6 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$6 = /* @__PURE__ */ createTextVNode(" Suscripci\xF3n ");
const _hoisted_8$6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_10$5 = /* @__PURE__ */ createBaseVNode("span", null, "Solicitud", -1);
const _hoisted_11$5 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_12$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_13$4 = /* @__PURE__ */ createBaseVNode("span", null, "Solicitud", -1);
const _hoisted_14$4 = [
  _hoisted_12$5,
  _hoisted_13$4
];
const _hoisted_15$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_16$4 = /* @__PURE__ */ createBaseVNode("span", null, "Metodo Pago", -1);
const _hoisted_17$4 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_18$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_19$3 = /* @__PURE__ */ createBaseVNode("span", null, "Metodo Pago", -1);
const _hoisted_20$3 = [
  _hoisted_18$4,
  _hoisted_19$3
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$7, [
          _hoisted_3$7,
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => _ctx.emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.emit("close"))
          }, _hoisted_5$6, 32)
        ]),
        createBaseVNode("div", _hoisted_6$6, [
          createBaseVNode("ul", null, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_7$6,
                _hoisted_8$6
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-solicitud-entrenadores" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$5,
                    _hoisted_10$5
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_11$5, _hoisted_14$4)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 2,
                  to: { name: "deportista-metodoPago-metodo" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_15$4,
                    _hoisted_16$4
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_17$4, _hoisted_20$3))
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
var DDashSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$6 = { class: "sidebar-panel is-generic" };
const _hoisted_2$6 = { class: "subpanel-header" };
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "Men\xFA", -1);
const _hoisted_4$6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$5 = [
  _hoisted_4$6
];
const _hoisted_6$5 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$5 = /* @__PURE__ */ createTextVNode(" Mis datos ");
const _hoisted_8$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_9$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_10$4 = /* @__PURE__ */ createBaseVNode("span", null, "Personales", -1);
const _hoisted_11$4 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_12$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_13$3 = /* @__PURE__ */ createTextVNode(" Personales ");
const _hoisted_14$3 = [
  _hoisted_12$4,
  _hoisted_13$3
];
const _hoisted_15$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_16$3 = /* @__PURE__ */ createBaseVNode("span", null, "Usuario", -1);
const _hoisted_17$3 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_18$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_19$2 = /* @__PURE__ */ createTextVNode(" Usuario ");
const _hoisted_20$2 = [
  _hoisted_18$3,
  _hoisted_19$2
];
const _hoisted_21$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_22$1 = /* @__PURE__ */ createBaseVNode("span", null, "Contacto", -1);
const _hoisted_23$1 = {
  key: 5,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_24$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_25$1 = /* @__PURE__ */ createTextVNode(" Usuario ");
const _hoisted_26$1 = [
  _hoisted_24$1,
  _hoisted_25$1
];
const _hoisted_27$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_28$1 = /* @__PURE__ */ createTextVNode(" Perfil ");
const _hoisted_29$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_30$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_31$1 = /* @__PURE__ */ createBaseVNode("span", null, "Morfolog\xEDa", -1);
const _hoisted_32$1 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_33$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_34$1 = /* @__PURE__ */ createTextVNode(" Morfolog\xEDa ");
const _hoisted_35$1 = [
  _hoisted_33$1,
  _hoisted_34$1
];
const _hoisted_36$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_37$1 = /* @__PURE__ */ createBaseVNode("span", null, "Capacidad F\xEDsica", -1);
const _hoisted_38$1 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_39$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_40$1 = /* @__PURE__ */ createTextVNode(" Capacidad F\xEDsica ");
const _hoisted_41$1 = [
  _hoisted_39$1,
  _hoisted_40$1
];
const _hoisted_42$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_43$1 = /* @__PURE__ */ createBaseVNode("span", null, "Rendimiento", -1);
const _hoisted_44$1 = {
  key: 5,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_45$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_46$1 = /* @__PURE__ */ createTextVNode(" Rendimiento ");
const _hoisted_47$1 = [
  _hoisted_45$1,
  _hoisted_46$1
];
const _hoisted_48$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_49$1 = /* @__PURE__ */ createBaseVNode("span", null, "Deportivo", -1);
const _hoisted_50$1 = {
  key: 7,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_51$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_52$1 = /* @__PURE__ */ createTextVNode(" Deportivo ");
const _hoisted_53$1 = [
  _hoisted_51$1,
  _hoisted_52$1
];
const _hoisted_54$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_55$1 = /* @__PURE__ */ createBaseVNode("span", null, "Salud", -1);
const _hoisted_56$1 = {
  key: 9,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_57$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_58$1 = /* @__PURE__ */ createTextVNode(" Salud ");
const _hoisted_59$1 = [
  _hoisted_57$1,
  _hoisted_58$1
];
const _hoisted_60$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_61$1 = /* @__PURE__ */ createBaseVNode("span", null, "Objetivos", -1);
const _hoisted_62$1 = {
  key: 11,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_63$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_64$1 = /* @__PURE__ */ createTextVNode(" Objetivos ");
const _hoisted_65$1 = [
  _hoisted_63$1,
  _hoisted_64$1
];
const _hoisted_66$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_67$1 = /* @__PURE__ */ createTextVNode(" Planes ");
const _hoisted_68$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_69$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_70$1 = /* @__PURE__ */ createBaseVNode("span", null, "Suscripci\xF3n", -1);
const _hoisted_71$1 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_72$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_73$1 = /* @__PURE__ */ createTextVNode(" Suscripci\xF3n ");
const _hoisted_74$1 = [
  _hoisted_72$1,
  _hoisted_73$1
];
const _hoisted_75$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_76$1 = /* @__PURE__ */ createBaseVNode("span", null, "Facturaci\xF3n", -1);
const _hoisted_77$1 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_78$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_79$1 = /* @__PURE__ */ createTextVNode(" Facturaci\xF3n ");
const _hoisted_80$1 = [
  _hoisted_78$1,
  _hoisted_79$1
];
const _hoisted_81$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_82$1 = /* @__PURE__ */ createTextVNode(" Entrenamiento ");
const _hoisted_83$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_84$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_85$1 = /* @__PURE__ */ createBaseVNode("span", null, "Tu Entrenador", -1);
const _hoisted_86$1 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_87$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_88$1 = /* @__PURE__ */ createTextVNode(" Tu Entrenador ");
const _hoisted_89$1 = [
  _hoisted_87$1,
  _hoisted_88$1
];
const _hoisted_90$1 = {
  key: 2,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_91$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_92$1 = /* @__PURE__ */ createTextVNode(" Entrenadores ");
const _hoisted_93$1 = [
  _hoisted_91$1,
  _hoisted_92$1
];
const _hoisted_94$1 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_95$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_96$1 = /* @__PURE__ */ createTextVNode(" Rutinas ");
const _hoisted_97$1 = [
  _hoisted_95$1,
  _hoisted_96$1
];
const _hoisted_98$1 = {
  key: 4,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_99$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_100$1 = /* @__PURE__ */ createTextVNode(" Explorar ");
const _hoisted_101$1 = [
  _hoisted_99$1,
  _hoisted_100$1
];
const _hoisted_102$1 = {
  key: 5,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_103$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_104$1 = /* @__PURE__ */ createTextVNode(" Sugerencias ");
const _hoisted_105$1 = [
  _hoisted_103$1,
  _hoisted_104$1
];
const _hoisted_106$1 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_107$1 = /* @__PURE__ */ createTextVNode(" Configuraci\xF3n ");
const _hoisted_108$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_109$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_110$1 = /* @__PURE__ */ createBaseVNode("span", null, "Conexi\xF3n", -1);
const _hoisted_111$1 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_112$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_113$1 = /* @__PURE__ */ createTextVNode(" Conexi\xF3n ");
const _hoisted_114$1 = [
  _hoisted_112$1,
  _hoisted_113$1
];
const _hoisted_115$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_116$1 = /* @__PURE__ */ createBaseVNode("span", null, "Ayuda", -1);
const _hoisted_117$1 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_118$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_119$1 = /* @__PURE__ */ createTextVNode(" Ayuda ");
const _hoisted_120$1 = [
  _hoisted_118$1,
  _hoisted_119$1
];
const _hoisted_121$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_122$1 = /* @__PURE__ */ createBaseVNode("span", null, "Acerca de", -1);
const _hoisted_123$1 = {
  key: 5,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_124$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_125 = /* @__PURE__ */ createTextVNode(" Acerca de ");
const _hoisted_126 = [
  _hoisted_124$1,
  _hoisted_125
];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          _hoisted_3$6,
          createBaseVNode("div", {
            class: "panel-close",
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => _ctx.emit("close"), ["prevent"]), ["space"])),
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.emit("close"))
          }, _hoisted_5$5, 32)
        ]),
        createBaseVNode("div", _hoisted_6$5, [
          createBaseVNode("ul", null, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_7$5,
                _hoisted_8$5
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-misDatos-misDatosEdit-personalesEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$4,
                    _hoisted_10$4
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_11$4, _hoisted_14$3)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 2,
                  to: { name: "deportista-misDatos-misDatosEdit-usuarioEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_15$3,
                    _hoisted_16$3
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_17$3, _hoisted_20$2)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 4,
                  to: { name: "deportista-misDatos-misDatosEdit-contactoEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_21$2,
                    _hoisted_22$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_23$1, _hoisted_26$1))
              ]),
              _: 1
            }),
            _hoisted_27$1,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_28$1,
                _hoisted_29$1
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-perfil-perfilEdit-morfologicoEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_30$1,
                    _hoisted_31$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_32$1, _hoisted_35$1)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 2,
                  to: { name: "deportista-perfil-perfilEdit-capacidadEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_36$1,
                    _hoisted_37$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_38$1, _hoisted_41$1)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 4,
                  to: { name: "deportista-perfil-perfilEdit-rendimientoEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_42$1,
                    _hoisted_43$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_44$1, _hoisted_47$1)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 6,
                  to: { name: "deportista-perfil-perfilEdit-deportivoEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_48$1,
                    _hoisted_49$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_50$1, _hoisted_53$1)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 8,
                  to: { name: "deportista-perfil-perfilEdit-saludEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_54$1,
                    _hoisted_55$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_56$1, _hoisted_59$1)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 10,
                  to: { name: "deportista-perfil-perfilEdit-objetivosEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_60$1,
                    _hoisted_61$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_62$1, _hoisted_65$1))
              ]),
              _: 1
            }),
            _hoisted_66$1,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_67$1,
                _hoisted_68$1
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-planes-planesEdit-suscripcionEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_69$1,
                    _hoisted_70$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_71$1, _hoisted_74$1)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 2,
                  to: { name: "deportista-planes-planesEdit-facturacionEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_75$1,
                    _hoisted_76$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_77$1, _hoisted_80$1))
              ]),
              _: 1
            }),
            _hoisted_81$1,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_82$1,
                _hoisted_83$1
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-entrenamiento-miEntrenamiento-tuEntrenador" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_84$1,
                    _hoisted_85$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_86$1, _hoisted_89$1)),
                bienvenida.value == 0 ? (openBlock(), createElementBlock("span", _hoisted_90$1, _hoisted_93$1)) : createCommentVNode("", true),
                bienvenida.value == 0 ? (openBlock(), createElementBlock("span", _hoisted_94$1, _hoisted_97$1)) : createCommentVNode("", true),
                bienvenida.value == 0 ? (openBlock(), createElementBlock("span", _hoisted_98$1, _hoisted_101$1)) : createCommentVNode("", true),
                bienvenida.value == 0 ? (openBlock(), createElementBlock("span", _hoisted_102$1, _hoisted_105$1)) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            _hoisted_106$1,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_107$1,
                _hoisted_108$1
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-configuracion-configuracionEdit-showConexion" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_109$1,
                    _hoisted_110$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_111$1, _hoisted_114$1)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 2,
                  to: { name: "deportista-configuracion-configuracionEdit-showAyuda" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_115$1,
                    _hoisted_116$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_117$1, _hoisted_120$1)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 4,
                  to: { name: "deportista-configuracion-configuracionEdit-showAcerca" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_121$1,
                    _hoisted_122$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_123$1, _hoisted_126))
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$5 = { class: "mobile-subsidebar" };
const _hoisted_2$5 = { class: "inner" };
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Men\xFA Rutina")
], -1);
const _hoisted_4$5 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$4 = /* @__PURE__ */ createTextVNode(" Rutina ");
const _hoisted_6$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_7$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_8$4 = /* @__PURE__ */ createBaseVNode("span", null, "Ver Rutina", -1);
const _hoisted_9$3 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_10$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("span", null, "Ver Rutina", -1);
const _hoisted_12$3 = [
  _hoisted_10$3,
  _hoisted_11$3
];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          _hoisted_3$5,
          createBaseVNode("ul", _hoisted_4$5, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_5$4,
                _hoisted_6$4
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-rutinas" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_7$4,
                    _hoisted_8$4
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_9$3, _hoisted_12$3))
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "mobile-subsidebar" };
const _hoisted_2$4 = { class: "inner" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Men\xFA Suscription")
], -1);
const _hoisted_4$4 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$3 = /* @__PURE__ */ createTextVNode(" Suscripci\xF3n ");
const _hoisted_6$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_8$3 = /* @__PURE__ */ createBaseVNode("span", null, "Solicitud", -1);
const _hoisted_9$2 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_10$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-home"
}, null, -1);
const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("span", null, "Solicitud", -1);
const _hoisted_12$2 = [
  _hoisted_10$2,
  _hoisted_11$2
];
const _hoisted_13$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("span", null, "Metodo Pago", -1);
const _hoisted_15$2 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_17$2 = /* @__PURE__ */ createBaseVNode("span", null, "Objetivos", -1);
const _hoisted_18$2 = [
  _hoisted_16$2,
  _hoisted_17$2
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          _hoisted_3$4,
          createBaseVNode("ul", _hoisted_4$4, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_5$3,
                _hoisted_6$3
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-solicitud-entrenadores" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_7$3,
                    _hoisted_8$3
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_9$2, _hoisted_12$2)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 2,
                  to: { name: "deportista-metodoPago-metodo" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_13$2,
                    _hoisted_14$2
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_15$2, _hoisted_18$2))
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "mobile-subsidebar" };
const _hoisted_2$3 = { class: "inner" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Men\xFA")
], -1);
const _hoisted_4$3 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$2 = /* @__PURE__ */ createTextVNode(" Mis datos ");
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("span", null, "Personales", -1);
const _hoisted_9$1 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_11$1 = /* @__PURE__ */ createTextVNode(" Personales ");
const _hoisted_12$1 = [
  _hoisted_10$1,
  _hoisted_11$1
];
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("span", null, "Usuario", -1);
const _hoisted_15$1 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_17$1 = /* @__PURE__ */ createTextVNode(" Usuario ");
const _hoisted_18$1 = [
  _hoisted_16$1,
  _hoisted_17$1
];
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("span", null, "Contacto", -1);
const _hoisted_21$1 = {
  key: 5,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user"
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createTextVNode(" Contacto ");
const _hoisted_24 = [
  _hoisted_22,
  _hoisted_23
];
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_26 = /* @__PURE__ */ createTextVNode(" Perfil ");
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("span", null, "Morfolog\xEDa", -1);
const _hoisted_30 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_32 = /* @__PURE__ */ createTextVNode(" Morfolog\xEDa ");
const _hoisted_33 = [
  _hoisted_31,
  _hoisted_32
];
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("span", null, "Capacidad F\xEDsica", -1);
const _hoisted_36 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_38 = /* @__PURE__ */ createTextVNode(" Capacidad F\xEDsica ");
const _hoisted_39 = [
  _hoisted_37,
  _hoisted_38
];
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("span", null, "Rendimiento", -1);
const _hoisted_42 = {
  key: 5,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("i", {
  class: "lnil lnil-ruler",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_44 = /* @__PURE__ */ createTextVNode(" Rendimiento ");
const _hoisted_45 = [
  _hoisted_43,
  _hoisted_44
];
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("span", null, "Deportivo", -1);
const _hoisted_48 = {
  key: 7,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_50 = /* @__PURE__ */ createTextVNode(" Deportivo ");
const _hoisted_51 = [
  _hoisted_49,
  _hoisted_50
];
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("span", null, "Salud", -1);
const _hoisted_54 = {
  key: 9,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_56 = /* @__PURE__ */ createTextVNode(" Salud ");
const _hoisted_57 = [
  _hoisted_55,
  _hoisted_56
];
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("span", null, "Objetivos", -1);
const _hoisted_60 = {
  key: 11,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_62 = /* @__PURE__ */ createTextVNode(" Objetivos ");
const _hoisted_63 = [
  _hoisted_61,
  _hoisted_62
];
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_65 = /* @__PURE__ */ createTextVNode(" Planes ");
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("span", null, "Planes", -1);
const _hoisted_69 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_71 = /* @__PURE__ */ createTextVNode(" Planes ");
const _hoisted_72 = [
  _hoisted_70,
  _hoisted_71
];
const _hoisted_73 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("span", null, "Facturaci\xF3n", -1);
const _hoisted_75 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_77 = /* @__PURE__ */ createTextVNode(" Facturaci\xF3n ");
const _hoisted_78 = [
  _hoisted_76,
  _hoisted_77
];
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_80 = /* @__PURE__ */ createTextVNode(" Entrenamiento ");
const _hoisted_81 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("span", null, "Tu Entrenador", -1);
const _hoisted_84 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_86 = /* @__PURE__ */ createTextVNode(" Tu Entrenador ");
const _hoisted_87 = [
  _hoisted_85,
  _hoisted_86
];
const _hoisted_88 = {
  key: 2,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_90 = /* @__PURE__ */ createTextVNode(" Entrenadores ");
const _hoisted_91 = [
  _hoisted_89,
  _hoisted_90
];
const _hoisted_92 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_94 = /* @__PURE__ */ createTextVNode(" Rutinas ");
const _hoisted_95 = [
  _hoisted_93,
  _hoisted_94
];
const _hoisted_96 = {
  key: 4,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_97 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_98 = /* @__PURE__ */ createTextVNode(" Explorar ");
const _hoisted_99 = [
  _hoisted_97,
  _hoisted_98
];
const _hoisted_100 = {
  key: 5,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_102 = /* @__PURE__ */ createTextVNode(" Sugerencias ");
const _hoisted_103 = [
  _hoisted_101,
  _hoisted_102
];
const _hoisted_104 = /* @__PURE__ */ createBaseVNode("li", { class: "divider" }, null, -1);
const _hoisted_105 = /* @__PURE__ */ createTextVNode(" Configuraci\xF3n ");
const _hoisted_106 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_108 = /* @__PURE__ */ createBaseVNode("span", null, "Conexi\xF3n", -1);
const _hoisted_109 = {
  key: 1,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_111 = /* @__PURE__ */ createTextVNode(" Conexi\xF3n ");
const _hoisted_112 = [
  _hoisted_110,
  _hoisted_111
];
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_114 = /* @__PURE__ */ createBaseVNode("span", null, "Ayuda", -1);
const _hoisted_115 = {
  key: 3,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_117 = /* @__PURE__ */ createTextVNode(" Ayuda ");
const _hoisted_118 = [
  _hoisted_116,
  _hoisted_117
];
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_120 = /* @__PURE__ */ createBaseVNode("span", null, "Acerca de", -1);
const _hoisted_121 = {
  key: 5,
  class: "is-submenu",
  style: { "color": "red" }
};
const _hoisted_122 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bi-cycle"
}, null, -1);
const _hoisted_123 = /* @__PURE__ */ createTextVNode(" Acerca de ");
const _hoisted_124 = [
  _hoisted_122,
  _hoisted_123
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          _hoisted_3$3,
          createBaseVNode("ul", _hoisted_4$3, [
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_5$2,
                _hoisted_6$2
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-misDatos-misDatosEdit-personalesEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_7$2,
                    _hoisted_8$2
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_9$1, _hoisted_12$1)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 2,
                  to: { name: "deportista-misDatos-misDatosEdit-usuarioEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_13$1,
                    _hoisted_14$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_15$1, _hoisted_18$1)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 4,
                  to: { name: "deportista-misDatos-misDatosEdit-contactoEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_19$1,
                    _hoisted_20$1
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_21$1, _hoisted_24))
              ]),
              _: 1
            }),
            _hoisted_25,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_26,
                _hoisted_27
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-perfil-perfilEdit-morfologicoEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_28,
                    _hoisted_29
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_30, _hoisted_33)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 2,
                  to: { name: "deportista-perfil-perfilEdit-capacidadEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_34,
                    _hoisted_35
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_36, _hoisted_39)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 4,
                  to: { name: "deportista-perfil-perfilEdit-rendimientoEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_40,
                    _hoisted_41
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_42, _hoisted_45)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 6,
                  to: { name: "deportista-perfil-perfilEdit-deportivoEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_46,
                    _hoisted_47
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_48, _hoisted_51)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 8,
                  to: { name: "deportista-perfil-perfilEdit-saludEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_52,
                    _hoisted_53
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_54, _hoisted_57)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 10,
                  to: { name: "deportista-perfil-perfilEdit-objetivosEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_58,
                    _hoisted_59
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_60, _hoisted_63))
              ]),
              _: 1
            }),
            _hoisted_64,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_65,
                _hoisted_66
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-planes-planesEdit-suscripcionEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_67,
                    _hoisted_68
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_69, _hoisted_72)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 2,
                  to: { name: "deportista-planes-planesEdit-facturacionEdit" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_73,
                    _hoisted_74
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_75, _hoisted_78))
              ]),
              _: 1
            }),
            _hoisted_79,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_80,
                _hoisted_81
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-entrenamiento-miEntrenamiento-tuEntrenador" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_82,
                    _hoisted_83
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_84, _hoisted_87)),
                bienvenida.value == 0 ? (openBlock(), createElementBlock("span", _hoisted_88, _hoisted_91)) : createCommentVNode("", true),
                bienvenida.value == 0 ? (openBlock(), createElementBlock("span", _hoisted_92, _hoisted_95)) : createCommentVNode("", true),
                bienvenida.value == 0 ? (openBlock(), createElementBlock("span", _hoisted_96, _hoisted_99)) : createCommentVNode("", true),
                bienvenida.value == 0 ? (openBlock(), createElementBlock("span", _hoisted_100, _hoisted_103)) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            _hoisted_104,
            createVNode(_component_VCollapseLinks, null, {
              header: withCtx(() => [
                _hoisted_105,
                _hoisted_106
              ]),
              default: withCtx(() => [
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 0,
                  to: { name: "deportista-configuracion-configuracionEdit-showConexion" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_107,
                    _hoisted_108
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_109, _hoisted_112)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 2,
                  to: { name: "deportista-configuracion-configuracionEdit-showAyuda" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_113,
                    _hoisted_114
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_115, _hoisted_118)),
                bienvenida.value == 0 ? (openBlock(), createBlock(_component_RouterLink, {
                  key: 4,
                  to: { name: "deportista-configuracion-configuracionEdit-showAcerca" },
                  class: "is-submenu"
                }, {
                  default: withCtx(() => [
                    _hoisted_119,
                    _hoisted_120
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("span", _hoisted_121, _hoisted_124))
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
var DMobileSidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "inner" };
const _hoisted_2$2 = { class: "icon-side-menu" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    "aria-label": "Back to homepage",
    href: "/"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:activity"
    })
  ])
], -1);
const _hoisted_4$2 = { class: "bottom-icon-side-menu" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: normalizeClass([[props.isOpen && "is-active"], "mobile-main-sidebar"])
        }, [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("ul", _hoisted_2$2, [
              renderSlot(_ctx.$slots, "links", {}, () => [
                _hoisted_3$2
              ])
            ]),
            createBaseVNode("ul", _hoisted_4$2, [
              renderSlot(_ctx.$slots, "bottom-links")
            ])
          ])
        ], 2),
        props.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "mobile-overlay",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("toggle"), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = ($event) => emit("toggle"))
        }, null, 32)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var DMobileNavbar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = {
  class: "navbar mobile-navbar is-hidden-desktop is-hidden-tablet",
  "aria-label": "main navigation"
};
const _hoisted_2$1 = { class: "container" };
const _hoisted_3$1 = { class: "navbar-brand" };
const _hoisted_4$1 = { class: "brand-start" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_8$1 = [
  _hoisted_5$1,
  _hoisted_6$1,
  _hoisted_7$1
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", {
                class: normalizeClass(["navbar-burger", [props.isOpen && "is-active"]]),
                tabindex: "0",
                onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("toggle"), ["prevent"]), ["space"])),
                onClick: _cache[1] || (_cache[1] = ($event) => emit("toggle"))
              }, _hoisted_8$1, 34)
            ]),
            renderSlot(_ctx.$slots, "brand")
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "sidebar-layout" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1);
const _hoisted_3 = { class: "brand-end" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:user"
}, null, -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:user"
}, null, -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:search"
}, null, -1);
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:clock"
}, null, -1);
const _hoisted_15 = [
  _hoisted_14
];
const _hoisted_16 = { class: "page-title has-text-centered" };
const _hoisted_17 = { class: "menu-toggle has-chevron" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
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
const _hoisted_19 = [
  _hoisted_18
];
const _hoisted_20 = { class: "title-wrap" };
const _hoisted_21 = { class: "title is-4" };
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
    watch(() => route.fullPath, () => {
      isMobileSidebarOpen.value = false;
      if (props.closeOnChange && isDesktopSidebarOpen.value) {
        isDesktopSidebarOpen.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0$1;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NotificationsMobileDropdown = _sfc_main$a;
      const _component_UserProfileDropdown = _sfc_main$b;
      const _component_DMobileNavbar = _sfc_main$2;
      const _component_DMobileSidebar = _sfc_main$3;
      const _component_DDashMobileSubsidebar = _sfc_main$4;
      const _component_DDashMobileSuscription = _sfc_main$5;
      const _component_DDashMobileRutina = _sfc_main$6;
      const _component_CircularMenu = resolveComponent("CircularMenu");
      const _component_Sidebar = _sfc_main$c;
      const _component_DDashSubsidebar = _sfc_main$7;
      const _component_DDashSuscription = _sfc_main$8;
      const _component_DDashRutina = _sfc_main$9;
      const _component_Toolbar = _sfc_main$d;
      const _component_VPageContent = __unplugin_components_11;
      const _component_VPageContentWrapper = __unplugin_components_12;
      const _component_VViewWrapper = _sfc_main$e;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_DMobileNavbar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          brand: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "navbar-item is-brand"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_NotificationsMobileDropdown),
              createVNode(_component_UserProfileDropdown)
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_DMobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[7] || (_cache[7] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                "aria-label": "Display dashboard content",
                tabindex: "0",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "dashboard", ["prevent"]), ["space"])),
                onClick: _cache[2] || (_cache[2] = ($event) => activeMobileSubsidebar.value = "dashboard")
              }, _hoisted_5, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "suscription" && "is-active"]),
                "aria-label": "Display dashboard content",
                tabindex: "0",
                onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "suscription", ["prevent"]), ["space"])),
                onClick: _cache[4] || (_cache[4] = ($event) => activeMobileSubsidebar.value = "suscription")
              }, _hoisted_7, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "rutina" && "is-active"]),
                "aria-label": "Display dashboard content",
                tabindex: "0",
                onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => activeMobileSubsidebar.value = "rutina", ["prevent"]), ["space"])),
                onClick: _cache[6] || (_cache[6] = ($event) => activeMobileSubsidebar.value = "rutina")
              }, _hoisted_9, 34)
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            (openBlock(), createBlock(KeepAlive, null, [
              isMobileSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DDashMobileSubsidebar, { key: 0 })) : isMobileSidebarOpen.value && activeMobileSubsidebar.value === "suscription" ? (openBlock(), createBlock(_component_DDashMobileSuscription, { key: 1 })) : isMobileSidebarOpen.value && activeMobileSubsidebar.value === "rutina" ? (openBlock(), createBlock(_component_DDashMobileRutina, { key: 2 })) : createCommentVNode("", true)
            ], 1024))
          ]),
          _: 1
        }),
        createVNode(_component_CircularMenu),
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
                onKeydown: _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => switchSidebar("dashboard"), ["prevent"]), ["space"])),
                onClick: _cache[9] || (_cache[9] = ($event) => switchSidebar("dashboard"))
              }, _hoisted_11, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "suscription" && "is-active"]),
                "data-content": "Suscription",
                tabindex: "0",
                onKeydown: _cache[10] || (_cache[10] = withKeys(withModifiers(($event) => switchSidebar("suscription"), ["prevent"]), ["space"])),
                onClick: _cache[11] || (_cache[11] = ($event) => switchSidebar("suscription"))
              }, _hoisted_13, 34)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "rutina" && "is-active"]),
                "data-content": "Suscription",
                tabindex: "0",
                onKeydown: _cache[12] || (_cache[12] = withKeys(withModifiers(($event) => switchSidebar("rutina"), ["prevent"]), ["space"])),
                onClick: _cache[13] || (_cache[13] = ($event) => switchSidebar("rutina"))
              }, _hoisted_15, 34)
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
            (openBlock(), createBlock(KeepAlive, null, [
              isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "dashboard" ? (openBlock(), createBlock(_component_DDashSubsidebar, {
                key: 0,
                onClose: _cache[14] || (_cache[14] = ($event) => isDesktopSidebarOpen.value = false)
              })) : isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "suscription" ? (openBlock(), createBlock(_component_DDashSuscription, {
                key: 1,
                onClose: _cache[15] || (_cache[15] = ($event) => isDesktopSidebarOpen.value = false)
              })) : isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "rutina" ? (openBlock(), createBlock(_component_DDashRutina, {
                key: 2,
                onClose: _cache[16] || (_cache[16] = ($event) => isDesktopSidebarOpen.value = false)
              })) : createCommentVNode("", true)
            ], 1024))
          ]),
          _: 1
        }),
        createVNode(_component_VViewWrapper, null, {
          default: withCtx(() => [
            createVNode(_component_VPageContentWrapper, null, {
              default: withCtx(() => [
                props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_VPageContent, {
                  key: 1,
                  class: "is-relative"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("div", {
                        class: "vuero-hamburger nav-trigger push-resize",
                        tabindex: "0",
                        onKeydown: _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value, ["prevent"]), ["space"])),
                        onClick: _cache[18] || (_cache[18] = ($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value)
                      }, [
                        createBaseVNode("span", _hoisted_17, [
                          createBaseVNode("span", {
                            class: normalizeClass([[isDesktopSidebarOpen.value && "active"], "icon-box-toggle"])
                          }, _hoisted_19, 2)
                        ])
                      ], 32),
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("h1", _hoisted_21, toDisplayString(unref(viewWrapper).pageTitle), 1)
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
      const _component_DeportistaLayout = _sfc_main$1;
      return openBlock(), createBlock(_component_DeportistaLayout, null, {
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
