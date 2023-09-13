import { _ as _sfc_main$1 } from "./SemanaComodin.dd20fd86.js";
import { E as ENOpcionesCru } from "./constantes.e793b8cd.js";
import { y as defineComponent, a as useUserSession, D as unref, o as openBlock, f as createBlock, l as createCommentVNode } from "./index.a7fc5dec.js";
import "./ModalOptions.eed626b7.js";
import "./VModal.6ca1fc6c.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userSession = useUserSession();
    return (_ctx, _cache) => {
      const _component_SemanaComodin = _sfc_main$1;
      return unref(userSession).userEspecial === "SuperEntrenador" ? (openBlock(), createBlock(_component_SemanaComodin, {
        key: 0,
        opcioncrudplanes: unref(ENOpcionesCru).CREAR,
        crear: "",
        ver: "",
        editar: "",
        eliminar: ""
      }, null, 8, ["opcioncrudplanes"])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
