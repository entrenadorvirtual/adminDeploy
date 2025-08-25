import { r as ref$1, d as database, h as onChildAdded, g as get } from "./config.28ac5e58.js";
import { x as defineComponent, a0 as useRouter, y as ref, O as useHead, z as onMounted, o as openBlock, g as createElementBlock, i as createBaseVNode, t as toDisplayString, F as Fragment, q as renderList, j as normalizeClass } from "./index.7277f539.js";
import { u as useViewWrapper } from "./viewWrapper.d9a08fd8.js";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", null, "Lista de Notificaciones", -1);
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "content" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "notification-info" };
const _hoisted_7 = { key: 1 };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, "No hay notificaciones.", -1);
const _hoisted_9 = [
  _hoisted_8
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    const notificaciones = ref([]);
    const notificacionesSinVer = ref(0);
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Notificaciones");
    useHead({ title: "Notificaciones" });
    const redirigir = (route) => {
      if (route == null ? void 0 : route.name)
        router.push(route);
    };
    const agregarNotificacion = (titulo, mensaje, fecha, foto_url, userUID, leida, route) => {
      const nuevaNotificacion = {
        id: Date.now(),
        titulo,
        mensaje,
        fecha,
        foto_url,
        userUID,
        leida,
        route
      };
      notificaciones.value.push(nuevaNotificacion);
      notificaciones.value.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
      if (!leida)
        notificacionesSinVer.value++;
    };
    const initNotificacionesSolicitudes = () => {
      const solicitudesRef = ref$1(database, "solicitudes");
      onChildAdded(solicitudesRef, async (snapshot) => {
        try {
          const solicitud = snapshot.val();
          const solicitudID = snapshot.key;
          if (!solicitud || !solicitudID)
            return;
          const notiRRef = ref$1(database, `solicitudes/${solicitudID}/NotiR`);
          const notiRSnapshot = await get(notiRRef);
          const titulo = `Nueva Solicitud: ${solicitud.deporte || "Desconocido"}`;
          const mensaje = `El deportista ${solicitud.nombres || "Desconocido"} ha registrado una nueva solicitud. Estado: ${solicitud.estado || "Desconocido"}.`;
          const fecha = new Date(solicitud.fecha_registro || Date.now());
          const foto_url = solicitud.foto || "/images/avatars/svg/vuero-10.svg";
          const leida = solicitud.NotiR;
          agregarNotificacion(titulo, mensaje, fecha, foto_url, solicitudID, leida);
        } catch (error) {
          console.error(`Error procesando solicitud ID: ${snapshot.key}, ${error.message || error}`);
        }
      });
    };
    const initNotificacionesPlanes = () => {
      const planesRef = ref$1(database, "planes_gratuitos");
      onChildAdded(planesRef, async (snapshot) => {
        const plan = snapshot.val();
        const planID = snapshot.key;
        if (!plan || !plan.id_entrenador)
          return;
        const entrenadorRef = ref$1(database, `users/${plan.id_entrenador}`);
        const entrenadorSnapshot = await get(entrenadorRef);
        if (!entrenadorSnapshot.exists())
          return;
        const entrenador = entrenadorSnapshot.val();
        if (entrenador.rol !== "Entrenador")
          return;
        const nombreEntrenador = `${entrenador.nombres || "Desconocido"} ${entrenador.apellidos || ""}`.trim();
        const titulo = `Nuevo Plan Gratuito: ${plan.nombre_plan || "Desconocido"}`;
        const mensaje = `El entrenador ${nombreEntrenador} ha publicado un plan para el deporte ${plan.deporte || "Desconocido"}. Descripci\xF3n: ${plan.descripcion || "No especificada."}`;
        const fecha = new Date(plan.fecha_registro || Date.now());
        const foto_url = plan.foto_url || "/images/avatars/svg/vuero-9.svg";
        const route = { name: "administrador-reportPlanesGratuitos" };
        agregarNotificacion(titulo, mensaje, fecha, foto_url, planID || "unknown", plan.NotiR || false, route);
      });
    };
    const initNotificacionesUsuarios = () => {
      const usersRef = ref$1(database, "users");
      onChildAdded(usersRef, async (snapshot) => {
        const user = snapshot.val();
        const userUID = snapshot.key;
        if (!user || !["Deportista", "Entrenador"].includes(user.rol))
          return;
        const NotiRRef = ref$1(database, `users/${userUID}/NotiR`);
        const NotiRSnapshot = await get(NotiRRef);
        const leida = NotiRSnapshot.exists() ? NotiRSnapshot.val() : false;
        const titulo = user.rol === "Deportista" ? "Nuevo Deportista Registrado" : "Nuevo Entrenador Registrado";
        const mensaje = `El usuario ${user.nombres || "Desconocido"} ${user.apellidos || ""} se ha registrado como ${user.rol.toLowerCase()}.`;
        const fecha = new Date(user.fecha_registro || Date.now());
        const foto_url = user.foto_url || "/images/avatars/svg/vuero-2.svg";
        const route = user.rol === "Deportista" ? { name: "administrador-reportenuevosusuarios" } : { name: "administrador-reportEntrenador-entrenadores" };
        agregarNotificacion(titulo, mensaje, fecha, foto_url, userUID || "unknown", leida, route);
      });
    };
    const initNotificacionesVideos = () => {
      const videosRef = ref$1(database, "Videos");
      onChildAdded(videosRef, (userSnapshot) => {
        const userUID = userSnapshot.key;
        onChildAdded(userSnapshot.ref, async (videoSnapshot) => {
          var _a;
          const video = videoSnapshot.val();
          if (!video || video.estado !== "Pendiente")
            return;
          const userRef = ref$1(database, `users/${userUID}`);
          const userSnap = await get(userRef);
          const user = userSnap.val();
          if (!user)
            return;
          const titulo = "Nuevo Video Subido";
          const mensaje = `El entrenador ${user.nombres || "Desconocido"} ${user.apellidos || ""} ha subido un nuevo video: ${video.titulo || "Sin t\xEDtulo"}.`;
          const timestamp = (((_a = video.fecha) == null ? void 0 : _a.seconds) || Date.now()) * 1e3;
          const fecha = new Date(timestamp);
          const foto_url = user.foto_url || "/images/avatars/svg/vuero-2.svg";
          const route = { name: "administrador-contenidoMultimedia-contenido" };
          const leida = !!video.notiR;
          agregarNotificacion(titulo, mensaje, fecha, foto_url, userUID, leida, route);
        });
      });
    };
    onMounted(() => {
      initNotificacionesUsuarios();
      initNotificacionesPlanes();
      initNotificacionesSolicitudes();
      initNotificacionesVideos();
      asignarFechasAPlanesGratuitos();
      notificaciones.value.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
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
                  class: normalizeClass(["notification", { leida: notif.leida }]),
                  style: { "cursor": "pointer" },
                  onClick: ($event) => redirigir(notif.route)
                }, [
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("img", {
                      src: notif.foto_url,
                      alt: "Foto del usuario",
                      width: "50",
                      height: "50",
                      class: "user-photo"
                    }, null, 8, _hoisted_5),
                    createBaseVNode("div", _hoisted_6, [
                      createBaseVNode("h3", null, toDisplayString(notif.titulo), 1),
                      createBaseVNode("p", null, toDisplayString(notif.mensaje), 1),
                      createBaseVNode("small", null, toDisplayString(notif.fecha), 1)
                    ])
                  ])
                ], 10, _hoisted_3)
              ]);
            }), 128))
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_9))
      ]);
    };
  }
});
export { _sfc_main as default };
