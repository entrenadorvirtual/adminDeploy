import { _ as _sfc_main$n } from "./VPlaceholderPage.7bdd20c5.js";
import { _ as _sfc_main$7 } from "./VLoader.78aa7f99.js";
import { y as defineComponent, a as useUserSession, z as ref, r as reactive, N as onBeforeMount, p as resolveComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, f as createBlock, t as toDisplayString, D as unref, l as createCommentVNode, a3 as resolveDynamicComponent, F as Fragment, a0 as createStaticVNode, O as _sfc_main$6, az as useWindowScroll, e as computed, A as onMounted, Q as withKeys, v as withModifiers, k as normalizeClass, m as createTextVNode, ay as resolveDirective, Y as withDirectives, x as mergeProps, aE as toHandlers, s as renderList, ap as withAsyncContext, C as watch, P as useHead, T as Transition, al as _sfc_main$j } from "./index.a7fc5dec.js";
import { d as getDatosDeportista, h as updateSemicooper, g as getSemicooper, b as getDeportes, i as updateDeportes, a as getMorfologiaDeportista, j as updateMorfologia, k as updateZonas, l as updateDatosDeportista, m as getPaises, n as getCiudades, o as getEstadoBienvenida, u as updateBienvenida } from "./deportista.892d7693.js";
import { g as getPlanesR } from "./epayco.7c4bd773.js";
import { c as useForm, _ as _sfc_main$8, a as __unplugin_components_2, b as _sfc_main$a } from "./VControl.4d17fa85.js";
import { _ as _sfc_main$9 } from "./VInput.5920a8ca.js";
import { u as useNotyf } from "./useNotyf.ce7ee7f1.js";
import { s as sleep } from "./sleep.2a252ff4.js";
import { t as toFormValidator, z } from "./vee-validate-zod.esm.9452dbca.js";
import { _ as _sfc_main$m } from "./Entrenadores.2b630766.js";
import { _ as _sfc_main$l } from "./Objetivos.0199b554.js";
import { _ as _sfc_main$c } from "./VIconButton.336a029e.js";
import { _ as _sfc_main$b } from "./VCheckbox.9c48ffd8.js";
import { _ as _sfc_main$g } from "./VFlex.122176e5.js";
import { _ as _sfc_main$f } from "./VFlexItem.a5d61664.js";
import { _ as _sfc_main$d, a as _sfc_main$e } from "./VOption.ee07ba1d.js";
import { o, a, _ as _sfc_main$k } from "./convert.prod.1f5d8f54.js";
import { O as OBTENER_DOCUMENTO_REALTIME } from "./main.cf1f8e20.js";
import { b as buildRitmo } from "./general.8b156443.js";
import { _ as _sfc_main$i } from "./VModal.6ca1fc6c.js";
import { _ as _sfc_main$h } from "./VAvatar.39b9c3a4.js";
import { a as addPicture, p as preview } from "./managePictures.df5702c9.js";
import { e as onValue, r as ref$1, d as database } from "./config.0fd79a34.js";
import { I as ID_AUTH_USER } from "./auth.12bba30e.js";
import { u as useViewWrapper } from "./viewWrapper.0c20b402.js";
import "./notyf.es.f84e4201.js";
import "./VFlexTable.d8d849dc.js";
import "./ModalCancelar.1054c0b2.js";
import "./match.1a597960.js";
import "./VTags.f6fc10e1.js";
import "./VTag.e06822ec.js";
import "./entrenador.6ead06d4.js";
import "./VSwitchBlock.7afcfb92.js";
import "./VTextarea.9eda26d4.js";
import "./administracion.b83e2e82.js";
var valorPlanes = /* @__PURE__ */ ((valorPlanes2) => {
  valorPlanes2[valorPlanes2["PLATA"] = 1e4] = "PLATA";
  valorPlanes2[valorPlanes2["ORO"] = 10500] = "ORO";
  valorPlanes2[valorPlanes2["PLATINO"] = 11e3] = "PLATINO";
  valorPlanes2[valorPlanes2["DIAMANTE"] = 11500] = "DIAMANTE";
  return valorPlanes2;
})(valorPlanes || {});
var Planes_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$5 = { class: "columns is-multiline" };
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
const _hoisted_54$3 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_55$3 = { key: 3 };
const _hoisted_56$3 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_57$3 = { key: 5 };
const _hoisted_58$3 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_59$3 = { key: 7 };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  setup(__props, { emit }) {
    const userSession = useUserSession();
    const planesDisponibles = ref([]);
    const isLoaderActive = ref(false);
    const url = {}.VITE_APP_URL_SITE;
    const ePaycoKey = {}.VITE_APP_PUBLIC_KEY_EPAYCO;
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
      const _component_VButton = _sfc_main$6;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VLoader = _sfc_main$7;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$5, [
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
                  _hoisted_54$3,
                  createBaseVNode("label", null, toDisplayString(unref(planesData).oro.valor), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          !datosDeportista.value.pagoRecurrente ? (openBlock(), createElementBlock("form", _hoisted_55$3, [
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
                  _hoisted_56$3,
                  createBaseVNode("label", null, toDisplayString(unref(planesData).platino.valor), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          !datosDeportista.value.pagoRecurrente ? (openBlock(), createElementBlock("form", _hoisted_57$3, [
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
                  _hoisted_58$3,
                  createBaseVNode("label", null, toDisplayString(unref(planesData).diamante.valor), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          !datosDeportista.value.pagoRecurrente ? (openBlock(), createElementBlock("form", _hoisted_59$3, [
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
const _hoisted_1$4 = { class: "account-box is-form is-footerless" };
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
    const validationSchema = toFormValidator(
      z.object({
        semicooper: z.string({
          required_error: "Este campo es requerido",
          invalid_type_error: "tipo de dato invalido"
        }).min(4, "Escribe minimo 4 digitos")
      })
    );
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
      const _component_VButton = _sfc_main$6;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$8;
      const _component_VInput = _sfc_main$9;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$a;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
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
const _hoisted_1$3 = { class: "page-content-inner" };
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
const _hoisted_54$2 = {
  key: 0,
  class: "column is-12"
};
const _hoisted_55$2 = /* @__PURE__ */ createBaseVNode("p", null, "Otro deporte", -1);
const _hoisted_56$2 = { class: "column is-6" };
const _hoisted_57$2 = { class: "account-box is-navigation" };
const _hoisted_58$2 = /* @__PURE__ */ createTextVNode(" A\xF1adir Lesion");
const _hoisted_59$2 = { class: "form-body" };
const _hoisted_60$2 = { class: "fieldset" };
const _hoisted_61$2 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Lesiones:")
], -1);
const _hoisted_62$2 = { class: "columns is-multiline" };
const _hoisted_63$2 = { class: "column is-6" };
const _hoisted_64$2 = /* @__PURE__ */ createBaseVNode("p", null, "Zona", -1);
const _hoisted_65$2 = { class: "column is-6" };
const _hoisted_66$2 = /* @__PURE__ */ createBaseVNode("p", null, "Tratamiento", -1);
const _hoisted_67$2 = { class: "column is-6" };
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
const _hoisted_84$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Duracion")
], -1);
const _hoisted_85$1 = { for: "zoa" };
const _hoisted_86$1 = { class: "mx-2" };
const _hoisted_87$1 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Actualmente la tiene")
], -1);
const _hoisted_88$1 = { for: "zoa" };
const _hoisted_89$1 = { class: "colmuns" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
      const _component_VButton = _sfc_main$6;
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$8;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$a;
      const _component_VCheckbox = _sfc_main$b;
      const _component_VInput = _sfc_main$9;
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_VIconButton = _sfc_main$c;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
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
                        unref(datosDeportes).otros.otro ? (openBlock(), createElementBlock("div", _hoisted_54$2, [
                          _hoisted_55$2,
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
            createBaseVNode("div", _hoisted_56$2, [
              createBaseVNode("div", _hoisted_57$2, [
                createBaseVNode("div", null, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    outlined: "",
                    onClick: addLesion
                  }, {
                    default: withCtx(() => [
                      _hoisted_58$2
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_59$2, [
                  createBaseVNode("div", _hoisted_60$2, [
                    _hoisted_61$2,
                    createBaseVNode("div", _hoisted_62$2, [
                      createBaseVNode("div", _hoisted_63$2, [
                        _hoisted_64$2,
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
                      createBaseVNode("div", _hoisted_65$2, [
                        _hoisted_66$2,
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
                      createBaseVNode("div", _hoisted_67$2, [
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
                      _hoisted_84$1,
                      createBaseVNode("label", _hoisted_85$1, toDisplayString(lesion.duracion), 1)
                    ]),
                    createBaseVNode("div", _hoisted_86$1, [
                      _hoisted_87$1,
                      createBaseVNode("label", _hoisted_88$1, toDisplayString(lesion.actual), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_89$1, [
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
var _imports_0 = "/assets/estomorfico.81277f6d.png";
var _imports_1 = "/assets/mesomorfico.a9ffc0c3.png";
var _imports_2 = "/assets/endomorfico.16818ffc.png";
const _hoisted_1$2 = { class: "account-box is-form is-footerless" };
const _hoisted_2$2 = ["onSubmit"];
const _hoisted_3$2 = { class: "form-head-inner" };
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Morfolog\xEDa")
], -1);
const _hoisted_5$2 = { class: "right" };
const _hoisted_6$2 = { class: "buttons" };
const _hoisted_7$2 = /* @__PURE__ */ createTextVNode(" Guardar ");
const _hoisted_8$2 = { class: "p-6" };
const _hoisted_9$2 = { class: "fieldset" };
const _hoisted_10$2 = { class: "fieldset-heading" };
const _hoisted_11$2 = /* @__PURE__ */ createTextVNode("Los campos con ");
const _hoisted_12$2 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_13$2 = /* @__PURE__ */ createTextVNode(" son obligatorios");
const _hoisted_14$2 = { class: "columns is-multiline is-desktop is-mobile" };
const _hoisted_15$2 = { class: "column is-7-desktop is-12-mobile is-8-tablet" };
const _hoisted_16$2 = { class: "columns is-multiline is-desktop is-mobile" };
const _hoisted_17$2 = { class: "column is-6" };
const _hoisted_18$2 = /* @__PURE__ */ createTextVNode(" Estatura(cm)");
const _hoisted_19$2 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_20$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_21$2 = /* @__PURE__ */ createTextVNode(" En cent\xEDmetros ");
const _hoisted_22$2 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_23$2 = { class: "column is-6" };
const _hoisted_24$2 = /* @__PURE__ */ createTextVNode(" Peso (Kg) ");
const _hoisted_25$2 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_26$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_27$2 = /* @__PURE__ */ createTextVNode(" En Kilogramos ");
const _hoisted_28$2 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_29$2 = { class: "column is-6" };
const _hoisted_30$2 = /* @__PURE__ */ createTextVNode(" Grasa ");
const _hoisted_31$2 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_32$2 = /* @__PURE__ */ createTextVNode(" Medida para distinguir la grasa del m\xFAsculo, ideal mujer 20-30%, ideal hombre 10-20% ");
const _hoisted_33$2 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_34$2 = { class: "column is-6" };
const _hoisted_35$1 = /* @__PURE__ */ createTextVNode(" Somatotipo ");
const _hoisted_36$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_37$1 = /* @__PURE__ */ createTextVNode(" Hace referencia a tu forma corporal. Ectomorfo: Delgado, metabolismo r\xE1pido. Mesomorfo: Robusto, metabolismo normal. Endomorfo: Acumulas grasa, metabolismo lento. ");
const _hoisted_38$1 = /* @__PURE__ */ createTextVNode("Selecione Uno");
const _hoisted_39$1 = { class: "column is-6" };
const _hoisted_40$1 = /* @__PURE__ */ createTextVNode(" Frecuencia M\xEDnima ");
const _hoisted_41$1 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_42$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_43$1 = /* @__PURE__ */ createTextVNode(" Pulsaciones de tu coraz\xF3n cuando te despiertas ");
const _hoisted_44$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_45$1 = { class: "column is-6" };
const _hoisted_46$1 = /* @__PURE__ */ createTextVNode(" Frecuencia M\xE1xima ");
const _hoisted_47$1 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_48$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_49$1 = /* @__PURE__ */ createTextVNode(" M\xE1ximas pulsaciones de tu coraz\xF3n, si no sabes puedes poner 220 - tu edad ");
const _hoisted_50$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_51$1 = { class: "column is-5-desktop is-12-mobile is-4-tablet" };
const _hoisted_52$1 = { class: "columns is-multiline is-desktop is-mobile is-centered" };
const _hoisted_53$1 = { class: "column is-half-desktop is-half-mobile" };
const _hoisted_54$1 = {
  key: 0,
  class: "img-small",
  src: _imports_0,
  alt: "mesomorfico"
};
const _hoisted_55$1 = {
  key: 1,
  class: "img-small",
  src: _imports_1,
  alt: "mesomorfico"
};
const _hoisted_56$1 = {
  key: 2,
  class: "img-small",
  src: _imports_2,
  alt: "mesomorfico"
};
const _hoisted_57$1 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_58$1 = { class: "fieldset" };
const _hoisted_59$1 = { class: "fieldset-heading" };
const _hoisted_60$1 = { class: "columns is-multiline is-desktop" };
const _hoisted_61$1 = { class: "column is-9" };
const _hoisted_62$1 = /* @__PURE__ */ createTextVNode(" Marcas Personales ");
const _hoisted_63$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_64$1 = /* @__PURE__ */ createTextVNode(" Tus mejores registros en cada distancia ");
const _hoisted_65$1 = { class: "columns is-multiline" };
const _hoisted_66$1 = { class: "column is-2" };
const _hoisted_67$1 = /* @__PURE__ */ createTextVNode(" Distancia ");
const _hoisted_68 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_69 = /* @__PURE__ */ createTextVNode("Selecione Uno");
const _hoisted_70 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_71 = { class: "column is-3" };
const _hoisted_72 = {
  raw: "",
  class: "auth-label"
};
const _hoisted_73 = /* @__PURE__ */ createTextVNode(" Tiempo Marca ");
const _hoisted_74 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_75 = { class: "columns is-multiline" };
const _hoisted_76 = { class: "column is-4" };
const _hoisted_77 = /* @__PURE__ */ createTextVNode(" Horas ");
const _hoisted_78 = { class: "column is-4" };
const _hoisted_79 = /* @__PURE__ */ createTextVNode(" Minutos ");
const _hoisted_80 = { class: "column is-4" };
const _hoisted_81 = /* @__PURE__ */ createTextVNode(" Segundos ");
const _hoisted_82 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_83 = { class: "column is-2" };
const _hoisted_84 = /* @__PURE__ */ createTextVNode(" Fecha ");
const _hoisted_85 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_86 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_87 = { class: "column is-1" };
const _hoisted_88 = /* @__PURE__ */ createTextVNode(" Ritmo ");
const _hoisted_89 = { class: "column is-2" };
const _hoisted_90 = /* @__PURE__ */ createTextVNode(" FC Promedio");
const _hoisted_91 = {
  class: "column is-2",
  style: { "margin": "auto" }
};
const _hoisted_92 = /* @__PURE__ */ createTextVNode(" A\xF1adir Marca ");
const _hoisted_93 = {
  key: 0,
  class: "columns is-multiline"
};
const _hoisted_94 = { class: "column is-2" };
const _hoisted_95 = /* @__PURE__ */ createTextVNode(" Distancia ");
const _hoisted_96 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_97 = { class: "column is-2" };
const _hoisted_98 = /* @__PURE__ */ createTextVNode(" Unidad ");
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-6" }, [
  /* @__PURE__ */ createBaseVNode("h1", null, [
    /* @__PURE__ */ createBaseVNode("u", null, "Marcas Registradas")
  ])
], -1);
const _hoisted_100 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_101 = { class: "mx-2" };
const _hoisted_102 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Distancia")
], -1);
const _hoisted_103 = { for: "marca" };
const _hoisted_104 = { class: "mx-2" };
const _hoisted_105 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Tiempo Marca")
], -1);
const _hoisted_106 = { for: "marca" };
const _hoisted_107 = { class: "mx-2" };
const _hoisted_108 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Fecha")
], -1);
const _hoisted_109 = { for: "marca" };
const _hoisted_110 = { class: "mx-2" };
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "Ritmo")
], -1);
const _hoisted_112 = { for: "marca" };
const _hoisted_113 = { class: "mx-2" };
const _hoisted_114 = /* @__PURE__ */ createBaseVNode("h1", null, [
  /* @__PURE__ */ createBaseVNode("u", null, "FC Promedio")
], -1);
const _hoisted_115 = { for: "marca" };
const _hoisted_116 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_117 = { class: "fieldset-heading" };
const _hoisted_118 = /* @__PURE__ */ createTextVNode(" Per\xEDmetros ");
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_120 = /* @__PURE__ */ createTextVNode(" En cent\xEDmetros para cada contorno ");
const _hoisted_121 = { class: "columns is-0 is-multiline is-desktop is-mobile is-centered" };
const _hoisted_122 = { class: "column is-6" };
const _hoisted_123 = { class: "columns is-multiline" };
const _hoisted_124 = { class: "column is-3" };
const _hoisted_125 = /* @__PURE__ */ createTextVNode(" Cintura ");
const _hoisted_126 = { class: "column is-5" };
const _hoisted_127 = { class: "column is-4" };
const _hoisted_128 = { class: "column is-3" };
const _hoisted_129 = /* @__PURE__ */ createTextVNode(" Brazo ");
const _hoisted_130 = { class: "column is-5" };
const _hoisted_131 = { class: "column is-4" };
const _hoisted_132 = { class: "column is-3" };
const _hoisted_133 = /* @__PURE__ */ createTextVNode(" Muslo Medio ");
const _hoisted_134 = { class: "column is-5" };
const _hoisted_135 = { class: "column is-4" };
const _hoisted_136 = { class: "column is-3" };
const _hoisted_137 = /* @__PURE__ */ createTextVNode(" Pantorrilla ");
const _hoisted_138 = { class: "column is-5" };
const _hoisted_139 = { class: "column is-4" };
const _hoisted_140 = { class: "column is-3" };
const _hoisted_141 = /* @__PURE__ */ createTextVNode(" Pecho ");
const _hoisted_142 = { class: "column is-5" };
const _hoisted_143 = { class: "column is-4" };
const _hoisted_144 = { class: "column is-3" };
const _hoisted_145 = /* @__PURE__ */ createTextVNode(" Hombros ");
const _hoisted_146 = { class: "column is-5" };
const _hoisted_147 = { class: "column is-4" };
const _hoisted_148 = { class: "column is-3" };
const _hoisted_149 = /* @__PURE__ */ createTextVNode(" Gl\xFAteos ");
const _hoisted_150 = { class: "column is-5" };
const _hoisted_151 = { class: "column is-4" };
const _hoisted_152 = /* @__PURE__ */ createTextVNode(" Guardar ");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  emits: ["update"],
  async setup(__props, { emit }) {
    let __temp, __restore;
    const regexGrasa = /^((50(\.0{1,2})?)|([4-9](\.\d{1,2})?)|([1-4][0-9](\.\d{1,2})?))?$/;
    const regexOtraDistancia = /^[1-9]\d*(\.\d+)?$/;
    const userSession = useUserSession();
    const distanciaRef = ref(null);
    const miUnidadRef = ref(null);
    const isLoading = ref(false);
    const showMsEstatura = ref(false);
    const showMsPeso = ref(false);
    const showMsGrasa = ref(false);
    const showMsFMin = ref(false);
    const showMsFMax = ref(false);
    const showMsDistancia = ref(false);
    const showMsTiempo = ref(false);
    const showMsFecha = ref(false);
    const shMsOtDistancia = ref(false);
    const notyf = useNotyf();
    const { y } = useWindowScroll();
    const somatipos = ["Ectomorfo", "Mesomorfo", "Endomorfo"];
    const categorias = ([__temp, __restore] = withAsyncContext(() => OBTENER_DOCUMENTO_REALTIME("Distancias")), __temp = await __temp, __restore(), __temp);
    const unidades = { km: "kilometers", m: "meters" };
    const dm = reactive({
      estatura: "",
      peso: "",
      grasa: "",
      imc: "",
      medida_brazo: "",
      medida_cintura: "",
      medida_hombros: "",
      medida_muslo: "",
      medida_pantorrilla: "",
      medida_pecho: "",
      medida_gluteos: "",
      fecha_brazo: "",
      fecha_cintura: "",
      fecha_hombros: "",
      fecha_muslo: "",
      fecha_pantorrilla: "",
      fecha_pecho: "",
      fecha_gluteos: "",
      somatipo: "",
      FCmin: "",
      FCmax: ""
    });
    const ds = reactive({
      VAM: "",
      VAM_decimal: "",
      semicooper: "",
      marcas: []
    });
    const inputDistancia = ref(0);
    const timeH = ref(0);
    const timeM = ref(0);
    const timeS = ref(0);
    const inputFecha = ref(null);
    const inputRitmo = ref("0");
    const inputFCprom = ref("");
    const otraDistancia = ref("");
    const unidadDistancia = ref(Object.values(unidades)[0]);
    const estaturaMensaje = '"Digita un valor entre 80 a 220"';
    const pesoMensaje = '"Digita un valor mayor a 30"';
    const grasaMensaje = '"Digita un valor de 4 a 50"';
    const minMensaje = '"Digita un valor entre 35 a 80"';
    const maxMensaje = '"Digita un valor entre 150 a 220"';
    const distanciaMensaje = '"Seleccione la distancia"';
    const tiempoMensaje = '"Registre el tiempo"';
    const fechaMensaje = '"Escoge una fecha"';
    const otraDistMensaje = '"Digite la distancia"';
    const isScrolling = computed(() => {
      return y.value > 40;
    });
    const returnZ = (variable, FCMX, FCMN) => {
      const maxi = Number(FCMX);
      const mini = Number(FCMN);
      const resta = maxi - mini;
      const multi = variable * resta;
      const result = multi + mini;
      const redondear = Math.round(result);
      return redondear;
    };
    const getRitmo = () => {
      const hora = timeH.value === "" ? setHoras(0) : setHoras(Math.trunc(timeH.value));
      const min = timeM.value === "" ? setMinutos(0) : setMinutos(Math.trunc(timeM.value));
      const seg = timeS.value === "" ? setSegundos(0) : setSegundos(Math.trunc(timeS.value));
      const tiempoMinutos = o(hora + "h " + min + "min " + seg + "s").to("minutes");
      switch (inputDistancia.value) {
        case "otro":
          const miDistancia = a(Number(otraDistancia.value), unidadDistancia.value).to(
            "km"
          );
          var calculo = otraDistancia.value != "" ? tiempoMinutos / miDistancia : 0;
          inputRitmo.value = buildRitmo(calculo);
          return inputRitmo.value;
        default:
          var calculo = inputDistancia.value != 0 ? tiempoMinutos / inputDistancia.value : 0;
          inputRitmo.value = buildRitmo(calculo);
          return inputRitmo.value;
      }
    };
    const setHoras = (horas) => {
      timeH.value = horas;
      return timeH.value;
    };
    const setMinutos = (minutos) => {
      timeM.value = minutos;
      return timeM.value;
    };
    const setSegundos = (segundos) => {
      timeS.value = segundos;
      return timeS.value;
    };
    const formatearFecha = (date) => {
      const fecha = new Date(date);
      const day = fecha.getDate();
      const month = fecha.getMonth() + 1;
      const anio = fecha.getFullYear();
      return day + "/" + month + "/" + anio;
    };
    const returnFcMax = () => {
      dm.FCmax = dm.FCmax.replace(/[.,]/, "", "gi");
      return dm.FCmax;
    };
    const returnFcMin = () => {
      dm.FCmin = dm.FCmin.replace(/[.,]/, "", "gi");
      return dm.FCmin;
    };
    const returnEstatura = () => {
      dm.estatura = dm.estatura.replace(/[.,]/, "", "gi");
      return dm.estatura;
    };
    const returnPeso = () => {
      dm.peso = dm.peso.replace(",", ".");
      return dm.peso;
    };
    const returnDistancia = () => {
      otraDistancia.value = otraDistancia.value.replace(",", ".");
      return otraDistancia.value;
    };
    const returnGrasa = () => {
      dm.grasa = dm.grasa.replace(",", ".");
      return dm.grasa;
    };
    const addMarca = () => {
      showMsDistancia.value = inputDistancia.value == 0 ? true : false;
      showMsTiempo.value = timeH.value == 0 && timeM.value == 0 && timeS.value == 0 ? true : false;
      showMsFecha.value = inputFecha.value == null ? true : false;
      switch (inputDistancia.value) {
        case "otro":
          shMsOtDistancia.value = regexOtraDistancia.test(otraDistancia.value) ? false : true;
          if (!shMsOtDistancia.value && !showMsTiempo.value && !showMsFecha.value) {
            const refUnidad = miUnidadRef.value.reference;
            const miUnidad = refUnidad.options[refUnidad.selectedIndex].text;
            const miDistancia = otraDistancia.value + miUnidad;
            adicionarMarca(miDistancia);
          }
          break;
        default:
          if (!showMsDistancia.value && !showMsTiempo.value && !showMsFecha.value) {
            const referencia = distanciaRef.value.reference;
            const distancia = referencia.options[referencia.selectedIndex].text;
            adicionarMarca(distancia);
            break;
          }
      }
    };
    const adicionarMarca = (distancia) => {
      ds.marcas.push({
        distancia,
        tiempoH: timeH.value,
        tiempoM: timeM.value,
        tiempoS: timeS.value,
        fecha: inputFecha.value,
        ritmo: inputRitmo.value,
        fcProm: inputFCprom.value
      });
      inputDistancia.value = 0;
      timeH.value = 0;
      timeM.value = 0;
      timeS.value = 0;
      inputFecha.value = null;
      inputRitmo.value = "";
      inputFCprom.value = "";
    };
    const eliminarMarca = (marca) => {
      ds.marcas.splice(marca, 1);
    };
    const onSave = async () => {
      isLoading.value = true;
      await sleep(750);
      showMsGrasa.value = regexGrasa.test(dm.grasa) ? false : true;
      showMsEstatura.value = Number(dm.estatura) < 80 || Number(dm.estatura) > 220 || isNaN(Number(dm.estatura)) || dm.estatura.substring(0, 1) == 0 ? true : false;
      showMsPeso.value = Number(dm.peso) <= 30 || dm.peso.substring(0, 1) == 0 || isNaN(Number(dm.peso)) ? true : false;
      showMsFMin.value = Number(dm.FCmin) < 35 || Number(dm.FCmin) > 80 || isNaN(Number(dm.FCmin)) || dm.FCmin.substring(0, 1) == 0 ? true : false;
      showMsFMax.value = Number(dm.FCmax) < 150 || Number(dm.FCmax) > 220 || isNaN(Number(dm.FCmax)) || dm.FCmax.substring(0, 1) == 0 ? true : false;
      if (!showMsEstatura.value && !showMsPeso.value && !showMsGrasa.value && !showMsFMin.value && !showMsFMax.value) {
        await updateMorfologia(userSession.userId, dm);
        await updateSemicooper(userSession.userId, ds);
        await updateZonas(userSession.userId, Zonas.value);
        emit("update");
        notyf.success("\xA1Sus cambios han sido guardados con \xE9xito!");
        await sleep(750);
      }
      isLoading.value = false;
    };
    onMounted(async () => {
      const datos = await getMorfologiaDeportista(userSession.userId);
      const datosS = await getSemicooper(userSession.userId);
      dm.estatura = (datos == null ? void 0 : datos.estatura) || "";
      dm.peso = (datos == null ? void 0 : datos.peso) || "";
      dm.grasa = (datos == null ? void 0 : datos.grasa) || "";
      dm.imc = (datos == null ? void 0 : datos.IMC) || "";
      dm.medida_brazo = (datos == null ? void 0 : datos.medida_brazo) || "";
      dm.medida_cintura = (datos == null ? void 0 : datos.medida_cintura) || "";
      dm.medida_hombros = datos == null ? void 0 : datos.medida_hombros;
      dm.medida_muslo = datos == null ? void 0 : datos.medida_muslo;
      dm.medida_pantorrilla = (datos == null ? void 0 : datos.medida_pantorrilla) || "";
      dm.medida_pecho = (datos == null ? void 0 : datos.medida_pecho) || "";
      dm.medida_gluteos = (datos == null ? void 0 : datos.medida_gluteos) || "";
      dm.fecha_brazo = (datos == null ? void 0 : datos.fecha_brazo) || "";
      dm.fecha_cintura = (datos == null ? void 0 : datos.fecha_cintura) || "";
      dm.fecha_hombros = (datos == null ? void 0 : datos.fecha_hombros) || "";
      dm.fecha_muslo = (datos == null ? void 0 : datos.fecha_muslo) || "";
      dm.fecha_pantorrilla = (datos == null ? void 0 : datos.fecha_pantorrilla) || "";
      dm.fecha_pecho = (datos == null ? void 0 : datos.fecha_pecho) || "";
      dm.fecha_gluteos = (datos == null ? void 0 : datos.fecha_gluteos) || "";
      dm.somatipo = (datos == null ? void 0 : datos.somatipo) || "";
      dm.FCmin = (datos == null ? void 0 : datos.FCmin) || "";
      dm.FCmax = (datos == null ? void 0 : datos.FCmax) || "";
      ds.VAM = (datosS == null ? void 0 : datosS.VAM) || "";
      ds.VAM_decimal = (datosS == null ? void 0 : datosS.VAM_decimal) || "";
      ds.semicooper = (datosS == null ? void 0 : datosS.semicooper) || "";
      ds.marcas = (datosS == null ? void 0 : datosS.marcas) || [];
    });
    const Zonas = ref({});
    watch([() => dm.FCmin, () => dm.FCmax], ([newMin, newMax]) => {
      if (newMin != "" && newMax != "") {
        Zonas.value.z1min = returnZ(0.5, newMax, newMin);
        Zonas.value.z1max = returnZ(0.6, newMax, newMin);
        Zonas.value.z2min = returnZ(0.6, newMax, newMin) + 1;
        Zonas.value.z2max = returnZ(0.7, newMax, newMin);
        Zonas.value.z3min = returnZ(0.7, newMax, newMin) + 1;
        Zonas.value.z3max = returnZ(0.8, newMax, newMin);
        Zonas.value.z4min = returnZ(0.8, newMax, newMin) + 1;
        Zonas.value.z4max = returnZ(0.9, newMax, newMin);
        Zonas.value.z5min = returnZ(0.9, newMax, newMin) + 1;
        Zonas.value.z5max = Number(newMax);
      }
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$6;
      const _component_font = resolveComponent("font");
      const _component_Tippy = resolveComponent("Tippy");
      const _component_VLabel = _sfc_main$8;
      const _component_VInput = _sfc_main$9;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$a;
      const _component_VOption = _sfc_main$d;
      const _component_VSelect = _sfc_main$e;
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_VIconButton = _sfc_main$c;
      const _component_VFlexItem = _sfc_main$f;
      const _component_VFlex = _sfc_main$g;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("form", {
          action: "signup-form",
          onSubmit: withModifiers(onSave, ["prevent"])
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
          }, [
            createBaseVNode("div", _hoisted_3$2, [
              _hoisted_4$2,
              createBaseVNode("div", _hoisted_5$2, [
                createBaseVNode("div", _hoisted_6$2, [
                  createVNode(_component_VButton, {
                    icon: "fas fa-check",
                    color: "primary",
                    raised: "",
                    loading: isLoading.value,
                    tabindex: "0",
                    type: "submit"
                  }, {
                    default: withCtx(() => [
                      _hoisted_7$2
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_8$2, [
            createBaseVNode("div", _hoisted_9$2, [
              createBaseVNode("div", _hoisted_10$2, [
                createBaseVNode("p", null, [
                  _hoisted_11$2,
                  createVNode(_component_font, {
                    size: "4",
                    color: "red"
                  }, {
                    default: withCtx(() => [
                      _hoisted_12$2
                    ]),
                    _: 1
                  }),
                  _hoisted_13$2
                ])
              ]),
              createBaseVNode("div", _hoisted_14$2, [
                createBaseVNode("div", _hoisted_15$2, [
                  createBaseVNode("div", _hoisted_16$2, [
                    createBaseVNode("div", _hoisted_17$2, [
                      createVNode(_component_VField, { id: "estatura" }, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_18$2,
                              createVNode(_component_font, {
                                size: "4",
                                color: "red"
                              }, {
                                default: withCtx(() => [
                                  _hoisted_19$2
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Tippy, null, {
                                content: withCtx(() => [
                                  _hoisted_21$2
                                ]),
                                default: withCtx(() => [
                                  _hoisted_20$2
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "lnir lnir-ruler" }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: unref(dm).estatura,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(dm).estatura = $event),
                                class: normalizeClass(showMsEstatura.value ? "fieldRequired" : ""),
                                value: returnEstatura(),
                                type: "text",
                                placeholder: "Estatura",
                                autocomplete: "estatura"
                              }, null, 8, ["modelValue", "class", "value"]),
                              showMsEstatura.value ? (openBlock(), createElementBlock("p", _hoisted_22$2, toDisplayString(estaturaMensaje))) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_23$2, [
                      createVNode(_component_VField, { id: "peso" }, {
                        default: withCtx(() => [
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
                              createVNode(_component_Tippy, null, {
                                content: withCtx(() => [
                                  _hoisted_27$2
                                ]),
                                default: withCtx(() => [
                                  _hoisted_26$2
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "lnir lnir-weight" }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: unref(dm).peso,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(dm).peso = $event),
                                class: normalizeClass(showMsPeso.value ? "fieldRequired" : ""),
                                value: returnPeso(),
                                type: "text",
                                placeholder: "Peso",
                                autocomplete: "peso"
                              }, null, 8, ["modelValue", "class", "value"]),
                              showMsPeso.value ? (openBlock(), createElementBlock("p", _hoisted_28$2, toDisplayString(pesoMensaje))) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_29$2, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_30$2,
                              createVNode(_component_font, {
                                size: "4",
                                color: "red"
                              }),
                              createVNode(_component_Tippy, null, {
                                content: withCtx(() => [
                                  _hoisted_32$2
                                ]),
                                default: withCtx(() => [
                                  _hoisted_31$2
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "feather:percent" }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: unref(dm).grasa,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(dm).grasa = $event),
                                value: returnGrasa(),
                                class: normalizeClass(showMsGrasa.value ? "fieldRequired" : ""),
                                type: "text",
                                placeholder: "% Grasa",
                                autocomplete: "% Grasa"
                              }, null, 8, ["modelValue", "value", "class"]),
                              showMsGrasa.value ? (openBlock(), createElementBlock("p", _hoisted_33$2, toDisplayString(grasaMensaje))) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_34$2, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_35$1,
                              createVNode(_component_Tippy, null, {
                                content: withCtx(() => [
                                  _hoisted_37$1
                                ]),
                                default: withCtx(() => [
                                  _hoisted_36$1
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VSelect, {
                                modelValue: unref(dm).somatipo,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(dm).somatipo = $event)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_VOption, {
                                    value: "",
                                    active: "",
                                    disabled: ""
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_38$1
                                    ]),
                                    _: 1
                                  }),
                                  (openBlock(), createElementBlock(Fragment, null, renderList(somatipos, (smtp, index) => {
                                    return createVNode(_component_VOption, {
                                      key: index,
                                      value: smtp
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(index + 1) + ". " + toDisplayString(smtp), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 64))
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
                    createBaseVNode("div", _hoisted_39$1, [
                      createVNode(_component_VField, { id: "fcMin" }, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_40$1,
                              createVNode(_component_font, {
                                size: "4",
                                color: "red"
                              }, {
                                default: withCtx(() => [
                                  _hoisted_41$1
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Tippy, null, {
                                content: withCtx(() => [
                                  _hoisted_43$1
                                ]),
                                default: withCtx(() => [
                                  _hoisted_42$1
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "fas fa-minus" }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: unref(dm).FCmin,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(dm).FCmin = $event),
                                class: normalizeClass(showMsFMin.value ? "fieldRequired" : ""),
                                value: returnFcMin(),
                                type: "text",
                                placeholder: "FCmin",
                                autocomplete: "off"
                              }, null, 8, ["modelValue", "class", "value"]),
                              showMsFMin.value ? (openBlock(), createElementBlock("p", _hoisted_44$1, toDisplayString(minMensaje))) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_45$1, [
                      createVNode(_component_VField, { id: "fcMax" }, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_46$1,
                              createVNode(_component_font, {
                                size: "4",
                                color: "red"
                              }, {
                                default: withCtx(() => [
                                  _hoisted_47$1
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Tippy, null, {
                                content: withCtx(() => [
                                  _hoisted_49$1
                                ]),
                                default: withCtx(() => [
                                  _hoisted_48$1
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { icon: "fas fa-plus" }, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: unref(dm).FCmax,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(dm).FCmax = $event),
                                class: normalizeClass(showMsFMax.value ? "fieldRequired" : ""),
                                value: returnFcMax(),
                                type: "text",
                                placeholder: "FCMax",
                                autocomplete: "off"
                              }, null, 8, ["modelValue", "class", "value"]),
                              showMsFMax.value ? (openBlock(), createElementBlock("p", _hoisted_50$1, toDisplayString(maxMensaje))) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_51$1, [
                  createBaseVNode("div", _hoisted_52$1, [
                    createBaseVNode("div", _hoisted_53$1, [
                      unref(dm).somatipo === somatipos[0] ? (openBlock(), createElementBlock("img", _hoisted_54$1)) : createCommentVNode("", true),
                      unref(dm).somatipo === somatipos[1] ? (openBlock(), createElementBlock("img", _hoisted_55$1)) : createCommentVNode("", true),
                      unref(dm).somatipo === somatipos[2] ? (openBlock(), createElementBlock("img", _hoisted_56$1)) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ]),
            _hoisted_57$1,
            createBaseVNode("div", _hoisted_58$1, [
              createBaseVNode("div", _hoisted_59$1, [
                createBaseVNode("div", _hoisted_60$1, [
                  createBaseVNode("h4", _hoisted_61$1, [
                    _hoisted_62$1,
                    createVNode(_component_Tippy, null, {
                      content: withCtx(() => [
                        _hoisted_64$1
                      ]),
                      default: withCtx(() => [
                        _hoisted_63$1
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_65$1, [
                createBaseVNode("div", _hoisted_66$1, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_67$1,
                              createVNode(_component_font, {
                                size: "4",
                                color: "red"
                              }, {
                                default: withCtx(() => [
                                  _hoisted_68
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VSelect, {
                            ref_key: "distanciaRef",
                            ref: distanciaRef,
                            modelValue: inputDistancia.value,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => inputDistancia.value = $event),
                            class: normalizeClass(showMsDistancia.value ? "fieldRequired" : "")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_VOption, {
                                value: "0",
                                active: "",
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  _hoisted_69
                                ]),
                                _: 1
                              }),
                              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(categorias), (distanacia, index) => {
                                return openBlock(), createBlock(_component_VOption, {
                                  key: index,
                                  value: distanacia
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(index), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "class"]),
                          showMsDistancia.value ? (openBlock(), createElementBlock("p", _hoisted_70, toDisplayString(distanciaMensaje))) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_71, [
                  createBaseVNode("label", _hoisted_72, [
                    _hoisted_73,
                    createVNode(_component_font, {
                      size: "4",
                      color: "red"
                    }, {
                      default: withCtx(() => [
                        _hoisted_74
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_75, [
                    createBaseVNode("div", _hoisted_76, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: timeH.value,
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => timeH.value = $event),
                                class: normalizeClass(showMsTiempo.value ? "fieldRequired" : ""),
                                type: "number",
                                placeholder: "HH",
                                autocomplete: "off",
                                min: "0"
                              }, null, 8, ["modelValue", "class"]),
                              createVNode(_component_VLabel, {
                                raw: "",
                                class: "auth-label"
                              }, {
                                default: withCtx(() => [
                                  _hoisted_77
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
                    createBaseVNode("div", _hoisted_78, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: timeM.value,
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => timeM.value = $event),
                                class: normalizeClass(showMsTiempo.value ? "fieldRequired" : ""),
                                type: "number",
                                placeholder: "MM",
                                autocomplete: "off",
                                min: "0"
                              }, null, 8, ["modelValue", "class"]),
                              createVNode(_component_VLabel, {
                                raw: "",
                                class: "auth-label"
                              }, {
                                default: withCtx(() => [
                                  _hoisted_79
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
                    createBaseVNode("div", _hoisted_80, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_VInput, {
                                modelValue: timeS.value,
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => timeS.value = $event),
                                class: normalizeClass(showMsTiempo.value ? "fieldRequired" : ""),
                                type: "number",
                                placeholder: "SS",
                                autocomplete: "off",
                                min: "0"
                              }, null, 8, ["modelValue", "class"]),
                              createVNode(_component_VLabel, {
                                raw: "",
                                class: "auth-label"
                              }, {
                                default: withCtx(() => [
                                  _hoisted_81
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  showMsTiempo.value ? (openBlock(), createElementBlock("p", _hoisted_82, toDisplayString(tiempoMensaje))) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_83, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_84,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_85
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_VDatePicker, {
                            modelValue: inputFecha.value,
                            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => inputFecha.value = $event),
                            "max-date": new Date(),
                            color: "green",
                            "trim-weeks": ""
                          }, {
                            default: withCtx(({ inputValue, inputEvents }) => [
                              createVNode(_component_VField, null, {
                                default: withCtx(() => [
                                  createVNode(_component_VControl, { icon: "feather:calendar" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_VInput, mergeProps({
                                        value: inputValue,
                                        class: showMsFecha.value ? "fieldRequired" : ""
                                      }, toHandlers(inputEvents)), null, 16, ["value", "class"])
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
                      }),
                      showMsFecha.value ? (openBlock(), createElementBlock("p", _hoisted_86, toDisplayString(fechaMensaje))) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_87, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_88
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VInput, {
                            modelValue: inputRitmo.value,
                            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => inputRitmo.value = $event),
                            value: getRitmo(),
                            type: "text",
                            placeholder: "Ritmo",
                            autocomplete: "on"
                          }, null, 8, ["modelValue", "value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_89, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_90
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VInput, {
                            modelValue: inputFCprom.value,
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => inputFCprom.value = $event),
                            type: "text",
                            placeholder: "FC Promedio",
                            autocomplete: "off"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_91, [
                  createVNode(_component_VButton, {
                    icon: "fas fa-plus",
                    color: "success",
                    onClick: addMarca
                  }, {
                    default: withCtx(() => [
                      _hoisted_92
                    ]),
                    _: 1
                  })
                ])
              ]),
              inputDistancia.value === "otro" ? (openBlock(), createElementBlock("div", _hoisted_93, [
                createBaseVNode("div", _hoisted_94, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_95
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VInput, {
                            modelValue: otraDistancia.value,
                            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => otraDistancia.value = $event),
                            value: returnDistancia(),
                            class: normalizeClass(shMsOtDistancia.value ? "fieldRequired" : ""),
                            type: "text",
                            placeholder: "Otra Distancia",
                            autocomplete: "on"
                          }, null, 8, ["modelValue", "value", "class"]),
                          shMsOtDistancia.value ? (openBlock(), createElementBlock("p", _hoisted_96, toDisplayString(otraDistMensaje))) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_97, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_VLabel, {
                            raw: "",
                            class: "auth-label"
                          }, {
                            default: withCtx(() => [
                              _hoisted_98
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VSelect, {
                            ref_key: "miUnidadRef",
                            ref: miUnidadRef,
                            modelValue: unidadDistancia.value,
                            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unidadDistancia.value = $event)
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createElementBlock(Fragment, null, renderList(unidades, (unidad, index) => {
                                return createVNode(_component_VOption, {
                                  key: index,
                                  value: unidad
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(index), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 64))
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true)
            ]),
            _hoisted_99,
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(ds).marcas, (marca, index) => {
              return openBlock(), createElementBlock("div", {
                key: marca,
                class: "columns is-multiline m-4"
              }, [
                _hoisted_100,
                createBaseVNode("div", _hoisted_101, [
                  _hoisted_102,
                  createBaseVNode("label", _hoisted_103, toDisplayString(marca.distancia), 1)
                ]),
                createBaseVNode("div", _hoisted_104, [
                  _hoisted_105,
                  createBaseVNode("label", _hoisted_106, toDisplayString(marca.tiempoH) + " : " + toDisplayString(marca.tiempoM) + " : " + toDisplayString(marca.tiempoS), 1)
                ]),
                createBaseVNode("div", _hoisted_107, [
                  _hoisted_108,
                  createBaseVNode("label", _hoisted_109, toDisplayString(formatearFecha(marca.fecha)), 1)
                ]),
                createBaseVNode("div", _hoisted_110, [
                  _hoisted_111,
                  createBaseVNode("label", _hoisted_112, toDisplayString(marca.ritmo) + " min/km ", 1)
                ]),
                createBaseVNode("div", _hoisted_113, [
                  _hoisted_114,
                  createBaseVNode("label", _hoisted_115, toDisplayString(marca.fcProm), 1)
                ]),
                createVNode(_component_VIconButton, {
                  color: "warning",
                  outlined: "",
                  circle: "",
                  icon: "feather:trash-2",
                  onClick: ($event) => eliminarMarca(index)
                }, null, 8, ["onClick"])
              ]);
            }), 128)),
            _hoisted_116,
            createBaseVNode("div", _hoisted_117, [
              createBaseVNode("h4", null, [
                _hoisted_118,
                createVNode(_component_Tippy, null, {
                  content: withCtx(() => [
                    _hoisted_120
                  ]),
                  default: withCtx(() => [
                    _hoisted_119
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_121, [
              createBaseVNode("div", _hoisted_122, [
                createBaseVNode("div", _hoisted_123, [
                  createBaseVNode("div", _hoisted_124, [
                    createVNode(_component_VButton, {
                      rounded: "",
                      fullwidth: "",
                      color: "success"
                    }, {
                      default: withCtx(() => [
                        _hoisted_125
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_126, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:calendar" }, {
                          default: withCtx(() => [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_VDatePicker, {
                                  modelValue: unref(dm).fecha_cintura,
                                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(dm).fecha_cintura = $event),
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
                  createBaseVNode("div", _hoisted_127, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "lnir lnir-weight-machine" }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(dm).medida_cintura,
                              "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(dm).medida_cintura = $event),
                              type: "text",
                              placeholder: "medida",
                              autocomplete: "medida"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_128, [
                    createVNode(_component_VButton, {
                      fullwidth: "",
                      rounded: "",
                      color: "success"
                    }, {
                      default: withCtx(() => [
                        _hoisted_129
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_130, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:calendar" }, {
                          default: withCtx(() => [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_VDatePicker, {
                                  modelValue: unref(dm).fecha_brazo,
                                  "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => unref(dm).fecha_brazo = $event),
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
                  createBaseVNode("div", _hoisted_131, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "lnir lnir-weight-machine" }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(dm).medida_brazo,
                              "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => unref(dm).medida_brazo = $event),
                              type: "text",
                              placeholder: "medida",
                              autocomplete: "medida"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_132, [
                    createVNode(_component_VButton, {
                      fullwidth: "",
                      rounded: "",
                      color: "success"
                    }, {
                      default: withCtx(() => [
                        _hoisted_133
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_134, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:calendar" }, {
                          default: withCtx(() => [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_VDatePicker, {
                                  modelValue: unref(dm).fecha_muslo,
                                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => unref(dm).fecha_muslo = $event),
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
                  createBaseVNode("div", _hoisted_135, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "lnir lnir-weight-machine" }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(dm).medida_muslo,
                              "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => unref(dm).medida_muslo = $event),
                              type: "text",
                              placeholder: "medida",
                              autocomplete: "medida"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_136, [
                    createVNode(_component_VButton, {
                      fullwidth: "",
                      rounded: "",
                      color: "success"
                    }, {
                      default: withCtx(() => [
                        _hoisted_137
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_138, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:calendar" }, {
                          default: withCtx(() => [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_VDatePicker, {
                                  modelValue: unref(dm).fecha_pantorrilla,
                                  "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => unref(dm).fecha_pantorrilla = $event),
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
                  createBaseVNode("div", _hoisted_139, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "lnir lnir-weight-machine" }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(dm).medida_pantorrilla,
                              "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => unref(dm).medida_pantorrilla = $event),
                              type: "text",
                              placeholder: "medida",
                              autocomplete: "medida"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_140, [
                    createVNode(_component_VButton, {
                      fullwidth: "",
                      rounded: "",
                      color: "success"
                    }, {
                      default: withCtx(() => [
                        _hoisted_141
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_142, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:calendar" }, {
                          default: withCtx(() => [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_VDatePicker, {
                                  modelValue: unref(dm).fecha_pecho,
                                  "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => unref(dm).fecha_pecho = $event),
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
                  createBaseVNode("div", _hoisted_143, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "lnir lnir-weight-machine" }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(dm).medida_pecho,
                              "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => unref(dm).medida_pecho = $event),
                              type: "text",
                              placeholder: "medida",
                              autocomplete: "medida"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_144, [
                    createVNode(_component_VButton, {
                      fullwidth: "",
                      rounded: "",
                      color: "success"
                    }, {
                      default: withCtx(() => [
                        _hoisted_145
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_146, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:calendar" }, {
                          default: withCtx(() => [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_VDatePicker, {
                                  modelValue: unref(dm).fecha_hombros,
                                  "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => unref(dm).fecha_hombros = $event),
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
                  createBaseVNode("div", _hoisted_147, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "lnir lnir-weight-machine" }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(dm).medida_hombros,
                              "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => unref(dm).medida_hombros = $event),
                              type: "text",
                              placeholder: "medida",
                              autocomplete: "medida"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_148, [
                    createVNode(_component_VButton, {
                      fullwidth: "",
                      rounded: "",
                      color: "success"
                    }, {
                      default: withCtx(() => [
                        _hoisted_149
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_150, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "feather:calendar" }, {
                          default: withCtx(() => [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_VDatePicker, {
                                  modelValue: unref(dm).fecha_gluteos,
                                  "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => unref(dm).fecha_gluteos = $event),
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
                  createBaseVNode("div", _hoisted_151, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { icon: "lnir lnir-weight-machine" }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(dm).medida_gluteos,
                              "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => unref(dm).medida_gluteos = $event),
                              type: "text",
                              placeholder: "medida",
                              autocomplete: "medida"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            createVNode(_component_VFlex, { "justify-content": "flex-end" }, {
              default: withCtx(() => [
                createVNode(_component_VFlexItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_VButton, {
                      icon: "fas fa-check",
                      color: "primary",
                      raised: "",
                      loading: isLoading.value,
                      tabindex: "0",
                      type: "submit"
                    }, {
                      default: withCtx(() => [
                        _hoisted_152
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ], 40, _hoisted_2$2)
      ]);
    };
  }
});
var ProfileDeportista_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "account-box is-form is-footerless" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "form-head-inner" }, [
  /* @__PURE__ */ createBaseVNode("div", null, [
    /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n General"),
    /* @__PURE__ */ createBaseVNode("p", null, "Edita la informac\xEDon general de tu cuenta")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "right" })
], -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
const _hoisted_4$1 = { class: "form-body" };
const _hoisted_5$1 = { class: "fieldset" };
const _hoisted_6$1 = { class: "fieldset-heading" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("h4", null, "Informaci\xF3n Personal", -1);
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("p", null, "Otras personas quieren conocerte m\xE1s", -1);
const _hoisted_9$1 = /* @__PURE__ */ createTextVNode("Obligatorio ");
const _hoisted_10$1 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_11$1 = { class: "columns is-multiline" };
const _hoisted_12$1 = { class: "column is-6" };
const _hoisted_13$1 = /* @__PURE__ */ createTextVNode(" Nombres ");
const _hoisted_14$1 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_15$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_16$1 = { class: "column is-6" };
const _hoisted_17$1 = /* @__PURE__ */ createTextVNode(" Apellidos ");
const _hoisted_18$1 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_19$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_20$1 = { class: "column is-6" };
const _hoisted_21$1 = /* @__PURE__ */ createTextVNode("Documento de identificaci\xF3n ");
const _hoisted_22$1 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_23$1 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_24$1 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_25$1 = [
  _hoisted_24$1
];
const _hoisted_26$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_27$1 = { class: "column is-6" };
const _hoisted_28$1 = /* @__PURE__ */ createTextVNode(" Genero ");
const _hoisted_29$1 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_30$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_31$1 = { class: "column is-6" };
const _hoisted_32$1 = /* @__PURE__ */ createTextVNode(" Pais ");
const _hoisted_33$1 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_34$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_35 = { class: "column is-6" };
const _hoisted_36 = /* @__PURE__ */ createTextVNode(" Ciudad ");
const _hoisted_37 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_38 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_39 = { class: "column is-6" };
const _hoisted_40 = /* @__PURE__ */ createTextVNode("Usuario ");
const _hoisted_41 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_43 = [
  _hoisted_42
];
const _hoisted_44 = { class: "column is-6" };
const _hoisted_45 = /* @__PURE__ */ createTextVNode("Correo ");
const _hoisted_46 = /* @__PURE__ */ createTextVNode("*");
const _hoisted_47 = { class: "column is-6" };
const _hoisted_48 = /* @__PURE__ */ createTextVNode("Telefono ");
const _hoisted_49 = /* @__PURE__ */ createTextVNode("* ");
const _hoisted_50 = {
  onclick: "",
  color: "solid",
  label: "Bubble"
};
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle",
  "aria-hidden": "true"
}, null, -1);
const _hoisted_52 = [
  _hoisted_51
];
const _hoisted_53 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_54 = { class: "column is-6" };
const _hoisted_55 = /* @__PURE__ */ createTextVNode("Fecha de nacimiento ");
const _hoisted_56 = /* @__PURE__ */ createTextVNode("* ");
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
const _hoisted_60 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_61 = { class: "has-text-centered" };
const _hoisted_62 = { class: "upload-demo-wrap" };
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("wbr", null, null, -1);
const _hoisted_64 = { class: "file" };
const _hoisted_65 = { class: "file-label" };
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("span", { class: "file-cta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "file-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-cloud-upload-alt"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "file-label" }, " Choose a file\u2026 ")
], -1);
const _hoisted_67 = /* @__PURE__ */ createTextVNode(" Confirm ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
    computed(() => {
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
      datosDeportista.value.identificacion = datosDeportista.value.identificacion.replace(
        /e/g,
        ""
      );
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
    const validationSchema = toFormValidator(
      z.object({
        nombres: z.string({
          required_error: "Nombres requeridos",
          invalid_type_error: "Caracteres invalidos"
        }).min(3, "Minimo tres caracteres"),
        apellidos: z.string({
          required_error: "Apellidos requeridos",
          invalid_type_error: "Caracteres invalidos"
        }).min(3, "Minimo tres caracteres"),
        identificacion: z.string({
          required_error: "Identificaci\xF3n requerida",
          invalid_type_error: "Identificaci\xF3n tipo invalido"
        }).min(8, "El n\xFAmero de digitos minimo es 8"),
        telefono: z.string({
          required_error: "Telefono requerido",
          invalid_type_error: "Telefono tipo invalido"
        }).min(7, "El n\xFAmero de digitos minimo es 7")
      })
    );
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
    watch(
      () => datosDeportista.value.pais,
      async (pais, prevPais) => {
        if (prevPais != "") {
          datosDeportista.value.ciudad = null;
        }
        ciudades.value = await getCiudades(pais);
      }
    );
    return (_ctx, _cache) => {
      const _component_font = resolveComponent("font");
      const _component_VLabel = _sfc_main$8;
      const _component_VInput = _sfc_main$9;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$a;
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_VAvatar = _sfc_main$h;
      const _component_VButton = _sfc_main$6;
      const _component_VModal = _sfc_main$i;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", {
          class: normalizeClass(["form-head stuck-header", [unref(isScrolling) && "is-stuck"]])
        }, _hoisted_3$1, 2),
        createBaseVNode("form", {
          action: "signup-form",
          onSubmit: _cache[10] || (_cache[10] = (...args) => unref(onSave) && unref(onSave)(...args))
        }, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("div", _hoisted_6$1, [
                _hoisted_7$1,
                _hoisted_8$1,
                createBaseVNode("p", null, [
                  _hoisted_9$1,
                  createVNode(_component_font, {
                    size: "4",
                    color: "red"
                  }, {
                    default: withCtx(() => [
                      _hoisted_10$1
                    ]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_11$1, [
                createBaseVNode("div", _hoisted_12$1, [
                  createVNode(_component_VField, { id: "nombres" }, {
                    default: withCtx(({ field }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_13$1,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_14$1
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
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datosDeportista.value.nombres = $event),
                            value: returnNombre(),
                            disabled: "",
                            type: "text",
                            placeholder: "Nombres",
                            autocomplete: "given-name"
                          }, null, 8, ["modelValue", "value"]),
                          (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_15$1, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_16$1, [
                  createVNode(_component_VField, { id: "apellidos" }, {
                    default: withCtx(({ field }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_17$1,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_18$1
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
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosDeportista.value.apellidos = $event),
                            value: returnApellido(),
                            type: "text",
                            disabled: "",
                            placeholder: "Apellidos",
                            autocomplete: "family-name"
                          }, null, 8, ["modelValue", "value"]),
                          (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_19$1, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_20$1, [
                  createVNode(_component_VField, { id: "identificacion" }, {
                    default: withCtx(({ field }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_21$1,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_22$1
                            ]),
                            _: 1
                          }),
                          withDirectives((openBlock(), createElementBlock("span", _hoisted_23$1, _hoisted_25$1)), [
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
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosDeportista.value.identificacion = $event),
                            value: returnIdentificacion(),
                            type: "text",
                            placeholder: "N\xFAmero de Identificaci\xF3n",
                            required: "",
                            autocomplete: "off"
                          }, null, 8, ["modelValue", "value"]),
                          (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_26$1, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_27$1, [
                  createVNode(_component_VField, null, {
                    default: withCtx(({ id }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_28$1,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_29$1
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
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => datosDeportista.value.genero = $event),
                            value: datosDeportista.value.genero,
                            attrs: { id },
                            placeholder: "Seleccione uno",
                            options: ["Masculino", "Femenino"],
                            required: ""
                          }, null, 8, ["modelValue", "value", "attrs"]),
                          selectedGender() ? (openBlock(), createElementBlock("p", _hoisted_30$1, toDisplayString(generoMensaje.value), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_31$1, [
                  createVNode(_component_VField, null, {
                    default: withCtx(({ id }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_32$1,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_33$1
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
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => datosDeportista.value.pais = $event),
                            value: datosDeportista.value.pais,
                            attrs: { id },
                            placeholder: "Seleccione uno",
                            options: paises.value,
                            required: ""
                          }, null, 8, ["modelValue", "value", "attrs", "options"]),
                          selectedPais() ? (openBlock(), createElementBlock("p", _hoisted_34$1, toDisplayString(paisMensaje.value), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_35, [
                  createVNode(_component_VField, null, {
                    default: withCtx(({ id }) => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_36,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_37
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
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => datosDeportista.value.ciudad = $event),
                            value: datosDeportista.value.ciudad,
                            attrs: { id },
                            placeholder: "Seleccione uno",
                            options: ciudades.value,
                            required: ""
                          }, null, 8, ["modelValue", "value", "attrs", "options"]),
                          selectedCiudad() ? (openBlock(), createElementBlock("p", _hoisted_38, toDisplayString(ciudadMensaje.value), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_39, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_40,
                          withDirectives((openBlock(), createElementBlock("span", _hoisted_41, _hoisted_43)), [
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
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => datosDeportista.value.nameUser = $event),
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
                createBaseVNode("div", _hoisted_44, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_45,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_46
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
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => datosDeportista.value.email = $event),
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
                createBaseVNode("div", _hoisted_47, [
                  createVNode(_component_VField, { id: "telefono" }, {
                    default: withCtx(({ field }) => [
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
                          }),
                          withDirectives((openBlock(), createElementBlock("span", _hoisted_50, _hoisted_52)), [
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
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => datosDeportista.value.telefono = $event),
                            value: returnTelefono(),
                            type: "text",
                            placeholder: "N\xFAmero de tel\xE9fono",
                            required: "",
                            autocomplete: "off"
                          }, null, 8, ["modelValue", "value"]),
                          (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_53, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_54, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VLabel, {
                        raw: "",
                        class: "auth-label"
                      }, {
                        default: withCtx(() => [
                          _hoisted_55,
                          createVNode(_component_font, {
                            size: "4",
                            color: "red"
                          }, {
                            default: withCtx(() => [
                              _hoisted_56
                            ]),
                            _: 1
                          }),
                          withDirectives((openBlock(), createElementBlock("span", _hoisted_57, _hoisted_59)), [
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
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => datosDeportista.value.fecha_nacimiento = $event),
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
                      selectedNacimiento() ? (openBlock(), createElementBlock("p", _hoisted_60, toDisplayString(nacimientoMensaje.value), 1)) : createCommentVNode("", true)
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
          onClose: _cache[14] || (_cache[14] = ($event) => uploadModalOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_61, [
              createBaseVNode("div", _hoisted_62, [
                createVNode(_component_VAvatar, {
                  size: "big",
                  picture: unref(imagen).dataUrl
                }, null, 8, ["picture"])
              ])
            ])
          ]),
          cancel: withCtx(() => [
            _hoisted_63
          ]),
          action: withCtx(() => [
            createVNode(_component_VField, { grouped: "" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_64, [
                      createBaseVNode("label", _hoisted_65, [
                        createBaseVNode("input", {
                          class: "file-input",
                          type: "file",
                          name: "resume",
                          onChange: _cache[11] || (_cache[11] = ($event) => previewImage($event))
                        }, null, 32),
                        _hoisted_66
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
                      onKeydown: _cache[12] || (_cache[12] = withKeys(withModifiers(($event) => uploadModalOpen.value = false, ["prevent"]), ["space"])),
                      onClick: _cache[13] || (_cache[13] = ($event) => closeModal())
                    }, {
                      default: withCtx(() => [
                        _hoisted_67
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
      const _component_VButton = _sfc_main$6;
      const _component_VButtons = _sfc_main$j;
      const _component_VMessage = _sfc_main$k;
      const _component_ProfileDeportista = _sfc_main$1;
      const _component_RouterView = resolveComponent("RouterView");
      const _component_Morfologia = _sfc_main$2;
      const _component_Deportes = _sfc_main$3;
      const _component_Objetivos = _sfc_main$l;
      const _component_Entrenadores = _sfc_main$m;
      const _component_Test = _sfc_main$4;
      const _component_Planes = _sfc_main$5;
      const _component_VPlaceholderPage = _sfc_main$n;
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
