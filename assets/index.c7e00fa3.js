import { _ as _sfc_main$4 } from "./EditProfileEntrenadorDeporte.13efca1e.js";
import { _ as _sfc_main$3 } from "./EditProfileGeneralEntrenador.9b687d34.js";
import { y as defineComponent, a as useUserSession, z as ref, a6 as useHead, A as onMounted, p as resolveComponent, D as unref, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, T as Transition, l as createCommentVNode, m as createTextVNode, a2 as _sfc_main$1, at as _sfc_main$2 } from "./index.5117c21f.js";
import { A as ACTUALIZAR_PASO_BIENVENIDA } from "./entrenador.d17c2b16.js";
import "./VField.950615c2.js";
import "./VLabel.a843cb32.js";
import "./VControl.a2f9c194.js";
import "./VInput.fe703cdc.js";
import "./useNotyf.b24c5081.js";
import "./sleep.2a252ff4.js";
import "./vee-validate-zod.esm.7ee806d4.js";
import "./VTextarea.45723369.js";
import "./VOption.f0d0ae2d.js";
import "./VAvatar.87605638.js";
import "./fechas.a424fa09.js";
import "./managePictures.4bc644f4.js";
import "./config.fc5b324a.js";
import "./main.3bd39e21.js";
import "./general.744b7fff.js";
import "./administracion.4cb4eff8.js";
import "./deportista.bf78c6af.js";
const _hoisted_1 = {
  key: 0,
  class: "page-content-inner"
};
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-12" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Datos personales ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Datos Deporte ");
const _hoisted_7 = {
  key: 0,
  class: "account-wrapper"
};
const _hoisted_8 = { class: "columns" };
const _hoisted_9 = { class: "column is-12" };
const _hoisted_10 = {
  key: 1,
  class: "account-wrapper"
};
const _hoisted_11 = { class: "columns" };
const _hoisted_12 = { class: "column is-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    const estadoBienvenida = ref(1);
    useHead({
      title: "Main Dashboard - My app"
    });
    const ActualizarBienvenida = async (paso) => {
      estadoBienvenida.value = paso;
      await ACTUALIZAR_PASO_BIENVENIDA(userSession.userId, paso);
    };
    onMounted(() => {
      var _a;
      estadoBienvenida.value = (_a = userSession.userData) == null ? void 0 : _a.pasoBienvenida;
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_VButton = _sfc_main$1;
      const _component_VButtons = _sfc_main$2;
      const _component_EditProfileGeneralEntrenador = _sfc_main$3;
      const _component_RouterView = resolveComponent("RouterView");
      const _component_EditProfileEntrenadorDeporte = _sfc_main$4;
      return ((_a = unref(userSession).userData) == null ? void 0 : _a.pasoBienvenida) !== 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VButtons, null, {
                default: withCtx(() => [
                  createVNode(_component_VButton, {
                    disabled: estadoBienvenida.value > 1,
                    color: "info"
                  }, {
                    default: withCtx(() => [
                      _hoisted_5
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(_component_VButton, {
                    disabled: estadoBienvenida.value > 2,
                    color: "info"
                  }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ])
          ])
        ]),
        estadoBienvenida.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_RouterView, null, {
                default: withCtx(() => [
                  createVNode(Transition, {
                    name: "translate-page-y",
                    mode: "in-out"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_EditProfileGeneralEntrenador, {
                        onUpdated: _cache[0] || (_cache[0] = ($event) => ActualizarBienvenida(2))
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ])) : createCommentVNode("", true),
        estadoBienvenida.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createVNode(_component_RouterView, null, {
                default: withCtx(() => [
                  createVNode(Transition, {
                    name: "translate-page-y",
                    mode: "in-out"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_EditProfileEntrenadorDeporte, {
                        onUpdated: _cache[1] || (_cache[1] = ($event) => ActualizarBienvenida(0))
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
