import { e as onValue, r as ref, d as database, s as set } from "./config.165bca36.js";
import { A as ACTUALIZAR_DOCUMENTO_REALTIME } from "./main.06195782.js";
import { $ as defineStore, a6 as storeToRefs } from "./index.9a2a8c84.js";
const administracionStore = defineStore("entrenador", {
  state: () => ({
    entrenadores: [],
    ciudades: [],
    paises: []
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
const CAMBIARESTADOENTRENADOR = (idEntrenador, estado) => {
  ACTUALIZAR_DOCUMENTO_REALTIME("users", idEntrenador, { estado });
};
const LISTARPAISES = async () => {
  const { paises } = storeToRefs(administracionStore());
  onValue(ref(database, "Ciudades/"), (snapshot) => {
    const array = [];
    const val = snapshot.val();
    Object.keys(val).forEach((element) => {
      val[element];
      array.push(element);
    });
    paises.value = array;
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
      console.log(entre);
    });
    ciudades.value = array;
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
const ELIMINAR_CIUDAD = async (pais, ciudades) => {
  const rutaBD = ref(database, `Ciudades/${pais}`);
  try {
    await set(rutaBD, ciudades);
  } catch (error) {
    console.log(error);
  }
};
export { CREAR_CIUDAD as C, ELIMINAR_CIUDAD as E, LISTARCIUDADES as L, administracionStore as a, LISTARPAISES as b, LISTARTODOSLOSENTRENADORES as c, CAMBIARESTADOENTRENADOR as d };
