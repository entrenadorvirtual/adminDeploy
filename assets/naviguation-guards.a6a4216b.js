import { G as GET_DATOS_USUARIO } from "./general.505a96f7.js";
import { d as definePlugin, a as useUserSession } from "./index.5c29604d.js";
import { o as onAuthStateChanged, a as auth } from "./config.f3c9bc1b.js";
import "./main.1a95f887.js";
const userStore = useUserSession();
var naviguationGuards = definePlugin(({ router }) => {
  router.beforeEach((to) => {
    if (to.meta.requiresAuth) {
      onAuthStateChanged(auth, (userAuth) => {
        if (userAuth) {
          GET_DATOS_USUARIO(userAuth.uid).then((user) => {
            if ((user == null ? void 0 : user.datosUsuario.rol) === "Entrenador" && to.fullPath.includes("entrenador")) {
              userStore.setUserData(
                user.datosUsuario,
                userAuth.uid,
                userAuth.email || "",
                "Entrenador",
                (user == null ? void 0 : user.datosUsuario.especial) || ""
              );
              return {
                name: "auth",
                query: { redirect: to.fullPath }
              };
            } else if ((user == null ? void 0 : user.datosUsuario.rol) === "Deportista" && to.fullPath.includes("deportista")) {
              userStore.setUserData(
                user.datosUsuario,
                userAuth.uid,
                userAuth.email || "",
                "Deportista",
                ""
              );
              return {
                name: "auth",
                query: { redirect: to.fullPath }
              };
            } else if ((user == null ? void 0 : user.datosUsuario.rol) === "Admin" && to.fullPath.includes("admin")) {
              userStore.setUserData(
                user.datosUsuario,
                userAuth.uid,
                userAuth.email || "",
                "Admin",
                ""
              );
              return {
                name: "auth",
                query: { redirect: to.fullPath }
              };
            } else {
              router.push("/");
            }
          });
        } else {
          router.push("/");
        }
      });
    }
  });
});
export { naviguationGuards as default };
