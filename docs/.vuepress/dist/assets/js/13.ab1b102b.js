(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{283:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"padron-de-afip-alcance-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#padron-de-afip-alcance-10"}},[e._v("#")]),e._v(" Padrón de AFIP alcance 10")]),e._v(" "),t("p",[e._v("Los métodos de este Web Service se encuentran disponibles en "),t("code",[e._v("afip.registerScopeTenService")])]),e._v(" "),t("p",[e._v("La especificación de este Web Service se encuentra disponible en http://www.afip.gob.ar/ws/ws_sr_padron_a10/manual_ws_sr_padron_a10_v1.1.pdf")]),e._v(" "),t("h3",{attrs:{id:"metodos-disponibles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metodos-disponibles"}},[e._v("#")]),e._v(" Métodos disponibles")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"#obtener-datos-del-contribuyente"}},[e._v("Obtener datos del contribuyente "),t("em",[e._v("(getPersona)")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#obtener-estado-del-servidor"}},[e._v("Obtener estado del servidor")])])]),e._v(" "),t("h2",{attrs:{id:"obtener-datos-del-contribuyente"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obtener-datos-del-contribuyente"}},[e._v("#")]),e._v(" Obtener datos del contribuyente")]),e._v(" "),t("p",[e._v("Debemos utilizar el metodo "),t("code",[e._v("getTaxpayerDetails")]),e._v(" pasando como parámetro el documento identificador del contribuyente, por ej. el CUIT. Nos devolvera un objeto con los detalles o "),t("code",[e._v("null")]),e._v(" en caso de no existir en el padrón")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" taxpayerDetails "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" afip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("registerScopeTenService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getTaxpayerDetails")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("20111111111")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//Devuelve los datos del contribuyente correspondiente al identificador 20111111111")]),e._v("\n")])])]),t("p",[e._v("Para mas información acerca de este método ver el item 3.2 de la "),t("a",{attrs:{href:"http://www.afip.gob.ar/ws/ws_sr_padron_a10/manual_ws_sr_padron_a10_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("especificación del Web service"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"obtener-estado-del-servidor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obtener-estado-del-servidor"}},[e._v("#")]),e._v(" Obtener estado del servidor")]),e._v(" "),t("p",[e._v("Para esto utilizaremos el método "),t("code",[e._v("getServerStatus")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" serverStatus "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" afip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("registerScopeTenService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getServerStatus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Este es el estado del servidor:"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("serverStatus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Para mas información acerca de este método ver el item 3.1 de la "),t("a",{attrs:{href:"http://www.afip.gob.ar/ws/ws_sr_padron_a10/manual_ws_sr_padron_a10_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("especificación del Web service"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);