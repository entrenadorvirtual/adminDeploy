import { G as GET_DATOS_USUARIO } from "./general.502a4700.js";
import { d as definePlugin, a as useUserSession } from "./index.a70cc630.js";
import { o as onAuthStateChanged, a as auth } from "./config.f3ec4a91.js";
import "./main.9958a253.js";
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
