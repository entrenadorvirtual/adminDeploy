import { _ as _sfc_main$7 } from "./VModal.5adbd22f.js";
import { _ as _sfc_main$4 } from "./VDropdown.40b2c764.js";
import { x as defineComponent, o as openBlock, e as createBlock, w as withCtx, i as createBaseVNode, p as createVNode, l as createTextVNode, N as _sfc_main$3, y as ref, r as reactive, b as computed, z as onMounted, g as createElementBlock, Z as withDirectives, a2 as vModelText, k as createCommentVNode, t as toDisplayString, j as normalizeClass, C as unref, F as Fragment, q as renderList, am as TransitionGroup, U as _export_sfc, O as useHead } from "./index.7277f539.js";
import { _ as _sfc_main$6 } from "./VPlaceholderPage.370af12f.js";
import { _ as _sfc_main$5 } from "./Paginador.ff77bb04.js";
import { a as __unplugin_components_0 } from "./VControl.258dc3fc.js";
import { b as obtenerTerminos, e as editarTermino, c as crearTermino, d as eliminarTermino } from "./multimedia.103dcc7b.js";
import { S as Swal } from "./sweetalert2.all.c4d0cd5a.js";
import { G as it } from "./config.28ac5e58.js";
import { u as useViewWrapper } from "./viewWrapper.d9a08fd8.js";
import "./VIcon.3ee9f83c.js";
import "./VIconButton.73697e59.js";
import "./main.a2946418.js";
import "./_commonjsHelpers.4e997714.js";
const _hoisted_1$1 = {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
};
const _hoisted_2$1 = { class: "meta" };
const _hoisted_3$1 = /* @__PURE__ */ createTextVNode("Editar Termino");
const _hoisted_4$1 = {
  href: "#",
  role: "menuitem",
  class: "dropdown-item is-media"
};
const _hoisted_5$1 = { class: "meta" };
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode("Eliminar Termino ");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  emits: ["editar-termino", "eliminar-termino"],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$3;
      const _component_VDropdown = _sfc_main$4;
      return openBlock(), createBlock(_component_VDropdown, {
        icon: "feather:more-vertical",
        modern: "",
        up: ""
      }, {
        content: withCtx(() => [
          createBaseVNode("a", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_VButton, {
                fullwidth: "",
                icon: "lucide:edit",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("editar-termino"))
              }, {
                default: withCtx(() => [
                  _hoisted_3$1
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("a", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(_component_VButton, {
                fullwidth: "",
                icon: "lucide:x-square",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("eliminar-termino"))
              }, {
                default: withCtx(() => [
                  _hoisted_6$1
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
var _imports_0 = "/assets/search-6.efe8a683.svg";
var _imports_1 = "/assets/search-6-dark.dd04a767.svg";
var Termino_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "tile-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "Agregar T\xE9rmino", -1);
const _hoisted_5 = { key: 1 };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_7 = { class: "tile-grid tile-grid-v1" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_10 = { class: "tile-grid-item" };
const _hoisted_11 = { class: "tile-grid-item-inner" };
const _hoisted_12 = { class: "meta" };
const _hoisted_13 = { class: "dark-inverted" };
const _hoisted_14 = { class: "modal-form" };
const _hoisted_15 = { class: "field" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("label", null, "T\xEDtulo", -1);
const _hoisted_17 = { class: "control" };
const _hoisted_18 = {
  key: 0,
  class: "help is-danger"
};
const _hoisted_19 = { class: "field" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("label", null, "Descripci\xF3n", -1);
const _hoisted_21 = {
  key: 0,
  class: "help is-danger"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref("");
    const mostrarModalCargarTermino = ref(false);
    const modoEdicion = ref(false);
    const terminos2 = ref([]);
    const termino = reactive({
      id: "",
      titulo: "",
      descripcion: ""
    });
    const currentPage = ref(1);
    const itemsPerPage = 12;
    const errors = reactive({
      titulo: "",
      descripcion: ""
    });
    const touched = reactive({
      titulo: false,
      descripcion: false
    });
    const attemptedSubmit = ref(false);
    const validateField = (field) => {
      if (field === "titulo") {
        if (!termino.titulo || termino.titulo.trim().length === 0) {
          errors.titulo = "Este campo es obligatorio.";
        } else if (termino.titulo.trim().length < 3) {
          errors.titulo = "El t\xEDtulo debe tener al menos 3 caracteres.";
        } else if (termino.titulo.trim().length > 100) {
          errors.titulo = "El t\xEDtulo no puede superar los 100 caracteres.";
        } else {
          errors.titulo = "";
        }
      } else {
        if (!termino.descripcion || termino.descripcion.trim().length === 0) {
          errors.descripcion = "Este campo es obligatorio.";
        } else if (termino.descripcion.trim().length < 10) {
          errors.descripcion = "La descripci\xF3n debe tener al menos 10 caracteres.";
        } else if (termino.descripcion.trim().length > 500) {
          errors.descripcion = "La descripci\xF3n no puede superar los 500 caracteres.";
        } else {
          errors.descripcion = "";
        }
      }
    };
    const validateAll = () => {
      validateField("titulo");
      validateField("descripcion");
      return errors.titulo === "" && errors.descripcion === "";
    };
    const paginatedTerminos = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      return filteredData.value.slice(start, start + itemsPerPage);
    });
    const getPaginatedInfo = (page) => {
      const totalPages = Math.ceil(filteredData.value.length / itemsPerPage);
      return `P\xE1gina ${page} de ${totalPages} disponibles`;
    };
    const abrirModalCreacion = () => {
      Object.assign(termino, { titulo: "", descripcion: "" });
      modoEdicion.value = false;
      mostrarModalCargarTermino.value = true;
    };
    const abrirModalEdicion = (terminoSeleccionado) => {
      Object.assign(termino, terminoSeleccionado);
      modoEdicion.value = true;
      mostrarModalCargarTermino.value = true;
    };
    onMounted(async () => {
      terminos2.value = await obtenerTerminos();
    });
    const filteredData = computed(() => {
      if (!filters.value) {
        return terminos2.value;
      } else {
        return terminos2.value.filter((item) => {
          return item.titulo.match(new RegExp(filters.value, "i")) || item.descripcion.match(new RegExp(filters.value, "i"));
        });
      }
    });
    function isDuplicate() {
      return terminos2.value.some(
        (t) => t.titulo.trim().toLowerCase() === termino.titulo.trim().toLowerCase() && (!modoEdicion.value || t.id !== termino.id)
      );
    }
    const guardarOActualizarTermino = async () => {
      var _a, _b, _c, _d;
      attemptedSubmit.value = true;
      touched.titulo = true;
      touched.descripcion = true;
      if (!validateAll()) {
        touched.titulo = true;
        touched.descripcion = true;
        return;
      }
      if (isDuplicate()) {
        Swal.fire({
          icon: "error",
          text: "Ya existe un t\xE9rmino con ese t\xEDtulo.",
          showConfirmButton: true
        });
        return;
      }
      try {
        const terminoFinal = {
          id: (_a = termino.id) != null ? _a : "",
          titulo: termino.titulo.trim(),
          descripcion: (_c = (_b = termino.descripcion) == null ? void 0 : _b.trim()) != null ? _c : "",
          fecha: (_d = termino.fecha) != null ? _d : it.now()
        };
        if (modoEdicion.value) {
          await editarTermino(terminoFinal.id, {
            titulo: terminoFinal.titulo,
            descripcion: terminoFinal.descripcion,
            fecha: terminoFinal.fecha
          });
          terminos2.value = await obtenerTerminos();
          console.log("T\xE9rmino actualizado correctamente.");
          Swal.fire({
            icon: "info",
            text: "T\xE9rmino Editado",
            showConfirmButton: false,
            timer: 2e3,
            timerProgressBar: true
          });
        } else {
          await crearTermino(terminoFinal);
          terminos2.value = await obtenerTerminos();
          console.log("T\xE9rmino creado correctamente.");
          Swal.fire({
            icon: "info",
            text: "T\xE9rmino Guardado",
            showConfirmButton: false,
            timer: 2e3,
            timerProgressBar: true
          });
        }
        mostrarModalCargarTermino.value = false;
      } catch (error) {
        console.error("Error al guardar o actualizar el t\xE9rmino:", error);
      }
    };
    const suprimirTermino = async (idTermino) => {
      if (!idTermino) {
        console.error("Error: No se proporcion\xF3 un id v\xE1lido.");
        return;
      }
      try {
        await eliminarTermino(idTermino);
        terminos2.value = await obtenerTerminos();
        console.log("Termino eliminado correctamente");
        Swal.fire({
          icon: "info",
          text: "T\xE9rmino eliminado",
          showConfirmButton: false,
          timer: 2e3,
          timerProgressBar: true
        });
      } catch (error) {
        console.log("Error al eliminar el termino");
      }
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_0;
      const _component_VButton = _sfc_main$3;
      const _component_Paginador = _sfc_main$5;
      const _component_VPlaceholderPage = _sfc_main$6;
      const _component_OpcionesTermino = _sfc_main$2;
      const _component_VModal = _sfc_main$7;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_VControl, { icon: "feather:search" }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                  class: "input custom-text-filter",
                  placeholder: "Buscar"
                }, null, 512), [
                  [vModelText, filters.value]
                ])
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_VButton, {
                color: "primary",
                raised: "",
                onClick: abrirModalCreacion
              }, {
                default: withCtx(() => [
                  _hoisted_3,
                  _hoisted_4
                ]),
                _: 1
              })
            ])
          ]),
          terminos2.value.length > 0 ? (openBlock(), createBlock(_component_Paginador, {
            key: 0,
            currentPage: currentPage.value,
            "onUpdate:currentPage": _cache[1] || (_cache[1] = ($event) => currentPage.value = $event),
            "total-items": terminos2.value.length,
            "items-per-page": itemsPerPage
          }, null, 8, ["currentPage", "total-items"])) : createCommentVNode("", true),
          terminos2.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, [
                createBaseVNode("span", null, toDisplayString(getPaginatedInfo(currentPage.value)), 1)
              ])
            ]),
            _hoisted_6
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([unref(filteredData).length !== 0 && "is-hidden"]),
              title: "No pudimos encontrar resultados coincidentes.",
              subtitle: "Parece que no encontramos resultados para los t\xE9rminos de b\xFAsqueda ingresados. \nPor favor, prueba con otros t\xE9rminos o criterios.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_8,
                _hoisted_9
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(TransitionGroup, {
              name: "list",
              tag: "div",
              class: "columns is-multiline"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(paginatedTerminos), (item, key) => {
                  return openBlock(), createElementBlock("div", {
                    key,
                    class: "column is-4"
                  }, [
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("div", _hoisted_12, [
                          createBaseVNode("span", _hoisted_13, toDisplayString(item.titulo), 1),
                          createBaseVNode("span", null, toDisplayString(item.descripcion), 1)
                        ]),
                        createVNode(_component_OpcionesTermino, {
                          onEditarTermino: ($event) => abrirModalEdicion(item),
                          onEliminarTermino: ($event) => suprimirTermino(item.id)
                        }, null, 8, ["onEditarTermino", "onEliminarTermino"])
                      ])
                    ])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ])
        ]),
        createVNode(_component_VModal, {
          title: modoEdicion.value ? "Editar T\xE9rmino" : "Cargar contenido",
          open: mostrarModalCargarTermino.value,
          actions: "center",
          onClose: _cache[5] || (_cache[5] = ($event) => mostrarModalCargarTermino.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                _hoisted_16,
                createBaseVNode("div", _hoisted_17, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(termino).titulo = $event),
                    type: "text",
                    class: normalizeClass(["input", unref(touched).titulo && unref(errors).titulo ? "is-invalid" : ""])
                  }, null, 2), [
                    [vModelText, unref(termino).titulo]
                  ]),
                  unref(touched).titulo && unref(errors).titulo ? (openBlock(), createElementBlock("p", _hoisted_18, toDisplayString(unref(errors).titulo), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_19, [
                _hoisted_20,
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(termino).descripcion = $event),
                  class: normalizeClass(["textarea", unref(touched).descripcion && unref(errors).descripcion ? "is-invalid" : ""]),
                  rows: "4",
                  placeholder: "Descripci\xF3n del t\xE9rmino"
                }, null, 2), [
                  [vModelText, unref(termino).descripcion]
                ]),
                unref(touched).descripcion && unref(errors).descripcion ? (openBlock(), createElementBlock("p", _hoisted_21, toDisplayString(unref(errors).descripcion), 1)) : createCommentVNode("", true)
              ])
            ])
          ]),
          action: withCtx(() => [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              onClick: _cache[4] || (_cache[4] = ($event) => guardarOActualizarTermino())
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(modoEdicion.value ? "Actualizar" : "Confirmar"), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["title", "open"])
      ], 64);
    };
  }
});
const _sfc_main = {
  setup() {
    const pageTitle = ref("Gestionar Terminos");
    const viewWrapper = useViewWrapper();
    onMounted(() => {
      viewWrapper.setPageTitle(pageTitle.value);
      useHead({ title: "Gestionar Terminos" });
    });
    return {
      pageTitle
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Termino = _sfc_main$1;
  return openBlock(), createBlock(_component_Termino);
}
var terminos = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { terminos as default };
