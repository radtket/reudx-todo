(this["webpackJsonpreudx-todo"]=this["webpackJsonpreudx-todo"]||[]).push([[0],{173:function(e,t,a){"use strict";a.r(t);var c=a(0),o=a.n(c),n=a(27),s=a.n(n),d=a(48),r=a(70),i=a(180),j=a(177),l=a(179),b=a(120);const O="ADD_TODO",m="TOGGLE_TODO",h="DELETE_TODO";var u=a(22);var p=()=>{const e=Object(d.d)(),[t,a]=Object(c.useState)("");return Object(u.jsxs)(j.a,{initialValues:{remember:!0},name:"basic",onFinish:c=>{""===t.trim()||(e((e=>({type:O,payload:e}))({id:Object(i.a)(),name:c.todo,complete:!1})),a(""))},onFinishFailed:e=>{console.log("Failed:",e)},children:[Object(u.jsx)(j.a.Item,{label:"Todo",name:"todo",rules:[{message:"Add a todo"}],children:Object(u.jsx)(l.a,{onChange:e=>{let{target:t}=e;a(t.value)},value:t})}),Object(u.jsx)(j.a.Item,{children:Object(u.jsx)(b.a,{htmlType:"submit",type:"primary",children:"Submit"})})]})},x=a(176),y=a(60),g=a(181),v=a(178),T=a(183);var D=()=>{const{todos:e}=Object(d.e)((e=>e.todos)),t=Object(d.d)();return Object(u.jsx)(x.b,{dataSource:e,renderItem:e=>{let{id:a,complete:c,name:o}=e;return Object(u.jsx)(x.b.Item,{actions:[Object(u.jsx)(y.a,{title:"delete",children:Object(u.jsx)(b.a,{icon:Object(u.jsx)(T.a,{}),onClick:()=>{t({type:h,payload:a})},shape:"circle",type:"danger"})})],children:Object(u.jsx)(x.b.Item.Meta,{avatar:Object(u.jsx)(g.a,{checked:c,onChange:()=>{t({type:m,payload:a})}}),title:Object(u.jsx)(v.a.Text,{delete:c,children:o})})})}})};var F=()=>Object(u.jsxs)("div",{style:{maxWidth:650,margin:"200px auto"},children:[Object(u.jsx)(p,{}),Object(u.jsx)(D,{})]}),I=a(68),C=a(114),f=a.n(C),E=a(116),S=a(106),k=a(117);const L={todos:[{id:Object(i.a)(),name:"Read a bit",complete:!0},{id:Object(i.a)(),name:"Do laundry",complete:!1}]};var w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,{payload:t,type:a}=arguments.length>1?arguments[1]:void 0;switch(a){case O:return{...e,todos:[...e.todos,t]};case m:return{...e,todos:e.todos.map((e=>e.id===t?{...e,complete:!e.complete}:e))};case h:return{...e,todos:e.todos.filter((e=>e.id!==t))};default:return e}};var _=e=>Object(I.b)({router:Object(r.b)(e),todos:w});const A=Object(E.a)(),B=[f.a,k.a,Object(S.a)(A)];const G=Object(I.c)(Object(I.a)(...B));var J=Object(I.d)(_(A),{},G);var M=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,184)).then((t=>{let{getCLS:a,getFID:c,getFCP:o,getLCP:n,getTTFB:s}=t;a(e),c(e),o(e),n(e),s(e)}))};a(172);s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(d.a,{store:J,children:Object(u.jsx)(r.a,{history:A,children:Object(u.jsx)(F,{})})})}),document.getElementById("root")),M()}},[[173,1,2]]]);
//# sourceMappingURL=main.717aab9b.chunk.js.map