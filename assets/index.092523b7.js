import { r as ref$1, d as database, f as onChildAdded, g as get } from "./config.f3ec4a91.js";
import { y as defineComponent, z as ref, P as useHead, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, t as toDisplayString, F as Fragment, s as renderList, k as normalizeClass } from "./index.a70cc630.js";
import { u as useViewWrapper } from "./viewWrapper.6b9a60ad.js";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", null, "Lista de Notificaciones", -1);
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "content" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "notification-info" };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "No hay notificaciones.", -1);
const _hoisted_8 = [
  _hoisted_7
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const notificaciones = ref([]);
    const notificacionesSinVer = ref(0);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Notificaciones");
    useHead({
      title: "Notificaciones"
    });
    const agregarNotificacion = (titulo, mensaje, fecha, foto_url, userUID, leida) => {
      const nuevaNotificacion = {
        id: Date.now(),
        titulo,
        mensaje,
        fecha,
        foto_url,
        userUID,
        leida
      };
      notificaciones.value.push(nuevaNotificacion);
      notificaciones.value.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
      if (!leida) {
        notificacionesSinVer.value++;
      }
    };
    const initNotificacionesSolicitudes = () => {
      const solicitudesRef = ref$1(database, "solicitudes");
      onChildAdded(solicitudesRef, async (snapshot) => {
        try {
          const solicitud = snapshot.val();
          const solicitudID = snapshot.key;
          if (!solicitud || !solicitudID) {
            console.warn("Solicitud inv\xE1lida o sin ID. Se omite el procesamiento.");
            return;
          }
          const notiRRef = ref$1(database, `solicitudes/${solicitudID}/NotiR`);
          const notiRSnapshot = await get(notiRRef);
          if (solicitud) {
            const titulo = `Nueva Solicitud: ${solicitud.deporte || "Desconocido"}`;
            const mensaje = `El deportista ${solicitud.nombres || "Desconocido"} ha registrado una nueva solicitud. Estado: ${solicitud.estado || "Desconocido"}.`;
            const fecha = new Date(solicitud.fecha_registro || Date.now());
            const foto_url = solicitud.foto || "/images/avatars/svg/vuero-10.svg";
            const leida = solicitud.NotiR;
            agregarNotificacion(titulo, mensaje, fecha, foto_url, solicitudID, leida);
          }
        } catch (error) {
          console.error(`Error procesando la solicitud con ID: ${snapshot.key}, error`);
        }
      });
    };
    const initNotificacionesPlanes = () => {
      const planesRef = ref$1(database, "planes_gratuitos");
      onChildAdded(planesRef, async (snapshot) => {
        const plan = snapshot.val();
        const planID = snapshot.key;
        if (plan) {
          let nombreEntrenador = "Desconocido";
          let esEntrenador = false;
          if (plan.id_entrenador) {
            const entrenadorRef = ref$1(database, `users/${plan.id_entrenador}`);
            const entrenadorSnapshot = await get(entrenadorRef);
            if (entrenadorSnapshot.exists()) {
              const entrenador = entrenadorSnapshot.val();
              if (entrenador.rol === "Entrenador") {
                esEntrenador = true;
                nombreEntrenador = `${entrenador.nombres || "Desconocido"} ${entrenador.apellidos}`.trim();
              }
            }
          }
          if (esEntrenador) {
            const titulo = `Nuevo Plan Gratuito: ${plan.nombre_plan || "Desconocido"}`;
            const mensaje = `El entrenador ${nombreEntrenador} ha publicado un plan para el deporte ${plan.deporte || "Desconocido"}. Descripci\xF3n: ${plan.descripcion || "No especificada."}`;
            const fecha = new Date();
            const foto_url = plan.foto_url || "/images/avatars/svg/vuero-9.svg";
            agregarNotificacion(
              titulo,
              mensaje,
              fecha,
              foto_url,
              planID || "unknown",
              plan.NotiR || false
            );
          }
        }
      });
    };
    const initNotificacionesUsuarios = () => {
      const usersRef = ref$1(database, "users");
      onChildAdded(usersRef, async (snapshot) => {
        const user = snapshot.val();
        if (user && ["Deportista", "Entrenador"].includes(user.rol)) {
          const userUID = snapshot.key;
          const NotiRRef = ref$1(database, `users/${userUID}/NotiR`);
          const NotiRSnapshot = await get(NotiRRef);
          const leida = NotiRSnapshot.exists() ? NotiRSnapshot.val() : false;
          const titulo = user.rol === "Deportista" ? "Nuevo Deportista Registrado" : "Nuevo Entrenador Registrado";
          const mensaje = `El usuario ${user.nombres || "Desconocido"} ${user.apellidos || ""} se ha registrado como ${user.rol.toLowerCase()}.`;
          const fecha = new Date(user.fecha_registro || Date.now());
          const foto_url = user.foto_url || "/images/avatars/svg/vuero-2.svg";
          agregarNotificacion(titulo, mensaje, fecha, foto_url, userUID || "unknown", leida);
        }
      });
    };
    onMounted(() => {
      initNotificacionesUsuarios();
      initNotificacionesPlanes();
      initNotificacionesSolicitudes();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        notificaciones.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("p", null, "Total no vistas: " + toDisplayString(notificacionesSinVer.value), 1),
          createBaseVNode("ul", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(notificaciones.value, (notif) => {
              return openBlock(), createElementBlock("li", {
                key: notif.id
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(["notification", { leida: notif.leida }])
                }, [
                  createBaseVNode("div", _hoisted_3, [
                    createBaseVNode("img", {
                      src: notif.foto_url,
                      alt: "Foto del usuario",
                      width: "50",
                      height: "50",
                      class: "user-photo"
                    }, null, 8, _hoisted_4),
                    createBaseVNode("div", _hoisted_5, [
                      createBaseVNode("h3", null, toDisplayString(notif.titulo), 1),
                      createBaseVNode("p", null, toDisplayString(notif.mensaje), 1),
                      createBaseVNode("small", null, toDisplayString(notif.fecha), 1)
                    ])
                  ])
                ], 2)
              ]);
            }), 128))
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_6, _hoisted_8))
      ]);
    };
  }
});
export { _sfc_main as default };
