import { _ as _sfc_main$j } from "./VPlaceholderPage.85847fc7.js";
import { y as defineComponent, o as openBlock, i as createElementBlock, k as normalizeClass, j as createBaseVNode, l as createCommentVNode, g as renderSlot, a as useUserSession, z as ref, r as reactive, am as onBeforeMount, p as resolveComponent, q as createVNode, w as withCtx, f as createBlock, t as toDisplayString, D as unref, P as resolveDynamicComponent, F as Fragment, Z as createStaticVNode, Y as _sfc_main$8, aq as useWindowScroll, e as computed, A as onMounted, M as withKeys, v as withModifiers, m as createTextVNode, ar as resolveDirective, a1 as withDirectives, x as mergeProps, as as toHandlers, s as renderList, C as watch, at as withAsyncContext, a5 as useHead, T as Transition, au as _sfc_main$g } from "./index.3437b938.js";
import { g as getDatosDeportista, u as updateSemicooper, a as getSemicooper, b as getDeportes, c as updateDeportes, d as updateMorfologia, e as getMorfologiaDeportista, f as updateDatosDeportista, h as getPaises, i as getCiudades, j as getEstadoBienvenida, k as updateBienvenida } from "./deportista.87466242.js";
import { g as getPlanesR } from "./epayco.49f83933.js";
import { _ as _sfc_main$b } from "./VField.40eec146.js";
import { _ as __unplugin_components_2 } from "./VControl.c459fb91.js";
import { _ as _sfc_main$a } from "./VInput.bb7a011d.js";
import { a as useForm, _ as _sfc_main$9 } from "./VLabel.c9d776c3.js";
import { u as useNotyf } from "./useNotyf.c1050c77.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { t as toFormValidator, m as mod } from "./index.1fbd2b5e.js";
import { _ as _sfc_main$i } from "./Entrenadores.10740fe5.js";
import { _ as _sfc_main$h } from "./Objetivos.2a5550ad.js";
import { _ as _sfc_main$d } from "./VIconButton.e1b652a9.js";
import { _ as _sfc_main$c } from "./VCheckbox.e12df09a.js";
import { _ as _sfc_main$f } from "./VModal.9b3adbf3.js";
import { _ as _sfc_main$e } from "./VAvatar.ca051eb6.js";
import { a as addPicture, p as preview } from "./managePictures.7b2a6d60.js";
import { e as onValue, r as ref$1, d as database } from "./config.165bca36.js";
import { I as ID_AUTH_USER } from "./auth.e72f18a6.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
import "./general.34b73030.js";
import "./main.06195782.js";
import "./ModalCancelar.c90469ca.js";
import "./match.bfe04cd6.js";
import "./VTag.ebab94b4.js";
import "./entrenador.ed7eb998.js";
import "./VSwitchBlock.d96bab1b.js";
import "./VTextarea.8694b362.js";
var VLoader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    size: { default: void 0 },
    card: { default: void 0 },
    active: { type: Boolean },
    grey: { type: Boolean },
    translucent: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["has-loader", [props.active && "has-loader-active"]])
      }, [
        props.active ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["v-loader-wrapper is-active", [
            __props.grey && "is-grey",
            __props.translucent && "is-translucent",
            __props.card === "regular" && "s-card",
            __props.card === "smooth" && "r-card",
            __props.card === "rounded" && "l-card"
          ]])
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["loader is-loading", [props.size && `is-${props.size}`]])
          }, null, 2)
        ], 2)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var valorPlanes = /* @__PURE__ */ ((valorPlanes2) => {
  valorPlanes2[valorPlanes2["PLATA"] = 1e4] = "PLATA";
  valorPlanes2[valorPlanes2["ORO"] = 10500] = "ORO";
  valorPlanes2[valorPlanes2["PLATINO"] = 11e3] = "PLATINO";
  valorPlanes2[valorPlanes2["DIAMANTE"] = 11500] = "DIAMANTE";
  return valorPlanes2;
})(valorPlanes || {});
var Planes_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$6 = { class: "columns is-multiline" };
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-2" }, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("label", null, "Plan Bronce", -1);
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_5$5 = /* @__PURE__ */ createBaseVNode("label", null, "Gratis", -1);
const _hoisted_6$5 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_7$5 = { key: 0 };
const _hoisted_8$5 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_9$5 = { key: 2 };
const _hoisted_10$5 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_11$5 = { key: 4 };
const _hoisted_12$5 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_13$5 = { key: 6 };
const _hoisted_14$5 = /* @__PURE__ */ createStaticVNode('<hr><div class="columns is-mobile"><div class="column is-2">Uso</div><div class="column is-2">Limitado</div><div class="column is-2">Ilimitado</div><div class="column is-2">Ilimitado</div><div class="column is-2">Ilimitado</div><div class="column is-2">Ilimitado</div></div><hr><div class="columns is-mobile"><div class="column is-2">Rutina</div><div class="column is-2">Preestablecida</div><div class="column is-2">Entrenador Profesional</div><div class="column is-2">Entrenador Profesional</div><div class="column is-2">Entrenador Profesional</div><div class="column is-2">Entrenador Profesional</div></div><hr><div class="columns is-mobile"><div class="column is-2">Entrenadores</div><div class="column is-2">X</div><div class="column is-2">SI</div><div class="column is-2">SI</div><div class="column is-2">SI</div><div class="column is-2">SI</div></div><hr><div class="columns is-mobile"><div class="column is-2">Analisis de Datos</div><div class="column is-2">X</div><div class="column is-2">SI</div><div class="column is-2">SI</div><div class="column is-2">SI</div><div class="column is-2">SI</div></div><hr><div class="columns is-mobile"><div class="column is-2">Analisis Tecnico</div><div class="column is-2">X</div><div class="column is-2">SI</div><div class="column is-2">SI</div><div class="column is-2">SI</div><div class="column is-2">SI</div></div><hr><div class="columns is-mobile"><div class="column is-2">Chat con entrenador</div><div class="column is-2">X</div><div class="column is-2">1000 caracteres al mes</div><div class="column is-2">3000 caracteres al mes</div><div class="column is-2">10000 caracteres al mes</div><div class="column is-2">Ilimitado</div></div><hr><div class="columns is-mobile"><div class="column is-2">Audios con entrenador</div><div class="column is-2">X</div><div class="column is-2">X</div><div class="column is-2">5 minutos al mes</div><div class="column is-2">10 minutos al mes</div><div class="column is-2">30 minutos al mes</div></div><hr><div class="columns is-mobile"><div class="column is-2">Encuesta</div><div class="column is-2">X</div><div class="column is-2">SI</div><div class="column is-2">SI</div><div class="column is-2">SI</div><div class="column is-2">SI</div></div><hr><div class="columns is-mobile"><div class="column is-2">Analisis</div><div class="column is-2">X</div><div class="column is-2">SI</div><div class="column is-2">SI</div><div class="column is-2">SI</div><div class="column is-2">SI</div></div><hr><div class="columns is-mobile"><div class="column is-2">Objetivos</div><div class="column is-2">X</div><div class="column is-2">Basico</div><div class="column is-2">Avanzado</div><div class="column is-2">Completo</div><div class="column is-2">Completo</div></div><hr><div class="columns is-mobile"><div class="column is-2">LLamada con entrendor</div><div class="column is-2">X</div><div class="column is-2">X</div><div class="column is-2">X</div><div class="column is-2">X</div><div class="column is-2">SI</div></div><hr><div class="columns is-mobile"><div class="column is-2">Alianzas comercias, deportivas, productos o servicios</div><div class="column is-2">X</div><div class="column is-2">X</div><div class="column is-2">Limitadas</div><div class="column is-2">Varias</div><div class="column is-2">Completas</div></div><hr><div class="columns is-mobile"><div class="column is-2">Referidos</div><div class="column is-2">X</div><div class="column is-2">X</div><div class="column is-2">1 Nivel</div><div class="column is-2">2 Niveles</div><div class="column is-2">3 Niveles</div></div><hr><div class="columns is-mobile"><div class="column is-2">Videos</div><div class="column is-2">X</div><div class="column is-2">X</div><div class="column is-2">3 Minutos</div><div class="column is-2">5 Minutos</div><div class="column is-2">10 Minutos</div></div><hr><div class="columns is-mobile"><div class="column is-2">Garantia</div><div class="column is-2">X</div><div class="column is-2">5 Dias</div><div class="column is-2">5 Dias</div><div class="column is-2">10 Dias</div><div class="column is-2">10 Dias</div></div><hr><div class="columns is-mobile"><div class="column is-2">Congelaci\xF3n</div><div class="column is-2">X</div><div class="column is-2">10 dias cada 12 meses</div><div class="column is-2">10 dias cada 10 meses</div><div class="column is-2">15 dias cada 8 meses</div><div class="column is-2">20 dias cada 8 meses</div></div><hr>', 33);
const _hoisted_47$3 = { class: "columns is-multiline" };
const _hoisted_48$3 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-2" }, null, -1);
const _hoisted_49$3 = /* @__PURE__ */ createBaseVNode("label", null, "Plan Bronce", -1);
const _hoisted_50$3 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_51$3 = /* @__PURE__ */ createBaseVNode("label", null, "Gratis", -1);
const _hoisted_52$3 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_53$3 = { key: 1 };
const _hoisted_54$2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_55$2 = { key: 3 };
const _hoisted_56$2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_57$2 = { key: 5 };
const _hoisted_58$2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_59$2 = { key: 7 };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const planesDisponibles = ref([]);
    const isLoaderActive = ref(false);
    const url = "https://entrenador-virtual.web.app/deportista/pago";
    const ePaycoKey = "0a895c39bd4d26d5ef91306494780eb1";
    const estadoTest = {}.VITE_APP_EPAYCO_STATE;
    const datosDeportista = ref({
      nombres: "",
      apellidos: "",
      email: "",
      descripcion: "",
      nameUser: "",
      identificacion: "",
      fecha_nacimiento: "",
      fecha_registro: "",
      telefono: "",
      genero: "",
      ciudad: "",
      pais: "",
      pictureName: ""
    });
    const planesData = reactive({
      plata: {
        id: "",
        nombre: "",
        valor: 0
      },
      oro: {
        id: "",
        nombre: "",
        valor: 0
      },
      platino: {
        id: "",
        nombre: "",
        valor: 0
      },
      diamante: {
        id: "",
        nombre: "",
        valor: 0
      }
    });
    const selectBronce = async () => {
      emit("update");
    };
    onBeforeMount(async () => {
      datosDeportista.value = await getDatosDeportista(userSession.userId);
      planesDisponibles.value = await getPlanesR();
      planesDisponibles.value.forEach((plan) => {
        switch (plan.id_plan) {
          case "PlanPlata":
            planesData.plata.id = plan.id_plan;
            planesData.plata.valor = plan.amount + " COP";
            planesData.plata.nombre = plan.description;
            break;
          case "PlanOro":
            planesData.oro.id = plan.id_plan;
            planesData.oro.nombre = plan.description;
            planesData.oro.valor = plan.amount + " COP";
            break;
          case "PlanPlatino":
            planesData.platino.id = plan.id_plan;
            planesData.platino.nombre = plan.description;
            planesData.platino.valor = plan.amount + " COP";
            break;
          case "PlanDiamante":
            planesData.diamante.id = plan.id_plan;
            planesData.diamante.nombre = plan.description;
            planesData.diamante.valor = plan.amount + " COP";
            break;
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$8;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VLoader = _sfc_main$7;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$6, [
          _hoisted_2$5,
          createVNode(_component_RouterLink, {
            to: { name: "deportista-profile-profile-view" },
            class: "column is-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                raised: "",
                onClick: selectBronce
              }, {
                default: withCtx(() => [
                  _hoisted_3$5,
                  _hoisted_4$5,
                  _hoisted_5$5
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_RouterLink, {
            key: 0,
            to: {
              name: "deportista-Subscribe-planS",
              params: {
                planS: JSON.stringify({
                  plan: unref(planesData).plata,
                  cliente: datosDeportista.value
                })
              }
            },
            class: "column is-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                raised: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("label", null, toDisplayString(unref(planesData).plata.nombre), 1),
                  _hoisted_6$5,
                  createBaseVNode("label", null, toDisplayString(unref(planesData).plata.valor), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          createVNode(_component_VLoader, {
            size: "large",
            active: isLoaderActive.value
          }, {
            default: withCtx(() => [
              !datosDeportista.value.pagoRecurrente ? (openBlock(), createElementBlock("form", _hoisted_7$5, [
                (openBlock(), createBlock(resolveDynamicComponent("script"), {
                  type: "application/javascript",
                  src: "https://checkout.epayco.co/checkout.js",
                  "data-epayco-key": unref(ePaycoKey),
                  class: "epayco-button",
                  "data-epayco-amount": unref(valorPlanes).PLATA,
                  "data-epayco-tax": "0.00",
                  "data-epayco-tax-ico": "0.00",
                  "data-epayco-tax-base": unref(valorPlanes).PLATA,
                  "data-epayco-name": "Plan Plata",
                  "data-epayco-description": "Plan Plata",
                  "data-epayco-currency": "cop",
                  "data-epayco-country": "CO",
                  "data-epayco-test": unref(estadoTest),
                  "data-epayco-external": "false",
                  "data-epayco-response": unref(url),
                  "data-epayco-confirmation": "",
                  "data-epayco-button": "https://multimedia.epayco.co/dashboard/btns/btn1.png"
                }, null, 8, ["data-epayco-key", "data-epayco-amount", "data-epayco-tax-base", "data-epayco-test", "data-epayco-response"]))
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["active"]),
          datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_RouterLink, {
            key: 1,
            to: {
              name: "deportista-Subscribe-planS",
              params: {
                planS: JSON.stringify({
                  plan: unref(planesData).oro,
                  cliente: datosDeportista.value
                })
              }
            },
            class: "column is-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                raised: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("label", null, toDisplayString(unref(planesData).oro.nombre), 1),
                  _hoisted_8$5,
                  createBaseVNode("label", null, toDisplayString(unref(planesData).oro.valor), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          !datosDeportista.value.pagoRecurrente ? (openBlock(), createElementBlock("form", _hoisted_9$5, [
            (openBlock(), createBlock(resolveDynamicComponent("script"), {
              type: "application/javascript",
              src: "https://checkout.epayco.co/checkout.js",
              "data-epayco-key": unref(ePaycoKey),
              class: "epayco-button",
              "data-epayco-amount": unref(valorPlanes).ORO,
              "data-epayco-tax": "0.00",
              "data-epayco-tax-ico": "0.00",
              "data-epayco-tax-base": unref(valorPlanes).ORO,
              "data-epayco-name": "Plan Oro",
              "data-epayco-description": "Plan Oro",
              "data-epayco-currency": "cop",
              "data-epayco-country": "CO",
              "data-epayco-test": unref(estadoTest),
              "data-epayco-external": "false",
              "data-epayco-response": unref(url),
              "data-epayco-confirmation": "",
              "data-epayco-button": "https://multimedia.epayco.co/dashboard/btns/btn1.png"
            }, null, 8, ["data-epayco-key", "data-epayco-amount", "data-epayco-tax-base", "data-epayco-test", "data-epayco-response"]))
          ])) : createCommentVNode("", true),
          datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_RouterLink, {
            key: 3,
            to: {
              name: "deportista-Subscribe-planS",
              params: {
                planS: JSON.stringify({
                  plan: unref(planesData).platino,
                  cliente: datosDeportista.value
                })
              }
            },
            class: "column is-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                raised: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("label", null, toDisplayString(unref(planesData).platino.nombre), 1),
                  _hoisted_10$5,
                  createBaseVNode("label", null, toDisplayString(unref(planesData).platino.valor), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          !datosDeportista.value.pagoRecurrente ? (openBlock(), createElementBlock("form", _hoisted_11$5, [
            (openBlock(), createBlock(resolveDynamicComponent("script"), {
              type: "application/javascript",
              src: "https://checkout.epayco.co/checkout.js",
              "data-epayco-key": unref(ePaycoKey),
              class: "epayco-button",
              "data-epayco-amount": unref(valorPlanes).PLATINO,
              "data-epayco-tax": "0.00",
              "data-epayco-tax-ico": "0.00",
              "data-epayco-tax-base": unref(valorPlanes).PLATINO,
              "data-epayco-name": "Plan Platino",
              "data-epayco-description": "Plan Platino",
              "data-epayco-currency": "cop",
              "data-epayco-country": "CO",
              "data-epayco-test": unref(estadoTest),
              "data-epayco-external": "false",
              "data-epayco-response": unref(url),
              "data-epayco-confirmation": "",
              "data-epayco-button": "https://multimedia.epayco.co/dashboard/btns/btn1.png"
            }, null, 8, ["data-epayco-key", "data-epayco-amount", "data-epayco-tax-base", "data-epayco-test", "data-epayco-response"]))
          ])) : createCommentVNode("", true),
          datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_RouterLink, {
            key: 5,
            to: {
              name: "deportista-Subscribe-planS",
              params: {
                planS: JSON.stringify({
                  plan: unref(planesData).diamante,
                  cliente: datosDeportista.value
                })
              }
            },
            class: "column is-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                raised: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("label", null, toDisplayString(unref(planesData).diamante.nombre), 1),
                  _hoisted_12$5,
                  createBaseVNode("label", null, toDisplayString(unref(planesData).diamante.valor), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          !datosDeportista.value.pagoRecurrente ? (openBlock(), createElementBlock("form", _hoisted_13$5, [
            (openBlock(), createBlock(resolveDynamicComponent("script"), {
              type: "application/javascript",
              src: "https://checkout.epayco.co/checkout.js",
              "data-epayco-key": unref(ePaycoKey),
              class: "epayco-button",
              "data-epayco-amount": unref(valorPlanes).DIAMANTE,
              "data-epayco-tax": "0.00",
              "data-epayco-tax-ico": "0.00",
              "data-epayco-tax-base": unref(valorPlanes).DIAMANTE,
              "data-epayco-name": "Plan Diamante",
              "data-epayco-description": "Plan Diamante",
              "data-epayco-currency": "cop",
              "data-epayco-country": "CO",
              "data-epayco-test": unref(estadoTest),
              "data-epayco-external": "false",
              "data-epayco-response": unref(url),
              "data-epayco-confirmation": "",
              "data-epayco-button": "https://multimedia.epayco.co/dashboard/btns/btn1.png"
            }, null, 8, ["data-epayco-key", "data-epayco-amount", "data-epayco-tax-base", "data-epayco-test", "data-epayco-response"]))
          ])) : createCommentVNode("", true)
        ]),
        _hoisted_14$5,
        createBaseVNode("div", _hoisted_47$3, [
          _hoisted_48$3,
          createVNode(_component_RouterLink, {
            to: { name: "deportista-profile-profile-view" },
            class: "column is-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                raised: "",
                onClick: selectBronce
              }, {
                default: withCtx(() => [
                  _hoisted_49$3,
                  _hoisted_50$3,
                  _hoisted_51$3
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_RouterLink, {
            key: 0,
            to: {
              name: "deportista-Subscribe-planS",
              params: {
                planS: JSON.stringify({
                  plan: unref(planesData).plata,
                  cliente: datosDeportista.value
                })
              }
            },
            class: "column is-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                raised: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("label", null, toDisplayString(unref(planesData).plata.nombre), 1),
                  _hoisted_52$3,
                  createBaseVNode("label", null, toDisplayString(unref(planesData).plata.valor), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          !datosDeportista.value.pagoRecurrente ? (openBlock(), createElementBlock("form", _hoisted_53$3, [
            (openBlock(), createBlock(resolveDynamicComponent("script"), {
              type: "application/javascript",
              src: "https://checkout.epayco.co/checkout.js",
              "data-epayco-key": unref(ePaycoKey),
              class: "epayco-button",
              "data-epayco-amount": unref(valorPlanes).PLATA,
              "data-epayco-tax": "0.00",
              "data-epayco-tax-ico": "0.00",
              "data-epayco-tax-base": unref(valorPlanes).PLATA,
              "data-epayco-name": "Plan Plata",
              "data-epayco-description": "Plan Plata",
              "data-epayco-currency": "cop",
              "data-epayco-country": "CO",
              "data-epayco-test": unref(estadoTest),
              "data-epayco-external": "false",
              "data-epayco-response": unref(url),
              "data-epayco-confirmation": "",
              "data-epayco-button": "https://multimedia.epayco.co/dashboard/btns/btn1.png"
            }, null, 8, ["data-epayco-key", "data-epayco-amount", "data-epayco-tax-base", "data-epayco-test", "data-epayco-response"]))
          ])) : createCommentVNode("", true),
          datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_RouterLink, {
            key: 2,
            to: {
              name: "deportista-Subscribe-planS",
              params: {
                planS: JSON.stringify({
                  plan: unref(planesData).oro,
                  cliente: datosDeportista.value
                })
              }
            },
            class: "column is-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                raised: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("label", null, toDisplayString(unref(planesData).oro.nombre), 1),
                  _hoisted_54$2,
                  createBaseVNode("label", null, toDisplayString(unref(planesData).oro.valor), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          !datosDeportista.value.pagoRecurrente ? (openBlock(), createElementBlock("form", _hoisted_55$2, [
            (openBlock(), createBlock(resolveDynamicComponent("script"), {
              type: "application/javascript",
              src: "https://checkout.epayco.co/checkout.js",
              "data-epayco-key": unref(ePaycoKey),
              class: "epayco-button",
              "data-epayco-amount": unref(valorPlanes).ORO,
              "data-epayco-tax": "0.00",
              "data-epayco-tax-ico": "0.00",
              "data-epayco-tax-base": unref(valorPlanes).ORO,
              "data-epayco-name": "Plan Oro",
              "data-epayco-description": "Plan Oro",
              "data-epayco-currency": "cop",
              "data-epayco-country": "CO",
              "data-epayco-test": unref(estadoTest),
              "data-epayco-external": "false",
              "data-epayco-response": unref(url),
              "data-epayco-confirmation": "",
              "data-epayco-button": "https://multimedia.epayco.co/dashboard/btns/btn1.png"
            }, null, 8, ["data-epayco-key", "data-epayco-amount", "data-epayco-tax-base", "data-epayco-test", "data-epayco-response"]))
          ])) : createCommentVNode("", true),
          datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_RouterLink, {
            key: 4,
            to: {
              name: "deportista-Subscribe-planS",
              params: {
                planS: JSON.stringify({
                  plan: unref(planesData).platino,
                  cliente: datosDeportista.value
                })
              }
            },
            class: "column is-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                raised: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("label", null, toDisplayString(unref(planesData).platino.nombre), 1),
                  _hoisted_56$2,
                  createBaseVNode("label", null, toDisplayString(unref(planesData).platino.valor), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          !datosDeportista.value.pagoRecurrente ? (openBlock(), createElementBlock("form", _hoisted_57$2, [
            (openBlock(), createBlock(resolveDynamicComponent("script"), {
              type: "application/javascript",
              src: "https://checkout.epayco.co/checkout.js",
              "data-epayco-key": unref(ePaycoKey),
              class: "epayco-button",
              "data-epayco-amount": unref(valorPlanes).PLATINO,
              "data-epayco-tax": "0.00",
              "data-epayco-tax-ico": "0.00",
              "data-epayco-tax-base": unref(valorPlanes).PLATINO,
              "data-epayco-name": "Plan Platino",
              "data-epayco-description": "Plan Platino",
              "data-epayco-currency": "cop",
              "data-epayco-country": "CO",
              "data-epayco-test": unref(estadoTest),
              "data-epayco-external": "false",
              "data-epayco-response": unref(url),
              "data-epayco-confirmation": "",
              "data-epayco-button": "https://multimedia.epayco.co/dashboard/btns/btn1.png"
            }, null, 8, ["data-epayco-key", "data-epayco-amount", "data-epayco-tax-base", "data-epayco-test", "data-epayco-response"]))
          ])) : createCommentVNode("", true),
          datosDeportista.value.pagoRecurrente ? (openBlock(), createBlock(_component_RouterLink, {
            key: 6,
            to: {
              name: "deportista-Subscribe-planS",
              params: {
                planS: JSON.stringify({
                  plan: unref(planesData).diamante,
                  cliente: datosDeportista.value
                })
              }
            },
            class: "column is-2"
          }, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                color: "primary",
                raised: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("label", null, toDisplayString(unref(planesData).diamante.nombre), 1),
                  _hoisted_58$2,
                  createBaseVNode("label", null, toDisplayString(unref(planesData).diamante.valor), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          !datosDeportista.value.pagoRecurrente ? (openBlock(), createElementBlock("form", _hoisted_59$2, [
            (openBlock(), createBlock(resolveDynamicComponent("script"), {
              type: "application/javascript",
              src: "https://checkout.epayco.co/checkout.js",
              "data-epayco-key": unref(ePaycoKey),
              class: "epayco-button",
              "data-epayco-amount": unref(valorPlanes).DIAMANTE,
              "data-epayco-tax": "0.00",
              "data-epayco-tax-ico": "0.00",
              "data-epayco-tax-base": unref(valorPlanes).DIAMANTE,
              "data-epayco-name": "Plan Diamante",
              "data-epayco-description": "Plan Diamante",
              "data-epayco-currency": "cop",
              "data-epayco-country": "CO",
              "data-epayco-test": unref(estadoTest),
              "data-epayco-external": "false",
              "data-epayco-response": unref(url),
              "data-epayco-confirmation": "",
              "data-epayco-button": "https://multimedia.epayco.co/dashboard/btns/btn1.png"
            }, null, 8, ["data-epayco-key", "data-epayco-amount", "data-epayco-tax-base", "data-epayco-test", "data-epayco-response"]))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$5 = { class: "account-box is-form is-footerless" };
const _hoisted_2$4 = { class: "form-head-inner" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n General"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edita la informac\xEDon general de tu cuenta")
], -1);
const _hoisted_4$4 = { class: "right" };
const _hoisted_5$4 = { class: "buttons" };
const _hoisted_6$4 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_7$4 = /* @__PURE__ */ createTextVNode(" Guardar cambios ");
const _hoisted_8$4 = { class: "form-body" };
const _hoisted_9$4 = { class: "fieldset" };
const _hoisted_10$4 = { class: "fieldset-heading" };
const _hoisted_11$4 = /* @__PURE__ */ createBaseVNode("h4", null, "Test Semicooper:", -1);
const _hoisted_12$4 = /* @__PURE__ */ createBaseVNode("p", null, " Calienta 10 minutos y estira, luego corre la mayor distancia posible durante 6 minutos apunta la distancia recorrida en metros. ", -1);
const _hoisted_13$4 = /* @__PURE__ */ createTextVNode("Obligatorio ");
const _hoisted_14$4 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_15$4 = { class: "columns is-multiline" };
const _hoisted_16$4 = { class: "column is-6" };
const _hoisted_17$4 = /* @__PURE__ */ createTextVNode("Semicooper ");
const _hoisted_18$4 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_19$4 = {
  key: 0,
  class: "help is-danger"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const isLoading = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const returnSemicooper = () => {
      datosSemicooper.semicooper = datosSemicooper.semicooper.replace(/e/g, "");
      return datosSemicooper.semicooper;
    };
    const activarBoton = computed(() => {
      let disabled = true;
      if (Number(datosSemicooper.semicooper) > 0 && datosSemicooper.semicooper.substring(0, 1) != 0) {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    });
    const validationSchema = toFormValidator(mod.object({
      semicooper: mod.string({
        required_error: "Este campo es requerido",
        invalid_type_error: "tipo de dato invalido"
      }).min(4, "Escribe minimo 4 digitos")
    }));
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        semicooper: ""
      }
    });
    const onSave = handleSubmit(async () => {
      isLoading.value = true;
      await sleep();
      await updateSemicooper(userSession.userId, datosSemicooper);
      emit("update");
      notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
      isLoading.value = false;
    });
    const datosSemicooper = reactive({
      VAM: "",
      VAM_decimal: "",
      semicooper: "",
      marcas: []
    });
    onMounted(async () => {
      const datos = await getSemicooper(userSession.userId);
      datosSemicooper.VAM = (datos == null ? void 0 : datos.VAM) || "";
      datosSemicooper.VAM_decimal = (datos == null ? void 0 : datos.VAM_decimal) || "";
      datosSemicooper.semicooper = (datos == null ? void 0 : datos.semicooper) || "";
      datosSemicooper.marcas = (datos == null ? void 0 : datos.marcas) || [];
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$8;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$9;
      const _component_VInput = _sfc_main$a;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$b;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", {
          class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
        }, [
          createBaseVNode("div", _hoisted_2$4, [
            _hoisted_3$4,
            createBaseVNode("div", _hoisted_4$4, [
              createBaseVNode("div", _hoisted_5$4, [
                createVNode(_component_VButton, {
                  to: { name: "deportista" },
                  icon: "lnir lnir-arrow-left rem-100",
                  light: "",
                  "dark-outlined": ""
                }, {
                  default: withCtx(() => [
                    _hoisted_6$4
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: "",
                  loading: isLoading.value,
                  disabled: unref(activarBoton),
                  tabindex: "0",
                  onKeydown: withKeys(withModifiers(unref(onSave), ["prevent"]), ["space"]),
                  onClick: unref(onSave)
                }, {
                  default: withCtx(() => [
                    _hoisted_7$4
                  ]),
                  _: 1
                }, 8, ["loading", "disabled", "onKeydown", "onClick"])
              ])
            ])
          ])
        ], 2),
        createBaseVNode("div", _hoisted_8$4, [
          createBaseVNode("div", _hoisted_9$4, [
            createBaseVNode("div", _hoisted_10$4, [
              _hoisted_11$4,
              _hoisted_12$4,
              createBaseVNode("p", null, [
                _hoisted_13$4,
                createVNode(_component_font, {
                  size: "4",
                  color: "red"
                }, {
                  default: withCtx(() => [
                    _hoisted_14$4
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_15$4, [
              createBaseVNode("div", _hoisted_16$4, [
                createVNode(_component_VField, { id: "semicooper" }, {
                  default: withCtx(({ field }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_17$4,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_18$4
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: unref(datosSemicooper).semicooper,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(datosSemicooper).semicooper = $event),
                          value: returnSemicooper(),
                          type: "text",
                          placeholder: "semicooper"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_19$4, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var Deportes_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "page-content-inner" };
const _hoisted_2$3 = { class: "account-wrapper" };
const _hoisted_3$3 = { class: "columns" };
const _hoisted_4$3 = { class: "column is-6" };
const _hoisted_5$3 = { class: "account-box is-form is-footerless" };
const _hoisted_6$3 = { class: "form-head-inner" };
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n General"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edita la informac\xEDon general de tu cuenta")
], -1);
const _hoisted_8$3 = { class: "right" };
const _hoisted_9$3 = { class: "buttons" };
const _hoisted_10$3 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_11$3 = /* @__PURE__ */ createTextVNode(" Guardar cambios ");
const _hoisted_12$3 = { class: "form-body" };
const _hoisted_13$3 = { class: "fieldset" };
const _hoisted_14$3 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n Deportes:"),
  /* @__PURE__ */ createBaseVNode("p", null, "Otras personas quieren conocerte m\xE1s")
], -1);
const _hoisted_15$3 = { class: "columns is-multiline" };
const _hoisted_16$3 = { class: "column is-6" };
const _hoisted_17$3 = /* @__PURE__ */ createTextVNode("Edad Deportiva ");
const _hoisted_18$3 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_19$3 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_20$3 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_21$3 = [
  _hoisted_20$3
];
const _hoisted_22$3 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_23$3 = { class: "column is-6" };
const _hoisted_24$3 = /* @__PURE__ */ createTextVNode(" Nivel Deportivo Subjetivo ");
const _hoisted_25$3 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_26$3 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_27$3 = [
  _hoisted_26$3
];
const _hoisted_28$3 = { class: "column is-6" };
const _hoisted_29$3 = /* @__PURE__ */ createTextVNode(" Usa Pulsometro ");
const _hoisted_30$3 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_31$3 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_32$3 = [
  _hoisted_31$3
];
const _hoisted_33$3 = { class: "column is-6" };
const _hoisted_34$3 = /* @__PURE__ */ createTextVNode(" Esfuerzo fisico en el trabajo ");
const _hoisted_35$2 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_36$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_37$2 = [
  _hoisted_36$2
];
const _hoisted_38$2 = { class: "column is-6" };
const _hoisted_39$2 = /* @__PURE__ */ createTextVNode(" Nutrici\xF3n ");
const _hoisted_40$2 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_41$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_42$2 = [
  _hoisted_41$2
];
const _hoisted_43$2 = { class: "column is-6" };
const _hoisted_44$2 = /* @__PURE__ */ createTextVNode(" Sue\xF1o ");
const _hoisted_45$2 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_46$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_47$2 = [
  _hoisted_46$2
];
const _hoisted_48$2 = { class: "column is-12" };
const _hoisted_49$2 = {
  raw: "",
  class: "auth-label"
};
const _hoisted_50$2 = /* @__PURE__ */ createTextVNode(" Otros Deportes ");
const _hoisted_51$2 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_52$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_53$2 = [
  _hoisted_52$2
];
const _hoisted_54$1 = {
  key: 0,
  class: "column is-12"
};
const _hoisted_55$1 = /* @__PURE__ */ createBaseVNode("p", null, "Otro deporte", -1);
const _hoisted_56$1 = { class: "column is-6" };
const _hoisted_57$1 = { class: "account-box is-navigation" };
const _hoisted_58$1 = /* @__PURE__ */ createTextVNode(" A\xF1adir Lesion");
const _hoisted_59$1 = { class: "form-body" };
const _hoisted_60$1 = { class: "fieldset" };
const _hoisted_61$1 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Lesiones:")
], -1);
const _hoisted_62$1 = { class: "columns is-multiline" };
const _hoisted_63$1 = { class: "column is-6" };
const _hoisted_64$1 = /* @__PURE__ */ createBaseVNode("p", null, "Zona", -1);
const _hoisted_65$1 = { class: "column is-6" };
const _hoisted_66$1 = /* @__PURE__ */ createBaseVNode("p", null, "Tratamiento", -1);
const _hoisted_67$1 = { class: "column is-6" };
const _hoisted_68$1 = /* @__PURE__ */ createBaseVNode("p", null, "Fecha Inicio", -1);
const _hoisted_69$1 = { class: "column is-6" };
const _hoisted_70$1 = /* @__PURE__ */ createBaseVNode("p", null, "Duracion", -1);
const _hoisted_71$1 = { class: "column is-6" };
const _hoisted_72$1 = /* @__PURE__ */ createTextVNode("\xBFActualmente la tiene ?");
const _hoisted_73$1 = { class: "columns is-multiline" };
const _hoisted_74$1 = { class: "mx-2" };
const _hoisted_75$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Zona")
], -1);
const _hoisted_76$1 = { for: "zoa" };
const _hoisted_77$1 = { class: "mx-2" };
const _hoisted_78$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Tratamiento")
], -1);
const _hoisted_79$1 = { for: "zoa" };
const _hoisted_80$1 = { class: "mx-2" };
const _hoisted_81$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha Inicio")
], -1);
const _hoisted_82$1 = { for: "zoa" };
const _hoisted_83$1 = { class: "mx-2" };
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Duracion")
], -1);
const _hoisted_85 = { for: "zoa" };
const _hoisted_86 = { class: "mx-2" };
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Actualmente la tiene")
], -1);
const _hoisted_88 = { for: "zoa" };
const _hoisted_89 = { class: "colmuns" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const isLoading = ref(false);
    const edadDeportivaMensaje = ref("");
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const inputZona = ref("");
    const inputTratamieto = ref("");
    const inputFecha_inicio = ref("");
    const inputDuracion = ref("");
    const inputLesionPresente = ref("");
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const datosDeportes = reactive({
      edad_deportiva: "",
      lesiones: [],
      enfermedad_actual: "",
      enfermedad_duracion: "",
      enfermedad_fech_inicio: "",
      enfermedad_tratamiento: "",
      enfermedad_zona: "",
      esfuerzo_trabajo: "",
      nutricion: "",
      otros: {},
      otro: "",
      pulsometro: "",
      subjetivo: "",
      sue\u00F1o: ""
    });
    const activarBoton = computed(() => {
      let disabled = true;
      if (datosDeportes.edad_deportiva != null && datosDeportes.edad_deportiva != "") {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    });
    const selectedEdadDeportiva = () => {
      let existe = false;
      if (datosDeportes.edad_deportiva == null) {
        edadDeportivaMensaje.value = '"Debes escoger un intervalo"';
        existe = true;
      }
      return existe;
    };
    const addLesion = () => {
      datosDeportes.lesiones.push({
        zona: inputZona.value,
        tratamiento: inputTratamieto.value,
        fecha_inicio: inputFecha_inicio.value,
        duracion: inputDuracion.value,
        actual: inputLesionPresente.value
      });
      inputZona.value = "";
      inputTratamieto.value = "";
      inputFecha_inicio.value = "";
      inputDuracion.value = "";
      inputLesionPresente.value = "";
    };
    const eliminarLesion = (lesion) => {
      console.log(lesion);
      datosDeportes.lesiones.splice(lesion, 1);
    };
    const onSave = async () => {
      isLoading.value = true;
      await sleep();
      await updateDeportes(userSession.userId, datosDeportes);
      emit("update");
      notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
      isLoading.value = false;
    };
    onMounted(async () => {
      const datos = await getDeportes(userSession.userId);
      datosDeportes.edad_deportiva = (datos == null ? void 0 : datos.edad_deportiva) || "";
      datosDeportes.lesiones = (datos == null ? void 0 : datos.lesiones) || [];
      datosDeportes.enfermedad_actual = (datos == null ? void 0 : datos.enfermedad_actual) || "";
      datosDeportes.enfermedad_duracion = (datos == null ? void 0 : datos.enfermedad_duracion) || "";
      datosDeportes.enfermedad_fech_inicio = (datos == null ? void 0 : datos.enfermedad_fech_inicio) || "";
      datosDeportes.enfermedad_tratamiento = (datos == null ? void 0 : datos.enfermedad_tratamiento) || "";
      datosDeportes.enfermedad_zona = (datos == null ? void 0 : datos.enfermedad_zona) || "";
      datosDeportes.esfuerzo_trabajo = (datos == null ? void 0 : datos.esfuerzo_trabajo) || "";
      datosDeportes.nutricion = (datos == null ? void 0 : datos.nutricion) || "";
      datosDeportes.otros = (datos == null ? void 0 : datos.otros) || "";
      datosDeportes.otro = (datos == null ? void 0 : datos.otro) || "";
      datosDeportes.pulsometro = (datos == null ? void 0 : datos.pulsometro) || "";
      datosDeportes.subjetivo = (datos == null ? void 0 : datos.subjetivo) || "";
      datosDeportes.sue\u00F1o = (datos == null ? void 0 : datos.sue\u00F1o) || "";
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$8;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$9;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$b;
      const _component_VCheckbox = _sfc_main$c;
      const _component_VInput = _sfc_main$a;
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_VIconButton = _sfc_main$d;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("div", _hoisted_4$3, [
              createBaseVNode("div", _hoisted_5$3, [
                createBaseVNode("div", {
                  class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
                }, [
                  createBaseVNode("div", _hoisted_6$3, [
                    _hoisted_7$3,
                    createBaseVNode("div", _hoisted_8$3, [
                      createBaseVNode("div", _hoisted_9$3, [
                        createVNode(_component_VButton, {
                          to: { name: "deportista" },
                          icon: "lnir lnir-arrow-left rem-100",
                          light: "",
                          "dark-outlined": ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_10$3
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VButton, {
                          color: "primary",
                          raised: "",
                          loading: isLoading.value,
                          disabled: unref(activarBoton),
                          tabindex: "0",
                          onKeydown: withKeys(withModifiers(onSave, ["prevent"]), ["space"]),
                          onClick: onSave
                        }, {
                          default: withCtx(() => [
                            _hoisted_11$3
                          ]),
                          _: 1
                        }, 8, ["loading", "disabled", "onKeydown"])
                      ])
                    ])
                  ])
                ], 2),
                createBaseVNode("div", _hoisted_12$3, [
                  createBaseVNode("div", _hoisted_13$3, [
                    _hoisted_14$3,
                    createBaseVNode("div", _hoisted_15$3, [
                      createBaseVNode("div", _hoisted_16$3, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_17$3,
                                    createVNode(_component_font, {
                                      size: "4",
                                      color: "red"
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_18$3
                                      ]),
                                      _: 1
                                    }),
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_19$3, _hoisted_21$3)), [
                                      [
                                        _directive_tooltip,
                                        "Tiempo que le has dedicado al deporte",
                                        void 0,
                                        {
                                          primary: true,
                                          bubble: true
                                        }
                                      ]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: unref(datosDeportes).edad_deportiva,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(datosDeportes).edad_deportiva = $event),
                                  value: unref(datosDeportes).edad_deportiva,
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: [
                                    "< 1 A\xF1o",
                                    "1 - 2 A\xF1os",
                                    "3 - 5 A\xF1os",
                                    "6 - 10 A\xF1os",
                                    "10 + A\xF1os"
                                  ],
                                  required: ""
                                }, null, 8, ["modelValue", "value", "attrs"]),
                                selectedEdadDeportiva() ? (openBlock(), createElementBlock("p", _hoisted_22$3, toDisplayString(edadDeportivaMensaje.value), 1)) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_23$3, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_24$3,
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_25$3, _hoisted_27$3)), [
                                      [
                                        _directive_tooltip,
                                        "Valoraci\xF3n de tu nivel",
                                        void 0,
                                        {
                                          primary: true,
                                          bubble: true
                                        }
                                      ]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: unref(datosDeportes).subjetivo,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(datosDeportes).subjetivo = $event),
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                                  required: ""
                                }, null, 8, ["modelValue", "attrs"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_28$3, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_29$3,
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_30$3, _hoisted_32$3)), [
                                      [
                                        _directive_tooltip,
                                        "Tienes pulsometro",
                                        void 0,
                                        {
                                          primary: true,
                                          bubble: true
                                        }
                                      ]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: unref(datosDeportes).pulsometro,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(datosDeportes).pulsometro = $event),
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: ["si", "no"],
                                  required: ""
                                }, null, 8, ["modelValue", "attrs"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_33$3, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_34$3,
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_35$2, _hoisted_37$2)), [
                                      [
                                        _directive_tooltip,
                                        "Califica el nivel de esfuerzo en tu trabajo",
                                        void 0,
                                        {
                                          primary: true,
                                          bubble: true
                                        }
                                      ]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: unref(datosDeportes).esfuerzo_trabajo,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(datosDeportes).esfuerzo_trabajo = $event),
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                                  required: ""
                                }, null, 8, ["modelValue", "attrs"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_38$2, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_39$2,
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_40$2, _hoisted_42$2)), [
                                      [
                                        _directive_tooltip,
                                        "De 1 a 10 cu\xE1l es tu nivel de nutrici\xF3n",
                                        void 0,
                                        {
                                          primary: true,
                                          bubble: true
                                        }
                                      ]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: unref(datosDeportes).nutricion,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(datosDeportes).nutricion = $event),
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                                  required: ""
                                }, null, 8, ["modelValue", "attrs"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_43$2, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_44$2,
                                    withDirectives((openBlock(), createElementBlock("span", _hoisted_45$2, _hoisted_47$2)), [
                                      [
                                        _directive_tooltip,
                                        "\xBFCu\xE1ntas horas duermes?",
                                        void 0,
                                        {
                                          primary: true,
                                          bubble: true
                                        }
                                      ]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: unref(datosDeportes).sue\u00F1o,
                                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(datosDeportes).sue\u00F1o = $event),
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                                  required: ""
                                }, null, 8, ["modelValue", "attrs"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_48$2, [
                        createBaseVNode("label", _hoisted_49$2, [
                          _hoisted_50$2,
                          withDirectives((openBlock(), createElementBlock("span", _hoisted_51$2, _hoisted_53$2)), [
                            [
                              _directive_tooltip,
                              "\xBFTe gustan otros deportes?",
                              void 0,
                              {
                                primary: true,
                                bubble: true
                              }
                            ]
                          ])
                        ]),
                        createVNode(_component_VField, { class: "columns is-multiline" }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.ciclismo,
                                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(datosDeportes).otros.ciclismo = $event),
                                  label: "Ciclismo",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.natacion,
                                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(datosDeportes).otros.natacion = $event),
                                  label: "Nataci\xF3n",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.triatlon,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(datosDeportes).otros.triatlon = $event),
                                  label: "Triatlon",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.gimnasio,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(datosDeportes).otros.gimnasio = $event),
                                  label: "Gimnasio",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.trail,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(datosDeportes).otros.trail = $event),
                                  label: "Trail",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, {
                              raw: "",
                              subcontrol: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_VCheckbox, {
                                  modelValue: unref(datosDeportes).otros.otro,
                                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(datosDeportes).otros.otro = $event),
                                  label: "Otro",
                                  color: "success"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        unref(datosDeportes).otros.otro ? (openBlock(), createElementBlock("div", _hoisted_54$1, [
                          _hoisted_55$1,
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  createVNode(_component_VInput, {
                                    modelValue: unref(datosDeportes).otro,
                                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(datosDeportes).otro = $event),
                                    type: "text",
                                    placeholder: "Otro deporte",
                                    autocomplete: "on"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_56$1, [
              createBaseVNode("div", _hoisted_57$1, [
                createBaseVNode("div", null, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    outlined: "",
                    onClick: addLesion
                  }, {
                    default: withCtx(() => [
                      _hoisted_58$1
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_59$1, [
                  createBaseVNode("div", _hoisted_60$1, [
                    _hoisted_61$1,
                    createBaseVNode("div", _hoisted_62$1, [
                      createBaseVNode("div", _hoisted_63$1, [
                        _hoisted_64$1,
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:user" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: inputZona.value,
                                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => inputZona.value = $event),
                                  type: "text",
                                  placeholder: "Zona",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_65$1, [
                        _hoisted_66$1,
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:user" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: inputTratamieto.value,
                                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => inputTratamieto.value = $event),
                                  type: "text",
                                  placeholder: "Tratamiento",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_67$1, [
                        _hoisted_68$1,
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:calendar" }, {
                              default: withCtx(() => [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_VDatePicker, {
                                      modelValue: inputFecha_inicio.value,
                                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => inputFecha_inicio.value = $event),
                                      color: "green",
                                      "trim-weeks": ""
                                    }, {
                                      default: withCtx(({ inputValue, inputEvents }) => [
                                        createVNode(_component_VField, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_VControl, { icon: "feather:calendar" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_VInput, mergeProps({ value: inputValue }, toHandlers(inputEvents)), null, 16, ["value"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_69$1, [
                        _hoisted_70$1,
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { icon: "feather:user" }, {
                              default: withCtx(() => [
                                createVNode(_component_VInput, {
                                  modelValue: inputDuracion.value,
                                  "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => inputDuracion.value = $event),
                                  type: "text",
                                  placeholder: "Duracion de lesion",
                                  autocomplete: "off"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_71$1, [
                        createVNode(_component_VField, null, {
                          default: withCtx(({ id }) => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_VLabel, {
                                  raw: "",
                                  class: "auth-label"
                                }, {
                                  default: withCtx(() => [
                                    _hoisted_72$1
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Multiselect, {
                                  modelValue: inputLesionPresente.value,
                                  "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => inputLesionPresente.value = $event),
                                  attrs: { id },
                                  placeholder: "Seleccione uno",
                                  options: ["SI", "NO"]
                                }, null, 8, ["modelValue", "attrs"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(datosDeportes).lesiones, (lesion, index) => {
                return openBlock(), createElementBlock("div", {
                  key: lesion,
                  class: "account-box"
                }, [
                  createBaseVNode("div", _hoisted_73$1, [
                    createBaseVNode("div", _hoisted_74$1, [
                      _hoisted_75$1,
                      createBaseVNode("label", _hoisted_76$1, toDisplayString(lesion.zona), 1)
                    ]),
                    createBaseVNode("div", _hoisted_77$1, [
                      _hoisted_78$1,
                      createBaseVNode("label", _hoisted_79$1, toDisplayString(lesion.tratamiento), 1)
                    ]),
                    createBaseVNode("div", _hoisted_80$1, [
                      _hoisted_81$1,
                      createBaseVNode("label", _hoisted_82$1, toDisplayString(lesion.fecha_inicio), 1)
                    ]),
                    createBaseVNode("div", _hoisted_83$1, [
                      _hoisted_84,
                      createBaseVNode("label", _hoisted_85, toDisplayString(lesion.duracion), 1)
                    ]),
                    createBaseVNode("div", _hoisted_86, [
                      _hoisted_87,
                      createBaseVNode("label", _hoisted_88, toDisplayString(lesion.actual), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_89, [
                    createVNode(_component_VIconButton, {
                      color: "warning",
                      outlined: "",
                      circle: "",
                      icon: "feather:trash-2",
                      onClick: ($event) => eliminarLesion(index)
                    }, null, 8, ["onClick"])
                  ])
                ]);
              }), 128))
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "account-box is-form is-footerless" };
const _hoisted_2$2 = { class: "form-head-inner" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n General"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edita la informac\xEDon general de tu cuenta")
], -1);
const _hoisted_4$2 = { class: "right" };
const _hoisted_5$2 = { class: "buttons" };
const _hoisted_6$2 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_7$2 = /* @__PURE__ */ createTextVNode(" Guardar cambios ");
const _hoisted_8$2 = { class: "form-body" };
const _hoisted_9$2 = { class: "fieldset" };
const _hoisted_10$2 = { class: "fieldset-heading" };
const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n Morfolog\xEDa:", -1);
const _hoisted_12$2 = /* @__PURE__ */ createBaseVNode("p", null, "Otras personas quieren conocerte m\xE1s", -1);
const _hoisted_13$2 = /* @__PURE__ */ createTextVNode("Obligatorio ");
const _hoisted_14$2 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_15$2 = { class: "columns is-multiline" };
const _hoisted_16$2 = { class: "column is-6" };
const _hoisted_17$2 = /* @__PURE__ */ createTextVNode(" Frecuencia Maxima ");
const _hoisted_18$2 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_19$2 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_20$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_21$2 = [
  _hoisted_20$2
];
const _hoisted_22$2 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_23$2 = { class: "column is-6" };
const _hoisted_24$2 = /* @__PURE__ */ createTextVNode(" Frecuencia Minima ");
const _hoisted_25$2 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_26$2 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_27$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_28$2 = [
  _hoisted_27$2
];
const _hoisted_29$2 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_30$2 = { class: "column is-6" };
const _hoisted_31$2 = /* @__PURE__ */ createTextVNode(" Estatura (cm)");
const _hoisted_32$2 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_33$2 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_34$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_35$1 = [
  _hoisted_34$2
];
const _hoisted_36$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_37$1 = { class: "column is-6" };
const _hoisted_38$1 = /* @__PURE__ */ createTextVNode("Peso >30 (Kg) ");
const _hoisted_39$1 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_40$1 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_41$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_42$1 = [
  _hoisted_41$1
];
const _hoisted_43$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_44$1 = { class: "column is-12" };
const _hoisted_45$1 = /* @__PURE__ */ createTextVNode("Grasa ");
const _hoisted_46$1 = {
  onclick: "",
  class: "has-tooltip-multiline"
};
const _hoisted_47$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_48$1 = [
  _hoisted_47$1
];
const _hoisted_49$1 = { class: "column is-6" };
const _hoisted_50$1 = /* @__PURE__ */ createTextVNode("Somatipo ");
const _hoisted_51$1 = {
  onclick: "",
  class: "has-tooltip-multiline"
};
const _hoisted_52$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_53$1 = [
  _hoisted_52$1
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const isLoading = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const somatipos = ["Estomorfico", "Mesom\xF3rfico", "Endomorfico"];
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const returnFcMax = () => {
      datosMorfologia.value.FCmax = datosMorfologia.value.FCmax.replace(/e/g, "");
      return datosMorfologia.value.FCmax;
    };
    const returnFcMin = () => {
      datosMorfologia.value.FCmin = datosMorfologia.value.FCmin.replace(/e/g, "");
      return datosMorfologia.value.FCmin;
    };
    const returnEstatura = () => {
      datosMorfologia.value.estatura = datosMorfologia.value.estatura.replace(/e/g, "");
      return datosMorfologia.value.estatura;
    };
    const returnPeso = () => {
      datosMorfologia.value.peso = datosMorfologia.value.peso.replace(/e/g, "");
      return datosMorfologia.value.peso;
    };
    const activarBoton = computed(() => {
      let disabled = true;
      if (Number(datosMorfologia.value.FCmax) >= 150 && Number(datosMorfologia.value.FCmax) <= 220 && datosMorfologia.value.FCmax.substring(0, 1) != 0 && Number(datosMorfologia.value.FCmin) >= 35 && Number(datosMorfologia.value.FCmin) <= 80 && datosMorfologia.value.FCmin.substring(0, 1) != 0 && Number(datosMorfologia.value.peso) >= 30 && datosMorfologia.value.peso.substring(0, 1) != 0 && Number(datosMorfologia.value.estatura) >= 80 && Number(datosMorfologia.value.estatura) <= 220 && datosMorfologia.value.estatura.substring(0, 1) != 0) {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    });
    const validationSchema = toFormValidator(mod.object({
      estatura: mod.string({
        required_error: "requerido",
        invalid_type_error: "tipo ivalido"
      }).min(2, "Debes escribir dos digitos"),
      peso: mod.string({
        required_error: "requerido",
        invalid_type_error: "tipo ivalido"
      }).min(2, "Debes escribir dos digitos"),
      fcMax: mod.string({
        required_error: "requerido",
        invalid_type_error: "tipo ivalido"
      }).min(3, "Debes escribir tres digitos"),
      fcMin: mod.string({
        required_error: "requerido",
        invalid_type_error: "tipo ivalido"
      }).min(2, "Debes escribir dos digitos")
    }));
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        estatura: "",
        peso: "",
        fcMax: "",
        fcMin: ""
      }
    });
    const onSave = handleSubmit(async () => {
      isLoading.value = true;
      await sleep();
      await updateMorfologia(userSession.userId, datosMorfologia.value);
      emit("update");
      notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
      isLoading.value = false;
    });
    const datosMorfologia = ref({
      FCmax: "",
      FCmin: "",
      FCprom: "",
      distancia: "",
      estatura: "",
      fecha_brazo: "",
      fecha_cintura: "",
      fecha_hombros: "",
      fecha_marca: "",
      fecha_muslo: "",
      fecha_pantorrilla: "",
      fecha_pecho: "",
      grasa: "",
      medida_brazo: "",
      medida_cintura: "",
      medida_hombros: "",
      medida_muslo: "",
      medida_pantorrilla: "",
      medida_pecho: "",
      peso: "",
      ritmo: "",
      somatipo: "",
      tiempo_marca: ""
    });
    onMounted(async () => {
      datosMorfologia.value = await getMorfologiaDeportista(userSession.userId);
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$8;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$9;
      const _component_VInput = _sfc_main$a;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$b;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", {
          class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
        }, [
          createBaseVNode("div", _hoisted_2$2, [
            _hoisted_3$2,
            createBaseVNode("div", _hoisted_4$2, [
              createBaseVNode("div", _hoisted_5$2, [
                createVNode(_component_VButton, {
                  to: { name: "deportista" },
                  icon: "lnir lnir-arrow-left rem-100",
                  light: "",
                  "dark-outlined": ""
                }, {
                  default: withCtx(() => [
                    _hoisted_6$2
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: "",
                  loading: isLoading.value,
                  disabled: unref(activarBoton),
                  tabindex: "0",
                  onKeydown: withKeys(withModifiers(unref(onSave), ["prevent"]), ["space"]),
                  onClick: unref(onSave)
                }, {
                  default: withCtx(() => [
                    _hoisted_7$2
                  ]),
                  _: 1
                }, 8, ["loading", "disabled", "onKeydown", "onClick"])
              ])
            ])
          ])
        ], 2),
        createBaseVNode("div", _hoisted_8$2, [
          createBaseVNode("div", _hoisted_9$2, [
            createBaseVNode("div", _hoisted_10$2, [
              _hoisted_11$2,
              _hoisted_12$2,
              createBaseVNode("p", null, [
                _hoisted_13$2,
                createVNode(_component_font, {
                  size: "4",
                  color: "red"
                }, {
                  default: withCtx(() => [
                    _hoisted_14$2
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_15$2, [
              createBaseVNode("div", _hoisted_16$2, [
                createVNode(_component_VField, { id: "fcMax" }, {
                  default: withCtx(({ field }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_17$2,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_18$2
                          ]),
                          _: 1
                        }),
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_19$2, _hoisted_21$2)), [
                          [
                            _directive_tooltip,
                            "Frecuencia cardiaca maxima entre [ 150 - 220 ]",
                            void 0,
                            {
                              primary: true,
                              bubble: true
                            }
                          ]
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.FCmax,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datosMorfologia.value.FCmax = $event),
                          value: returnFcMax(),
                          type: "text",
                          placeholder: "FCMax",
                          required: "",
                          autocomplete: "off"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_22$2, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_23$2, [
                createVNode(_component_VField, { id: "fcMin" }, {
                  default: withCtx(({ field }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_24$2,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_25$2
                          ]),
                          _: 1
                        }),
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_26$2, _hoisted_28$2)), [
                          [
                            _directive_tooltip,
                            "Frecuencia cardiaca minima entre [ 35 - 80 ]",
                            void 0,
                            {
                              primary: true,
                              bubble: true
                            }
                          ]
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:user" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.FCmin,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosMorfologia.value.FCmin = $event),
                          value: returnFcMin(),
                          type: "text",
                          placeholder: "FCmin",
                          required: "",
                          autocomplete: "off"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_29$2, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_30$2, [
                createVNode(_component_VField, { id: "estatura" }, {
                  default: withCtx(({ field }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_31$2,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_32$2
                          ]),
                          _: 1
                        }),
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_33$2, _hoisted_35$1)), [
                          [
                            _directive_tooltip,
                            "Pon una estatura entre 80 y 220 CM",
                            void 0,
                            {
                              primary: true,
                              bubble: true
                            }
                          ]
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:briefcase" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.estatura,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosMorfologia.value.estatura = $event),
                          value: returnEstatura(),
                          type: "text",
                          required: "",
                          placeholder: "Estatura",
                          autocomplete: "estatura"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_36$1, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_37$1, [
                createVNode(_component_VField, { id: "peso" }, {
                  default: withCtx(({ field }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_38$1,
                        createVNode(_component_font, {
                          size: "4",
                          color: "red"
                        }, {
                          default: withCtx(() => [
                            _hoisted_39$1
                          ]),
                          _: 1
                        }),
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_40$1, _hoisted_42$1)), [
                          [
                            _directive_tooltip,
                            "Pon una peso mayor a 30 KG",
                            void 0,
                            {
                              primary: true,
                              bubble: true
                            }
                          ]
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.peso,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosMorfologia.value.peso = $event),
                          value: returnPeso(),
                          required: "",
                          type: "text",
                          placeholder: "Peso",
                          autocomplete: "peso"
                        }, null, 8, ["modelValue", "value"]),
                        (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_43$1, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_44$1, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_45$1,
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_46$1, _hoisted_48$1)), [
                          [
                            _directive_tooltip,
                            "Cual es el porcentaje de tu grasa corporal",
                            void 0,
                            {
                              primary: true,
                              bubble: true
                            }
                          ]
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, { icon: "feather:book" }, {
                      default: withCtx(() => [
                        createVNode(_component_VInput, {
                          modelValue: datosMorfologia.value.grasa,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosMorfologia.value.grasa = $event),
                          type: "text",
                          placeholder: "% Grasa",
                          autocomplete: "% Grasa"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_49$1, [
                createVNode(_component_VField, null, {
                  default: withCtx(({ id }) => [
                    createVNode(_component_VLabel, {
                      raw: "",
                      class: "auth-label"
                    }, {
                      default: withCtx(() => [
                        _hoisted_50$1,
                        withDirectives((openBlock(), createElementBlock("span", _hoisted_51$1, _hoisted_53$1)), [
                          [
                            _directive_tooltip,
                            "Selecciona un somatipo",
                            void 0,
                            {
                              primary: true,
                              bubble: true
                            }
                          ]
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_Multiselect, {
                          modelValue: datosMorfologia.value.somatipo,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => datosMorfologia.value.somatipo = $event),
                          value: datosMorfologia.value.somatipo,
                          attrs: { id },
                          placeholder: "Seleccione uno",
                          options: somatipos,
                          required: ""
                        }, null, 8, ["modelValue", "value", "attrs"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var ProfileDeportista_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "account-box is-form is-footerless" };
const _hoisted_2$1 = { class: "form-head-inner" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n General"),
  /* @__PURE__ */ createBaseVNode("p", null, "Edita la informac\xEDon general de tu cuenta")
], -1);
const _hoisted_4$1 = { class: "right" };
const _hoisted_5$1 = { class: "buttons" };
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode(" Guardar cambios ");
const _hoisted_8$1 = { class: "form-body" };
const _hoisted_9$1 = { class: "fieldset" };
const _hoisted_10$1 = { class: "fieldset-heading" };
const _hoisted_11$1 = /* @__PURE__ */ createTextVNode(" Foto de perfil ");
const _hoisted_12$1 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_14$1 = [
  _hoisted_13$1
];
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("p", null, "La foto de perfil ayuda a que otras personas te reconozcan", -1);
const _hoisted_16$1 = { class: "picture-selector" };
const _hoisted_17$1 = { class: "image-container" };
const _hoisted_18$1 = ["src"];
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_20$1 = [
  _hoisted_19$1
];
const _hoisted_21$1 = { class: "fieldset" };
const _hoisted_22$1 = { class: "fieldset-heading" };
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n Personal", -1);
const _hoisted_24$1 = /* @__PURE__ */ createBaseVNode("p", null, "Otras personas quieren conocerte m\xE1s", -1);
const _hoisted_25$1 = /* @__PURE__ */ createTextVNode("Obligatorio ");
const _hoisted_26$1 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_27$1 = { class: "columns is-multiline" };
const _hoisted_28$1 = { class: "column is-6" };
const _hoisted_29$1 = /* @__PURE__ */ createTextVNode(" Nombres ");
const _hoisted_30$1 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_31$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_32$1 = { class: "column is-6" };
const _hoisted_33$1 = /* @__PURE__ */ createTextVNode(" Apellidos ");
const _hoisted_34$1 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_35 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_36 = { class: "column is-6" };
const _hoisted_37 = /* @__PURE__ */ createTextVNode("Documento de identificaci\xF3n ");
const _hoisted_38 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_39 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_41 = [
  _hoisted_40
];
const _hoisted_42 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_43 = { class: "column is-6" };
const _hoisted_44 = /* @__PURE__ */ createTextVNode(" Genero ");
const _hoisted_45 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_46 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_47 = { class: "column is-6" };
const _hoisted_48 = /* @__PURE__ */ createTextVNode(" Pais ");
const _hoisted_49 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_50 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_51 = { class: "column is-6" };
const _hoisted_52 = /* @__PURE__ */ createTextVNode(" Ciudad ");
const _hoisted_53 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_54 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_55 = { class: "column is-6" };
const _hoisted_56 = /* @__PURE__ */ createTextVNode("Usuario ");
const _hoisted_57 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_59 = [
  _hoisted_58
];
const _hoisted_60 = { class: "column is-6" };
const _hoisted_61 = /* @__PURE__ */ createTextVNode("Correo ");
const _hoisted_62 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_63 = { class: "column is-6" };
const _hoisted_64 = /* @__PURE__ */ createTextVNode("Telefono ");
const _hoisted_65 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_66 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_68 = [
  _hoisted_67
];
const _hoisted_69 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_70 = { class: "column is-6" };
const _hoisted_71 = /* @__PURE__ */ createTextVNode("Fecha de nacimiento ");
const _hoisted_72 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_73 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_75 = [
  _hoisted_74
];
const _hoisted_76 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_77 = { class: "has-text-centered" };
const _hoisted_78 = { class: "upload-demo-wrap" };
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("wbr", null, null, -1);
const _hoisted_80 = { class: "file" };
const _hoisted_81 = { class: "file-label" };
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("span", { class: "file-cta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "file-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-cloud-upload-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "file-label" }, " Choose a file\u2026 ")
], -1);
const _hoisted_83 = /* @__PURE__ */ createTextVNode(" Confirm ");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const notif = useNotyf();
    const isLoading = ref(false);
    const uploadModalOpen = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const generoMensaje = ref("");
    const paisMensaje = ref("");
    const ciudadMensaje = ref("");
    const nacimientoMensaje = ref("");
    const paises = ref("");
    const ciudades = ref("");
    const fechaM = ref("");
    let imagen = reactive({
      accept: false,
      message: "",
      dataUrl: null
    });
    const imgProfile = reactive({
      picture: ""
    });
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const closeModal = () => {
      if (imagen.dataUrl) {
        console.log("preview en acas");
        const img = document.getElementById("ImageUser");
        if (img) {
          img.setAttribute("src", imagen.dataUrl);
          console.log("cargar nueva imgaen preview");
        }
      }
      uploadModalOpen.value = false;
    };
    const previewImage = async (event) => {
      const prevImagen = await preview(event);
      imgProfile.picture = prevImagen.file;
      if (prevImagen.accept) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async (e) => {
          imagen.dataUrl = e.target.result;
          imagen.message = prevImagen.message;
          imagen.accept = prevImagen.accept;
        };
      } else {
        imagen.accept = false;
        imagen.message = "";
        imagen.dataUrl = null;
        notif.error("La extension de archivo o tama\xF1o no cumple con los requisitos");
      }
    };
    const activarBoton = computed(() => {
      let disabled = true;
      if (Number(datosDeportista.value.identificacion) > 0 && Number(datosDeportista.value.telefono) > 0 && datosDeportista.value.pais != "" && datosDeportista.value.pais != null && datosDeportista.value.genero != "" && datosDeportista.value.genero != null && datosDeportista.value.ciudad != "" && datosDeportista.value.ciudad != null && datosDeportista.value.fecha_nacimiento != null) {
        disabled = false;
      } else {
        disabled = true;
      }
      return disabled;
    });
    const maxDate = async () => {
      const fecha = await new Date();
      const year = fecha.getFullYear() - 13;
      const mes = fecha.getMonth() + 1;
      const dia = fecha.getDate();
      const fechaMaxima = await new Date(mes + " " + dia + " " + year);
      return fechaMaxima;
    };
    const selectedGender = () => {
      let existe = false;
      if (datosDeportista.value.genero == null) {
        generoMensaje.value = '"Seleccione un genero por favor"';
        existe = true;
      }
      return existe;
    };
    const selectedNacimiento = () => {
      let existe = false;
      if (datosDeportista.value.fecha_nacimiento == null) {
        nacimientoMensaje.value = "Selecciona una fecha de nacimiento";
        existe = true;
      }
      return existe;
    };
    const selectedPais = () => {
      let existe = false;
      if (datosDeportista.value.pais == null) {
        paisMensaje.value = '"Seleccione un pa\xEDs por favor"';
        datosDeportista.value.ciudad = null;
        existe = true;
      }
      return existe;
    };
    const selectedCiudad = () => {
      let existe = false;
      if (datosDeportista.value.ciudad == null) {
        ciudadMensaje.value = '"Seleccione una cidad por favor"';
        existe = true;
      }
      return existe;
    };
    const returnIdentificacion = () => {
      datosDeportista.value.identificacion = datosDeportista.value.identificacion.replace(/e/g, "");
      return datosDeportista.value.identificacion;
    };
    const returnTelefono = () => {
      datosDeportista.value.telefono = datosDeportista.value.telefono.replace(/e/g, "");
      return datosDeportista.value.telefono;
    };
    const returnNombre = () => {
      datosDeportista.value.nombres = datosDeportista.value.nombres.replace(/[0-9]/g, "");
      return datosDeportista.value.nombres;
    };
    const returnApellido = () => {
      datosDeportista.value.apellidos = datosDeportista.value.apellidos.replace(/[0-9]/gi, "");
      return datosDeportista.value.apellidos;
    };
    const validationSchema = toFormValidator(mod.object({
      nombres: mod.string({
        required_error: "Nombres requeridos",
        invalid_type_error: "Caracteres invalidos"
      }).min(3, "Minimo tres caracteres"),
      apellidos: mod.string({
        required_error: "Apellidos requeridos",
        invalid_type_error: "Caracteres invalidos"
      }).min(3, "Minimo tres caracteres"),
      identificacion: mod.string({
        required_error: "Identificaci\xF3n requerida",
        invalid_type_error: "Identificaci\xF3n tipo invalido"
      }).min(8, "El n\xFAmero de digitos minimo es 8"),
      telefono: mod.string({
        required_error: "Telefono requerido",
        invalid_type_error: "Telefono tipo invalido"
      }).min(7, "El n\xFAmero de digitos minimo es 7")
    }));
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        identificacion: "",
        telefono: ""
      }
    });
    const onSave = handleSubmit(async () => {
      isLoading.value = true;
      await sleep();
      await updateDatosDeportista(userSession.userId, datosDeportista.value);
      if (imgProfile.picture) {
        addPicture(imgProfile.picture, userSession.userId);
      }
      emit("update");
      notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
      isLoading.value = false;
    });
    const datosDeportista = ref({
      nombres: "",
      apellidos: "",
      email: "",
      descripcion: "",
      nameUser: "",
      identificacion: "",
      fecha_nacimiento: "",
      fecha_registro: "",
      telefono: "",
      genero: "",
      ciudad: "",
      pais: "",
      pictureName: ""
    });
    onMounted(async () => {
      fechaM.value = await maxDate();
      paises.value = await getPaises();
      datosDeportista.value = await getDatosDeportista(userSession.userId);
    });
    watch(() => datosDeportista.value.pais, async (pais, prevPais) => {
      if (prevPais != "") {
        datosDeportista.value.ciudad = null;
      }
      ciudades.value = await getCiudades(pais);
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$8;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$9;
      const _component_VInput = _sfc_main$a;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$b;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_VAvatar = _sfc_main$e;
      const _component_VModal = _sfc_main$f;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", {
          class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
        }, [
          createBaseVNode("div", _hoisted_2$1, [
            _hoisted_3$1,
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5$1, [
                createVNode(_component_VButton, {
                  to: { name: "deportista-rutinas" },
                  icon: "lnir lnir-arrow-left rem-100",
                  light: "",
                  "dark-outlined": ""
                }, {
                  default: withCtx(() => [
                    _hoisted_6$1
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: "",
                  loading: isLoading.value,
                  disabled: unref(activarBoton),
                  tabindex: "0",
                  onKeydown: withKeys(withModifiers(unref(onSave), ["prevent"]), ["space"]),
                  onClick: unref(onSave)
                }, {
                  default: withCtx(() => [
                    _hoisted_7$1
                  ]),
                  _: 1
                }, 8, ["loading", "disabled", "onKeydown", "onClick"])
              ])
            ])
          ])
        ], 2),
        createBaseVNode("form", {
          action: "signup-form",
          onSubmit: _cache[12] || (_cache[12] = (...args) => unref(onSave) && unref(onSave)(...args))
        }, [
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("div", _hoisted_9$1, [
              createBaseVNode("div", _hoisted_10$1, [
                createBaseVNode("h4", null, [
                  _hoisted_11$1,
                  withDirectives((openBlock(), createElementBlock("span", _hoisted_12$1, _hoisted_14$1)), [
                    [
                      _directive_tooltip,
                      "Maximo 2MB, formato jpg, png",
                      void 0,
                      {
                        primary: true,
                        bubble: true
                      }
                    ]
                  ])
                ]),
                _hoisted_15$1
              ]),
              createBaseVNode("div", _hoisted_16$1, [
                createBaseVNode("div", _hoisted_17$1, [
                  createBaseVNode("img", {
                    id: "ImageUser",
                    src: unref(userSession).imagenUrl,
                    alt: ""
                  }, null, 8, _hoisted_18$1),
                  createBaseVNode("div", {
                    class: "upload-button",
                    role: "button",
                    tabindex: "0",
                    onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => uploadModalOpen.value = true, ["prevent"]), ["space"])),
                    onClick: _cache[1] || (_cache[1] = ($event) => uploadModalOpen.value = true)
                  }, _hoisted_20$1, 32)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_21$1, [
              createBaseVNode("div", _hoisted_22$1, [
                _hoisted_23$1,
                _hoisted_24$1,
                createBaseVNode("p", null, [
                  _hoisted_25$1,
                  createVNode(_component_font, {
                    size: "4",
                    color: "red"
                  }, {
                    default: withCtx(() => [
                      _hoisted_26$1
                    ]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_27$1, [
                createBaseVNode("div", _hoisted_28$1, [
                  createVNode(_component_VField, { id: "nombres" }, {
                    default: withCtx(({ field }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_29$1,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_30$1
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          createVNode(_component_VInput, {
                            modelValue: datosDeportista.value.nombres,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosDeportista.value.nombres = $event),
                            value: returnNombre(),
                            disabled: "",
                            type: "text",
                            placeholder: "Nombres",
                            autocomplete: "given-name"
                          }, null, 8, ["modelValue", "value"]),
                          (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_31$1, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_32$1, [
                  createVNode(_component_VField, { id: "apellidos" }, {
                    default: withCtx(({ field }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_33$1,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_34$1
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          createVNode(_component_VInput, {
                            modelValue: datosDeportista.value.apellidos,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosDeportista.value.apellidos = $event),
                            value: returnApellido(),
                            type: "text",
                            disabled: "",
                            placeholder: "Apellidos",
                            autocomplete: "family-name"
                          }, null, 8, ["modelValue", "value"]),
                          (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_35, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_36, [
                  createVNode(_component_VField, { id: "identificacion" }, {
                    default: withCtx(({ field }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_37,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_38
                            ]),
                            _: 1
                          }),
                          withDirectives((openBlock(), createElementBlock("span", _hoisted_39, _hoisted_41)), [
                            [
                              _directive_tooltip,
                              "Para posible facturaci\xF3n",
                              void 0,
                              {
                                primary: true,
                                bubble: true
                              }
                            ]
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { icon: "feather:briefcase" }, {
                        default: withCtx(() => [
                          createVNode(_component_VInput, {
                            modelValue: datosDeportista.value.identificacion,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosDeportista.value.identificacion = $event),
                            value: returnIdentificacion(),
                            type: "text",
                            placeholder: "N\xFAmero de Identificaci\xF3n",
                            required: "",
                            autocomplete: "off"
                          }, null, 8, ["modelValue", "value"]),
                          (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_42, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_43, [
                  createVNode(_component_VField, null, {
                    default: withCtx(({ id }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_44,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_45
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: datosDeportista.value.genero,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => datosDeportista.value.genero = $event),
                            value: datosDeportista.value.genero,
                            attrs: { id },
                            placeholder: "Seleccione uno",
                            options: ["Masculino", "Femenino"],
                            required: ""
                          }, null, 8, ["modelValue", "value", "attrs"]),
                          selectedGender() ? (openBlock(), createElementBlock("p", _hoisted_46, toDisplayString(generoMensaje.value), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_47, [
                  createVNode(_component_VField, null, {
                    default: withCtx(({ id }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_48,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_49
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: datosDeportista.value.pais,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => datosDeportista.value.pais = $event),
                            value: datosDeportista.value.pais,
                            attrs: { id },
                            placeholder: "Seleccione uno",
                            options: paises.value,
                            required: ""
                          }, null, 8, ["modelValue", "value", "attrs", "options"]),
                          selectedPais() ? (openBlock(), createElementBlock("p", _hoisted_50, toDisplayString(paisMensaje.value), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_51, [
                  createVNode(_component_VField, null, {
                    default: withCtx(({ id }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_52,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_53
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_Multiselect, {
                            modelValue: datosDeportista.value.ciudad,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => datosDeportista.value.ciudad = $event),
                            value: datosDeportista.value.ciudad,
                            attrs: { id },
                            placeholder: "Seleccione uno",
                            options: ciudades.value,
                            required: ""
                          }, null, 8, ["modelValue", "value", "attrs", "options"]),
                          selectedCiudad() ? (openBlock(), createElementBlock("p", _hoisted_54, toDisplayString(ciudadMensaje.value), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_55, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_56,
                          withDirectives((openBlock(), createElementBlock("span", _hoisted_57, _hoisted_59)), [
                            [
                              _directive_tooltip,
                              "Apodo (No es obligatorio)",
                              void 0,
                              {
                                primary: true,
                                bubble: true
                              }
                            ]
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          createVNode(_component_VInput, {
                            modelValue: datosDeportista.value.nameUser,
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => datosDeportista.value.nameUser = $event),
                            type: "text",
                            placeholder: "Nombre de usuario",
                            autocomplete: "family-name"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_60, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_61,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_62
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { icon: "feather:user" }, {
                        default: withCtx(() => [
                          createVNode(_component_VInput, {
                            modelValue: datosDeportista.value.email,
                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => datosDeportista.value.email = $event),
                            disabled: "",
                            type: "text",
                            placeholder: "Correo",
                            autocomplete: "correo"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_63, [
                  createVNode(_component_VField, { id: "telefono" }, {
                    default: withCtx(({ field }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_64,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_65
                            ]),
                            _: 1
                          }),
                          withDirectives((openBlock(), createElementBlock("span", _hoisted_66, _hoisted_68)), [
                            [
                              _directive_tooltip,
                              "Completa este campo con el n\xFAmero de cotacto",
                              void 0,
                              {
                                primary: true,
                                bubble: true
                              }
                            ]
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { icon: "feather:phone" }, {
                        default: withCtx(() => [
                          createVNode(_component_VInput, {
                            modelValue: datosDeportista.value.telefono,
                            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => datosDeportista.value.telefono = $event),
                            value: returnTelefono(),
                            type: "text",
                            placeholder: "N\xFAmero de tel\xE9fono",
                            required: "",
                            autocomplete: "off"
                          }, null, 8, ["modelValue", "value"]),
                          (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_69, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_70, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_71,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_72
                            ]),
                            _: 1
                          }),
                          withDirectives((openBlock(), createElementBlock("span", _hoisted_73, _hoisted_75)), [
                            [
                              _directive_tooltip,
                              "Completa este campo con tu fecha de nacimiento",
                              void 0,
                              {
                                primary: true,
                                bubble: true
                              }
                            ]
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, { icon: "feather:calendar" }, {
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_VDatePicker, {
                                modelValue: datosDeportista.value.fecha_nacimiento,
                                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => datosDeportista.value.fecha_nacimiento = $event),
                                "max-date": fechaM.value,
                                color: "green",
                                "trim-weeks": ""
                              }, {
                                default: withCtx(({ inputValue, inputEvents }) => [
                                  createVNode(_component_VField, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_VControl, { icon: "feather:calendar" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_VInput, mergeProps({ value: inputValue }, toHandlers(inputEvents)), null, 16, ["value"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "max-date"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      selectedNacimiento() ? (openBlock(), createElementBlock("p", _hoisted_76, toDisplayString(nacimientoMensaje.value), 1)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ], 32),
        createVNode(_component_VModal, {
          open: uploadModalOpen.value,
          title: "Sube tu foto",
          actions: "center",
          size: "small",
          onClose: _cache[16] || (_cache[16] = ($event) => uploadModalOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_77, [
              createBaseVNode("div", _hoisted_78, [
                createVNode(_component_VAvatar, {
                  size: "big",
                  picture: unref(imagen).dataUrl
                }, null, 8, ["picture"])
              ])
            ])
          ]),
          cancel: withCtx(() => [
            _hoisted_79
          ]),
          action: withCtx(() => [
            createVNode(_component_VField, { grouped: "" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_80, [
                      createBaseVNode("label", _hoisted_81, [
                        createBaseVNode("input", {
                          class: "file-input",
                          type: "file",
                          name: "resume",
                          onChange: _cache[13] || (_cache[13] = ($event) => previewImage($event))
                        }, null, 32),
                        _hoisted_82
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VButton, {
                      class: "upload-result",
                      size: "big",
                      outlined: "",
                      onKeydown: _cache[14] || (_cache[14] = withKeys(withModifiers(($event) => uploadModalOpen.value = false, ["prevent"]), ["space"])),
                      onClick: _cache[15] || (_cache[15] = ($event) => closeModal())
                    }, {
                      default: withCtx(() => [
                        _hoisted_83
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ]);
    };
  }
});
var VMessage_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "message-body" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    color: { default: void 0 },
    closable: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["message", [props.color && `is-${props.color}`]])
      }, [
        props.closable ? (openBlock(), createElementBlock("a", {
          key: 0,
          "aria-label": "Dismiss",
          class: "delete",
          tabindex: "0",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => emit("close"), ["prevent"]), ["space"])),
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("close"), ["prevent"]))
        }, null, 32)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_1$1, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = {
  key: 0,
  class: "page-content-inner"
};
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-12" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Mis Datos ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Morfologia ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Deportes ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Objetivo ");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Entrenadores ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Test ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Plan ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Completa el formulario de 7 pasos de bienvenida ");
const _hoisted_13 = {
  key: 0,
  class: "account-wrapper"
};
const _hoisted_14 = { class: "columns" };
const _hoisted_15 = { class: "column is-12" };
const _hoisted_16 = {
  key: 1,
  class: "account-wrapper"
};
const _hoisted_17 = { class: "columns" };
const _hoisted_18 = { class: "column is-12" };
const _hoisted_19 = {
  key: 2,
  class: "account-wrapper"
};
const _hoisted_20 = { class: "columns" };
const _hoisted_21 = { class: "column is-12" };
const _hoisted_22 = {
  key: 3,
  class: "account-wrapper"
};
const _hoisted_23 = { class: "columns" };
const _hoisted_24 = { class: "column is-12" };
const _hoisted_25 = {
  key: 4,
  class: "account-wrapper"
};
const _hoisted_26 = { class: "columns" };
const _hoisted_27 = { class: "column is-12" };
const _hoisted_28 = {
  key: 5,
  class: "account-wrapper"
};
const _hoisted_29 = { class: "columns" };
const _hoisted_30 = { class: "column is-12" };
const _hoisted_31 = {
  key: 6,
  class: "account-wrapper"
};
const _hoisted_32 = { class: "columns" };
const _hoisted_33 = { class: "column is-12" };
const _hoisted_34 = {
  key: 1,
  class: "page-content-inner"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  async setup(__props) {
    let __temp, __restore;
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Formulario Bienvenida");
    const autUser = ([__temp, __restore] = withAsyncContext(() => ID_AUTH_USER()), __temp = await __temp, __restore(), __temp);
    const estadoBienvenida = ref("");
    estadoBienvenida.value = ([__temp, __restore] = withAsyncContext(() => getEstadoBienvenida(autUser)), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Bienvenidos"
    });
    onMounted(async () => {
      onValue(ref$1(database, "users/" + autUser + "/bienvenida"), (snapshot) => {
        if (snapshot.exists()) {
          estadoBienvenida.value = snapshot.val();
        } else {
          estadoBienvenida.value = 7;
        }
      });
    });
    const estadoBienvenidaP = () => {
      let bienvenida = estadoBienvenida.value;
      bienvenida--;
      if (bienvenida == 6) {
        estadoBienvenida.value = 6;
      }
      updateBienvenida({ bienvenida: estadoBienvenida.value });
    };
    const estadoBienvenidaM = () => {
      let bienvenida = estadoBienvenida.value;
      bienvenida--;
      if (bienvenida == 5) {
        estadoBienvenida.value = 5;
      }
      updateBienvenida({ bienvenida: estadoBienvenida.value });
    };
    const estadoBienvenidaD = () => {
      let bienvenida = estadoBienvenida.value;
      bienvenida--;
      if (bienvenida == 4) {
        estadoBienvenida.value = 4;
      }
      updateBienvenida({ bienvenida: estadoBienvenida.value });
    };
    const estadoBienvenidaO = () => {
      let bienvenida = estadoBienvenida.value;
      bienvenida--;
      if (bienvenida == 3) {
        estadoBienvenida.value = 3;
      }
      updateBienvenida({ bienvenida: estadoBienvenida.value });
    };
    const estadoBienvenidaT = () => {
      let bienvenida = estadoBienvenida.value;
      bienvenida--;
      if (bienvenida == 1) {
        estadoBienvenida.value = 1;
      }
      updateBienvenida({ bienvenida: estadoBienvenida.value });
    };
    const estadoBienvenidaPlan = () => {
      let bienvenida = estadoBienvenida.value;
      bienvenida--;
      if (bienvenida == 0) {
        estadoBienvenida.value = 0;
      }
      updateBienvenida({ bienvenida: estadoBienvenida.value });
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$8;
      const _component_VButtons = _sfc_main$g;
      const _component_VMessage = _sfc_main$1;
      const _component_ProfileDeportista = _sfc_main$2;
      const _component_RouterView = resolveComponent("RouterView");
      const _component_Morfologia = _sfc_main$3;
      const _component_Deportes = _sfc_main$4;
      const _component_Objetivos = _sfc_main$h;
      const _component_Entrenadores = _sfc_main$i;
      const _component_Test = _sfc_main$5;
      const _component_Planes = _sfc_main$6;
      const _component_VPlaceholderPage = _sfc_main$j;
      return estadoBienvenida.value > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VButtons, null, {
                default: withCtx(() => [
                  createVNode(_component_VButton, { color: "info" }, {
                    default: withCtx(() => [
                      _hoisted_5
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VButton, {
                    disabled: estadoBienvenida.value > 6,
                    color: "info"
                  }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(_component_VButton, {
                    disabled: estadoBienvenida.value > 5,
                    color: "info"
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(_component_VButton, {
                    disabled: estadoBienvenida.value > 4,
                    color: "info"
                  }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(_component_VButton, {
                    disabled: estadoBienvenida.value > 3,
                    color: "info"
                  }, {
                    default: withCtx(() => [
                      _hoisted_9
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(_component_VButton, {
                    disabled: estadoBienvenida.value > 2,
                    color: "info"
                  }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(_component_VButton, {
                    disabled: estadoBienvenida.value > 1,
                    color: "info"
                  }, {
                    default: withCtx(() => [
                      _hoisted_11
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              }),
              createVNode(_component_VMessage, { color: "warning" }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ])
        ]),
        estadoBienvenida.value === 7 ? (openBlock(), createElementBlock("div", _hoisted_13, [
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("div", _hoisted_15, [
              createVNode(_component_RouterView, null, {
                default: withCtx(() => [
                  createVNode(Transition, {
                    name: "translate-page-y",
                    mode: "in-out"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ProfileDeportista, { onUpdate: estadoBienvenidaP })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ])) : createCommentVNode("", true),
        estadoBienvenida.value === 6 ? (openBlock(), createElementBlock("div", _hoisted_16, [
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("div", _hoisted_18, [
              createVNode(_component_RouterView, null, {
                default: withCtx(() => [
                  createVNode(Transition, {
                    name: "translate-page-y",
                    mode: "in-out"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Morfologia, { onUpdate: estadoBienvenidaM })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ])) : createCommentVNode("", true),
        estadoBienvenida.value === 5 ? (openBlock(), createElementBlock("div", _hoisted_19, [
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("div", _hoisted_21, [
              createVNode(_component_RouterView, null, {
                default: withCtx(() => [
                  createVNode(Transition, {
                    name: "translate-page-y",
                    mode: "in-out"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Deportes, { onUpdate: estadoBienvenidaD })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ])) : createCommentVNode("", true),
        estadoBienvenida.value === 4 ? (openBlock(), createElementBlock("div", _hoisted_22, [
          createBaseVNode("div", _hoisted_23, [
            createBaseVNode("div", _hoisted_24, [
              createVNode(_component_RouterView, null, {
                default: withCtx(() => [
                  createVNode(Transition, {
                    name: "translate-page-y",
                    mode: "in-out"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Objetivos, { onUpdate: estadoBienvenidaO })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ])) : createCommentVNode("", true),
        estadoBienvenida.value === 3 ? (openBlock(), createElementBlock("div", _hoisted_25, [
          createBaseVNode("div", _hoisted_26, [
            createBaseVNode("div", _hoisted_27, [
              createVNode(_component_RouterView, null, {
                default: withCtx(() => [
                  createVNode(Transition, {
                    name: "translate-page-y",
                    mode: "in-out"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Entrenadores)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ])) : createCommentVNode("", true),
        estadoBienvenida.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_28, [
          createBaseVNode("div", _hoisted_29, [
            createBaseVNode("div", _hoisted_30, [
              createVNode(_component_RouterView, null, {
                default: withCtx(() => [
                  createVNode(Transition, {
                    name: "translate-page-y",
                    mode: "in-out"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Test, { onUpdate: estadoBienvenidaT })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ])) : createCommentVNode("", true),
        estadoBienvenida.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_31, [
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("div", _hoisted_33, [
              createVNode(_component_RouterView, null, {
                default: withCtx(() => [
                  createVNode(Transition, {
                    name: "translate-page-y",
                    mode: "in-out"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Planes, { onUpdate: estadoBienvenidaPlan })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ])) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("div", _hoisted_34, [
        createVNode(_component_VPlaceholderPage, {
          title: "Ya completaste los pasos de bienvenida",
          subtitle: "Este proceso solo se realiza una vez.",
          larger: ""
        })
      ]));
    };
  }
});
export { _sfc_main as default };
