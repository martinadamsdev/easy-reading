(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],f=0,h=[];f<r.length;f++)a=r[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/epubReading/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"134f":function(t,e,n){},"1a8a":function(t,e,n){},2:function(t,e){},3009:function(t,e,n){},"3d0e":function(t,e,n){},"3ecf":function(t,e,n){"use strict";var i=n("1a8a"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a={name:"App"};document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("html"),e=window.innerWidth/10;e=e>50?50:e,t.style.fontSize=e+"px"}));var r=a,c=n("2877"),l=Object(c["a"])(r,o,s,!1,null,null,null),u=l.exports,f=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ebook"},[n("title-bar",{attrs:{ifTitleAndMenuShow:t.ifTitleAndMenuShow}}),n("div",{staticClass:"read-wrapper"},[n("div",{attrs:{id:"read"}}),n("div",{staticClass:"mask"},[n("div",{staticClass:"left",on:{click:t.prevPage}}),n("div",{staticClass:"center",on:{click:t.toggleTitleAndMenu}}),n("div",{staticClass:"right",on:{click:t.nextPage}})])]),n("menu-bar",{ref:"menuBar",attrs:{ifTitleAndMenuShow:t.ifTitleAndMenuShow,fontSizeList:t.fontSizeList,defaultFontSize:t.defaultFontSize,themeList:t.themeList,defaultTheme:t.defaultTheme,bookAvailable:t.bookAvailable,navigation:t.navigation},on:{setFontSize:t.setFontSize,setTheme:t.setTheme,onProgressChange:t.onProgressChange,jumpTo:t.jumpTo}})],1)},d=[],p=(n("ac6a"),n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleAndMenuShow,expression:"ifTitleAndMenuShow"}],staticClass:"title-wrapper"},[n("div",{staticClass:"left"},[n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon-back icon"})])]),n("div",{staticClass:"right"},[n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon-cart icon"})]),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon-person icon"})]),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon-more icon"})])])])])}),v=[],m={name:"TitleBar",props:{ifTitleAndMenuShow:{type:Boolean,default:!1}}},g=m,w=(n("3ecf"),Object(c["a"])(g,p,v,!1,null,"029bd156",null)),S=w.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-bar"},[n("transition",{attrs:{name:"slide-up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifTitleAndMenuShow,expression:"ifTitleAndMenuShow"}],staticClass:"menu-wrapper",class:{"hide-box-shadow":t.ifSettingShow||!t.ifTitleAndMenuShow}},[n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon-menu icon",on:{click:function(e){return t.showSetting(3)}}})]),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon-progress icon",on:{click:function(e){return t.showSetting(2)}}})]),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon-bright icon",on:{click:function(e){return t.showSetting(1)}}})]),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon-a icon",on:{click:function(e){return t.showSetting(0)}}},[t._v("A")])])])]),n("transition",{attrs:{name:"slide-up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifSettingShow,expression:"ifSettingShow"}],staticClass:"setting-wrapper"},[0===t.showTag?n("div",{staticClass:"setting-font-size",attrs:{fontSizeList:t.fontSizeList}},[n("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[0].fontSize+"px"}},[t._v("A")]),n("div",{staticClass:"select"},t._l(t.fontSizeList,(function(e,i){return n("div",{key:i,staticClass:"select-wrapper",on:{click:function(n){return t.setFontSize(e.fontSize)}}},[n("div",{staticClass:"line"}),n("div",{staticClass:"point-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.defaultFontSize===e.fontSize,expression:"defaultFontSize === item.fontSize"}],staticClass:"point"},[n("div",{staticClass:"small-point"})])]),n("div",{staticClass:"line"})])})),0),n("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[t.fontSizeList.length-1].fontSize+"px"}},[t._v("A")])]):1===t.showTag?n("div",{staticClass:"setting-theme"},t._l(t.themeList,(function(e,i){return n("div",{key:i,staticClass:"setting-theme-item",on:{click:function(e){return t.setTheme(i)}}},[n("div",{staticClass:"preview",class:{"no-border":"#fff"!==e.style.body.background},style:{background:e.style.body.background}}),n("div",{staticClass:"text",class:{selected:i===t.defaultTheme}},[t._v(t._s(e.name))])])})),0):2===t.showTag?n("div",{staticClass:"setting-progress"},[n("div",{staticClass:"progress-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.progress,expression:"progress"}],ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",step:"1",disabled:!t.bookAvailable},domProps:{value:t.progress},on:{change:function(e){return t.onProgressChange(e.target.value)},input:function(e){return t.onProgressInput(e.target.value)},__r:function(e){t.progress=e.target.value}}})]),n("div",{staticClass:"text-wrapper"},[n("span",[t._v(t._s(t.bookAvailable?t.progress+"%":"加载中..."))])])]):t._e()])]),n("content-view",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],attrs:{ifShowContent:t.ifShowContent,navigation:t.navigation,bookAvailable:t.bookAvailable},on:{jumpTo:t.jumpTo}}),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ifShowContent,expression:"ifShowContent"}],staticClass:"content-mask",on:{click:t.hideContent}})])],1)},C=[],T=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-right"}},[n("div",{staticClass:"content"},[t.bookAvailable?n("div",{staticClass:"content-wrapper"},[n("h5",[t._v("目录")]),t._l(t.navigation.toc,(function(e,i){return n("div",{key:i,staticClass:"content-item",on:{click:function(n){return t.jumpTo(e.href)}}},[n("span",{staticClass:"text"},[t._v(t._s(e.label))])])}))],2):n("div",{staticClass:"empty"},[t._v("加载中...")])])])}),y=[],k={name:"Content",props:{ifShowContent:Boolean,navigation:Object,bookAvailable:Boolean},methods:{jumpTo:function(t){this.$emit("jumpTo",t)}}},z=k,A=(n("d767"),Object(c["a"])(z,T,y,!1,null,"75fd51ba",null)),_=A.exports,x={name:"MenuBar",components:{ContentView:_},data:function(){return{ifSettingShow:!1,showTag:0,progress:0,ifShowContent:!1}},props:{ifTitleAndMenuShow:{type:Boolean,default:!1},fontSizeList:Array,defaultFontSize:Number,themeList:Array,defaultTheme:Number,bookAvailable:Boolean,navigation:Object},methods:{hideContent:function(){this.ifShowContent=!1},jumpTo:function(t){this.$emit("jumpTo",t)},onProgressInput:function(t){this.progress=t,this.$refs.progress.style.backgroundSize="".concat(this.progress,"% 100%")},onProgressChange:function(t){this.$emit("onProgressChange",t)},setTheme:function(t){this.$emit("setTheme",t)},setFontSize:function(t){this.$emit("setFontSize",t)},showSetting:function(t){this.showTag=t,3===this.showTag?(this.ifSettingShow=!1,this.ifShowContent=!0):this.ifSettingShow=!0},hideSetting:function(){this.ifSettingShow=!1}}},M=x,j=(n("bd87"),Object(c["a"])(M,b,C,!1,null,"d675fc44",null)),P=j.exports,F=n("a211"),L="static/图解物联网.epub",O={name:"Ebook",components:{MenuBar:P,TitleBar:S},data:function(){return{ifTitleAndMenuShow:!1,fontSizeList:[{fontSize:12},{fontSize:14},{fontSize:16},{fontSize:18},{fontSize:20},{fontSize:22},{fontSize:24}],defaultFontSize:16,themeList:[{name:"default",style:{body:{color:"#000",background:"#fff"}}},{name:"eye",style:{body:{color:"#000",background:"#ceeaba"}}},{name:"night",style:{body:{color:"#fff",background:"#000"}}},{name:"gold",style:{body:{color:"#000",background:"#F1DFCF"}}}],defaultTheme:0,bookAvailable:!1,navigation:{}}},methods:{jumpTo:function(t){this.rendition.display(t),this.hideTitleAndMenuShow()},hideTitleAndMenuShow:function(){this.ifTitleAndMenuShow=!1,this.$refs.menuBar.hideSetting(),this.$refs.menuBar.hideContent()},onProgressChange:function(t){var e=t/100,n=e>0?this.locations.cfiFromPercentage(e):0;this.rendition.display(n)},setTheme:function(t){this.themes.select(this.themeList[t].name),this.defaultTheme=t},registerTheme:function(){var t=this;this.themeList.forEach((function(e){t.themes.register(e.name,e.style)}))},setFontSize:function(t){this.defaultFontSize=t,this.themes&&this.themes.fontSize(t+"px")},toggleTitleAndMenu:function(){this.ifTitleAndMenuShow=!this.ifTitleAndMenuShow,this.ifTitleAndMenuShow||this.$refs.menuBar.hideSetting()},prevPage:function(){var t=this;this.ifTitleAndMenuShow=!0,this.$refs.menuBar.showSetting(2),this.rendition&&this.rendition.prev().then((function(){if(t.locations){var e=t.rendition.currentLocation(),n=Math.ceil(100*t.locations.percentageFromCfi(e.start.cfi));t.$refs.menuBar.onProgressInput(n)}}))},nextPage:function(){var t=this;this.rendition&&(this.ifTitleAndMenuShow=!0,this.$refs.menuBar.showSetting(2),this.rendition.next().then((function(){if(t.locations){var e=t.rendition.currentLocation(),n=Math.ceil(100*t.locations.percentageFromCfi(e.start.cfi));t.$refs.menuBar.onProgressInput(n)}})))},showEpub:function(){var t=this;this.book=new F["a"](L),this.rendition=this.book.renderTo("read",{width:window.innerWidth,height:window.innerHeight}),this.rendition.display(),this.themes=this.rendition.themes,this.setFontSize(this.defaultFontSize),this.registerTheme(),this.setTheme(this.defaultTheme),this.book.ready.then((function(e){return t.book.locations.generate(e)})).then((function(){t.navigation=t.book.navigation,t.locations=t.book.locations,t.bookAvailable=!0}))}},mounted:function(){this.showEpub()}},$=O,B=(n("6e06"),Object(c["a"])($,h,d,!1,null,"42c17fab",null)),E=B.exports;i["a"].use(f["a"]);var N=new f["a"]({mode:"hash",base:"/epubReading/",routes:[{path:"/",name:"ebook",component:E}]}),I=n("2f62");i["a"].use(I["a"]);var R=new I["a"].Store({state:{},mutations:{},actions:{}}),D=(n("3d0e"),n("134f"),n("fe3c")),J=n.n(D);J.a.prototype.focus=function(t){var e;t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.focus(),t.setSelectionRange(e,e)):t.focus()},J.a.attach(document.body),i["a"].config.productionTip=!1,new i["a"]({router:N,store:R,render:function(t){return t(u)}}).$mount("#app")},"6e06":function(t,e,n){"use strict";var i=n("3009"),o=n.n(i);o.a},b3a2:function(t,e,n){},bd87:function(t,e,n){"use strict";var i=n("b3a2"),o=n.n(i);o.a},d767:function(t,e,n){"use strict";var i=n("e007"),o=n.n(i);o.a},e007:function(t,e,n){}});
//# sourceMappingURL=app.64497b9c.js.map