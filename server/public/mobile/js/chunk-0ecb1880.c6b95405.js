(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ecb1880"],{"1c70":function(t,e,i){},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("6b75");function r(t){if(Array.isArray(t))return Object(n["a"])(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var a=i("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||s(t)||Object(a["a"])(t)||o()}},"399b":function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return r})),i.d(e,"a",(function(){return s})),i.d(e,"e",(function(){return a})),i.d(e,"b",(function(){return o}));var n={ALL:"all",PAY:"pay",DELIVERY:"delivery",FINISH:"finish",CLOSE:"close"},r={wechat:1},s={NORMAL:"normal",HANDLING:"apply",FINISH:"finish"},a={ONLY_REFUND:0,REFUNDS:1},o={REGISTER:"ZCYZ",FINDPWD:"ZHMM",LOGIN:"YZMDL",CHANGE_MOBILE:"BGSJHM"}},"6a99":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order-goods bg-white"},t._l(t.list,(function(e){return i("div",{key:e.id,staticClass:"item-wrap",on:{click:function(i){t.link&&t.goPage("goodsDetail",{id:e.goods_id})}}},[i("div",{staticClass:"item row"},[i("div",{staticClass:"goods-img"},[i("van-image",{attrs:{width:"100%",radius:"5px",height:"100%",src:e.image_str||e.image}})],1),i("div",{staticClass:"goods-info ml10"},[i("div",{staticClass:"goods-name two-txt-cut mb5"},[t._v(" "+t._s(e.goods_name||e.name))]),i("div",{staticClass:"goods-spec xs muted mb10"},[t._v(t._s(e.spec_value_str))]),i("div",{staticClass:"row-between"},[i("div",{staticClass:"goods-price"},[i("div",{staticClass:"lg primary row"},[i("span",{staticClass:"sm"},[t._v("￥")]),i("div",{staticClass:"xl"},[i("price-slice",{attrs:{weight:500,price:e.goods_price}})],1)])]),i("div",{staticClass:"goods-num sm"},[t._v("x"+t._s(e.goods_num))])])])]),t.link&&e.comment_btn?i("div",{staticClass:"footer row"},[i("div",{staticStyle:{flex:"1"}}),e.comment_btn?i("div",{on:{click:function(i){return t.goPage("commodityEvaluation",{id:e.id})}}},[i("button",{staticClass:"plain br60",attrs:{size:"xs"}},[t._v("评价晒图")])]):t._e(),i("div",{staticClass:"ml10"},[i("button",{staticClass:"plain br60",attrs:{size:"xs"},on:{click:function(i){return t.goPage("applyAfterSales",{item_id:e.item_id,order_id:e.order_id})}}},[t._v("申请退款")])])]):t._e()])})),0)},r=[],s=(i("a9e3"),{name:"OrderGoods",components:{},props:{list:{type:Array,default:function(){return[]}},link:{type:Boolean,default:!1},shopId:{type:Number}},methods:{goPage:function(t,e){this.$router.push({name:t,query:e})}}}),a=s,o=(i("73c4"),i("2877")),c=Object(o["a"])(a,n,r,!1,null,"b8ee5e96",null),d=c.exports;e["a"]=d},"73c4":function(t,e,i){"use strict";i("1c70")},a070:function(t,e,i){t.exports=i.p+"img/goods_null.d774c28d.png"},a877:function(t,e){t.exports="data:image/png;base64,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"},c740:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").findIndex,s=i("44d2"),a=i("ae40"),o="findIndex",c=!0,d=a(o);o in[]&&Array(1)[o]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!d},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},cc60:function(t,e,i){"use strict";i("d3ad")},d3ad:function(t,e,i){},fa3c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-order"},[i("van-tabs",{attrs:{active:t.active,"line-width":"40","swipe-threshold":"5"},on:{change:t.onChange}},t._l(t.order,(function(e,n){return i("van-tab",{key:n,attrs:{title:e.name,name:e.type}},[e.isShow?i("order-list",{attrs:{"order-type":e.type,id:e.type}}):t._e()],1)})),1)],1)},r=[],s=(i("c740"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-list"},[t.isEmpty?n("div",{staticClass:"column-center",staticStyle:{"padding-top":"100px"}},[n("img",{staticClass:"img-null",attrs:{src:i("a070")}}),n("span",{staticClass:"lighter"},[t._v("暂无订单")])]):n("van-list",{attrs:{finished:t.finished,finishedText:"没有更多了",error:t.error},on:{load:t.$getOrderList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.orderList,(function(e){return n("div",{key:e.id,staticClass:"order-item bg-white mt10",on:{click:function(i){return t.goPage("orderDetails",{id:e.id})}}},[n("div",{staticClass:"header row-between"},[n("div",{staticClass:"row"},[1==e.order_type?n("div",{staticClass:"mr5"},[n("van-tag",{attrs:{plain:"",color:t.primaryColor}},[t._v("秒杀")])],1):t._e(),t._v(" 订单编号："+t._s(e.order_sn)+" ")]),n("div",{class:["muted","sm",4==e.order_status?"muted":"primary"]},[t._v(" "+t._s(t.orderStatus(e.order_status))+" ")])]),n("div",{staticClass:"con"},[n("div",{staticClass:"order-goods"},[n("order-goods",{attrs:{list:e.order_goods}})],1),n("div",{staticClass:"all-price row-end"},[n("div",{staticClass:"muted xs"},[t._v("共1件商品，总金额：")]),n("div",{staticClass:"md",staticStyle:{"font-weight":"bold"}},[n("price-slice",{attrs:{showSubscript:!0,price:e.order_amount,weight:500}})],1)])]),e.cancel_btn||e.delivery_btn||e.take_btn||e.del_btn||e.pay_btn?n("div",{staticClass:"footer row"},[n("div",{staticStyle:{flex:"1"}},[1e3*e.order_cancel_time-Date.now()>0?n("div",{staticClass:"primary row sm"},[n("van-count-down",{staticClass:"count-down",attrs:{time:1e3*e.order_cancel_time-Date.now(),format:"mm"}}),t._v("分钟后订单自动关闭 ")],1):t._e()]),e.cancel_btn?n("div",[n("button",{staticClass:"plain br60 lighter",attrs:{size:"sm"},on:{click:function(i){return i.stopPropagation(),t.cancelOrder(e.id)}}},[t._v(" 取消订单 ")])]):t._e(),e.delivery_btn?n("div",{on:{click:function(i){return i.stopPropagation(),t.goPage("goodsLogistics",{id:e.id})}}},[n("button",{staticClass:"plain br60 lighter",attrs:{size:"sm"}},[t._v(" 查看物流 ")])]):t._e(),e.take_btn?n("div",{staticClass:"ml10"},[n("button",{staticClass:"plain br60 primary red",attrs:{size:"sm"},on:{click:function(i){return i.stopPropagation(),t.comfirmOrder(e.id)}}},[t._v(" 确认收货 ")])]):t._e(),e.del_btn?n("div",[n("button",{staticClass:"plain br60 lighter",attrs:{size:"sm"},on:{click:function(i){return i.stopPropagation(),t.delOrder(e.id)}}},[t._v(" 删除订单 ")])]):t._e(),e.pay_btn?n("div",{staticClass:"ml10"},[n("button",{staticClass:"bg-primary br60 white",attrs:{size:"sm"},on:{click:function(i){return i.stopPropagation(),t.payNow(e.id)}}},[t._v(" 立即付款 ")])]):t._e(),e.comment_btn?n("div",{staticClass:"ml10"},[n("button",{staticClass:"plain br60 primary red",attrs:{size:"sm"}},[t._v(" 去评价 ")])]):t._e()]):t._e()])})),0),n("van-dialog",{attrs:{"use-slot":"",value:t.showCancel,showCancelButton:!0,confirmButtonText:0==t.type||2==t.type?"确定":"删除","confirm-button-color":t.primaryColor},on:{confirm:t.onConfirm,cancel:t.onShowDialog}},[n("div",{staticClass:"column-center tips-dialog"},[n("img",{staticClass:"icon-lg",attrs:{src:i("a877")}}),0==t.type?n("div",{staticStyle:{"margin-top":"15px"}},[t._v(" 确认取消该订单吗？ ")]):t._e(),1==t.type?n("div",{staticStyle:{"margin-top":"15px"}},[t._v(" 确认删除该订单吗？ ")]):t._e(),2==t.type?n("div",{staticStyle:{"margin-top":"15px"}},[t._v(" 确认收货吗？ ")]):t._e()])])],1)}),a=[],o=i("2909"),c=(i("96cf"),i("1da1")),d=(i("18a0"),i("c24f")),l=i("6a99"),u=i("b562"),p=i("2f9f"),m={name:"OrderList",components:{OrderGoods:l["a"]},props:{orderType:{type:String}},data:function(){return{loading:!0,finished:!1,error:!1,orderList:[],showCancel:!1,isEmpty:!1,type:"",page:1}},created:function(){this.$getOrderList()},methods:{goPage:function(t,e){this.$router.push({name:t,query:e})},onShowDialog:function(){this.showCancel=!this.showCancel},delOrder:function(t){var e=this;this.id=t,this.type=1,this.$nextTick((function(){e.onShowDialog()}))},cancelOrder:function(t){var e=this;this.id=t,this.type=0,this.$nextTick((function(){e.onShowDialog()}))},comfirmOrder:function(t){var e=this;this.id=t,this.type=2,this.$nextTick((function(){e.onShowDialog()}))},onConfirm:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=null,e.t0=t.type,e.next=0===e.t0?4:1===e.t0?8:2===e.t0?12:16;break;case 4:return e.next=6,Object(d["f"])(t.id);case 6:return i=e.sent,e.abrupt("break",16);case 8:return e.next=10,Object(d["k"])(t.id);case 10:return i=e.sent,e.abrupt("break",16);case 12:return e.next=14,Object(d["h"])(t.id);case 14:return i=e.sent,e.abrupt("break",16);case 16:1==i.code&&(t.onShowDialog(),t.$toast({message:i.msg}),t.reflesh());case 17:case"end":return e.stop()}}),e)})))()},reflesh:function(){this.page=1,this.orderList=[],this.finished=!1,this.$getOrderList()},$getOrderList:function(){var t=this,e=this.page,i=this.orderType,n=this.orderList,r=this.finished;this.loading=!0,r||Object(d["z"])({type:i,page_no:e}).then((function(i){if(1==i.code){t.loading=!1;var r=i.data,s=r.list,a=r.more;n.push.apply(n,Object(o["a"])(s)),t.orderList=n,t.page=++e,t.$nextTick((function(){a||(t.finished=!0),n.length<=0&&(t.isEmpty=!0)}))}else t.error=!0}))},payNow:function(t){var e=this;this.$toast({type:"loading",message:"请稍等...",duration:0}),Object(u["l"])({from:"order",order_id:t}).then((function(t){if(e.$toast.clear(),1==t.code){var i=t.data;Object(p["a"])(i).then((function(t){e.$toast({message:"支付成功"}),e.reflesh()})).catch((function(){}))}}))}},computed:{orderStatus:function(){return function(t){var e="";switch(t){case 0:e="待支付";break;case 1:e="待发货";break;case 2:e="待收货";break;case 3:e="已完成";break;case 4:e="订单已关闭";break}return e}}}},g=m,f=(i("cc60"),i("2877")),h=Object(f["a"])(g,s,a,!1,null,"6cba6d41",null),v=h.exports,A=v,y=i("399b"),b={name:"userOrder",components:{OrderList:A},data:function(){return{order:[{name:"全部",type:y["c"].ALL,isShow:!1},{name:"待付款",type:y["c"].PAY,isShow:!1},{name:"待收货",type:y["c"].DELIVERY,isShow:!1},{name:"已完成",type:y["c"].FINISH,isShow:!1},{name:"已关闭",type:y["c"].CLOSE,isShow:!1}],active:y["c"].ALL}},created:function(){var t=this.$route.query.type||y["c"].ALL;this.changeShow(t)},mounted:function(){},methods:{changeShow:function(t){var e=this.order,i=e.findIndex((function(e){return e.type==t}));-1!=i&&(this.active=t,this.order[i].isShow=!0)},onChange:function(t){this.changeShow(t)}}},C=b,w=Object(f["a"])(C,n,r,!1,null,"3f12b918",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-0ecb1880.c6b95405.js.map