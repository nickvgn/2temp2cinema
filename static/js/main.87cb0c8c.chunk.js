(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{119:function(e,t,n){},121:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(38),o=n.n(c),r=(n(119),n(65)),a=n(27),l=n.n(a),u=n(61),d=n(11),v=n(106),p=(n(121),n(115),n(40)),b=n.n(p),m=n(113),h=n.n(m),j=n(114),f=n(5),x=function e(t,n,i,s,c){Object(v.a)(this,e),this.title=void 0,this.rating=void 0,this.description=void 0,this.poster=void 0,this.releaseDate=void 0,this.title=t,this.rating=n,this.description=i,this.poster=s,this.releaseDate=c},O=function(e){var t=e.show?"modal display-block":"modal display-none";return Object(f.jsx)("div",{className:t,onClick:e.handleClose,children:Object(f.jsxs)("section",{className:"modal-main",onClick:function(e){return e.stopPropagation},children:[e.children,Object(f.jsx)("button",{type:"button",className:"fill",onClick:e.handleReset,children:"Reset"})]})})};var Z=function(){var e,t,n,s,c,o=Object(i.useState)(!1),a=Object(d.a)(o,2),v=a[0],p=a[1],m=Object(i.useState)(""),Z=Object(d.a)(m,2),y=Z[0],P=Z[1],L=Object(i.useState)([]),g=Object(d.a)(L,2),z=g[0],N=g[1],A=Object(i.useState)([]),T=Object(d.a)(A,2),H=T[0],W=T[1],S=Object(i.useState)([]),w=Object(d.a)(S,2),M=(w[0],w[1],Object(i.useState)(H.length)),C=Object(d.a)(M,2),F=C[0],G=C[1],J=Object(i.useState)(!1),k=Object(d.a)(J,2),E=k[0],Y=k[1];function V(){return(V=Object(u.a)(l.a.mark((function e(t,n){var i,s,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(H),i=new h.a(t),s="",c=Object(r.a)(H),console.log(H),0,o=c.findIndex((function(e){return e.movieName===n})),console.log(o),e.next=10,i.getPalette((function(e,t){var n,i;console.log("COLOR"+(null===t||void 0===t||null===(n=t.Vibrant)||void 0===n?void 0:n.getHex())),s=null===t||void 0===t||null===(i=t.Vibrant)||void 0===i?void 0:i.getHex()}));case 10:return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=38c1d80950e65630e084362d93a2f134&language=en-US&query=".concat(t,"&page=1&include_adult=true")).then((function(e){return e.json()})).then((function(e){if(e.results){var t=e.results.map((function(e){return new x(e.title,e.vote_average,e.overview,null!=e.poster_path?"https://www.themoviedb.org/t/p/w1280".concat(e.poster_path):null,e.release_date)}));N(t)}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){D(y)}),[]);var X=function(e){return e.length>18?"".concat(e.substring(0,18),"..."):e},R=null!==(e=z.find((function(e){var t;return e.title===(null===(t=H[F])||void 0===t?void 0:t.movieName)})))&&void 0!==e?e:null;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O,{show:v,handleReset:function(){p(!1),N([]),W([]),P("")},handleClose:function(){return p(!1)},children:Object(f.jsxs)(b.a,{columns:"150px 225px 70px",rows:"400px, 400px",children:[Object(f.jsx)("img",{className:"poster",src:null!==(t=null===R||void 0===R?void 0:R.poster)&&void 0!==t?t:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAQlBMVEXo6Ojp6enn5+fd3d2ZmZmVlZW0tLSSkpLOzs6bm5u4uLji4uLu7u7W1ta7u7ufn5/FxcWnp6esrKzLy8vAwMDT09PG4IofAAAEXklEQVR4nO2diW6rMBBFbRMIawhZ/v9Xnxc2E0hF6bs20j2tGhqs5mSEZzxOlIomOSONSOQZSbS3OB/0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyHUzvuPcNRbzRH2Ww0/F3zcGdZbDAJyuNFf05+Uw4nZ6eHpHnjcv4i3VHs/9LCSMny8Zd4VO2mzRKpD1/1x7/qVXnaTFo0Me53IxGinhsFpndlZc9vKsPGWNtyPTNNaoS5bp7XadmBn/HXAg3pn2uFZG+RDH97qDZS2Te9uYJZe0jy896VyeeWeXq6NXObpPqvLmz5rp6OS+TUWbzNDe+9e1n0NhUj03u4JxuM9i/eiQgrlxVucwHt0VrPrJCLvtLK126QW620y3MfyZIq3qJ+ReJeVMWt0quu9V6am8b5kZqBITGqJwFtXkU5jMrS7TryFoXDH1nsaGIf3yPz6HqelvXHeU6WPz9tfg8/nZWzeadFqVuOt/HiPAwN7Czsvb9KU76S9LPP3pG7nZZopM7CKZF7qPGjNXvP8LRby1tvl71jy4Gbd6VPLmE+uVVR1Z7E+WemKx/WJze4ReIuteH809nGuB20YR+9ZDhwPZ+uTOry3yydP+xH/lekbSrH++f8uibxkrY9V+L7BXSdFdivLsnOdmDlcwZ3NzOEjfP7u6+X+vlh7H3jYP4r3L4go3um3cHtnw3u7eD+aSvMs9GH7rta5G+3ODszb4N6uzidmI1PWJtPltd3VtHubst/UlPbYJJHGDbwHzyc/13mvv4yuzhvBjzovnLfw685Y5w887H+K96yPH59EhP38Zp1fjXc83um7trU88/erfOz6O7cD61sk87K9v/M8v836NOFHvfd2A9+3Io48qHUN6aK/9DOK6y/TYWAc3iMr3mraH4y3zi+9hbePHE+dH65vfXnnZe/tXh2c7yOLYR+ifeX9RIjBeyWf+Ll72D/p84mMJZ98qfPL/e+Y8ven90pLfwLv1ZfnT+A9NfHCzyeReev1t33/gDF71v0fnj+IXY+79bf5PYr1d6kdHsnQxvQdzVq/U/j9zjuw9/M69pS7+ssqbH8pRPeL9xWY15UDv/9EJt11M8ZbXLPp/TaBvJWU+cYW1SavpnY9XEhvtbEj+BUV2Puzr1msTb6dDukdCHpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Yzm19xlJRLP3v25GQfMPSUpFe5+/lOUAAAAASUVORK5CYII="}),Object(f.jsx)("div",{style:{flex:1},children:Object(f.jsxs)("div",{style:{marginLeft:10,flexDirection:"row",flexWrap:"wrap",alignContent:"space-between",overflow:"hidden"},children:[Object(f.jsxs)("h3",{style:{color:"#d25539",width:200,marginTop:5},children:[null!==(n=null===R||void 0===R?void 0:R.title.concat(" "))&&void 0!==n?n:" ",Object(f.jsxs)("sup",{style:{marginBottom:10},children:["/",null===R||void 0===R||null===(s=R.releaseDate)||void 0===s?void 0:s.substring(0,4)]})]}),Object(f.jsx)("p",{style:{color:"rgba(0,0,0,0.4)",fontSize:13,maxLines:4,width:"100%",textOverflow:"ellipsis"},children:null===R||void 0===R?void 0:R.description})]})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{style:{width:60,height:60,position:"fixed"},src:"https://static.vecteezy.com/system/resources/previews/001/191/836/non_2x/circle-png.png"}),Object(f.jsx)("p",{style:{marginRight:10,marginTop:17,fontSize:20,fontWeight:700,textAlign:"center"},children:null!==(c=null===R||void 0===R?void 0:R.rating)&&void 0!==c?c:0})]})]})}),Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("audio",{className:"audio-element",playsInline:!0,children:Object(f.jsx)("source",{src:"https://cdn.glitch.com/3966ae65-17a5-4621-b622-fd84bf98100e%2Fjesus_fuck_draft.mp3?v=1627627779324"})}),Object(f.jsxs)(b.a,{autoFlowColumn:!0,children:[Object(f.jsxs)("div",{className:"movieColumn",children:[Object(f.jsx)("input",{className:"search__input",type:"text",placeholder:"Search",value:y,onChange:function(e){D(e.target.value),P(e.target.value)}}),Object(f.jsx)(b.a,{columnGap:"10px",rowGap:"15px",columns:"150px 150px 150px",children:null===z||void 0===z?void 0:z.slice(0,6).map((function(e,t){var n;return Object(f.jsx)("div",{className:"movieList",onClick:function(){if(!1===E){var t=Object(r.a)(H);t.push({option:X(e.title),movieName:e.title}),W(t),function(e,t){V.apply(this,arguments)}(e.poster,e.title)}},children:Object(f.jsx)("img",{className:"poster",src:null!==(n=e.poster)&&void 0!==n?n:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAQlBMVEXo6Ojp6enn5+fd3d2ZmZmVlZW0tLSSkpLOzs6bm5u4uLji4uLu7u7W1ta7u7ufn5/FxcWnp6esrKzLy8vAwMDT09PG4IofAAAEXklEQVR4nO2diW6rMBBFbRMIawhZ/v9Xnxc2E0hF6bs20j2tGhqs5mSEZzxOlIomOSONSOQZSbS3OB/0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyz0xkJvLPTGQm8s9MZCbyHUzvuPcNRbzRH2Ww0/F3zcGdZbDAJyuNFf05+Uw4nZ6eHpHnjcv4i3VHs/9LCSMny8Zd4VO2mzRKpD1/1x7/qVXnaTFo0Me53IxGinhsFpndlZc9vKsPGWNtyPTNNaoS5bp7XadmBn/HXAg3pn2uFZG+RDH97qDZS2Te9uYJZe0jy896VyeeWeXq6NXObpPqvLmz5rp6OS+TUWbzNDe+9e1n0NhUj03u4JxuM9i/eiQgrlxVucwHt0VrPrJCLvtLK126QW620y3MfyZIq3qJ+ReJeVMWt0quu9V6am8b5kZqBITGqJwFtXkU5jMrS7TryFoXDH1nsaGIf3yPz6HqelvXHeU6WPz9tfg8/nZWzeadFqVuOt/HiPAwN7Czsvb9KU76S9LPP3pG7nZZopM7CKZF7qPGjNXvP8LRby1tvl71jy4Gbd6VPLmE+uVVR1Z7E+WemKx/WJze4ReIuteH809nGuB20YR+9ZDhwPZ+uTOry3yydP+xH/lekbSrH++f8uibxkrY9V+L7BXSdFdivLsnOdmDlcwZ3NzOEjfP7u6+X+vlh7H3jYP4r3L4go3um3cHtnw3u7eD+aSvMs9GH7rta5G+3ODszb4N6uzidmI1PWJtPltd3VtHubst/UlPbYJJHGDbwHzyc/13mvv4yuzhvBjzovnLfw685Y5w887H+K96yPH59EhP38Zp1fjXc83um7trU88/erfOz6O7cD61sk87K9v/M8v836NOFHvfd2A9+3Io48qHUN6aK/9DOK6y/TYWAc3iMr3mraH4y3zi+9hbePHE+dH65vfXnnZe/tXh2c7yOLYR+ifeX9RIjBeyWf+Ll72D/p84mMJZ98qfPL/e+Y8ven90pLfwLv1ZfnT+A9NfHCzyeReev1t33/gDF71v0fnj+IXY+79bf5PYr1d6kdHsnQxvQdzVq/U/j9zjuw9/M69pS7+ssqbH8pRPeL9xWY15UDv/9EJt11M8ZbXLPp/TaBvJWU+cYW1SavpnY9XEhvtbEj+BUV2Puzr1msTb6dDukdCHpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Y6E3FnpjoTcWemOhNxZ6Yzm19xlJRLP3v25GQfMPSUpFe5+/lOUAAAAASUVORK5CYII="})},t)}))})]}),H.length>0&&Object(f.jsxs)("div",{className:"wheelColumn",children:[Object(f.jsx)(j.Wheel,{mustStartSpinning:E,prizeNumber:F,data:H,backgroundColors:["#ebd9d9","#ffffff","#ebd9d9","#ffffff","#ebd9d9","#ffffff"],textColors:["#000"],fontSize:15,radiusLineWidth:1,radiusLineColor:"rgba(0, 0,0,0.1)",outerBorderWidth:1,outerBorderColor:"rgba(0, 0,0,0.1)",innerBorderWidth:1,onStopSpinning:function(){document.getElementsByClassName("audio-element")[0].play(),p(!0),Y(!1)},perpendicularText:!(H.length>3)}),Object(f.jsx)("button",{type:"button",className:"fill",onClick:function(){!function(){var e=Math.floor(Math.random()*H.length);G(e)}(),Y(!0)},children:"Spin"})]})]})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,292)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),s(e),c(e),o(e)}))};o.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(Z,{})}),document.getElementById("root")),y()}},[[288,1,2]]]);
//# sourceMappingURL=main.87cb0c8c.chunk.js.map