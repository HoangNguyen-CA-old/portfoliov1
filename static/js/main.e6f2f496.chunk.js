(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{47:function(e,a,t){e.exports=t(72)},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},64:function(e,a,t){e.exports=t.p+"static/media/project1.327ca61a.png"},65:function(e,a,t){e.exports=t.p+"static/media/shop.15d04be3.png"},66:function(e,a,t){e.exports=t.p+"static/media/name-analyzer1.14eec2e6.png"},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(11),r=t.n(l),o=(t(52),t(53),t(15)),s=(t(54),t(6)),m=s.a.div({open:{delayChildren:100,staggerChildren:300},closed:{delay:300},after:{}}),i=s.a.h1({open:{y:0,opacity:1,transition:{ease:"easeInOut"}},closed:{y:"-100%",opacity:0}}),p=s.a.h2({open:{y:0,opacity:1,transition:{ease:"easeInOut"}},closed:{y:"-100%",opacity:0}});s.a.p({open:{y:0,opacity:1},closed:{y:"-100%",opacity:0}});function d(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1],r=function(){return l((function(e){return!e}))};return Object(n.useEffect)((function(){setTimeout(r,700)}),[]),c.a.createElement("div",{className:"cover"},c.a.createElement(m,{className:"",pose:t?"open":"closed"},c.a.createElement(i,{className:"text-light display-2"},"Hoang Nguyen"),c.a.createElement(p,{className:"text-light"},"Full-Stack Developer")))}t(55);var u=t(80),E=t(42),h=t(79);function g(){return c.a.createElement("div",null,c.a.createElement(u.a,{expand:"sm",className:"bg-dark",variant:"dark"},c.a.createElement(E.a,{className:"lead"},"Hoang Nguyen"),c.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),c.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},c.a.createElement(h.a,{className:"ml-auto"},c.a.createElement(h.a.Link,{className:"px-4",href:"#about_link"},"About"),c.a.createElement(h.a.Link,{className:"px-4",href:"#project_link"},"Projects"),c.a.createElement(h.a.Link,{className:"px-4",href:"#technology_link"},"Technologies"),c.a.createElement(h.a.Link,{className:"px-4",href:"#contact_link"},"Contact")))))}t(59);var x=t(74),b=t(22),y=Object(s.a)(x.a)({open:{delayChildren:0,staggerChildren:300},closed:{delay:0}}),f=s.a.h3({open:{x:0,opacity:1,applyAtStart:{opacity:0},transition:{}},closed:{x:"-10%",opacity:0}}),N=s.a.p({open:{x:0,opacity:1,applyAtStart:{opacity:0},transition:{}},closed:{x:"-10%",opacity:0}});function v(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1];return c.a.createElement("div",{className:"about_section bg-secondary",id:"about_link"},c.a.createElement(y,{pose:t?"open":"closed",fluid:!0,className:"text-center about_container"},c.a.createElement(f,{className:"text-warning about_header"},"About Me"),c.a.createElement(b.a,{onEnter:function(){l(!0)},onExit:function(){l(!1)}}),c.a.createElement(N,{className:"about_desc"},"I'm a web developer based in Toronto, Canada.")))}t(60);var k=t(77);function _(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a.Header,{closeButton:!0},c.a.createElement(k.a.Title,null,c.a.createElement("h3",null,"Name Analyzer App"))),c.a.createElement(k.a.Body,{className:""},c.a.createElement("h5",{className:"mt-3"},"FontEnd"),c.a.createElement(x.a,null,c.a.createElement("h6",{className:"text-success"},"React"),c.a.createElement("p",null,"Used purely functional components with hooks to keep track of local state, communicate with global state, and more."),c.a.createElement("h6",{className:"text-success"},"Context Api"),c.a.createElement("p",null,"Used to keep track of global state. State stores the data received from the api (age, gender, and nationality)."),c.a.createElement("h6",{className:"text-success"},"Bootstrap and custom SCSS"),c.a.createElement("p",null,"Used react-bootstrap and scss for basic styling."),c.a.createElement("h6",{className:"text-success"},"Axios"),c.a.createElement("p",null,"Used to make GET requests to an external api to get data about age, gender, and nationality based on their first name."))))}var S=t(21),C=t(8);function j(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a.Header,{closeButton:!0},c.a.createElement(k.a.Title,null,c.a.createElement("h3",null,"Shopping List App"))),c.a.createElement(k.a.Body,{className:""},c.a.createElement("h5",{className:"mt-3"},"BackEnd"),c.a.createElement(x.a,null,c.a.createElement("h6",{className:"text-success"},"Express and NodeJS"),c.a.createElement("p",null,"Used to create a REST API for the frontend to communicate with. Used mongoose to communicate with a cloud database(MongoDB Atlas) to fetch, create, and delete data."),c.a.createElement("h6",{className:"text-success"},"MongoDB"),c.a.createElement("p",null,"Used to store items in the shopping list, along with user information like name, email, and password (hashed using bcrypt).")),c.a.createElement("h5",{className:"mt-3"},"FontEnd"),c.a.createElement(x.a,null,c.a.createElement("h6",{className:"text-success"},"React"),c.a.createElement("p",null,"Used purely functional components with hooks to keep track of local state, communicate with global state, replicate lifecyle methods, and more."),c.a.createElement("h6",{className:"text-success"},"Redux"),c.a.createElement("p",null,"Used to keep track of global state. State stores the shopping list items, stores JWT tokens for user authentication, and more."),c.a.createElement("h6",{className:"text-success"},"Bootstrap"),c.a.createElement("p",null,"Used react-bootstrap for basic styling."),c.a.createElement("h6",{className:"text-success"},"Axios"),c.a.createElement("p",null,"Used to make GET, POST, and DELETE requests to the backend server and to update the global state according to the response."))))}var w=t(76),A=t(46),O=t(81),T=t(75),L=Object(s.a)(O.a)({hoverable:!0,pressable:!0,init:{scale:1,boxShadow:"0px 0px 0px rgba(0,0,0,0)"},hover:{scale:1.1,boxShadow:"0px 5px 10px rgba(0,0,0,0.2)"},press:{scale:1}});function B(e){var a=e.title,l=void 0===a?"":a,r=e.desc,s=void 0===r?"":r,m=e.image,i=void 0===m?t(64):m,p=e.modalContent,d=void 0===p?c.a.createElement(c.a.Fragment,null):p,u=e.codeLink,E=void 0===u?"":u,h=e.demoLink,g=void 0===h?"":h,x=Object(n.useState)(!1),b=Object(o.a)(x,2),y=b[0],f=b[1],N=function(){f(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(L,{onPressEnd:function(){f(!0)},border:"primary",className:"text-dark bg-light m-2 project_card"},c.a.createElement(O.a.Body,{className:"text-center p-2"},c.a.createElement(O.a.Img,{src:i,alt:"Picture",style:{height:"60%"},className:"border border-primary p-1 project_img bg-dark"}),c.a.createElement("div",{style:{height:"40%"},className:"vertical_center"},c.a.createElement(O.a.Title,{className:"text-success project_title"},l),c.a.createElement(O.a.Subtitle,{className:"project_desc"},s)))),c.a.createElement(k.a,{show:y,onHide:N,centered:!0},d,c.a.createElement(k.a.Footer,null,c.a.createElement(T.a,{size:"md",target:"_blank",href:E},"Code"),c.a.createElement(T.a,{size:"md",href:g,target:"_blank",className:"mr-auto ml-2"},"Demo"),c.a.createElement(T.a,{size:"md",onClick:N},"Close"))))}var F=Object(s.a)(x.a)({open:{delayChildren:0,staggerChildren:300},closed:{delay:0}}),U=s.a.h4({open:{x:0,opacity:1,applyAtStart:{opacity:0}},closed:{x:"-5%",opacity:0}}),H=s.a.p({open:{x:0,opacity:1,applyAtStart:{opacity:0}},closed:{x:"-5%",opacity:0}});function I(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),l=a[0],r=a[1];return c.a.createElement(x.a,{fluid:!0,className:"bg-dark projects_container",id:"project_link"},c.a.createElement(w.a,null,c.a.createElement(A.a,{xs:12,className:"text-center pt-5 pb-4"},c.a.createElement(F,{pose:l?"open":"closed"},c.a.createElement(U,{className:"text-success projects_header"},"Projects"),c.a.createElement(b.a,{onEnter:function(){r(!0)},onExit:function(){r(!1)}}),c.a.createElement(H,{className:"lead"},"Here are a few projects that I have worked on in the past"))),c.a.createElement(A.a,{xs:6,md:4},c.a.createElement(B,{title:"Shopping List App",desc:"full-stack CRUD app that requires user authentication to modify a shopping list ",image:t(65),modalContent:c.a.createElement(j,null),codeLink:"https://github.com/HoangNguyen-CA/shopping_list/",demoLink:"https://fierce-bayou-18494.herokuapp.com/"})),c.a.createElement(A.a,{xs:6,md:4},c.a.createElement(B,{title:"Name Analyzer App",desc:"Simple app that fetches data about a person's name from and external api",image:t(66),modalContent:c.a.createElement(_,null),codeLink:"https://github.com/HoangNguyen-CA/name-analyzer",demoLink:"https://hoangnguyen-ca.github.io/name-analyzer/"})),c.a.createElement(A.a,{xs:6,md:4})))}t(67);function D(){return c.a.createElement(x.a,{fluid:!0,className:"footer_container bg-dark"},"Copyright \xa9 Hoang Nguyen 2019")}t(68),t(69);function z(e){var a=e.icon,t=void 0===a?C.j:a,n=e.text,l=void 0===n?"Tech":n,r=e.color,o=void 0===r?"#FF0000":r,m=Object(s.a)(O.a)({init:{scale:1,boxShadow:"0px 0px 0px rgba(0,0,0,0)",color:o,"border-color":o}});return c.a.createElement(m,{className:"py-4 my-4"},c.a.createElement(O.a.Text,null,c.a.createElement(S.a,{icon:t,className:"icon"})),c.a.createElement(O.a.Title,null,l))}var q=Object(s.a)(x.a)({open:{delayChildren:0,staggerChildren:300},closed:{delay:0}}),M=s.a.h5({open:{x:0,opacity:1,applyAtStart:{opacity:0}},closed:{x:"-10%",opacity:0}}),P=s.a.p({open:{x:0,opacity:1,applyAtStart:{opacity:0}},closed:{x:"-10%",opacity:0}});function G(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1];return c.a.createElement("div",{className:"bg-secondary pb-5",id:"technology_link"},c.a.createElement(x.a,{fluid:!0},c.a.createElement(w.a,{className:"text-center"},c.a.createElement(A.a,{xs:12,className:"text-center align-content-center pt-5 pb-1"},c.a.createElement(q,{pose:t?"open":"closed"},c.a.createElement(M,{className:"text-danger technologies_header"},"Technologies"),c.a.createElement(b.a,{onEnter:function(){l(!0)},onExit:function(){l(!1)}}),c.a.createElement(P,{className:"lead text-primary-text"},"Technologies I am familiar with"))),c.a.createElement(A.a,{xs:6,sm:4,lg:3},c.a.createElement(z,{icon:C.j,text:"React",color:"#61DBFB"})),c.a.createElement(A.a,{xs:6,sm:4,lg:3},c.a.createElement(z,{icon:C.e,text:"HTML5",color:"#E44D26"})),c.a.createElement(A.a,{xs:6,sm:4,lg:3},c.a.createElement(z,{icon:C.b,text:"CSS3",color:"#2965f1"})),c.a.createElement(A.a,{xs:6,sm:4,lg:3},c.a.createElement(z,{icon:C.k,text:"SASS",color:"#CD6799"})),c.a.createElement(A.a,{xs:6,sm:4,lg:3},c.a.createElement(z,{icon:C.a,text:"Bootstrap",color:"#602C50"})),c.a.createElement(A.a,{xs:6,sm:4,lg:3},c.a.createElement(z,{icon:C.f,text:"Javascript",color:"#F0DB4F"})),c.a.createElement(A.a,{xs:6,sm:4,lg:3},c.a.createElement(z,{icon:C.h,text:"NodeJS",color:"#3C873A"})),c.a.createElement(A.a,{xs:6,sm:4,lg:3},c.a.createElement(z,{icon:C.i,text:"npm",color:"#CC3534"})),c.a.createElement(A.a,{xs:6,sm:4,lg:3},c.a.createElement(z,{icon:C.c,text:"Git",color:"#F1502F"})))))}t(70),t(71);var J=t(78),R=Object(s.a)(T.a)({hoverable:!0,init:{},hover:{}}),W=s.a.div({hoverable:!0,init:{color:"gray"},hover:{color:"red"}});function K(){return c.a.createElement(J.a,{action:"https://formspree.io/xaynqlap",method:"POST"},c.a.createElement(J.a.Group,{controlId:"formEmail"},c.a.createElement(J.a.Label,null,"Email address"),c.a.createElement(J.a.Control,{type:"email",placeholder:"Enter email",name:"email",required:!0})),c.a.createElement(J.a.Group,{controlId:"formName"},c.a.createElement(J.a.Label,null,"Name"),c.a.createElement(J.a.Control,{placeholder:"Enter Name",name:"name",required:!0})),c.a.createElement(J.a.Group,{controlId:""},c.a.createElement(J.a.Label,null,"Message"),c.a.createElement(J.a.Control,{as:"textarea",rows:"5",placeholder:"Enter Message",required:!0,name:"message"})),c.a.createElement("div",{className:"submit_container"},c.a.createElement(R,{variant:"primary",type:"submit",className:"submit_button"},"Send Message"),c.a.createElement("div",{className:"icon_container"},c.a.createElement("a",{href:"https://github.com/HoangNguyen-CA",target:"_blank"},c.a.createElement(W,{className:"icon_div"},c.a.createElement(S.a,{icon:C.d,className:"contact_icon github_icon"}))),c.a.createElement("a",{href:"https://www.linkedin.com/in/hoang-nguyen-a36636196/",target:"_blank"},c.a.createElement(W,{className:"icon_div"},c.a.createElement(S.a,{icon:C.g,className:"contact_icon linkedin_icon ml-3"}))))))}function Q(){return c.a.createElement(x.a,{fluid:!0,className:"bg-primary-light text-blue contact_wrapper",id:"contact_link"},c.a.createElement("h6",{className:"contact_header text-dark text-center pt-3"},"Contact"),c.a.createElement(x.a,{className:"pb-5 pt-4"},c.a.createElement(w.a,null,c.a.createElement(A.a,{xs:0,md:2}),c.a.createElement(A.a,{xs:12,md:8},c.a.createElement(K,null)),c.a.createElement(A.a,{xs:0,md:2}))))}r.a.render(c.a.createElement((function(){return c.a.createElement("div",{className:"page_wrapper"},c.a.createElement(d,null),c.a.createElement(g,null),c.a.createElement(v,null),c.a.createElement(I,null),c.a.createElement(G,null),c.a.createElement("hr",{className:"m-0 p-0 bg-danger"}),c.a.createElement(Q,null),c.a.createElement(D,null))}),null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e6f2f496.chunk.js.map