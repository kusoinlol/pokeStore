(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fe68e77"],{"1aae":function(t,i,a){"use strict";var s=a("6fc7"),e=a.n(s);e.a},"5f29":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"topSlide"},[s("navbar"),s("slide"),s("breadcrumb",{attrs:{categories:t.categories}}),s("div",{staticClass:"products_box"},[s("div",{staticClass:"categories"},[s("div",{staticClass:"items"},[s("div",{staticClass:"item",on:{click:function(i){t.categories="所有商品",t.getProducts()}}},[s("img",{attrs:{src:a("9837"),alt:""}}),s("p",{staticClass:"item_name"},[t._v("所有商品")])]),s("div",{staticClass:"item",on:{click:function(i){t.categories="精靈球",t.getProducts()}}},[s("img",{attrs:{src:a("bf32"),alt:""}}),s("p",{staticClass:"item_name"},[t._v("精靈球")])]),s("div",{staticClass:"item",on:{click:function(i){t.categories="藥品",t.getProducts()}}},[s("img",{attrs:{src:a("6caa"),alt:""}}),s("p",{staticClass:"item_name"},[t._v("藥品")])]),s("div",{staticClass:"item",on:{click:function(i){t.categories="道具",t.getProducts()}}},[s("img",{attrs:{src:a("bfdd"),alt:""}}),s("p",{staticClass:"item_name"},[t._v("道具")])]),s("div",{staticClass:"item",on:{click:function(i){t.categories="商城",t.getProducts()}}},[s("img",{attrs:{src:a("1211"),alt:""}}),s("p",{staticClass:"item_name"},[t._v("商城")])])])]),s("div",{staticClass:"products_list"},[s("div",{staticClass:"categories_titel"},[t._v(t._s(t.categories))]),s("div",{staticClass:"list"},t._l(t.filterData,function(i){return s("div",{key:i.id,staticClass:"item"},[s("div",{staticClass:"bgimg",style:{backgroundImage:"url("+i.imageUrl+")"}}),s("div",{staticClass:"card-body"},[s("span",{staticClass:"category"},[t._v(t._s(i.category))]),s("p",{staticClass:"title"},[t._v(t._s(i.title))]),s("p",{staticClass:"text"},[t._v(t._s(t._f("textlength")(i.description)))]),i.price==i.origin_price?s("div",{staticClass:"origin_price"},[t._v("原價 NT"+t._s(t._f("currency")(i.origin_price))+" 元")]):t._e(),i.price!==i.origin_price?s("div",{staticClass:"sale_price"},[t._v("\n              特價 NT"+t._s(t._f("currency")(i.price))+" 元\n            ")]):t._e()]),s("div",{staticClass:"cardaction"},[i.is_enabled?s("button",{attrs:{type:"button"}},[s("router-link",{attrs:{to:"/categories/"+i.id}},[t._v("查看更多")])],1):t._e(),i.is_enabled?s("button",{attrs:{type:"button"},on:{click:function(a){t.addtoCart(i.id,i.title)}}},[t._v("加到購物車")]):s("button",[t._v("已售完")])])])})),s("Pagination")],1)]),s("car"),s("bottom")],1)},e=[],c=a("c93e"),r=a("2f62"),o=a("9d8d"),n=a("b3a4"),l=a("5ae2"),u=a("d1d6"),d=a("21a8"),_=a("1799"),g={name:"categories",data:function(){return{categories:"所有商品"}},components:{breadcrumb:n["a"],bottom:d["a"],navbar:o["a"],slide:u["a"],car:l["a"],Pagination:_["a"]},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i="所有商品"==this.categories?"".concat("https://vue-course-api.hexschool.io","/api/").concat("icguanyu","/products?page=").concat(t):"".concat("https://vue-course-api.hexschool.io","/api/").concat("icguanyu","/products/all");this.$store.dispatch("getProducts",i)},getCart:function(){this.$store.dispatch("getCart")},addtoCart:function(t,i){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s={boolean:!0,title:"已將「".concat(i," x1 」 加入購物車")};this.$store.dispatch("addtoCart",{id:t,alertinfo:s,qty:a})},closealert:function(){var t={boolean:!1,title:""};this.$store.dispatch("closealert",t)}},computed:Object(c["a"])({filterData:function(){var t=this;return t.products.filter(function(i){return"所有商品"===t.categories?i:i.category===t.categories})}},Object(r["c"])(["products"])),created:function(){this.getProducts()}},p=g,v=(a("989c"),a("2877")),f=Object(v["a"])(p,s,e,!1,null,"2562fb42",null);f.options.__file="categories.vue";i["default"]=f.exports},"6fc7":function(t,i,a){},"989c":function(t,i,a){"use strict";var s=a("d586"),e=a.n(s);e.a},b3a4:function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("首頁　/　")])],1),t.categories?a("li",[t._v(t._s(t.categories)+"　/　")]):t._e(),t.productTitle?a("li",[t._v(t._s(t.productTitle))]):t._e()])},e=[],c={props:["categories","productTitle"],name:"breadcrumb"},r=c,o=(a("1aae"),a("2877")),n=Object(o["a"])(r,s,e,!1,null,"d034d3c8",null);n.options.__file="breadcrumb.vue";i["a"]=n.exports},d586:function(t,i,a){}}]);
//# sourceMappingURL=chunk-3fe68e77.81690a58.js.map