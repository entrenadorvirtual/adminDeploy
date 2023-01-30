import { _ as _sfc_main$4 } from "./VModal.e6dd22f8.js";
import { y as defineComponent, o as openBlock, i as createElementBlock, j as createBaseVNode, g as renderSlot, t as toDisplayString, l as createCommentVNode, z as ref, q as createVNode, w as withCtx, F as Fragment, m as createTextVNode, Y as _sfc_main$3, a6 as storeToRefs, A as onMounted, s as renderList, D as unref } from "./index.9a2a8c84.js";
import { _ as _sfc_main$5 } from "./VAvatar.2fd462f4.js";
import { a as administracionStore, c as LISTARTODOSLOSENTRENADORES, d as CAMBIARESTADOENTRENADOR } from "./administracion.93909c69.js";
import "./config.165bca36.js";
import "./main.06195782.js";
var VPlaceholderSection_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "section-placeholder" };
const _hoisted_2$2 = { class: "placeholder-content" };
const _hoisted_3$2 = { class: "dark-inverted" };
const _hoisted_4$1 = { key: 0 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    subtitle: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          renderSlot(_ctx.$slots, "image"),
          createBaseVNode("h3", _hoisted_3$2, toDisplayString(props.title), 1),
          props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_4$1, toDisplayString(props.subtitle), 1)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "action")
        ])
      ]);
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("Ver");
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode("Confirm");
const _hoisted_3$1 = /* @__PURE__ */ createTextVNode("Confirm");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Confirm");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Confirm");
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
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$3;
      const _component_VPlaceholderSection = _sfc_main$2;
      const _component_VModal = _sfc_main$4;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VButton, {
          onClick: mostrarInfo,
          color: "warning",
          icon: "feather:eye"
        }, {
          default: withCtx(() => [
            _hoisted_1$1
          ]),
          _: 1
        }),
        createVNode(_component_VModal, {
          open: centeredActionsOpen.value,
          actions: "center",
          size: "large",
          onClose: _cache[0] || (_cache[0] = ($event) => centeredActionsOpen.value = false)
        }, {
          content: withCtx(() => [
            createVNode(_component_VPlaceholderSection, {
              title: props.data.nombres,
              subtitle: props.data.descripcion
            }, {
              default: withCtx(() => [
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_2$1
                  ]),
                  _: 1
                }),
                createVNode(_component_VButton, {
                  color: "primary",
                  raised: ""
                }, {
                  default: withCtx(() => [
                    _hoisted_3$1
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "subtitle"])
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              color: "secondary",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_5
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
      console.log(entrenadores, "Entrenadores");
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$5;
      const _component_VButton = _sfc_main$3;
      const _component_InfoModal = _sfc_main$1;
      return openBlock(), createElementBlock("table", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(entrenadores), (entrenador) => {
            return openBlock(), createElementBlock("tr", {
              key: entrenador.id
            }, [
              createBaseVNode("td", _hoisted_3, [
                createVNode(_component_VAvatar, { picture: "/demo/avatars/8.gif" })
              ]),
              createBaseVNode("td", null, toDisplayString(entrenador.nombres) + " " + toDisplayString(entrenador.apellidos), 1),
              createBaseVNode("td", null, toDisplayString(entrenador.fecha_registro), 1),
              createBaseVNode("td", null, toDisplayString(entrenador.deporte), 1),
              createBaseVNode("td", null, toDisplayString(entrenador.descripcion), 1),
              createBaseVNode("td", null, toDisplayString(entrenador.estado), 1),
              createBaseVNode("td", null, [
                createVNode(_component_VButton, {
                  fullwidth: true,
                  color: entrenador.estado === "Aprobado" ? "danger" : "primary",
                  onClick: ($event) => unref(CAMBIARESTADOENTRENADOR)(entrenador.id, entrenador.estado === "Aprobado" ? "Pendiente" : "Aprobado")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(entrenador.estado === "Aprobado" ? "Deshabilitar" : "Habilitar"), 1)
                  ]),
                  _: 2
                }, 1032, ["color", "onClick"])
              ]),
              createBaseVNode("td", null, [
                createVNode(_component_InfoModal, { data: entrenador }, null, 8, ["data"])
              ])
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
