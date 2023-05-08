import { _ as _sfc_main$1 } from "./Calendario.9adac3e5.js";
import { y as defineComponent, a as useUserSession, a7 as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.695461b3.js";
import { u as useViewWrapper } from "./viewWrapper.5166164c.js";
import "./VModal.7c444508.js";
import "./VBlock.6aa14358.js";
import "./VAvatar.652ec997.js";
import "./rutinas.3c679119.js";
import "./VInput.03d7c4f0.js";
import "./VLabel.1dcb2a03.js";
import "./VControl.fa8e3192.js";
import "./VOption.026578aa.js";
import "./vee-validate-zod.esm.7ee806d4.js";
import "./main.666cbe61.js";
import "./config.dae7a527.js";
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
