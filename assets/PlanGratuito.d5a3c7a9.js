import { _ as _sfc_main$7 } from "./ModalOptions.b434cda6.js";
import { u as usePlanRutina, _ as _sfc_main$6 } from "./SesionRutinaGratuita.34f9a71c.js";
import { y as defineComponent, z as ref, r as reactive, e as computed, A as onMounted, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, F as Fragment, s as renderList, f as createBlock, m as createTextVNode, t as toDisplayString, D as unref, l as createCommentVNode, j as createBaseVNode, Q as withKeys, v as withModifiers, O as _sfc_main$5 } from "./index.0f5aa7c2.js";
import { _ as _sfc_main$4 } from "./VInput.144983c9.js";
import { b as useForm, a as _sfc_main$3 } from "./VField.2f4065eb.js";
import { _ as __unplugin_components_2 } from "./VControl.f1021bc2.js";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./VOption.63c661e6.js";
import { t as toFormValidator, z } from "./vee-validate-zod.esm.9452dbca.js";
import { j as ASIGNAR_RUTINA_DESDE_BRONCE, N as NEW_REVERT_SEMANA_RUTINA } from "./rutinas.f6dc35e6.js";
import { D as DeportesDisponibles, a as DEPORTES_DISPONIBLES } from "./DeportesDisponibles.778c1af8.js";
import { E as ENOpcionesCru, n as nombreDiasSemana } from "./constantes.e793b8cd.js";
const _hoisted_1 = { class: "login-form" };
const _hoisted_2 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_3 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_4 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_5 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_6 = { key: 0 };
const _hoisted_7 = ["onKeydown", "onClick"];
const _hoisted_8 = { key: 0 };
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Crear plan ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Actualizar plan ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Inscribirse plan ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Cancelar ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    plananterior: null,
    crear: { type: Boolean },
    editar: { type: Boolean },
    ver: { type: Boolean },
    eliminar: { type: Boolean },
    opcioncrudplanes: null,
    iddeportista: null
  },
  emits: ["cancelar", "actualizar-plan"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const deportesDisponibles = DEPORTES_DISPONIBLES;
    const diasSemana = nombreDiasSemana;
    const planRutinaStore = usePlanRutina();
    const mostrarCofirmarOpciones = ref({
      crear: false,
      actualizar: false,
      inscribirse: false
    });
    const opcionesCrudDispo = ref({
      ver: false,
      editar: false,
      eliminar: false
    });
    const plan = ref({
      deporte: DeportesDisponibles.ATLETISMO,
      plan: [],
      descripcion: "",
      nombre_plan: "",
      objetivos: "",
      id_entrenador: "",
      nombre_entrenador: ""
    });
    const isOpenCrearSesion = ref(false);
    const posicionPlan = reactive({
      indexsemana: 0,
      indexdia: 0
    });
    const opcionactual = ref(ENOpcionesCru.CREAR);
    const verSemanasPlan = ref(2);
    const seleccionarPosicionPlan = (indexSemana, indexDia) => {
      posicionPlan.indexsemana = indexSemana;
      posicionPlan.indexdia = indexDia;
      isOpenCrearSesion.value = true;
    };
    const crearSesion = (indexSemana, indexDia) => {
      if (props.opcioncrudplanes === ENOpcionesCru.CREAR || props.opcioncrudplanes === ENOpcionesCru.EDITAR) {
        opcionactual.value = ENOpcionesCru.CREAR;
        seleccionarPosicionPlan(indexSemana, indexDia);
      }
    };
    const verSesion = (indexSemana, indexDia) => {
      opcionactual.value = ENOpcionesCru.VER;
      seleccionarPosicionPlan(indexSemana, indexDia);
    };
    const editarSesion = (indexSemana, indexDia) => {
      opcionactual.value = ENOpcionesCru.EDITAR;
      seleccionarPosicionPlan(indexSemana, indexDia);
    };
    const eliminarSesion = (semana, dia) => {
      planRutinaStore.eliminarSesion(semana, dia);
    };
    const agregarSesion = (rutina) => {
      isOpenCrearSesion.value = false;
      planRutinaStore.adicionarSesion(rutina, posicionPlan.indexsemana, posicionPlan.indexdia);
    };
    const disablePlan = computed(() => {
      if (!plan.value.deporte || plan.value.nombre_plan.length < 4 || plan.value.nombre_plan.length > 50 || plan.value.descripcion.length < 4 || plan.value.descripcion.length > 200 || plan.value.objetivos.length < 4)
        return false;
      return true;
    });
    const validationSchema = toFormValidator(
      z.object({
        deporte: z.string({
          required_error: "requerido",
          invalid_type_error: "tipo ivalido"
        }),
        nombre_plan: z.string({
          required_error: "requerido",
          invalid_type_error: "tipo ivalido"
        }).min(4, "Nombre de plan muy corto").max(50, "Nombre de plan muy largo"),
        descripcion: z.string({
          required_error: "Este campo es requerido",
          invalid_type_error: "Valor de segundos invalido"
        }).min(4, "Descripci\xF3n de plan muy corto").max(200, "Descripci\xF3n de plan muy largo"),
        objetivos: z.string({
          required_error: "Este campo es requerido",
          invalid_type_error: "Valor de segundos invalido"
        }).min(4, "Objetivos de plan muy corto")
      })
    );
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        deporte: DeportesDisponibles.ATLETISMO,
        nombre: "",
        descripcion: "",
        objetivos: ""
      }
    });
    const crearPlan = handleSubmit(() => {
      planRutinaStore.guardarPlan({ ...plan.value });
      plan.value.descripcion = "";
      plan.value.nombre_plan = "";
      plan.value.objetivos = "";
      mostrarCofirmarOpciones.value.crear = false;
    });
    const actualizarPlan = () => {
      emits("actualizar-plan");
      planRutinaStore.actualizarPlan({ ...plan.value });
      mostrarCofirmarOpciones.value.actualizar = false;
    };
    const inscribirsePlan = async () => {
      if (props.iddeportista && props.plananterior) {
        await ASIGNAR_RUTINA_DESDE_BRONCE(props.iddeportista, {
          ...props.plananterior,
          plan: NEW_REVERT_SEMANA_RUTINA(props.plananterior.plan)
        });
        mostrarCofirmarOpciones.value.inscribirse = false;
      }
    };
    const cancelar = () => {
      emits("cancelar");
    };
    onMounted(() => {
      planRutinaStore.resetValues();
      if (props.plananterior) {
        plan.value = props.plananterior;
        planRutinaStore.asignarBloquesSemana(props.plananterior.plan);
      }
      if (props.opcioncrudplanes === ENOpcionesCru.CREAR) {
        opcionesCrudDispo.value.ver = true;
        opcionesCrudDispo.value.editar = true;
        opcionesCrudDispo.value.eliminar = true;
        opcionactual.value = ENOpcionesCru.CREAR;
      }
      if (props.opcioncrudplanes === ENOpcionesCru.EDITAR) {
        opcionesCrudDispo.value.ver = true;
        opcionesCrudDispo.value.editar = true;
        opcionesCrudDispo.value.eliminar = true;
        opcionactual.value = ENOpcionesCru.EDITAR;
      }
      if (props.opcioncrudplanes === ENOpcionesCru.VER) {
        opcionesCrudDispo.value.ver = true;
        opcionesCrudDispo.value.editar = false;
        opcionesCrudDispo.value.eliminar = false;
        opcionactual.value = ENOpcionesCru.VER;
      }
    });
    return (_ctx, _cache) => {
      const _component_VOption = _sfc_main$1;
      const _component_VSelect = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_VInput = _sfc_main$4;
      const _component_VButton = _sfc_main$5;
      const _component_SesionRutinaGratuita = _sfc_main$6;
      const _component_ModalOptions = _sfc_main$7;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VField, { id: "deporte" }, {
          default: withCtx(({ field }) => [
            createVNode(_component_VControl, null, {
              default: withCtx(() => [
                createVNode(_component_VSelect, {
                  modelValue: plan.value.deporte,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => plan.value.deporte = $event)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(deportesDisponibles), (deporte, index) => {
                      return openBlock(), createBlock(_component_VOption, {
                        key: index,
                        value: deporte
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(deporte), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128)),
                    (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_2, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["modelValue"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }),
        createVNode(_component_VField, { id: "nombre_plan" }, {
          default: withCtx(({ field }) => [
            createVNode(_component_VControl, { icon: "feather:user" }, {
              default: withCtx(() => [
                createVNode(_component_VInput, {
                  modelValue: plan.value.nombre_plan,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => plan.value.nombre_plan = $event),
                  type: "text",
                  placeholder: "Ingrese un nombre del plan de entrenamiento",
                  autocomplete: "username"
                }, null, 8, ["modelValue"]),
                (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }),
        createVNode(_component_VField, { id: "descripcion" }, {
          default: withCtx(({ field }) => [
            createVNode(_component_VControl, { icon: "feather:user" }, {
              default: withCtx(() => [
                createVNode(_component_VInput, {
                  modelValue: plan.value.descripcion,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => plan.value.descripcion = $event),
                  type: "text",
                  placeholder: "Ingrese una descripcion...",
                  autocomplete: "username"
                }, null, 8, ["modelValue"]),
                (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }),
        createVNode(_component_VField, { id: "objetivos" }, {
          default: withCtx(({ field }) => [
            createVNode(_component_VControl, { icon: "feather:user" }, {
              default: withCtx(() => [
                createVNode(_component_VInput, {
                  modelValue: plan.value.objetivos,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => plan.value.objetivos = $event),
                  type: "text",
                  placeholder: "Ingrese los objetivos del plan...",
                  autocomplete: "username"
                }, null, 8, ["modelValue"]),
                (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(planRutinaStore).semanasRutina, (semana, indexSemana) => {
          return openBlock(), createElementBlock("div", {
            key: indexSemana,
            class: "columns"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(semana, (dia, indexDia) => {
              return openBlock(), createElementBlock("div", {
                key: indexDia,
                class: "column"
              }, [
                indexSemana === 0 ? (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(unref(diasSemana)[indexDia]), 1)) : createCommentVNode("", true),
                createBaseVNode("div", null, [
                  createBaseVNode("h2", {
                    onKeydown: withKeys(withModifiers(($event) => crearSesion(indexSemana, indexDia), ["prevent"]), ["space"]),
                    onClick: ($event) => crearSesion(indexSemana, indexDia)
                  }, toDisplayString(indexDia + 1), 41, _hoisted_7),
                  Object.keys(dia).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [
                    opcionesCrudDispo.value.ver ? (openBlock(), createBlock(_component_VButton, {
                      key: 0,
                      icon: "feather:eye",
                      disabled: indexSemana + 1 > verSemanasPlan.value,
                      onKeydown: withKeys(withModifiers(($event) => verSesion(indexSemana, indexDia), ["prevent"]), ["space"]),
                      onClick: ($event) => verSesion(indexSemana, indexDia)
                    }, null, 8, ["disabled", "onKeydown", "onClick"])) : createCommentVNode("", true),
                    opcionesCrudDispo.value.editar ? (openBlock(), createBlock(_component_VButton, {
                      key: 1,
                      icon: "feather:edit",
                      onKeydown: withKeys(withModifiers(($event) => editarSesion(indexSemana, indexDia), ["prevent"]), ["space"]),
                      onClick: ($event) => editarSesion(indexSemana, indexDia)
                    }, null, 8, ["onKeydown", "onClick"])) : createCommentVNode("", true),
                    opcionesCrudDispo.value.eliminar ? (openBlock(), createBlock(_component_VButton, {
                      key: 2,
                      icon: "feather:trash",
                      onKeydown: withKeys(withModifiers(($event) => eliminarSesion(indexSemana, indexDia), ["prevent"]), ["space"]),
                      onClick: ($event) => eliminarSesion(indexSemana, indexDia)
                    }, null, 8, ["onKeydown", "onClick"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ])
              ]);
            }), 128))
          ]);
        }), 128)),
        isOpenCrearSesion.value ? (openBlock(), createBlock(_component_SesionRutinaGratuita, {
          key: 0,
          opcionactual: opcionactual.value,
          semanaindex: unref(posicionPlan).indexsemana,
          diaindex: unref(posicionPlan).indexdia,
          "is-open": isOpenCrearSesion.value,
          onClose: _cache[4] || (_cache[4] = ($event) => isOpenCrearSesion.value = false),
          onCrearRutina: agregarSesion
        }, null, 8, ["opcionactual", "semanaindex", "diaindex", "is-open"])) : createCommentVNode("", true),
        props.opcioncrudplanes === unref(ENOpcionesCru).CREAR ? (openBlock(), createBlock(_component_VButton, {
          key: 1,
          color: "success",
          disabled: !unref(disablePlan) || !unref(planRutinaStore).validarSemana,
          onClick: _cache[5] || (_cache[5] = () => mostrarCofirmarOpciones.value.crear = true)
        }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
        }, 8, ["disabled"])) : createCommentVNode("", true),
        props.opcioncrudplanes === unref(ENOpcionesCru).EDITAR ? (openBlock(), createBlock(_component_VButton, {
          key: 2,
          color: "warning",
          disabled: !unref(disablePlan) || !unref(planRutinaStore).validarSemana,
          onClick: _cache[6] || (_cache[6] = () => mostrarCofirmarOpciones.value.actualizar = true)
        }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        }, 8, ["disabled"])) : createCommentVNode("", true),
        props.iddeportista ? (openBlock(), createBlock(_component_VButton, {
          key: 3,
          color: "success",
          onClick: _cache[7] || (_cache[7] = () => mostrarCofirmarOpciones.value.inscribirse = true)
        }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        })) : createCommentVNode("", true),
        props.opcioncrudplanes === unref(ENOpcionesCru).VER || props.opcioncrudplanes === unref(ENOpcionesCru).EDITAR ? (openBlock(), createBlock(_component_VButton, {
          key: 4,
          onClick: _cache[8] || (_cache[8] = () => cancelar())
        }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_ModalOptions, {
          title: "Registrar plan de entrenamiento",
          subtitle: "Desea Guardar este plan",
          mostrar: mostrarCofirmarOpciones.value.crear,
          "confirm-msm": "Guardar Plan",
          onAceptar: unref(crearPlan),
          onCancelar: _cache[9] || (_cache[9] = ($event) => mostrarCofirmarOpciones.value.crear = false)
        }, null, 8, ["mostrar", "onAceptar"]),
        createVNode(_component_ModalOptions, {
          title: "Actualizar plan de entrenamiento",
          subtitle: "Desea Actualizar este plan",
          mostrar: mostrarCofirmarOpciones.value.actualizar,
          classconfirm: "warning",
          "confirm-msm": "Actualizar Plan",
          onAceptar: actualizarPlan,
          onCancelar: _cache[10] || (_cache[10] = ($event) => mostrarCofirmarOpciones.value.actualizar = false)
        }, null, 8, ["mostrar"]),
        createVNode(_component_ModalOptions, {
          title: "Inscribirse a este plan de entrenamiento",
          subtitle: "Desea Inscribirse a este plan",
          mostrar: mostrarCofirmarOpciones.value.inscribirse,
          "confirm-msm": "Inscribirme",
          onAceptar: inscribirsePlan,
          onCancelar: _cache[11] || (_cache[11] = ($event) => mostrarCofirmarOpciones.value.inscribirse = false)
        }, null, 8, ["mostrar"])
      ]);
    };
  }
});
export { _sfc_main as _ };
