(this["webpackJsonpjamal-debug-ui"]=this["webpackJsonpjamal-debug-ui"]||[]).push([[0],{106:function(e,t,n){},115:function(e,t,n){},119:function(e,t,n){},122:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},159:function(e,t,n){},182:function(e,t,n){},192:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(24),i=n.n(a),l=(n(156),n(157),n(61)),c={},o=function(e){var t=r.useState;for(var n in e){var s=t(e[n]),a=Object(l.a)(s,2);c[n]=a[0],c["set"+n.charAt(0).toUpperCase()+n.slice(1)]=a[1]}return c},d=function(e){return c.showP?e.replaceAll("\n","\xb6\n"):e},u=n(1),j=function(e,t){if(0===e.length)return Object(u.jsx)(u.Fragment,{});var n=e.split("\n");return Object(u.jsxs)(u.Fragment,{children:[n.slice(0,-1).map((function(e){return Object(u.jsxs)("span",{style:{color:t},children:[e,Object(u.jsx)("br",{})]})})),Object(u.jsx)("span",{style:{color:t},children:n[n.length-1]})]})},p=function(e){var t=e.text,n=e.macro,r=void 0===n?"":n,s=t.indexOf(r),a=s+r.length,i=d(-1===s?t:t.substr(0,s)),l=d(-1===s?"":r),c=d(-1===s?"":t.substr(a));return Object(u.jsxs)("div",{style:{overflow:"auto"},className:"Input_SourceCode",children:[j(i,"black"),j(l,"red"),j(c,"black")]})},h=n(103),b=function(e){var t=e.children,n=e.hidden,r=e.id,s=e.other,a=void 0===s?"":s;return Object(u.jsx)("div",Object(h.a)(Object(h.a)({role:"tabpanel",hidden:n,id:r},a),{},{children:t}))},v=(n(106),function(e){var t=e.caption,n=e.reference,r=e.backgroundColor,s=void 0===r?"white":r,a=e.height,i=void 0===a?260:a;return Object(u.jsxs)("div",{className:"SimpleTextInput_Caption",style:{backgroundColor:s},children:[Object(u.jsx)("div",{className:"textbox_caption",style:{backgroundColor:s},children:t}),Object(u.jsx)("textarea",{className:"SimpleTextInput_TextArea",ref:n,style:{backgroundColor:s,width:"99%",height:i},defaultValue:"",onChange:function(){}})]})}),x=n(228),O=n(230),f=n(233),m=n(231),g=n(78),y=n.n(g),w=n(79),C=n.n(w),S=n(136),A=n.n(S),L=n(137),k=n.n(L),R=n(138),T=n.n(R),N=n(139),E=n.n(N),M=n(227),_=n(229),B=n(132),D=n.n(B),I=n(127),P=n.n(I),H=n(131),z=n.n(H),F=500,J="DISCONNECTED",U="BEFORE",V="AFTER",q="RUN",W=(n(159),function(e){var t=e.message,n=Object(r.useMemo)((function(){switch(t){case U:return Object(u.jsx)(P.a,{});case V:return Object(u.jsx)(z.a,{});case J:return Object(u.jsx)(D.a,{});case q:return Object(u.jsx)(y.a,{});default:return Object(u.jsx)(C.a,{})}}),[t]);return Object(u.jsx)(M.a,{className:"TitleBar",children:Object(u.jsxs)(x.a,{container:!0,direction:"row",alignItems:"flex-start",justify:"space-between",children:[Object(u.jsx)(x.a,{item:!0,children:"\xa0"}),Object(u.jsx)(x.a,{item:!0,children:Object(u.jsx)(_.a,{variant:"h6",className:"title",children:"Jamal Debug"})}),Object(u.jsxs)(x.a,{item:!0,children:[Object(u.jsxs)("span",{style:{fontSize:"8pt"},children:[t,"\xa0"]}),n]})]})})}),Y=n(67),Q=n(38),X=n(80),G=n(68),K=n.n(G),Z=n(96),$=new(Object(Q.a)((function e(){var t=this;Object(X.a)(this,e),this.url="https://raw.githubusercontent.com/verhas/jamal/master/version.jim",this.lastRelease="",K.a.get(this.url).then((function(e){var n,r=Object(Y.a)((""+e.data).split("\n"));try{for(r.s();!(n=r.n()).done;){var s=n.value;0===s.search(/{@define\sLAST_RELEASE=(.*)}/)&&(t.lastRelease=s.substring(22,s.length-1))}}catch(a){r.e(a)}finally{r.f()}}))}))),ee=function(){var e;return e=c.serverVersion===Z.version?"Version: "+c.serverVersion:"Server version: "+c.serverVersion+", Client version: "+Z.version,""===$.lastRelease||$.lastRelease===c.serverVersion&&$.lastRelease===Z.version||(e+=", Latest release: "+$.lastRelease),e},te=(n(115),n(234)),ne=(n(102),function(e){var t,n=e.data,r=0,s=0;return Object(u.jsx)("div",{style:{height:"310px"},children:Object(u.jsx)("div",{style:{height:"620px",width:"100%",marginTop:"10px",overflowY:"auto",backgroundColor:"lightyellow"},children:Object(u.jsxs)(te.a,{celled:!0,size:"small",sortable:!0,striped:!0,style:{fontSize:"12px",backgroundColor:"lightyellow"},children:[Object(u.jsx)(te.a.Header,{children:Object(u.jsxs)(te.a.Row,{children:[Object(u.jsx)(te.a.HeaderCell,{style:{width:"30px"},children:"n"}),Object(u.jsx)(te.a.HeaderCell,{style:{width:"30px"},children:"L"}),Object(u.jsx)(te.a.HeaderCell,{style:{width:"100px"},children:"macro"})]},0)}),Object(u.jsx)(te.a.Body,{children:((null===n||void 0===n||null===(t=n.macros)||void 0===t?void 0:t.macros)||[]).map((function(e){return s++,e.macros.map((function(e){return r++,Object(u.jsxs)(te.a.Row,{children:[Object(u.jsx)(te.a.Cell,{style:{width:30},children:r}),Object(u.jsx)(te.a.Cell,{style:{width:30},children:s}),Object(u.jsx)(te.a.Cell,{style:{width:"100%"},children:e})]},r)}))}))})]})})})}),re=(n(182),function(e){var t,n,r,s=e.data,a=e.captionSetter,i=e.contentSetter,l=[],c=Object(Y.a)((null===(n=s.userDefined)||void 0===n?void 0:n.scopes)||[]);try{for(c.s();!(r=c.n()).done;){var o,d=r.value,j=Object(Y.a)(d||[]);try{for(j.s();!(o=j.n()).done;){var p,h,b=o.value;l.push({name:b.id,params:null!==(p=null===(h=b.parameters)||void 0===h?void 0:h.join(","))&&void 0!==p?p:"",content:b.content})}}catch(O){j.e(O)}finally{j.f()}}}catch(O){c.e(O)}finally{c.f()}var v=0,x=0;return Object(u.jsx)("div",{style:{height:"310px",width:"100%",marginTop:"10px",overflowY:"auto",backgroundColor:"#d2eaff"},children:Object(u.jsxs)(te.a,{celled:!0,size:"small",sortable:!0,striped:!0,style:{fontSize:"12px",backgroundColor:"#d2eaff"},children:[Object(u.jsx)(te.a.Header,{children:Object(u.jsxs)(te.a.Row,{children:[Object(u.jsx)(te.a.HeaderCell,{children:"n"}),Object(u.jsx)(te.a.HeaderCell,{children:"L"}),Object(u.jsx)(te.a.HeaderCell,{children:"macro"}),Object(u.jsx)(te.a.HeaderCell,{children:"parameters"}),Object(u.jsx)(te.a.HeaderCell,{children:"body"})]},0)}),Object(u.jsx)(te.a.Body,{children:((null===s||void 0===s||null===(t=s.userDefined)||void 0===t?void 0:t.scopes)||[]).map((function(e){return x++,e.map((function(e){var t,n,r;return v++,Object(u.jsxs)(te.a.Row,{onClick:(r=v-1,function(){var e=l[r],t="{@define "+e.name+"("+e.params+")="+e.content+"}";a("macro definition"),i(t)}),warning:void 0===e.content,children:[Object(u.jsx)(te.a.Cell,{style:{width:30},children:v}),Object(u.jsx)(te.a.Cell,{style:{width:30},children:x}),Object(u.jsx)(te.a.Cell,{style:{width:100},children:e.id}),Object(u.jsx)(te.a.Cell,{style:{width:200,overflowX:"auto"},children:null!==(t=null===e||void 0===e||null===(n=e.parameters)||void 0===n?void 0:n.join(","))&&void 0!==t?t:""}),Object(u.jsx)(te.a.Cell,{style:{width:"100%"},children:void 0!==e.content?e.content:e.type})]},v)}))}))})]})})}),se=n(134),ae=n.n(se),ie=Object(Q.a)((function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8080;Object(X.a)(this,e),this.port=8080,this.host="localhost",this.connection=function(){return"http://"+n.host+":"+n.port},this.post=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return K.a.post(n.connection()+e,t)},this.get=function(e){return K.a.get(n.connection()+e)},this.run=function(e){return n.post("/run",e)},this.step=function(){return n.post("/step")},this.stepInto=function(){return n.post("/stepInto")},this.stepOut=function(){return n.post("/stepOut")},this.quit=function(){return n.post("/quit")},this.execute=function(e){return n.post("/execute",e)},this.all=function(e){return n.get("/all?"+e)},this.host=t,this.port=r})),le=new ie("localhost",8080),ce=ae.a.parse(window.location.search.substring(1)),oe=ce.port?""+ce.port:new URL(window.location.href).port;le.port=+oe;var de=le,ue=function e(){de.all("level&errors&input&output&inputBefore&processing&macros&userDefined&state&output&version").then((function(e){var t=e.data;if(t){var n,r,s,a,i,o,d,u,j,p=+t.level,h=c.inputBeforeArray.slice(0,p-1);h.push(t.inputBefore);var b=c.outputArray.slice(0,p-1);b[p-1]=t.output,c.setInputBeforeArray(h),c.setOutputArray(b),c.setDisplayedLevel(p),c.setInputBefore(null!==(n=t.inputBefore)&&void 0!==n?n:""),c.setInputAfter(null!==(r=t.input)&&void 0!==r?r:""),c.setMacro(null!==(s=t.processing)&&void 0!==s?s:""),c.setOutput(null!==(a=t.output)&&void 0!==a?a:""),c.setStateMessage(null!==(i=t.state)&&void 0!==i?i:""),c.setLevel(null!==(o=t.level)&&void 0!==o?o:""),c.setServerVersion(null!==(d=null===(u=t.version)||void 0===u?void 0:u.version)&&void 0!==d?d:"unknown");var v=null!==(j=t.errors)&&void 0!==j?j:[];if(!c.errors.length&&v.length&&!c.wasErrorAlerted){var x=1===v.length?["is an",""]:["are ".concat(v.length),"s"],O=Object(l.a)(x,2),f=O[0],m=O[1];alert("There ".concat(f," error").concat(m," in the Jamal source.\n\n")+v.join("\n")+"\n\nThis is a one time only alert. When there is an error the 'ERROR' tab is visible and the level counter is red."),c.setWasErrorAlerted(!0)}c.setErrors(v),c.setData(t)}else alert("Server response contained no data.")})).catch((function(t){var n;503===(null===(n=t.response)||void 0===n?void 0:n.status)?(c.setStateMessage(q),setTimeout(e,F)):(c.setStateMessage(J),c.setInputBefore(""),c.setMacro(""),c.setOutput(""),c.setData({}),setTimeout((function(){c.stateMessage===J&&(window.confirm("Refresh the page to retry connecting to the Jamal debugger server.\nRefresh now?")&&window.location.reload())}),5e3))}))},je=function e(t){c.setStateMessage(q),t().then(ue).catch((function(n){var r;503===(null===(r=n.response)||void 0===r?void 0:r.status)?setTimeout((function(){return e(t)}),F):setTimeout(ue,F)}))},pe=function e(t){c.stateMessage===V?(c.setStateMessage(q),t().then((function(){return je(t)})).catch((function(n){var r;503===(null===(r=n.response)||void 0===r?void 0:r.status)?setTimeout((function(){return e(t)}),F):setTimeout(ue,F)}))):je(t)},he=function(){return pe(de.step)},be=function(){return je(de.step)},ve=function(){return je(de.stepInto)},xe=function(){return je(de.stepOut)},Oe=function(){return je(de.quit)},fe=(n(119),n(232)),me=function(e){var t=e.onClick,n=e.caption,r=e.color,s=void 0===r?"grey":r,a=e.disabled,i=void 0!==a&&a,l=e.children,o=e.style,d=void 0===o?{}:o;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(fe.a,{variant:"contained",onClick:t,color:s,disabled:i||c.stateMessage===q||c.stateMessage===J,style:d,children:[l,Object(u.jsx)("div",{style:{fontSize:"8pt"},children:n})]})})},ge=(n(122),function(){var e="";return c.errors.length&&(e="RedAsError"),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"left"},children:[Object(u.jsx)("div",{className:"LevelNumber ".concat(e),children:""+c.displayedLevel}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"LevelNumber LevelUpDown LevelUp",onClick:function(){c.displayedLevel<c.level&&(c.setDisplayedLevel(c.displayedLevel+1),c.setInputBefore(c.inputBeforeArray[c.displayedLevel]||""),c.setOutput(c.outputArray[c.displayedLevel]||""))},children:Object(u.jsx)("div",{className:"LevelUpDownLabel LevelUpLabel",children:"+"})}),Object(u.jsx)("div",{className:"LevelNumber LevelUpDown",onClick:function(){c.displayedLevel>1&&(c.setDisplayedLevel(c.displayedLevel-1),c.setInputBefore(c.inputBeforeArray[c.displayedLevel-2]||""),c.setOutput(c.outputArray[c.displayedLevel-2]||""))},children:Object(u.jsx)("div",{className:"LevelUpDownLabel",children:"-"})})]})]}),Object(u.jsx)("div",{style:{fontSize:"8pt"},children:"source level"})]})}),ye=function(e){var t=e.children,n=e.caption,r=e.color,s=void 0===r?"white":r,a=e.height,i=void 0===a?260:a,l=d(""+t);return Object(u.jsxs)("div",{className:"SimpleTextInput_Caption",style:{backgroundColor:s},children:[Object(u.jsx)("div",{className:"textbox_caption",style:{backgroundColor:s},children:n}),Object(u.jsx)("textarea",{readOnly:!0,className:"SimpleTextInput_TextArea",value:l,style:{width:"99%",backgroundColor:s,height:i}})]})},we=function(){return Object(u.jsx)(O.a,{className:"App_Paper, App_Eval",children:Object(u.jsx)(ye,{caption:c.resultCaption,children:c.evalOutput})})},Ce=function(){var e=c.errors,t=0;return Object(u.jsx)("div",{style:{height:"310px"},children:Object(u.jsx)("div",{style:{height:"620px",width:"100%",marginTop:"10px",overflowY:"auto",backgroundColor:"whitesmoke"},children:Object(u.jsxs)(te.a,{celled:!0,size:"small",sortable:!0,striped:!0,style:{fontSize:"12px",backgroundColor:"whitesmoke"},children:[Object(u.jsx)(te.a.Header,{children:Object(u.jsx)(te.a.Row,{children:Object(u.jsx)(te.a.HeaderCell,{style:{width:"100px"},children:"Error Message"})},0)}),Object(u.jsx)(te.a.Body,{children:e.map((function(e){return t++,Object(u.jsx)(te.a.Row,{children:Object(u.jsx)(te.a.Cell,{style:{width:"100%"},warning:!0,verticalAlign:"top",children:e})},t)}))})]})})})},Se=function(){var e,t,n,s;o({data:{},inputBefore:"",inputAfter:"",inputBeforeArray:[],errors:[],macro:"",output:"",outputArray:[],level:"-",displayedLevel:0,evalOutput:"",savedEvalOutput:"",resultCaption:"no result",savedResultCaption:"no result",showP:!0,stateMessage:"",serverVersion:"unknown",currentTabStop:0,wasErrorAlerted:!1}),Object(r.useEffect)((function(){document.title="Jamal Debugger",ue()}),[]);var a=Object(r.useRef)({value:""}),i=Object(r.useRef)({value:""}),l=Object(u.jsx)(x.a,{container:!0,direction:"column",children:Object(u.jsxs)(x.a,{container:!0,direction:"row",justify:"space-around",alignContent:"center",children:[Object(u.jsx)(me,{onClick:function(){return c.setShowP(!c.showP)},caption:c.showP?"hide":"show",children:"\xb6"}),Object(u.jsx)(me,{onClick:ue,caption:"Refresh",children:Object(u.jsx)(A.a,{})}),Object(u.jsx)(me,{onClick:function(){return function(e){var t;return de.run(""+(null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.value)).then(ue)}(i)},caption:"Run",children:Object(u.jsx)(y.a,{})}),Object(u.jsx)(me,{onClick:be,caption:"Fetch",disabled:c.stateMessage===U,children:"{...}"}),Object(u.jsx)(me,{onClick:he,caption:"Step",children:Object(u.jsx)(C.a,{})}),Object(u.jsx)(me,{onClick:ve,caption:"Step In",children:Object(u.jsx)(k.a,{})}),Object(u.jsx)(me,{onClick:xe,caption:"Step out",children:Object(u.jsx)(T.a,{})})]})}),d=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x.a,{item:!0,xs:6,children:l}),Object(u.jsx)(x.a,{item:!0,xs:3,children:Object(u.jsx)(ge,{})}),Object(u.jsx)(x.a,{container:!0,direction:"row",xs:3,justify:"space-around",alignItems:"flex-end",alignContent:"flex-end",children:Object(u.jsx)(me,{onClick:Oe,caption:"Quit",color:"red",children:Object(u.jsx)(E.a,{})})})]}),j=Object(u.jsx)(O.a,{className:"App_Paper, App_MacroList",children:Object(u.jsx)(ne,{data:c.data})}),h=Object(u.jsx)(O.a,{className:"App_Paper, App_MacroList",children:Object(u.jsx)(re,{data:c.data,captionSetter:c.setResultCaption,contentSetter:c.setEvalOutput})}),g=Object(u.jsx)(x.a,{item:!0,xs:6,children:Object(u.jsxs)(O.a,{className:"App_Paper, run_input",children:[Object(u.jsx)("div",{style:{marginLeft:"5px",fontSize:"10pt",fontWeight:"bold"},children:"input"}),Object(u.jsx)(p,{text:c.stateMessage!==U?c.inputAfter:c.inputBefore,macro:c.stateMessage!==U?"":c.macro})]})}),w=Object(u.jsxs)(O.a,{className:"App_Paper",children:[Object(u.jsx)("div",{style:{marginLeft:"5px",fontSize:"10pt",fontWeight:"bold"},children:"output"}),Object(u.jsx)(p,{text:c.output})]}),S=Object(u.jsx)(O.a,{className:"App_Paper, App_Eval",children:Object(u.jsx)(v,{caption:"evaluate",reference:a})}),L=Object(u.jsx)(O.a,{className:"App_Paper, App_Eval",children:Object(u.jsx)(v,{caption:"breakpoints",reference:i,backgroundColor:"#ffe0e0",height:585})}),R=Object(u.jsx)(O.a,{className:"App_Paper, App_Eval",children:Object(u.jsx)(Ce,{})});return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)(x.a,{container:!0,direction:"row",children:Object(u.jsx)(W,{message:c.stateMessage})}),Object(u.jsx)(x.a,{container:!0,direction:"row",children:d}),Object(u.jsxs)(x.a,{container:!0,direction:"row",spacing:2,style:{width:"100%"},justify:"space-around",children:[g,Object(u.jsxs)(x.a,{item:!0,xs:6,children:[Object(u.jsxs)(f.a,{value:c.currentTabStop,onChange:function(e,t){var n;c.setCurrentTabStop(t),4!==t||null!==c&&void 0!==c&&null!==(n=c.errors)&&void 0!==n&&n.length?(2===c.currentTabStop&&(c.setSavedEvalOutput(c.evalOutput),c.setSavedResultCaption(c.resultCaption)),1===t&&c.setResultCaption("macro definition"),2===t&&(c.setEvalOutput(c.savedEvalOutput),c.setResultCaption(c.savedResultCaption))):c.setCurrentTabStop(c.currentTabStop)},className:"tab_panel",centered:!0,indicatorColor:"secondary",children:[Object(u.jsx)(m.a,{value:0,label:"built-in macros",disabled:c.stateMessage===J}),Object(u.jsx)(m.a,{value:1,label:"user defined",disabled:c.stateMessage===J}),Object(u.jsx)(m.a,{value:2,label:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(me,{onClick:function(){return function(e){var t;return de.execute(""+(null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.value)).then((function(e){if("object"!=typeof e.data){if(0===e.data.length){c.setEvalOutput("");var t="empty evaluation result";c.setResultCaption(t),c.setSavedEvalOutput(""),c.setSavedResultCaption(t)}else{var n=""+e.data,r="result";c.setEvalOutput(n),c.setResultCaption(r),c.setSavedEvalOutput(n),c.setSavedResultCaption(r)}document.title="Jamal Debugger"}else{var s,a;c.setEvalOutput((null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.message)+"\n"+(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.trace)),c.setResultCaption("error result"),document.title="Jamal Debugger (e)"}ue()}))}(a)},color:"blue",caption:"Evaluate",disabled:2!==c.currentTabStop||c.stateMessage===J,children:Object(u.jsx)(u.Fragment,{})})}),disabled:c.stateMessage===J}),Object(u.jsx)(m.a,{value:3,label:"breakpoints",disabled:c.stateMessage===J}),Object(u.jsx)(m.a,{value:4,label:(null===c||void 0===c||null===(e=c.errors)||void 0===e?void 0:e.length)>0?"error".concat(1===(null===c||void 0===c||null===(t=c.errors)||void 0===t?void 0:t.length)?"":"s"," (").concat(null===c||void 0===c||null===(n=c.errors)||void 0===n?void 0:n.length,")"):"",disabled:!(null!==c&&void 0!==c&&null!==(s=c.errors)&&void 0!==s&&s.length)||c.stateMessage===J})]}),Object(u.jsx)(b,{id:"0",hidden:0!==c.currentTabStop,other:"",children:j}),Object(u.jsx)(b,{id:"1",hidden:1!==c.currentTabStop,other:"",children:h}),Object(u.jsx)(b,{id:"2",hidden:2!==c.currentTabStop,other:"",children:S}),Object(u.jsx)(b,{id:"3",hidden:3!==c.currentTabStop,other:"",children:L}),Object(u.jsx)(b,{id:"4",hidden:4!==c.currentTabStop,other:"",children:R})]})]}),Object(u.jsxs)(x.a,{container:!0,direction:"row",spacing:2,style:{width:"100%"},justify:"space-around",children:[Object(u.jsx)(x.a,{item:!0,xs:6,children:w}),Object(u.jsx)(x.a,{item:!0,xs:6,children:1===c.currentTabStop||2===c.currentTabStop?Object(u.jsx)(we,{}):Object(u.jsx)(u.Fragment,{})})]}),Object(u.jsx)(x.a,{container:!0,direction:"row",spacing:2,style:{width:"100%"},justify:"space-around",children:Object(u.jsx)(x.a,{item:!0,xs:12,children:Object(u.jsxs)("div",{className:"App_LicenseLine",children:["Peter Verhas 2021, Apache License 2.0, ",Object(u.jsx)("a",{href:"https://github.com/verhas/jamal",children:"https://github.com/verhas/jamal"}),", "+ee()]})})})]})})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(Se,{})}),document.getElementById("root"))},96:function(e){e.exports=JSON.parse('{"name":"jamal-debug-ui","version":"1.12.4","private":true,"dependencies":{"@material-ui/core":"^4.12.3","@material-ui/data-grid":"*","@material-ui/icons":"^4.11.2","@material/tab-bar":"^13.0.0","@testing-library/jest-dom":"^5.15.0","@testing-library/react":"^12.1.2","@testing-library/user-event":"^13.5.0","@types/jest":"^27.0.3","@types/node":"^16.11.9","@types/react":"^17.0.35","@types/react-dom":"^17.0.11","axios":"^0.24.0","material-design-icons":"^3.0.1","qs":"^6.10.1","query-string":"^7.0.1","react":"^17.0.2","react-dom":"^17.0.2","react-scripts":"4.0.3","semantic-ui-css":"^2.4.1","semantic-ui-react":"^2.0.4","typescript":"^4.5.2","web-vitals":"^2.1.2"},"scripts":{"deploy":"./deployprod","start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')}},[[192,1,2]]]);
//# sourceMappingURL=main.ec768d07.chunk.js.map