(this.webpackJsonpsneakers=this.webpackJsonpsneakers||[]).push([[0],{19:function(e,t,c){e.exports={molecule:"Molecule_molecule__gvt7x",choose:"Molecule_choose__LxtnM",click:"Molecule_click__3DIMU"}},40:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),i=c(10),n=function(e){var t=e.map((function(e){return e.discount_price})).reduce((function(e,t){return e+ +t}),0);return Math.round(100*t)/100},a=Object(i.b)({name:"cart",initialState:{cartItems:[],price:0,error:"",isLoading:!1,isOrdered:!1},reducers:{addToCart:function(e,t){e.cartItems.filter((function(e){return e.id!==t.payload.id})).length===e.cartItems.length?e.cartItems.push(t.payload):e.cartItems=e.cartItems.filter((function(e){return e.id!==t.payload.id})),e.price=n(e.cartItems),e.isOrdered=!1},removeCartItem:function(e,t){e.cartItems=e.cartItems.filter((function(e){return e.id!==t.payload})),e.price=n(e.cartItems)},cartItemsPostingSuccess:function(e){e.isLoading=!1},cartItemsPosting:function(e){e.isLoading=!0,e.error="",e.cartItems=[],e.price=0,e.isOrdered=!0},cartItemsPostingError:function(e,t){e.isLoading=!1,e.error=t.payload}}}),d=a.actions,l=d.addToCart,o=d.removeCartItem,j=(d.removeAllCartItems,a.reducer),u=Object(i.b)({name:"items",initialState:{salads:[],molecules:[],isLoading:!1,error:""},reducers:{itemsFetchingSuccess:function(e,t){e.isLoading=!1,e.error="",e.salads=t.payload.salads,e.molecules=t.payload.molecules},itemsFetching:function(e){e.isLoading=!0},itemsFetchingError:function(e,t){e.isLoading=!1,e.error=t.payload}}}),h=u.reducer,b=Object(i.a)({reducer:{cart:j,items:h}}),m=c(3),x=c(17),O=c.n(x),p=(c(40),c(5)),g=c(2),f=c(22),v=c(14),_=c.n(v),y=c(18),N=c.n(y),w=c(1),I=function(e){var t=e.close,c=Object(m.c)((function(e){return e.cart})),s=c.cartItems,r=c.price,i=c.error,n=c.isLoading,d=c.isOrdered,l=Object(m.b)();return Object(w.jsx)("div",{className:"sidebar-wrapper",onClick:function(e){return e.currentTarget===e.target&&t()},children:Object(w.jsxs)("div",{className:"sidebar",children:[Object(w.jsxs)("div",{className:"sidebar-title",children:[Object(w.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(w.jsx)("img",{onClick:t,className:"close-cart",src:"./img/close.svg",alt:"close"})]}),Object(w.jsx)("div",{className:"sidebar-top",children:Object(w.jsxs)("div",{className:"card-side-items",children:[s.map((function(e){return Object(w.jsx)("div",{className:"card-side-item",children:Object(w.jsxs)("div",{className:"card-side-item-inner",children:[Object(w.jsx)("img",{width:70,height:70,className:"sidebar-pic",src:"./img/salad.jpg",alt:"salad"}),Object(w.jsxs)("div",{className:"card-side-descr",children:[Object(w.jsx)("p",{children:e.title}),Object(w.jsxs)("b",{children:[e.discount_price," $"]})]}),Object(w.jsx)("img",{onClick:function(){return l(o(e.id))},className:"close-pic",src:"./img/close.svg",alt:"close"})]})},e.id)})),0===s.length&&!d&&!i&&!n&&Object(w.jsxs)("div",{style:{paddingTop:"80px"},className:"no-items",children:[Object(w.jsx)("img",{style:{cursor:"default"},width:70,height:70,src:"./img/empty-cart.png",alt:""}),Object(w.jsx)("h2",{children:"\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442 :("}),Object(w.jsx)("p",{children:"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0442\u043e\u0432\u0430\u0440 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]}),n&&Object(w.jsx)("div",{style:{paddingTop:"80px"},className:"no-items",children:Object(w.jsx)("h2",{style:{color:"#9dd558"},children:"'\u0438\u0434\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430...'"})}),0===s.length&&d&&!i&&!n&&Object(w.jsxs)("div",{style:{paddingTop:"80px"},className:"no-items",children:[Object(w.jsx)("img",{style:{cursor:"default"},width:67,height:97,src:"./img/complete.jpg",alt:"complete"}),Object(w.jsx)("h2",{style:{color:"#9dd558"},children:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443! :)"}),Object(w.jsx)("p",{children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d."})]}),0===s.length&&i&&Object(w.jsxs)("div",{style:{paddingTop:"80px"},className:"no-items",children:[Object(w.jsx)("h2",{style:{color:"#9dd558"},children:"\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"}),Object(w.jsx)("p",{children:i})]})]})}),Object(w.jsxs)("div",{className:"sidebar-bottom",children:[Object(w.jsxs)("div",{className:"sidebar-price",children:[Object(w.jsx)("b",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(w.jsx)("div",{}),Object(w.jsxs)("p",{children:[r," $"]})]}),Object(w.jsxs)("button",{className:"sidebar-submit",disabled:0===s.length,onClick:function(){return l(function(){var e=Object(f.a)(_.a.mark((function e(t,c){var s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=c().cart.cartItems,t(a.actions.cartItemsPosting()),e.next=5,N.a.post("http://test-job.webatom.ru/order",{order:s});case 5:if(!e.sent.data.success){e.next=10;break}t(a.actions.cartItemsPostingSuccess()),e.next=11;break;case 10:throw new Error("\u041d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t(a.actions.cartItemsPostingError(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,c){return e.apply(this,arguments)}}())},children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(w.jsxs)("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(w.jsx)("path",{d:"M1 7H14.7143",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(w.jsx)("path",{d:"M8.71436 1L14.7144 7L8.71436 13",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})]})})},k=c(11),C=function(e){var t=e.open,c=Object(m.c)((function(e){return e.cart})).price;return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("header",{children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"header-inner",children:[Object(w.jsx)(k.b,{to:"/",children:Object(w.jsxs)("div",{className:"headerLeft",children:[Object(w.jsx)("img",{width:80,"max-height":40,src:"./logo.png",alt:""}),Object(w.jsxs)("div",{className:"headerInfo",children:[Object(w.jsx)("h3",{children:"\u0421\u0430\u043b\u0430\u0442\u044b \u0438\u0437 \u043c\u0430\u043b\u0435\u043a\u0443\u043b"}),Object(w.jsx)("div",{className:"sub-title",children:"\u043c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u0441\u0430\u043b\u0430\u0442\u043e\u0432"})]})]})}),Object(w.jsx)("div",{className:"headerRight-inner",children:Object(w.jsxs)("ul",{className:"headerRight",children:[Object(w.jsxs)("li",{onClick:t,children:[Object(w.jsx)("img",{src:"./img/cart.svg",alt:"cart"}),Object(w.jsxs)("span",{children:[c,"$"]})]}),Object(w.jsx)("li",{style:{position:"relative"},children:Object(w.jsx)(k.b,{to:"/selfmade",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u0430\u043b\u0430\u0442"})})]})})]})})})})},L=c(13),S=c(8),M=c.n(S),T=function(e){var t=e.id,c=e.title,s=e.price,r=e.isCartAdded,i=e.molecules,n=e.composition,a=e.discount_price,d=Object(m.b)();return Object(w.jsx)("div",{className:M.a.card,children:Object(w.jsxs)("div",{className:M.a.cardInner,children:[Object(w.jsx)("img",{width:133,height:112,src:"./img/salad.jpg",alt:"salad",className:"yeezy-card-img"}),Object(w.jsx)("div",{className:"My Salad"!==c?M.a.title:null,children:c}),Object(w.jsxs)("p",{className:"My Salad"!==c?M.a.subtext:M.a.selfmade,children:["\u0441\u043e\u0441\u0442\u0430\u0432:"," ",n.map((function(e){return Object(w.jsx)("span",{children:i&&i.filter((function(t){return t._id===e})).map((function(e){return e.title+" "}))},e)}))]}),Object(w.jsxs)("div",{className:M.a.price,children:[Object(w.jsxs)("div",{className:M.a.priceInner,children:[Object(w.jsx)("p",{children:"\u0426\u0415\u041d\u0410:"}),Object(w.jsxs)("b",{children:[a," $"," ",Object(w.jsxs)("span",{className:M.a.oldprice,children:[s," $"]})," "]})]}),s?Object(w.jsx)("img",{onClick:function(){return d(l({id:t,title:c,discount_price:a,composition:n}))},src:r?"./img/added.svg":"./img/add.svg",alt:"add to cart"}):null]})]})})},A=c(32),F=function(){return Object(w.jsxs)(A.a,{speed:2,width:200,height:271,viewBox:"0 0 205 260",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(w.jsx)("rect",{x:"37",y:"30",rx:"0",ry:"0",width:"142",height:"83"}),Object(w.jsx)("rect",{x:"37",y:"144",rx:"0",ry:"0",width:"142",height:"13"}),Object(w.jsx)("rect",{x:"37",y:"159",rx:"0",ry:"0",width:"142",height:"15"}),Object(w.jsx)("rect",{x:"37",y:"200",rx:"0",ry:"0",width:"34",height:"11"}),Object(w.jsx)("rect",{x:"37",y:"215",rx:"0",ry:"0",width:"83",height:"14"}),Object(w.jsx)("rect",{x:"147",y:"200",rx:"0",ry:"0",width:"30",height:"29"})]})},E=function(){var e=Object(m.c)((function(e){return e.items})),t=e.salads,c=e.molecules,r=e.isLoading,i=e.error,n=Object(m.c)((function(e){return e.cart})).cartItems,a=Object(s.useState)(""),d=Object(p.a)(a,2),l=d[0],o=d[1];return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"content",children:Object(w.jsxs)("div",{className:"container",children:[Object(w.jsxs)("div",{className:"title",children:[Object(w.jsx)("h1",{children:l?"\u043f\u043e\u0438\u0441\u043a \u043f\u043e ".concat(l):"\u0432\u0441\u0435 \u0441\u0430\u043b\u0430\u0442\u044b"}),Object(w.jsx)("h2",{children:i||null}),Object(w.jsxs)("div",{className:"search",children:[Object(w.jsx)("img",{src:"./img/search.svg",alt:"search"}),Object(w.jsx)("input",{type:"text",onChange:function(e){o(e.target.value)},value:l,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(w.jsxs)("div",{className:"cards",children:[r&&Object(L.a)(Array(10)).map((function(e,t){return Object(w.jsx)("div",{className:"card",children:Object(w.jsx)(F,{})},t)})),t.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())})).map((function(e){return Object(w.jsx)(T,{discount_price:e.discount_price,composition:e.composition,molecules:c,id:e._id,title:e.title,price:e.price,isCartAdded:n.map((function(e){return e.id})).includes(e._id)},e._id)}))]})]})})})},P=c(19),$=c.n(P),B=function(e){var t=e.molecule,c=e.handleAddToMySalad,s=e.myComposition;return Object(w.jsxs)("li",{className:$.a.molecule,children:[Object(w.jsxs)("div",{className:$.a.choose,children:[Object(w.jsx)("div",{children:t.title}),Object(w.jsxs)("div",{children:["\u0446\u0435\u043d\u0430: ",t.discount_price," $"]})]}),Object(w.jsx)("img",{className:$.a.click,onClick:function(){return c({id:t._id,price:t.discount_price,oldPrice:t.price})},src:s.includes(t._id)?"./img/added.svg":"./img/add.svg",alt:"add to salad"})]})},J=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],i=Object(s.useState)(0),n=Object(p.a)(i,2),a=n[0],d=n[1],l=Object(m.c)((function(e){return e.items})),j=l.molecules,u=l.isLoading,h=l.error,b=Object(m.c)((function(e){return e.cart})).cartItems,x=Object(m.b)();Object(s.useEffect)((function(){x(o("My Salad"))}),[x]);var O=function(e){c.filter((function(t){return t!==e.id})).length===c.length?(r((function(t){return[].concat(Object(L.a)(t),[e.id])})),d(a+e.price)):(r(c.filter((function(t){return t!==e.id}))),d(a-e.price))};return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"content",children:Object(w.jsxs)("div",{className:"container",children:[Object(w.jsxs)("div",{className:"title",children:[Object(w.jsx)("h1",{children:"\u0421\u043e\u0431\u0435\u0440\u0438 \u0441\u0432\u043e\u0439 \u0441\u0430\u043b\u0430\u0442"}),Object(w.jsx)("h2",{children:h||null})]}),u&&Object(w.jsx)("div",{className:"cards",children:Object(L.a)(Array(1)).map((function(e,t){return Object(w.jsx)("div",{className:"card",children:Object(w.jsx)(F,{})},t)}))}),!u&&!h&&Object(w.jsxs)("div",{className:"cards",children:[Object(w.jsx)(T,{title:"My Salad",discount_price:a,composition:c,molecules:j,id:"My Salad",price:a,isCartAdded:b.map((function(e){return e.id})).includes("My Salad")}),Object(w.jsx)("div",{children:Object(w.jsx)("ul",{children:j.filter((function(e){return e.qty>0})).map((function(e){return Object(w.jsx)(B,{molecule:e,myComposition:c,handleAddToMySalad:O},e._id)}))})})]})]})})})};var R=function(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),c=t[0],r=t[1],i=Object(m.b)();Object(s.useEffect)((function(){i(function(){var e=Object(f.a)(_.a.mark((function e(t){var c,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(u.actions.itemsFetching()),e.next=4,N.a.get("http://test-job.webatom.ru/salads").then((function(e){return e.data.result}));case 4:return c=e.sent,e.next=7,N.a.get("http://test-job.webatom.ru/molecules").then((function(e){return e.data.result}));case 7:s=e.sent,t(u.actions.itemsFetchingSuccess({salads:c,molecules:s})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t(u.actions.itemsFetchingError(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[i]);var n=function(){r(!c)};return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)("div",{className:"main-container",children:[Object(w.jsx)(C,{open:n}),Object(w.jsxs)(g.c,{children:[Object(w.jsx)(g.a,{path:"/",element:Object(w.jsx)(E,{})}),Object(w.jsx)(g.a,{path:"/selfmade",element:Object(w.jsx)(J,{})})]}),c?Object(w.jsx)(I,{close:n}):null]})})};O.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(k.a,{children:Object(w.jsx)(m.a,{store:b,children:Object(w.jsx)(R,{})})})}),document.getElementById("root"))},8:function(e,t,c){e.exports={card:"Card_card__oFbTl",cardInner:"Card_cardInner__20xlJ",subtext:"Card_subtext__3RQLw",favoriteIcon:"Card_favoriteIcon__35_Af",price:"Card_price__2n4Ua",priceInner:"Card_priceInner__1J57q",title:"Card_title__YXiBX",oldprice:"Card_oldprice__2kTgk",selfmade:"Card_selfmade__mnUxw"}}},[[61,1,2]]]);
//# sourceMappingURL=main.724c2477.chunk.js.map