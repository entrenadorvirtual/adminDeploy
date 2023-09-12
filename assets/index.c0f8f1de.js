import { _ as _sfc_main$1 } from "./Calendario.d2f36cee.js";
import { y as defineComponent, a as useUserSession, P as useHead, o as openBlock, i as createElementBlock, q as createVNode, D as unref } from "./index.0f5aa7c2.js";
import { u as useViewWrapper } from "./viewWrapper.218364e8.js";
import "./VModal.86fed773.js";
import "./VBlock.1ac07329.js";
import "./VAvatar.c41d574f.js";
import "./VControl.f1021bc2.js";
import "./VField.2f4065eb.js";
import "./VInput.144983c9.js";
import "./config.0fd79a34.js";
import "./auth.a1887b9f.js";
import "./managePictures.1bd844b7.js";
import "./main.cf1f8e20.js";
import "./general.8b156443.js";
import "./administracion.915f3778.js";
import "./useNotyf.602f0974.js";
import "./notyf.es.f84e4201.js";
import "./rutinas.f6dc35e6.js";
import "./fechas.6bd42486.js";
import "./BloquesTiempo.c11a0b08.js";
import "./VIconButton.039d85a4.js";
import "./VFlexTable.29eeadad.js";
import "./VFlex.0f2837f4.js";
import "./VFlexItem.cf6f9427.js";
import "./VTextarea.9bbf9d4d.js";
import "./VOption.63c661e6.js";
import "./convert.prod.5d6dde81.js";
import "./vee-validate-zod.esm.9452dbca.js";
import "./VCheckbox.fc5c4564.js";
import "./deportista.892d7693.js";
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
