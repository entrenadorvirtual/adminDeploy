import { U as _export_sfc, x as defineComponent, y as ref, a0 as useRouter, r as reactive, b as computed, O as useHead, m as resolveComponent, o as openBlock, g as createElementBlock, i as createBaseVNode, p as createVNode, s as withModifiers, w as withCtx, C as unref, Z as withDirectives, az as vShow, V as pushScopeId, W as popScopeId, l as createTextVNode, N as _sfc_main$5 } from "./index.7277f539.js";
import { _ as _sfc_main$4 } from "./VIcon.3ee9f83c.js";
import { _ as _sfc_main$3 } from "./VField.04329715.js";
import { a as __unplugin_components_0 } from "./VControl.258dc3fc.js";
import { _ as _sfc_main$2 } from "./VInput.1aae7c90.js";
import { _ as _sfc_main$1 } from "./LandingEmptyNavigation.e5a50f5a.js";
import { u as useNotyf } from "./useNotyf.04745937.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { L as LOGIN_USER_PASSWD } from "./auth.c596940b.js";
import { G as GET_DATOS_USUARIO } from "./general.651d3f13.js";
import "./AnimatedLogo.ace36e31.js";
import "./useThemeColors.2a03c1d8.js";
import "./config.28ac5e58.js";
import "./managePictures.f82dee2f.js";
import "./main.a2946418.js";
import "./administracion.eab5d817.js";
var login_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-80732748"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "landing-page-wrapper" };
const _hoisted_2 = { class: "hero is-fullheight is-white fondo-login" };
const _hoisted_3 = { class: "hero-body" };
const _hoisted_4 = { class: "container" };
const _hoisted_5 = { class: "columns" };
const _hoisted_6 = {
  class: "column is-12",
  style: { "padding-top": "70px" }
};
const _hoisted_7 = { class: "auth-form-wrapper form-login" };
const _hoisted_8 = ["onSubmit"];
const _hoisted_9 = { class: "login-form" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "auth-content" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "titulo-inicio-sesion" }, "Iniciar Sesi\xF3n"),
  /* @__PURE__ */ createBaseVNode("h2", { style: { "font-size": "2rem", "font-weight": "bold", "color": "var(--primary)" } }, " My Virtual Trainer ")
], -1));
const _hoisted_11 = { class: "contenedorInputs" };
const _hoisted_12 = { style: { "position": "absolute", "right": "0", "margin-right": "15px", "top": "50%", "transform": "translateY(-50%)", "color": "var(--primary-grey)" } };
const _hoisted_13 = { class: "login" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Iniciar Sesi\xF3n ");
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "forgot-link has-text-centered link-padding" }, [
  /* @__PURE__ */ createTextVNode(" \xBFOlvid\xF3 su contrase\xF1a? "),
  /* @__PURE__ */ createBaseVNode("a", { class: "subrayar" }, "Recuperar Contrase\xF1a")
], -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isLoading = ref(false);
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
      var _a;
      try {
        const uid = await LOGIN_USER_PASSWD(dataUser.name, dataUser.passwd);
        if (!isLoading.value) {
          isLoading.value = true;
          await sleep(1500);
          notif.dismissAll();
          if (uid) {
            const datosUsuario = await GET_DATOS_USUARIO(uid);
            switch ((_a = datosUsuario == null ? void 0 : datosUsuario.datosUsuario) == null ? void 0 : _a.rol) {
              case "Admin":
                router.push("/administrador");
                notif.success("Bienvenido: " + datosUsuario.datosUsuario.rol);
                break;
              case "superentrenador":
                router.push("/superentrenador");
                notif.success("Bienvenido: " + datosUsuario.datosUsuario.rol);
                break;
              default:
                notif.error("Tus datos est\xE1n incorrectos");
            }
          } else {
            notif.error("Error usuario o contrase\xF1a incorrectos");
          }
          isLoading.value = false;
        }
      } catch (error) {
        console.error("Error en login:", error);
        isLoading.value = false;
      }
    };
    useHead({
      title: "My Virtual Trainer"
    });
    return (_ctx, _cache) => {
      const _component_LandingEmptyNavigation = _sfc_main$1;
      const _component_VInput = _sfc_main$2;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$3;
      const _component_VIcon = _sfc_main$4;
      const _component_VButton = _sfc_main$5;
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
                        createBaseVNode("div", _hoisted_11, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VInput, {
                                    modelValue: unref(dataUser).name,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(dataUser).name = $event),
                                    type: "text",
                                    placeholder: "Correo Electr\xF3nico",
                                    autocomplete: "username",
                                    class: "input-gray"
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
                                  createVNode(_component_VInput, {
                                    modelValue: unref(dataUser).passwd,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(dataUser).passwd = $event),
                                    type: showPassword.value ? "text" : "password",
                                    placeholder: "Contrase\xF1a",
                                    autocomplete: "current-password",
                                    class: "input-gray"
                                  }, null, 8, ["modelValue", "type"]),
                                  createBaseVNode("div", _hoisted_12, [
                                    withDirectives(createVNode(_component_VIcon, {
                                      icon: "feather:eye",
                                      onClick: _cache[2] || (_cache[2] = ($event) => showPassword.value = !showPassword.value)
                                    }, null, 512), [
                                      [vShow, !showPassword.value]
                                    ]),
                                    withDirectives(createVNode(_component_VIcon, {
                                      icon: "feather:eye-off",
                                      onClick: _cache[3] || (_cache[3] = ($event) => showPassword.value = !showPassword.value)
                                    }, null, 512), [
                                      [vShow, showPassword.value]
                                    ])
                                  ])
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
                            disabled: !unref(validarSesion),
                            color: "primary",
                            type: "submit",
                            bold: "",
                            fullwidth: "",
                            raised: "",
                            class: "button-inicio-sesion"
                          }, {
                            default: withCtx(() => [
                              _hoisted_14
                            ]),
                            _: 1
                          }, 8, ["loading", "disabled"])
                        ]),
                        createVNode(_component_RouterLink, { to: { name: "auth-recuperar" } }, {
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
var login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80732748"]]);
export { login as default };
