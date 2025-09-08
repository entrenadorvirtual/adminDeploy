import { x as defineComponent, O as useHead, y as ref, B as watch, z as onMounted, o as openBlock, g as createElementBlock, i as createBaseVNode, p as createVNode, w as withCtx, F as Fragment, q as renderList, e as createBlock, l as createTextVNode, t as toDisplayString, Z as withDirectives, a2 as vModelText, k as createCommentVNode, N as _sfc_main$4 } from "./index.5859d3e2.js";
import { _ as _sfc_main$3 } from "./VField.92bd822f.js";
import { a as __unplugin_components_0 } from "./VControl.f0eb3b3c.js";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./VOption.3572f2a0.js";
import { r as ref$1, d as database, s as set, e as onValue, b as remove } from "./config.28ac5e58.js";
import { u as useViewWrapper } from "./viewWrapper.1dcacd6c.js";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "table is-striped is-fullwidth" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("td", null, [
  /* @__PURE__ */ createBaseVNode("h1", null, "Seleccione parametrizaci\xF3n")
], -1);
const _hoisted_3 = { colspan: "2" };
const _hoisted_4 = { class: "parametrizacion-container" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Crear parametrizaci\xF3n ");
const _hoisted_6 = {
  key: 0,
  class: "input-container"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Guardar ");
const _hoisted_8 = {
  key: 0,
  class: "table is-striped is-fullwidth"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      class: "col-P"
    }, "Parametrizaci\xF3n"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      class: "col-id"
    }, "Par\xE1metro"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      class: "col-estado"
    }, "Estado"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      class: "col-acciones"
    }, "Editar"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      class: "col-acciones"
    }, "Eliminar")
  ])
], -1);
const _hoisted_10 = { colspan: "5" };
const _hoisted_11 = { class: "parametrizacion-container" };
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Crear par\xE1metro ");
const _hoisted_13 = {
  key: 0,
  class: "input-container"
};
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" Guardar ");
const _hoisted_15 = { class: "col-p" };
const _hoisted_16 = { class: "col-id" };
const _hoisted_17 = { class: "col-estado" };
const _hoisted_18 = { class: "col-acciones" };
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" Editar ");
const _hoisted_20 = /* @__PURE__ */ createTextVNode(" Guardar ");
const _hoisted_21 = { class: "col-acciones" };
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" Eliminar ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Parametrizaci\xF3n");
    useHead({
      title: "Parametrizaci\xF3n"
    });
    const parametrizaciones = ref([]);
    const seleccionParametrizacion = ref(null);
    const parametrizaci\u00F3n = ref([]);
    const editandoId = ref(null);
    const nuevoNombre = ref("");
    const creandoParametrizacion = ref(false);
    const nuevaParametrizacion = ref("");
    const creandoParametro = ref(false);
    const nuevoParametro = ref("");
    const crearParametrizacion = async () => {
      if (!nuevaParametrizacion.value.trim())
        return;
      const nuevaRef = ref$1(database, `Parametrizaci\xF3n/${nuevaParametrizacion.value}`);
      await set(nuevaRef, { nombre: nuevaParametrizacion.value });
      cargarParametrizaciones();
      seleccionParametrizacion.value = nuevaParametrizacion.value;
      nuevaParametrizacion.value = "";
      creandoParametrizacion.value = false;
    };
    const crearParametro = async () => {
      if (!seleccionParametrizacion.value || !nuevoParametro.value.trim())
        return;
      const parametroRef = ref$1(
        database,
        `Parametrizaci\xF3n/${seleccionParametrizacion.value}/${nuevoParametro.value}`
      );
      await set(parametroRef, { nombre: nuevoParametro.value });
      cargarEstados();
      nuevoParametro.value = "";
      creandoParametro.value = false;
    };
    const cargarParametrizaciones = () => {
      const parametrizacionesRef = ref$1(database, "Parametrizaci\xF3n");
      onValue(parametrizacionesRef, (snapshot) => {
        if (snapshot.exists()) {
          parametrizaciones.value = Object.keys(snapshot.val());
        } else {
          parametrizaciones.value = [];
        }
      });
    };
    const cargarEstados = () => {
      if (!seleccionParametrizacion.value)
        return;
      const estadosRef = ref$1(
        database,
        `Parametrizaci\xF3n/${seleccionParametrizacion.value}/`
      );
      onValue(estadosRef, (snapshot) => {
        if (snapshot.exists()) {
          const datos = snapshot.val();
          parametrizaci\u00F3n.value = Object.keys(datos).map((key) => ({
            id: key,
            nombre: datos[key].nombre
          }));
        } else {
          parametrizaci\u00F3n.value = [];
        }
      });
    };
    watch(seleccionParametrizacion, () => {
      cargarEstados();
    });
    const eliminarEstado = async (id) => {
      if (!seleccionParametrizacion.value)
        return;
      const estadoRef = ref$1(
        database,
        `Parametrizaci\xF3n/${seleccionParametrizacion.value}/${id}`
      );
      await remove(estadoRef);
    };
    const habilitarEdicion = (id, nombre) => {
      editandoId.value = id;
      nuevoNombre.value = nombre;
    };
    const guardarEdicion = async () => {
      if (editandoId.value && nuevoNombre.value.trim() && seleccionParametrizacion.value) {
        const estadoRef = ref$1(
          database,
          `Parametrizaci\xF3n/${seleccionParametrizacion.value}/${editandoId.value}`
        );
        await set(estadoRef, { nombre: nuevoNombre.value });
        editandoId.value = null;
        nuevoNombre.value = "";
      }
    };
    onMounted(() => {
      cargarParametrizaciones();
    });
    return (_ctx, _cache) => {
      const _component_VOption = _sfc_main$1;
      const _component_VSelect = _sfc_main$2;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("table", _hoisted_1, [
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              _hoisted_2,
              createBaseVNode("td", null, [
                createVNode(_component_VField, { class: "tabla" }, {
                  default: withCtx(() => [
                    createVNode(_component_VControl, {
                      class: "has-icons-left",
                      icon: "feather:list"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VSelect, {
                          modelValue: seleccionParametrizacion.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => seleccionParametrizacion.value = $event)
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(parametrizaciones.value, (element, index) => {
                              return openBlock(), createBlock(_component_VOption, {
                                key: index,
                                value: element
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(element), 1)
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
                  _: 1
                })
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    class: "btn-crear",
                    onClick: _cache[1] || (_cache[1] = ($event) => creandoParametrizacion.value = !creandoParametrizacion.value)
                  }, {
                    default: withCtx(() => [
                      _hoisted_5
                    ]),
                    _: 1
                  }),
                  creandoParametrizacion.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => nuevaParametrizacion.value = $event),
                      class: "input",
                      placeholder: "Nombre de la parametrizaci\xF3n"
                    }, null, 512), [
                      [vModelText, nuevaParametrizacion.value]
                    ]),
                    createVNode(_component_VButton, {
                      color: "success",
                      class: "btn-guardar",
                      onClick: crearParametrizacion
                    }, {
                      default: withCtx(() => [
                        _hoisted_7
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ])
              ])
            ])
          ])
        ]),
        seleccionParametrizacion.value ? (openBlock(), createElementBlock("table", _hoisted_8, [
          _hoisted_9,
          createBaseVNode("tbody", null, [
            createBaseVNode("td", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                createVNode(_component_VButton, {
                  color: "primary",
                  class: "btn-crear",
                  onClick: _cache[3] || (_cache[3] = ($event) => creandoParametro.value = !creandoParametro.value)
                }, {
                  default: withCtx(() => [
                    _hoisted_12
                  ]),
                  _: 1
                }),
                creandoParametro.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => nuevoParametro.value = $event),
                    class: "input",
                    placeholder: "Ingrese el par\xE1metro"
                  }, null, 512), [
                    [vModelText, nuevoParametro.value]
                  ]),
                  createVNode(_component_VButton, {
                    color: "success",
                    class: "btn-guardar",
                    onClick: crearParametro
                  }, {
                    default: withCtx(() => [
                      _hoisted_14
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ])
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList(parametrizaci\u00F3n.value, (estado, index) => {
              return openBlock(), createElementBlock("tr", {
                key: estado.id
              }, [
                createBaseVNode("td", _hoisted_15, toDisplayString(seleccionParametrizacion.value), 1),
                createBaseVNode("td", _hoisted_16, toDisplayString(estado.id), 1),
                createBaseVNode("td", _hoisted_17, [
                  editandoId.value === estado.id ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 0,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => nuevoNombre.value = $event),
                    class: "input"
                  }, null, 512)), [
                    [vModelText, nuevoNombre.value]
                  ]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(estado.nombre), 1)
                  ], 64))
                ]),
                createBaseVNode("td", _hoisted_18, [
                  editandoId.value !== estado.id ? (openBlock(), createBlock(_component_VButton, {
                    key: 0,
                    color: "primary",
                    class: "btn-accion",
                    onClick: ($event) => habilitarEdicion(estado.id, estado.nombre)
                  }, {
                    default: withCtx(() => [
                      _hoisted_19
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_VButton, {
                    key: 1,
                    color: "success",
                    class: "btn-accion",
                    onClick: guardarEdicion
                  }, {
                    default: withCtx(() => [
                      _hoisted_20
                    ]),
                    _: 1
                  }))
                ]),
                createBaseVNode("td", _hoisted_21, [
                  createVNode(_component_VButton, {
                    color: "danger",
                    class: "btn-accion",
                    onClick: ($event) => eliminarEstado(estado.id)
                  }, {
                    default: withCtx(() => [
                      _hoisted_22
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export { _sfc_main as default };
