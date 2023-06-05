import { e as onValue, r as ref$1, d as database } from "./config.fc5b324a.js";
import { J as JsZip, P, D as DataTable, p as pdfmake } from "./datatables.net-vue3.56fec32c.js";
import { y as defineComponent, z as ref, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, D as unref, a6 as useHead, f as createBlock } from "./index.5117c21f.js";
import { u as useViewWrapper } from "./viewWrapper.0d6041b0.js";
var reportesEntrenador_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-lg-8 offset-lg-2" };
const _hoisted_3 = { class: "table-responsive" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    window.JSZip = JsZip;
    P.use(DataTable);
    P.use(pdfmake);
    P.use(DataTable);
    const columns = [
      { data: "UserID", title: "User ID" },
      { data: "identificacion", title: "Identificacion" },
      { data: "nombres", title: "Nombre" },
      { data: "apellidos", title: "Apellidos" },
      { data: "nameUser", title: "Nombre de Usuario" },
      { data: "fecha_nacimiento", title: "Fecha de Nacimiento" },
      { data: "telefono", title: "Telefono" },
      { data: "deporte", title: "Deporte" },
      { data: "fecha_registro", title: "Fecha de Registro" }
    ];
    const deportistas = ref([]);
    const deporRepor = ref();
    onMounted(async () => {
      onValue(ref$1(database, "users/"), (snapshot) => {
        const arreglo = [];
        const val = snapshot.val();
        Object.keys(val).forEach((element) => {
          if (val[element].rol == "Entrenador") {
            const entre = val[element];
            entre.id = element;
            arreglo.push({
              UserID: entre.id,
              identificacion: entre.identificacion,
              nombres: entre.nombres,
              apellidos: entre.apellidos,
              nameUser: entre.nameUser,
              fecha_nacimiento: entre.fecha_nacimiento,
              telefono: entre.telefono,
              deporte: entre.deporte,
              fecha_registro: fechaReg(entre.fecha_registro)
            });
          }
        });
        deportistas.value = arreglo;
      });
      console.log(deportistas.value);
    });
    const botones = [
      {
        title: "Reporte de Entrenadores",
        extend: "excelHtml5",
        text: '<span class="icon"><i class="iconify" data-icon="fa-file-excel-o" aria-hidden="true"></i></span><span>Excel</span>',
        className: "button is-success is-outlined"
      },
      {
        title: "Reporte de Entrenadores",
        extend: "pdfHtml5",
        text: '<span class="icon" ><i class="iconify" data-icon="fa-file-pdf-o" aria-hidden="true"></i></span><span>PDF</span>',
        className: "button is-danger is-outlined"
      },
      {
        title: "Reporte de Entrenadores",
        extend: "print",
        text: '<span class="icon"><i class="iconify" data-icon="feather:printer" aria-hidden="true"></i></span><span>Imprimir</span>',
        className: "button is-primary is-dark is-outlined"
      },
      {
        title: "Reporte de Entrenadores",
        extend: "copy",
        text: '<span class="icon"><i class="iconify" data-icon="fa-copy" aria-hidden="true"></i></span><span>Copiar</span>',
        className: "button is-warning is-dark is-outlined"
      }
    ];
    function fechaReg(milisegundos) {
      var fecha = new Date(milisegundos);
      var fechatexto = fecha.toISOString();
      return fechatexto.substring(0, 10);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(unref(P), {
              ref_key: "deporRepor",
              ref: deporRepor,
              columns,
              data: deportistas.value,
              class: "table table-striped table-bordered display",
              options: {
                scrollX: true,
                responsive: true,
                autoWidth: false,
                dom: "Bfrtip",
                language: {
                  search: "Buscar",
                  zeroRecords: "No hay registros para mostrar",
                  info: "Mostrando del _START_ a _END_ de _TOTAL_ Registros.",
                  infoFiltered: "(Filtrados de _MAX_ registros.)",
                  paginate: {
                    first: "Primero",
                    previous: "Anterior",
                    next: "siguiente",
                    last: "Ultimo"
                  }
                },
                buttons: botones
              }
            }, null, 8, ["data", "options"])
          ])
        ])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Reportes de Entrenadores");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_reportesEntrenador = _sfc_main$1;
      return openBlock(), createBlock(_component_reportesEntrenador);
    };
  }
});
export { _sfc_main as default };
