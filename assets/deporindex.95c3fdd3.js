import { e as onValue, r as ref$1, d as database } from "./config.fc5b324a.js";
import { $, D as DataTable, J as JsZip, P, p as pdfmake } from "./datatables.net-vue3.56fec32c.js";
import { z as ref, A as onMounted, o as openBlock, i as createElementBlock, j as createBaseVNode, q as createVNode, D as unref, y as defineComponent, a6 as useHead, f as createBlock } from "./index.5117c21f.js";
import { u as useViewWrapper } from "./viewWrapper.0d6041b0.js";
/*! Bulma integration for DataTables' Buttons
 * ©2021 SpryMedia Ltd - datatables.net/license
 */
$.extend(true, DataTable.Buttons.defaults, {
  dom: {
    container: {
      className: "dt-buttons field is-grouped"
    },
    button: {
      className: "button is-light",
      active: "is-active",
      disabled: "is-disabled"
    },
    collection: {
      tag: "div",
      closeButton: false,
      className: "dropdown-content",
      button: {
        tag: "a",
        className: "dt-button dropdown-item",
        active: "is-active",
        disabled: "is-disabled"
      }
    },
    splitWrapper: {
      tag: "div",
      className: "dt-btn-split-wrapper dropdown-trigger buttons has-addons",
      closeButton: false
    },
    splitDropdownButton: {
      tag: "button",
      className: "dt-btn-split-drop-button button is-light",
      closeButton: false
    },
    splitDropdown: {
      tag: "button",
      text: "&#x25BC;",
      className: "button is-light",
      closeButton: false,
      align: "split-left",
      splitAlignClass: "dt-button-split-left"
    }
  },
  buttonCreated: function(config, button) {
    if (config.buttons) {
      config._collection = $('<div class="dropdown-menu"/>').append(config._collection);
      $(button).append(
        '<span class="icon is-small"><i class="fa fa-angle-down" aria-hidden="true"></i></span>'
      );
    }
    return button;
  }
});
/*!
 * Print button for Buttons and DataTables.
 * 2016 SpryMedia Ltd - datatables.net/license
 */
var _link = document.createElement("a");
var _styleToAbs = function(el) {
  var clone = $(el).clone()[0];
  if (clone.nodeName.toLowerCase() === "link") {
    clone.href = _relToAbs(clone.href);
  }
  return clone.outerHTML;
};
var _relToAbs = function(href) {
  _link.href = href;
  var linkHost = _link.host;
  if (linkHost.indexOf("/") === -1 && _link.pathname.indexOf("/") !== 0) {
    linkHost += "/";
  }
  return _link.protocol + "//" + linkHost + _link.pathname + _link.search;
};
DataTable.ext.buttons.print = {
  className: "buttons-print",
  text: function(dt) {
    return dt.i18n("buttons.print", "Print");
  },
  action: function(e, dt, button, config) {
    var data = dt.buttons.exportData(
      $.extend({ decodeEntities: false }, config.exportOptions)
    );
    var exportInfo = dt.buttons.exportInfo(config);
    var columnClasses = dt.columns(config.exportOptions.columns).flatten().map(function(idx) {
      return dt.settings()[0].aoColumns[dt.column(idx).index()].sClass;
    }).toArray();
    var addRow = function(d, tag) {
      var str = "<tr>";
      for (var i2 = 0, ien2 = d.length; i2 < ien2; i2++) {
        var dataOut = d[i2] === null || d[i2] === void 0 ? "" : d[i2];
        var classAttr = columnClasses[i2] ? 'class="' + columnClasses[i2] + '"' : "";
        str += "<" + tag + " " + classAttr + ">" + dataOut + "</" + tag + ">";
      }
      return str + "</tr>";
    };
    var html = '<table class="' + dt.table().node().className + '">';
    if (config.header) {
      html += "<thead>" + addRow(data.header, "th") + "</thead>";
    }
    html += "<tbody>";
    for (var i = 0, ien = data.body.length; i < ien; i++) {
      html += addRow(data.body[i], "td");
    }
    html += "</tbody>";
    if (config.footer && data.footer) {
      html += "<tfoot>" + addRow(data.footer, "th") + "</tfoot>";
    }
    html += "</table>";
    var win = window.open("", "");
    if (!win) {
      dt.buttons.info(
        dt.i18n("buttons.printErrorTitle", "Unable to open print view"),
        dt.i18n("buttons.printErrorMsg", "Please allow popups in your browser for this site to be able to view the print view."),
        5e3
      );
      return;
    }
    win.document.close();
    var head = "<title>" + exportInfo.title + "</title>";
    $("style, link").each(function() {
      head += _styleToAbs(this);
    });
    try {
      win.document.head.innerHTML = head;
    } catch (e2) {
      $(win.document.head).html(head);
    }
    win.document.body.innerHTML = "<h1>" + exportInfo.title + "</h1><div>" + (exportInfo.messageTop || "") + "</div>" + html + "<div>" + (exportInfo.messageBottom || "") + "</div>";
    $(win.document.body).addClass("dt-print-view");
    $("img", win.document.body).each(function(i2, img) {
      img.setAttribute("src", _relToAbs(img.getAttribute("src")));
    });
    if (config.customize) {
      config.customize(win, config, dt);
    }
    var autoPrint = function() {
      if (config.autoPrint) {
        win.print();
        win.close();
      }
    };
    if (navigator.userAgent.match(/Trident\/\d.\d/)) {
      autoPrint();
    } else {
      win.setTimeout(autoPrint, 1e3);
    }
  },
  title: "*",
  messageTop: "*",
  messageBottom: "*",
  exportOptions: {},
  header: true,
  footer: false,
  autoPrint: true,
  customize: null
};
var reportesDeportista_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-lg-8 offset-lg-2" };
const _hoisted_3 = { class: "table-responsive" };
const _sfc_main$1 = {
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
      { data: "fecha_registro", title: "Fecha de Registro" }
    ];
    const deportistas = ref([]);
    const deporRepor = ref();
    onMounted(async () => {
      onValue(ref$1(database, "users/"), (snapshot) => {
        const arreglo = [];
        const val = snapshot.val();
        Object.keys(val).forEach((element) => {
          if (val[element].rol == "Deportista") {
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
        title: "Reporte de Deportistas",
        extend: "excelHtml5",
        text: '<span class="icon"><i class="iconify" data-icon="fa-file-excel-o" aria-hidden="true"></i></span><span>Excel</span>',
        className: "button is-success is-outlined"
      },
      {
        title: "Reporte de Deportistas",
        extend: "pdfHtml5",
        text: '<span class="icon" ><i class="iconify" data-icon="fa-file-pdf-o" aria-hidden="true"></i></span><span>PDF</span>',
        className: "button is-danger is-outlined"
      },
      {
        title: "Reporte de Deportistas",
        extend: "print",
        text: '<span class="icon"><i class="iconify" data-icon="feather:printer" aria-hidden="true"></i></span><span>Imprimir</span>',
        className: "button is-primary is-dark is-outlined"
      },
      {
        title: "Reporte de Deportistas",
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
                autoWidth: true,
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
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const viewWrapper = useViewWrapper();
    viewWrapper.setPageTitle("Reportes de Deportistas");
    useHead({
      title: "Perfil"
    });
    return (_ctx, _cache) => {
      const _component_reportesDeportista = _sfc_main$1;
      return openBlock(), createBlock(_component_reportesDeportista);
    };
  }
});
export { _sfc_main as default };
