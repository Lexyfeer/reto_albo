(this.webpackJsonpreto_albo=this.webpackJsonpreto_albo||[]).push([[0],{40:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(10),s=a.n(r),i=a(4),o=a(11),l=a(12),d=a(15),j=a(13),u=(a(40),a(19)),b=a.n(u),O=a(28),h=a(29),p=a.n(h),m="GET_FILM_NEWS",x=a(5),f=a(31),v=a(1),g=Object(i.b)()((function(){var e=Object(i.d)((function(e){return e.allFilms.films})).map((function(e){var t=e.id,a=e.head,c=e.body,n=e.image,r=e.link;return Object(v.jsx)("div",{className:"cardContainer",children:Object(v.jsxs)(x.a,{className:"card",children:[Object(v.jsx)(x.a.Img,{variant:"top",src:n.url}),Object(v.jsxs)(x.a.Body,{children:[Object(v.jsx)(x.a.Title,{children:a}),Object(v.jsx)(x.a.Text,{className:"module lineClamp",children:c}),Object(v.jsx)(f.a,{variant:"primary",target:"_blank",href:r,children:"Ver detalle"})]})]})},t)}));return Object(v.jsx)("div",{className:"containerFilms col-md-12",children:e})})),y=function(){var e=Object(i.c)(),t=function(){var t=Object(O.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"GET",url:"https://imdb8.p.rapidapi.com/title/get-news",params:{tconst:"tt0944947",limit:"8"},headers:{"x-rapidapi-key":"b6f8c79392msh41d9675a150d6d1p164468jsnde54fe2c8788","x-rapidapi-host":"imdb8.p.rapidapi.com"}},t.next=3,p.a.request(a).then((function(t){var a;e((a=t.data.items,{type:m,payload:a}))})).catch((function(e){console.error(e)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){t()}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Mira Aqu\xed Algunas Noticias Sobre Lo M\xe1s Destacado De Los Espect\xe1culos"}),Object(v.jsx)(g,{})]})},N="ADD_POST",T=function(e,t){var a={id:(new Date).toUTCString(),title:e,message:t};return{type:N,payload:a}},_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleSubmit=function(t){t.preventDefault();var a=e.getTitle.value,c=e.getMessage.value;e.props.dispatch(T(a,c)),e.getTitle.value="",e.getMessage.value=""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"col-md-12",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"Create Post"}),Object(v.jsxs)("form",{className:"postForm",onSubmit:this.handleSubmit,children:[Object(v.jsx)("input",{required:!0,type:"text",placeholder:"Enter Post Title",ref:function(t){return e.getTitle=t}}),Object(v.jsx)("textarea",{required:!0,rows:"3",cols:"28",placeholder:"Enter Post",ref:function(t){return e.getMessage=t}}),Object(v.jsx)("button",{className:"btn btn-primary",children:"Post"})]})]})})}}]),a}(c.Component),E=Object(i.b)()(_),w=function(){var e=Object(i.d)((function(e){return e.allPosts.posts}));return Object(v.jsx)("div",{className:"containerPosts col-md-12",children:e.map((function(e,t){var a=e.id,c=e.title,n=e.message;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(x.a,{border:"info",className:"cardPost",children:[Object(v.jsxs)(x.a.Header,{className:"headerPost",children:["Fecha de Publicaci\xf3n: ",a]}),Object(v.jsxs)(x.a.Body,{children:[Object(v.jsx)(x.a.Title,{className:"cardTxt",children:c}),Object(v.jsx)(x.a.Text,{className:"cardTxt",children:n})]})]},t)})}))})},P=Object(i.b)()((function(){return Object(v.jsxs)("div",{className:"containerPosts col-md-12",children:[Object(v.jsx)("h1",{children:"Comentarios"}),Object(v.jsx)("p",{children:"Aqu\xed puedes agregar t\xfa opini\xf3n o comentario sobre alguna de las notas que estas leyendo."}),Object(v.jsx)(E,{}),Object(v.jsx)(w,{})]})})),S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"Reto ALBO"}),Object(v.jsx)(y,{}),Object(v.jsx)(P,{})]})}}]),a}(c.Component),D=a(14),k=a(9),A={films:[]},C=a(30),F={posts:[]},M=Object(D.a)({allFilms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(k.a)(Object(k.a)({},e),{},{films:t.payload});default:return e}},allPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(k.a)(Object(k.a)({},e),{},{posts:[].concat(Object(C.a)(e.posts),[t.payload])});default:return e}}}),q=Object(D.b)(M,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a(61);s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(i.a,{store:q,children:Object(v.jsx)(S,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.fa262015.chunk.js.map