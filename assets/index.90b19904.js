import { _ as _sfc_main$7 } from "./SuperentrenadorLayout.041e9c90.js";
import { u as usePlanRutina, _ as _sfc_main$5, a as _sfc_main$6 } from "./ListWidgetSingle.599b7e53.js";
import { _ as _sfc_main$4 } from "./VFlex.122176e5.js";
import { _ as _sfc_main$3 } from "./VFlexItem.a5d61664.js";
import { V as _export_sfc, y as defineComponent, M as useRoute, z as ref, N as onBeforeMount, r as reactive, o as openBlock, i as createElementBlock, j as createBaseVNode, t as toDisplayString, q as createVNode, w as withCtx, F as Fragment, s as renderList, D as unref, v as withModifiers, l as createCommentVNode, f as createBlock, ae as pushScopeId, af as popScopeId, m as createTextVNode, O as _sfc_main$2, P as useHead } from "./index.a7fc5dec.js";
import { b as GET_DATOS_RUTINA_GRATUITA } from "./superentrenador.95c310b7.js";
import { E as ENOpcionesCru, n as nombreDiasSemana } from "./constantes.e793b8cd.js";
import { u as useViewWrapper } from "./viewWrapper.0c20b402.js";
import "./NotificationsMobileDropdown.cb10062c.js";
import "./VDropdown.8656c252.js";
import "./VAvatar.39b9c3a4.js";
import "./config.0fd79a34.js";
import "./useNotyf.ce7ee7f1.js";
import "./notyf.es.f84e4201.js";
import "./VModal.6ca1fc6c.js";
import "./BloquesDistancia.82637331.js";
import "./VFlexTable.d8d849dc.js";
import "./VControl.4d17fa85.js";
import "./VTextarea.9eda26d4.js";
import "./VIconButton.336a029e.js";
import "./VInput.5920a8ca.js";
import "./VOption.ee07ba1d.js";
import "./convert.prod.1f5d8f54.js";
import "./vee-validate-zod.esm.9452dbca.js";
import "./general.8b156443.js";
import "./main.cf1f8e20.js";
import "./rutinas.71165fa8.js";
import "./mainfirestore.b9d64d68.js";
import "./fechas.6bd42486.js";
import "./match.1a597960.js";
import "./deportista.892d7693.js";
var PlanGratuitoEntrenador_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-3778b704"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "login-form" };
const _hoisted_2 = { class: "columns is-multiline is-mobile" };
const _hoisted_3 = { class: "column is-1-desktop is-half-mobile" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Deporte", -1));
const _hoisted_5 = { class: "subtitle is-6" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "is-divider-vertical" }, null, -1));
const _hoisted_7 = { class: "column is-2-desktop is-half-mobile" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Nombre del Plan", -1));
const _hoisted_9 = { class: "subtitle is-6" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "is-divider-vertical" }, null, -1));
const _hoisted_11 = { class: "column is-full-mobile" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Descripci\xF3n", -1));
const _hoisted_13 = { class: "subtitle is-6" };
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "is-divider-vertical" }, null, -1));
const _hoisted_15 = { class: "column is-full-mobile" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "title is-6" }, "Objetivos", -1));
const _hoisted_17 = { class: "subtitle is-6" };
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_19 = { class: "columns is-multiline widget-demo-columns half-columns" };
const _hoisted_20 = { class: "timeline-item" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "timeline-icon" }, [
  /* @__PURE__ */ createBaseVNode("button", { class: "btn-add-plan-g" }, "+")
], -1));
const _hoisted_22 = { class: "timeline-content" };
const _hoisted_23 = {
  key: 0,
  style: { "display": "flex", "gap": "2px" }
};
const _hoisted_24 = ["onClick"];
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:eye",
  "aria-hidden": "true"
}, null, -1));
const _hoisted_26 = [
  _hoisted_25
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const diasSemana = nombreDiasSemana;
    const route = useRoute();
    const planGratuito = ref();
    const planRutinaStore = usePlanRutina();
    onBeforeMount(async () => {
      planGratuito.value = await GET_DATOS_RUTINA_GRATUITA(route.params.id.toString());
      planRutinaStore.asignarBloquesSemana(planGratuito == null ? void 0 : planGratuito.value.plan);
    });
    const isOpenCrearSesion = ref(false);
    const posicionPlan = reactive({
      indexsemana: 0,
      indexdia: 0
    });
    const seleccionarPosicionPlan = (indexSemana, indexDia) => {
      posicionPlan.indexsemana = indexSemana;
      posicionPlan.indexdia = indexDia;
      isOpenCrearSesion.value = true;
    };
    const verSesion = (indexSemana, indexDia) => {
      opcionactual.value = ENOpcionesCru.VER;
      seleccionarPosicionPlan(indexSemana, indexDia);
    };
    const opcionactual = ref(ENOpcionesCru.CREAR);
    const handleBack = () => {
      window.history.back();
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      const _component_VButton = _sfc_main$2;
      const _component_VFlexItem = _sfc_main$3;
      const _component_VFlex = _sfc_main$4;
      const _component_ListWidgetSingle = _sfc_main$5;
      const _component_SesionRutinaGratuita = _sfc_main$6;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            createBaseVNode("p", _hoisted_5, toDisplayString((_a = planGratuito.value) == null ? void 0 : _a.deporte), 1)
          ]),
          _hoisted_6,
          createBaseVNode("div", _hoisted_7, [
            _hoisted_8,
            createBaseVNode("p", _hoisted_9, toDisplayString((_b = planGratuito.value) == null ? void 0 : _b.nombre_plan), 1)
          ]),
          _hoisted_10,
          createBaseVNode("div", _hoisted_11, [
            _hoisted_12,
            createBaseVNode("p", _hoisted_13, toDisplayString((_c = planGratuito.value) == null ? void 0 : _c.descripcion), 1)
          ]),
          _hoisted_14,
          createBaseVNode("div", _hoisted_15, [
            _hoisted_16,
            createBaseVNode("p", _hoisted_17, toDisplayString((_d = planGratuito.value) == null ? void 0 : _d.objetivos), 1)
          ])
        ]),
        createVNode(_component_VFlex, {
          class: "mb-2 pegar",
          "justify-content": "space-between"
        }, {
          default: withCtx(() => [
            createVNode(_component_VFlexItem, null, {
              default: withCtx(() => [
                createVNode(_component_VButton, {
                  color: "warning",
                  rounded: "",
                  raised: "",
                  icon: "fas fa-arrow-circle-left",
                  onClick: handleBack
                }, {
                  default: withCtx(() => [
                    _hoisted_18
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_19, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(planRutinaStore).semanasRutina, (semana, indexSemana) => {
            return openBlock(), createElementBlock("div", {
              key: indexSemana,
              class: "column is-4"
            }, [
              createVNode(_component_ListWidgetSingle, {
                title: "Semana " + (indexSemana + 1),
                class: "list-widget-v3"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(semana, (dia, indexDia) => {
                    return openBlock(), createElementBlock("div", {
                      key: indexDia,
                      class: "icon-timeline"
                    }, [
                      createBaseVNode("div", _hoisted_20, [
                        _hoisted_21,
                        createBaseVNode("div", _hoisted_22, [
                          createBaseVNode("p", null, toDisplayString(unref(diasSemana)[indexDia]), 1),
                          Object.keys(dia).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_23, [
                            createBaseVNode("button", {
                              class: "btn btn-view",
                              onClick: withModifiers(($event) => verSesion(indexSemana, indexDia), ["stop"])
                            }, _hoisted_26, 8, _hoisted_24)
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["title"])
            ]);
          }), 128))
        ]),
        isOpenCrearSesion.value ? (openBlock(), createBlock(_component_SesionRutinaGratuita, {
          key: 0,
          opcionactual: unref(ENOpcionesCru).VER,
          semanaindex: unref(posicionPlan).indexsemana,
          diaindex: unref(posicionPlan).indexdia,
          "is-open": isOpenCrearSesion.value,
          onClose: _cache[0] || (_cache[0] = ($event) => isOpenCrearSesion.value = false),
          onCrearRutina: _ctx.agregarSesion
        }, null, 8, ["opcionactual", "semanaindex", "diaindex", "is-open", "onCrearRutina"])) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3778b704"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Plan gratuito");
    useHead({
      title: "Plan gratuito"
    });
    return (_ctx, _cache) => {
      const _component_PlanGratuitoEntrenador = __unplugin_components_0;
      const _component_SuperentrenadorLayout = _sfc_main$7;
      return openBlock(), createBlock(_component_SuperentrenadorLayout, null, {
        default: withCtx(() => [
          createVNode(_component_PlanGratuitoEntrenador)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
