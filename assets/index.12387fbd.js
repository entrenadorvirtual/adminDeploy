import { _ as _sfc_main$1 } from "./Calendario.467576ba.js";
import { y as defineComponent, a as useUserSession, a6 as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.420249be.js";
import { u as useViewWrapper } from "./viewWrapper.621f0af8.js";
import "./VModal.ba9a13a9.js";
import "./VBlock.68f81a1f.js";
import "./VAvatar.3dbb7ab0.js";
import "./rutinas.94460818.js";
import "./VInput.8bd6418e.js";
import "./VLabel.82cb8353.js";
import "./VControl.fa82c9c6.js";
import "./VOption.54ccc991.js";
import "./index.1fbd2b5e.js";
import "./main.981fd68f.js";
import "./config.3d78ff49.js";
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
