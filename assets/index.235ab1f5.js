import { x as defineComponent, a as useUserSession, y as ref, z as onMounted, o as openBlock, g as createElementBlock, k as createCommentVNode, i as createBaseVNode, p as createVNode, w as withCtx, C as unref, O as useHead } from "./index.5859d3e2.js";
import { u as useViewWrapper } from "./viewWrapper.1dcacd6c.js";
import { _ as _sfc_main$3 } from "./VBlock.9e16ef26.js";
import { _ as _sfc_main$2 } from "./VIconBox.35bdffde.js";
import { d as LISTARENTRENADORES } from "./superentrenador.0814834f.js";
import { L as LISTADEPORTISTA } from "./deportista.7005e8cc.js";
import { L as LISTARUSUARIOSENLINEA } from "./administracion.aabf7eb6.js";
import "./config.28ac5e58.js";
import "./main.a2946418.js";
import "./general.651d3f13.js";
import "./useNotyf.2ce0502b.js";
import "./useThemeColors.c1c0138a.js";
var DashboardHero_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "personal-dashboard personal-dashboard-v1" };
const _hoisted_9 = { class: "dashboard-body" };
const _hoisted_10 = { class: "columns is-multiline" };
const _hoisted_11 = { class: "column is-12" };
const _hoisted_12 = { class: "dashboard-card" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h4", { class: "dark-inverted" }, "Reporte de Usuarios:", -1);
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
                        subtitle: "Usuarios en l\xEDnea",
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
