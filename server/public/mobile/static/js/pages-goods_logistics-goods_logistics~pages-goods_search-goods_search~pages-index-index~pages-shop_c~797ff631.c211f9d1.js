(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_logistics-goods_logistics~pages-goods_search-goods_search~pages-index-index~pages-shop_c~797ff631"],{"001a":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return s}));var s={customImage:i("5357").default,priceFormat:i("c27b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"goods-list"},["double"===t.type?i("v-uni-view",{staticClass:"goods-double row-between"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white mt20",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img",staticStyle:{width:"347rpx",height:"347rpx"}},[i("custom-image",{attrs:{"lazy-load":!0,width:"347rpx",height:"347rpx",radius:"10rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"goods-name line2"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"price mt10 row"},[i("price-format",{staticClass:"mr10",attrs:{color:"#FF2C3C","first-size":34,"second-size":26,"subscript-size":26,price:e.price,weight:500}}),i("price-format",{staticClass:"muted",attrs:{firstSize:24,secondSize:24,"subscript-size":24,"line-through":!0,price:e.market_price}})],1)],1)],1)})),1):t._e(),"hot"===t.type?i("v-uni-view",{staticClass:"goods-hot"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white mt20 row",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img",staticStyle:{width:"180rpx",height:"180rpx"}},[i("custom-image",{attrs:{"lazy-load":!0,width:"180rpx",height:"180rpx",radius:"6rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info ml20"},[i("v-uni-view",{staticClass:"goods-name line2 mb10"},[t._v(t._s(e.name))]),i("v-uni-text",{staticClass:"sale br60 xxs"},[t._v("已有"+t._s(e.sales_sum)+"人购买")]),i("v-uni-view",{staticClass:"row-between  mt10"},[i("v-uni-view",{staticClass:"price mt10 row"},[i("price-format",{attrs:{"first-size":34,"second-size":26,price:e.price,weight:500}}),i("price-format",{attrs:{"first-size":24,"second-size":24,"subscript-size":24,price:e.market_price}})],1),i("v-uni-image",{staticClass:"icon-md",attrs:{src:"/static/images/icon_go_red.png"}})],1)],1),i("v-uni-image",{staticClass:"paixu",attrs:{src:"/images/No."+(s<3?s:3)+".png"}}),i("v-uni-view",{staticClass:"index xxs"},[t._v(t._s(s+1))])],1)})),1):t._e(),"new"===t.type?i("v-uni-view",{staticClass:"goods-new"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white mt20 row",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img"},[i("custom-image",{attrs:{"lazy-load":!0,width:"240rpx",height:"240rpx",radius:"10rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info ml20 mr20 flex1"},[i("v-uni-view",{staticClass:"goods-name line2 mb20"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"row-between muted xxs "},[i("v-uni-view",{staticClass:"line-through"},[i("v-uni-text",[t._v("原价")]),i("price-format",{attrs:{"second-size":22,"first-size":22,"subscript-size":22,price:e.market_price}})],1),i("v-uni-view",[t._v(t._s(e.sales_sum)+"人购买")])],1),i("v-uni-view",{staticClass:"row-between  mt10"},[i("price-format",{attrs:{color:"#FF2C3C","first-size":38,"subscript-size":26,"second-size":26,price:e.price,weight:500}}),i("v-uni-button",{staticClass:"br60",attrs:{type:"primary",size:"xs"}},[t._v("立即抢购")])],1)],1)],1)})),1):t._e(),"one"===t.type?i("v-uni-view",{staticClass:"goods-one mt20"},t._l(t.list,(function(e,s){return i("v-uni-navigator",{key:s,staticClass:"item bg-white row",attrs:{"hover-class":"none","open-type":"navigate",url:"/pages/goods_details/goods_details?id="+e.id}},[i("v-uni-view",{staticClass:"goods-img",staticStyle:{width:"200rpx",height:"200rpx"}},[i("custom-image",{attrs:{"lazy-load":!0,width:"200rpx",height:"200rpx",radius:"6rpx","lazy-load":!0,src:e.image}})],1),i("v-uni-view",{staticClass:"goods-info ml20"},[i("v-uni-view",{staticClass:"goods-name line2 mb10"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"row-between mt10"},[i("v-uni-view",{staticClass:"price mt10 row"},[i("price-format",{staticClass:"mr10",attrs:{color:"#FF2C3C","first-size":34,"second-size":26,"subscript-size":26,price:e.price,weight:500}}),i("price-format",{staticClass:"muted",attrs:{firstSize:24,secondSize:24,"subscript-size":24,"line-through":!0,price:e.market_price}})],1)],1)],1)],1)})),1):t._e()],1)},o=[]},"1f62":function(t,e,i){"use strict";i("a9e3"),i("acd8"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{priceSlice:{}}},components:{},props:{firstSize:{type:Number,default:28},secondSize:{type:Number,default:28},color:{type:String},weight:{type:[String,Number],default:400},price:{type:[String,Number],default:""},showSubscript:{type:Boolean,default:!0},subscriptSize:{type:Number,default:28},lineThrough:{type:Boolean,default:!1}},created:function(){this.priceFormat()},watch:{price:function(t){this.priceFormat()}},methods:{priceFormat:function(){var t=this.price,e={};null!==t&&(t=parseFloat(t),t=String(t).split("."),e.first=t[0],e.second=t[1],this.priceSlice=e)}}};e.default=s},4538:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={props:{src:{type:String},round:Boolean,width:{type:null},height:{type:null},radius:null,lazyLoad:Boolean,useErrorSlot:Boolean,useLoadingSlot:Boolean,showMenuByLongpress:Boolean,mode:{type:String,default:"fill"},showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0}},data:function(){return{error:!1,loading:!0,viewStyle:{}}},created:function(){this.setStyle()},methods:{setStyle:function(){var t=this.width,e=this.height,i=this.radius,s={};t&&(s.width=t),e&&(s.height=e),i&&(s["overflow"]="hidden",s["border-radius"]=i),this.viewStyle=s},onLoaded:function(t){this.loading=!1,this.$emit("load",t.detail)},onError:function(t){this.error=!1,this.loading=!0,this.$emit("error",t.detail)},onClick:function(t){this.$emit("click",t.detail)}},watch:{src:function(){this.error=!1,this.loading=!0},width:function(){this.setStyle()},height:function(){this.setStyle()}}};e.default=s},5357:function(t,e,i){"use strict";i.r(e);var s=i("a4db"),a=i("f56f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5960");var r,n=i("f0c5"),c=Object(n["a"])(a["default"],s["b"],s["c"],!1,null,"6b2a5c07",null,!1,s["a"],r);e["default"]=c.exports},5960:function(t,e,i){"use strict";var s=i("baaa"),a=i.n(s);a.a},"63f3":function(t,e,i){"use strict";var s=i("b16e"),a=i.n(s);a.a},"6a63":function(t,e,i){"use strict";i.r(e);var s=i("001a"),a=i("e36d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d8e5");var r,n=i("f0c5"),c=Object(n["a"])(a["default"],s["b"],s["c"],!1,null,"3d230bb7",null,!1,s["a"],r);e["default"]=c.exports},"7bff":function(t,e,i){var s=i("d4ad");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("d833bc6a",s,!0,{sourceMap:!1,shadowMode:!1})},"85a6":function(t,e,i){"use strict";i.r(e);var s=i("1f62"),a=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e["default"]=a.a},a4db:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return s}));var s={uniIcons:i("f4f1").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:{"custom-image":!0,"image-round":t.round},style:[t.viewStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.error?t._e():i("v-uni-image",{staticClass:"image",attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoaded.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.onError.apply(void 0,arguments)}}}),t.loading&&t.showLoading?i("v-uni-view",{staticClass:"loading-wrap image"},[t.useLoadingSlot?t._t("loading"):i("uni-icons",{attrs:{color:"#999",type:"image",size:"22"}})],2):t._e(),t.error&&t.showError?i("v-uni-view",{staticClass:"error-wrap image"},[t.useErrorSlot?t._t("error"):i("uni-icons",{attrs:{color:"#999",type:"image",size:"22"}}),i("v-uni-text",{staticClass:"sm"},[t._v("加载失败")])],2):t._e()],1)},o=[]},a744:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-react_native 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */.custom-image[data-v-6b2a5c07]{position:relative;display:block;width:100%;height:100%}.custom-image.image-round[data-v-6b2a5c07]{overflow:hidden;border-radius:50%}.custom-image .image[data-v-6b2a5c07]{display:block;width:100%;height:100%}.custom-image .loading-wrap[data-v-6b2a5c07],\r\n.custom-image .error-wrap[data-v-6b2a5c07]{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:%?28?%;background-color:#f7f8fa}',""]),t.exports=e},b16e:function(t,e,i){var s=i("bd37");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("dc7c7902",s,!0,{sourceMap:!1,shadowMode:!1})},b18c:function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return s}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-text",{class:(t.lineThrough?"~line-through":"")+" price-format",style:{color:t.color,"font-weight":t.weight}},[t.showSubscript?i("v-uni-text",{style:{"font-size":t.subscriptSize+"rpx","margin-right":"2rpx"}},[t._v("¥")]):t._e(),i("v-uni-text",{style:{"font-size":t.firstSize+"rpx","margin-right":"1rpx"}},[t._v(t._s(t.priceSlice.first))]),t.priceSlice.second?i("v-uni-text",{style:{"font-size":t.secondSize+"rpx"}},[t._v("."+t._s(t.priceSlice.second))]):t._e()],1)},o=[]},baaa:function(t,e,i){var s=i("a744");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("de930ed0",s,!0,{sourceMap:!1,shadowMode:!1})},bd37:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".price-format[data-v-32420978]{font-family:Avenir}",""]),t.exports=e},c098:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={props:{type:{type:String,default:"double"},list:{type:Array,default:function(){return[]}}},data:function(){return{}}};e.default=s},c27b:function(t,e,i){"use strict";i.r(e);var s=i("b18c"),a=i("85a6");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("63f3");var r,n=i("f0c5"),c=Object(n["a"])(a["default"],s["b"],s["c"],!1,null,"32420978",null,!1,s["a"],r);e["default"]=c.exports},d4ad:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-react_native 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */.goods-list .goods-double[data-v-3d230bb7]{-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?20?%;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.goods-list .goods-double .item[data-v-3d230bb7]{width:%?347?%;border-radius:%?10?%}.goods-list .goods-double .item .goods-info[data-v-3d230bb7]{padding:%?10?%}.goods-list .goods-hot .item[data-v-3d230bb7]{position:relative;padding:%?30?% %?20?%;border-radius:%?10?%}.goods-list .goods-hot .item .goods-info[data-v-3d230bb7]{width:%?450?%}.goods-list .goods-hot .item .goods-info .sale[data-v-3d230bb7]{padding:%?4?% %?18?%;color:#f79c0c;background-color:rgba(247,156,12,.1)}.goods-list .goods-hot .item .paix[data-v-3d230bb7],\r\n.goods-list .goods-hot .item .index[data-v-3d230bb7]{position:absolute;top:0;left:%?27?%;width:%?50?%;height:%?54?%;line-height:%?60?%;text-align:center;color:#621e09}.goods-list .goods-one .item[data-v-3d230bb7]{padding:%?20?%}.goods-list .goods-one .item[data-v-3d230bb7]:not(:last-of-type){margin-bottom:%?20?%}.goods-list .goods-new .item[data-v-3d230bb7]{box-shadow:0 0 10px rgba(0,0,0,.16);border-radius:%?10?%}',""]),t.exports=e},d8e5:function(t,e,i){"use strict";var s=i("7bff"),a=i.n(s);a.a},e36d:function(t,e,i){"use strict";i.r(e);var s=i("c098"),a=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e["default"]=a.a},f56f:function(t,e,i){"use strict";i.r(e);var s=i("4538"),a=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e["default"]=a.a}}]);