import { y as defineComponent, a as useUserSession, z as ref, A as onMounted, o as openBlock, i as createElementBlock, l as createCommentVNode, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, P as useHead } from "./index.7ac0c9d2.js";
import { u as useViewWrapper } from "./viewWrapper.22429616.js";
import { _ as _sfc_main$3 } from "./VBlock.0a4712d6.js";
import { _ as _sfc_main$2 } from "./VIconBox.649faa9e.js";
import { d as LISTARENTRENADORES } from "./superentrenador.37580e46.js";
import { L as LISTADEPORTISTA } from "./deportista.721fdc30.js";
import { L as LISTARUSUARIOSENLINEA } from "./administracion.ca6b4075.js";
import "./config.cf3a8941.js";
import "./main.abb91ed8.js";
import "./general.436cc3e4.js";
import "./useNotyf.edf649d6.js";
import "./useThemeColors.31c9a907.js";
var DashboardHero_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "personal-dashboard personal-dashboard-v1" };
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
    useUserSession();
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
      const _component_VIconBox = _sfc_main$2;
      const _component_VBlock = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createCommentVNode("", true),
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
