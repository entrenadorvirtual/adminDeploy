import { x as ref$1, C as deleteObject, F as getMetadata, B as getDownloadURL, z as storage, D as uploadBytes } from "./config.28ac5e58.js";
import { O as OBTENER_DOCUMENTO_REALTIME } from "./main.a2946418.js";
import { A as ACTUALIZAR_FOTO } from "./general.651d3f13.js";
import { k as LISTARNOMBRESIMAGENES, a as administracionStore, l as ACTUALIZAR_NOMBREIMAGENES } from "./administracion.aabf7eb6.js";
import { aa as watchEffect, y as ref, z as onMounted, ar as storeToRefs } from "./index.5859d3e2.js";
import { u as useNotyf } from "./useNotyf.2ce0502b.js";
const notif = useNotyf();
watchEffect(async () => {
  await LISTARNOMBRESIMAGENES();
});
const nombresImagenes = ref();
const imagenes = ref();
onMounted(() => {
  const response = storeToRefs(administracionStore());
  nombresImagenes.value = response.nombresImagenes;
  imagenes.value = response.imagenes;
});
const formatFechaHora = (date) => {
  const dia = date.getDate().toString().padStart(2, "0");
  const mes = (date.getMonth() + 1).toString().padStart(2, "0");
  const anio = date.getFullYear().toString();
  const hora = date.getHours().toString().padStart(2, "0");
  const minutos = date.getMinutes().toString().padStart(2, "0");
  const fechaFormateada = `${dia}/${mes}/${anio}`;
  const horaFormateada = `${hora}:${minutos}`;
  return { fechaFormateada, horaFormateada };
};
const eliminarImagen = (nameImg) => {
  const index = nombresImagenes.value.indexOf(nameImg);
  if (index !== -1) {
    nombresImagenes.value.splice(index, 1);
    ACTUALIZAR_NOMBREIMAGENES(nombresImagenes.value);
    const desertRef = ref$1(storage, "signUp/" + nameImg);
    const desertRefMovil = ref$1(storage, "signUpMovil/" + nameImg);
    deleteObject(desertRef).then(() => {
    }).catch((error) => {
      console.log(error);
    });
    deleteObject(desertRefMovil).then(() => {
    }).catch((error) => {
      console.log(error);
    });
  } else {
    console.log("No se pudo eliminar");
  }
};
const extraerInfoImagenes = async () => {
  const metadatosImagenes = await Promise.all(
    nombresImagenes.value.map((name) => {
      const ruta = ref$1(storage, "signUp/" + name);
      return getMetadata(ruta);
    })
  );
  imagenes.value = metadatosImagenes.map((metadata) => {
    const { fechaFormateada, horaFormateada } = formatFechaHora(
      new Date(metadata.updated)
    );
    return {
      nombre: metadata.name,
      tamano: Math.round(metadata.size / 1024 * 100) / 100 + " KB",
      tipo: metadata.contentType,
      fechas: fechaFormateada,
      hora: horaFormateada,
      url: `signUp/${metadata.name}`,
      urlmovil: `signUpMovil/${metadata.name}`
    };
  });
};
const buscarImagen = async (name) => {
  try {
    const url = await getDownloadURL(ref$1(storage, name));
    return url;
  } catch (error) {
    console.log("Error al obtener la imagen: ", error);
  }
};
const imagen = {
  message: "",
  file: null,
  accept: false
};
const agregarImagenes = async (file, fileMovil, name) => {
  const filename = file.name;
  const tipoArchivo = file.type;
  const tipoArchivoMovil = fileMovil.type;
  let newName = "";
  let ext = "";
  const blob = file.slice(0, file.size, tipoArchivo);
  const blobMovil = fileMovil.slice(0, fileMovil.size, tipoArchivoMovil);
  notif.dismissAll();
  ext = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
  newName = name + "." + ext;
  const index = nombresImagenes.value.indexOf(newName);
  if (index !== -1) {
    notif.error("Ya se encuentra una imagen registrada con ese nombre");
  } else {
    const storageRef = ref$1(storage, "signUp/" + newName);
    const storageRefMovil = ref$1(storage, "signUpMovil/" + newName);
    const newFile = new File([blob], newName, { type: tipoArchivo });
    const newFileMovil = new File([blobMovil], newName, { type: tipoArchivoMovil });
    nombresImagenes.value.push(newName);
    ACTUALIZAR_NOMBREIMAGENES(nombresImagenes.value);
    await uploadBytes(storageRef, newFile).then(() => {
    });
    await uploadBytes(storageRefMovil, newFileMovil).then(() => {
    });
    notif.success("Se agrego la imagen correctamente");
  }
};
const addPicture = async (file, uid) => {
  const filename = file.name;
  const tipoArchivo = file.type;
  let newName = "";
  let ext = "";
  const blob = file.slice(0, file.size, tipoArchivo);
  ext = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
  newName = uid + "." + ext;
  const storageRef = ref$1(storage, "profilePictures/" + newName);
  const newFile = new File([blob], newName, { type: tipoArchivo });
  await uploadBytes(storageRef, newFile).then(() => {
    getDownloadURL(storageRef).then((res) => {
      ACTUALIZAR_FOTO(uid, res);
    });
  });
};
const preview = async (event) => {
  const file = event.target.files[0];
  const tipoArchivo = file.type;
  const sizeArchivo = file.size;
  if (tipoArchivo === "image/jpeg" || tipoArchivo === "image/png") {
    if (sizeArchivo <= 2e6) {
      imagen.file = file;
      imagen.message = "loaded";
      imagen.accept = true;
    } else {
      imagen.message = "deniedSize";
      imagen.file = null;
      imagen.accept = false;
      return imagen;
    }
  } else {
    imagen.message = "denied";
    imagen.file = null;
    imagen.accept = false;
    return imagen;
  }
  return imagen;
};
const getImagenesSignUp = async () => OBTENER_DOCUMENTO_REALTIME(`signUp/`);
const signUpImagen = async (root, imagen2, movil = false) => {
  getDownloadURL(ref$1(storage, root + "/" + imagen2)).then((url) => {
    const img = document.getElementById("signUpImagen");
    if (img) {
      if (movil) {
        img.className = "card-bg";
      }
      img.setAttribute("src", url);
    }
  }).catch((error) => {
    console.log(error);
  });
};
export { agregarImagenes as a, buscarImagen as b, eliminarImagen as c, addPicture as d, extraerInfoImagenes as e, getImagenesSignUp as g, preview as p, signUpImagen as s };
