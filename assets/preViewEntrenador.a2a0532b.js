import { _ as _sfc_main$1 } from "./ViewEntrenador.6359ab49.js";
import { y as defineComponent, z as ref, a5 as useHead, am as onBeforeMount, o as openBlock, i as createElementBlock, q as createVNode } from "./index.9a2a8c84.js";
import { u as useViewWrapper } from "./viewWrapper.8bde9c63.js";
import "./ModalCancelar.80d32284.js";
import "./VModal.e6dd22f8.js";
import "./config.165bca36.js";
import "./match.bfe04cd6.js";
import "./deportista.87466242.js";
import "./general.34b73030.js";
import "./main.06195782.js";
import "./VAvatar.2fd462f4.js";
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
