import { _ as _sfc_main$5 } from "./VModal.9b3adbf3.js";
import { a as administracionStore, b as LISTARTODOSLOSENTRENADORES, _ as _sfc_main$4, e as CAMBIARESTADOENTRENADOR } from "./administracion.fa806835.js";
import { y as defineComponent, z as ref, a6 as storeToRefs, A as onMounted, o as openBlock, i as createElementBlock, q as createVNode, w as withCtx, j as createBaseVNode, F as Fragment, m as createTextVNode, Y as _sfc_main$3, t as toDisplayString, s as renderList, D as unref } from "./index.3437b938.js";
import { _ as _sfc_main$6 } from "./VAvatar.ca051eb6.js";
import "./config.165bca36.js";
import "./main.06195782.js";
const _hoisted_1$2 = /* @__PURE__ */ createTextVNode("Ver");
const _hoisted_2$2 = /* @__PURE__ */ createTextVNode("Confirm");
const _hoisted_3$2 = /* @__PURE__ */ createTextVNode("Confirm");
const _hoisted_4$1 = { class: "modal-form" };
const _hoisted_5 = { class: "field" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("label", null, "Identificacion ", -1);
const _hoisted_7 = { class: "control" };
const _hoisted_8 = ["value"];
const _hoisted_9 = { class: "field" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("label", null, "Descripcion", -1);
const _hoisted_11 = { class: "control" };
const _hoisted_12 = ["value"];
const _hoisted_13 = { class: "field" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("label", null, "Acerca de", -1);
const _hoisted_15 = { class: "control" };
const _hoisted_16 = ["value"];
const _hoisted_17 = { class: "field" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("label", null, "Calificacion", -1);
const _hoisted_19 = { class: "control" };
const _hoisted_20 = ["value"];
const _hoisted_21 = /* @__PURE__ */ createTextVNode("Confirm");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const centeredActionsOpen = ref(false);
    ref(true);
    storeToRefs(administracionStore());
    onMounted(async () => {
      await LISTARTODOSLOSENTRENADORES();
    });
    const closeModal = () => {
      console.log(props.data);
      centeredActionsOpen.value = false;
    };
    const mostrarInfo = () => {
      centeredActionsOpen.value = true;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$3;
      const _component_VPlaceholderSection = _sfc_main$4;
      const _component_VModal = _sfc_main$5;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VButton, {
          onClick: mostrarInfo,
          color: "warning",
          icon: "feather:eye"
        }, {
          default: withCtx(() => [
            _hoisted_1$2
          ]),
          _: 1
        }),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          actions: "center",
          size: "big",
          onClose: _cache[0] || (_cache[0] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createVNode(_component_VPlaceholderSection, {
              title: props.data.nombres + " " + props.data.apellidos,
              subtitle: props.data.deporte
            }, {
              default: withCtx(() => [
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_2$2
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_3$2
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "subtitle"]),
            createBaseVNode("form", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5, [
                _hoisted_6,
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("input", {
                    type: "text",
                    class: "input",
                    value: __props.data.identificacion,
                    readonly: ""
                  }, null, 8, _hoisted_8)
                ])
              ]),
              createBaseVNode("div", _hoisted_9, [
                _hoisted_10,
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("input", {
                    type: "text",
                    class: "input",
                    value: props.data.descripcion,
                    readonly: ""
                  }, null, 8, _hoisted_12)
                ])
              ]),
              createBaseVNode("div", _hoisted_13, [
                _hoisted_14,
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("input", {
                    type: "text",
                    class: "input",
                    value: props.data.acerca_de,
                    readonly: ""
                  }, null, 8, _hoisted_16)
                ])
              ]),
              createBaseVNode("div", _hoisted_17, [
                _hoisted_18,
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("input", {
                    type: "text",
                    class: "input",
                    value: props.data.estrellas + " Estrellas",
                    readonly: ""
                  }, null, 8, _hoisted_20)
                ])
              ])
            ])
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: closeModal
            }, {
              default: withCtx(() => [
                _hoisted_21
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("Confirm");
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode("Confirm");
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("h2", null, "Esta seguro que desea cambiar el estado del entrenador", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Confirm ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const centeredActionsOpen = ref(false);
    ref(true);
    const mostrarInfo = () => {
      centeredActionsOpen.value = true;
    };
    const cambiarEstadoEntrenador = (id, estado) => {
      CAMBIARESTADOENTRENADOR(id, estado === "Aprobado" ? "Pendiente" : "Aprobado");
      centeredActionsOpen.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$3;
      const _component_VPlaceholderSection = _sfc_main$4;
      const _component_VModal = _sfc_main$5;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VButton, {
          onClick: mostrarInfo,
          color: props.data.estado === "Aprobado" ? "danger" : "primary",
          fullwidth: true
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(props.data.estado === "Aprobado" ? "Deshabilitar" : "Habilitar"), 1)
          ]),
          _: 1
        }, 8, ["color"]),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          actions: "center",
          size: "large",
          onClose: _cache[1] || (_cache[1] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createVNode(_component_VPlaceholderSection, {
              title: props.data.nombres + " " + props.data.apellidos
            }, {
              default: withCtx(() => [
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_1$1
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_2$1
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"]),
            _hoisted_3$1
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              onClick: _cache[0] || (_cache[0] = ($event) => cambiarEstadoEntrenador(props.data.id, props.data.estado)),
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "table is-hoverable is-fullwidth" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      class: "is-media"
    }),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Nombres"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Fecha de registro"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Categoria"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Descripcion"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Estado"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Aprobar/Bloquear"),
    /* @__PURE__ */ createBaseVNode("th", { scope: "col" }, "Detalle")
  ])
], -1);
const _hoisted_3 = { class: "is-media" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { entrenadores } = storeToRefs(administracionStore());
    onMounted(async () => {
      await LISTARTODOSLOSENTRENADORES();
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$6;
      const _component_AprobacionEntrenadorModal = _sfc_main$1;
      const _component_InfoModal = _sfc_main$2;
      return openBlock(), createElementBlock("table", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(entrenadores), (entrenador) => {
            return openBlock(), createElementBlock("tr", null, [
              createBaseVNode("td", _hoisted_3, [
                createVNode(_component_VAvatar, { picture: "/demo/avatars/8.gif" })
              ]),
              createBaseVNode("td", null, toDisplayString(entrenador.nombres) + " " + toDisplayString(entrenador.apellidos), 1),
              createBaseVNode("td", null, toDisplayString(entrenador.fecha_registro), 1),
              createBaseVNode("td", null, toDisplayString(entrenador.deporte), 1),
              createBaseVNode("td", null, toDisplayString(entrenador.descripcion), 1),
              createBaseVNode("td", null, toDisplayString(entrenador.estado), 1),
              createBaseVNode("td", null, [
                createVNode(_component_AprobacionEntrenadorModal, { data: entrenador }, null, 8, ["data"])
              ]),
              createBaseVNode("td", null, [
                createVNode(_component_InfoModal, { data: entrenador }, null, 8, ["data"])
              ])
            ]);
          }), 256))
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
