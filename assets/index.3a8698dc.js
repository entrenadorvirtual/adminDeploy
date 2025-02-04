import { y as defineComponent, a as useUserSession, z as ref, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, D as unref, t as toDisplayString, q as createVNode, w as withCtx, m as createTextVNode, O as _sfc_main$2, P as useHead } from "./index.a70cc630.js";
import { u as useViewWrapper } from "./viewWrapper.6b9a60ad.js";
import { _ as _sfc_main$4 } from "./VBlock.0985cd01.js";
import { _ as _sfc_main$3 } from "./VIconBox.6eb66af9.js";
import { d as LISTARENTRENADORES } from "./superentrenador.0e30a47c.js";
import { L as LISTADEPORTISTA } from "./deportista.856eeeab.js";
import { L as LISTARUSUARIOSENLINEA } from "./administracion.cc08a79c.js";
import "./config.f3ec4a91.js";
import "./main.9958a253.js";
import "./general.502a4700.js";
import "./useNotyf.629a4adf.js";
import "./useThemeColors.11afe8e0.js";
var DashboardHero_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "personal-dashboard personal-dashboard-v1" };
const _hoisted_2 = { class: "dashboard-header" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "start" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "Estamos felices de tenerte de vuelta en tu dashboard personal.", -1);
const _hoisted_6 = { class: "end" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Ver Reportes");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Manage Store");
const _hoisted_9 = { class: "dashboard-body" };
const _hoisted_10 = { class: "columns is-multiline" };
const _hoisted_11 = { class: "column is-12" };
const _hoisted_12 = { class: "dashboard-card" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "Reporte de usuarios:", -1);
const _hoisted_14 = { class: "quick-stats" };
const _hoisted_15 = { class: "quick-stats-inner" };
const _hoisted_16 = { class: "quick-stat" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-analytics-alt-1"
}, null, -1);
const _hoisted_18 = { class: "quick-stat" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-handshake"
}, null, -1);
const _hoisted_20 = { class: "quick-stat" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-diamond-alt"
}, null, -1);
const _hoisted_22 = { class: "quick-stat" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bank"
}, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { imagenUrl, userEmail } = useUserSession();
    let numero_entrenadores = ref(null);
    let numero_deportistas = ref(null);
    let numero_total_usuarios = ref(null);
    let numero_usuarios_en_linea = ref(null);
    const obtenerDatos = async () => {
      var _a, _b;
      await LISTARENTRENADORES().then((res) => numero_entrenadores.value = res.length);
      await LISTADEPORTISTA().then((res) => numero_deportistas.value = res.length);
      console.log(await LISTARUSUARIOSENLINEA());
      await LISTARUSUARIOSENLINEA().then(
        (res) => numero_usuarios_en_linea.value = res.length
      );
      numero_total_usuarios.value = ((_a = numero_entrenadores.value) != null ? _a : 0) + ((_b = numero_deportistas.value) != null ? _b : 0);
    };
    onMounted(() => {
      obtenerDatos();
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VIconBox = _sfc_main$3;
      const _component_VBlock = _sfc_main$4;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("figure", null, [
            createBaseVNode("img", {
              src: unref(imagenUrl),
              width: 100,
              alt: "User Avatar"
            }, null, 8, _hoisted_3)
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("h3", null, "Bienvenido de vuelta, " + toDisplayString(unref(userEmail)), 1),
            _hoisted_5
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_VButton, { dark: "3" }, {
              default: withCtx(() => [
                _hoisted_7
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "primary",
              elevated: ""
            }, {
              default: withCtx(() => [
                _hoisted_8
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                _hoisted_13,
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      createVNode(_component_VBlock, {
                        title: unref(numero_deportistas),
                        subtitle: "Deportistas",
                        center: "",
                        "m-responsive": "",
                        "t-responsive": ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_VIconBox, {
                            color: "purple",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_17
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title"])
                    ]),
                    createBaseVNode("div", _hoisted_18, [
                      createVNode(_component_VBlock, {
                        title: unref(numero_entrenadores),
                        subtitle: "Entrenadores verificados",
                        center: "",
                        "m-responsive": "",
                        "t-responsive": ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_VIconBox, {
                            color: "orange",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_19
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title"])
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      createVNode(_component_VBlock, {
                        title: unref(numero_usuarios_en_linea),
                        subtitle: "Usuarios en linea",
                        center: "",
                        "m-responsive": "",
                        "t-responsive": ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_VIconBox, {
                            color: "green",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_21
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title"])
                    ]),
                    createBaseVNode("div", _hoisted_22, [
                      createVNode(_component_VBlock, {
                        title: unref(numero_total_usuarios),
                        subtitle: "Total de usuarios",
                        center: "",
                        "m-responsive": "",
                        "t-responsive": ""
                      }, {
                        icon: withCtx(() => [
                          createVNode(_component_VIconBox, {
                            color: "info",
                            rounded: ""
                          }, {
                            default: withCtx(() => [
                              _hoisted_23
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title"])
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Administracion");
    useHead({
      title: "Main Dashboard - My app"
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(_sfc_main$1)
      ]);
    };
  }
});
export { _sfc_main as default };
