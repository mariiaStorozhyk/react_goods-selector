(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var c=o(3),s=o.n(c),n=o(4),a=o(5),d=o(8),l=o(7),i=o(1),r=o.n(i),u=o(6),h=o.n(u),b=(o(13),o(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(){var e;Object(n.a)(this,o);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={goods:j,selectedGood:"Jam"},e}return Object(a.a)(o,[{key:"addGood",value:function(e){this.setState({selectedGood:e})}},{key:"removeGood",value:function(){this.setState({selectedGood:""})}},{key:"cleanGood",value:function(){this.setState({selectedGood:""})}},{key:"checkGood",value:function(e){return this.state.selectedGood===e}},{key:"render",value:function(){var e=this,t=this.state,o=t.goods,c=t.selectedGood;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{className:"goods__title",children:[c?"".concat(c," is selected"):"No goods selected",Object(b.jsx)("button",{type:"button",className:"goods__clear",onClick:function(){e.cleanGood()},children:"X"})]}),Object(b.jsx)("ul",{children:o.map((function(t){return Object(b.jsxs)("div",{className:"goods__list",children:[Object(b.jsx)("li",{className:h()("goods__item",{"goods__item--selected":e.checkGood(t)}),children:t}),e.checkGood(t)?Object(b.jsx)("button",{type:"button",className:"goods__button",onClick:function(){e.removeGood()},children:"Remove"}):Object(b.jsx)("button",{type:"button",className:"goods__button",onClick:function(){e.addGood(t)},children:"Add"})]})}))})]})}}]),o}(r.a.Component),g=m;s.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b2b2fa12.chunk.js.map