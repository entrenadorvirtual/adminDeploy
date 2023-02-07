import { _ as _sfc_main$2 } from "./VModal.9b3adbf3.js";
import { y as defineComponent, o as openBlock, f as createBlock, w as withCtx, j as createBaseVNode, t as toDisplayString, q as createVNode, m as createTextVNode, Y as _sfc_main$1 } from "./index.3437b938.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    subtitle: null,
    classconfirm: null,
    confirmMsm: null,
    classcancel: null,
    cancelMsm: null,
    mostrar: { type: Boolean }
  },
  emits: ["aceptar", "cancelar"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const aceptar = () => {
      emits("aceptar");
    };
    const cancelar = () => {
      emits("cancelar");
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VModal = _sfc_main$2;
      return openBlock(), createBlock(_component_VModal, {
        open: props.mostrar,
        noclosebutton: "",
        title: props.title || "Confirmac\xEDon",
        size: "big",
        actions: "center",
        noscroll: "",
        noclose: ""
      }, {
        content: withCtx(() => [
          createBaseVNode("div", null, [
            createBaseVNode("h2", null, toDisplayString(props.subtitle), 1)
          ])
        ]),
        action: withCtx(() => [
          createVNode(_component_VButton, {
            color: props.classconfirm || "primary",
            raised: "",
            onClick: aceptar
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(props.confirmMsm || "Aceptar"), 1)
            ]),
            _: 1
          }, 8, ["color"])
        ]),
        cancel: withCtx(() => [
          createVNode(_component_VButton, {
            color: props.classcancel,
            raised: "",
            onClick: cancelar
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(props.cancelMsm || "Cancelar"), 1)
            ]),
            _: 1
          }, 8, ["color"])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
});
export { _sfc_main as _ };
