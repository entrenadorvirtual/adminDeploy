import { _ as _sfc_main$1 } from "./SemanaComodin.b35b854a.js";
import { E as ENOpcionesCru } from "./constantes.e793b8cd.js";
import { y as defineComponent, a as useUserSession, D as unref, o as openBlock, f as createBlock, l as createCommentVNode } from "./index.0f5aa7c2.js";
import "./ModalOptions.b434cda6.js";
import "./VModal.86fed773.js";
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
