(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74edc5d4"],{1149:function(t,i,e){t.exports=e.p+"img/pay_address.bca0ca89.png"},"1c70":function(t,i,e){},"66f9":function(t,i,e){"use strict";e("8d72")},"6a99":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"order-goods bg-white"},t._l(t.list,(function(i){return e("div",{key:i.id,staticClass:"item-wrap",on:{click:function(e){t.link&&t.goPage("goodsDetail",{id:i.goods_id})}}},[e("div",{staticClass:"item row"},[e("div",{staticClass:"goods-img"},[e("van-image",{attrs:{width:"100%",radius:"5px",height:"100%",src:i.image_str||i.image}})],1),e("div",{staticClass:"goods-info ml10"},[e("div",{staticClass:"goods-name two-txt-cut mb5"},[t._v(" "+t._s(i.goods_name||i.name))]),e("div",{staticClass:"goods-spec xs muted mb10"},[t._v(t._s(i.spec_value_str))]),e("div",{staticClass:"row-between"},[e("div",{staticClass:"goods-price"},[e("div",{staticClass:"lg primary row"},[e("span",{staticClass:"sm"},[t._v("￥")]),e("div",{staticClass:"xl"},[e("price-slice",{attrs:{weight:500,price:i.goods_price}})],1)])]),e("div",{staticClass:"goods-num sm"},[t._v("x"+t._s(i.goods_num))])])])]),t.link&&i.comment_btn?e("div",{staticClass:"footer row"},[e("div",{staticStyle:{flex:"1"}}),i.comment_btn?e("div",{on:{click:function(e){return t.goPage("commodityEvaluation",{id:i.id})}}},[e("button",{staticClass:"plain br60",attrs:{size:"xs"}},[t._v("评价晒图")])]):t._e(),e("div",{staticClass:"ml10"},[e("button",{staticClass:"plain br60",attrs:{size:"xs"},on:{click:function(e){return t.goPage("applyAfterSales",{item_id:i.item_id,order_id:i.order_id})}}},[t._v("申请退款")])])]):t._e()])})),0)},a=[],r=(e("a9e3"),{name:"OrderGoods",components:{},props:{list:{type:Array,default:function(){return[]}},link:{type:Boolean,default:!1},shopId:{type:Number}},methods:{goPage:function(t,i){this.$router.push({name:t,query:i})}}}),o=r,c=(e("73c4"),e("2877")),n=Object(c["a"])(o,s,a,!1,null,"b8ee5e96",null),l=n.exports;i["a"]=l},"73c4":function(t,i,e){"use strict";e("1c70")},"8d72":function(t,i,e){},"8f00":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"order-details"},[s("div",{staticClass:"header-bg"}),s("div",{staticClass:"header"},[0==t.orderDetail.order_status?s("div",{staticClass:"item"},[s("div",{staticClass:"white lg mb5"},[t._v("等待买家付款")]),t.cancelTime?s("div",{staticClass:"white sm row"},[t._v(" 支付剩余 "),s("van-count-down",{staticClass:"count-down",attrs:{time:t.cancelTime,format:"mm分ss秒"},on:{finish:t.$getOrderDetail}}),t._v("自动关闭 ")],1):t._e()]):t._e(),1==t.orderDetail.order_status?s("div",{staticClass:"item"},[s("div",{staticClass:"white lg mb5"},[t._v("等待商家发货")]),s("div",{staticClass:"white sm"},[t._v("您的商品正在打包中，请耐心等待…")])]):t._e(),2==t.orderDetail.order_status?s("div",{staticClass:"item"},[s("div",{staticClass:"white lg mb5"},[t._v("已发货")]),s("div",{staticClass:"white sm"},[t._v("您的商品正在路中，请耐心等待…")])]):t._e(),3==t.orderDetail.order_status?s("div",{staticClass:"item"},[s("div",{staticClass:"white lg mb5"},[t._v("已完成")]),s("div",{staticClass:"white sm"},[t._v("商品已签收，期待再次购买！")])]):t._e(),4==t.orderDetail.order_status?s("div",{staticClass:"item"},[s("div",{staticClass:"white lg mb5"},[t._v("订单已关闭")])]):t._e()]),s("div",{staticClass:"address-wrap row contain"},[s("img",{staticClass:"icon mr10",attrs:{src:e("1149")}}),s("div",{staticClass:"address"},[s("div",[s("span",{staticClass:"name md mr5"},[t._v(t._s(t.orderDetail.consignee))]),s("span",{staticClass:"phone md"},[t._v(t._s(t.orderDetail.mobile))]),s("div",{staticClass:"area sm mt5 lighter"},[t._v(t._s(t.orderDetail.delivery_address))])])])]),t._e(),s("div",{staticClass:"goods contain"},[s("order-goods",{attrs:{"show-comment":t.orderDetail.comment_btn,"show-refund":t.orderDetail.refund_btn,link:!0,list:t.orderDetail.order_goods,shopId:9}})],1),s("div",{staticClass:"price contain"},[s("div",{staticClass:"row-between"},[s("div",[t._v("商品金额")]),s("div",{staticClass:"black"},[t._v(" ¥ "),s("price-slice",{attrs:{price:t.orderDetail.goods_price}})],1)]),s("div",{staticClass:"row-between"},[s("div",[t._v("运费")]),s("div",{staticClass:"black"},[t._v(" +¥ "),s("price-slice",{attrs:{price:t.orderDetail.shipping_price}})],1)]),0!=t.orderDetail.discount_amount?s("div",{staticClass:"row-between"},[s("div",[t._v("优惠券")]),s("div",{staticClass:"primary"},[t._v(" -¥ "),s("price-slice",{attrs:{price:t.orderDetail.discount_amount}})],1)]):t._e(),s("div",{staticClass:"row-end"},[s("div",{staticClass:"lighter"},[t._v("实付金额：")]),s("div",{staticClass:"primary xl"},[t._v(" ¥ "),s("price-slice",{attrs:{price:t.orderDetail.order_amount}})],1)])]),s("div",{staticClass:"order-info contain"},[s("div",{staticClass:"item row",staticStyle:{"align-items":"flex-start"}},[s("div",{staticClass:"title"},[t._v("买家留言")]),s("div",{staticClass:"black"},[t._v(t._s(t.orderDetail.user_remark||"无"))])])]),s("div",{staticClass:"order-info contain"},[s("div",{staticClass:"item row"},[s("div",{staticClass:"title"},[t._v("订单编号")]),s("div",{staticClass:"black"},[t._v(t._s(t.orderDetail.order_sn))])]),s("div",{staticClass:"item row"},[s("div",{staticClass:"title"},[t._v("支付方式")]),s("div",{staticClass:"black"},[t._v(t._s(t.orderDetail.pay_way_text))])]),s("div",{staticClass:"item row"},[s("div",{staticClass:"title"},[t._v("下单时间")]),s("div",{staticClass:"black"},[t._v(t._s(t.orderDetail.create_time))])]),t.orderDetail.pay_time?s("div",{staticClass:"item row"},[s("div",{staticClass:"title"},[t._v("付款时间")]),s("div",{staticClass:"black"},[t._v(t._s(t.orderDetail.pay_time))])]):t._e(),t.orderDetail.shipping_time?s("div",{staticClass:"item row"},[s("div",{staticClass:"title"},[t._v("发货时间")]),s("div",{staticClass:"black"},[t._v(t._s(t.orderDetail.shipping_time))])]):t._e(),t.orderDetail.confirm_take_time?s("div",{staticClass:"item row"},[s("div",{staticClass:"title"},[t._v("成交时间")]),s("div",{staticClass:"black"},[t._v(t._s(t.orderDetail.confirm_take_time))])]):t._e(),t.orderDetail.cancel_time?s("div",{staticClass:"item row"},[s("div",{staticClass:"title"},[t._v("关闭时间")]),s("div",{staticClass:"black"},[t._v(t._s(t.orderDetail.cancel_time))])]):t._e()]),t.orderDetail.cancel_btn||t.orderDetail.delivery_btn||t.orderDetail.take_btn||t.orderDetail.del_btn||t.orderDetail.pay_btn?s("div",{staticClass:"footer bg-white row"},[s("div",{staticStyle:{flex:"1"}}),t.orderDetail.cancel_btn?s("div",[s("button",{staticClass:"plain br60",attrs:{size:"sm"},on:{click:t.cancelOrder}},[t._v("取消订单")])]):t._e(),t.orderDetail.delivery_btn?s("div",[s("button",{staticClass:"plain br60",attrs:{size:"sm"},on:{click:function(i){return t.goPage("goodsLogistics",{id:t.orderDetail.id})}}},[t._v("查看物流")])]):t._e(),t.orderDetail.take_btn?s("div",{staticClass:"ml10"},[s("button",{staticClass:"plain br60 primary red",attrs:{size:"sm"},on:{click:t.comfirmOrder}},[t._v("确认收货")])]):t._e(),t.orderDetail.del_btn?s("div",[s("button",{staticClass:"plain br60",attrs:{size:"sm"},on:{click:t.delOrder}},[t._v("删除订单")])]):t._e(),t.orderDetail.pay_btn?s("div",{staticClass:"ml10"},[s("button",{staticClass:"bg-primary br60 white",attrs:{size:"sm"},on:{click:t.payNow}},[t._v("立即付款")])]):t._e()]):t._e(),s("van-dialog",{attrs:{"use-slot":"",value:t.showCancel,showCancelButton:!0,confirmButtonText:0==t.type||2==t.type?"确定":"删除","confirm-button-color":t.primaryColor},on:{confirm:t.onConfirm,cancel:t.onShowDialog}},[s("div",{staticClass:"column-center tips-dialog"},[s("img",{staticClass:"icon-lg",attrs:{src:e("a877")}}),0==t.type?s("div",{staticStyle:{"margin-top":"15px"}},[t._v("确认取消该订单吗？")]):t._e(),1==t.type?s("div",{staticStyle:{"margin-top":"15px"}},[t._v("确认删除该订单吗？")]):t._e(),2==t.type?s("div",{staticStyle:{"margin-top":"15px"}},[t._v("确认收货吗？")]):t._e()])])],1)},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"bargain-header row"},[e("div",{staticClass:"line"}),e("div",{staticClass:"title md normal ml5 mr5"},[t._v("支付成功即可完成拼团")]),e("div",{staticClass:"line"})])}],r=(e("96cf"),e("1da1")),o=e("6a99"),c=e("b562"),n=e("c24f"),l=e("2f9f"),d={name:"userOrder",components:{OrderGoods:o["a"]},data:function(){return{orderDetail:{},type:0,showCancel:!1,cancelTime:0}},created:function(){this.id=this.$route.query.id,this.$getOrderDetail()},mounted:function(){},methods:{$getOrderDetail:function(){var t=this;Object(n["y"])(this.id).then((function(i){if(1==i.code){var e=1e3*i.data.order_cancel_time-Date.now();t.orderDetail=i.data,t.cancelTime=e>0?e:0}}))},goPage:function(t,i){this.$router.push({name:t,query:i})},onShowDialog:function(){this.showCancel=!this.showCancel},delOrder:function(t){var i=this;this.type=1,this.$nextTick((function(){i.onShowDialog()}))},cancelOrder:function(t){var i=this;this.type=0,this.$nextTick((function(){i.onShowDialog()}))},comfirmOrder:function(t){var i=this;this.type=2,this.$nextTick((function(){i.onShowDialog()}))},onConfirm:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:e=null,i.t0=t.type,i.next=0===i.t0?4:1===i.t0?8:2===i.t0?12:16;break;case 4:return i.next=6,Object(n["f"])(t.id);case 6:return e=i.sent,i.abrupt("break",16);case 8:return i.next=10,Object(n["k"])(t.id);case 10:return e=i.sent,i.abrupt("break",16);case 12:return i.next=14,Object(n["h"])(t.id);case 14:return e=i.sent,i.abrupt("break",16);case 16:if(1!=e.code){i.next=23;break}if(t.onShowDialog(),t.$toast({message:e.msg}),1!=t.type){i.next=22;break}return setTimeout((function(){t.$router.go(-1)}),1e3),i.abrupt("return");case 22:t.$getOrderDetail();case 23:case"end":return i.stop()}}),i)})))()},payNow:function(){var t=this;this.$toast({type:"loading",message:"请稍等...",duration:0}),Object(c["l"])({from:"order",order_id:this.id}).then((function(i){if(t.$toast.clear(),1==i.code){var e=i.data;Object(l["a"])(e).then((function(i){t.$toast({message:"支付成功"}),t.reflesh()})).catch((function(){}))}}))}}},v=d,m=(e("66f9"),e("2877")),u=Object(m["a"])(v,s,a,!1,null,"919cdd0a",null);i["default"]=u.exports},a877:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAIl0lEQVR4Xu2dTVbcOBDHq5J5k+xCThA4wcAJAicYs5jpnhXkBAMnAE6Q5gQ0q3HPLBAniDlByAkCJwjZhXlDa17Zalp22y1Zbn+U2n6Px6JlW6qf9fEvlSQEppcMftsG/OkNSLkLIDcAcFsryiYA0J9+3QEA/alL3gLgAyBGIP/7juKfW46mQA6ZlkGwAfjqPUjYBaC/FKwVFoGgQgQIEcjHGxTiYYUPr+VRnQUY1zB4cVAvMJNNFVCYXna1hnYKoAyGmwDyVwA4rK+WmaAV/R7DHAPgNYpQa4pdn7ea+zoBUAZDahpPktrG4ooA4AxFSP9bvVoFKPf/OAApDxmBy8KKAHGMV39dtkWxFYAK3GnOSLEtO1R97x0gnrYBslGAycDk5UfGNc4EOgJ4Om5ywNMIwFgGwKsTADwyWcCP3+UI4PGsCRlSO0AZ/B4A4AUAbvgBx7YU8gFAfkDxt7C9wyVdrQBlMPi4PrWuUH6MUEyOXeDY3FMLQKXnrrqn5WxMUkea2G23X4d+XDnA9W0yTeDraVJXClAGQ9J0F6airPnvH1CE41XZYGUAZTAkTwppu/4yW+AURXhmTmZOsRKAMhhSraPa11/2FhijCD/YJ89PWRlgD68SgsoQKwHs4VWCN7u5EkRngDIYUn9H/V5/VbcAzWw4jR+cAPajzerEcp7gNDotDTDReS+uainC2j90ul/W9VYKoPKwfF4/v2ZTXxaJfdwp47EpCXBA8PTor6ZKtkbvkbcoJju2BbYGKIPBCAD/tH1wn66KBeQ5ionV1JsVQGb93j0AzcdNo9nEqopwo3BEMsq7KqZt7l67/tAIUE3GfuXR78ljFJPRMiPLYHAEgBQV0PGL+sPHLdOksAVALk3n045tKIMK7fjccYIAYG5KlwJkVFBjzcvC4lMTl3+YBoDDTwwCkO5RhNl1EFaVSwZDCtDtep8YoQj3igpUCJCPt8Xc7xUVnk8thEIvzTKAX3nEbdr3fYvNaBzmyKAvhDsU4Vbeh5gLkE/tA0ARGgdiy0elQ2nV3raeKF9WFAHk0PfFJq0CMJFIr7+1zsYuA7l94QJAtdCEAHK59lwXmfhQ1jyAbGpf8oXZeSzyvkZOXUWSf3mNYhLoZUkBTGYbgAYvnC7nyVCmk9Jb+mxFBiAXN1Pq+7pEEToFVMlgIACQFpQyutKyKQuQ43TRDYrQaWGoDIa0QPM9I3rUjKamm54B8nGbLai5BxSTty4QZMBFQmRLN9e+GkAuTutFVC5SgpmEyBR67uTWAXJsPmcFKy0lGEoIDeK8GY0B8v4a3aQEPwmRbXl+vKW5QgWQfaRZaSnBVEJoFBP9qwDy7f9UiUpLCZ4SQq+FST84A8i5/6NSlZYSPCVECmAsJxRArsPpWYFkaSnBV0LMIdLoG/nqv3SnXkZK8B+0zcr+tIO8h9MpiNZSwqsy8x+NzSDaz0rwlxDPH+4ZehRxbS0l/Plo5Tk1oQwdurmeT2spwV9CPJf/xieA1lLCo4/WJ4D2UsIHCaHqIAEcfOOx7sE8YWQjJfyRELE97qgJZRJWZwYIAEYp4ZGEiA3iGUCzlPBIQvgIMN7HeuluD/5IiKRF8qwGglFKeCQhngFyWKFj1QHazEp4JCHIJvc+6UCKLTDOSng2aPNJB6o+wbDYpQdo25i1lM6kBT0EyD6cIvupFGpB3zRgvIbet2E1QPFqVt80YHz8j39fZbGU8E1CxJ4nX0Iq0u1oEjOZCgHitZjTdgSx5UlQU7a8UqCY7KcBDugYhNTaOlsrdTVdHNREmZPBgM41+KWrGXXM1xjghzpw4zXtzOS0BM3x3Q3cJr+gmGz7EtjbgMG69opUYC/70PquWbeB/KRC61nt1tCAcTi8Qlvc4nE/yIGEQx6T/i+eTprd7VF4oYNBuN2Su8CTzbZT3KxdQ35zllj3zWgNdq7lkfPmM9WEKoBMdrOtxTJMHrp0mxGWG/3kGF6eA0zH6T2zX9J+2QdMKC3LZvFGP0kt5BxqL78DTHeLtl5Wm59HAPiGJ0jDVlsKIG2aw2mzO42Fee9Q5s77hbnOou0mGS54MW8QPpdMQzpBk1tzmrv2g/2Gr/PqZ659c4AcJVOJDV9VU8oq3NAUC5Pt85jFxhRu7O7BpucJGs8Blt/0nN+I1NsmdOm6R08O/ogroTGsnucgpsLBH8o7w+jUMnMt5CUjzCNr45b96vCrOx7ilw6Mmu4ZhPwnHgtaySnxuFn58KukFrKbsR8DPJ1nXGl09iGjuBjzWscFZ/Yy91I/X9ik883cdM5yY2xC9Wx7Gr3WJBmLd6Wni0w3lARIsxWSQhCZOoNN5mj7d+r3cLu2Q5CZ9odtUynxfrt+T39gqRqo6SgaDFyUyFmf1GyBQm/LsludACovDW0mcGLOV5/CwgLGzRmKnuEMUEHkOC1jYc9Gk1h7kPJyVQlgD7Ey6ErwSunA5RqR5QRpZetXfEBleCsD2PeJpVE693nZN1VuQvUHeriEuTQZixucRpu1DGLyHpr4TXHci/2sdUiky0M6rMMCsnWSldZATSeSx4bO5vNt0ai1YdMJ5RdaHVzGw2L7oloAzkF6t4WJrV21dPaOaYeHz1cnudxsc8/6Nqn1NJm1DmKKgKpJ4VMApDm5NbgotP/x1DQZuwpD1NqELnTjQRyPOeJ37Km1qW8Ano6KIgKsn1IiYaMAtUEOOcPJl/quRF67nPSeyoMiJNdio1crADMgCSazg4ifGd0ATEerlgZlvoBWAWogaUEN1UgmIOU1AI5QhLSGpNWrEwA1kKQfaTelw+5pSNJyQA4KUYeec/0KOgVQL4Ray0fN6257MGNokb5Y1NXQdd3XWYBpmLSPzc8EkpraGoHOgMkI4N+oCRlQFSwLgHmFVBHWGwlQuUHBQFq6zZwRLo0UacWVuuLgLNrRMAJ4emhy6F8Vmn7//5Ogw9BJR+DjAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=chunk-74edc5d4.74e9a781.js.map