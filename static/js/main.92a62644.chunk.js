(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),s=n(3),l=n(5),i=n(4),r=n(1),d=n.n(r),u=(n(12),n(0)),k=function(t){Object(l.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={today:(new Date).toUTCString().slice(-12,-4)},t.renewalData=0,t.addDate=function(){t.setState({today:(new Date).toUTCString().slice(-12,-4)}),console.info(t.state.today)},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.renewalData=window.setInterval((function(){t.addDate()}),1e3)}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.renewalData)}},{key:"render",value:function(){var t=this.props.clockName;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.state.today})]})}}]),n}(d.a.Component),m=function(t){Object(l.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t.timerId=0,t.setClock=function(){t.setState({clockName:t.getRandomName()})},t.deleteClock=function(){t.setState({hasClock:!0})},t.addClock=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.getRandomName=function(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.setClock,3300),document.addEventListener("click",this.deleteClock),document.addEventListener("contextmenu",this.addClock)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(u.jsx)(k,{clockName:this.state.clockName,hasClock:this.state.hasClock})]})}}]),n}(d.a.Component);a.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.92a62644.chunk.js.map