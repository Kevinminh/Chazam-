(this.webpackJsonptest123=this.webpackJsonptest123||[]).push([[0],{27:function(e,a,t){e.exports=t(48)},32:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r),m=t(6),o=t(14),s=(t(32),t(1)),b=t(2),u=t(4),i=t(3),y=t(5),h=t(17),E=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(i.a)(a).call(this,e))).getUserName=t.getUserName.bind(Object(h.a)(t)),t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"getUserName",value:function(){var e=document.querySelector("#homePagePin").value;localStorage.setItem("userName",e),this.updateHTML()}},{key:"returnName",value:function(){return localStorage.getItem("userName")}},{key:"updateHTML",value:function(){var e=this.returnName;document.querySelector("#homePagePin").innerHTML=e}},{key:"render",value:function(){return l.a.createElement("div",{className:"homePageBackground"},l.a.createElement("div",{className:"homePageContainer"},l.a.createElement("div",{className:"homePageInput"},l.a.createElement("h2",{className:"homePageTitle"},"Chazam!"),l.a.createElement("div",{className:"homePageFormContainer"},l.a.createElement("form",{className:"homePageForm"},l.a.createElement("input",{className:"homePagePin",id:"gamePIN",placeholder:"Your name..."})),l.a.createElement("div",{className:"homePageBtns"},l.a.createElement(m.b,{className:"none white",to:"/join"},l.a.createElement("button",{className:"homePageJoin"},"Join")),l.a.createElement(m.b,{className:"none white",to:"/create"},l.a.createElement("button",{className:"homePageCreate"},"Create")))))))}}]),a}(n.Component),N=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"homePageFooter"},l.a.createElement("div",{className:""},l.a.createElement("p",null,"Create your own Chazam for ",l.a.createElement("b",null,"FREE")," at Chazam.com")),l.a.createElement("div",{className:"homePageTerms"},"Terms | Privacy")))}}]),a}(n.Component),P=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(N,null))}}]),a}(n.Component),d=t(7),p=t(18),v=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"homePageBackground"},l.a.createElement("div",{className:"homePageContainer"},l.a.createElement("div",{className:"homePageInput"},l.a.createElement("h2",{className:"homePageTitle"},"Chazam!"),l.a.createElement("div",{className:"homePageFormContainer"},l.a.createElement("button",{className:"createBtnPhoto",id:"enterBtn",type:"button"},l.a.createElement(m.b,{className:"none white",to:"/create/photos"},"Random photos")),l.a.createElement("button",{className:"createBtnFact"},l.a.createElement(m.b,{className:"none white",to:"/create/facts"},"Random facts")),l.a.createElement("button",{className:"createBtnDares"},l.a.createElement(m.b,{className:"none white",to:"/create/dares"},"Random dares")),l.a.createElement("button",{className:"createBtnTruth"},l.a.createElement(m.b,{className:"none white",to:"/create/truth"},"Random truth"))),l.a.createElement("div",{className:"crateArrowBtns"},l.a.createElement(m.b,{to:"/",className:"none grey"},l.a.createElement(d.Icon,{icon:p.ic_keyboard_backspace,size:40})))))))}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(N,null))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(i.a)(a).call(this,e))).handleKeyPress=function(e){var a=document.querySelector("#gamePIN"),t=a.value,n=document.querySelector("#error"),l=document.querySelector("#enterBtn"),r=document.querySelector("#enterLink");if("Enter"===e.key&&"2020"===t)a.setAttribute("class","homePagePinGreen"),n.setAttribute("class","hide"),e.preventDefault(),l.setAttribute("class","homePageJoin "),r.setAttribute("class","none white");else{if("Enter"!==e.key)return null;a.setAttribute("class","homePagePinRED"),n.setAttribute("class","error"),e.preventDefault()}},t.state={id:""},t.getText=t.getText.bind(Object(h.a)(t)),t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"getText",value:function(){var e=document.querySelector("#gamePIN"),a=e.value,t=document.querySelector("#error");"2020"===a?(e.setAttribute("class","homePagePinGreen"),t.setAttribute("class","hide")):(e.setAttribute("class","homePagePinRED"),t.setAttribute("class","error"))}},{key:"render",value:function(){return l.a.createElement("div",{className:"homePageBackground"},l.a.createElement("div",{className:"homePageContainer"},l.a.createElement("div",{className:"homePageInput"},l.a.createElement("h2",{className:"homePageTitle"},"Chazam!"),l.a.createElement("div",{className:"homePageFormContainer"},l.a.createElement("form",{className:"homePageForm"},l.a.createElement("input",{className:"homePagePin",id:"gamePIN",placeholder:"Game PIN",onKeyPress:this.handleKeyPress})),l.a.createElement("div",{className:"homePageBtns"},l.a.createElement(m.b,{id:"enterLink",className:"none white disabled",to:"/game/2020"},l.a.createElement("button",{id:"enterBtn",className:"homePageJoinDisabled disabled"},"Join")))),l.a.createElement("span",{className:"hide",id:"error"},l.a.createElement("p",null,"Error! You did not enter the correct game PIN.")),l.a.createElement("div",{className:"crateArrowBtns"},l.a.createElement(m.b,{to:"/",className:"none grey"},l.a.createElement(d.Icon,{icon:p.ic_keyboard_backspace,size:40}))))))}}]),a}(n.Component),O=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(N,null))}}]),a}(n.Component),g=t(11),Y=t(12),I=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=Math.floor(1e5*Math.random())+9e5;return l.a.createElement("div",{className:"lobbyPage"},l.a.createElement("div",{className:"mainLobby"},l.a.createElement(m.b,{className:"white none",to:"/"},l.a.createElement(d.Icon,{className:"lobbyCloseIcon",icon:g.close,size:35})),l.a.createElement("div",{className:"lobbyPin"},l.a.createElement("h2",{className:"lobbyPinH2"},"Game PIN"),l.a.createElement("h2",{className:"lobbyPinH1"},e),l.a.createElement("button",{className:"lobbyInvite"},"Invite friends",l.a.createElement(d.Icon,{style:{marginLeft:"10px"},icon:Y.group,size:15}))),l.a.createElement("div",{className:"lobbyPlayers"},l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name")),l.a.createElement("div",{className:"lobbyBtns"},l.a.createElement("button",{className:"lobbyStart"},"Start game")),l.a.createElement("form",{className:"lobbyChat"},l.a.createElement("input",{className:"lobbyChatInput",placeholder:"Send a chat"}))))}}]),a}(n.Component),C=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(I,null))}}]),a}(n.Component),k=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=Math.floor(1e5*Math.random())+9e5;return l.a.createElement("div",{className:"lobbyPage"},l.a.createElement("div",{className:"lobbyPhoto"},l.a.createElement(m.b,{className:"white none",to:"/"},l.a.createElement(d.Icon,{className:"lobbyCloseIcon",icon:g.close,size:35})),l.a.createElement("div",{className:"lobbyPin"},l.a.createElement("h2",{className:"lobbyPinH2"},"Game PIN"),l.a.createElement("h2",{className:"lobbyPinH1",id:"lobbyPinH1"},e),l.a.createElement("button",{className:"lobbyInvite",onClick:this.generateRandomNumber},"Invite friends",l.a.createElement(d.Icon,{style:{marginLeft:"10px"},icon:Y.group,size:15}))),l.a.createElement("div",{className:"lobbyPlayers"},l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name")),l.a.createElement("div",{className:"lobbyBtns"},l.a.createElement("button",{className:"lobbyStart"},"Start game")),l.a.createElement("form",{className:"lobbyChat"},l.a.createElement("input",{className:"lobbyChatInput",placeholder:"Send a chat"}))))}}]),a}(n.Component),S=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,null))}}]),a}(n.Component),w=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=Math.floor(1e5*Math.random())+9e5;return l.a.createElement("div",null,l.a.createElement("div",{className:"lobbyPage"},l.a.createElement("div",{className:"lobbyFacts"},l.a.createElement(m.b,{className:"white none",to:"/"},l.a.createElement(d.Icon,{className:"lobbyCloseIcon",icon:g.close,size:35})),l.a.createElement("div",{className:"lobbyPin"},l.a.createElement("h2",{className:"lobbyPinH2"},"Game PIN"),l.a.createElement("h2",{className:"lobbyPinH1"},e),l.a.createElement("button",{className:"lobbyInvite"},"Invite friends",l.a.createElement(d.Icon,{style:{marginLeft:"10px"},icon:Y.group,size:15}))),l.a.createElement("div",{className:"lobbyPlayers"},l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name")),l.a.createElement("div",{className:"lobbyBtns"},l.a.createElement("button",{className:"lobbyStart"},"Start game")),l.a.createElement("form",{className:"lobbyChat"},l.a.createElement("input",{className:"lobbyChatInput",placeholder:"Send a chat"})))))}}]),a}(n.Component),B=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,null))}}]),a}(n.Component),z=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=Math.floor(1e5*Math.random())+9e5;return l.a.createElement("div",null,l.a.createElement("div",{className:"lobbyPage"},l.a.createElement("div",{className:"lobbyDares"},l.a.createElement(m.b,{className:"white none",to:"/"},l.a.createElement(d.Icon,{className:"lobbyCloseIcon",icon:g.close,size:35})),l.a.createElement("div",{className:"lobbyPin"},l.a.createElement("h2",{className:"lobbyPinH2"},"Game PIN"),l.a.createElement("h2",{className:"lobbyPinH1"},e),l.a.createElement("button",{className:"lobbyInvite"},"Invite friends",l.a.createElement(d.Icon,{style:{marginLeft:"10px"},icon:Y.group,size:15}))),l.a.createElement("div",{className:"lobbyPlayers"},l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name")),l.a.createElement("div",{className:"lobbyBtns"},l.a.createElement("button",{className:"lobbyStart"},"Start game")),l.a.createElement("form",{className:"lobbyChat"},l.a.createElement("input",{className:"lobbyChatInput",placeholder:"Send a chat"})))))}}]),a}(n.Component),x=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(z,null))}}]),a}(n.Component),H=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=Math.floor(1e5*Math.random())+9e5;return l.a.createElement("div",null,l.a.createElement("div",{className:"lobbyPage"},l.a.createElement("div",{className:"lobbyTruth"},l.a.createElement(m.b,{className:"white none",to:"/"},l.a.createElement(d.Icon,{className:"lobbyCloseIcon",icon:g.close,size:35})),l.a.createElement("div",{className:"lobbyPin"},l.a.createElement("h2",{className:"lobbyPinH2"},"Game PIN"),l.a.createElement("h2",{className:"lobbyPinH1"},e),l.a.createElement("button",{className:"lobbyInvite"},"Invite friends",l.a.createElement(d.Icon,{style:{marginLeft:"10px"},icon:Y.group,size:15}))),l.a.createElement("div",{className:"lobbyPlayers"},l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name"),l.a.createElement("h3",{className:"lobbyPlayer"},"Your name")),l.a.createElement("div",{className:"lobbyBtns"},l.a.createElement("button",{className:"lobbyStart"},"Start game")),l.a.createElement("form",{className:"lobbyChat"},l.a.createElement("input",{className:"lobbyChatInput",placeholder:"Send a chat"})))))}}]),a}(n.Component),M=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(H,null))}}]),a}(n.Component);var T=function(){return l.a.createElement(m.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:P}),l.a.createElement(o.a,{exact:!0,path:"/create",component:f}),l.a.createElement(o.a,{exact:!0,path:"/join",component:O}),l.a.createElement(o.a,{path:"/game/:id",component:C}),l.a.createElement(o.a,{exact:!0,path:"/create/photos",component:S}),l.a.createElement(o.a,{exact:!0,path:"/create/facts",component:B}),l.a.createElement(o.a,{exact:!0,path:"/create/dares",component:x}),l.a.createElement(o.a,{exact:!0,path:"/create/truth",component:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.720cc047.chunk.js.map