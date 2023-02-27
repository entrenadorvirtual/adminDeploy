import { _ as _sfc_main$1 } from "./SemanaComodin.25a1f90c.js";
import { E as ENOpcionesCru } from "./constantes.e793b8cd.js";
import { y as defineComponent, a as useUserSession, D as unref, o as openBlock, f as createBlock, l as createCommentVNode } from "./index.420249be.js";
import "./ModalOptions.77d0f432.js";
import "./VModal.ba9a13a9.js";
import "./rutinas.94460818.js";
import "./VInput.8bd6418e.js";
import "./VLabel.82cb8353.js";
import "./VControl.fa82c9c6.js";
import "./VOption.54ccc991.js";
import "./index.1fbd2b5e.js";
import "./main.981fd68f.js";
import "./config.3d78ff49.js";
import "./fechas.a424fa09.js";
import "./VField.20e6a090.js";
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
