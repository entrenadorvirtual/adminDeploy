import { _ as _sfc_main$1 } from "./ViewEntrenador.f3a535b4.js";
import { y as defineComponent, z as ref, a7 as useHead, M as onBeforeMount, o as openBlock, i as createElementBlock, q as createVNode } from "./index.695461b3.js";
import { u as useViewWrapper } from "./viewWrapper.5166164c.js";
import "./ModalCancelar.68e94409.js";
import "./VModal.7c444508.js";
import "./config.dae7a527.js";
import "./match.2b9f1df2.js";
import "./deportista.f81b0247.js";
import "./general.c2c525e5.js";
import "./main.666cbe61.js";
import "./VAvatar.652ec997.js";
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
