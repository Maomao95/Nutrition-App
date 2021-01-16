(this.webpackJsonptypescr=this.webpackJsonptypescr||[]).push([[0],{129:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(0),i=n.n(a),s=n(17),c=n.n(s),o=(n(129),n(18)),d=new o.ApolloClient({uri:"https://shrouded-bayou-24550.herokuapp.com/graphql",cache:new o.InMemoryCache}),l=n(64),b=n(21),u=n(35);function j(){var e=Object(u.a)(["\n  query {\n    desserts {\n      id,\n      dessert,\n      reset,\n      visible,\n      nutritionInfo {\n        calories\n        fat\n        carb\n        protein\n      }\n    }\n  }\n"]);return j=function(){return e},e}var f=Object(o.gql)(j()),h=["calories","fat","carb","protein"];function O(){return Object(a.useContext)(x)}new RegExp("return (.*);");var x=i.a.createContext(null),g=function(e){var t=e.children,n=Object(o.useQuery)(f,{pollInterval:500}),i=n.loading,s=n.error,c=n.data,d=n.refetch,u=Object(a.useState)([]),j=Object(b.a)(u,2),O=j[0],g=j[1],m=Object(a.useState)([]),p=Object(b.a)(m,2),v=p[0],y=p[1],C=Object(a.useState)({index:0,order:0}),I=Object(b.a)(C,2),S=I[0],w=I[1],k=Object(a.useState)(),D=Object(b.a)(k,2),N=D[0],$=D[1],E=Object(a.useState)(window.innerWidth),q=Object(b.a)(E,2),F=q[0],R=q[1],A=function(){R(window.innerWidth)};return Object(a.useEffect)((function(){window.addEventListener("resize",A)}),[]),Object(a.useEffect)((function(){if(void 0!==c&&$(c),null!==S.index&&void 0!==c){var e=Object(l.a)(c.desserts);e.sort((function(e,t){return S.order?e.nutritionInfo[h[S.index-1]]-t.nutritionInfo[h[S.index-1]]:t.nutritionInfo[h[S.index-1]]-e.nutritionInfo[h[S.index-1]]})),$({desserts:e})}}),[S,c]),Object(r.jsx)(x.Provider,{value:{selected:O,setSelected:g,loading:i,error:s,data:N||c,refetch:d,resetState:v,setResetState:y,sort:S,setSort:w,windowWidth:F},children:t})},m=n(187),p=n(183),v=n(144),y=n(180),C=n(185),I=n(56),S=n(186),w={root:{flexGrow:1},paper:{display:"flex",flexDirection:"column",justifyContent:"center",height:"60px",textAlign:"center",borderRadius:0,boxShadow:"none"},tableHead:{display:"flex",flexDirection:"column",justifyContent:"center",height:"60px",textAlign:"center",borderRadius:0,boxShadow:"none",backgroundColor:"#ffb74d"},tableItem:{display:"flex",flexDirection:"column",justifyContent:"center",height:"60px",textAlign:"center",borderRadius:0,boxShadow:"none",backgroundColor:"#fff3e0"},heading2:{display:"flex",flexDirection:"column",justifyContent:"center",height:"60px",textAlign:"left",borderRadius:0,boxShadow:"none"},button:{height:"100%",backgroundColor:"#8bc34a",color:"#fff",borderRadius:0,"&:hover":{backgroundColor:"#aed581"}},heading:{color:"#00695c"},heading2_text:{margin:"auto"},addButton:{height:"100%",backgroundColor:"#29b6f6",color:"#fff",borderRadius:"0","&:hover":{backgroundColor:"#81d4fa"}},deleteButton:{height:"100%",backgroundColor:"#ef5350",color:"#fff",borderRadius:"0","&:hover":{backgroundColor:"#ef9a9a"}},arrowStyle:{color:"#000",opacity:"100%"},generalArrowStyle:{opacity:"30%"}},k=n(192),D=Object(y.a)((function(e){return w})),N=function(e){var t=e.item,n=D(),s=t.id,c=t.dessert,o=t.reset,d=(t.visible,t.nutritionInfo),u=[c,d.calories,d.fat,d.carb,d.protein],j=O(),f=j.selected,h=j.setSelected,x=j.resetState,g=j.setResetState,m=j.windowWidth,y=[[f,h],[x,g]],I=i.a.useState(!1),S=Object(b.a)(I,2),w=S[0],N=S[1];Object(a.useEffect)((function(){var e=0;o&&(e=1),0===y[e][0].length&&w&&N(!w),w&&y[e][0].length>0&&-1===y[e][0].indexOf(s)&&N(!w),!w&&y[e][0].length>0&&-1!==y[e][0].indexOf(s)&&N(!w)}),[f,x,s]);var $={marginLeft:m<800?"10px":"inherit",paddingLeft:m<800?"40px":"inherit",paddingRight:m<800?"80px":"inherit"},E=Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(p.a,{item:!0,sm:1,xs:1,onClick:function(){var e=0;if(o&&(e=1),w&&y[e][0].length>0&&-1!==y[e][0].indexOf(s)){var t=Object(l.a)(y[e][0]);t.splice(y[e][0].indexOf(s),1),y[e][1](t)}if(!w&&(0===y[e][0].length||-1===y[e][0].indexOf(s))){var n=Object(l.a)(y[e][0]);n.push(s),y[e][1](n)}N(!w)},children:Object(r.jsx)(C.a,{className:n.tableItem,children:Object(r.jsx)(k.a,{checked:w,inputProps:{"aria-label":"primary checkbox"},style:$})})}),u.map((function(e,t){return Object(r.jsx)(p.a,{item:!0,sm:0===t?3:2,xs:0===t?3:2,children:Object(r.jsx)(C.a,{className:n.tableItem,children:Object(r.jsxs)(v.a,{variant:"body1",children:[" ",e," "]})})},t)}))]});return Object(r.jsx)(a.Fragment,{children:E})},$=n(86),E=n.n($),q=n(114),F=n.n(q);function R(){var e=Object(u.a)(["\n  query {\n    desserts {\n      id,\n      dessert,\n      reset,\n      visible,\n      nutritionInfo {\n        calories\n        fat\n        carb\n        protein\n      }\n    }\n  }\n"]);return R=function(){return e},e}var A=Object(y.a)((function(){return w})),W=(Object(o.gql)(R()),function(){var e=A(),t=O(),n=t.loading,i=(t.error,t.data),s=(t.refetch,t.sort),c=t.setSort,o=t.windowWidth,d=n?Object(r.jsx)(S.a,{}):i.desserts.map((function(e,t){return e.visible?Object(r.jsx)(N,{item:e},t):Object(r.jsx)(a.Fragment,{children:" "},t)})),l=s.order?Object(r.jsx)(E.a,{className:e.arrowStyle}):Object(r.jsx)(F.a,{className:e.arrowStyle}),b=["Dessert(100g serving)","Calories","Fat","Carbs","Protein"].map((function(t,n){return Object(r.jsx)(p.a,{item:!0,sm:0===n?3:2,xs:0===n?3:2,children:Object(r.jsx)(C.a,{className:e.tableHead,children:Object(r.jsxs)(m.a,{onClick:function(){return function(e){0!==e&&(s.index===e?c(Object(I.a)(Object(I.a)({},s),{},{order:!s.order})):c({index:e,order:0}))}(n)},size:o<800?"small":"large",children:["    ",t,0!==n&&(s.index===n?l:Object(r.jsx)(E.a,{className:e.generalArrowStyle}))]})})},n)}));return Object(r.jsx)(a.Fragment,{children:Object(r.jsxs)(p.a,{container:!0,spacing:0,children:[Object(r.jsx)(p.a,{item:!0,sm:1,xs:1,children:Object(r.jsx)(C.a,{className:e.tableHead})}),b,d]})})}),B=n(77),L=n(191),M=n(194),P=n(190),T=n(189),H=n(188);function z(){var e=Object(u.a)(["\n  mutation AddDessert(\n    $dessert: String!, \n    $calories: Int!,\n    $fat: Int!,\n    $carb: Int!,\n    $protein: Int!\n    ){\n    addDessert(\n      dessert: $dessert,\n      calories: $calories,\n      fat: $fat,\n      carb: $carb,\n      protein: $protein\n\n    ) {\n      id\n      dessert\n    }\n  }\n"]);return z=function(){return e},e}var J=Object(o.gql)(z()),V=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)({dessert:"",calories:"",fat:"",carb:"",protein:""}),c=Object(b.a)(s,2),d=c[0],l=c[1],u=Object(o.useMutation)(J),j=Object(b.a)(u,2),f=j[0],h=(j[1].data,Object(a.useState)("")),x=Object(b.a)(h,2),g=x[0],p=x[1],y=function(){i(!1)},C=function(e){var t=e.target;l(Object(I.a)(Object(I.a)({},d),{},Object(B.a)({},t.id,t.value))),p("")},S=O(),w=S.refetch,k=S.setSelected,D=S.setResetState;return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{id:"dessertDialog",hidden:!0,onClick:function(){i(!0)}}),Object(r.jsxs)(M.a,{open:n,onClose:y,"aria-labelledby":"form-dialog-title",children:[Object(r.jsx)(H.a,{id:"form-dialog-title",children:"Add Dessert"}),Object(r.jsxs)(T.a,{children:[Object(r.jsx)(L.a,{autoFocus:!0,value:d.dessert,onChange:C,margin:"dense",name:"dessert",id:"dessert",label:"Dessert",type:"text",fullWidth:!0,required:!0}),Object(r.jsx)(L.a,{value:d.calories,onChange:C,margin:"dense",name:"calories",id:"calories",label:"Calories",type:"number",fullWidth:!0,required:!0}),Object(r.jsx)(L.a,{value:d.fat,onChange:C,margin:"dense",name:"fat",id:"fat",label:"Fat",type:"number",fullWidth:!0,required:!0}),Object(r.jsx)(L.a,{value:d.carb,onChange:C,margin:"dense",name:"carb",id:"carb",label:"Carb",type:"number",fullWidth:!0,required:!0}),Object(r.jsx)(L.a,{value:d.protein,onChange:C,margin:"dense",name:"protein",id:"protein",label:"Protein",type:"number",fullWidth:!0,required:!0}),g&&Object(r.jsx)(v.a,{style:{color:"#dd2c00"},children:g})]}),Object(r.jsxs)(P.a,{children:[Object(r.jsx)(m.a,{onClick:y,color:"primary",children:"Cancel"}),Object(r.jsx)(m.a,{onClick:function(){""!==d.dessert&&""!==d.calories&&""!==d.fat&&""!==d.carb&&""!==d.protein?(f({variables:{dessert:d.dessert,calories:parseInt(d.calories),fat:parseInt(d.fat),carb:parseInt(d.carb),protein:parseInt(d.protein)}}),l({dessert:"",calories:"",fat:"",carb:"",protein:""}),i(!1),w(),k([]),D([])):p("Fields missing")},color:"primary",children:"Add"})]})]})]})};function _(){var e=Object(u.a)(["\n  mutation updateDessertVisibility(\n    $id: Int!\n    ){\n        updateDessertVisibility(\n      id: $id\n    ) {\n      id\n      dessert\n    }\n  }\n"]);return _=function(){return e},e}function G(){var e=Object(u.a)(["\n  mutation makeInvisible(\n    $id: Int!\n    ){\n    makeInvisible(\n      id: $id\n    ) {\n      id\n      dessert\n    }\n  }\n"]);return G=function(){return e},e}function Q(){var e=Object(u.a)(["\n  mutation deleteDessert(\n    $id: Int!\n    ){\n    deleteDessert(\n      id: $id\n    ) {\n      id\n      dessert\n    }\n  }\n"]);return Q=function(){return e},e}var K=Object(o.gql)(Q()),U=Object(o.gql)(G()),X=Object(o.gql)(_()),Y=Object(y.a)(w);var Z=function(){var e=Y(),t=O(),n=t.selected,i=t.setSelected,s=t.resetState,c=t.setResetState,d=t.data,l=t.setSort,u=Object(o.useMutation)(K),j=Object(b.a)(u,1)[0],f=Object(o.useMutation)(U),h=Object(b.a)(f,1)[0],x=Object(o.useMutation)(X),g=Object(b.a)(x,1)[0];return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsxs)(p.a,{container:!0,spacing:3,children:[Object(r.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(r.jsx)(C.a,{className:e.paper,children:Object(r.jsx)(v.a,{variant:"h3",className:e.heading,children:"Nutrition List"})})}),Object(r.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(r.jsx)(C.a,{className:e.paper,children:Object(r.jsx)(m.a,{className:e.button,onClick:function(){d.desserts&&d.desserts.length>0&&d.desserts.forEach((function(e){e.reset?g({variables:{id:parseInt(e.id)}}):j({variables:{id:parseInt(e.id)}})})),l({index:null,order:0}),i([])},children:"Reset"})})}),Object(r.jsx)(p.a,{item:!0,sm:6,xs:12,children:Object(r.jsx)(C.a,{className:e.heading2,children:Object(r.jsxs)(v.a,{variant:"h5",className:e.heading2_text,children:[n.length+s.length," selected"]})})}),Object(r.jsx)(p.a,{item:!0,xs:6,sm:3,children:Object(r.jsx)(C.a,{className:e.paper,children:Object(r.jsx)(m.a,{className:e.addButton,onClick:function(){var e=document.getElementById("dessertDialog");null!==e&&e.click()},children:"ADD ITEM"})})}),Object(r.jsx)(p.a,{item:!0,xs:6,sm:3,children:Object(r.jsx)(C.a,{className:e.paper,children:Object(r.jsx)(m.a,{className:e.deleteButton,onClick:function(){n.length>0&&n.forEach((function(e){j({variables:{id:parseInt(e)}})})),s.length>0&&s.forEach((function(e){h({variables:{id:parseInt(e)}})})),c([]),i([])},children:"DELETE ITEM"})})}),Object(r.jsx)(W,{})]}),Object(r.jsx)(V,{})]})};var ee=function(){return Object(r.jsx)(o.ApolloProvider,{client:d,children:Object(r.jsx)(g,{children:Object(r.jsx)(Z,{})})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};c.a.render(Object(r.jsx)(i.a.Fragment,{children:Object(r.jsx)(ee,{})}),document.getElementById("root")),te()}},[[142,1,2]]]);
//# sourceMappingURL=main.1ca66dcc.chunk.js.map