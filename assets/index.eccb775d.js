import { _ as _sfc_main$1 } from "./CrudPlanesGratuitos.461223a6.js";
import { y as defineComponent, a as useUserSession, a5 as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.3437b938.js";
import { u as useViewWrapper } from "./viewWrapper.779f7803.js";
import "./ModalOptions.6cba5c68.js";
import "./VModal.9b3adbf3.js";
import "./PlanGratuito.95b1c4da.js";
import "./rutinas.b7d2c94f.js";
import "./VInput.bb7a011d.js";
import "./VLabel.c9d776c3.js";
import "./VControl.c459fb91.js";
import "./VOption.1954103c.js";
import "./index.1fbd2b5e.js";
import "./main.06195782.js";
import "./config.165bca36.js";
import "./fechas.a424fa09.js";
import "./VField.40eec146.js";
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
