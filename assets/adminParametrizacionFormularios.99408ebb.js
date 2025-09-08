import { x as defineComponent, y as ref, z as onMounted, o as openBlock, g as createElementBlock, i as createBaseVNode, F as Fragment, q as renderList, Z as withDirectives, a2 as vModelText, ao as vModelCheckbox, t as toDisplayString, k as createCommentVNode, l as createTextVNode } from "./index.5859d3e2.js";
import { n as gh, j as firestore, w as af, m as mf } from "./config.28ac5e58.js";
async function getFormConfig(formKey) {
  try {
    const docRef = gh(firestore, "form_configs", formKey);
    const docSnap = await af(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return { fields: {}, version: 1 };
  } catch (e) {
    return { fields: {}, version: 1, error: true };
  }
}
async function saveFormConfig(formKey, config, userId) {
  const now = new Date().toISOString();
  config.updatedAt = now;
  config.updatedBy = userId;
  config.version = (config.version || 1) + 1;
  await mf(gh(firestore, "form_configs", formKey), config);
}
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", null, "Parametrizaci\xF3n Perfil Deportista", -1);
const _hoisted_3 = ["onUpdate:modelValue"];
const _hoisted_4 = ["onUpdate:modelValue"];
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Mostrar etiqueta");
const _hoisted_6 = ["onUpdate:modelValue"];
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Mostrar campo");
const _hoisted_8 = ["onUpdate:modelValue"];
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Obligatorio");
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { key: 1 };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "No tienes permisos para acceder.", -1);
const _hoisted_13 = [
  _hoisted_12
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const formKey = "deportista_perfil";
    const fields = ref({});
    const toast = ref("");
    const userSession = useUserSession();
    const isAdmin = ref(true);
    onMounted(async () => {
      const config = await getFormConfig(formKey);
      fields.value = config.fields || {};
    });
    async function save() {
      await saveFormConfig(formKey, { fields: fields.value }, userSession.uid);
      toast.value = "Configuraci\xF3n guardada";
    }
    function revert() {
      onMounted();
      toast.value = "Cambios revertidos";
    }
    function preview() {
    }
    return (_ctx, _cache) => {
      return isAdmin.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("table", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(fields.value, (field, key) => {
            return openBlock(), createElementBlock("tr", { key }, [
              createBaseVNode("td", null, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => field.label = $event,
                  maxlength: "30"
                }, null, 8, _hoisted_3), [
                  [vModelText, field.label]
                ])
              ]),
              createBaseVNode("td", null, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => field.showLabel = $event,
                  type: "checkbox"
                }, null, 8, _hoisted_4), [
                  [vModelCheckbox, field.showLabel]
                ]),
                _hoisted_5
              ]),
              createBaseVNode("td", null, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => field.showField = $event,
                  type: "checkbox"
                }, null, 8, _hoisted_6), [
                  [vModelCheckbox, field.showField]
                ]),
                _hoisted_7
              ]),
              createBaseVNode("td", null, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => field.required = $event,
                  type: "checkbox"
                }, null, 8, _hoisted_8), [
                  [vModelCheckbox, field.required]
                ]),
                _hoisted_9
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("button", { onClick: save }, "Guardar"),
        createBaseVNode("button", { onClick: revert }, "Revertir cambios"),
        createBaseVNode("button", { onClick: preview }, "Vista previa"),
        toast.value ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString(toast.value), 1)) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("div", _hoisted_11, _hoisted_13));
    };
  }
});
export { _sfc_main as default };
