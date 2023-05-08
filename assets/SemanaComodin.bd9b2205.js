import { _ as _sfc_main$a } from "./ModalOptions.5fb65b8b.js";
import { _ as _sfc_main$8 } from "./VModal.7c444508.js";
import { V as defineStore, z as ref, e as computed, y as defineComponent, A as onMounted, o as openBlock, f as createBlock, aI as createSlots, w as withCtx, q as createVNode, j as createBaseVNode, i as createElementBlock, t as toDisplayString, s as renderList, m as createTextVNode, D as unref, F as Fragment, l as createCommentVNode, a3 as _sfc_main$7, r as reactive, N as withKeys, v as withModifiers } from "./index.695461b3.js";
import { R as REVERT_SEMANA_RUTINA, f as CONVERT_SEMANA_RUTINA, j as CREAR_RUTINA_COMODIN, k as ACTUALIZAR_RUTINA_COMODIN, G as GET_TIPOS_INTENSIDAD_RUTINAS, T as TIPO_MEDICION_RUTINA, _ as _sfc_main$5, a as _sfc_main$6 } from "./rutinas.3c679119.js";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./VOption.026578aa.js";
import { _ as __unplugin_components_2 } from "./VControl.fa8e3192.js";
import { _ as _sfc_main$2 } from "./VInput.03d7c4f0.js";
import { _ as _sfc_main$9 } from "./VField.60664af0.js";
import { t as toFormValidator, z } from "./vee-validate-zod.esm.7ee806d4.js";
import { a as useForm } from "./VLabel.1dcb2a03.js";
import { D as DeportesDisponibles, a as DEPORTES_DISPONIBLES } from "./DeportesDisponibles.778c1af8.js";
import { E as ENOpcionesCru, n as nombreDiasSemana } from "./constantes.e793b8cd.js";
const usePlanSemanaComodin = defineStore("planSemanaComodin", () => {
  const semanaComodin = ref([[{}, {}, {}, {}, {}, {}, {}]]);
  const validarSemana = computed(() => {
    let value = true;
    const numDiasValido = 3;
    const numSesiones = 1;
    semanaComodin.value.forEach((semana) => {
      let dias = 0;
      semana.forEach((dia) => {
        if (Object.keys(dia).length >= numSesiones) {
          dias++;
        }
      });
      if (dias < numDiasValido) {
        value = false;
      }
    });
    return value;
  });
  function adicionarSesion(sesion, semana, dia) {
    semanaComodin.value[semana][dia] = sesion;
  }
  function obtenerSesion(semanaindex, diaindex) {
    return { ...semanaComodin.value[semanaindex][diaindex] };
  }
  function eliminarSesion(semana, dia) {
    semanaComodin.value[semana][dia] = {};
  }
  function asignarBloquesSemana(semanaRutina) {
    REVERT_SEMANA_RUTINA(semanaComodin.value, semanaRutina);
  }
  function resetValues() {
    semanaComodin.value = [[{}, {}, {}, {}, {}, {}, {}]];
  }
  async function guardarPlan(plan) {
    plan.plan = CONVERT_SEMANA_RUTINA(semanaComodin.value);
    await CREAR_RUTINA_COMODIN(plan);
    resetValues();
  }
  async function actualizarPlan(plan) {
    plan.plan = CONVERT_SEMANA_RUTINA(semanaComodin.value);
    await ACTUALIZAR_RUTINA_COMODIN(plan);
    resetValues();
  }
  return {
    semanaComodin,
    validarSemana,
    adicionarSesion,
    eliminarSesion,
    asignarBloquesSemana,
    obtenerSesion,
    guardarPlan,
    resetValues,
    actualizarPlan
  };
});
const _hoisted_1$1 = { class: "columns" };
const _hoisted_2$1 = { class: "column" };
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = { class: "columns" };
const _hoisted_5$1 = { class: "column" };
const _hoisted_6$1 = { key: 0 };
const _hoisted_7$1 = { class: "column" };
const _hoisted_8$1 = { key: 0 };
const _hoisted_9$1 = /* @__PURE__ */ createTextVNode("Crear Rutina");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Cancelar");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    opcionactual: { default: void 0 },
    isOpen: { type: Boolean, default: void 0 },
    semanaindex: { default: void 0 },
    diaindex: { default: void 0 }
  },
  emits: ["close", "crear-rutina"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const storeUsePlanRutina = usePlanSemanaComodin();
    const tiposIntensidad = GET_TIPOS_INTENSIDAD_RUTINAS();
    const tiposMedicion = TIPO_MEDICION_RUTINA;
    const datosRutina = ref({
      tipo_esfuerzo: "",
      tipo_medicion: "",
      descripcion: "",
      bloques: []
    });
    const validacionCrearRutina = ref(false);
    onMounted(() => {
      if (props.opcionactual === "ver" || props.opcionactual === "editar") {
        datosRutina.value = storeUsePlanRutina.obtenerSesion(
          props.semanaindex,
          props.diaindex
        );
      } else {
        datosRutina.value.tipo_esfuerzo = tiposIntensidad[0];
        datosRutina.value.tipo_medicion = tiposMedicion[1];
      }
    });
    const agregarBloque = (bloque) => {
      var _a;
      (_a = datosRutina.value.bloques) == null ? void 0 : _a.push({ ...bloque });
    };
    const eliminarBloque = (index) => {
      var _a;
      (_a = datosRutina.value.bloques) == null ? void 0 : _a.splice(index, 1);
    };
    const cerrarRutina = () => {
      emits("close");
    };
    const syncValidacionCrearRutina = (valor) => {
      validacionCrearRutina.value = valor;
    };
    const crearRutina = () => {
      emits("crear-rutina", { ...datosRutina.value });
      datosRutina.value.descripcion = "";
      datosRutina.value.bloques = [];
      emits("close");
    };
    const resetBloques = () => {
      datosRutina.value.bloques = [];
    };
    return (_ctx, _cache) => {
      const _component_VInput = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VOption = _sfc_main$3;
      const _component_VSelect = _sfc_main$4;
      const _component_BloquesTiempo = _sfc_main$5;
      const _component_BloquesDistancia = _sfc_main$6;
      const _component_VButton = _sfc_main$7;
      const _component_VModal = _sfc_main$8;
      return openBlock(), createBlock(_component_VModal, {
        open: props.isOpen,
        noclosebutton: "",
        title: "Rutina",
        size: "big",
        actions: "center",
        noscroll: "",
        noclose: ""
      }, createSlots({
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_3$1, toDisplayString(datosRutina.value.descripcion ? datosRutina.value.descripcion : "Sin descripci\xF3n"), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_VInput, {
                    modelValue: datosRutina.value.descripcion,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => datosRutina.value.descripcion = $event),
                    type: "text",
                    placeholder: "Descripci\xF3n"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }))
            ])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_6$1, toDisplayString(datosRutina.value.tipo_esfuerzo), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: datosRutina.value.tipo_esfuerzo,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => datosRutina.value.tipo_esfuerzo = $event),
                    onChange: resetBloques
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposIntensidad), (deporte, index) => {
                        return openBlock(), createBlock(_component_VOption, {
                          key: index,
                          value: deporte
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(deporte), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }))
            ]),
            createBaseVNode("div", _hoisted_7$1, [
              __props.opcionactual === "ver" ? (openBlock(), createElementBlock("h2", _hoisted_8$1, toDisplayString(datosRutina.value.tipo_medicion), 1)) : (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: datosRutina.value.tipo_medicion,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => datosRutina.value.tipo_medicion = $event),
                    onChange: resetBloques
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tiposMedicion), (deporte, index) => {
                        return openBlock(), createBlock(_component_VOption, {
                          key: index,
                          value: deporte
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(deporte), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }))
            ])
          ]),
          datosRutina.value.tipo_medicion === unref(tiposMedicion)[0] ? (openBlock(), createBlock(_component_BloquesTiempo, {
            key: 0,
            datosrutina: datosRutina.value,
            opcionactual: props.opcionactual,
            onSync: syncValidacionCrearRutina,
            onAgregar: agregarBloque,
            onEliminar: eliminarBloque
          }, null, 8, ["datosrutina", "opcionactual"])) : createCommentVNode("", true),
          datosRutina.value.tipo_medicion === unref(tiposMedicion)[1] ? (openBlock(), createBlock(_component_BloquesDistancia, {
            key: 1,
            datosrutina: datosRutina.value,
            opcionactual: props.opcionactual,
            onSync: syncValidacionCrearRutina,
            onAgregar: agregarBloque,
            onEliminar: eliminarBloque
          }, null, 8, ["datosrutina", "opcionactual"])) : createCommentVNode("", true)
        ]),
        cancel: withCtx(() => [
          createVNode(_component_VButton, {
            raised: "",
            onClick: cerrarRutina
          }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          })
        ]),
        _: 2
      }, [
        props.opcionactual !== "ver" ? {
          name: "action",
          fn: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              disabled: !validacionCrearRutina.value,
              raised: "",
              onClick: crearRutina
            }, {
              default: withCtx(() => [
                _hoisted_9$1
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        } : void 0
      ]), 1032, ["open"]);
    };
  }
});
const _hoisted_1 = { class: "login-form" };
const _hoisted_2 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_3 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_4 = { key: 0 };
const _hoisted_5 = ["onKeydown", "onClick"];
const _hoisted_6 = { key: 0 };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Crear Semana Comodin ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Actualizar Semana Comodin ");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Cancelar ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    plananterior: null,
    crear: { type: Boolean },
    editar: { type: Boolean },
    ver: { type: Boolean },
    eliminar: { type: Boolean },
    opcioncrudplanes: null
  },
  emits: ["cancelar", "actualizar-comodin"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const deportesDisponibles = DEPORTES_DISPONIBLES;
    const diasSemana = nombreDiasSemana;
    const semanaComodinStore = usePlanSemanaComodin();
    const opcionesCrudDispo = ref({
      ver: false,
      editar: false,
      eliminar: false
    });
    const plan = ref({
      deporte_rutina: DeportesDisponibles.ATLETISMO,
      plan: [],
      vam: 0
    });
    const isOpenCrearSesion = ref(false);
    const posicionPlan = reactive({
      indexsemana: 0,
      indexdia: 0
    });
    const opcionactual = ref(ENOpcionesCru.CREAR);
    const mostrarCofirmarOpciones = ref({
      crear: false,
      actualizar: false
    });
    const seleccionarPosicionPlan = (indexSemana, indexDia) => {
      posicionPlan.indexsemana = indexSemana;
      posicionPlan.indexdia = indexDia;
      isOpenCrearSesion.value = true;
    };
    const crearSesion = (indexSemana, indexDia) => {
      opcionactual.value = ENOpcionesCru.CREAR;
      seleccionarPosicionPlan(indexSemana, indexDia);
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
      semanaComodinStore.eliminarSesion(semana, dia);
    };
    const agregarSesion = (rutina) => {
      isOpenCrearSesion.value = false;
      semanaComodinStore.adicionarSesion(
        rutina,
        posicionPlan.indexsemana,
        posicionPlan.indexdia
      );
    };
    const disablePlan = computed(() => {
      if (!plan.value.deporte_rutina || !plan.value.vam)
        return false;
      return true;
    });
    const validationSchema = toFormValidator(
      z.object({
        deporte_rutina: z.string({
          required_error: "requerido",
          invalid_type_error: "tipo ivalido"
        }),
        vam: z.string({
          required_error: "requerido",
          invalid_type_error: "tipo ivalido"
        }).min(0, "Valor invalido")
      })
    );
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        deporte_rutina: DeportesDisponibles.ATLETISMO,
        vam: 0
      }
    });
    const crearSemanaComodin = handleSubmit(() => {
      semanaComodinStore.guardarPlan({ ...plan.value });
      mostrarCofirmarOpciones.value.crear = false;
    });
    const actualizarPlan = () => {
      emits("actualizar-comodin");
      semanaComodinStore.actualizarPlan({ ...plan.value });
      mostrarCofirmarOpciones.value.actualizar = false;
    };
    const cancelar = () => {
      emits("cancelar");
    };
    onMounted(() => {
      semanaComodinStore.resetValues();
      if (props.plananterior) {
        plan.value = props.plananterior;
        semanaComodinStore.asignarBloquesSemana(props.plananterior.plan);
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
      const _component_VOption = _sfc_main$3;
      const _component_VSelect = _sfc_main$4;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$9;
      const _component_VInput = _sfc_main$2;
      const _component_VButton = _sfc_main$7;
      const _component_SesionSemanaComodin = _sfc_main$1;
      const _component_ModalOptions = _sfc_main$a;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_VField, { id: "deporte_rutina" }, {
            default: withCtx(({ field }) => [
              createVNode(_component_VControl, null, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: plan.value.deporte_rutina,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => plan.value.deporte_rutina = $event)
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
          createVNode(_component_VField, { id: "vam" }, {
            default: withCtx(({ field }) => [
              createVNode(_component_VControl, { icon: "feather:user" }, {
                default: withCtx(() => [
                  createVNode(_component_VInput, {
                    modelValue: plan.value.vam,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => plan.value.vam = $event),
                    modelModifiers: { number: true },
                    type: "number",
                    placeholder: "Ingrese valor vam..."
                  }, null, 8, ["modelValue"]),
                  (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(semanaComodinStore).semanaComodin, (semana, indexSemana) => {
            return openBlock(), createElementBlock("div", {
              key: indexSemana,
              class: "columns"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(semana, (dia, indexDia) => {
                return openBlock(), createElementBlock("div", {
                  key: indexDia,
                  class: "column"
                }, [
                  indexSemana === 0 ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(unref(diasSemana)[indexDia]), 1)) : createCommentVNode("", true),
                  createBaseVNode("div", null, [
                    createBaseVNode("h2", {
                      onKeydown: withKeys(withModifiers(($event) => crearSesion(indexSemana, indexDia), ["prevent"]), ["space"]),
                      onClick: ($event) => crearSesion(indexSemana, indexDia)
                    }, toDisplayString(indexDia + 1), 41, _hoisted_5),
                    Object.keys(dia).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
                      opcionesCrudDispo.value.ver ? (openBlock(), createBlock(_component_VButton, {
                        key: 0,
                        icon: "feather:eye",
                        onKeydown: withKeys(withModifiers(($event) => verSesion(indexSemana, indexDia), ["prevent"]), ["space"]),
                        onClick: ($event) => verSesion(indexSemana, indexDia)
                      }, null, 8, ["onKeydown", "onClick"])) : createCommentVNode("", true),
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
          isOpenCrearSesion.value ? (openBlock(), createBlock(_component_SesionSemanaComodin, {
            key: 0,
            opcionactual: opcionactual.value,
            semanaindex: unref(posicionPlan).indexsemana,
            diaindex: unref(posicionPlan).indexdia,
            "is-open": isOpenCrearSesion.value,
            onClose: _cache[2] || (_cache[2] = ($event) => isOpenCrearSesion.value = false),
            onCrearRutina: agregarSesion
          }, null, 8, ["opcionactual", "semanaindex", "diaindex", "is-open"])) : createCommentVNode("", true),
          props.opcioncrudplanes === unref(ENOpcionesCru).CREAR ? (openBlock(), createBlock(_component_VButton, {
            key: 1,
            color: "success",
            disabled: !unref(disablePlan) || !unref(semanaComodinStore).validarSemana,
            onClick: _cache[3] || (_cache[3] = ($event) => mostrarCofirmarOpciones.value.crear = true)
          }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }, 8, ["disabled"])) : createCommentVNode("", true),
          props.opcioncrudplanes === unref(ENOpcionesCru).EDITAR ? (openBlock(), createBlock(_component_VButton, {
            key: 2,
            color: "warning",
            disabled: !unref(disablePlan) || !unref(semanaComodinStore).validarSemana,
            onClick: _cache[4] || (_cache[4] = ($event) => mostrarCofirmarOpciones.value.actualizar = true)
          }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          }, 8, ["disabled"])) : createCommentVNode("", true),
          props.opcioncrudplanes === unref(ENOpcionesCru).VER || props.opcioncrudplanes === unref(ENOpcionesCru).EDITAR ? (openBlock(), createBlock(_component_VButton, {
            key: 3,
            onClick: cancelar
          }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_ModalOptions, {
            title: "Registrar Semana Comod\xEDn",
            subtitle: "Desea Realizar este registro",
            mostrar: mostrarCofirmarOpciones.value.crear,
            "confirm-msm": "Guardar",
            onAceptar: unref(crearSemanaComodin),
            onCancelar: _cache[5] || (_cache[5] = ($event) => mostrarCofirmarOpciones.value.crear = false)
          }, null, 8, ["mostrar", "onAceptar"]),
          createVNode(_component_ModalOptions, {
            title: "Actualizar Semana Comod\xEDn",
            subtitle: "Desea Actualizar esta semana",
            mostrar: mostrarCofirmarOpciones.value.actualizar,
            classconfirm: "warning",
            "confirm-msm": "Actualizar",
            onAceptar: actualizarPlan,
            onCancelar: _cache[6] || (_cache[6] = ($event) => mostrarCofirmarOpciones.value.actualizar = false)
          }, null, 8, ["mostrar"])
        ])
      ]);
    };
  }
});
export { _sfc_main as _ };
