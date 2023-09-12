import { r as ref, d as database, v as createUserWithEmailAndPassword, a as auth, s as set, w as deleteUser, g as get, c as child, x as signInWithEmailAndPassword, z as getAuth, A as sendPasswordResetEmail } from "./config.0fd79a34.js";
import { a as addPicture } from "./managePictures.1bd844b7.js";
const dbRef = ref(database);
const CREARUSER = async (data) => {
  const crear = await createUserWithEmailAndPassword(auth, data.email, data.passwd).then(async (userCredential) => {
    const user = userCredential.user;
    if (data.perfil === "Entrenador") {
      const ide = await getEntrenadoresID();
      set(ref(database, "users/" + user.uid), {
        UserID: ide,
        estado: "Pendiente",
        rol: "Entrenador",
        fecha_registro: new Date().getTime(),
        estrellas: 0,
        descripcion: "",
        nombres: data.firstName,
        apellidos: data.lastName,
        nameUser: data.nameUser,
        deporte: "Atletismo",
        genero: "",
        ciudad: "",
        pais: "",
        pasoBienvenida: 1,
        acerca_de: "",
        formacion_academica: "",
        formacion_deportiva: "",
        especialidad: "",
        hitos: "",
        direccion: "",
        nombre_usuario: "",
        identificacion: "",
        fecha_nacimiento: "",
        telefono: ""
      });
      if (data.picture) {
        addPicture(data.picture, user.uid);
      }
      await addEntrenadoresID(ide);
      return user;
    } else if (data.perfil == "Deportista") {
      const idu = await getUsersID();
      set(ref(database, "users/" + user.uid), {
        UserID: idu,
        estado: "Pendiente",
        bienvenida: 7,
        pagoRecurrente: true,
        rol: "Deportista",
        email: user.email,
        fecha_registro: new Date().getTime(),
        estrellas: 0,
        descripcion: "",
        telefono: "",
        direccion: "",
        identificacion: "",
        nombres: data.firstName,
        apellidos: data.lastName,
        nameUser: data.nameUser,
        genero: "",
        ciudad: "",
        ciudadActual: "",
        pais: "",
        paisActual: "",
        plan: {
          nombre: "Bronce",
          solicitudes: 3,
          solicitudesEnviadas: 0,
          caracteres_chat: 0,
          video_min: 0,
          fotos: 0
        }
      });
      set(ref(database, "Morfologias/" + user.uid), {
        estatura: "",
        IMC: "",
        peso: "",
        grasa: "",
        FCmin: "60",
        FCmax: "190",
        somatipo: "",
        distancia: "",
        tiempo_marca: "",
        fecha_marca: "",
        ritmo: "",
        FCprom: "",
        fecha_cintura: "",
        medida_cintura: "",
        fecha_brazo: "",
        medida_brazo: "",
        fecha_muslo: "",
        medida_muslo: "",
        fecha_pantorrilla: "",
        medida_pantorrilla: "",
        fecha_pecho: "",
        medida_pecho: "",
        fecha_hombros: "",
        medida_hombros: "",
        fecha_gluteos: "",
        medida_gluteos: ""
      });
      set(ref(database, "Deportes/" + user.uid), {
        edad_deportiva: "",
        subjetivo: "",
        otros: {
          ciclismo: true,
          natacion: true,
          triatlon: true,
          gimnasio: true,
          trail: true,
          otro: false
        },
        otro: "",
        pulsometro: "",
        esfuerzo_trabajo: "",
        nutricion: "",
        sue\u00F1o: "",
        lesiones: "",
        enfermedad_zona: "",
        enfermedad_tratamiento: "",
        enfermedad_fech_inicio: "",
        enfermedad_duracion: "",
        enfermedad_actual: ""
      });
      set(ref(database, "Objetivos/" + user.uid), {
        meta_deportiva: "",
        dias_entrenamiento: {
          lunesM: true,
          lunesT: true,
          martesM: true,
          martesT: true,
          miercolesM: true,
          miercolesT: true,
          juevesM: true,
          juevesT: true,
          viernesM: true,
          viernesT: true,
          sabadoM: true,
          sabadoT: true,
          domingoM: true,
          domingoT: true
        }
      });
      set(ref(database, "Semicooper/" + user.uid), {
        semicooper: "1000",
        VAM_decimal: "",
        VAM: "",
        VO2Max: "",
        marcas: ""
      });
      if (data.picture) {
        addPicture(data.picture, user.uid);
      }
      await addUsersID(idu);
      return user;
    } else {
      console.log("Debe seleccionar un rol");
      const user2 = auth.currentUser;
      deleteUser(user2).then(() => {
        console.log("Cuenta no creada");
      }).catch((error) => {
        console.log(error);
      });
    }
    auth.signOut();
    return user.uid;
  }).catch(async (error) => {
    const errorCode = error.code;
    console.log("errorCode: ", errorCode);
    return errorCode;
  });
  return crear.uid;
};
const LOGIN_USER_PASSWD = async (userr, passwd) => {
  try {
    const res = await signInWithEmailAndPassword(auth, userr, passwd);
    return res.user.uid;
  } catch (e) {
    console.log(e);
  }
};
const RECUPERARCONTRA = (email) => {
  console.log("recuperar");
  const auth1 = getAuth();
  sendPasswordResetEmail(auth1, email).then(() => {
    console.log("cambio la contrase\xF1a");
    window.location.href = "/auth/login";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
};
const getUsersID = async () => {
  let id = "";
  return get(child(dbRef, `UsersID/`)).then((snapshot) => {
    if (snapshot.exists()) {
      id = snapshot.val();
      return id.IDactual;
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
};
const addUsersID = async (idu) => {
  idu = idu + 1;
  set(ref(database, "UsersID/"), {
    IDactual: idu
  });
};
const getEntrenadoresID = async () => {
  let id = "";
  return get(child(dbRef, `EntrenadoresID/`)).then((snapshot) => {
    if (snapshot.exists()) {
      id = snapshot.val();
      return id.IDactual;
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
};
const addEntrenadoresID = async (idu) => {
  idu = idu + 1;
  set(ref(database, "EntrenadoresID/"), {
    IDactual: idu
  });
};
const ID_AUTH_USER = async () => {
  var _a;
  return ((_a = auth.currentUser) == null ? void 0 : _a.uid) || "";
};
export { CREARUSER as C, ID_AUTH_USER as I, LOGIN_USER_PASSWD as L, RECUPERARCONTRA as R };
