(function(e){function t(t){for(var a,o,c=t[0],l=t[1],s=t[2],m=0,d=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Home",{attrs:{msg:"Hello world!"}}),n("AddAnimal",{ref:"addAnimal",on:{"save-animal":e.saveAnimal}}),n("Animals",{attrs:{animals:e.animals},on:{"del-animal":e.deleteAnimal,"edit-animal":e.editAnimal}})],1)},i=[],o=n("2909"),c=n("1da1"),l=(n("99af"),n("4de4"),n("b0c0"),n("96cf"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h2",[e._v("Farm management dashboard")])])}],u={name:"Home",props:{msg:String}},m=u,d=n("2877"),f=Object(d["a"])(m,l,s,!1,null,"4efaac29",null),p=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.animals,(function(t){return n("div",{key:t.id},[n("Animal",{attrs:{animal:t},on:{"del-animal":function(n){return e.$emit("del-animal",t.id)},"edit-animal":function(n){return e.$emit("edit-animal",t.id,t.name)}}})],1)})),0)},v=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"animal"},[n("p",[e._v(" "+e._s(e.animal.name)+" "),n("span",{staticClass:"buttons"},[n("button",{staticClass:"btn edt",on:{click:function(t){return e.$emit("edit-animal",e.animal.id,e.animal.name)}}},[e._v("Edit")]),e._v(" "),n("button",{staticClass:"btn del",on:{click:function(t){return e.$emit("del-animal",e.animal.id)}}},[e._v("Delete")])])])])},g=[],w={name:"Animal",props:["animal"]},A=w,_=(n("c291"),Object(d["a"])(A,b,g,!1,null,"77dce313",null)),x=_.exports,O={name:"Animals",components:{Animal:x},props:["animals"]},y=O,j=Object(d["a"])(y,h,v,!1,null,"79d036a8",null),k=j.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{on:{submit:e.addAnimal}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Add animal..."},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}}),n("input",{staticClass:"btn",class:{"edit-mode":!this.editMode},attrs:{type:"submit",value:"Cancel"}})])])},R=[],C={name:"AddAnimal",data:function(){return{editMode:!1,name:"",id:null}},methods:{edit:function(e,t){this.editMode=!0,this.name=t,this.id=e},addAnimal:function(e){if(e.preventDefault(),"Cancel"!=e.submitter.value)if(this.editMode){var t={id:this.id,name:this.name};this.$emit("save-animal",t)}else{var n={name:this.name};this.$emit("save-animal",n)}this.editMode=!1,this.name=""}}},M=C,P=(n("76e6"),Object(d["a"])(M,$,R,!1,null,"14db8458",null)),E=P.exports,S=n("bc3a"),H=n.n(S),T={name:"app",components:{Home:p,Animals:k,AddAnimal:E},data:function(){return{animals:[]}},methods:{editAnimal:function(e,t){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.$refs.addAnimal.edit(e,t);case 1:case"end":return a.stop()}}),a)})))()},deleteAnimal:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("delete",e),H.a.delete("".concat("https://localhost:44368","/Animals?id=").concat(e)).then((function(n){t.animals=t.animals.filter((function(t){return t.id!==e})),console.log(n)})).catch((function(e){return alert(e.response.data)}));case 2:case"end":return n.stop()}}),n)})))()},saveAnimal:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.id){n.next=5;break}return n.next=3,t.updateAnimal(e);case 3:n.next=7;break;case 5:return n.next=7,t.addAnimal(e);case 7:case"end":return n.stop()}}),n)})))()},updateAnimal:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:H.a.put("".concat("https://localhost:44368","/Animals"),e).then((function(n){t.animals.filter((function(t){return t.id===e.id}))&&(t.animals.filter((function(t){return t.id===e.id}))[0].name=n.data.name)})).catch((function(e){return alert(e.response.data)}));case 1:case"end":return n.stop()}}),n)})))()},addAnimal:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:H.a.post("".concat("https://localhost:44368","/Animals"),e).then((function(e){return t.animals=[].concat(Object(o["a"])(t.animals),[e.data])})).catch((function(e){return alert(e.response.data)}));case 1:case"end":return n.stop()}}),n)})))()}},created:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=function(){console.log(this.test)},n={test:"b"},a={test:"A"},r={test:"c"},i=t.bind(n),i(),i.apply(a,[]),i.call(r);case 5:case"end":return e.stop()}}),e)})))()}},D=T,J=Object(d["a"])(D,r,i,!1,null,null,null),F=J.exports;a["a"].config.productionTip=!0,new a["a"]({render:function(e){return e(F)}}).$mount("#app")},"738c":function(e,t,n){},"76e6":function(e,t,n){"use strict";n("805f")},"805f":function(e,t,n){},c291:function(e,t,n){"use strict";n("738c")}});
//# sourceMappingURL=app.e8bd6d76.js.map