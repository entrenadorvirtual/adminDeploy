import { _ as _sfc_main$1 } from "./CrudPlanesGratuitos.50070940.js";
import { y as defineComponent, a as useUserSession, P as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.a7fc5dec.js";
import { u as useViewWrapper } from "./viewWrapper.0c20b402.js";
import "./ModalOptions.eed626b7.js";
import "./VModal.6ca1fc6c.js";
import "./PlanGratuito.806228dc.js";
import "./ListWidgetSingle.599b7e53.js";
import "./BloquesDistancia.82637331.js";
import "./VFlexTable.d8d849dc.js";
import "./VFlex.122176e5.js";
import "./VControl.4d17fa85.js";
import "./VFlexItem.a5d61664.js";
import "./VTextarea.9eda26d4.js";
import "./VIconButton.336a029e.js";
import "./VInput.5920a8ca.js";
import "./VOption.ee07ba1d.js";
import "./convert.prod.1f5d8f54.js";
import "./vee-validate-zod.esm.9452dbca.js";
import "./general.8b156443.js";
import "./main.cf1f8e20.js";
import "./config.0fd79a34.js";
import "./notyf.es.f84e4201.js";
import "./rutinas.71165fa8.js";
import "./mainfirestore.b9d64d68.js";
import "./fechas.6bd42486.js";
import "./DeportesDisponibles.778c1af8.js";
import "./constantes.e793b8cd.js";
import "./auth.12bba30e.js";
import "./managePictures.df5702c9.js";
import "./administracion.b83e2e82.js";
import "./useNotyf.ce7ee7f1.js";
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