import { _ as _sfc_main$1 } from "./CrudPlanesGratuitos.0145de06.js";
import { y as defineComponent, a as useUserSession, a7 as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.695461b3.js";
import { u as useViewWrapper } from "./viewWrapper.5166164c.js";
import "./ModalOptions.5fb65b8b.js";
import "./VModal.7c444508.js";
import "./PlanGratuito.4c6958c9.js";
import "./rutinas.3c679119.js";
import "./VInput.03d7c4f0.js";
import "./VLabel.1dcb2a03.js";
import "./VControl.fa8e3192.js";
import "./VOption.026578aa.js";
import "./vee-validate-zod.esm.7ee806d4.js";
import "./main.666cbe61.js";
import "./config.dae7a527.js";
import "./fechas.a424fa09.js";
import "./VField.60664af0.js";
import "./DeportesDisponibles.778c1af8.js";
import "./constantes.e793b8cd.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Planes");
    useHead({
      title: "Planes"
    });
    return (_ctx, _cache) => {
      const _component_CrudPlanesGratuitos = _sfc_main$1;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_CrudPlanesGratuitos, {
          ver: "",
          editar: false,
          eliminar: false,
          iddeportista: unref(userSession).userId
        }, null, 8, ["iddeportista"])
      ]);
    };
  }
});
export { _sfc_main as default };
