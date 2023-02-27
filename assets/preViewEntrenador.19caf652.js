import { _ as _sfc_main$1 } from "./ViewEntrenador.0bff91de.js";
import { y as defineComponent, z as ref, a6 as useHead, aq as onBeforeMount, o as openBlock, i as createElementBlock, q as createVNode } from "./index.420249be.js";
import { u as useViewWrapper } from "./viewWrapper.621f0af8.js";
import "./ModalCancelar.777638d8.js";
import "./VModal.ba9a13a9.js";
import "./config.3d78ff49.js";
import "./match.a9331782.js";
import "./deportista.d647ed5b.js";
import "./general.b8dca58f.js";
import "./main.981fd68f.js";
import "./VAvatar.3dbb7ab0.js";
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
