(this["webpackJsonpevent-form"]=this["webpackJsonpevent-form"]||[]).push([[0],{27:function(e,t,a){e.exports=a(60)},32:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(10),r=a.n(c),m=(a(32),a(33),a(9)),o=a(65),s=a(66),u=a(67),i=a(68),f=a(64),E=a(12),p=a.n(E),h="http://localhost:3001/",b=function(){return p.a.get(h).then((function(e){return e.data}))},g=function(e){return p.a.post(h,e).then((function(e){return e.data}))},d=a(75),N=a(61),v=a(62),O=a(63),j=function(e){var t=e.toggle,a=e.isOpen,n=e.className;return l.a.createElement(d.a,{isOpen:a,onClick:t,className:n},l.a.createElement(N.a,{onClick:t},"Congratulations!"),l.a.createElement(v.a,null,"The event form has submitted successfully!"),l.a.createElement(O.a,null,l.a.createElement(f.a,{onClick:t,color:"white",outline:!0,className:"custom-btn text-uppercase font-weight-bold"},"Close")))},y=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),E=Object(m.a)(r,2),p=E[0],h=E[1],d=Object(n.useState)(""),N=Object(m.a)(d,2),v=N[0],O=N[1],y=Object(n.useState)(""),w=Object(m.a)(y,2),x=w[0],C=w[1],S=Object(n.useState)(null),D=Object(m.a)(S,2),k=D[0],F=D[1],A=Object(n.useState)(!1),J=Object(m.a)(A,2),T=J[0],z=J[1];Object(n.useEffect)((function(){b().then((function(e){c(e)})).catch((function(e){return console.log("There was an error getting forms. ".concat(e))}))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{isOpen:!!T,toggle:function(){return z(!1)}}),l.a.createElement(o.a,{onSubmit:function(e){e.preventDefault();var t={firstName:p,lastName:v,email:x,eventDate:k};g(t),c(a.concat(t)),console.log(a),z(!T)},className:"px-1"},l.a.createElement(s.a,null,l.a.createElement(u.a,{for:"name"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase my-0"},"Name")),l.a.createElement("div",{className:"d-flex"},l.a.createElement(i.a,{className:"mr-2",type:"text",name:"firstName",id:"firstName",placeholder:"First name",onChange:function(e){h(e.target.value)}}),l.a.createElement(i.a,{type:"text",name:"lastName",id:"lastName",placeholder:"Last name",onChange:function(e){O(e.target.value)}}))),l.a.createElement(s.a,{className:"my-4"},l.a.createElement(u.a,{for:"email"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase my-0"},"Email")),l.a.createElement(i.a,{type:"email",name:"email",id:"email",placeholder:"Enter your email",onChange:function(e){C(e.target.value)}})),l.a.createElement(s.a,null,l.a.createElement(u.a,{for:"eventDate"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase my-0"},"Event Date")),l.a.createElement(i.a,{type:"date",name:"date",id:"eventDate",placeholder:"Event Date",onChange:function(e){F(e.target.value)}})),l.a.createElement(f.a,{size:"lg",type:"submit",color:"white",outline:!0,block:!0,className:"custom-btn font-weight-bold text-uppercase mt-4 mb-1"},"Submit")))},w=a(69),x=a(70),C=a(71),S=a(72),D=a(73),k=a(74);var F=function(){return l.a.createElement(w.a,{className:"App"},l.a.createElement(x.a,null,l.a.createElement(C.a,{className:"m-5"},l.a.createElement(S.a,{className:"CARD"},l.a.createElement(D.a,null,l.a.createElement(k.a,{className:"text-center mb-4"},l.a.createElement("h1",{className:"font-weight-bold"},"Event\xa0 Form"),l.a.createElement("hr",null)),l.a.createElement(y,null))))))};r.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.864968d2.chunk.js.map