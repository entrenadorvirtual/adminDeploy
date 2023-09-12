import { _ as _sfc_main$4 } from "./VerPerfilDeportista.8d4f5c0e.js";
import { _ as _sfc_main$3 } from "./Calendario.d2f36cee.js";
import { y as defineComponent, a as useUserSession, z as ref, A as onMounted, o as openBlock, i as createElementBlock, F as Fragment, s as renderList, j as createBaseVNode, t as toDisplayString, q as createVNode, w as withCtx, l as createCommentVNode, f as createBlock, m as createTextVNode, O as _sfc_main$2, V as _export_sfc } from "./index.0f5aa7c2.js";
import { e as onValue, r as ref$1, d as database } from "./config.0fd79a34.js";
import { G as GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR } from "./match.1a597960.js";
import "./VField.2f4065eb.js";
import "./VAvatar.c41d574f.js";
import "./deportista.892d7693.js";
import "./general.8b156443.js";
import "./main.cf1f8e20.js";
import "./VModal.86fed773.js";
import "./VBlock.1ac07329.js";
import "./VControl.f1021bc2.js";
import "./VInput.144983c9.js";
import "./auth.a1887b9f.js";
import "./managePictures.1bd844b7.js";
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
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "column" };
const _hoisted_3 = { class: "column" };
const _hoisted_4 = { class: "column" };
const _hoisted_5 = { class: "column" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Ver Calendario ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Ver Perfil ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userStore = useUserSession();
    const solicitudes = ref([]);
    const solicitudActual = ref();
    const mostrarVerPerfilDeportista = ref(false);
    const verSolicitud = async (solicitud) => {
      solicitudActual.value = solicitud;
    };
    const verPerfil = async (solicitud) => {
      solicitudActual.value = solicitud;
      mostrarVerPerfilDeportista.value = true;
    };
    const cerrarPerfil = () => {
      mostrarVerPerfilDeportista.value = false;
      solicitudActual.value = void 0;
    };
    onMounted(async () => {
      solicitudActual.value = void 0;
      onValue(ref$1(database, "solicitudes"), (snapshot) => {
        if (snapshot.exists()) {
          GET_SOLICITUDES_APROBADAS_DESDE_ENTRENADOR(userStore.userId, snapshot.val()).then((result) => {
            solicitudes.value = result;
          }).catch((err) => {
            console.log(err);
          });
        } else {
          solicitudes.value = [];
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_Calendario = _sfc_main$3;
      const _component_VerPerfilDeportista = _sfc_main$4;
      return openBlock(), createElementBlock("div", null, [
        !solicitudActual.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(solicitudes.value, (solicitud) => {
            return openBlock(), createElementBlock("div", {
              key: solicitud.id,
              class: "columns"
            }, [
              createBaseVNode("div", _hoisted_2, toDisplayString(solicitud.nombres), 1),
              createBaseVNode("div", _hoisted_3, toDisplayString(solicitud.deporte), 1),
              createBaseVNode("div", _hoisted_4, toDisplayString(solicitud.foto || "foto"), 1),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_VButton, {
                  color: "warning",
                  onClick: () => verSolicitud(solicitud)
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode(_component_VButton, {
                  color: "success",
                  onClick: () => verPerfil(solicitud)
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        solicitudActual.value && !mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_Calendario, {
          key: 1,
          iddeportista: solicitudActual.value.id_deportista,
          identrenador: solicitudActual.value.id_entrenador,
          onClose: _cache[0] || (_cache[0] = ($event) => solicitudActual.value = void 0)
        }, null, 8, ["iddeportista", "identrenador"])) : createCommentVNode("", true),
        solicitudActual.value && mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_VerPerfilDeportista, {
          key: 2,
          aprobado: false,
          iddeportista: solicitudActual.value.id_deportista,
          onCerrar: cerrarPerfil
        }, null, 8, ["iddeportista"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_SolicitudesAprobadas = _sfc_main$1;
  return openBlock(), createBlock(_component_SolicitudesAprobadas);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
