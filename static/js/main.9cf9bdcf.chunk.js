(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),s=a(1),l=a(4),d=a(5),i=a(7),u=a(6),m=(a(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={goods:["Jam"]},e.createdTitle=function(){var t=Object(s.a)(e.state.goods);if(t.length<=1)return["No goods selected","".concat(t[0]," is selected")][+t.length];var a=t.pop();return"".concat(t.join(", ")," and ").concat(a," are selected")},e.addGood=function(t){e.setState((function(e){return{goods:[].concat(Object(s.a)(e.goods),[t])}}))},e.removeGood=function(t){e.setState((function(e){return{goods:e.goods.filter((function(e){return e!==t}))}}))},e.removeAllGoods=function(){e.setState((function(e){return{goods:[]}}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state.goods;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",{className:"header__title"},this.createdTitle()),o.a.createElement("div",{className:"info-block"},o.a.createElement("button",{type:"button",className:t.length?"delete-all":"",onClick:function(){return e.removeAllGoods}}),o.a.createElement("span",{className:"counter"},"Goods added:",t.length))),o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"goods-list"},m.map((function(a){var n=t.includes(a);return o.a.createElement("div",{className:"card-wrapper",key:a},o.a.createElement("li",{className:"card ".concat(t.includes(a)&&"card--added")},o.a.createElement("span",{className:"good"},a),o.a.createElement("button",{type:"button",className:"button ".concat(n&&"button--added"),onClick:function(){[e.addGood,e.removeGood][+n](a)}},["Add","Remove"][+n])))})))))}}]),a}(o.a.Component);r.a.render(o.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9cf9bdcf.chunk.js.map