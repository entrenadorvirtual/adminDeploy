import { e as onValue, r as ref, d as database, s as set } from "./config.3d78ff49.js";
import { A as ACTUALIZAR_DOCUMENTO_REALTIME } from "./main.981fd68f.js";
import { a0 as defineStore, a7 as storeToRefs } from "./index.420249be.js";
const administracionStore = defineStore("entrenador", {
  state: () => ({
    entrenadores: [],
    ciudades: [],
    paises: [],
    ciudadaModificar: "",
    usuarios: [],
    deportes: []
  })
});
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
export { ACTUALIZAR_CIUDAD as A, CREAR_CIUDAD as C, LISTARCIUDADES as L, administracionStore as a, LISTARTODOSLOSUSUARIOS as b, LISTARPAISES as c, LISTARTODOSLOSENTRENADORES as d, CAMBIARESTADOENTRENADOR as e };
