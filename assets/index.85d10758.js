import { _ as _sfc_main$1 } from "./Calendario.43165e02.js";
import { y as defineComponent, a as useUserSession, a7 as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.4254dce5.js";
import { u as useViewWrapper } from "./viewWrapper.3e84b41c.js";
import "./VModal.03d398a2.js";
import "./VBlock.fef4d282.js";
import "./VAvatar.fc27fd88.js";
import "./rutinas.379fafdf.js";
import "./VInput.d3fefb7e.js";
import "./VLabel.3ba45fcc.js";
import "./VControl.d27e572e.js";
import "./VOption.bb3a8094.js";
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
