import { e as onValue, r as ref, d as database, s as set, k as df, _ as _h, i as firestore, l as gh, y as yf, v as ref$1, w as storage, x as listAll, z as getDownloadURL, A as deleteObject, B as uploadBytes, h as pf, C as gf, g as get, c as child } from "./config.cf3a8941.js";
import { A as ACTUALIZAR_DOCUMENTO_REALTIME } from "./main.abb91ed8.js";
import { U as defineStore, as as storeToRefs, z as ref$2 } from "./index.7ac0c9d2.js";
import { u as useNotyf } from "./useNotyf.edf649d6.js";
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
const LISTARUSUARIOSENLINEA = async () => {
  const dbRef = ref(database);
  const usuarios = [];
  return get(child(dbRef, "users/")).then((snapshot) => {
    if (snapshot.exists()) {
      const val = snapshot.val();
      Object.keys(val).forEach((element) => {
        if (val[element].isLoggedIn) {
          const user = val[element];
          user.id = element;
          usuarios.push(user);
        }
      });
    }
    return usuarios;
  }).catch((error) => {
    console.error(error);
    return [];
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
        const manual = gh(firestore, "manuales", docSnapshot.id);
        await yf(manual);
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
const LISTARDEPORTISTASPLANGRATUITO = async (idPlanGratuito) => {
  const dbRef = ref(database);
  const deportistas = [];
  try {
    const snapshot = await get(child(dbRef, "users/"));
    if (snapshot.exists()) {
      const val = snapshot.val();
      Object.keys(val).forEach((element) => {
        if (val[element].rol === "Deportista" && val[element].planGratuito === idPlanGratuito) {
          const entre = val[element];
          entre.id = element;
          deportistas.push(entre);
        }
      });
    }
    if (deportistas.length === 0) {
      console.log("No se ha registrado ning\xFAn deportista");
    }
    return deportistas;
  } catch (error) {
    console.error(error);
  }
};
export { ACTUALIZAR_CIUDAD as A, CREAR_CIUDAD as C, ELIMINAR_MANUALES_ENTRENADOR as E, LISTARUSUARIOSENLINEA as L, administracionStore as a, LISTARCIUDADES as b, LISTARTODOSLOSUSUARIOS as c, LISTARPAISES as d, LISTARDISTANCIAS as e, ACTUALIZAR_DISTANCIA as f, LISTARTODOSLOSENTRENADORES as g, CAMBIARESTADOENTRENADOR as h, ACTUALIZAR_MANUAL_DOCUMENTO as i, ACTUALIZAR_MANUAL as j, LISTARNOMBRESIMAGENES as k, ACTUALIZAR_NOMBREIMAGENES as l, LISTARNACIONALIDADES as m, ACTUALIZAR_NACIONALIDAD as n, LISTARDEPORTISTASPLANGRATUITO as o, previewFilesManuales as p, saveFilesManuales as s };
