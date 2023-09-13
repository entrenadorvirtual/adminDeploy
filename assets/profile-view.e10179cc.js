import { _ as _sfc_main$1 } from "./ViewProfile.fd8f448a.js";
import { y as defineComponent, P as useHead, o as openBlock, i as createElementBlock, q as createVNode } from "./index.a7fc5dec.js";
import { u as useViewWrapper } from "./viewWrapper.0c20b402.js";
import "./VControl.4d17fa85.js";
import "./VSwitchBlock.7afcfb92.js";
import "./VInput.5920a8ca.js";
import "./fechas.6bd42486.js";
import "./Salud.d3f5e4d2.js";
import "./Deportivo.7de21389.js";
import "./VCheckbox.9c48ffd8.js";
import "./VTextarea.9eda26d4.js";
import "./Rendimiento.ef9e99fd.js";
import "./deportista.892d7693.js";
import "./config.0fd79a34.js";
import "./general.8b156443.js";
import "./main.cf1f8e20.js";
import "./CapacidadFisica.8c2e6ba9.js";
import "./Morfologico.64127f63.js";
import "./Personales.4ae15de3.js";
import "./VAvatar.39b9c3a4.js";
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Perfil deportista");
    useHead({
      title: "Perfil deportista"
    });
    return (_ctx, _cache) => {
      const _component_ViewProfile = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ViewProfile)
      ]);
    };
  }
});
export { _sfc_main as default };
