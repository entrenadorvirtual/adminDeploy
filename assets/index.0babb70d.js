import { _ as _sfc_main$1 } from "./Calendario.33876c7d.js";
import { y as defineComponent, a as useUserSession, a6 as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.5117c21f.js";
import { u as useViewWrapper } from "./viewWrapper.0d6041b0.js";
import "./VModal.61ebb5be.js";
import "./VBlock.eaea9b4f.js";
import "./VAvatar.87605638.js";
import "./rutinas.68907f7b.js";
import "./VInput.fe703cdc.js";
import "./VLabel.a843cb32.js";
import "./VControl.a2f9c194.js";
import "./VOption.f0d0ae2d.js";
import "./vee-validate-zod.esm.7ee806d4.js";
import "./main.3bd39e21.js";
import "./config.fc5b324a.js";
import "./fechas.a424fa09.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Planes");
    useHead({
      title: "Planes"
    });
    return (_ctx, _cache) => {
      const _component_Calendario = _sfc_main$1;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_Calendario, {
          iddeportista: unref(userSession).userId
        }, null, 8, ["iddeportista"])
      ]);
    };
  }
});
export { _sfc_main as default };
