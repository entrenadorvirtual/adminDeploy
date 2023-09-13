import { _ as _sfc_main$1 } from "./ViewEntrenador.f0439884.js";
import { y as defineComponent, z as ref, P as useHead, N as onBeforeMount, o as openBlock, i as createElementBlock, q as createVNode } from "./index.a7fc5dec.js";
import { u as useViewWrapper } from "./viewWrapper.0c20b402.js";
import "./ModalCancelar.1054c0b2.js";
import "./VModal.6ca1fc6c.js";
import "./config.0fd79a34.js";
import "./match.1a597960.js";
import "./deportista.892d7693.js";
import "./general.8b156443.js";
import "./main.cf1f8e20.js";
import "./VAvatar.39b9c3a4.js";
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
