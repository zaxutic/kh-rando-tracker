(function(e){function t(t){for(var a,s,r=t[0],c=t[1],l=t[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={index:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"26ae":function(e,t,n){},"2ec8":function(e,t,n){},"3d61":function(e,t,n){"use strict";var a=n("7a2b"),o=n.n(a);o.a},"5c3e":function(e,t,n){},"5c88":function(e,t,n){"use strict";var a=n("cb45"),o=n.n(a);o.a},"5ca3":function(e,t,n){"use strict";var a=n("5c3e"),o=n.n(a);o.a},"69ae":function(e,t,n){"use strict";var a=n("83a8"),o=n.n(a);o.a},"7a2b":function(e,t,n){},"7faf":function(e,t,n){"use strict";var a=n("b8ff"),o=n.n(a);o.a},"83a8":function(e,t,n){},b232:function(e,t,n){},b8ff:function(e,t,n){},bb31:function(e,t,n){"use strict";var a=n("b232"),o=n.n(a);o.a},c188:function(e,t,n){},cb45:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main",{on:{contextmenu:function(e){return e.preventDefault()}}},e._l(e.clients,(function(e,t){return n("BaseGrid",{key:t,attrs:{clientId:t}})})),1),e.footer?n("TheFooter"):e._e(),n("ModalView")],1)},i=[],s=n("d4ec"),r=n("bee2"),c=n("262e"),l=n("2caf"),u=n("9ab4"),d=n("60a3"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("draggable",{staticClass:"grid",class:{disableShadows:e.disableShadows},style:e.gridStyle,attrs:{tag:"transition-group",componentData:e.componentData,animation:"250",disabled:!e.drag},on:{start:function(t){e.dragging=!0},end:function(t){e.dragging=!1}},model:{value:e.itemNums,callback:function(t){e.itemNums=t},expression:"itemNums"}},e._l(e.itemNums,(function(t){return n("BaseCell",{key:t,attrs:{client:e.clientId,file:e.items[t]},on:{remove:function(n){return e.remove(t)}}})})),1)},m=[],f=(n("99af"),n("4de4"),n("b64b"),n("d3b7"),n("ddb0"),n("2909")),v=n("310e"),g=n.n(v),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item",class:e.cls,style:e.itemStyle,on:{mousedown:e.handleMouseDown,wheel:e.handleWheel}},[n("img",{staticClass:"icon",class:{opaque:e.cell.opaque,disabled:e.cell.disabled},attrs:{src:e.custom("file","img/"+e.file+".png")}}),e.cell.disabled?e._e():[n("transition",{attrs:{name:"fade-up"}},[e.cell.total>1&&e.cell.level>1?n("img",{staticClass:"number",attrs:{src:"img/numbers/"+Math.min(e.cell.total,e.cell.level)+".png"}}):e._e()]),n("transition",{attrs:{name:"fade-up"}},[e.cell.data&&e.cell.level===e.cell.total+1?n("img",{staticClass:"nobody",attrs:{src:"img/nobody/"+e.cell.data+".png"}}):e._e()]),n("transition",{attrs:{name:"fade-up"}},[e.cell.secondary&&e.cell.secondaryLevel?n("img",{staticClass:"secondary",attrs:{src:"img/"+e.secondaryFile+".png"}}):e._e()])],n("transition",{attrs:{name:"fade-cross"}},[e.cell.disabled?n("img",{staticClass:"cross",attrs:{src:"img/cross.png"}}):e._e()])],2)},b=[],y=(n("2af1"),function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){var e,a;return Object(s["a"])(this,n),a=t.apply(this,arguments),a.cell=a.$store.getters["tracker/cell"](a.client,a.file),a.cls=null!==(e=a.cell.cls)&&void 0!==e?e:null,a}return Object(r["a"])(n,[{key:"custom",value:function(e,t){var n,a;return null!==(n=null===(a=this.customDefaults)||void 0===a?void 0:a[e])&&void 0!==n?n:t}},{key:"dispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.$store.dispatch(e,{client:this.client,cell:this.file,offset:t,shift:n})}},{key:"handleMouseDown",value:function(e){if(this.$store.state.drag)2===e.button&&this.$emit("remove");else if(this.$store.state.edit)this.$router.push({name:"EditItem",params:{file:this.file}});else{var t=e.ctrlKey?-1:1;switch(e.button){case 0:this.dispatch("tracker/primary",t,e.shiftKey);break;case 2:this.dispatch("tracker/secondary",t);break;case 1:this.dispatch("tracker/disable");break}}}},{key:"handleWheel",value:function(e){if(this.$store.state.settings.scroll){e.preventDefault();var t=-Math.sign(e.deltaY);this.dispatch("tracker/primary",t,e.shiftKey)}}},{key:"secondaryFile",get:function(){return this.$store.getters["tracker/secondary"](this.client,this.file)}},{key:"customDefaults",get:function(){return this.$store.state.settings.customDefaults[this.file]}},{key:"itemStyle",get:function(){return{width:"".concat(100/(this.$store.state.settings.columns||5),"%"),padding:"".concat(this.$store.state.settings.padding||5,"px")}}}]),n}(d["c"]));Object(u["a"])([Object(d["b"])(String)],y.prototype,"client",void 0),Object(u["a"])([Object(d["b"])(String)],y.prototype,"file",void 0),y=Object(u["a"])([d["a"]],y);var _=y,w=_,k=(n("5c88"),n("2877")),j=Object(k["a"])(w,h,b,!1,null,"1d02e422",null),O=j.exports,C=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.items=Object.keys(e.$store.state.tracker.clients[e.clientId]),e.dragging=!1,e}return Object(r["a"])(n,[{key:"remove",value:function(e){this.itemNums=this.itemNums.filter((function(t){return t!==e}))}},{key:"disableShadows",get:function(){return this.$store.state.settings.disableShadows}},{key:"itemNums",get:function(){var e=this.$store.state.settings.itemNums;return e.length?e:Object(f["a"])(Array(Object.keys(this.items).length).keys())},set:function(e){this.$store.commit("settings/setNums",{nums:e})}},{key:"componentData",get:function(){return{props:{tag:"div",type:"transition",name:this.dragging?null:"flip-list"}}}},{key:"drag",get:function(){return this.$store.state.drag}},{key:"gridStyle",get:function(){var e=this.$store.state.settings,t=(e.size||100)+2*(e.padding||5),n={"max-width":"".concat((e.columns||5)*t,"px"),"background-color":e.bgColor},a=e.bgImg,o="rgba(0, 0, 0, .6)";return a&&(n["background-image"]="linear-gradient(".concat(o,", ").concat(o,"), url(").concat(a,")")),n}}]),n}(d["c"]);Object(u["a"])([Object(d["b"])({type:String,required:!1,default:""})],C.prototype,"clientId",void 0),C=Object(u["a"])([Object(d["a"])({components:{BaseCell:O,draggable:g.a}})],C);var x=C,S=x,$=(n("bb31"),Object(k["a"])(S,p,m,!1,null,"5a66d9ba",null)),T=$.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{staticClass:"container"},[n("div",{staticClass:"info"},[e._v("Kingdom Hearts 2 Final Mix Item Tracker - Version "+e._s(e.version)+" (Preview)")]),e._m(0),n("div",{staticClass:"buttons"},e._l(e.routes,(function(t){return n("router-link",{key:t,attrs:{to:t,tag:"button"}},[e._v(e._s(e.title(t)))])})),1),n("div",{staticClass:"buttons"},[n("button",{on:{click:e.popout}},[e._v("Popout window")])])])])},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info"},[n("a",{attrs:{href:"https://tracker.zaxu.xyz/old",target:"_blank"}},[e._v("Click here")]),e._v(" to use the pre-1.4 version")])}],D=(n("fb6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"note"},[n("p",[e._t("default")],2)])}),I=[],z=(n("5ca3"),{}),R=Object(k["a"])(z,D,I,!1,null,"89531f4a",null),A=R.exports,B=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.routes=["about","help","co-op","settings"],e.version="2.0.0",e}return Object(r["a"])(n,[{key:"title",value:function(e){return e[0].toUpperCase()+e.slice(1)}},{key:"popout",value:function(){window.open("#/?footer=0","","left=0,top=0,width=600,height=1200,menubar=no,toolbar=no,scrollbars=no")}}]),n}(d["c"]);B=Object(u["a"])([Object(d["a"])({components:{BaseTooltip:A}})],B);var L=B,P=L,M=(n("3d61"),Object(k["a"])(P,E,N,!1,null,"417b9e18",null)),q=M.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade-up"}},[e.show?n("div",{staticClass:"outer",on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.gotoRoot(t)}}},[n("div",{staticClass:"inner"},[n("router-view",{staticClass:"content"})],1)]):e._e()])},J=[],H=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(r["a"])(n,[{key:"gotoRoot",value:function(){this.$router.push("/")}},{key:"mounted",value:function(){var e=this;window.addEventListener("keydown",(function(t){"Escape"===t.key&&"/"!==e.$route.path&&e.gotoRoot()}))}},{key:"show",get:function(){return"/"!==this.$route.path}}]),n}(d["c"]);H=Object(u["a"])([d["a"]],H);var G=H,W=G,K=(n("ed16"),n("f0f2"),Object(k["a"])(W,F,J,!1,null,"e1bd9f5c",null)),V=K.exports,U=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(r["a"])(n,[{key:"onRouteChange",value:function(e,t){e.meta.title?document.title="".concat(e.meta.title," | KH2FM Item Tracker"):document.title="KH2FM Item Tracker"}},{key:"mounted",value:function(){document.body.onmousedown=function(e){if(1===e.button)return!1}}},{key:"clients",get:function(){return this.$store.state.tracker.clients}},{key:"footer",get:function(){return"0"!==this.$route.query.footer}}]),n}(d["c"]);Object(u["a"])([Object(d["d"])("$route",{immediate:!0})],U.prototype,"onRouteChange",null),U=Object(u["a"])([Object(d["a"])({components:{BaseGrid:T,TheFooter:q,ModalView:V}})],U);var Y=U,X=Y,Z=(n("7faf"),Object(k["a"])(X,o,i,!1,null,null,null)),Q=Z.exports,ee=n("8c4f"),te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("This is a tracker intended for use with the "),n("a",{attrs:{href:"https://randomizer.valaxor.com",target:"_blank"}},[e._v("Kingdom Hearts 2 Final Mix Randomizer")]),e._v(" by Valaxor, for the "),n("a",{attrs:{href:"https://docs.google.com/document/d/1GYjEnrM_TIk7qyO75clPLYD-_nP5wTR7K6SE-Wn-QCg/edit",target:"_blank"}},[e._v("Garden of Assemblage (GoA) Mod")]),e._v(" by Sonicshadowsilver2.")]),n("p",[e._v("It allows the tracking of progress such as world completion, drive forms, magic, etc. For a more detailed explanation, see Help.")]),n("p",[e._v("It was initially developed by Kokemon198, however has since entirely been rewritten by Zax with a completely different codebase. Massive thanks to "),n("a",{attrs:{href:"https://www.artstation.com/liamjohnsondesign",target:"_blank"}},[e._v("Televo")]),e._v(" for providing really nice images that replaced all of the previous ones, and adding new items.")]),n("p",[e._v("The GitHub repository with the original code for this site can be found "),n("a",{attrs:{href:"https://github.com/zaxutic/kh2fm-rando-tracker",target:"_blank"}},[e._v("here.")])]),n("p",[e._v("If you have any questions/issues, you can find me in the "),n("a",{attrs:{href:"https://discord.gg/GcJR7Fv",target:"_blank"}},[e._v("KH2FM Rando")]),e._v(" Discord server, Twitter ("),n("a",{attrs:{href:"https://twitter.com/z_ax__",target:"_blank"}},[e._v("@Z_ax__")]),e._v("), or GitHub. You can also find Televo in the rando Discord for questions regarding their additions.")])])}],ae={},oe=Object(k["a"])(ae,te,ne,!1,null,null,null),ie=oe.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Join Room")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.join(t)}}},[n("div",{staticClass:"row grid"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.joinRoomId,expression:"joinRoomId"}],staticClass:"long",attrs:{placeholder:"Room ID"},domProps:{value:e.joinRoomId},on:{input:function(t){t.target.composing||(e.joinRoomId=t.target.value)}}}),e._m(0)])]),n("h2",[e._v("Create Room")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.create(t)}}},[n("div",{staticClass:"row grid"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.roomSize,expression:"roomSize",modifiers:{number:!0}}],staticClass:"long",attrs:{placeholder:"Room Size"},domProps:{value:e.roomSize},on:{input:function(t){t.target.composing||(e.roomSize=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._m(1)])]),e.message?n("div",{staticClass:"row"},[n("p",[e._v(e._s(e.message))])]):e._e(),e._m(2)])},re=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{attrs:{type:"submit"}},[e._v("Join Room")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{attrs:{type:"submit"}},[e._v("Create Room")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("p",{staticClass:"footnote"},[e._v("Note: Everyone should join the room BEFORE doing anything on the tracker as the server doesn't save anyone's state, it only tells others what you add to it.")])])}],ce=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.joinRoomId="",e.createRoomId="",e.roomSize=null,e}return Object(r["a"])(n,[{key:"join",value:function(e){this.$store.dispatch("co_op/join",{room:this.joinRoomId})}},{key:"create",value:function(e){this.$store.dispatch("co_op/create",{size:this.roomSize||2})}},{key:"message",get:function(){if(this.$store.state.co_op.joined)return"Joined room ".concat(this.$store.state.co_op.room);var e=this.$store.state.co_op.error;return e||""}}]),n}(d["c"]);ce=Object(u["a"])([d["a"]],ce);var le=ce,ue=le,de=Object(k["a"])(ue,se,re,!1,null,null,null),pe=de.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Left Click")]),n("p",[e._v("The item will become activated, lighting up to full opacity.")]),n("p",[e._v("When clicking on a world more than once, if applicable, a number will appear in the bottom right indicating how many visits have been completed. There are similar systems for drive, magic, summon, and Sora levels."),n("BaseTooltip",[e._v("'Visits' for Atlantica/100 Acre Wood represent not whole world completion but segment completion. That is, song completion for Atlantica (including the tutorial), and pages for 100 Acre Wood.")]),n("BaseTooltip",[e._v("The counter for Sora's Level will increase in increments of +1 from LV1-15, then +5 from LV15-50 and +10 from LV50-99.")])],1),n("p",[e._v("After all visits have been completed, clicking again will either trigger a symbol to appear in the top left, for defeat of the Data Org/Absent Sillhouette fight, or reset the cell back to its original state.")]),n("h3",[e._v("Right Click")]),e._m(0),n("h3",[e._v("Middle Click")]),n("p",[e._v("A red cross will be put over the item, for if a world/item is disabled in the seed. (Items can now be completely removed in rearrange mode.)")]),n("h3",[e._v("Modifiers")]),n("p",[e._v("Holding ctrl while clicking on an item will go backwards rather than forwards. This works both for left click and right click.")]),n("p",[e._v("Holding shift while left clicking will increase the level without lighting up the item. This is useful if you are leveling up a drive form using its auto ability but haven't unlocked the form itself. E.g. leveling up Valor Form through Auto Valor.")])])},fe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"definitions"},[n("li",[n("div",{staticClass:"base"},[e._v("Hollow Bastion")]),n("div",{staticClass:"definition"},[e._v("Defeated Sephiroth")])]),n("li",[n("div",{staticClass:"base"},[e._v("Cavern of Remembrance")]),n("div",{staticClass:"definition"},[e._v("All Chests until 1st Fight, All Chests until 2nd Fight, All Remaining Chests, Cleared Nobody Fights")])]),n("li",[n("div",{staticClass:"base"},[e._v("Olympus Coliseum")]),n("div",{staticClass:"definition"},[e._v("Cleared Pain and Panic Cup, Cerberus Cup, Titan Cup, Goddess of Fate Cup, Hades Paradox Cup")])]),n("li",[n("div",{staticClass:"base"},[e._v("Disney Castle")]),n("div",{staticClass:"definition"},[e._v("Defeated Lingering Will/Terra")])]),n("li",[n("div",{staticClass:"base"},[e._v("The World That Never Was")]),n("div",{staticClass:"definition"},[e._v("Defeated Roxas, Xigbar, Luxord, Saïx, Xemnas")])]),n("li",[n("div",{staticClass:"base"},[e._v("100 Acre Wood")]),n("div",{staticClass:"definition"},[e._v("Torn Page Counter")])]),n("li",[n("div",{staticClass:"base"},[e._v("Drive Forms")]),n("div",{staticClass:"definition"},[e._v("Growth Ability Counter")])]),n("li",[n("div",{staticClass:"base"},[e._v("The Three Proofs")]),n("div",{staticClass:"definition"},[e._v("Obtained Bronze Crown, Silver Crown, Gold Crown")])])])}],ve=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);ve=Object(u["a"])([Object(d["a"])({components:{BaseTooltip:A}})],ve);var ge=ve,he=ge,be=(n("69ae"),Object(k["a"])(he,me,fe,!1,null,"4926bc54",null)),ye=be.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Settings")]),n("div",{staticClass:"row grid"},[n("SwitchSlider",{model:{value:e.settings.scroll,callback:function(t){e.$set(e.settings,"scroll",t)},expression:"settings.scroll"}}),n("div",[n("p",[e._v("Scroll wheel increment/decrement")]),n("BaseTooltip",[e._v("Scroll up on item to +1, scroll down to -1")])],1)],1),n("div",{staticClass:"row grid"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.columns,expression:"settings.columns"}],attrs:{placeholder:"5"},domProps:{value:e.settings.columns},on:{input:function(t){t.target.composing||e.$set(e.settings,"columns",t.target.value)}}}),n("p",[e._v("Number of grid columns")])]),n("div",{staticClass:"row grid"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.settings.size,expression:"settings.size",modifiers:{number:!0}}],attrs:{placeholder:"100"},domProps:{value:e.settings.size},on:{input:function(t){t.target.composing||e.$set(e.settings,"size",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("p",[e._v("Item size (px)")])]),n("div",{staticClass:"row grid"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.padding,expression:"settings.padding"}],attrs:{placeholder:"5"},domProps:{value:e.settings.padding},on:{input:function(t){t.target.composing||e.$set(e.settings,"padding",t.target.value)}}}),n("div",[n("p",[e._v("Item padding (px)")]),n("BaseTooltip",[e._v("Pre-1.4 versions used 7.5")])],1)]),n("div",{staticClass:"row grid"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.bgColor,expression:"settings.bgColor"}],staticClass:"long",attrs:{placeholder:"#212121"},domProps:{value:e.settings.bgColor},on:{input:function(t){t.target.composing||e.$set(e.settings,"bgColor",t.target.value)}}}),n("div",[n("p",[e._v("Background color")]),n("BaseTooltip",[e._v("Accepts any valid "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"}},[e._v("CSS color")])])],1)]),n("div",{staticClass:"row grid"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.bgImg,expression:"settings.bgImg"}],staticClass:"long",attrs:{placeholder:"https://..."},domProps:{value:e.settings.bgImg},on:{input:function(t){t.target.composing||e.$set(e.settings,"bgImg",t.target.value)}}}),n("div",[n("p",[e._v("Background image")]),n("BaseTooltip",[e._v("The image must be provided as a URL")])],1)]),n("div",{staticClass:"row grid"},[n("SwitchSlider",{model:{value:e.settings.disableShadows,callback:function(t){e.$set(e.settings,"disableShadows",t)},expression:"settings.disableShadows"}}),n("div",[n("p",[e._v("Disable image shadows")]),n("BaseTooltip",[e._v("Can significantly improve performance on slower devices")])],1)],1),n("div",{staticClass:"row grid"},[n("button",{class:{alt:e.drag},on:{click:e.toggleDrag}},[e._v("Toggle Rearrange Mode")]),n("div",[n("BaseTooltip",[e._v("Click + drag to move items around, and right click to remove an item")]),n("button",{on:{click:e.reset}},[e._v("Reset")])],1)]),n("div",{staticClass:"row grid"},[n("button",{on:{click:e.save}},[e._v("Save as File")]),n("div",[n("p",[e._v("Export settings")]),n("BaseTooltip",[e._v("Includes custom layout")])],1)]),n("div",{staticClass:"row grid"},[n("button",{on:{click:e.load}},[e._v("Upload File")]),n("p",[e._v("Import settings")]),n("input",{ref:"fileLoader",staticStyle:{display:"none"},attrs:{type:"file",accept:".json"},on:{change:e.onChange}})]),e._m(0)])},we=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("p",{staticClass:"footnote"},[e._v("Note: In some browsers, using the tracker as a local file may not allow settings to persist across sessions")])])}],ke=n("5530"),je=n("21a6"),Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.value},on:{change:function(t){return e.$emit("input",t.target.checked)}}}),n("span",{staticClass:"slider"})])},Ce=[],xe=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);Object(u["a"])([Object(d["b"])(Boolean)],xe.prototype,"value",void 0),xe=Object(u["a"])([d["a"]],xe);var Se=xe,$e=Se,Te=(n("e33c"),Object(k["a"])($e,Oe,Ce,!1,null,"4698d5f0",null)),Ee=Te.exports,Ne=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.settings=Object(ke["a"])({},e.$store.state.settings),e}return Object(r["a"])(n,[{key:"onSettingsChanged",value:function(){this.$store.commit("settings/setSettings",this.settings)}},{key:"toggleDrag",value:function(){this.$store.commit("toggleDrag")}},{key:"reset",value:function(){this.$store.commit("settings/resetNums")}},{key:"toggleEdit",value:function(){this.$store.commit("toggleEdit")}},{key:"save",value:function(){var e=new Blob([JSON.stringify(this.$store.state.settings)],{type:"text/plain;charset=utf-8"});Object(je["saveAs"])(e,"kh2fm-tracker-settings.json")}},{key:"load",value:function(){this.$refs.fileLoader.click()}},{key:"onChange",value:function(e){var t=this,n=e.target,a=new FileReader;a.onload=function(e){t.$store.commit("settings/setSettings",JSON.parse(e.target.result))},a.readAsText(n.files[0])}},{key:"drag",get:function(){return this.$store.state.drag}},{key:"editItems",get:function(){return this.$store.state.edit}}]),n}(d["c"]);Object(u["a"])([Object(d["d"])("settings",{deep:!0})],Ne.prototype,"onSettingsChanged",null),Ne=Object(u["a"])([Object(d["a"])({components:{BaseTooltip:A,SwitchSlider:Ee}})],Ne);var De=Ne,Ie=De,ze=Object(k["a"])(Ie,_e,we,!1,null,null,null),Re=ze.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Edit Item")]),n("h4",[e._v("File: "+e._s(e.file))]),e._m(0),n("div",{staticClass:"row grid"},[n("input",{attrs:{placeholder:e.settings.total}}),n("p",[e._v("Total")])]),n("div",{staticClass:"row grid"},[n("input",{attrs:{placeholder:e.settings.level}}),n("p",[e._v("Default Level")])]),n("div",{staticClass:"row grid"},[n("input",{staticClass:"long",attrs:{placeholder:e.settings.group}}),n("p",[e._v("Group")])]),n("div",{staticClass:"row grid"},[n("p",[e._v("Secondary (right click)")]),n("input",{staticClass:"long",attrs:{placeholder:JSON.stringify(e.settings.secondary)}})])])},Be=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row grid"},[n("input",{staticClass:"long"}),n("p",[e._v("Custom image")])])}],Le=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(r["a"])(n,[{key:"file",get:function(){return this.$route.params.file}},{key:"settings",get:function(){return this.$store.state.tracker.clients[""][this.file]}}]),n}(d["c"]);Le=Object(u["a"])([d["a"]],Le);var Pe=Le,Me=Pe,qe=Object(k["a"])(Me,Ae,Be,!1,null,"69bbe73d",null),Fe=qe.exports;a["a"].use(ee["a"]);var Je,He=[{path:"/about",name:"About",meta:{title:"About"},component:ie},{path:"/help",name:"Help",meta:{title:"Help"},component:ye},{path:"/co-op",name:"CoOp",meta:{title:"Co-Op"},component:pe},{path:"/settings",name:"Settings",meta:{title:"Settings"},component:Re},{path:"/item/:file",name:"EditItem",meta:{title:"Edit Item"},component:Fe}],Ge=new ee["a"]({routes:He}),We=Ge,Ke=n("2f62"),Ve=n("0e44"),Ue=(n("4160"),n("d81d"),n("07ac"),n("159b"),n("3835")),Ye=n("b85c"),Xe={"worlds/simulated_twilight_town":{data:"roxas"},"worlds/twilight_town":{total:3,data:"axel"},"worlds/hollow_bastion":{total:2,data:"demyx",secondary:"secondary/sephiroth"},"worlds/cavern_of_remembrance":{secondary:["depths","mining","engine","transport"].map((function(e){return"secondary/cor/".concat(e)}))},"worlds/land_of_dragons":{total:2,data:"xigbar"},"worlds/beast's_castle":{total:2,data:"xaldin"},"worlds/olympus_coliseum":{total:2,data:"zexion",secondary:["pain_panic","cerberus","titan","goddess","paradox"].map((function(e){return"secondary/cups/".concat(e)}))},"worlds/disney_castle":{data:"marluxia",secondary:"secondary/lingering_will"},"worlds/timeless_river":{},"worlds/port_royal":{total:2,data:"luxord"},"worlds/agrabah":{total:2,data:"lexaeus"},"worlds/halloween_town":{total:2,data:"vexen"},"worlds/pride_land":{total:2,data:"saix"},"worlds/space_paranoids":{total:2,data:"larxene"},"worlds/the_world_that_never_was":{data:"xemnas",secondary:["roxas","xigbar","luxord","saix","kingdom_hearts"].map((function(e){return"nobody/".concat(e)}))},"worlds/atlantica":{total:6,data:"larxene",cls:"atlantica"},"worlds/100_acre_wood":{total:6,secondary:["page","page2","page3","page4","page5"].map((function(e){return"secondary/pages/".concat(e)})),cls:"hundred_acre"},"worlds/underdrome_cups":{total:5},"worlds/replica_data":{total:13},"other/sora's_level":{total:27,level:1},"drive/valor":{total:7,secondary:["jump","jump2","jump3","jump4"].map((function(e){return"secondary/drive/".concat(e)})),cls:"drive"},"drive/wisdom":{total:7,secondary:["quick","quick2","quick3","quick4"].map((function(e){return"secondary/drive/".concat(e)})),cls:"drive"},"drive/limit":{total:7,secondary:["dodge","dodge2","dodge3","dodge4"].map((function(e){return"secondary/drive/".concat(e)})),cls:"drive"},"drive/master":{total:7,secondary:["aerial","aerial2","aerial3","aerial4"].map((function(e){return"secondary/drive/".concat(e)})),cls:"drive"},"drive/final":{total:7,secondary:["glide","glide2","glide3","glide4"].map((function(e){return"secondary/drive/".concat(e)})),cls:"drive"},"magic/fire":{total:3},"magic/blizzard":{total:3},"magic/thunder":{total:3},"magic/cure":{total:3},"magic/reflect":{total:3},"magic/magnet":{total:3},"summons/chicken_little":{total:7,group:"summon"},"summons/genie":{total:7,group:"summon"},"summons/stitch":{total:7,group:"summon"},"summons/peter_pan":{total:7,group:"summon"},"other/secret_reports":{total:13},"other/promise_charm":{},"other/proof_of_nonexistence":{secondary:["bronze","silver","gold"].map((function(e){return"secondary/crowns/".concat(e)}))},"other/proof_of_connection":{secondary:["bronze","silver","gold"].map((function(e){return"secondary/crowns/".concat(e)}))},"other/proof_of_tranquility":{secondary:["bronze","silver","gold"].map((function(e){return"secondary/crowns/".concat(e)}))}},Ze=Object(Ye["a"])(Object.values(Xe).entries());try{for(Ze.s();!(Je=Ze.n()).done;){var Qe,et,tt=Object(Ue["a"])(Je.value,2),nt=tt[0],at=tt[1];at.id=nt,at.total=null!==(Qe=at.total)&&void 0!==Qe?Qe:1,at.level=null!==(et=at.level)&&void 0!==et?et:0,at.opaque=Boolean(at.level),at.disabled=!1,at.secondary&&(at.secondaryLevel=0)}}catch(yt){Ze.e(yt)}finally{Ze.f()}var ot={clients:{"":JSON.parse(JSON.stringify(Xe))}};[].concat(Object(f["a"])(Object(f["a"])(Array(27).keys()).map((function(e){return"numbers/".concat(e+1,".png")}))),["numbers/max.png"],Object(f["a"])(Object(f["a"])(Array(5).keys()).map((function(e){return"secondary/page".concat(e?e+1:"",".png")}))),Object(f["a"])(Object(f["a"])(Array(4).keys()).map((function(e){return"secondary/drive/jump".concat(e?e+1:"",".png")}))),Object(f["a"])(Object(f["a"])(Array(4).keys()).map((function(e){return"secondary/drive/quick".concat(e?e+1:"",".png")}))),Object(f["a"])(Object(f["a"])(Array(4).keys()).map((function(e){return"secondary/drive/dodge".concat(e?e+1:"",".png")}))),Object(f["a"])(Object(f["a"])(Array(4).keys()).map((function(e){return"secondary/drive/aerial".concat(e?e+1:"",".png")}))),Object(f["a"])(Object(f["a"])(Array(4).keys()).map((function(e){return"secondary/drive/glide".concat(e?e+1:"",".png")}))),Object(f["a"])(["bronze","silver","gold"].map((function(e){return"secondary/crowns/".concat(e,".png")}))),Object(f["a"])(["pain_panic","cerberus","titan","goddess","paradox"].map((function(e){return"secondary/cups/".concat(e,".png")}))),Object(f["a"])(["roxas","xigbar","luxord","saix","kingdom_hearts"].map((function(e){return"nobody/".concat(e,".png")}))),Object(f["a"])(["depths","mining","engine","transport"].map((function(e){return"secondary/cor/".concat(e,".png")}))),["secondary/lingering_will.png","secondary/sephiroth.png","secondary/triangle.png"]).forEach((function(e){var t=new Image;t.src="img/".concat(e)}));var it,st={cell:function(e){return function(t,n){return e.clients[t][n]}},secondary:function(e,t){return function(e,n){var a=t.cell(e,n);return"string"===typeof a.secondary?a.secondary:a.secondary[a.secondaryLevel-1]}}},rt={addClient:function(e,t){a["a"].set(e.clients,t.client,JSON.parse(JSON.stringify(Xe)))},removeClient:function(e,t){a["a"].delete(e.clients,t.client)},setOpaque:function(e,t){e.clients[t.client][t.cell].opaque=t.opaque},setData:function(e,t){e.clients[t.client][t.cell].showData=t.show},setLevel:function(e,t){e.clients[t.client][t.cell].level=t.level},setSecondaryLevel:function(e,t){e.clients[t.client][t.cell].secondaryLevel=t.level},disable:function(e,t){var n=e.clients[t.client][t.cell];n.disabled=!n.disabled}},ct={primary:function(e,t){var n=e.commit,a=e.dispatch,o=e.state,i=t.client,s=t.cell,r=t.offset,c=void 0===r?1:r,l=t.shift,u=void 0!==l&&l,d=o.clients[i],p=d[s];if(!p.disabled){a("co_op/sendClick",{type:"user_primary",client:i,cell:s,offset:c},{root:!0});var m=p.level,f=Boolean(p.data),v=p.total+f,g=v+1;(!m||p.opaque||u)&&(m=(m+g+c)%g),u&&(c>0&&m-c===0?m+=1:c<0&&1===m&&(m=0)),m?u||n("setOpaque",{client:i,cell:s,opaque:!0}):n("setOpaque",{client:i,cell:s,opaque:!1}),p.nobody&&m===v&&n("setData",{client:i,cell:s,show:!0});var h=p.group,b=[];if(h)for(var y in d)d[y].group===h&&b.push(y);else b.push(s);for(var _=0,w=b;_<w.length;_++){var k=w[_];n("setLevel",{client:i,cell:k,level:m})}}},secondary:function(e,t){var n=e.commit,a=e.dispatch,o=e.state,i=t.client,s=t.cell,r=t.offset,c=void 0===r?1:r,l=o.clients[i][s];if(!l.disabled){var u=l.secondary;if(u){a("co_op/sendClick",{type:"user_secondary",client:i,cell:s,offset:c},{root:!0});var d=(Array.isArray(u)?u.length:1)+1;n("setSecondaryLevel",{client:i,cell:s,level:(l.secondaryLevel+d+c)%d})}}},disable:function(e,t){var n=e.commit,a=e.dispatch,o=t.client,i=t.cell;a("co_op/sendClick",{type:"user_disable",client:o,cell:i},{root:!0}),n("disable",{client:o,cell:i})}},lt={namespaced:!0,state:ot,getters:st,mutations:rt,actions:ct},ut={scroll:!1,columns:"",size:"",padding:"",bgColor:"",bgImg:"",disableShadows:!1,itemNums:[],customDefaults:{}},dt={setSettings:function(e,t){Object.assign(e,t)},setNums:function(e,t){e.itemNums=t.nums},resetNums:function(e){e.itemNums=[]},setDefault:function(e,t){a["a"].set(e.customDefaults,t.file,t.defaults)}},pt={namespaced:!0,state:ut,mutations:dt},mt=n("8468"),ft={room:"",joined:!1,error:""},vt={setRoom:function(e,t){e.room=t.room},setJoined:function(e,t){e.joined=t.joined},setError:function(e,t){e.error=t.error}},gt={connect:function(e,t){var n=e.commit,a=e.dispatch;it&&it.close(1e3),n("setJoined",{joined:!1}),n("setError",{error:""}),it=new WebSocket("wss://tracker-ws.zaxu.xyz"),it.addEventListener("error",(function(){n("setError",{error:"Could not connect to server. (Server may be down)"})})),it.addEventListener("open",(function(){it.send(t.openData)})),it.addEventListener("message",(function(e){a("handleMessage",{message:e.data})}))},sendClick:function(e,t){Object(mt["a"])(e),it&&!t.client&&it.send(JSON.stringify({type:t.type,item:t.cell,offset:t.offset}))},join:function(e,t){var n=e.dispatch;n("connect",{openData:JSON.stringify({type:"join_room",room:t.room})})},create:function(e,t){var n=e.dispatch;n("connect",{openData:JSON.stringify({type:"create_room",size:t.size})})},handleMessage:function(e,t){var n=e.commit,a=e.dispatch,o=JSON.parse(t.message);switch(o.type){case"room_created":n("setRoom",{room:o.id}),n("setJoined",{joined:!0});break;case"room_joined":n("setRoom",{room:o.id}),n("setJoined",{joined:!0});break;case"user_joined":n("tracker/addClient",{client:o.id},{root:!0});break;case"user_left":n("tracker/removeClient",{client:o.id},{root:!0});break;case"error":n("setError",{error:o.message});break;case"user_primary":a("tracker/primary",{client:o.id,cell:o.item,offset:o.offset,shift:o.shift},{root:!0});break;case"user_secondary":a("tracker/secondary",{client:o.id,cell:o.item,offset:o.offset},{root:!0});break;case"user_disable":n("tracker/disable",{client:o.id,cell:o.item},{root:!0});break}}},ht={namespaced:!0,state:ft,mutations:vt,actions:gt};a["a"].use(Ke["a"]);var bt=new Ke["a"].Store({state:{drag:!1,edit:!1},mutations:{toggleDrag:function(e){e.drag=!e.drag},toggleEdit:function(e){e.edit=!e.edit}},modules:{tracker:lt,settings:pt,co_op:ht},strict:!1,plugins:[Object(Ve["a"])({paths:["settings"]})]});a["a"].config.productionTip=!1,new a["a"]({router:We,store:bt,render:function(e){return e(Q)}}).$mount("#app")},e33c:function(e,t,n){"use strict";var a=n("26ae"),o=n.n(a);o.a},ed16:function(e,t,n){"use strict";var a=n("c188"),o=n.n(a);o.a},f0f2:function(e,t,n){"use strict";var a=n("2ec8"),o=n.n(a);o.a}});
//# sourceMappingURL=index.49ecdd25.js.map