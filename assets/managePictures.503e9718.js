import { l as getDownloadURL, m as ref, n as storage, q as uploadBytes } from "./config.3d78ff49.js";
import { O as OBTENER_DOCUMENTO_REALTIME } from "./main.981fd68f.js";
import { A as ACTUALIZAR_FOTO } from "./general.b8dca58f.js";
const imagen = {
  message: "",
  file: null,
  accept: false
};
const addPicture = async (file, uid) => {
  const filename = file.name;
  const tipoArchivo = file.type;
  let newName = "";
  let ext = "";
  const blob = file.slice(0, file.size, tipoArchivo);
  ext = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
  newName = uid + "." + ext;
  const storageRef = ref(storage, "profilePictures/" + newName);
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
  getDownloadURL(ref(storage, root + "/" + imagen2)).then((url) => {
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
export { addPicture as a, getImagenesSignUp as g, preview as p, signUpImagen as s };
