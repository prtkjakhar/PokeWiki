(this.webpackJsonppokewiki=this.webpackJsonppokewiki||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(11),a(2)),i=a.n(l),s=a(5),u=a(1);a(13),a(14);var m=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light"},r.a.createElement("span",{style:{color:"white"},className:"navbar-brand mb-3 h1"},"PokeWiki")))};var p=function(e){var t=e.statName;return r.a.createElement("div",null,r.a.createElement("p",null," ",t.toUpperCase()," = ",e.val))};var h=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{style:{marginTop:"-25px",marginBottom:"-15px",width:"150px"},src:e.pic,alt:"pokemon-img"}),r.a.createElement("p",null,"NAME = ",e.name.toUpperCase()),r.a.createElement("p",null,"HEIGHT = ",e.height),r.a.createElement("p",null,"WEIGHT = ",e.weight))};var b=function(){var e=Object(n.useState)("ditto"),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(u.a)(o,2),b=l[0],E=l[1],f=Object(n.useState)(0),v=Object(u.a)(f,2),k=v[0],w=v[1],d=Object(n.useState)(""),g=Object(u.a)(d,2),j=g[0],O=g[1],y=Object(n.useState)(""),x=Object(u.a)(y,2),N=x[0],S=x[1],W=Object(n.useState)(""),C=Object(u.a)(W,2),I=C[0],P=C[1];Object(n.useEffect)((function(){A()}),[]);var A=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(a));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),E(n.stats),w(n.height),O(n.name),S(n.weight),P(n.sprites.front_default);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement("p",null,"Write name of pokemon and find out information about them"),r.a.createElement("p",null,"(Enter name without capital letters)"),r.a.createElement("input",{onChange:function(e){return c(e.target.value)},className:"mb-3 pl-2 pr-2",placeholder:"ditto"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return A()},className:"btn btn-info btn-lg mb-2"},"GO!"),r.a.createElement("hr",null),r.a.createElement(h,{height:k,name:j,weight:N,pic:I}),b.map((function(e,t){return r.a.createElement(p,{val:e.base_stat,statName:e.stat.name,key:t})})),r.a.createElement("hr",null),r.a.createElement("p",{style:{fontSize:"13px",color:"white"}},"Made by ",r.a.createElement("a",{style:{color:"white"},href:"https://www.linkedin.com/in/prateek-jakhar-a64a04197/"},"Prateek Jakhar")," using Poke API"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.dde52ebd.chunk.js.map