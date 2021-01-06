(function(e){function t(t){for(var r,l,i=t[0],u=t[1],s=t[2],f=0,h=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&h.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(h.length)h.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=n("8c4f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"appElement"},[n("button",{staticStyle:{"margin-right":"20px"},on:{click:e.reset}},[e._v(" Reset ")]),n("button",{on:{click:function(t){return t.preventDefault(),e.download(t)}}},[e._v(" Download ")]),n("br"),n("br"),e._v(" Load from file: "),n("input",{ref:"fileUpload",attrs:{type:"file"},on:{change:e.upload}}),n("br"),e._v(" Load from URL: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.fileUrl,expression:"fileUrl"}],attrs:{type:"text",size:"32"},domProps:{value:e.fileUrl},on:{input:function(t){t.target.composing||(e.fileUrl=t.target.value)}}}),n("button",{on:{click:function(t){return t.preventDefault(),e.loadFromUrl(t)}}},[e._v(" Load ")])]),n("div",{staticClass:"appElement"},[n("br"),e._v("New language: "),n("input",{ref:"newLanguage",attrs:{type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newLanguage(t)}}}),n("button",{on:{click:e.newLanguage}},[e._v(" Add ")]),n("br"),n("br")]),n("div",{ref:"localeTable",attrs:{id:"localeTable"}},[n("FlexibleTable",{attrs:{items:e.items,fields:e.fields},scopedSlots:e._u([e._l(e.getLanguages(e.locale),(function(t){return{key:t,fn:function(r){var a=r.value;return[n("input",{key:t,staticStyle:{width:"90%"},attrs:{type:"text"},domProps:{value:a.value},on:{keyup:function(n){return e.set(t,a.path,n)}}})]}}}))],null,!0)})],1),n("div",{staticClass:"appElement"},[n("br"),e._v("New path: "),n("input",{ref:"newPath",attrs:{type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newPath(t)}}}),n("select",{ref:"newPathLanguage",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newPath(t)}}},e._l(e.getLanguages(e.locale),(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),n("button",{on:{click:e.newPath}},[e._v(" Add ")])]),e.loading?n("div",{attrs:{id:"loading"}},[n("div",[e._v("Loading...")])]):e._e()])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"appElement"},[n("h2",[e._v("Locale Editor")])])}],i=n("2ef0"),u=n.n(i),s=n("bc3a"),c=n.n(s),f=n("aedf"),h=n("21a6"),p=n.n(h);function d(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=v(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw o}}}}function v(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y={name:"App",components:{FlexibleTable:f["a"]},data:function(){return{locale:{en:{hello:"Hello"},de:{hello:"Hallo"}},fileUrl:"",loading:!1}},computed:{localeTransformed:function(){var e=this,t={};return u.a.forOwn(this.locale,(function(n,r){var a,o=d(e.getPaths(n));try{for(o.s();!(a=o.n()).done;){var l=a.value;u.a.set(t,"".concat(l,".").concat(r),u.a.get(n,l))}}catch(i){o.e(i)}finally{o.f()}})),t},items:function(){var e,t=[],n=d(this.getPaths(this.locale));try{for(n.s();!(e=n.n()).done;){var r,a=e.value,o={path:a},l=d(this.getLanguages(this.locale));try{for(l.s();!(r=l.n()).done;){var i=r.value;o[i]={value:u.a.get(this.locale,"".concat(i,".").concat(a),""),path:a}}}catch(s){l.e(s)}finally{l.f()}t.push(o)}}catch(s){n.e(s)}finally{n.f()}return t},fields:function(){var e,t=[{key:"path",width:"20%",minWidth:"200px",align:"left"}],n=d(this.getLanguages(this.locale));try{for(n.s();!(e=n.n()).done;){var r=e.value;t.push({key:r,label:r,width:"20%",minWidth:"150px",align:"center"})}}catch(a){n.e(a)}finally{n.f()}return t}},watch:{fileUrl:function(){var e={};this.fileUrl&&(e.fromUrl=this.fileUrl),this.$router.push({query:e})}},mounted:function(){this.$route.query.fromUrl&&(this.fileUrl=this.$route.query.fromUrl,this.loadFromUrl())},methods:{getPaths:function(e){for(var t=[],n=0,r=Object.values(e);n<r.length;n++){var a=r[n];t=u.a.union(t,this._getPaths(a))}return t},_getPaths:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=[];return u.a.forOwn(e,(function(e,a){var o="".concat(n).concat(a);u.a.isString(e)?r.includes(o)||r.push(o):r=r.concat(t._getPaths(e,o+"."))})),r},getLanguages:function(e){return Object.keys(e)},upload:function(e){var t=this,n=new FileReader;n.onload=function(e){t.locale=JSON.parse(e.target.result)||{},t.$refs.fileUpload.value=""},n.readAsText(e.target.files[0])},set:function(e,t,n){u.a.set(this.locale,"".concat(e,".").concat(t),n.target.value)},download:function(){var e=new Blob([JSON.stringify(this.locale,null,2)],{type:"text/plain;charset=utf-8"});p.a.saveAs(e,"locale.json")},newLanguage:function(){var e=this.$refs.newLanguage.value;e&&!this.locale[e]&&this.$set(this.locale,e,{}),this.$refs.newLanguage.value=""},newPath:function(){var e=this.$refs.newPathLanguage.value,t=this.$refs.newPath.value,n=this.getPaths(this.locale).map((function(t){return"".concat(e,".").concat(t)}));if(t&&e&&this.getLanguages(this.locale).includes(e)&&!this.getPaths(this.locale).includes(t)){var r=[e].concat(t.split(".")),a=null,o=0;while(o<r.length){var l=a,i=r[o];if(a=(a?a+".":"")+r[o],n.includes(a)){console.warn("Part of paths already exists!",a),a=null;break}u.a.get(this.locale,a)||this.$set(u.a.get(this.locale,l),i,{}),o+=1}a&&(u.a.set(this.locale,a,""),this.$refs.newPath.value="",this.$refs.localeTable.scrollTop=1e5)}else console.warn("Invalid input.")},reset:function(){this.locale={},this.fileUrl=""},loadFromUrl:function(){var e=this;""!=this.fileUrl&&this.fileUrl.startsWith("http")&&(this.loading=!0,c.a.get(this.fileUrl).then((function(e){return e.data})).then((function(t){e.locale=t})).catch((function(e){alert("Error when loading from URL:",e)})).finally((function(){e.loading=!1})))}}},m=y,b=(n("034f"),n("2877")),w=Object(b["a"])(m,o,l,!1,null,null,null),_=w.exports;r["a"].use(a["a"]);var k=new a["a"]({mode:"history",routes:[]});r["a"].config.productionTip=!1,new r["a"]({router:k,render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.d27cbc7a.js.map