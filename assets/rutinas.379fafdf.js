import { y as defineComponent, z as ref, r as reactive, e as computed, C as watch, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, D as unref, F as Fragment, s as renderList, f as createBlock, m as createTextVNode, t as toDisplayString, l as createCommentVNode, N as withKeys, v as withModifiers, a4 as createStaticVNode, a3 as _sfc_main$5 } from "./index.4254dce5.js";
import { _ as _sfc_main$4 } from "./VInput.d3fefb7e.js";
import { _ as __unplugin_components_2 } from "./VControl.d27e572e.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./VOption.bb3a8094.js";
import { t as toFormValidator, z } from "./vee-validate-zod.esm.7ee806d4.js";
import { a as useForm } from "./VLabel.3ba45fcc.js";
import { C as CREAR_DOCUMENTO_REALTIME, R as REEMPLAZAR_DOCUMENTO_REALTIME, E as ELIMINAR_DOCUMENTO_REALTIME, L as LISTAR_DOCUMENTOS_REALTIME } from "./main.666cbe61.js";
import { y as yf, z as _h, A as wf, B as mh, C as gf, D as firestore, R as Rl, P as Pl, E as ff } from "./config.dae7a527.js";
import { O as ObtenerLunesActual, a as ObtenerSiguienteLunes } from "./fechas.a424fa09.js";
const TIPO_BLOQUE = [
  "Calentamiento",
  "Ritmo",
  "Recuperaci\xF3n",
  "Enfriamiento",
  "Estiramiento"
];
const TIPO_RANGO_BLOQUE = ["Kilometros", "metros"];
const TIPO_MEDICION_RUTINA = ["Tiempo", "Distancia"];
const INTENSIDAD_RUTINAS = [
  {
    nombre: "Sensaciones",
    valuesEntrenador: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    valuesDeportista: [
      "Nada",
      "Muy muy suave",
      "Muy suave",
      "Suave",
      "No tan suave",
      "Moderado",
      "No tan fuerte",
      "Medianamente fuerte",
      "Fuerte",
      "Muy fuerte",
      "Muy muy fuerte"
    ]
  },
  {
    nombre: "Zonas FC",
    valuesEntrenador: ["Z1", "Z2", "Z3", "Z4", "Z5"],
    valuesDeportista: [
      "Aer\xF3bico ligero",
      "Aer\xF3bico medio",
      "Aer\xF3bico intenso",
      "Umbral anaer\xF3bico",
      "M\xE1xima intensidad"
    ]
  },
  {
    nombre: "Zona de Ritmos",
    valuesEntrenador: ["R0", "R1", "R2", "R3", "R3+", "R4", "R5", "R6"],
    valuesDeportista: [
      "Regenerativo",
      "Umbral aer\xF3bico",
      "Umbral anaer\xF3bico",
      "Vo2 submaximo",
      "Vo2 maximo",
      "Capacidad aer\xF3bica",
      "Potencia anaer\xF3bica",
      "Potencia al\xE1ctica"
    ]
  }
];
const GET_TIPOS_INTENSIDAD_RUTINAS = () => {
  return INTENSIDAD_RUTINAS.map((val) => val.nombre);
};
const GET_OPCIONES_INSIDAD_RUTINA = (nombre) => {
  const result = {
    valuesEntrenador: [],
    valuesDeportista: []
  };
  INTENSIDAD_RUTINAS.forEach((val) => {
    if (val.nombre === nombre) {
      result.valuesEntrenador = val.valuesEntrenador;
      result.valuesDeportista = val.valuesDeportista;
    }
  });
  return result;
};
const calcularSegundos = (min, seg) => {
  if (typeof min !== "number" || typeof seg !== "number")
    return 0;
  if (Number(min) < 0 || Number(seg) < 0)
    return 0;
  return Number(min) * 60 + Number(seg);
};
const calcularTiempoConSeg = (seg) => {
  if (typeof seg !== "number")
    return { minutos: 0, segundos: 0 };
  if (Number(seg) < 0)
    return { minutos: 0, segundos: 0 };
  const minutos = Math.trunc(seg / 60);
  const segundos = Number(seg) % 60;
  return { minutos, segundos };
};
const validarBloqueTiempo = (bloque) => {
  if (!bloque.tipo || bloque.intensidad === "" || typeof bloque.duracion_min !== "number" || typeof bloque.duracion_seg !== "number" || calcularSegundos(bloque.duracion_min, bloque.duracion_seg) < 1 || bloque.duracion_seg > 59) {
    return false;
  }
  return true;
};
const validarBloqueDistancia = (bloque) => {
  if (!bloque.tipo || bloque.intensidad === "" || bloque.tipo_medicion === "" || typeof bloque.distancia !== "number" || bloque.distancia < 1) {
    return false;
  }
  return true;
};
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<div class="columns"><div class="column"><h2>Tipo</h2></div><div class="column"><h2>Medici\xF3n</h2></div><div class="column"><h2>Distancia</h2></div><div class="column"><h2>Intensidad</h2></div><div class="column"><h2>Agregar Bloque</h2></div></div>', 1);
const _hoisted_3$1 = { class: "columns" };
const _hoisted_4$1 = { class: "column" };
const _hoisted_5$1 = { class: "column" };
const _hoisted_6$1 = { class: "column" };
const _hoisted_7$1 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_8$1 = { class: "column" };
const _hoisted_9$1 = { class: "column" };
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("h3", { class: "mb-4" }, "Bloques", -1);
const _hoisted_11$1 = { class: "column" };
const _hoisted_12$1 = { class: "column" };
const _hoisted_13$1 = { class: "column" };
const _hoisted_14$1 = { class: "column" };
const _hoisted_15$1 = {
  key: 0,
  class: "column"
};
const _hoisted_16$1 = { class: "columns" };
const _hoisted_17$1 = { class: "column" };
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("h3", null, "Distancia Rutina:", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    datosrutina: null,
    opcionactual: null
  },
  emits: ["sync", "agregar", "eliminar"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const tipoBloque = TIPO_BLOQUE;
    const tipoMedicion = TIPO_RANGO_BLOQUE;
    const opcionesIntensidad = ref(
      GET_OPCIONES_INSIDAD_RUTINA(props.datosrutina.tipo_esfuerzo).valuesEntrenador
    );
    const datosNuevoBloque = reactive({
      tipo: tipoBloque[0],
      tipo_medicion: tipoMedicion[1],
      distancia: 1,
      intensidad: opcionesIntensidad.value[0]
    });
    const tiempoTotalComputed = computed(() => {
      let metros = 0;
      props.datosrutina.bloques.forEach((bloque) => {
        if (bloque.tipo_medicion === "Kilometros") {
          metros += bloque.distancia * 1e3;
        } else if (bloque.tipo_medicion === "metros") {
          metros += bloque.distancia;
        }
      });
      const km = Math.trunc(metros / 1e3);
      const m = Math.trunc(metros % 1e3);
      return { Kilometros: km, metros: m };
    });
    const validarNuevoBloqueComputed = computed(
      () => validarBloqueDistancia(datosNuevoBloque)
    );
    watch(props.datosrutina.bloques, () => {
      let valido = true;
      if (props.datosrutina.bloques.length === 0) {
        valido = false;
      }
      props.datosrutina.bloques.forEach((bloque) => {
        if (!validarBloqueDistancia(bloque)) {
          valido = false;
        }
      });
      emits("sync", valido);
    });
    watch(
      () => props.datosrutina.tipo_esfuerzo,
      () => {
        opcionesIntensidad.value = GET_OPCIONES_INSIDAD_RUTINA(
          props.datosrutina.tipo_esfuerzo
        ).valuesEntrenador;
        datosNuevoBloque.tipo_medicion = tipoMedicion[1];
        datosNuevoBloque.intensidad = opcionesIntensidad.value[0];
      }
    );
    const validationSchema = toFormValidator(
      z.object({
        distancia: z.number({
          required_error: "Este campo es requerido",
          invalid_type_error: "tipo de dato invalido"
        }).min(1, "Escribe un valor valido")
      })
    );
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        distancia: 1
      }
    });
    const agregarBloque = handleSubmit(() => {
      emits("agregar", datosNuevoBloque);
    });
    const eliminarBloque = (index) => {
      emits("eliminar", index);
    };
    return (_ctx, _cache) => {
      const _component_VOption = _sfc_main$2;
      const _component_VSelect = _sfc_main$3;
      const _component_VControl = __unplugin_components_2;
      const _component_VInput = _sfc_main$4;
      const _component_VButton = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          _hoisted_2$1,
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, [
              createVNode(_component_VControl, null, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: unref(datosNuevoBloque).tipo,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(datosNuevoBloque).tipo = $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tipoBloque), (deporte, index) => {
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
              })
            ]),
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(_component_VControl, null, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: unref(datosNuevoBloque).tipo_medicion,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(datosNuevoBloque).tipo_medicion = $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tipoMedicion), (deporte, index) => {
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
              })
            ]),
            createBaseVNode("div", _hoisted_6$1, [
              createVNode(_component_VControl, { id: "distancia" }, {
                default: withCtx(({ field }) => [
                  createVNode(_component_VInput, {
                    modelValue: unref(datosNuevoBloque).distancia,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(datosNuevoBloque).distancia = $event),
                    modelModifiers: { number: true },
                    type: "text",
                    placeholder: "Ingrese duraci\xF3n en segundos"
                  }, null, 8, ["modelValue"]),
                  (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_7$1, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_8$1, [
              createVNode(_component_VControl, null, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: unref(datosNuevoBloque).intensidad,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(datosNuevoBloque).intensidad = $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, index) => {
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
              })
            ]),
            createBaseVNode("div", _hoisted_9$1, [
              createVNode(_component_VButton, {
                icon: "feather:plus",
                color: "success",
                disabled: !unref(validarNuevoBloqueComputed),
                onKeydown: withKeys(withModifiers(unref(agregarBloque), ["prevent"]), ["space"]),
                onClick: unref(agregarBloque)
              }, null, 8, ["disabled", "onKeydown", "onClick"])
            ])
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", null, [
          _hoisted_10$1,
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.datosrutina.bloques, (bloque, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "columns"
            }, [
              createBaseVNode("div", _hoisted_11$1, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VSelect, {
                      modelValue: bloque.tipo,
                      "onUpdate:modelValue": ($event) => bloque.tipo = $event
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tipoBloque), (deporte, indexTp) => {
                          return openBlock(), createBlock(_component_VOption, {
                            key: indexTp,
                            value: deporte
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(deporte), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              createBaseVNode("div", _hoisted_12$1, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VSelect, {
                      modelValue: bloque.tipo_medicion,
                      "onUpdate:modelValue": ($event) => bloque.tipo_medicion = $event
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tipoMedicion), (deporte, indexTm) => {
                          return openBlock(), createBlock(_component_VOption, {
                            key: indexTm,
                            value: deporte
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(deporte), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              createBaseVNode("div", _hoisted_13$1, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VInput, {
                      modelValue: bloque.distancia,
                      "onUpdate:modelValue": ($event) => bloque.distancia = $event,
                      modelModifiers: { number: true },
                      type: "text",
                      placeholder: "Ingrese duraci\xF3n en segundos"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              createBaseVNode("div", _hoisted_14$1, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VSelect, {
                      modelValue: bloque.intensidad,
                      "onUpdate:modelValue": ($event) => bloque.intensidad = $event
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, indexIn) => {
                          return openBlock(), createBlock(_component_VOption, {
                            key: indexIn,
                            value: deporte
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(deporte), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_15$1, [
                createVNode(_component_VButton, {
                  icon: "feather:trash",
                  color: "danger",
                  onKeydown: withKeys(withModifiers(($event) => eliminarBloque(index), ["prevent"]), ["space"]),
                  onClick: ($event) => eliminarBloque(index)
                }, null, 8, ["onKeydown", "onClick"])
              ])) : createCommentVNode("", true)
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_16$1, [
          createBaseVNode("div", _hoisted_17$1, [
            _hoisted_18$1,
            createBaseVNode("h3", null, toDisplayString(unref(tiempoTotalComputed).Kilometros) + " Kilometros / " + toDisplayString(unref(tiempoTotalComputed).metros) + " metros ", 1)
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="columns"><div class="column"><h2>Tipo</h2></div><div class="column"><h2>Duraci\xF3n (Min)</h2></div><div class="column"><h2>Duraci\xF3n (Seg)</h2></div><div class="column"><h2>Intensidad</h2></div><div class="column"><h2>Agregar Bloque</h2></div></div>', 1);
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column" };
const _hoisted_5 = { class: "column" };
const _hoisted_6 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_7 = { class: "column" };
const _hoisted_8 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_9 = { class: "column" };
const _hoisted_10 = { class: "column" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h3", { class: "mb-4" }, "Bloques", -1);
const _hoisted_12 = { class: "column" };
const _hoisted_13 = { class: "column" };
const _hoisted_14 = { class: "column" };
const _hoisted_15 = { class: "column" };
const _hoisted_16 = {
  key: 0,
  class: "column"
};
const _hoisted_17 = { class: "columns" };
const _hoisted_18 = { class: "column" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h3", null, "Tiempo Rutina:", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    datosrutina: null,
    opcionactual: null
  },
  emits: ["sync", "agregar", "eliminar"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const tipoBloque = TIPO_BLOQUE;
    const opcionesIntensidad = ref(
      GET_OPCIONES_INSIDAD_RUTINA(props.datosrutina.tipo_esfuerzo).valuesEntrenador
    );
    const datosNuevoBloque = reactive({
      tipo: tipoBloque[0],
      duracion_min: 5,
      duracion_seg: 0,
      intensidad: opcionesIntensidad.value[0]
    });
    const tiempoTotalComputed = computed(() => {
      let tiempoSegundos = 0;
      props.datosrutina.bloques.forEach((bloque) => {
        tiempoSegundos += calcularSegundos(bloque.duracion_min, bloque.duracion_seg);
      });
      return calcularTiempoConSeg(tiempoSegundos);
    });
    const validarNuevoBloqueComputed = computed(() => validarBloqueTiempo(datosNuevoBloque));
    watch(props.datosrutina.bloques, () => {
      let valido = true;
      if (props.datosrutina.bloques.length === 0) {
        valido = false;
      }
      props.datosrutina.bloques.forEach((bloque) => {
        if (!validarBloqueTiempo(bloque)) {
          valido = false;
        }
      });
      emits("sync", valido);
    });
    watch(
      () => props.datosrutina.tipo_esfuerzo,
      () => {
        opcionesIntensidad.value = GET_OPCIONES_INSIDAD_RUTINA(
          props.datosrutina.tipo_esfuerzo
        ).valuesEntrenador;
        datosNuevoBloque.intensidad = opcionesIntensidad.value[0];
      }
    );
    const validationSchema = toFormValidator(
      z.object({
        duracion_min: z.number({
          required_error: "Este campo es requerido",
          invalid_type_error: "Valor de segundos invalido"
        }).min(0, "Valor M\xEDnimo debe ser 1"),
        duracion_seg: z.number({
          required_error: "Este campo es requerido",
          invalid_type_error: "Valor de segundos invalido"
        }).min(0, "Valor no valido").max(59, "Valor M\xE1ximo debe ser 59")
      })
    );
    const { handleSubmit } = useForm({
      validationSchema,
      initialValues: {
        duracion_min: 5,
        duracion_seg: 0
      }
    });
    const agregarBloque = handleSubmit(() => {
      emits("agregar", datosNuevoBloque);
    });
    const eliminarBloque = (index) => {
      emits("eliminar", index);
    };
    return (_ctx, _cache) => {
      const _component_VOption = _sfc_main$2;
      const _component_VSelect = _sfc_main$3;
      const _component_VControl = __unplugin_components_2;
      const _component_VInput = _sfc_main$4;
      const _component_VButton = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_1, [
          _hoisted_2,
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VControl, null, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: unref(datosNuevoBloque).tipo,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(datosNuevoBloque).tipo = $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tipoBloque), (deporte, index) => {
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
              })
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_VControl, { id: "duracion_min" }, {
                default: withCtx(({ field }) => [
                  createVNode(_component_VInput, {
                    modelValue: unref(datosNuevoBloque).duracion_min,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(datosNuevoBloque).duracion_min = $event),
                    modelModifiers: { number: true },
                    type: "text",
                    placeholder: "Ingrese duraci\xF3n en minutos"
                  }, null, 8, ["modelValue"]),
                  (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_6, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_VControl, { id: "duracion_seg" }, {
                default: withCtx(({ field }) => [
                  createVNode(_component_VInput, {
                    modelValue: unref(datosNuevoBloque).duracion_seg,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(datosNuevoBloque).duracion_seg = $event),
                    modelModifiers: { number: true },
                    type: "text",
                    placeholder: "Ingrese duraci\xF3n en segundos"
                  }, null, 8, ["modelValue"]),
                  (field == null ? void 0 : field.errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_8, toDisplayString(field.errorMessage), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_9, [
              createVNode(_component_VControl, null, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    modelValue: unref(datosNuevoBloque).intensidad,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(datosNuevoBloque).intensidad = $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, index) => {
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
              })
            ]),
            createBaseVNode("div", _hoisted_10, [
              createVNode(_component_VButton, {
                icon: "feather:plus",
                color: "success",
                disabled: !unref(validarNuevoBloqueComputed),
                onKeydown: withKeys(withModifiers(unref(agregarBloque), ["prevent"]), ["space"]),
                onClick: unref(agregarBloque)
              }, null, 8, ["disabled", "onKeydown", "onClick"])
            ])
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", null, [
          _hoisted_11,
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.datosrutina.bloques, (bloque, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "columns"
            }, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VSelect, {
                      modelValue: bloque.tipo,
                      "onUpdate:modelValue": ($event) => bloque.tipo = $event
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tipoBloque), (deporte, indexTp) => {
                          return openBlock(), createBlock(_component_VOption, {
                            key: indexTp,
                            value: deporte
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(deporte), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              createBaseVNode("div", _hoisted_13, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VInput, {
                      modelValue: bloque.duracion_min,
                      "onUpdate:modelValue": ($event) => bloque.duracion_min = $event,
                      modelModifiers: { number: true },
                      type: "text",
                      placeholder: "Ingrese duraci\xF3n en minutos"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              createBaseVNode("div", _hoisted_14, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VInput, {
                      modelValue: bloque.duracion_seg,
                      "onUpdate:modelValue": ($event) => bloque.duracion_seg = $event,
                      modelModifiers: { number: true },
                      type: "text",
                      placeholder: "Ingrese duraci\xF3n en segundos"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              createBaseVNode("div", _hoisted_15, [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VSelect, {
                      modelValue: bloque.intensidad,
                      "onUpdate:modelValue": ($event) => bloque.intensidad = $event
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(opcionesIntensidad.value, (deporte, indexIn) => {
                          return openBlock(), createBlock(_component_VOption, {
                            key: indexIn,
                            value: deporte
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(deporte), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              __props.opcionactual !== "ver" ? (openBlock(), createElementBlock("div", _hoisted_16, [
                createVNode(_component_VButton, {
                  icon: "feather:trash",
                  color: "danger",
                  onKeydown: withKeys(withModifiers(($event) => eliminarBloque(index), ["prevent"]), ["space"]),
                  onClick: ($event) => eliminarBloque(index)
                }, null, 8, ["onKeydown", "onClick"])
              ])) : createCommentVNode("", true)
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_17, [
          createBaseVNode("div", _hoisted_18, [
            _hoisted_19,
            createBaseVNode("h3", null, toDisplayString(unref(tiempoTotalComputed).minutos) + " minutos / " + toDisplayString(unref(tiempoTotalComputed).segundos) + " segundos ", 1)
          ])
        ])
      ]);
    };
  }
});
const CREAR_DOCUMENTO_FIRESTORE = async (rutaDocumento, datos) => {
  const resultDb = await yf(_h(firestore, rutaDocumento), datos);
  return resultDb.id;
};
const ACTUALIZAR_DOCUMENTO_FIRESTORE = async (colection, id, datos) => await wf(mh(firestore, colection, id), datos);
const ELIMINAR_DOCUMENTO_FIRESTORE = async (coleccion, id) => await gf(mh(firestore, coleccion, id));
const CONSULTA_SIMPLE = async (coleccion, valor, condicion, resultado) => {
  const q = Rl(_h(firestore, coleccion), Pl(valor, condicion, resultado));
  const getConsulta = await ff(q);
  const datos = [];
  getConsulta.forEach((doc2) => {
    const obj = JSON.parse(JSON.stringify(doc2.data()));
    obj.id = doc2.id;
    datos.push(obj);
  });
  return datos;
};
const CONSULTA_COMPUESTA = async (coleccion, valor1, condicion1, resultado1, valor2, condicion2, resultado2) => {
  const q = Rl(
    _h(firestore, coleccion),
    Pl(valor1, condicion1, resultado1),
    Pl(valor2, condicion2, resultado2)
  );
  const getConsulta = await ff(q);
  const datos = [];
  getConsulta.forEach((doc2) => {
    const obj = JSON.parse(JSON.stringify(doc2.data()));
    obj.id = doc2.id;
    datos.push(obj);
  });
  return datos;
};
const CONVERT_SEMANA_RUTINA = (semanaRutina) => {
  const nuevaRutina = {};
  semanaRutina.forEach((semana, indexSemana) => {
    const nuevaSemana = {};
    semana.forEach((dia, indexDia) => {
      if (dia.length !== 0) {
        nuevaSemana["dia" + indexDia] = dia;
      }
    });
    nuevaRutina["semana" + indexSemana] = nuevaSemana;
  });
  return nuevaRutina;
};
const REVERT_SEMANA_RUTINA = (rutinaActual, semanaRutina) => {
  Object.keys(semanaRutina).forEach((keySemana) => {
    const semanaIndex = Number(keySemana.substring(keySemana.length - 1));
    Object.keys(semanaRutina[keySemana]).forEach((keyDia) => {
      const diaIndex = Number(keyDia.substring(keyDia.length - 1));
      rutinaActual[semanaIndex][diaIndex] = semanaRutina[keySemana][keyDia];
    });
  });
};
const NEW_REVERT_SEMANA_RUTINA = (semanaRutina) => {
  const nuevaRutina = [
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []],
    [[], [], [], [], [], [], []]
  ];
  Object.keys(semanaRutina).forEach((keySemana) => {
    const semanaIndex = Number(keySemana.substring(keySemana.length - 1));
    Object.keys(semanaRutina[keySemana]).forEach((keyDia) => {
      const diaIndex = Number(keyDia.substring(keyDia.length - 1));
      nuevaRutina[semanaIndex][diaIndex] = semanaRutina[keySemana][keyDia];
    });
  });
  return nuevaRutina;
};
const CREAR_PLAN_GRATUITO = async (planRutina) => await CREAR_DOCUMENTO_REALTIME("planes_gratuitos", planRutina);
const ACTUALIZAR_PLAN_GRATUITO = async (planRutina) => {
  const idPlan = planRutina.id;
  delete planRutina.id;
  return await REEMPLAZAR_DOCUMENTO_REALTIME("planes_gratuitos", idPlan, planRutina);
};
const ELIMINAR_PLAN_GRATUITO = async (idRutina) => await ELIMINAR_DOCUMENTO_REALTIME("planes_gratuitos", idRutina);
const LISTAR_PLANES_GRATUITOS = async () => await LISTAR_DOCUMENTOS_REALTIME("planes_gratuitos");
const LISTAR_RUTINAS_GRATUITAS_ENTRENADOR = async (idEntrenador) => {
  const rutinas = await LISTAR_DOCUMENTOS_REALTIME("planes_gratuitos");
  return rutinas ? rutinas.filter((element) => element.id_entrenador === idEntrenador) : [];
};
const ASIGNAR_SEMANA_COMODIN = async (idDeportista, fechaSemana) => {
  const rutinaComodin = await LISTAR_RUTINAS_COMODIN();
  const plantGratis = NEW_REVERT_SEMANA_RUTINA(rutinaComodin[0].plan);
  const semana = plantGratis[0];
  const fecha = new Date(fechaSemana.getTime());
  const siguienteLunes = ObtenerSiguienteLunes(fecha);
  const idexDiaDomingo = 6;
  const indexDiaSabado = 0;
  while (fecha < siguienteLunes) {
    semana.forEach((dia, index) => {
      if (fecha.getDay() === indexDiaSabado && dia.length !== 0 && index === idexDiaDomingo) {
        CREAR_RUTINA_PERSONALIZADA({
          ...dia,
          fecha,
          id_deportista: idDeportista,
          id_entrenador: "QKDHvESUFrb4nPkCGAFuTdk74bo2"
        });
      } else if (dia.length !== indexDiaSabado && index === fecha.getDay() - 1) {
        CREAR_RUTINA_PERSONALIZADA({
          ...dia,
          fecha,
          id_deportista: idDeportista,
          id_entrenador: "QKDHvESUFrb4nPkCGAFuTdk74bo2"
        });
      }
    });
    fecha.setDate(fecha.getDate() + 1);
  }
};
const ASIGNAR_RUTINA_DESDE_BRONCE = async (idDeportista, rutinaBronce) => {
  const { plan } = rutinaBronce;
  const fechaActual = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );
  const indexLunes = 1;
  let lunesSemana = ObtenerLunesActual(fechaActual);
  if (fechaActual.getDay() !== indexLunes) {
    await ASIGNAR_SEMANA_COMODIN(idDeportista, fechaActual);
    lunesSemana = ObtenerSiguienteLunes(fechaActual);
  }
  plan.forEach((semana) => {
    semana.forEach((dia, index) => {
      if (Object.keys(dia).length !== 0) {
        const fecha = new Date(lunesSemana.getTime());
        fecha.setDate(fecha.getDate() + index);
        CREAR_RUTINA_PERSONALIZADA({
          ...dia,
          fecha,
          id_deportista: idDeportista,
          id_entrenador: "QKDHvESUFrb4nPkCGAFuTdk74bo2"
        });
      }
    });
    lunesSemana = ObtenerSiguienteLunes(lunesSemana);
  });
};
const LISTAR_RUTINAS_COMODIN = async () => await LISTAR_DOCUMENTOS_REALTIME("rutinas_comodin");
const CREAR_RUTINA_COMODIN = async (datosRutina) => await CREAR_DOCUMENTO_REALTIME("rutinas_comodin", datosRutina);
const ACTUALIZAR_RUTINA_COMODIN = async (rutina) => {
  const idPlan = rutina.id;
  delete rutina.id;
  await REEMPLAZAR_DOCUMENTO_REALTIME("rutinas_comodin", idPlan, rutina);
};
const ELIMINAR_RUTINA_COMODIN = async (idRutina) => await ELIMINAR_DOCUMENTO_REALTIME("rutinas_comodin", idRutina);
const LISTAR_RUTINAS_DEPORTISTA = async (idDeportista) => await CONSULTA_SIMPLE("rutinas", "id_deportista", "==", idDeportista);
const LISTAR_RUTINAS_DEPORTISTA_ENTRENADOR = async (idDeportista, idEntrenador) => await CONSULTA_COMPUESTA(
  "rutinas",
  "id_deportista",
  "==",
  idDeportista,
  "id_entrenador",
  "==",
  idEntrenador
);
const CREAR_RUTINA_PERSONALIZADA = async (rutina) => await CREAR_DOCUMENTO_FIRESTORE("rutinas", rutina);
const ACTUALIZAR_RUTINA_PERSONALIZADA = async (idRutina, rutina) => {
  const rutinaGuardar = { ...rutina };
  delete rutinaGuardar.id;
  await ACTUALIZAR_DOCUMENTO_FIRESTORE("rutinas", idRutina, rutinaGuardar);
};
const ELIMINAR_RUTINA_PERSONALIZADA = async (idRutina) => await ELIMINAR_DOCUMENTO_FIRESTORE("rutinas", idRutina);
export { ACTUALIZAR_RUTINA_PERSONALIZADA as A, CREAR_RUTINA_PERSONALIZADA as C, ELIMINAR_RUTINA_PERSONALIZADA as E, GET_TIPOS_INTENSIDAD_RUTINAS as G, LISTAR_RUTINAS_DEPORTISTA_ENTRENADOR as L, NEW_REVERT_SEMANA_RUTINA as N, REVERT_SEMANA_RUTINA as R, TIPO_MEDICION_RUTINA as T, _sfc_main as _, _sfc_main$1 as a, LISTAR_RUTINAS_DEPORTISTA as b, LISTAR_PLANES_GRATUITOS as c, LISTAR_RUTINAS_GRATUITAS_ENTRENADOR as d, ELIMINAR_PLAN_GRATUITO as e, CONVERT_SEMANA_RUTINA as f, CREAR_PLAN_GRATUITO as g, ACTUALIZAR_PLAN_GRATUITO as h, ASIGNAR_RUTINA_DESDE_BRONCE as i, CREAR_RUTINA_COMODIN as j, ACTUALIZAR_RUTINA_COMODIN as k, LISTAR_RUTINAS_COMODIN as l, ELIMINAR_RUTINA_COMODIN as m };
