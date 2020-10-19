(this["webpackJsonpjorge-site"]=this["webpackJsonpjorge-site"]||[]).push([[0],{136:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(1),o=a.n(r),c=a(137);t.default=function(e){var t=e.children,a=e.options,r=e.visible,i=e.cb,l=Object.entries(a);return o.a.createElement(c.default,{anchor:t,visible:r,cb:i},o.a.createElement("ul",{className:"options-list"},l.map((function(e){var t=Object(n.a)(e,2),a=t[0],r=t[1];return o.a.createElement("li",{key:a,className:"option-option",onClick:function(){return r.cb()}},o.a.createElement("span",null,a),o.a.createElement("i",{className:r.icon}))}))))}},137:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n);t.default=function(e){var t=e.children,a=e.anchor,o=e.visible,c=e.cb,i=Object(n.useRef)(null),l=Object(n.useRef)(null),s=Object(n.useCallback)((function(){o&&(c(),document.removeEventListener("click",s))}),[o,c]);return Object(n.useEffect)((function(){var e=i.current,t=e.clientWidth,a=e.style,n=l.current.clientWidth;a.left=-1*(t-n)+"px",o?document.addEventListener("click",s):document.removeEventListener("click",s)}),[o,s]),r.a.createElement("div",{className:"dropdown-container",ref:l},a,r.a.createElement("div",{style:{visibility:o?"visible":"hidden"},className:"dropdown",ref:i},t))}},138:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(1),o=a.n(r),c=a(61);t.default=function(e){var t=e.navLinks,a=e.background,i=e.hoverBackground,l=e.linkColor,s=e.logo,u=e.children,d=Object(r.useState)(-1),m=Object(n.a)(d,2),p=m[0],f=m[1],b=Object(r.useState)(!1),v=Object(n.a)(b,2),h=v[0],E=v[1];return o.a.createElement("nav",{className:"responsive-toolbar",style:{background:a}},o.a.createElement("ul",{style:{background:a},className:h?"active":""},o.a.createElement("figure",{onClick:function(){return E(!h)}},o.a.createElement("img",{src:s,height:"40px",width:"40px",alt:"logo-nav-toggler"})),t.map((function(e,t){return o.a.createElement("li",{key:t,onMouseEnter:function(){return f(t)},onMouseLeave:function(){return f(-1)},style:{background:p===t?i||"#999":""}},o.a.createElement(c.a,{to:e.path,style:{color:l}},e.text,o.a.createElement("i",{className:e.icon})))})),u))}},237:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},239:function(e,t,a){e.exports=a(573)},244:function(e,t,a){},256:function(e,t,a){var n={"./Chart.jsx":48,"./Dropdown.jsx":137,"./EChart.jsx":49,"./Line.jsx":551,"./OptionsDropdown.jsx":136,"./PercentageBar.jsx":552,"./ResponsiveNavigation.jsx":138,"./Tree.jsx":553};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=256},48:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var n=a(17),r=a(28),o=a(1),c=a.n(o),i=a(136);function l(e){var t=e.children,a=e.config,l=(e.resize,Object(r.a)({},a)),s=l.height,u=l.width,d=Object(o.useState)(!1),m=Object(n.a)(d,2),p=m[0],f=m[1];return c.a.createElement("section",{className:"chart",style:{height:s,width:u}},c.a.createElement("section",{className:"chart-header-container"},c.a.createElement("span",null,a.title),c.a.createElement("span",{className:"options-container"},c.a.createElement(i.default,{options:{FullScreen:{icon:"ion-ios-expand",cb:function(){}},"Export to CSV":{icon:"ion-ios-filing",cb:function(){}}},visible:p,cb:function(){return f(!1)}},c.a.createElement("i",{className:"ion-ios-more",onClick:function(){return f(!p)}})))),t)}},49:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(1),o=a.n(r),c=a(100),i=a.n(c);t.default=function(e){var t=e.option,a=e.resize,c=Object(r.useRef)(null),l=Object(r.useState)(c),s=Object(n.a)(l,2),u=s[0],d=s[1];return Object(r.useEffect)((function(){a&&u.resize(),u.current?d(i.a.init(c.current)):u.setOption(t)}),[t,u,a]),o.a.createElement("div",{className:"chart",ref:c})}},551:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(100),c=a.n(o),i=a(49),l=a(48);t.default=function(e){var t=e.config,a=e.resize,n=t.data,o=n.reduce((function(e,a){return e.xAxis.push(a[t.xAxis]),t.yAxes.forEach((function(n,r){e.yAxes[r]?e.yAxes[r].push(a[t.yAxes[r]]):e.yAxes.push([a[t.yAxes[r]]])})),e}),{xAxis:[],yAxes:[]}),s=o.xAxis,u=o.yAxes,d=["#2d8cf0","#FFD60A","#BF5AF2","#FF443A","#FF9F0C","#31D158"],m={tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#ddd"}},backgroundColor:"rgba(255,255,255,1)",padding:[5,10],textStyle:{color:"#7588E4"},extraCssText:"box-shadow: 0 0 5px rgba(0,0,0,0.3)"},xAxis:{type:"category",data:s,boundaryGap:!1,splitLine:{show:!0,interval:"auto",lineStyle:{color:["#D4DFF5"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#609ee9"}},axisLabel:{margin:10,textStyle:{fontSize:14}}},yAxis:{type:"value",splitLine:{lineStyle:{color:["#D4DFF5"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#609ee9"}},axisLabel:{margin:10,textStyle:{fontSize:14}}},series:u.map((function(e,a){return{name:t.yNames[a],type:"line",smooth:!0,showSymbol:!1,symbol:"circle",symbolSize:6,data:e,areaStyle:{normal:{color:new c.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:d[a]},{offset:1,color:"rgba(199, 237, 250,0.2)"}],!1)}},itemStyle:{normal:{color:d[a]}},lineStyle:{normal:{width:3}}}}))};return r.a.createElement(l.default,{config:t,resize:a},n&&r.a.createElement(i.default,{option:m,config:t,resize:a}))}},552:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(48),c=a(49);t.default=function(e){var t=e.config,a=e.resize,n=t.data,i={color:["#2d8cf0","#FFD60A","#BF5AF2","#FF443A","#FF9F0C","#31D158"],legend:{x:"center"},tooltip:{show:!0,trigger:"item",formatter:"{a} : <br />{c}%"},polar:{center:["50%","50%"],radius:"150%"},angleAxis:{show:!1,startAngle:90,min:0,max:100},radiusAxis:{type:"category",show:!1,data:["4\u7ea7\u6743\u91cd\u5a92\u4f53","3\u7ea7\u6743\u91cd\u5a92\u4f53","5\u7ea7\u6743\u91cd\u5a92\u4f53"]},series:n.map((function(e){return{type:"bar",name:e.title,coordinateSystem:"polar",barWidth:20,barCategoryGap:"30%",data:[e.value]}}))};return r.a.createElement(o.default,{config:t,resize:a},n&&r.a.createElement(c.default,{option:i,config:t,resize:a}))}},553:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(48),c=a(49);t.default=function(e){var t=e.config,a=e.resize,n=t.data,i={tooltip:{trigger:"item",triggerOn:"mousemove"},grid:{left:"10%"},series:[{type:"tree",data:[n],top:"1%",left:t.left,bottom:"1%",right:"20%",symbolSize:7,label:{normal:{position:"left",verticalAlign:"middle",align:"right",fontSize:9}},leaves:{label:{normal:{position:"right",verticalAlign:"middle",align:"left"}}},expandAndCollapse:!0,animationDuration:550,animationDurationUpdate:750}]};return r.a.createElement(o.default,{config:t,resize:a},n&&r.a.createElement(c.default,{option:i,config:t,resize:a}))}},554:function(e,t,a){},555:function(e,t,a){},573:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(99),c=a.n(o),i=(a(244),a(61)),l=a(237),s=a.n(l);a(250);function u(){return r.a.createElement("div",null,r.a.createElement("p",null,"Home"),r.a.createElement("p",null,"Jorge Melchor Data Science Python/R/Java/"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-group col-sm-3"},r.a.createElement("input",{type:"number",placeholder:"Temparature...",className:"form-control"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"\xb0C"))),r.a.createElement("div",{className:"input-group col-sm-3"},r.a.createElement("input",{type:"number",placeholder:"Humidity...",className:"form-control"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"%"))),r.a.createElement("div",{className:"input-group col-sm-3"},r.a.createElement("input",{type:"number",placeholder:"Potentio...",className:"form-control"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"#")))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-lg from-control col-sm-6",style:{maxWith:"350px",backgroundColor:"purple",color:"white"}},"POST")),r.a.createElement("div",{className:"App"},r.a.createElement("script",{src:"https://cdn.plot.ly/plotly-latest.min.js"}),r.a.createElement("div",{id:"plot"}),r.a.createElement("script",{src:"plots.js"}),r.a.createElement("select",{id:"selDataset",onchange:"getData(this.value)"},r.a.createElement("option",null,"---"),r.a.createElement("option",{value:"dataset1"},"DataSet1"),r.a.createElement("option",{value:"dataset2"},"DataSet2"),r.a.createElement("option",{value:"dataset3"},"DataSet3"))))}function d(){return r.a.createElement("div",null,r.a.createElement("p",null,"About"))}function m(){return r.a.createElement("div",null,r.a.createElement("p",null,"Contact Information"))}var p=a(17),f=a(38);function b(e){var t=e.dashboardName,o=e.axios,c=Object(f.c)((function(e){return e.DashboardReducer.config})),i=Object(f.b)(),l=Object(n.useState)(!1),s=Object(p.a)(l,2),u=s[0],d=s[1],m=Object(n.useState)(0),b=Object(p.a)(m,2),v=b[0],h=b[1],E=Object(n.useCallback)((function(){v&&window.cancelAnimationFrame(v),h(window.requestAnimationFrame((function(){d(!0),setTimeout((function(){d(!1)}),0)})))}),[d,v]);return Object(n.useEffect)((function(){return window.addEventListener("resize",E,{passive:!0}),o.get("/api/dashboard/".concat(t)).then((function(e){var t=e.data;i({type:"SET_CONFIG",payload:t});t.forEach((function(e,t){!function(e,t){var a=e.endpoint;o.get(a).then((function(e){var a=e.data;i({type:"SET_DATA",payload:[t,a]})}))}(e,t)}))})),function(){window.removeEventListener("resize",E,{passive:!0})}}),[]),r.a.createElement("section",{className:"dashboard"},c&&c.map((function(e,t){var n=a(256)("./".concat(e.type,".jsx")).default;return e.data?r.a.createElement(n,{config:e,key:t,resize:u}):""})))}var v=a(138);function h(e){var t=e.axios,a=(e.history,Object(f.c)((function(e){return e.DashboardReducer.dashboardList}))),o=Object(f.b)(),c=t.get("/api/dashboard-list");return Object(n.useEffect)((function(){c.then((function(e){var t=e.data;o({type:"SET_DASHBOARD_LIST",payload:t})}))}),[]),r.a.createElement("section",{class:"dashboard-selector"},a&&a.map((function(e){return r.a.createElement(i.a,{to:"/analytics/".concat(e.path),class:"dashboard-card"},r.a.createElement("h3",{class:"dash-title"},e.title),r.a.createElement("p",{class:"dash-description"},e.description))})))}a(554),a(555);var E=a(141),g=a.n(E);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v.default,{navLinks:[{text:"Home",path:"/",icon:"ion-ios-stats"},{text:"About",path:"/about",icon:"ion-ios-finger-print"},{text:"Contact",path:"/contact",icon:"ion-ios-send"},{text:"Analytics",path:"/analytics",icon:"ion-ios-pulse"}],logo:s.a,background:"#fff",hoverBackground:"#ddd",linkColor:"#777"}),r.a.createElement(i.b,null,r.a.createElement(u,{path:"/"}),r.a.createElement(d,{path:"/about"}),r.a.createElement(m,{path:"/contact"}),r.a.createElement(b,{axios:g.a,path:"/analytics/:dashboardName"}),r.a.createElement(h,{axios:g.a,path:"/analytics"})))},x=a(60),j=a(28),O={config:[]},S={SET_DATA:function(e,t){var a=Object(p.a)(t,2),n=a[0],r=a[1];return Object(j.a)(Object(j.a)({},e),{},{config:e.config.map((function(e,t){return t===n&&(e.data=r),e}))})},SET_CONFIG:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{config:t})},SET_DASHBOARD_LIST:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{dashboardList:t})}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;return S[a]?S[a](e,n):Object(j.a)({},e)},N=Object(x.b)({DashboardReducer:A}),w=Object(x.c)(N);w.subscribe((function(){console.log("Store updated: ",w.getState())}));var k=w;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f.a,{store:k},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[239,1,2]]]);
//# sourceMappingURL=main.9e4dc14f.chunk.js.map