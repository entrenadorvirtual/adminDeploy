import { y as defineComponent, z as ref, Y as useDarkmode, a1 as useRouter, r as reactive, e as computed, P as useHead, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, Q as withKeys, v as withModifiers, D as unref, q as createVNode, w as withCtx, $ as withDirectives, aA as vShow, a2 as createStaticVNode, m as createTextVNode, aB as __unplugin_components_0, O as _sfc_main$4 } from "./index.5c29604d.js";
import { _ as _sfc_main$3 } from "./VIcon.f1c6decb.js";
import { _ as _sfc_main$2 } from "./VField.f8c867a3.js";
import { a as __unplugin_components_0$1 } from "./VControl.383acded.js";
import { _ as _sfc_main$1 } from "./VInput.d6498d97.js";
import { _ as _imports_0 } from "./vuero-banking-light.de60c169.js";
import { u as useNotyf } from "./useNotyf.e3af1d9e.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { L as LOGIN_USER_PASSWD } from "./auth.0c605584.js";
import { G as GET_DATOS_USUARIO } from "./general.505a96f7.js";
import "./useThemeColors.37241be5.js";
import "./config.f3c9bc1b.js";
import "./managePictures.8e526007.js";
import "./main.1a95f887.js";
import "./administracion.3c1ed90f.js";
const _hoisted_1 = { class: "auth-wrapper-inner columns is-gapless" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner"><div class="hero login-hero is-fullheight is-app-grey"><div class="hero-body"><div class="columns"><div class="column is-10 is-offset-1"><img class="light-image has-light-shadow has-light-border" src="' + _imports_0 + '" alt=""><img class="dark-image has-light-shadow" src="' + _imports_0 + '" alt=""></div></div></div><div class="hero-footer"><p class="has-text-centered"></p></div></div></div>', 1);
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
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-content" }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "Bienvenido de vuelta"),
  /* @__PURE__ */ createBaseVNode("p", null, "Por favor ingresa tus datos para iniciar sesi\xF3n")
], -1);
const _hoisted_14 = { class: "auth-form-wrapper" };
const _hoisted_15 = ["onSubmit"];
const _hoisted_16 = { class: "login-form" };
const _hoisted_17 = { style: { "display": "flex", "align-items": "center", "position": "relative" } };
const _hoisted_18 = { style: { "position": "absolute", "right": "0", "margin-right": "15px", "top": "50%", "transform": "translateY(-50%)" } };
const _hoisted_19 = { class: "login" };
const _hoisted_20 = /* @__PURE__ */ createTextVNode(" Iniciar Sesi\xF3n ");
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "forgot-link has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("a", null, "Recuperar Contrase\xF1a?")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isLoading = ref(false);
    const darkmode = useDarkmode();
    const router = useRouter();
    const notif = useNotyf();
    const dataUser = reactive({
      name: "",
      passwd: ""
    });
    const showPassword = ref(false);
    const validarSesion = computed(() => {
      if (dataUser.name.length < 1 || dataUser.passwd.length < 6) {
        return false;
      }
      return true;
    });
    const handleLogin = async () => {
      const uid = await LOGIN_USER_PASSWD(dataUser.name, dataUser.passwd);
      if (!isLoading.value) {
        isLoading.value = true;
        await sleep(1500);
        if (uid) {
          notif.dismissAll();
          const datosUsuraio = await GET_DATOS_USUARIO(uid);
          if (datosUsuraio.datosUsuario.rol === "Admin") {
            router.push("/administrador");
            notif.success("Bienvenido: " + datosUsuraio.datosUsuario.rol);
          } else if (datosUsuraio.datosUsuario.rol === "superentrenador") {
            router.push("/superentrenador");
            notif.success("Bienvenido: " + datosUsuraio.datosUsuario.rol);
          } else {
            notif.error("Tus datos estan incorrectos");
          }
        } else {
          notif.dismissAll();
          notif.error("Error usuario o contrase\xF1a incorrectos");
        }
        isLoading.value = false;
      }
    };
    useHead({
      title: "Auth Login - Vuero"
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VInput = _sfc_main$1;
      const _component_VControl = __unplugin_components_0$1;
      const _component_VField = _sfc_main$2;
      const _component_VIcon = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
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
                    _hoisted_13,
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("form", {
                        onSubmit: withModifiers(handleLogin, ["prevent"])
                      }, [
                        createBaseVNode("div", _hoisted_16, [
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
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:lock" }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_17, [
                                    createVNode(_component_VInput, {
                                      modelValue: unref(dataUser).passwd,
                                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(dataUser).passwd = $event),
                                      type: showPassword.value ? "text" : "password",
                                      placeholder: "Contrase\xF1a",
                                      autocomplete: "current-password"
                                    }, null, 8, ["modelValue", "type"]),
                                    createBaseVNode("div", _hoisted_18, [
                                      withDirectives(createVNode(_component_VIcon, {
                                        icon: "feather:eye",
                                        onClick: _cache[4] || (_cache[4] = ($event) => showPassword.value = !showPassword.value)
                                      }, null, 512), [
                                        [vShow, !showPassword.value]
                                      ]),
                                      withDirectives(createVNode(_component_VIcon, {
                                        icon: "feather:eye-off",
                                        onClick: _cache[5] || (_cache[5] = ($event) => showPassword.value = !showPassword.value)
                                      }, null, 512), [
                                        [vShow, showPassword.value]
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createBaseVNode("div", _hoisted_19, [
                            createVNode(_component_VButton, {
                              class: "btn-degrade-blue",
                              loading: isLoading.value,
                              disabled: !unref(validarSesion),
                              color: "primary",
                              type: "submit",
                              bold: "",
                              fullwidth: "",
                              raised: ""
                            }, {
                              default: withCtx(() => [
                                _hoisted_20
                              ]),
                              _: 1
                            }, 8, ["loading", "disabled"])
                          ]),
                          createVNode(_component_RouterLink, { to: { name: "auth-recuperar" } }, {
                            default: withCtx(() => [
                              _hoisted_21
                            ]),
                            _: 1
                          })
                        ])
                      ], 40, _hoisted_15)
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
