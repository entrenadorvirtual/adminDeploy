import { O as OBTENER_DOCUMENTO_REALTIME, A as ACTUALIZAR_DOCUMENTO_REALTIME, a as CREAR_DOCUMENTO_REALTIME2, E as ELIMINAR_DOCUMENTO_REALTIME } from "./main.a2946418.js";
import { G as it } from "./config.28ac5e58.js";
const obtenerTodosLosVideos = async () => {
  try {
    const data = await OBTENER_DOCUMENTO_REALTIME("Videos");
    if (data) {
      const videosData = data;
      return Object.entries(videosData).flatMap(([entrenadorId, videosPorEntrenador]) => {
        return Object.entries(videosPorEntrenador).map(([id, videoData]) => ({
          id,
          entrenadorId,
          ...videoData
        }));
      });
    }
    return [];
  } catch (error) {
    console.error("Error al obtener los videos:", error);
    return [];
  }
};
const actualizarEstadoVideo = async (idEntrenador, idVideo, nuevoEstado, comentarios) => {
  console.log("Vi: ", idVideo);
  const comentariosFinal = comentarios || "";
  try {
    await ACTUALIZAR_DOCUMENTO_REALTIME(`Videos/${idEntrenador}`, idVideo, {
      estado: nuevoEstado,
      comentarios: comentariosFinal
    });
    console.log(`Estado del video ${idVideo} actualizado a: ${nuevoEstado}`);
  } catch (error) {
    console.error("Error al actualizar el estado del video:", error);
  }
};
const crearTermino = async (termino) => {
  try {
    await CREAR_DOCUMENTO_REALTIME2(`Terminos/${123456789}`, {
      titulo: termino.titulo,
      descripcion: termino.descripcion,
      fecha: termino.fecha instanceof it ? termino.fecha : it.now()
    });
    console.log("Video registrado exitosamente.");
  } catch (error) {
    console.error("Error al crear el registro de video:", error);
  }
};
const obtenerTerminos = async () => {
  try {
    const data = await OBTENER_DOCUMENTO_REALTIME("Terminos/123456789");
    if (data) {
      return Object.entries(data).map(([id, terminoData]) => ({
        id,
        ...terminoData
      }));
    }
    return [];
  } catch (error) {
    console.error("Error al obtener los t\xE9rminos:", error);
    return [];
  }
};
const editarTermino = async (idTermino, terminoActualizado) => {
  try {
    if (terminoActualizado.fecha && !(terminoActualizado.fecha instanceof it)) {
      terminoActualizado.fecha = it.now();
    }
    await ACTUALIZAR_DOCUMENTO_REALTIME(
      `Terminos/123456789`,
      idTermino,
      terminoActualizado
    );
    console.log("T\xE9rmino actualizado exitosamente.");
  } catch (error) {
    console.error("Error al actualizar el t\xE9rmino:", error);
  }
};
const eliminarTermino = async (idTermino) => {
  try {
    await ELIMINAR_DOCUMENTO_REALTIME(`Terminos/123456789`, idTermino);
    console.log("T\xE9rmino eliminado exitosamente.");
  } catch (error) {
    console.error("Error al eliminar el t\xE9rmino:", error);
  }
};
export { actualizarEstadoVideo as a, obtenerTerminos as b, crearTermino as c, eliminarTermino as d, editarTermino as e, obtenerTodosLosVideos as o };
