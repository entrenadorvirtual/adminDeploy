import { _ as _sfc_main$3 } from "./VerPerfilDeportista.8d4f5c0e.js";
import { y as defineComponent, a as useUserSession, z as ref, A as onMounted, o as openBlock, i as createElementBlock, F as Fragment, s as renderList, j as createBaseVNode, t as toDisplayString, q as createVNode, w as withCtx, l as createCommentVNode, f as createBlock, m as createTextVNode, O as _sfc_main$2, V as _export_sfc } from "./index.0f5aa7c2.js";
import { d as EstadoSolicitudes, e as GET_SOLICITUDES_DESDE_ENTRENADOR, C as CAMBIAR_ESTADO_INVITACION } from "./match.1a597960.js";
import { e as onValue, r as ref$1, d as database } from "./config.0fd79a34.js";
import { D as DeportesDisponibles } from "./DeportesDisponibles.778c1af8.js";
import "./VField.2f4065eb.js";
import "./VAvatar.c41d574f.js";
import "./deportista.892d7693.js";
import "./general.8b156443.js";
import "./main.cf1f8e20.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "column" };
const _hoisted_3 = { class: "column" };
const _hoisted_4 = { class: "column" };
const _hoisted_5 = { class: "row" };
const _hoisted_6 = { class: "column" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Ver Perfil ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const userStore = useUserSession();
    const solicitudes = ref([]);
    const mostrarVerPerfilDeportista = ref(false);
    const solicitudSeleccionada = ref({
      estado: EstadoSolicitudes.PENDIENTE,
      fecha_registro: 0,
      foto: "",
      id: "",
      id_deportista: "",
      id_entrenador: "",
      nombres: "",
      deporte: DeportesDisponibles.ATLETISMO
    });
    const aceptarSolicitud = async () => {
      await CAMBIAR_ESTADO_INVITACION(solicitudSeleccionada.value, EstadoSolicitudes.APROBADO);
      mostrarVerPerfilDeportista.value = false;
    };
    const cancelarSolicitud = async () => {
      await CAMBIAR_ESTADO_INVITACION(
        solicitudSeleccionada.value,
        EstadoSolicitudes.RECHAZADO
      );
      mostrarVerPerfilDeportista.value = false;
    };
    const verPerfilDeportista = (idSolicitud) => {
      solicitudSeleccionada.value = idSolicitud;
      mostrarVerPerfilDeportista.value = true;
    };
    onMounted(async () => {
      onValue(ref$1(database, "solicitudes"), (snapshot) => {
        if (snapshot.exists()) {
          GET_SOLICITUDES_DESDE_ENTRENADOR(userStore.userId, snapshot.val()).then((result) => {
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
      const _component_VerPerfilDeportista = _sfc_main$3;
      return openBlock(), createElementBlock("div", null, [
        !mostrarVerPerfilDeportista.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(solicitudes.value, (solicitud) => {
            return openBlock(), createElementBlock("div", {
              key: solicitud.id,
              class: "columns"
            }, [
              createBaseVNode("div", _hoisted_2, toDisplayString(solicitud.nombres), 1),
              createBaseVNode("div", _hoisted_3, toDisplayString(solicitud.deporte), 1),
              createBaseVNode("div", _hoisted_4, toDisplayString(solicitud.foto || "foto"), 1),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_VButton, {
                    color: "success",
                    onClick: ($event) => verPerfilDeportista(solicitud)
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])
              ])
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        mostrarVerPerfilDeportista.value ? (openBlock(), createBlock(_component_VerPerfilDeportista, {
          key: 1,
          aprobado: "",
          iddeportista: solicitudSeleccionada.value.id_deportista,
          onCerrar: _cache[0] || (_cache[0] = ($event) => mostrarVerPerfilDeportista.value = false),
          onAceptar: aceptarSolicitud,
          onRechazar: cancelarSolicitud
        }, null, 8, ["iddeportista"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_SolicitudesEntrenador = _sfc_main$1;
  return openBlock(), createBlock(_component_SolicitudesEntrenador);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
