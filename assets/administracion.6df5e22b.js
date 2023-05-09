import { e as onValue, r as ref, d as database, s as set } from "./config.dae7a527.js";
import { A as ACTUALIZAR_DOCUMENTO_REALTIME } from "./main.666cbe61.js";
import { V as defineStore, a8 as storeToRefs } from "./index.4254dce5.js";
const administracionStore = defineStore("entrenador", {
  state: () => ({
    entrenadores: [],
    ciudades: [],
    paises: [],
    usuarios: [],
    deportes: [],
    distancias: [],
    nombresImagenes: [],
    imagenes: []
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
const ACTUALIZAR_NOMBREIMAGENES = async (nombres) => {
  const rutaBD = ref(database, `signUp`);
  try {
    await set(rutaBD, nombres);
  } catch (error) {
    console.log(error);
  }
};
export { ACTUALIZAR_CIUDAD as A, CREAR_CIUDAD as C, LISTARCIUDADES as L, administracionStore as a, LISTARTODOSLOSUSUARIOS as b, LISTARPAISES as c, LISTARDISTANCIAS as d, ACTUALIZAR_DISTANCIA as e, LISTARTODOSLOSENTRENADORES as f, CAMBIARESTADOENTRENADOR as g, LISTARNOMBRESIMAGENES as h, ACTUALIZAR_NOMBREIMAGENES as i };
