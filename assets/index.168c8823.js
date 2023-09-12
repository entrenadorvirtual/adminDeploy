import { _ as _sfc_main$1 } from "./CrudPlanesGratuitos.ec66852c.js";
import { y as defineComponent, a as useUserSession, P as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.0f5aa7c2.js";
import { u as useViewWrapper } from "./viewWrapper.218364e8.js";
import "./ModalOptions.b434cda6.js";
import "./VModal.86fed773.js";
import "./PlanGratuito.d5a3c7a9.js";
import "./SesionRutinaGratuita.34f9a71c.js";
import "./BloquesTiempo.c11a0b08.js";
import "./VIconButton.039d85a4.js";
import "./VFlexTable.29eeadad.js";
import "./VFlex.0f2837f4.js";
import "./VField.2f4065eb.js";
import "./VFlexItem.cf6f9427.js";
import "./VTextarea.9bbf9d4d.js";
import "./VInput.144983c9.js";
import "./VControl.f1021bc2.js";
import "./VOption.63c661e6.js";
import "./convert.prod.5d6dde81.js";
import "./notyf.es.f84e4201.js";
import "./vee-validate-zod.esm.9452dbca.js";
import "./general.8b156443.js";
import "./main.cf1f8e20.js";
import "./config.0fd79a34.js";
import "./rutinas.f6dc35e6.js";
import "./fechas.6bd42486.js";
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
