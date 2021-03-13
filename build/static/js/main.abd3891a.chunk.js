(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,t,n){e.exports={Display:"Display_Display__3Fh70",result:"Display_result__kgAy9"}},13:function(e,t,n){e.exports={App:"App_App__16ZpL"}},16:function(e,t,n){e.exports={Button:"Button_Button__3gFiX"}},19:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),u=n.n(o),c=n(5),l=n(3),i=(n(30),n(13)),s=n.n(i),p=n(14),f=n(15),d=n(4),h=n(18),b=n(17),v=n(9),E=n.n(v),y=n(10),m=n.n(y),O=function(e){var t="Current value is "+e.result;return a.a.createElement("div",{className:m.a.Display},a.a.createElement("span",{className:m.a.result,role:"main","aria-label":t},e.result))},k=n(16),w=n.n(k),V=function(e){return a.a.createElement("button",{className:w.a.Button,onClick:e.onClick,"aria-label":e.value},e.value)},A=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).btnsVal=["C","\u221a","x\xb2","/","7","8","9","*","4","5","6","-","1","2","3","+",".","0","Del","="],r.keydownEventHandler=r.keydownEventHandler.bind(Object(d.a)(r)),r}return Object(f.a)(n,[{key:"keydownEventHandler",value:function(e){var t=e.key;this.btnsVal.includes(t)?this.clickEventHandler(t):"Backspace"===t?this.props.onBackspace():","===t?this.clickEventHandler("."):"Enter"===t&&this.props.onGetResult()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownEventHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownEventHandler)}},{key:"clickEventHandler",value:function(e){/(\d|\.)/.test(e)?this.props.onWriteSymbol(e):"Del"===e?this.props.onBackspace():"C"===e?this.props.onClear():"x\xb2"===e?this.props.onPow():"\u221a"===e?this.props.onSquareRoot():"+"===e?this.props.onAdd():"-"===e?this.props.onSubtract():"*"===e?this.props.onMultiply():"/"===e?this.props.onDivide():"="===e&&this.props.onGetResult()}},{key:"render",value:function(){var e=this,t=this.btnsVal.map((function(t,n){return a.a.createElement(V,{key:"".concat(n,"-").concat(t),value:t,onClick:function(){return e.clickEventHandler(t)}})}));return a.a.createElement("div",{className:E.a.Calculator},a.a.createElement(O,{result:"GET_RESULT"===this.props.operation?this.props.result:this.props.currentValue}),a.a.createElement("div",{className:E.a.btnsBlock},t))}}]),n}(r.Component),j=Object(c.b)((function(e){return{operation:e.operation,currentValue:e.currentValue,result:e.result}}),(function(e){return{onAdd:function(){return e({type:"ADD"})},onSubtract:function(){return e({type:"SUBTRACT"})},onMultiply:function(){return e({type:"MULTIPLY"})},onDivide:function(){return e({type:"DIVIDE"})},onPow:function(){return e({type:"EXPONENTIATION"})},onClear:function(){return e({type:"CLEAR_ALL"})},onBackspace:function(){return e({type:"BACKSPACE"})},onGetResult:function(){return e({type:"GET_RESULT"})},onWriteSymbol:function(t){return e(function(e){return{type:"WRITE_SYMBOL",symbol:e}}(t))},onSquareRoot:function(){return e({type:"SQUARE_ROOT"})}}}))(A),T=function(){return a.a.createElement("div",{className:s.a.App},a.a.createElement(j,null))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=n(1),D={operation:null,currentValue:0,result:0},L=function(e){switch(e.operation){case"ADD":return Number(e.result)+Number(e.currentValue);case"SUBTRACT":return e.result-e.currentValue;case"MULTIPLY":return e.result*e.currentValue;case"DIVIDE":return e.result/e.currentValue;default:return e.result}},S=function(e){return e.result&&!e.currentValue?Object(_.a)(Object(_.a)({},e),{},{result:Math.pow(e.result,2)}):Object(_.a)(Object(_.a)({},e),{},{currentValue:Math.pow(e.currentValue,2)})},R=function(e){return e.result&&!e.currentValue?Object(_.a)(Object(_.a)({},e),{},{result:Math.sqrt(e.result)}):Object(_.a)(Object(_.a)({},e),{},{currentValue:Math.sqrt(e.currentValue)})},B=function(e){return Object(_.a)(Object(_.a)({},e),{},{currentValue:1==="".concat(e.currentValue).length?0:e.currentValue.slice(0,-1)})},I=function(e,t){var n="."===t||"0"!=="".concat(e.currentValue)?e.currentValue+t:t,r=Array.from(n).filter((function(e){return"."===e})).length<2;return Object(_.a)(Object(_.a)({},e),{},{currentValue:r?n:e.currentValue})},U=function(e){return Object(_.a)(Object(_.a)({},e),{},{operation:"ADD",currentValue:0,result:e.operation?L(e):e.currentValue})},N=function(e){return Object(_.a)(Object(_.a)({},e),{},{operation:"SUBTRACT",currentValue:0,result:e.operation?L(e):e.currentValue})},W=function(e){return Object(_.a)(Object(_.a)({},e),{},{operation:"MULTIPLY",currentValue:0,result:e.operation?L(e):e.currentValue})},M=function(e){return Object(_.a)(Object(_.a)({},e),{},{operation:"DIVIDE",currentValue:0,result:e.operation?L(e):e.currentValue})},P=function(e){return Object(_.a)(Object(_.a)({},e),{},{operation:"GET_RESULT",currentValue:0,result:L(e)})},H=function(){return Object(_.a)({},D)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return U(e);case"SUBTRACT":return N(e);case"MULTIPLY":return W(e);case"DIVIDE":return M(e);case"SQUARE_ROOT":return R(e);case"EXPONENTIATION":return S(e);case"GET_RESULT":return P(e);case"CLEAR_ALL":return H();case"BACKSPACE":return B(e);case"WRITE_SYMBOL":return I(e,t.symbol);default:return e}},G=Object(l.b)(x);u.a.render(a.a.createElement(c.a,{store:G},a.a.createElement(T,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Calculator","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()},9:function(e,t,n){e.exports={Calculator:"Calculator_Calculator__95qDF",btnsBlock:"Calculator_btnsBlock__1Sp8W"}}},[[19,1,2]]]);
//# sourceMappingURL=main.abd3891a.chunk.js.map