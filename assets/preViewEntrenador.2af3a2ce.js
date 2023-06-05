import { _ as _sfc_main$1 } from "./ViewEntrenador.ec1d8215.js";
import { y as defineComponent, z as ref, a6 as useHead, M as onBeforeMount, o as openBlock, i as createElementBlock, q as createVNode } from "./index.5117c21f.js";
import { u as useViewWrapper } from "./viewWrapper.0d6041b0.js";
import "./ModalCancelar.77911dc6.js";
import "./VModal.61ebb5be.js";
import "./config.fc5b324a.js";
import "./match.f8d80e90.js";
import "./deportista.bf78c6af.js";
import "./general.744b7fff.js";
import "./main.3bd39e21.js";
import "./VAvatar.87605638.js";
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const parametros = ref({});
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Preview Entrenador");
    useHead({
      title: "Profile Entrenador"
    });
    onBeforeMount(async () => {
      parametros.value = JSON.parse(props.data);
    });
    return (_ctx, _cache) => {
      const _component_ViewEntrenador = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ViewEntrenador, { data: parametros.value }, null, 8, ["data"])
      ]);
    };
  }
});
export { _sfc_main as default };
