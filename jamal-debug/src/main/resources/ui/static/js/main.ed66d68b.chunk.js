(this["webpackJsonpjamal-debug-ui"]=this["webpackJsonpjamal-debug-ui"]||[]).push([[0],{105:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),c=n.n(r),s=(n(159),n(7)),o=n(239),l=(n(160),n(3)),u=function(e){return e.replaceAll("\n","\xb6\n")},d=function(e){var t=Object(l.jsx)(l.Fragment,{});if(0===e.length)return t;for(var n=e.split("\n"),a=0;a<n.length-1;a++){var i=n[a];t=Object(l.jsxs)(l.Fragment,{children:[t,i,Object(l.jsx)("br",{})]})}return t=Object(l.jsxs)(l.Fragment,{children:[t,n[n.length-1]]})},j=function(e){var t=e.text,n=e.macro,a=void 0===n?"":n,i=t.indexOf(a),r=i+a.length,c=u(-1===i?t:t.substr(0,i)),s=u(-1===i?"":a),j=u(-1===i?"":t.substr(r));return Object(l.jsxs)(o.a,{overflow:"auto",className:"Input_SourceCode",children:[d(c),Object(l.jsx)("div",{className:"red",children:d(s)}),d(j)]})},h=(n(105),function(e){var t=e.children,n=e.caption,a=e.reference;return Object(l.jsxs)("div",{className:"SimpleTextInput_Caption",children:[n,Object(l.jsx)("textarea",{className:"SimpleTextInput_TextArea",ref:a,children:t})]})}),p=function(e){var t=e.children,n=e.caption,a=(""+t).replaceAll("\n","\xb6\n");return Object(l.jsxs)("div",{className:"SimpleTextInput_Caption",children:[n,Object(l.jsx)("textarea",{readOnly:!0,className:"SimpleTextInput_TextArea",value:a})]})},b=n(54),v=n(236),O=n(131),x=n(124),m=n.n(x),f=n(77),g=n.n(f),y=n(78),w=n.n(y),S=n(123),N=n.n(S),A=n(126),C=n.n(A),_=n(127),L=n.n(_),T=n(125),D=n.n(T),I=(n(166),function(e){var t=e.message;return Object(l.jsx)("div",{className:"Label_Label",children:t})}),k=n(235),E=n(196),F=n(120),R=n.n(F),B=n(119),P=n.n(B),M=n(117),J=n.n(M),q=n(118),z=n.n(q),H=(n(167),function(e){var t=e.message,n=Object(a.useMemo)((function(){switch(t){case"BEFORE":return Object(l.jsx)(J.a,{});case"AFTER":return Object(l.jsx)(z.a,{});case"DISCONNECTED":return Object(l.jsx)(P.a,{});case"RUN":return Object(l.jsx)(g.a,{});default:return Object(l.jsx)(w.a,{})}}),[t]);return Object(l.jsx)(k.a,{className:"TitleBar",children:Object(l.jsxs)(v.a,{container:!0,direction:"row",alignItems:"flex-start",justify:"space-between",children:[Object(l.jsx)(v.a,{item:!0,children:Object(l.jsx)(R.a,{})}),Object(l.jsx)(v.a,{item:!0,children:Object(l.jsx)(E.a,{variant:"h6",className:"title",children:"Jamal Debug"})}),Object(l.jsx)(v.a,{item:!0,children:n})]})})}),U=n(121),Q=n.n(U),V=n(43),G=n(59),K=n(65),W=n.n(K),X=function(){function e(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8080;Object(V.a)(this,e),this.port=8080,this.host="localhost",this.run=function(){return n.post("/run")},this.step=function(){return n.post("/step")},this.stepInto=function(){return n.post("/stepInto")},this.stepOut=function(){return n.post("/stepOut")},this.quit=function(){return n.post("/quit")},this.execute=function(e){return n.post("/execute",e)},this.level=function(){return n.get("/level")},this.state=function(){return n.get("/state")},this.input=function(){return n.get("/input")},this.inputBefore=function(){return n.get("/inputBefore")},this.output=function(){return n.get("/output")},this.processing=function(){return n.get("/processing")},this.macros=function(){return n.get("/macros")},this.userDefinedMacros=function(){return n.get("/userDefinedMacros")},this.all=function(e){return n.get("/all?"+e)},this.host=t,this.port=a}return Object(G.a)(e,[{key:"connection",value:function(){return"http://"+this.host+":"+this.port}},{key:"post",value:function(e,t){return W.a.post(this.connection()+e,t)}},{key:"get",value:function(e){return W.a.get(this.connection()+e)}}]),e}(),Y=n(44),Z=function e(){var t=this;Object(V.a)(this,e),this.url="https://raw.githubusercontent.com/verhas/jamal/master/version.jim",this.lastRelease="",W.a.get(this.url).then((function(e){var n,a=Object(Y.a)((""+e.data).split("\n"));try{for(a.s();!(n=a.n()).done;){var i=n.value;0===i.search(/\{@define\sLAST_RELEASE=(.*)\}/)&&(t.lastRelease=i.substring(22,i.length-1))}}catch(r){a.e(r)}finally{a.f()}}))},$=n(79),ee=(n(190),function(e){var t,n,a=e.data,i=[],r=0,c=0,s=Object(Y.a)((null===a||void 0===a||null===(t=a.macros)||void 0===t?void 0:t.macros)||[]);try{for(s.s();!(n=s.n()).done;){var o=n.value;r++;var u,d=Object(Y.a)((null===o||void 0===o?void 0:o.macros)||[]);try{for(d.s();!(u=d.n()).done;){var j=u.value;c++,i.push({id:c,level:r,name:j})}}catch(h){d.e(h)}finally{d.f()}}}catch(h){s.e(h)}finally{s.f()}return Object(l.jsx)("div",{style:{height:"310px",width:"100%",marginTop:"10px"},children:Object(l.jsx)($.a,{className:"BuiltInMacrosDisplay",headerHeight:33,rowHeight:33,rows:i,columns:[{field:"id",headerName:"n",width:10},{field:"level",headerName:"L",width:25},{field:"name",headerName:"macro",width:100}],density:"compact",pageSize:i.length,hideFooter:!0})})}),te=(n(191),function(e){var t,n,a=e.data,i=e.captionSetter,r=e.contentSetter,c=[],s=0,o=0,u=Object(Y.a)((null===a||void 0===a||null===(t=a.userDefined)||void 0===t?void 0:t.scopes)||[]);try{for(u.s();!(n=u.n()).done;){var d=n.value;s++;var j,h=Object(Y.a)(d||[]);try{for(h.s();!(j=h.n()).done;){var p,b,v=j.value;o++,c.push({id:o,level:s,name:v.id,params:null!==(p=null===v||void 0===v||null===(b=v.parameters)||void 0===b?void 0:b.join(","))&&void 0!==p?p:"",content:v.content})}}catch(O){h.e(O)}finally{h.f()}}}catch(O){u.e(O)}finally{u.f()}return Object(l.jsx)("div",{style:{height:"310px",width:"100%",marginTop:"10px"},children:Object(l.jsx)($.a,{className:"UserDefinedMacrosDisplay",headerHeight:33,rowHeight:33,rows:c,columns:[{field:"id",headerName:"n",width:10},{field:"level",headerName:"Level",width:25},{field:"name",headerName:"macro",width:100},{field:"params",headerName:"params",width:100},{field:"content",headerName:"content"}],density:"compact",pageSize:c.length,hideFooter:!0,onRowSelected:function(e){var t="{@define "+e.data.name+"("+e.data.params+")="+e.data.content+"}";i("macro definition"),r(t)}})})}),ne=n(83),ae=(n(192),new X("localhost",8080)),ie=Q.a.parse(window.location.search.substring(1)),re=new Z,ce="";var se=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),c=Object(s.a)(r,2),o=c[0],u=c[1],d=Object(a.useState)(""),x=Object(s.a)(d,2),f=x[0],y=x[1],S=Object(a.useState)(""),A=Object(s.a)(S,2),_=A[0],T=A[1],k=Object(a.useState)("-"),E=Object(s.a)(k,2),F=E[0],R=E[1],B=Object(a.useRef)({value:""}),P=Object(a.useState)(""),M=Object(s.a)(P,2),J=M[0],q=M[1],z=Object(a.useState)(""),U=Object(s.a)(z,2),Q=U[0],V=U[1],G=Object(a.useState)("no result"),K=Object(s.a)(G,2),W=K[0],X=K[1],Y=Object(a.useState)("unknown"),Z=Object(s.a)(Y,2),$=Z[0],se=Z[1],oe=Object(a.useState)(!0),le=Object(s.a)(oe,2),ue=le[0],de=le[1],je=ie.port?""+ie.port:new URL(window.location.href).port;ae.port=+je;var he=Object(a.useCallback)((function(){ae.all("level&input&output&inputBefore&processing&macros&userDefined&state&output&version").then((function(e){var t,n,a,r,c,s,o,l,d,j,h,p,b;u(null!==(t=null===(n=e.data)||void 0===n?void 0:n.inputBefore)&&void 0!==t?t:""),y(null!==(a=null===(r=e.data)||void 0===r?void 0:r.processing)&&void 0!==a?a:""),T(null!==(c=null===(s=e.data)||void 0===s?void 0:s.output)&&void 0!==c?c:""),V(null!==(o=null===(l=e.data)||void 0===l?void 0:l.state)&&void 0!==o?o:""),R(null!==(d=null===(j=e.data)||void 0===j?void 0:j.level)&&void 0!==d?d:""),se(null!==(h=null===(p=e.data)||void 0===p||null===(b=p.version)||void 0===b?void 0:b.version)&&void 0!==h?h:"unknown"),i(e.data)})).catch((function(e){var t;503===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)?(V("RUN"),setTimeout(he,500)):(V("DISCONNECTED"),u(""),y(""),T(""))}))}),[]),pe=function(e){e().then((function(){return he()}))};""===ce&&(ce=re.lastRelease),ue&&(document.title="Jamal Debugger",de(!1),he());var be,ve=function(e){var t=21-e.length+"px";return Object(l.jsx)("div",{style:{marginLeft:t,fontSize:"8pt"},children:e})},Oe=Object(l.jsxs)(v.a,{item:!0,children:[Object(l.jsx)(b.a,{variant:"contained",onClick:he,children:Object(l.jsx)(N.a,{})}),ve("Refresh")]}),xe=Object(l.jsxs)(v.a,{item:!0,children:[Object(l.jsx)(b.a,{variant:"contained",onClick:function(){var e;return ae.execute(""+(null===B||void 0===B||null===(e=B.current)||void 0===e?void 0:e.value)).then((function(e){"object"!=typeof e.data?(0===e.data.length?(q(""),X("empty evaluation result")):(q(""+e.data),X("result")),document.title="Jamal Debugger"):(q(""+e.data.trace),X("error result"),document.title="Jamal Debugger (e)"),he()}))},color:"primary",children:Object(l.jsx)(m.a,{})}),ve("Evaluate")]}),me=Object(l.jsxs)(v.a,{item:!0,children:[Object(l.jsx)(b.a,{variant:"contained",onClick:function(){return pe(ae.quit)},color:"secondary",children:Object(l.jsx)(D.a,{})}),ve("Quit")]}),fe=Object(l.jsxs)(v.a,{item:!0,children:[Object(l.jsx)(b.a,{variant:"contained",onClick:function(){return pe(ae.run)},children:Object(l.jsx)(g.a,{})}),ve("Run")]}),ge=Object(l.jsxs)(v.a,{item:!0,children:[Object(l.jsx)(b.a,{variant:"contained",onClick:function(){return pe(ae.step)},children:Object(l.jsx)(w.a,{})}),ve("Step")]}),ye=Object(l.jsxs)(v.a,{item:!0,children:[Object(l.jsx)(b.a,{variant:"contained",onClick:function(){return pe(ae.stepInto)},children:Object(l.jsx)(C.a,{})}),ve("Step In")]}),we=Object(l.jsxs)(v.a,{item:!0,children:[Object(l.jsx)(b.a,{variant:"contained",onClick:function(){return pe(ae.stepOut)},children:Object(l.jsx)(L.a,{})}),ve("Step Out")]}),Se=Object(l.jsx)(v.a,{container:!0,direction:"column",children:Object(l.jsxs)(v.a,{container:!0,direction:"row",justify:"space-around",alignContent:"center",children:[Oe," ",fe," ",ge," ",ye,we]})}),Ne=Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(v.a,{item:!0,children:Object(l.jsx)(I,{message:""+F})})}),Ae=Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(v.a,{item:!0,xs:6,children:Se}),Object(l.jsx)(v.a,{item:!0,xs:3,children:Ne}),Object(l.jsxs)(v.a,{container:!0,direction:"row",xs:3,justify:"space-around",alignItems:"flex-end",alignContent:"flex-end",children:[xe,me]})]}),Ce=Object(l.jsx)(v.a,{item:!0,xs:3,children:Object(l.jsx)(O.a,{className:"App_Paper, App_MacroList",children:Object(l.jsx)(ee,{data:n})})}),_e=Object(l.jsx)(v.a,{item:!0,xs:3,children:Object(l.jsx)(O.a,{className:"App_Paper, App_MacroList",children:Object(l.jsx)(te,{data:n,captionSetter:X,contentSetter:q})})}),Le=Object(l.jsx)(v.a,{item:!0,xs:6,children:Object(l.jsxs)(O.a,{className:"App_Paper",children:[Object(l.jsx)("div",{style:{marginLeft:"30px",fontSize:"12pt"},children:"input"}),Object(l.jsx)(j,{text:o,macro:f})]})}),Te=Object(l.jsx)(v.a,{item:!0,xs:6,children:Object(l.jsxs)(O.a,{className:"App_Paper",children:[Object(l.jsx)("div",{style:{marginLeft:"30px",fontSize:"12pt"},children:"output"}),Object(l.jsx)(j,{text:_})]})}),De=Object(l.jsx)(v.a,{item:!0,xs:3,children:Object(l.jsx)(O.a,{className:"App_Paper, App_Eval",children:Object(l.jsx)(h,{caption:"evaluate",reference:B,children:""})})}),Ie=Object(l.jsx)(v.a,{item:!0,xs:3,children:Object(l.jsx)(O.a,{className:"App_Paper, App_Eval",children:Object(l.jsx)(p,{caption:W,children:J})})});return be=$===ne.version?"Version: "+$:"Server version: "+$+", Client version: "+ne.version,""==ce||ce==$&&ce==ne.version||(be+=", Latest release: "+ce),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)(v.a,{container:!0,direction:"row",children:Object(l.jsx)(H,{message:Q})}),Object(l.jsx)(v.a,{container:!0,direction:"row",children:Ae}),Object(l.jsxs)(v.a,{container:!0,direction:"row",spacing:2,style:{width:"100%"},justify:"space-around",children:[Le,Ce,De]}),Object(l.jsxs)(v.a,{container:!0,direction:"row",spacing:2,style:{width:"100%"},justify:"space-around",children:[Te,_e,Ie]}),Object(l.jsx)(v.a,{container:!0,direction:"row",spacing:2,style:{width:"100%"},justify:"space-around",children:Object(l.jsx)(v.a,{item:!0,xs:12,children:Object(l.jsxs)("div",{className:"App_LicenseLine",children:["v1.0.0, Apache License 2.0, ",Object(l.jsx)("a",{href:"https://github.com/verhas/jamal",children:"https://github.com/verhas/jamal"}),", "+be]})})})]})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,242)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(se,{})}),document.getElementById("root")),oe()},83:function(e){e.exports=JSON.parse('{"name":"jamal-debug-ui","version":"1.7.3-SNAPSHOT","private":true,"dependencies":{"@material-ui/core":"^4.11.3","@material-ui/data-grid":"*","@material-ui/icons":"^4.11.2","@testing-library/jest-dom":"^5.11.9","@testing-library/react":"^11.2.5","@testing-library/user-event":"^12.8.3","@types/jest":"^26.0.21","@types/node":"^12.20.6","@types/react":"^17.0.3","@types/react-dom":"^17.0.2","axios":"^0.21.1","material-design-icons":"^3.0.1","qs":"^6.5.2","query-string":"^4.3.4","react":"^17.0.1","react-dom":"^17.0.1","react-scripts":"4.0.3","typescript":"^4.2.3","web-vitals":"^1.1.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')}},[[193,1,2]]]);
//# sourceMappingURL=main.ed66d68b.chunk.js.map