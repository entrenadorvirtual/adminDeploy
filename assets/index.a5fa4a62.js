import { _ as _sfc_main$8 } from "./VModal.5adbd22f.js";
import { x as defineComponent, o as openBlock, g as createElementBlock, t as toDisplayString, j as normalizeClass, y as ref$1, r as reactive, z as onMounted, b as computed, m as resolveComponent, i as createBaseVNode, p as createVNode, w as withCtx, C as unref, F as Fragment, q as renderList, am as TransitionGroup, P as withKeys, s as withModifiers, e as createBlock, k as createCommentVNode, l as createTextVNode, N as _sfc_main$7, U as _export_sfc, O as useHead } from "./index.7277f539.js";
import { _ as _sfc_main$6 } from "./VTextarea.b8d6b011.js";
import { o as onceImageErrored, _ as _sfc_main$5 } from "./VAvatar.ea1017a0.js";
import { _ as _sfc_main$4 } from "./VField.04329715.js";
import { a as __unplugin_components_0 } from "./VControl.258dc3fc.js";
import { _ as _sfc_main$3 } from "./VInput.1aae7c90.js";
import { p as preview } from "./managePictures.f82dee2f.js";
import { u as useNotyf } from "./useNotyf.04745937.js";
import { a as CREAR_DOCUMENTO_REALTIME2, O as OBTENER_DOCUMENTO_REALTIME, E as ELIMINAR_DOCUMENTO_REALTIME, A as ACTUALIZAR_DOCUMENTO_REALTIME } from "./main.a2946418.js";
import { x as ref, z as storage, D as uploadBytes, B as getDownloadURL } from "./config.28ac5e58.js";
import { S as Swal } from "./sweetalert2.all.c4d0cd5a.js";
import { u as useViewWrapper } from "./viewWrapper.d9a08fd8.js";
import "./general.651d3f13.js";
import "./administracion.eab5d817.js";
import "./useThemeColors.2a03c1d8.js";
import "./_commonjsHelpers.4e997714.js";
var VProgress_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = ["value", "max"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    value: { default: void 0 },
    max: { default: 100 },
    size: { default: void 0 },
    color: { default: "primary" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("progress", {
        class: normalizeClass(["progress", [props.size && `is-${props.size}`, props.color && `is-${props.color}`]]),
        value: props.value,
        max: props.max
      }, toDisplayString(props.value ? `${props.value / props.max * 100}%` : ""), 11, _hoisted_1$1);
    };
  }
});
const crearAlianza = async (alianza) => {
  try {
    await CREAR_DOCUMENTO_REALTIME2("Alianzas", {
      logo: alianza.logo,
      nombre: alianza.nombre,
      descripcion: alianza.descripcion || "",
      categoria: alianza.categoria || "",
      codigo_descuento: alianza.codigo_descuento || "",
      correo: alianza.correo || "",
      servicios: alianza.servicios || "",
      pagina: alianza.pagina || "",
      tipo: alianza.tipo || "",
      activa: true
    });
    console.log("Alianza creada con exito");
  } catch (error) {
    console.error("Se presento un error al registrar una alianza", error);
  }
};
const obtenerTodasLasAlianzas = async () => {
  try {
    const data = await OBTENER_DOCUMENTO_REALTIME("Alianzas");
    if (data) {
      return Object.entries(data).map(([id, alianzaData]) => ({
        id,
        ...alianzaData
      }));
    }
    return [];
  } catch (error) {
    console.error("Error al obtener las alianzas:", error);
    return [];
  }
};
const eliminarAlianza = async (alianzaId) => {
  try {
    await ELIMINAR_DOCUMENTO_REALTIME("Alianzas", alianzaId);
    console.log("Alianza eliminada exitosamente.");
  } catch (error) {
    console.error("Error al eliminar la alianza:", error);
  }
};
const actualizarAlianza = async (alianzaId, nuevaData) => {
  try {
    await ACTUALIZAR_DOCUMENTO_REALTIME("Alianzas", alianzaId, nuevaData);
    console.log(`Alianza ${alianzaId} actualizada exitosamente.`);
  } catch (error) {
    console.error("Error al actualizar la alianza:", error);
  }
};
const notif = useNotyf();
const subirImagenAlianza = async (file, alianzaNombre) => {
  try {
    const ext = file.name.split(".").pop();
    const newName = `${alianzaNombre}.${ext}`;
    const storageRef = ref(storage, `alianzas/${newName}`);
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);
    notif.success("Imagen subida correctamente.");
    return imageUrl;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    notif.error("No se pudo subir la imagen.");
    throw new Error("Error al subir la imagen.");
  }
};
var Alianzas_vue_vue_type_style_index_0_lang = "";
var Alianzas_vue_vue_type_style_index_1_lang = "";
var Alianzas_vue_vue_type_style_index_2_lang = "";
var Alianzas_vue_vue_type_style_index_3_lang = "";
const _hoisted_1 = { class: "all-projects" };
const _hoisted_2 = { class: "projects-toolbar" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", null, "Nueva Alianza", -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", { class: "section-heading" }, "Alianzas Comerciales", -1);
const _hoisted_6 = { class: "columns is-multiline project-grid is-flex-tablet-p is-half-tablet-p" };
const _hoisted_7 = { class: "column is-one-fifth" };
const _hoisted_8 = { class: "project-grid-item" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h3", null, "Hidrataci\xF3n", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_11 = { class: "column is-one-fifth" };
const _hoisted_12 = { class: "project-grid-item" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h3", null, "Servicios M\xE9dicos", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_15 = { class: "column is-one-fifth" };
const _hoisted_16 = { class: "project-grid-item" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("h3", null, "Equipamiento Deportivo", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_19 = { class: "columns" };
const _hoisted_20 = { class: "column is-12" };
const _hoisted_21 = { class: "card-grid card-grid-v3" };
const _hoisted_22 = { class: "card-grid-item" };
const _hoisted_23 = { class: "h-toggle" };
const _hoisted_24 = ["checked"];
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", { class: "toggler" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "active" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:lock"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "inactive" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_26 = { class: "dark-inverted" };
const _hoisted_27 = {
  class: "description",
  style: { "text-align": "justify" }
};
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("h5", null, [
  /* @__PURE__ */ createBaseVNode("b", null, "Descripci\xF3n")
], -1);
const _hoisted_29 = {
  class: "description",
  style: { "text-align": "justify" }
};
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("h5", null, [
  /* @__PURE__ */ createBaseVNode("b", null, "Servicios")
], -1);
const _hoisted_31 = { style: { "display": "flex", "justify-content": "space-between" } };
const _hoisted_32 = ["onClick"];
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:eye"
  })
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("span", null, "Ver", -1);
const _hoisted_35 = [
  _hoisted_33,
  _hoisted_34
];
const _hoisted_36 = ["onClick"];
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:edit-2"
  })
], -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("span", null, "Editar", -1);
const _hoisted_39 = [
  _hoisted_37,
  _hoisted_38
];
const _hoisted_40 = ["onClick"];
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:trash"
  })
], -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", null, "Eliminar", -1);
const _hoisted_43 = [
  _hoisted_41,
  _hoisted_42
];
const _hoisted_44 = { class: "modal-form" };
const _hoisted_45 = { class: "columns is-multiline" };
const _hoisted_46 = { class: "column is-4-desktop is-full-mobile" };
const _hoisted_47 = { class: "fieldset" };
const _hoisted_48 = { class: "picture-selector" };
const _hoisted_49 = /* @__PURE__ */ createTextVNode(" Logo ");
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:help-circle"
}, null, -1);
const _hoisted_51 = /* @__PURE__ */ createTextVNode(" M\xE1ximo 2MB, formato JPG, PNG ");
const _hoisted_52 = { class: "image-container" };
const _hoisted_53 = ["src"];
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("i", {
  class: "iconify",
  "data-icon": "feather:plus"
}, null, -1);
const _hoisted_55 = [
  _hoisted_54
];
const _hoisted_56 = { class: "columns is-multiline" };
const _hoisted_57 = { class: "column is-6" };
const _hoisted_58 = { class: "column is-6" };
const _hoisted_59 = { class: "column is-6" };
const _hoisted_60 = { class: "column is-6" };
const _hoisted_61 = { class: "column is-6" };
const _hoisted_62 = { class: "column is-6" };
const _hoisted_63 = { class: "column is-6" };
const _hoisted_64 = { class: "column is-6" };
const _hoisted_65 = /* @__PURE__ */ createTextVNode("Guardar");
const _hoisted_66 = { class: "has-text-centered" };
const _hoisted_67 = { class: "upload-demo-wrap" };
const _hoisted_68 = { class: "file" };
const _hoisted_69 = { class: "file-label" };
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("span", { class: "file-cta" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "file-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-cloud-upload-alt" })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "file-label" }, " Escoge una imagen ")
], -1);
const _hoisted_71 = /* @__PURE__ */ createTextVNode(" Confirmar ");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const filters = ref$1("");
    const openModalNuevaAlianza = ref$1(false);
    const uploadModalOpen = ref$1(false);
    const alianzas = ref$1([]);
    const editMode = ref$1(false);
    const viewMode = ref$1(false);
    const notif2 = useNotyf();
    const imagen = reactive({
      accept: false,
      message: "",
      dataUrl: null
    });
    const imgProfile = reactive({
      picture: null
    });
    const alianza = reactive({
      id: "",
      logo: "",
      nombre: "",
      descripcion: "",
      categoria: "",
      codigo_descuento: "",
      correo: "",
      servicios: "",
      pagina: "",
      tipo: "",
      activa: true
    });
    const cargarAlianzas = async () => {
      try {
        alianzas.value = await obtenerTodasLasAlianzas();
        console.log("Alianzas cargadas:", alianzas.value);
      } catch (error) {
        console.error("Error al cargar las alianzas:", error);
        notif2.error("No se pudo cargar la lista de alianzas.");
      }
    };
    onMounted(() => {
      cargarAlianzas();
    });
    const filteredData = computed(() => {
      if (!filters.value) {
        return alianzas.value;
      } else {
        return alianzas.value.filter(
          (alianza2) => alianza2.nombre.toLowerCase().includes(filters.value.toLowerCase())
        );
      }
    });
    const closeModal = () => {
      if (imagen.dataUrl) {
        const img = document.getElementById("ImageUser");
        if (img) {
          img.setAttribute("src", imagen.dataUrl);
          console.log("Cargando nueva imagen de vista previa");
        }
      }
      uploadModalOpen.value = false;
    };
    const previewImage = async (event) => {
      const input = event.target;
      if (!input.files || input.files.length === 0)
        return;
      const file = input.files[0];
      const prevImagen = await preview(event);
      imgProfile.picture = file;
      if (prevImagen.accept) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async (e) => {
          var _a;
          imagen.dataUrl = (_a = e.target) == null ? void 0 : _a.result;
          imagen.message = prevImagen.message;
          imagen.accept = prevImagen.accept;
        };
      } else {
        imagen.accept = false;
        imagen.message = "";
        imagen.dataUrl = null;
        notif2.error("El archivo debe estar en formato JPG o PNG y tener un tama\xF1o inferior a 2MB.");
      }
    };
    const handleGuardarAlianza = async () => {
      var _a;
      try {
        if (!alianza.nombre.trim() || !((_a = alianza.categoria) == null ? void 0 : _a.trim())) {
          notif2.error("El nombre y la categor\xEDa son obligatorios.");
          return;
        }
        if (!alianza.id) {
          alianza.id = crypto.randomUUID();
        }
        if (imgProfile.picture) {
          notif2.success("Subiendo la imagen, por favor espere...");
          const imageUrl = await subirImagenAlianza(imgProfile.picture, alianza.id);
          alianza.logo = imageUrl;
        }
        if (editMode.value) {
          await actualizarAlianza(alianza.id, alianza);
          notif2.success(`Alianza "${alianza.nombre}" Se actualiz\xF3 correctamente.`);
        } else {
          await crearAlianza(alianza);
          notif2.success(`Alianza "${alianza.nombre}" Se cre\xF3 correctamente.`);
        }
        cargarAlianzas();
        openModalNuevaAlianza.value = false;
        editMode.value = false;
        limpiarFormulario();
      } catch (error) {
        console.error("Error al guardar la alianza:", error);
        notif2.error("No se pudo guardar la alianza. Int\xE9ntalo de nuevo.");
      }
    };
    const handleEditarAlianza = (alianzaData) => {
      Object.assign(alianza, alianzaData);
      editMode.value = true;
      openModalNuevaAlianza.value = true;
      imagen.dataUrl = alianzaData.logo;
      imgProfile.picture = null;
    };
    const limpiarFormulario = () => {
      Object.assign(alianza, {
        id: "",
        logo: "",
        nombre: "",
        descripcion: "",
        categoria: "",
        codigo_descuento: "",
        correo: "",
        pagina: "",
        servicios: ""
      });
      imgProfile.picture = null;
      imagen.dataUrl = null;
    };
    const handleNuevaAlianza = () => {
      openModalNuevaAlianza.value = true;
      limpiarFormulario();
    };
    const handleEliminarAlianza = (alianza2) => {
      Swal.fire({
        title: "\xBFEst\xE1s seguro de eliminar esta alianza?",
        text: "Esta acci\xF3n no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "S\xED, eliminar",
        cancelButtonText: "Cancelar"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await eliminarAlianza(alianza2.id);
          Swal.fire({
            title: "\xA1Alianza eliminada!",
            text: "La alianza se elimin\xF3 correctamente.",
            icon: "success",
            showConfirmButton: false,
            timer: 2e3,
            timerProgressBar: true
          });
          await cargarAlianzas();
        }
      });
    };
    const handleVerAlianza = (alianzaData) => {
      Object.assign(alianza, alianzaData);
      viewMode.value = true;
      editMode.value = false;
      openModalNuevaAlianza.value = true;
    };
    return (_ctx, _cache) => {
      const _component_VInput = _sfc_main$3;
      const _component_VControl = __unplugin_components_0;
      const _component_VField = _sfc_main$4;
      const _component_VProgress = _sfc_main$2;
      const _component_VAvatar = _sfc_main$5;
      const _component_Tippy = resolveComponent("Tippy");
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_VTextarea = _sfc_main$6;
      const _component_VButton = _sfc_main$7;
      const _component_VModal = _sfc_main$8;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VField, { raw: "" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, { icon: "feather:search" }, {
                  default: withCtx(() => [
                    createVNode(_component_VInput, {
                      modelValue: filters.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                      placeholder: "Buscar"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("a", {
              class: "button v-button is-primary is-raised is-bold",
              onClick: handleNuevaAlianza,
              onKeypress: handleNuevaAlianza
            }, _hoisted_4, 32)
          ]),
          _hoisted_5,
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("a", _hoisted_8, [
                createBaseVNode("img", {
                  class: "project-avatar",
                  src: "https://cdn-icons-png.flaticon.com/512/11962/11962999.png",
                  alt: "",
                  onErrorOnce: _cache[1] || (_cache[1] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_9,
                _hoisted_10,
                createVNode(_component_VProgress, {
                  size: "tiny",
                  value: 31
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("a", _hoisted_12, [
                createBaseVNode("img", {
                  class: "project-avatar",
                  src: "https://cdn-icons-png.flaticon.com/512/8638/8638193.png",
                  alt: "",
                  onErrorOnce: _cache[2] || (_cache[2] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_13,
                _hoisted_14,
                createVNode(_component_VProgress, {
                  size: "tiny",
                  value: 84
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("a", _hoisted_16, [
                createBaseVNode("img", {
                  class: "project-avatar",
                  src: "https://w1.pngwing.com/pngs/809/556/png-transparent-running-logo-sneakers-shoe-sports-shoes-footwear-clothing-aqua-electric-blue-thumbnail.png",
                  alt: "",
                  onErrorOnce: _cache[3] || (_cache[3] = (event) => unref(onceImageErrored)(event, "150x150"))
                }, null, 32),
                _hoisted_17,
                _hoisted_18,
                createVNode(_component_VProgress, {
                  size: "tiny",
                  value: 45
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(TransitionGroup, {
                  name: "list",
                  tag: "div",
                  class: "columns is-multiline is-flex-tablet-p is-half-tablet-p"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredData), (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: "column is-4"
                      }, [
                        createBaseVNode("div", _hoisted_22, [
                          createBaseVNode("label", _hoisted_23, [
                            createBaseVNode("input", {
                              type: "checkbox",
                              checked: item.activa
                            }, null, 8, _hoisted_24),
                            _hoisted_25
                          ]),
                          createVNode(_component_VAvatar, {
                            size: "large",
                            picture: item.logo,
                            squared: ""
                          }, null, 8, ["picture"]),
                          createBaseVNode("h3", _hoisted_26, toDisplayString(item.nombre), 1),
                          createBaseVNode("p", null, toDisplayString(item.categoria), 1),
                          createBaseVNode("div", _hoisted_27, [
                            _hoisted_28,
                            createBaseVNode("p", null, toDisplayString(item.descripcion.length > 200 ? item.descripcion.slice(0, 200) + "......" : item.descripcion), 1)
                          ]),
                          createBaseVNode("div", _hoisted_29, [
                            _hoisted_30,
                            createBaseVNode("p", null, toDisplayString(item.servicios.length > 200 ? item.servicios.slice(0, 200) + "......" : item.servicios), 1)
                          ]),
                          createBaseVNode("div", _hoisted_31, [
                            createBaseVNode("button", {
                              class: "button v-button is-dark-outlined",
                              onClick: ($event) => handleVerAlianza(item)
                            }, _hoisted_35, 8, _hoisted_32),
                            createBaseVNode("button", {
                              class: "button v-button is-dark-outlined",
                              onClick: ($event) => handleEditarAlianza(item)
                            }, _hoisted_39, 8, _hoisted_36),
                            createBaseVNode("button", {
                              class: "button v-button is-dark-outlined",
                              onClick: ($event) => handleEliminarAlianza(item)
                            }, _hoisted_43, 8, _hoisted_40)
                          ])
                        ])
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        createVNode(_component_VModal, {
          open: openModalNuevaAlianza.value,
          size: "big",
          title: "Nueva Alianza",
          actions: "right",
          onClose: _cache[15] || (_cache[15] = ($event) => openModalNuevaAlianza.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_44, [
              createBaseVNode("div", _hoisted_45, [
                createBaseVNode("div", _hoisted_46, [
                  createBaseVNode("div", _hoisted_47, [
                    createBaseVNode("div", _hoisted_48, [
                      createBaseVNode("h4", null, [
                        _hoisted_49,
                        createVNode(_component_Tippy, null, {
                          content: withCtx(() => [
                            _hoisted_51
                          ]),
                          default: withCtx(() => [
                            _hoisted_50
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_52, [
                        createBaseVNode("img", {
                          id: "ImageUser",
                          src: unref(imagen).dataUrl || unref(alianza).logo,
                          alt: ""
                        }, null, 8, _hoisted_53),
                        createBaseVNode("div", {
                          class: "upload-button",
                          role: "button",
                          tabindex: "0",
                          onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => uploadModalOpen.value = true, ["prevent"]), ["space"])),
                          onClick: _cache[5] || (_cache[5] = ($event) => uploadModalOpen.value = true)
                        }, _hoisted_55, 32)
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_56, [
                  createBaseVNode("div", _hoisted_57, [
                    createVNode(_component_VField, { label: "Nombre" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { class: "input-gray" }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(alianza).nombre,
                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(alianza).nombre = $event),
                              type: "text"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_58, [
                    createVNode(_component_VField, { label: "Categor\xEDa" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: unref(alianza).categoria,
                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(alianza).categoria = $event),
                              placeholder: "Selecciona categor\xEDa",
                              "track-by": "name",
                              label: "name",
                              search: true,
                              options: [
                                { value: "Hidratacion", name: "Hidrataci\xF3n" },
                                { value: "Servicios Medicos", name: "Servicios M\xE9dicos" },
                                { value: "Equipamiento Deportivo", name: "Equipamiento Deportivo" }
                              ],
                              "max-height": 145
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_59, [
                    createVNode(_component_VField, { label: "C\xF3digo de Descuento" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { class: "input-gray" }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(alianza).codigo_descuento,
                              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(alianza).codigo_descuento = $event),
                              type: "text"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_60, [
                    createVNode(_component_VField, { label: "Correo" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { class: "input-gray" }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(alianza).correo,
                              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(alianza).correo = $event),
                              type: "email",
                              placeholder: "Ex: alianza@project.com"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_61, [
                    createVNode(_component_VField, { label: "P\xE1gina Web" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, { class: "input-gray" }, {
                          default: withCtx(() => [
                            createVNode(_component_VInput, {
                              modelValue: unref(alianza).pagina,
                              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(alianza).pagina = $event),
                              type: "email",
                              placeholder: "Ex: https:tupagina.com"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_62, [
                    createVNode(_component_VField, { label: "Tipo" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_Multiselect, {
                              modelValue: unref(alianza).tipo,
                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(alianza).tipo = $event),
                              placeholder: "Tipo Alianza",
                              "track-by": "name",
                              label: "name",
                              search: true,
                              options: [
                                { value: "Gold", name: "Gold" },
                                { value: "Silver", name: "Silver" }
                              ],
                              "max-height": 145
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_63, [
                  createVNode(_component_VField, { label: "Descripci\xF3n" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { class: "input-gray" }, {
                        default: withCtx(() => [
                          createVNode(_component_VTextarea, {
                            modelValue: unref(alianza).descripcion,
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(alianza).descripcion = $event),
                            rows: "10"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_64, [
                  createVNode(_component_VField, { label: "Servicios" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, { class: "input-gray" }, {
                        default: withCtx(() => [
                          createVNode(_component_VTextarea, {
                            modelValue: unref(alianza).servicios,
                            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(alianza).servicios = $event),
                            rows: "10"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          action: withCtx(({ close }) => [
            !viewMode.value || editMode.value ? (openBlock(), createBlock(_component_VButton, {
              key: 0,
              color: "primary",
              raised: "",
              onClick: _cache[14] || (_cache[14] = ($event) => handleGuardarAlianza())
            }, {
              default: withCtx(() => [
                _hoisted_65
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["open"]),
        createVNode(_component_VModal, {
          open: uploadModalOpen.value,
          title: "Sube tu foto",
          actions: "center",
          size: "small",
          onClose: _cache[18] || (_cache[18] = ($event) => uploadModalOpen.value = false)
        }, {
          content: withCtx(() => [
            createBaseVNode("div", _hoisted_66, [
              createBaseVNode("div", _hoisted_67, [
                createVNode(_component_VAvatar, {
                  size: "big",
                  picture: unref(imagen).dataUrl
                }, null, 8, ["picture"])
              ])
            ])
          ]),
          action: withCtx(() => [
            createVNode(_component_VField, { grouped: "" }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_68, [
                      createBaseVNode("label", _hoisted_69, [
                        createBaseVNode("input", {
                          class: "file-input",
                          type: "file",
                          name: "resume",
                          onChange: _cache[16] || (_cache[16] = ($event) => previewImage($event))
                        }, null, 32),
                        _hoisted_70
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_VButton, {
                      class: "upload-result",
                      size: "big",
                      outlined: "",
                      onClick: _cache[17] || (_cache[17] = ($event) => closeModal())
                    }, {
                      default: withCtx(() => [
                        _hoisted_71
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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
const _sfc_main = {
  setup() {
    const pageTitle = ref$1("Gestionar Alianzas");
    const viewWrapper = useViewWrapper();
    onMounted(() => {
      viewWrapper.setPageTitle(pageTitle.value);
      useHead({ title: "Gestionar Alianzas" });
    });
    return {
      pageTitle
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Alianzas = _sfc_main$1;
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_Alianzas)
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
