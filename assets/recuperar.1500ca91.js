import { y as defineComponent, z as ref, U as useDarkmode, r as reactive, a7 as useHead, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, N as withKeys, v as withModifiers, D as unref, q as createVNode, w as withCtx, a4 as createStaticVNode, m as createTextVNode, au as __unplugin_components_0, a3 as _sfc_main$3 } from "./index.695461b3.js";
import { _ as _sfc_main$2 } from "./VField.60664af0.js";
import { _ as __unplugin_components_2 } from "./VControl.fa8e3192.js";
import { _ as _sfc_main$1 } from "./VInput.03d7c4f0.js";
import { _ as _imports_0, a as _imports_1 } from "./vuero-banking-dark.c1ec78c6.js";
import { u as useNotyf } from "./useNotyf.130c1122.js";
import { R as RECUPERARCONTRA } from "./auth.8a49e122.js";
import "./VLabel.1dcb2a03.js";
import "./config.dae7a527.js";
import "./managePictures.8990304c.js";
import "./main.666cbe61.js";
import "./general.c2c525e5.js";
import "./administracion.928e8bf1.js";
const _hoisted_1 = { class: "auth-wrapper-inner columns is-gapless" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner"><div class="hero login-hero is-fullheight is-app-grey"><div class="hero-body"><div class="columns"><div class="column is-10 is-offset-1"><img class="light-image has-light-shadow has-light-border" src="' + _imports_0 + '" alt=""><img class="dark-image has-light-shadow" src="' + _imports_1 + '" alt=""></div></div></div><div class="hero-footer"><p class="has-text-centered"></p></div></div></div>', 1);
const _hoisted_3 = { class: "column is-4" };
const _hoisted_4 = { class: "hero is-fullheight is-white" };
const _hoisted_5 = { class: "hero-heading" };
const _hoisted_6 = ["checked"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_8 = { class: "auth-logo" };
const _hoisted_9 = { class: "hero-body" };
const _hoisted_10 = { class: "container" };
const _hoisted_11 = { class: "columns" };
const _hoisted_12 = { class: "column is-12" };
const _hoisted_13 = { class: "auth-content" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("h2", null, "Recuperar contrase\xF1a", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", null, "Por favor ingresa tu correo para recuperar contrase\xF1a", -1);
const _hoisted_16 = /* @__PURE__ */ createTextVNode(" Ya tengo una cuenta ");
const _hoisted_17 = { class: "auth-form-wrapper" };
const _hoisted_18 = ["onSubmit"];
const _hoisted_19 = { class: "login-form" };
const _hoisted_20 = { class: "login" };
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" Recuerar Contrase\xF1a ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isLoading = ref(false);
    const darkmode = useDarkmode();
    const notif = useNotyf();
    const dataUser = reactive({
      name: "",
      passwd: ""
    });
    const handleLogin = async () => {
      const uid = await RECUPERARCONTRA(dataUser.name);
      console.log(uid);
      notif.success("cambio de contrase\xF1a");
    };
    useHead({
      title: "Auth Recuperar - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VInput = _sfc_main$1;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("label", {
                class: "dark-mode ml-auto",
                tabindex: "0",
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((e) => e.target.click(), ["prevent"]), ["space"]))
              }, [
                createBaseVNode("input", {
                  type: "checkbox",
                  checked: !unref(darkmode).isDark,
                  onChange: _cache[0] || (_cache[0] = (...args) => unref(darkmode).onChange && unref(darkmode).onChange(...args))
                }, null, 40, _hoisted_6),
                _hoisted_7
              ], 32),
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_RouterLink, { to: { name: "index" } }, {
                  default: withCtx(() => [
                    createVNode(_component_AnimatedLogo, {
                      width: "36px",
                      height: "36px"
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      _hoisted_14,
                      _hoisted_15,
                      createVNode(_component_RouterLink, { to: { name: "auth-login" } }, {
                        default: withCtx(() => [
                          _hoisted_16
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("form", {
                        onSubmit: withModifiers(handleLogin, ["prevent"])
                      }, [
                        createBaseVNode("div", _hoisted_19, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VInput, {
                                    modelValue: unref(dataUser).name,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(dataUser).name = $event),
                                    type: "text",
                                    placeholder: "Correo Electronico",
                                    autocomplete: "username"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createBaseVNode("div", _hoisted_20, [
                            createVNode(_component_VButton, {
                              class: "btn-degrade-blue",
                              loading: isLoading.value,
                              color: "primary",
                              type: "submit",
                              bold: "",
                              fullwidth: "",
                              raised: ""
                            }, {
                              default: withCtx(() => [
                                _hoisted_21
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ])
                        ])
                      ], 40, _hoisted_18)
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
export { _sfc_main as default };
