var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { _ as _sfc_main$3 } from "./VModal.ba9a13a9.js";
import { y as defineComponent, z as ref, A as onMounted, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, j as createBaseVNode, t as toDisplayString, F as Fragment, m as createTextVNode, Z as _sfc_main$2 } from "./index.420249be.js";
import { e as onValue, r as ref$1, d as database } from "./config.3d78ff49.js";
import { E as ENVIAR_INVITACION, a as ELIMINAR_INVITACION } from "./match.a9331782.js";
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode(" Enviar Solicitud ");
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode("Confirmar");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    datosDeportista: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    entrenador: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const centeredActionsOpen = ref(false);
    const totalSolicitudes = ref(0);
    const estadoBienvenida = ref();
    onMounted(async () => {
      onValue(ref$1(database, "users/" + props.id + "/plan/solicitudesEnviadas"), (snapshot) => {
        if (snapshot.exists()) {
          totalSolicitudes.value = snapshot.val();
        } else {
          totalSolicitudes.value = null;
        }
      });
      onValue(ref$1(database, "users/" + props.id + "/bienvenida"), (snapshot) => {
        if (snapshot.exists()) {
          estadoBienvenida.value = snapshot.val();
        } else {
          estadoBienvenida.value = null;
        }
      });
    });
    const enviarInvitacion = async () => {
      const ts = totalSolicitudes.value;
      if (ts < props.datosDeportista.plan.solicitudes) {
        const actualBienvenida = estadoBienvenida.value;
        const newBienvenida = estadoBienvenida.value - 1;
        if (newBienvenida == 2) {
          await ENVIAR_INVITACION(__spreadProps(__spreadValues({}, props.datosDeportista), { id: props.id }), props.entrenador, ts + 1, newBienvenida);
        } else {
          await ENVIAR_INVITACION(__spreadProps(__spreadValues({}, props.datosDeportista), { id: props.id }), props.entrenador, ts + 1, actualBienvenida);
        }
      }
      centeredActionsOpen.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VModal = _sfc_main$3;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VButton, {
          rounded: "",
          raised: "",
          color: "success",
          bold: "",
          onClick: _cache[0] || (_cache[0] = ($event) => centeredActionsOpen.value = true)
        }, {
          default: withCtx(() => [
            _hoisted_1$1
          ]),
          _: 1
        }),
        createVNode(_component_VModal, {
          title: "Enviar Solicitud",
          open: centeredActionsOpen.value,
          actions: "center",
          onClose: _cache[2] || (_cache[2] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", null, " Estamos muy alegres que quieras enviar solicitud al entrenador " + toDisplayString(__props.entrenador.nombres) + " " + toDisplayString(__props.entrenador.apellidos) + ". Nos gustaria que confirmaras por favor! ", 1)
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: _cache[1] || (_cache[1] = ($event) => enviarInvitacion())
            }, {
              default: withCtx(() => [
                _hoisted_2$1
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Cancelar Solicitud ");
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", null, "Seguro que deseas cancelar la solicitud al entrenador", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Confirmar");
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    solicitudes: {
      type: Array,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    idEntrenador: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const centeredActionsOpen = ref(false);
    const totalSolicitudes = ref(0);
    onMounted(async () => {
      onValue(ref$1(database, "users/" + props.id + "/plan/solicitudesEnviadas"), (snapshot) => {
        if (snapshot.exists()) {
          totalSolicitudes.value = snapshot.val();
        } else {
          totalSolicitudes.value = null;
        }
      });
    });
    const cancelarInvitacion = async () => {
      let nuevaSolicitud = {};
      props.solicitudes.forEach((sol) => {
        if (sol.id_entrenador === props.idEntrenador) {
          nuevaSolicitud = sol;
        }
      });
      const ts = totalSolicitudes.value - 1;
      await ELIMINAR_INVITACION(nuevaSolicitud.id, props.id, ts);
      centeredActionsOpen.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VModal = _sfc_main$3;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VButton, {
          rounded: "",
          raised: "",
          color: "danger",
          bold: "",
          onClick: _cache[0] || (_cache[0] = ($event) => centeredActionsOpen.value = true)
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        }),
        createVNode(_component_VModal, {
          title: "Cancelar Solicitud",
          open: centeredActionsOpen.value,
          actions: "center",
          onClose: _cache[2] || (_cache[2] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            _hoisted_2
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: _cache[1] || (_cache[1] = ($event) => cancelarInvitacion())
            }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
});
export { _sfc_main as _, _sfc_main$1 as a };
