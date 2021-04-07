(this["webpackJsonpjamal-debug-ui"]=this["webpackJsonpjamal-debug-ui"]||[]).push([[0],{101:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(14),r=n.n(i),s=(n(151),n(7)),o=(n(152),n(3)),l=function(e){return e.replaceAll("\n","\xb6\n")},u=function(e){var t=e.text,n=e.macro,c=void 0===n?"":n,a=t.indexOf(c),i=a+c.length,r=l(-1===a?t:t.substr(0,a)),s=l(-1===a?"":c),u=l(-1===a?"":t.substr(i));return Object(o.jsxs)("pre",{className:"Input_SourceCode",children:[Object(o.jsx)("span",{children:r}),Object(o.jsx)("span",{className:"red",children:s}),Object(o.jsx)("span",{children:u})]})},d=(n(101),function(e){var t=e.children,n=e.caption,c=e.reference;return Object(o.jsxs)("div",{className:"SimpleTextInput_Caption",children:[n,Object(o.jsx)("textarea",{className:"SimpleTextInput_TextArea",ref:c,children:t})]})}),j=function(e){var t=e.children,n=(""+t).replaceAll("\n","\xb6\n");return Object(o.jsxs)("div",{className:"SimpleTextInput_Caption",children:["result",Object(o.jsx)("textarea",{readOnly:!0,className:"SimpleTextInput_TextArea",value:n})]})},h=n(51),p=n(230),b=n(125),O=n(83),x=n.n(O),f=n(73),m=n.n(f),v=n(121),g=n.n(v),y=n(122),N=n.n(y),w=n(120),S=n.n(w),C=(n(154),function(e){var t=e.message;return Object(o.jsx)("div",{className:"Label_Label",children:Object(o.jsx)("span",{children:t})})}),A=n(229),I=n(189),D=n(117),_=n.n(D),T=n(115),L=n.n(T),k=n(113),E=n.n(k),F=n(114),B=n.n(F),M=n(116),P=n.n(M),R=(n(155),function(e){var t=e.message,n=Object(c.useMemo)((function(){switch(t){case"BEFORE":return Object(o.jsx)(E.a,{});case"AFTER":return Object(o.jsx)(B.a,{});case"DISCONNECTED":return Object(o.jsx)(L.a,{});case"RUN":return Object(o.jsx)(P.a,{});default:return Object(o.jsx)(m.a,{})}}),[t]);return Object(o.jsx)(A.a,{className:"TitleBar",children:Object(o.jsxs)(p.a,{container:!0,direction:"row",alignItems:"flex-start",justify:"space-between",children:[Object(o.jsx)(p.a,{item:!0,children:Object(o.jsx)(_.a,{})}),Object(o.jsx)(p.a,{item:!0,children:Object(o.jsx)(I.a,{variant:"h6",className:"title",children:"Jamal Debug"})}),Object(o.jsx)(p.a,{item:!0,children:n})]})})}),J=n(118),z=n.n(J),H=n(56),U=n(57),q=n(82),K=n.n(q),Q=function(){function e(t){var n=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8080;Object(H.a)(this,e),this.port=8080,this.host="localhost",this.run=function(){return n.post("/run")},this.step=function(){return n.post("/step")},this.stepInto=function(){return n.post("/stepInto")},this.stepOut=function(){return n.post("/stepOut")},this.quit=function(){return n.post("/quit")},this.execute=function(e){return n.post("/execute",e)},this.level=function(){return n.get("/level")},this.state=function(){return n.get("/state")},this.input=function(){return n.get("/input")},this.inputBefore=function(){return n.get("/inputBefore")},this.output=function(){return n.get("/output")},this.processing=function(){return n.get("/processing")},this.macros=function(){return n.get("/macros")},this.userDefinedMacros=function(){return n.get("/userDefinedMacros")},this.all=function(e){return n.get("/all?"+e)},this.host=t,this.port=c}return Object(U.a)(e,[{key:"connection",value:function(){return"http://"+this.host+":"+this.port}},{key:"post",value:function(e,t){return K.a.post(this.connection()+e,t)}},{key:"get",value:function(e){return K.a.get(this.connection()+e)}}]),e}(),G=n(58),V=n(74),W=(n(182),function(e){var t,n,c=e.data,a=[],i=0,r=0,s=Object(G.a)((null===c||void 0===c||null===(t=c.macros)||void 0===t?void 0:t.macros)||[]);try{for(s.s();!(n=s.n()).done;){var l=n.value;i++;var u,d=Object(G.a)((null===l||void 0===l?void 0:l.macros)||[]);try{for(d.s();!(u=d.n()).done;){var j=u.value;r++,a.push({id:r,level:i,name:j})}}catch(h){d.e(h)}finally{d.f()}}}catch(h){s.e(h)}finally{s.f()}return Object(o.jsx)("div",{style:{height:400,width:"100%"},children:Object(o.jsx)(V.a,{className:"BuiltInMacrosDisplay",headerHeight:33,rowHeight:33,rows:a,columns:[{field:"id",headerName:"n",width:10},{field:"level",headerName:"L",width:25},{field:"name",headerName:"macro",width:100}],density:"compact",pageSize:a.length,hideFooter:!0})})}),X=(n(183),function(e){var t,n,c=e.data,a=[],i=0,r=0,s=Object(G.a)((null===c||void 0===c||null===(t=c.userDefined)||void 0===t?void 0:t.scopes)||[]);try{for(s.s();!(n=s.n()).done;){var l=n.value;i++;var u,d=Object(G.a)(l||[]);try{for(d.s();!(u=d.n()).done;){var j=u.value;r++,a.push({id:r,level:i,name:j.id,params:j.parameters.join(","),content:j.content})}}catch(h){d.e(h)}finally{d.f()}}}catch(h){s.e(h)}finally{s.f()}return Object(o.jsx)("div",{style:{height:400,width:"100%"},children:Object(o.jsx)(V.a,{className:"UserDefinedMacrosDisplay",headerHeight:33,rowHeight:33,rows:a,columns:[{field:"id",headerName:"n",width:10},{field:"level",headerName:"Level",width:25},{field:"name",headerName:"macro",width:100},{field:"params",headerName:"params",width:100},{field:"content",headerName:"content"}],density:"compact",pageSize:a.length,hideFooter:!0})})}),Y=(n(184),new Q("localhost",8080)),Z=z.a.parse(window.location.search.substring(1));var $=function(){var e=Object(c.useState)({}),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(s.a)(i,2),l=r[0],O=r[1],f=Object(c.useState)(""),v=Object(s.a)(f,2),y=v[0],w=v[1],A=Object(c.useState)(""),I=Object(s.a)(A,2),D=I[0],_=I[1],T=Object(c.useState)("-"),L=Object(s.a)(T,2),k=L[0],E=L[1],F=Object(c.useRef)({value:""}),B=Object(c.useState)(""),M=Object(s.a)(B,2),P=M[0],J=M[1],z=Object(c.useState)(""),H=Object(s.a)(z,2),U=H[0],q=H[1],K=Object(c.useState)(!0),Q=Object(s.a)(K,2),G=Q[0],V=Q[1],$=Z.port?""+Z.port:new URL(window.location.href).port;Y.port=+$;var ee=Object(c.useCallback)((function(){Y.all("level&input&output&inputBefore&processing&macros&userDefined&state&output").then((function(e){var t,n,c,i,r,s,o,l,u,d;O(null!==(t=null===(n=e.data)||void 0===n?void 0:n.inputBefore)&&void 0!==t?t:""),w(null!==(c=null===(i=e.data)||void 0===i?void 0:i.processing)&&void 0!==c?c:""),_(null!==(r=null===(s=e.data)||void 0===s?void 0:s.output)&&void 0!==r?r:""),q(null!==(o=null===(l=e.data)||void 0===l?void 0:l.state)&&void 0!==o?o:""),E(null!==(u=null===(d=e.data)||void 0===d?void 0:d.level)&&void 0!==u?u:""),a(e.data)})).catch((function(e){var t;503===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)?(q("RUN"),setTimeout(ee,500)):(q("DISCONNECTED"),O(""),w(""),_(""))}))}),[]),te=function(e){e().then((function(){return ee()}))};Object(c.useEffect)((function(){G&&(document.title="Jamal Debugger",V(!1),ee())}));var ne=function(e){var t=21-e.length+"px";return Object(o.jsx)("div",{style:{marginLeft:t,fontSize:"8pt"},children:e})},ce=Object(o.jsxs)(p.a,{item:!0,children:[Object(o.jsx)(h.a,{variant:"contained",onClick:function(){var e;return Y.execute(""+(null===F||void 0===F||null===(e=F.current)||void 0===e?void 0:e.value)).then((function(e){"object"!=typeof e.data?(0===e.data.length?J("OK"):J(""+e.data),document.title="Jamal Debugger"):(J(""+e.data.trace),document.title="Jamal Debugger (e)")}))},color:"primary",children:Object(o.jsx)(x.a,{})}),ne("Evaluate")]}),ae=Object(o.jsxs)(p.a,{item:!0,children:[Object(o.jsx)(h.a,{variant:"contained",onClick:function(){return te(Y.quit)},color:"secondary",children:Object(o.jsx)(S.a,{})}),ne("Quit")]}),ie=Object(o.jsxs)(p.a,{item:!0,children:[Object(o.jsx)(h.a,{variant:"contained",onClick:function(){return te(Y.run)},children:Object(o.jsx)(x.a,{})}),ne("Run")]}),re=Object(o.jsxs)(p.a,{item:!0,children:[Object(o.jsx)(h.a,{variant:"contained",onClick:function(){return te(Y.step)},children:Object(o.jsx)(m.a,{})}),ne("Step")]}),se=Object(o.jsxs)(p.a,{item:!0,children:[Object(o.jsx)(h.a,{variant:"contained",onClick:function(){return te(Y.stepInto)},children:Object(o.jsx)(g.a,{})}),ne("Step In")]}),oe=Object(o.jsxs)(p.a,{item:!0,children:[Object(o.jsx)(h.a,{variant:"contained",onClick:function(){return te(Y.stepOut)},children:Object(o.jsx)(N.a,{})}),ne("Step Out")]}),le=Object(o.jsx)(p.a,{container:!0,direction:"column",children:Object(o.jsxs)(p.a,{container:!0,direction:"row",justify:"space-around",alignContent:"center",children:[ie," ",re," ",se," ",oe," ",ae]})}),ue=Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(p.a,{item:!0,children:Object(o.jsx)(C,{message:"Level: "+k})})}),de=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p.a,{container:!0,direction:"column",xs:3,children:ue}),Object(o.jsx)(p.a,{container:!0,direction:"column",xs:6,children:Object(o.jsx)(p.a,{item:!0,children:le})}),Object(o.jsx)(p.a,{container:!0,direction:"row",xs:3,justify:"space-around",alignItems:"flex-end",alignContent:"flex-end",children:ce})]}),je=Object(o.jsxs)(p.a,{container:!0,direction:"column",spacing:1,xl:3,justify:"space-around",children:[Object(o.jsx)(p.a,{item:!0,children:Object(o.jsx)(b.a,{className:"App_Paper, App_MacroList",children:Object(o.jsx)(W,{data:n})})}),Object(o.jsx)(p.a,{item:!0,children:Object(o.jsx)(b.a,{className:"App_Paper, App_MacroList",children:Object(o.jsx)(X,{data:n})})})]}),he=Object(o.jsxs)(p.a,{container:!0,direction:"column",xs:6,justify:"space-around",spacing:3,children:[Object(o.jsx)(p.a,{item:!0,style:{paddingBottom:"6px"},children:Object(o.jsxs)(b.a,{className:"App_Paper",style:{height:"285px"},children:[Object(o.jsx)("div",{style:{marginLeft:"30px",fontSize:"12pt"},children:"input"}),Object(o.jsx)(u,{text:l,macro:y})]})}),Object(o.jsx)(p.a,{item:!0,children:Object(o.jsxs)(b.a,{className:"App_Paper",style:{height:"285px"},children:[Object(o.jsx)("div",{style:{marginLeft:"30px",fontSize:"12pt"},children:"output"}),Object(o.jsx)(u,{text:D})]})})]}),pe=Object(o.jsxs)(p.a,{container:!0,direction:"column",xs:3,justify:"space-around",children:[Object(o.jsx)(p.a,{item:!0,children:Object(o.jsx)(b.a,{className:"App_Paper, App_Eval",children:Object(o.jsx)(d,{caption:"evaluate",reference:F,children:""})})}),Object(o.jsx)(p.a,{item:!0,children:Object(o.jsx)(b.a,{className:"App_Paper, App_Eval",children:Object(o.jsx)(j,{children:P})})})]}),be=Object(o.jsxs)(o.Fragment,{children:[je,he,pe]});return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsxs)(p.a,{container:!0,direction:"column",className:"AppTopContainer",spacing:10,justify:"space-around",alignContent:"flex-start",alignItems:"flex-start",children:[Object(o.jsx)(p.a,{container:!0,direction:"row",children:Object(o.jsx)(R,{message:U})}),Object(o.jsx)(p.a,{container:!0,direction:"row",children:de}),Object(o.jsx)(p.a,{container:!0,direction:"row",alignItems:"flex-start",children:be})]})})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)($,{})}),document.getElementById("root")),ee()}},[[185,1,2]]]);
//# sourceMappingURL=main.a8d53cf0.chunk.js.map