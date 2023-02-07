import { y as defineComponent, N as useRoute, a as useUserSession, z as ref, A as onMounted, az as axios, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, w as withCtx, t as toDisplayString, m as createTextVNode, Z as createStaticVNode, Y as _sfc_main$1 } from "./index.3437b938.js";
import { j as getEstadoBienvenida } from "./deportista.87466242.js";
import { u as updatePlanUnico } from "./epayco.49f83933.js";
import "./config.165bca36.js";
import "./general.34b73030.js";
import "./main.06195782.js";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "account-wrapper" };
const _hoisted_3 = { class: "columns" };
const _hoisted_4 = { class: "column is-12" };
const _hoisted_5 = { class: "account-box is-form is-footerless" };
const _hoisted_6 = { class: "form-head stuck-header" };
const _hoisted_7 = { class: "form-head-inner" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Informaci\xF3n Transacci\xF3n")
], -1);
const _hoisted_9 = { class: "right" };
const _hoisted_10 = { class: "buttons" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Regresar ");
const _hoisted_12 = { class: "form-body" };
const _hoisted_13 = { class: "table is-bordered" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("td", null, "Referencia", -1);
const _hoisted_15 = { id: "referencia" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("td", { class: "bold" }, "Fecha", -1);
const _hoisted_17 = {
  id: "fecha",
  class: ""
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("td", null, "Respuesta", -1);
const _hoisted_19 = { id: "respuesta" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("td", null, "Motivo", -1);
const _hoisted_21 = { id: "motivo" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("td", { class: "bold" }, "Banco", -1);
const _hoisted_23 = {
  id: "banco",
  class: ""
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("td", { class: "bold" }, "Recibo", -1);
const _hoisted_25 = { id: "recibo" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("td", { class: "bold" }, "Total", -1);
const _hoisted_27 = {
  id: "total",
  class: ""
};
const _hoisted_28 = /* @__PURE__ */ createStaticVNode('<footer><div class="row"><div class="container"><div class="col-lg-8 col-lg-offset-2"><img alt="" src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/epayco/pagos_procesados_por_epayco_260px.png" style="margin-top:10px;float:left;"><img alt="" src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/epayco/credibancologo.png" height="40px" style="margin-top:10px;float:right;"></div></div></div></footer>', 1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const userSession = useUserSession();
    const data = ref("");
    const datos = ref("");
    const estadoBienvenida = ref("");
    onMounted(async () => {
      estadoBienvenida.value = await getEstadoBienvenida(userSession.userId);
      data.value = await axios.get(" https://secure.epayco.co/validation/v1/reference/" + route.query.ref_payco);
      datos.value = data.value.data.data;
      if (datos.value.x_cod_response == 1) {
        updatePlanUnico(userSession.userId, datos.value);
      }
      if (datos.value.x_cod_response == 2) {
        console.log("Transaccion rechazada");
      }
      if (datos.value.x_cod_response == 3) {
        console.log("Transaccion pendiente");
      }
      if (datos.value.x_cod_response == 4) {
        console.log("Transaccion transaccion fallida");
      }
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    _hoisted_8,
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", _hoisted_10, [
                        createVNode(_component_VButton, {
                          to: { name: "deportista-solicitud-edit" },
                          icon: "lnir lnir-arrow-left rem-100",
                          light: "",
                          "dark-outlined": ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_11
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("table", _hoisted_13, [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", null, [
                        _hoisted_14,
                        createBaseVNode("td", _hoisted_15, toDisplayString(datos.value.x_id_invoice), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _hoisted_16,
                        createBaseVNode("td", _hoisted_17, toDisplayString(datos.value.x_transaction_date), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _hoisted_18,
                        createBaseVNode("td", _hoisted_19, toDisplayString(datos.value.x_response), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _hoisted_20,
                        createBaseVNode("td", _hoisted_21, toDisplayString(datos.value.x_response_reason_text), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _hoisted_22,
                        createBaseVNode("td", _hoisted_23, toDisplayString(datos.value.x_bank_name), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _hoisted_24,
                        createBaseVNode("td", _hoisted_25, toDisplayString(datos.value.x_transaction_id), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _hoisted_26,
                        createBaseVNode("td", _hoisted_27, toDisplayString(datos.value.x_amount) + " " + toDisplayString(datos.value.x_currency_code), 1)
                      ])
                    ])
                  ]),
                  _hoisted_28
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
