(this.webpackJsonpuserportal=this.webpackJsonpuserportal||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(7),r=a.n(i),l=(a(14),a(15),a(16),a(3)),o=a(1),c=a(2),u=a(5),h=a(4),m=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"login",value:function(e,t){return fetch("https://apertum-interview.herokuapp.com/api/user/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({accountId:e,pswd:t})}).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw localStorage.removeItem("token"),Error(e.statusText)})).then((function(e){if(e.error_message)throw Error(e.error_message);return localStorage.setItem("token",JSON.stringify(e.token)),e}))}},{key:"logout",value:function(){localStorage.removeItem("token")}},{key:"isValidSession",value:function(){return JSON.parse(localStorage.getItem("token"))}}]),e}()),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{style:{color:"#fff",background:"black"}},s.a.createElement("h2",null,this.props.accountId),s.a.createElement("div",null,this.props.firstName+" "+this.props.lastName),s.a.createElement("div",null,this.props.age))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"user-container"},this.props.userData.map((function(e,t){return s.a.createElement(d,{firstName:e.firstName,lastName:e.lastName,age:e.age,accountId:e.accountId,desc:e.desc})})))}}]),a}(n.Component);function g(){var e=JSON.parse(localStorage.getItem("token"));return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{}}var v=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"getUsers",value:function(){return fetch("https://apertum-interview.herokuapp.com/api/users",{headers:g()})}}]),e}()),p=a(8),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).createRefs(),n.rangeChangeEvent=n.rangeChangeEvent.bind(Object(c.a)(n)),n.valueClicked=n.valueClicked.bind(Object(c.a)(n)),n.state={min:e.min?e.min:0,max:e.max?e.max:120,start:e.start?e.start:e.min?e.min:0,startInclusive:!!e.startInclusive,end:e.end?e.end:e.max?e.max:120,endInclusive:!!e.endInclusive},n.state.bubble1Pos=Number(100*(n.state.start-n.state.min)/(n.state.max-n.state.min)),n.state.bubble2Pos=Number(100*(n.state.end-n.state.min)/(n.state.max-n.state.min)),n}return Object(o.a)(a,[{key:"createRefs",value:function(){this.slider1Ref=s.a.createRef(),this.slider2Ref=s.a.createRef()}},{key:"rangeChangeEvent",value:function(e){var t=parseFloat(this.slider1Ref.current.value),a=parseFloat(this.slider2Ref.current.value),n=t>a?[a,t]:[t,a],s=Object(p.a)(n,2);this.state.start=s[0],this.state.end=s[1],this.setState({bubble2Pos:Number(100*(this.state.end-this.state.min)/(this.state.max-this.state.min))}),this.setState({bubble1Pos:Number(100*(this.state.start-this.state.min)/(this.state.max-this.state.min))}),this.props.onChange(this.state.start,this.state.startInclusive,this.state.end,this.state.endInclusive)}},{key:"valueClicked",value:function(e){var t=e.target.getAttribute("type"),a={};a[t]=!this.state[t],this.state[t]=!this.state[t],this.setState(a),this.props.onChange(this.state.start,this.state.startInclusive,this.state.end,this.state.endInclusive)}},{key:"render",value:function(){return s.a.createElement("div",{className:"range-picker-container"},s.a.createElement("div",{className:"range-value",id:"range1Bubble",style:{left:this.state.bubble1Pos+"%"}},s.a.createElement("span",{className:this.state.startInclusive?"selectedBubble":"",type:"startInclusive",onClick:this.valueClicked},this.state.start)),s.a.createElement("input",{ref:this.slider1Ref,type:"range",defaultValue:this.state.start,min:this.state.min,max:this.state.max,step:"1",onChange:this.rangeChangeEvent}),s.a.createElement("div",{className:"range-value",id:"range2Bubble",style:{left:this.state.bubble2Pos+"%"}},s.a.createElement("span",{className:this.state.endInclusive?"selectedBubble":"",type:"endInclusive",selected:this.state.endInclusive,onClick:this.valueClicked},this.state.end)),s.a.createElement("input",{ref:this.slider2Ref,type:"range",defaultValue:this.state.end,min:this.state.min,max:this.state.max,step:"1",onChange:this.rangeChangeEvent}))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).nameChanged=e.nameChanged.bind(Object(c.a)(e)),e.handleAgeFilterChange=e.handleAgeFilterChange.bind(Object(c.a)(e)),e.filterBtnClicked=e.filterBtnClicked.bind(Object(c.a)(e)),e.state={name:"",nameLengthStart:0,nameLengthEnd:30,ageStart:30,startInclusive:!0,ageEnd:70,endInclusive:!1},e}return Object(o.a)(a,[{key:"nameChanged",value:function(e){this.setState({name:e.target.value})}},{key:"handleAgeFilterChange",value:function(e,t,a,n){this.setState({ageStart:e}),this.setState({startInclusive:t}),this.setState({ageEnd:a}),this.setState({endInclusive:n})}},{key:"filterBtnClicked",value:function(){this.filters=[],this.getNameFilter(),this.geAgeFilter(),this.props.onFilter(this.filters)}},{key:"getNameFilter",value:function(){this.state.name&&this.filters.push({field:"firstName",type:"eq",value:this.state.name})}},{key:"geAgeFilter",value:function(){this.filters.push({field:"age",type:"range",start:{point:this.state.ageStart,inclusive:this.state.startInclusive},end:{point:this.state.ageEnd,inclusive:this.state.endInclusive}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"filter-pane"},s.a.createElement("div",{className:"filter-criteria"},s.a.createElement("div",null,"Name"),s.a.createElement("input",{className:"input-el",type:"text",onChange:this.nameChanged}),s.a.createElement(b,{min:"0",max:"100",start:"30",end:"70"})),s.a.createElement("div",{className:"filter-criteria"},s.a.createElement("div",null,"Age"),s.a.createElement(b,{min:"0",max:"100",start:"30",end:"70",startInclusive:!0,onChange:this.handleAgeFilterChange})),s.a.createElement("div",{style:{"border-top":"solid 1px lightgray","margin-top":"20px",padding:"10px"}},s.a.createElement("button",{className:"btn",style:{float:"right"},onClick:this.filterBtnClicked},"Filter")))}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).logoutClicked=n.logoutClicked.bind(Object(c.a)(n)),n.state={},n}return Object(o.a)(a,[{key:"logoutClicked",value:function(){m.logout(),this.props.onLogout()}},{key:"render",value:function(){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"header-action"},s.a.createElement("button",{className:"btn",onClick:this.logoutClicked},"Logout")))}}]),a}(n.Component),E=function(){var e,t,a=function(){t.forEach((function(t){switch(t.type){case"range":!function(t){e=e.filter((function(e){return e[t.field]>=t.start.point})).filter((function(e,a){return e[t.field]<=t.end.point})),t.start.inclusive||(e=e.filter((function(e){return e[t.field]!=t.start.point}))),t.end.inclusive||(e=e.filter((function(e){return e[t.field]!=t.end.point})))}(t);break;default:!function(t){e=e.filter((function(e){return"string"==typeof e[t.field]?e[t.field].toLowerCase()==t.value.toLowerCase():e[t.field]==t.value}))}(t)}}))};return{filter:function(n,s){return e=n,t=s,a.call(this),e}}}(),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).filterUsers=e.filterUsers.bind(Object(c.a)(e)),e.onLogout=e.onLogout.bind(Object(c.a)(e)),e.state={},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.getUsers().then((function(e){return e.json()})).then((function(t){e.users=t,e.setState({users:e.users}),e.setState({usersFetched:!0})}))}},{key:"filterUsers",value:function(e){var t=E.filter(this.users,e);this.setState({users:t})}},{key:"onLogout",value:function(){this.props.onLogout()}}]),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"user-portal"},s.a.createElement(C,{onLogout:this.onLogout}),s.a.createElement("div",{className:"user-portal-body"},s.a.createElement("div",{className:"filter-pane-component"},s.a.createElement(k,{onFilter:this.filterUsers})),this.state.usersFetched?s.a.createElement(f,{userData:this.state.users}):s.a.createElement("div",null,"Getting users...")))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).loginBtnClicked=n.loginBtnClicked.bind(Object(c.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(c.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(c.a)(n)),n.state={username:"",password:""},n}return Object(o.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"loginBtnClicked",value:function(e){var t=this;m.login(this.state.username,this.state.password).then((function(e){if(e.error_message)throw Error(e.error_message);alert("login successful"),t.props.onLogin()})).catch((function(e){alert(e)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"login-container"},s.a.createElement("div",{className:"user-name-class"},s.a.createElement("label",null,"Username"),s.a.createElement("input",{className:"input-el",type:"text",onChange:this.onChangeUsername})),s.a.createElement("div",{className:"pwd-class"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{className:"input-el",type:"password",onChange:this.onChangePassword})),s.a.createElement("div",{className:"login-btn-class"},s.a.createElement("button",{className:"btn",onClick:this.loginBtnClicked},"Login")))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onLogin=n.onLogin.bind(Object(c.a)(n)),n.onLogout=n.onLogout.bind(Object(c.a)(n)),n.state={isValidSession:m.isValidSession()},n}return Object(o.a)(a,[{key:"isValidToken",value:function(){return m.isValidSession()}},{key:"onLogout",value:function(){this.setState({isValidSession:m.isValidSession()})}},{key:"onLogin",value:function(){this.setState({isValidSession:m.isValidSession()})}},{key:"render",value:function(){return s.a.createElement("div",{className:"user-app-container"},this.state.isValidSession?s.a.createElement(j,{onLogout:this.onLogout}):s.a.createElement(y,{onLogin:this.onLogin}))}}]),a}(n.Component);var N=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d91b9ff9.chunk.js.map