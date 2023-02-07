import { y as defineComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, g as renderSlot, t as toDisplayString, l as createCommentVNode, $ as defineStore, a6 as storeToRefs } from "./index.3437b938.js";
import { e as onValue, r as ref, d as database, s as set } from "./config.165bca36.js";
import { A as ACTUALIZAR_DOCUMENTO_REALTIME } from "./main.06195782.js";
var VPlaceholderSection_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "section-placeholder" };
const _hoisted_2 = { class: "placeholder-content" };
const _hoisted_3 = { class: "dark-inverted" };
const _hoisted_4 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    subtitle: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "image"),
          createBaseVNode("h3", _hoisted_3, toDisplayString(props.title), 1),
          props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(props.subtitle), 1)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "action")
        ])
      ]);
    };
  }
});
const administracionStore = defineStore("entrenador", {
  state: () => ({
    entrenadores: [],
    ciudades: [],
    paises: [],
    ciudadesEntrenador: [],
    ciudadaModificar: ""
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
const LISTARCIUDADESENTRENADOR = async () => {
  const { ciudadesEntrenador } = storeToRefs(administracionStore());
  onValue(ref(database, "users/"), (snapshot) => {
    const array = [];
    const val = snapshot.val();
    Object.keys(val).forEach((element) => {
      const entre = val[element];
      array.push(entre.ciudad);
    });
    ciudadesEntrenador.value = array;
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
const ACTUALIZAR_CIUDAD = async (pais, ciudades) => {
  const rutaBD = ref(database, `Ciudades/${pais}`);
  try {
    await set(rutaBD, ciudades);
  } catch (error) {
    console.log(error);
  }
};
export { ACTUALIZAR_CIUDAD as A, CREAR_CIUDAD as C, LISTARCIUDADES as L, _sfc_main as _, administracionStore as a, LISTARTODOSLOSENTRENADORES as b, LISTARCIUDADESENTRENADOR as c, LISTARPAISES as d, CAMBIARESTADOENTRENADOR as e };
