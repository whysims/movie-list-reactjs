(this["webpackJsonpmovie-list-react"]=this["webpackJsonpmovie-list-react"]||[]).push([[0],{15:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return r}));var n="https://api.themoviedb.org/3/",c="https://image.tmdb.org/t/p/original",r="e8637682cec2807cb24a87897b889da7"},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a(15),i=a(54),l=a.n(i),s=a(53),u=a.n(s);a(80);t.default=Object(r.h)((function(e){var t=e.vote_average,a=e.poster_path,n=e.popularity;return c.a.createElement("div",{className:"movie-card",style:{backgroundImage:"url(".concat(o.c).concat(a,")")}},c.a.createElement("span",{className:"movie-card--popularity"},c.a.createElement(u.a,null)," ",n),c.a.createElement("span",{className:"movie-card--avg"},c.a.createElement(l.a,null)," ",t),c.a.createElement("div",{className:"movie-card--overlay"}))}))},67:function(e,t,a){e.exports=a(84)},73:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),o=a.n(r),i=a(45),l=a(28),s=a(46),u=a(47),m=a(59),p=a(111),f=a(109),d=a(9),h=a.n(d),v=a(16),E=a(5),b=a(51),g=a.n(b),y=a(33),w=a(110),j=a(52),O=a.n(j),k=a(87),x=a(104),N=a(105),I=a(106),C=a(103),S=a(35),B=a(15),_=function(e){return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.awrap(fetch("".concat(B.b,"movie/").concat(e,"?api_key=").concat(B.a)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e})));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},T=function(e){return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.awrap(fetch("".concat(B.b,"search/movie?api_key=").concat(B.a,"&query=").concat(e)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e})));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},F=a(12),P=Object(F.a)(),R=(a(73),Object(C.a)((function(e){return{root:{flexGrow:1},search:Object(E.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(S.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(S.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},navToolBar:{display:"flex",justifyContent:"space-between"},inputInput:Object(E.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}))),U=function(){var e=Object(n.useState)(),t=Object(v.a)(e,2),a=t[0],r=t[1],o=R();return c.a.createElement(x.a,{className:"movie-information-nav"},c.a.createElement(N.a,null,c.a.createElement(I.a,{className:o.navToolBar},c.a.createElement(y.b,{to:"/"},c.a.createElement(g.a,null)," Movie Information"),c.a.createElement("div",{className:o.search},c.a.createElement("div",{className:o.searchIcon},c.a.createElement(O.a,null)),c.a.createElement(w.a,{placeholder:"Search\u2026",classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return function(e){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.length||r(null),!(e.length>=3)){a.next=6;break}return a.next=4,h.a.awrap(T(e));case 4:t=a.sent,r(t);case 6:case"end":return a.stop()}}))}(e.target.value)}}),a&&c.a.createElement(k.a,{className:"search-result"},c.a.createElement("ul",null,a.results.map((function(e){return c.a.createElement("li",{key:e.id,onClick:function(){return t=e.id,r(null),void P.push("/movie/".concat(t));var t}},e.title)})).sort((function(e,t){return e.popularity<t.popularity}))))))))},z=(a(44),function(){return c.a.createElement("div",null,c.a.createElement("img",{src:"https://media.giphy.com/media/BCPGshhOo1xqU/giphy.gif",alt:"Not found GIF"}))}),G=a(107),L=a(3),q=c.a.lazy((function(){return Promise.resolve().then(a.bind(null,44))})),D=Object(L.h)((function(){var e=Object(L.f)(),t=Object(n.useState)(),a=Object(v.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){r||function(){var e,t;h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(h.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.awrap(fetch("".concat(B.b,"movie/popular?api_key=").concat(B.a,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})));case 2:e=a.sent,t=e.results,o(t);case 5:case"end":return a.stop()}}))}()}),[r]),c.a.createElement(n.Fragment,null,c.a.createElement(N.a,{className:"movie-container"},c.a.createElement(G.a,{container:!0,spacing:4,justify:"center"},c.a.createElement(n.Suspense,{fallback:c.a.createElement(Z,null)},r&&r.map((function(t){return c.a.createElement(G.a,{item:!0,key:t.id,onClick:function(){return a=t.id,void e.push("/movie/".concat(a));var a}},c.a.createElement(q,t))}))))))})),J=a(108),W=a(58),M=a.n(W),V=a(57),$=a.n(V),A=a(56),H=a.n(A),K=a(55),Q=a.n(K),X=(a(81),Object(C.a)({backButton:{zIndex:30,position:"relative",display:"inline-flex",flexDirection:"row",alignItems:"center",fontSize:"28px",color:"white",cursor:"pointer"},backText:{marginLeft:10}})),Y=function(e){var t=X(),a=Object(L.f)(),r=Object(n.useState)(),o=Object(v.a)(r,2),i=o[0],l=o[1],s=e.match.params.id;return s&&!i&&function(){var e;h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.awrap(_(s));case 2:e=t.sent,l(e);case 4:case"end":return t.stop()}}))}(),c.a.createElement(n.Fragment,null,i&&c.a.createElement(J.a,{className:"movie-details",style:{backgroundImage:"url(".concat(B.c).concat(i.backdrop_path,")")}},c.a.createElement(N.a,null,c.a.createElement("div",{className:t.backButton,onClick:function(){return a.push("/")}},c.a.createElement(Q.a,null),c.a.createElement("span",{className:t.backText},"Back")),c.a.createElement(G.a,{container:!0},c.a.createElement(G.a,{item:!0,xs:6,className:"content"},c.a.createElement("h1",{className:"title"},i.title),c.a.createElement("p",{className:"overview"},i.overview),c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"infos"},c.a.createElement(H.a,{className:"icon"}),c.a.createElement("p",null,"Budget"),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(i.budget)),c.a.createElement("div",{className:"infos"},c.a.createElement($.a,{className:"icon"}),c.a.createElement("p",null,"Votes"),i.vote_count," ",i.vote_average),c.a.createElement("div",{className:"infos"},c.a.createElement(M.a,{className:"icon"}),c.a.createElement("p",null,"Popularity"),i.popularity))),c.a.createElement(G.a,{item:!0,xs:6,className:"poster"},c.a.createElement("img",{src:"".concat(B.c).concat(i.poster_path),alt:i.title}))))))},Z=(a(82),function(){return c.a.createElement("div",{className:"lds-grid"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))}),ee=[{path:"/",component:D,exact:!0},{path:"/movie/:id",component:Y,exact:!0},{path:"*",component:z}],te=Object(L.h)((function(e){var t=Object(n.useState)(e),a=Object(v.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){e&&(r(e),e.location!==c.location&&window.scrollTo(0,0))}),[e,c]),e.children})),ae=function(e){return c.a.createElement(L.a,{path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})},ne=function(){var e=Object(L.g)();return c.a.createElement(p.a,null,c.a.createElement(f.a,{key:e.key,classNames:"fade",timeout:500},c.a.createElement(L.c,{location:e},ee.map((function(e,t){return c.a.createElement(ae,Object.assign({key:e.path},e))})))))},ce=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(y.a,{basename:"/",history:P},c.a.createElement(te,null,c.a.createElement(U,null),c.a.createElement(ne,null)))}}]),t}(c.a.Component);a(83),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[67,1,2]]]);
//# sourceMappingURL=main.79a1ef62.chunk.js.map