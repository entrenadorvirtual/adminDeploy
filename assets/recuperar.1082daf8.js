import { U as _export_sfc, x as defineComponent, y as ref, r as reactive, O as useHead, m as resolveComponent, o as openBlock, g as createElementBlock, i as createBaseVNode, p as createVNode, s as withModifiers, w as withCtx, C as unref, V as pushScopeId, W as popScopeId, l as createTextVNode, N as _sfc_main$4 } from "./index.5859d3e2.js";
import { _ as _sfc_main$3 } from "./VField.92bd822f.js";
import { a as __unplugin_components_0 } from "./VControl.f0eb3b3c.js";
import { _ as _sfc_main$2 } from "./VInput.5b7bc738.js";
import { _ as _sfc_main$1 } from "./LandingEmptyNavigation.12b74c9d.js";
import { u as useNotyf } from "./useNotyf.2ce0502b.js";
import { R as RECUPERARCONTRA } from "./auth.2ddaf9c5.js";
import "./AnimatedLogo.287e5008.js";
import "./useThemeColors.c1c0138a.js";
import "./config.28ac5e58.js";
import "./managePictures.7fa869bc.js";
import "./main.a2946418.js";
import "./general.651d3f13.js";
import "./administracion.aabf7eb6.js";
var recuperar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-46275e0a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "landing-page-wrapper" };
const _hoisted_2 = { class: "hero is-fullheight is-white fondo-login" };
const _hoisted_3 = { class: "hero-body" };
const _hoisted_4 = { class: "container" };
const _hoisted_5 = { class: "columns" };
const _hoisted_6 = { class: "column is-12" };
const _hoisted_7 = { class: "auth-form-wrapper form-login" };
const _hoisted_8 = ["onSubmit"];
const _hoisted_9 = { class: "login-form" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "titulo-recuperar" }, "Recuperar Contrase\xF1a", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "titulo-mvt" }, "My Virtual Trainer", -1));
const _hoisted_12 = { class: "contenedorInputs" };
const _hoisted_13 = { class: "login" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" Recuperar Contrase\xF1a ");
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "forgot-link has-text-centered link-padding" }, [
  /* @__PURE__ */ createTextVNode(" \xBFYa tienes cuenta? "),
  /* @__PURE__ */ createBaseVNode("a", { class: "subrayar" }, "Ingresar")
], -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isLoading = ref(false);
    const notif = useNotyf();
    const dataUser = reactive({
      name: "",
      passwd: ""
    });
    const handleLogin = async () => {
      if (!dataUser.name || !dataUser.name.includes("@")) {
        notif.error("Ingresa un correo v\xE1lido");
        return;
      }
      isLoading.value = true;
      const success = await RECUPERARCONTRA(dataUser.name);
      if (success) {
        notif.success("Correo enviado para recuperar contrase\xF1a");
        window.location.href = "/auth/login";
      } else {
        notif.error("No se pudo enviar el correo. Verifica el email");
      }
      isLoading.value = false;
    };
    useHead({
      title: "Auth Recuperar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_LandingEmptyNavigation = _sfc_main$1;
      const _component_VInput = _sfc_main$2;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_LandingEmptyNavigation),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("form", {
                      onSubmit: withModifiers(handleLogin, ["prevent"])
                    }, [
                      createBaseVNode("div", _hoisted_9, [
                        _hoisted_10,
                        _hoisted_11,
                        createBaseVNode("div", _hoisted_12, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VInput, {
                                    modelValue: unref(dataUser).name,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(dataUser).name = $event),
                                    type: "text",
                                    placeholder: "Correo Electronico",
                                    autocomplete: "username",
                                    class: "input-gray"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_13, [
                          createVNode(_component_VButton, {
                            loading: isLoading.value,
                            color: "primary",
                            type: "submit",
                            bold: "",
                            fullwidth: "",
                            raised: "",
                            class: "button-recuperar-sesion"
                          }, {
                            default: withCtx(() => [
                              _hoisted_14
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ]),
                        createVNode(_component_RouterLink, { to: { name: "auth-login" } }, {
                          default: withCtx(() => [
                            _hoisted_15
                          ]),
                          _: 1
                        })
                      ])
                    ], 40, _hoisted_8)
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
var recuperar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46275e0a"]]);
export { recuperar as default };
