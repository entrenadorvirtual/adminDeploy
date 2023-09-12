import { e as onValue, r as ref, d as database, s as set, k as df, _ as _h, h as firestore, i as gh, y as yf, B as ref$1, F as storage, H as listAll, E as getDownloadURL, C as deleteObject, G as uploadBytes, f as pf, J as gf } from "./config.0fd79a34.js";
import { A as ACTUALIZAR_DOCUMENTO_REALTIME } from "./main.cf1f8e20.js";
import { U as defineStore, at as storeToRefs, z as ref$2 } from "./index.0f5aa7c2.js";
import { u as useNotyf } from "./useNotyf.602f0974.js";
const administracionStore = defineStore("entrenador", {
  state: () => ({
    entrenadores: [],
    ciudades: [],
    paises: [],
    usuarios: [],
    deportes: [],
    distancias: [],
    nombresImagenes: [],
    imagenes: [],
    nacionalidades: [],
    manualesEntrenador: [],
    variablesEntrenador: [],
    variablesDeportista: []
  })
});
defineStore("deportista", {
  state: () => ({
    deportistas: [],
    ciudades: [],
    paises: [],
    usuarios: [],
    deportes: [],
    distancias: [],
    nombresImagenes: [],
    imagenes: []
  })
});
const notif = useNotyf();
const archivo = {
  message: "",
  file: null,
  accept: false
};
const LISTARTODOSLOSENTRENADORES = async () => {
  const { entrenadores } = storeToRefs(administracionStore());
  onValue(ref(database, "users/"), (snapshot) => {
    const array = [];
    const val = snapshot.val();
    Object.keys(val).forEach((element) => {
      if (val[element].rol == "Entrenador") {
        const entre = val[element];
        entre.id = element;
        array.push(entre);
      }
    });
    entrenadores.value = array;
  });
};
const LISTARNOMBRESIMAGENES = async () => {
  const { nombresImagenes } = storeToRefs(administracionStore());
  onValue(ref(database, "signUp/"), (snapshot) => {
    const array = [];
    const val = snapshot.val();
    Object.keys(val).forEach((element) => {
      array.push(val[element]);
    });
    nombresImagenes.value = array;
  });
};
const LISTARTODOSLOSUSUARIOS = async () => {
  const { usuarios } = storeToRefs(administracionStore());
  onValue(ref(database, "users/"), (snapshot) => {
    const array = [];
    const val = snapshot.val();
    Object.keys(val).forEach((element) => {
      const entre = val[element];
      entre.id = element;
      array.push(entre);
    });
    usuarios.value = array;
  });
};
const LISTARCIUDADES = async (pais) => {
  const { ciudades } = storeToRefs(administracionStore());
  onValue(ref(database, `Ciudades/${pais}`), (snapshot) => {
    const array = [];
    const val = snapshot.val();
    Object.keys(val).forEach((element) => {
      const entre = val[element];
      array.push(entre);
    });
    ciudades.value = array;
  });
};
const CAMBIARESTADOENTRENADOR = (idEntrenador, estado, descripcion, categoria, estrellas) => {
  ACTUALIZAR_DOCUMENTO_REALTIME("users", idEntrenador, {
    estado,
    descripcion,
    categoria,
    estrellas
  });
};
const LISTARPAISES = async () => {
  const { paises } = storeToRefs(administracionStore());
  onValue(ref(database, "Ciudades/"), (snapshot) => {
    const array = [];
    const val = snapshot.val();
    Object.keys(val).forEach((element) => {
      array.push(element);
    });
    paises.value = array;
  });
};
const CREAR_CIUDAD = async (pais, ciudades) => {
  if (!pais || !ciudades) {
    throw new Error("Faltan parametros pais o ciudades");
  }
  const rutaBD = ref(database, `Ciudades/${pais}`);
  try {
    await set(rutaBD, ciudades);
  } catch (error) {
    console.log(error);
  }
};
const ACTUALIZAR_CIUDAD = async (pais, ciudades) => {
  const rutaBD = ref(database, `Ciudades/${pais}`);
  try {
    await set(rutaBD, ciudades);
  } catch (error) {
    console.log(error);
  }
};
const ACTUALIZAR_NOMBREIMAGENES = async (nombres) => {
  const rutaBD = ref(database, `signUp`);
  try {
    await set(rutaBD, nombres);
  } catch (error) {
    console.log(error);
  }
};
const LISTARDISTANCIAS = async () => {
  const { distancias } = storeToRefs(administracionStore());
  onValue(ref(database, `Distancias`), (snapshot) => {
    const val = snapshot.val();
    distancias.value = val;
  });
};
const ACTUALIZAR_DISTANCIA = async (distancias) => {
  const rutaBD = ref(database, `Distancias`);
  try {
    await set(rutaBD, distancias);
  } catch (error) {
    console.log(error);
  }
};
const LISTARNACIONALIDADES = async () => {
  const { nacionalidades } = storeToRefs(administracionStore());
  onValue(ref(database, `Nacionalidades`), (snapshot) => {
    const val = snapshot.val();
    nacionalidades.value = val;
  });
};
const ACTUALIZAR_NACIONALIDAD = async (nacionalidades) => {
  const rutaBD = ref(database, `Nacionalidades`);
  try {
    await set(rutaBD, nacionalidades);
  } catch (error) {
    console.log(error);
  }
};
const ELIMINAR_MANUALES_ENTRENADOR = async (elemento) => {
  try {
    const querySnapshot = await df(_h(firestore, "manuales"));
    let bandera = false;
    for (const docSnapshot of querySnapshot.docs) {
      const documentData = docSnapshot.data();
      if (documentData.url === elemento.url) {
        const manual2 = gh(firestore, "manuales", docSnapshot.id);
        await yf(manual2);
        bandera = true;
      }
    }
    if (bandera) {
      const manualesRef = ref$1(storage, "manuales");
      const files = await listAll(manualesRef);
      for (const file of files.items) {
        const downloadURL = await getDownloadURL(file);
        if (downloadURL === elemento.url) {
          await deleteObject(file);
        }
      }
    }
  } catch (error) {
    console.error("Error al obtener los documentos:", error);
  }
};
const previewFilesManuales = async (event) => {
  const file = event.target.files[0];
  const tipoArchivo = file.type;
  const sizeArchivo = file.size;
  if (tipoArchivo === "application/pdf") {
    if (sizeArchivo <= 2e6) {
      archivo.file = file;
      archivo.message = "loaded";
      archivo.accept = true;
    } else {
      archivo.message = "deniedSize";
      archivo.file = null;
      archivo.accept = false;
      return archivo;
    }
  } else {
    archivo.message = "deniedSize";
    archivo.file = null;
    archivo.accept = false;
    return archivo;
  }
  return archivo;
};
const saveFilesManuales = async (file, categoria, tipo, estado, version) => {
  const filename = file.name;
  const tipoArchivo = file.type;
  const urlManual = ref$2("");
  const fechaActual = new Date();
  const blob = file.slice(0, file.size, tipoArchivo);
  const storageRef = ref$1(storage, "manuales/" + filename);
  const newFile = new File([blob], filename, { type: tipoArchivo });
  await uploadBytes(storageRef, newFile).then(() => {
  });
  await getDownloadURL(ref$1(storage, "manuales/" + filename)).then((url) => {
    urlManual.value = url;
  }).catch((error) => {
    console.log(error);
  });
  await pf(_h(firestore, "manuales"), {
    estado,
    fecha: fechaActual,
    nombre: categoria,
    tipo,
    url: urlManual.value,
    version
  });
  notif.success("Se agrego correctamente el manual");
};
const ACTUALIZAR_MANUAL_DOCUMENTO = async (id, file, categoria, tipo, estado, version, url) => {
  const filename = file.name;
  const tipoArchivo = file.type;
  const urlManual = ref$2("");
  const fechaActual = new Date();
  const blob = file.slice(0, file.size, tipoArchivo);
  const storageRef = ref$1(storage, "manuales/" + filename);
  const newFile = new File([blob], filename, { type: tipoArchivo });
  const manualesRef = ref$1(storage, "manuales");
  const files = await listAll(manualesRef);
  for (const file2 of files.items) {
    const downloadURL = await getDownloadURL(file2);
    if (downloadURL === url) {
      await deleteObject(file2);
    }
  }
  await uploadBytes(storageRef, newFile).then(() => {
  });
  await getDownloadURL(ref$1(storage, "manuales/" + filename)).then((url2) => {
    urlManual.value = url2;
  }).catch((error) => {
    console.log(error);
  });
  const docRef = gh(firestore, "manuales", id);
  await gf(docRef, {
    estado,
    fecha: fechaActual,
    nombre: categoria,
    tipo,
    version,
    url: urlManual.value
  });
  notif.success("Se actualiz\xF3 correctamente el manual");
};
const ACTUALIZAR_MANUAL = async (id, categoria, tipo, estado, version) => {
  const fechaActual = new Date();
  const docRef = gh(firestore, "manuales", id);
  await gf(docRef, {
    estado,
    fecha: fechaActual,
    nombre: categoria,
    tipo,
    version
  });
};
export { ACTUALIZAR_NOMBREIMAGENES as A, CREAR_CIUDAD as C, ELIMINAR_MANUALES_ENTRENADOR as E, LISTARNOMBRESIMAGENES as L, administracionStore as a, LISTARCIUDADES as b, LISTARTODOSLOSUSUARIOS as c, ACTUALIZAR_CIUDAD as d, LISTARPAISES as e, LISTARDISTANCIAS as f, ACTUALIZAR_DISTANCIA as g, LISTARTODOSLOSENTRENADORES as h, CAMBIARESTADOENTRENADOR as i, ACTUALIZAR_MANUAL_DOCUMENTO as j, ACTUALIZAR_MANUAL as k, LISTARNACIONALIDADES as l, ACTUALIZAR_NACIONALIDAD as m, previewFilesManuales as p, saveFilesManuales as s };
