(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,,,function(t,e,n){t.exports={button:"Button_button__QeKiB"}},function(t,e,n){t.exports={"goal-item":"CourseGoalItem_goal-item__19kUO","list-spacing":"CourseGoalItem_list-spacing__2LeE1"}},function(t,e,n){t.exports={"form-control":"CourseInput_form-control__3p_Ow",invalid:"CourseInput_invalid__2vkzZ"}},,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(9),i=n.n(a),l=(n(19),n(10)),o=n(3),s=n(6),r=n.n(s),h=n(0),d=function(t){return Object(h.jsx)("li",{className:"".concat(r.a["goal-item"]," ").concat(r.a["list-spacing"]),onClick:function(){t.onDelete(t.id)},children:t.children})},u=(n(21),function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"text-gradient",style:{textAlign:"center",fontWeight:"bold"},children:"Tap the goal to delete, once task completed!"}),Object(h.jsx)("ul",{className:"goal-list",children:t.items.map((function(e){return Object(h.jsxs)(d,{className:"list-spacing",id:e.id,onDelete:t.onDeleteItem,children:[Object(h.jsx)("span",{children:e.text}),Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(h.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]},e.id)}))})]})}),j=n(5),b=n.n(j),x=function(t){return Object(h.jsx)("button",{type:t.type,className:b.a.button,onClick:t.onClick,children:t.children})},g=n(7),p=n.n(g),f=function(t){var e=Object(c.useState)(""),n=Object(o.a)(e,2),a=n[0],i=n[1],l=Object(c.useState)(!0),s=Object(o.a)(l,2),r=s[0],d=s[1];return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==a.trim().length?(t.onAddGoal(a),i("")):d(!1)},children:[Object(h.jsxs)("div",{className:"".concat(p.a["form-control"]," ").concat(!r&&p.a.invalid),children:[Object(h.jsx)("label",{style:{fontWeight:"bold",fontSize:"20px"},children:"Goals"}),Object(h.jsx)("input",{type:"text",onChange:function(t){t.target.value.trim().length>0&&d(!0),i(t.target.value)},value:a})]}),Object(h.jsxs)(x,{type:"submit",children:[Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-square",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(h.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})]}),"\xa0 Add Goal"]}),Object(h.jsxs)("a",{className:b.a.button,href:"https://github.com/rubanero14/React-Lessons-Section7-Debugging-React-Apps",target:"_blank",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-filetype-jsx",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.075 14.841a1.13 1.13 0 0 0 .401.823c.13.108.288.192.478.252.19.061.411.091.665.091.338 0 .624-.053.858-.158.237-.105.416-.252.54-.44a1.17 1.17 0 0 0 .187-.656c0-.224-.045-.41-.135-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.565-.21l-.621-.144a.97.97 0 0 1-.405-.176.37.37 0 0 1-.143-.299c0-.156.061-.284.184-.384.125-.101.296-.152.513-.152.143 0 .266.023.37.068a.624.624 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.199-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.552.05-.776.15-.225.099-.4.24-.528.421-.127.182-.19.395-.19.639 0 .201.04.376.123.524.082.149.199.27.351.367.153.095.332.167.54.213l.618.144c.207.049.36.113.462.193a.387.387 0 0 1 .153.326.512.512 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.224-.013-.32-.04a.837.837 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM0 14.791c0 .165.027.32.082.466.055.147.136.277.243.39.11.113.245.202.407.267.164.062.354.093.569.093.42 0 .748-.115.984-.346.238-.23.358-.565.358-1.004v-2.725h-.791v2.745c0 .201-.046.357-.138.466-.092.11-.233.164-.422.164a.499.499 0 0 1-.454-.246.576.576 0 0 1-.073-.27H0Zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z"})}),"\xa0 Source Code"]})]})},m=(n(22),function(){var t=Object(c.useState)([{text:"Do all exercises!",id:"g1"},{text:"Finish the course!",id:"g2"}]),e=Object(o.a)(t,2),n=e[0],a=e[1],i=n.length,s=Object(h.jsx)("p",{className:"text-gradient",style:{textAlign:"center",fontWeight:"bold"},children:"No goals found. Maybe add one?"});return n.length>0&&(s=Object(h.jsx)(u,{items:n,onDeleteItem:function(t){a((function(e){return e.filter((function(e){return e.id!==t}))}))}})),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{style:{fontWeight:"bold",fontSize:"50px"},className:"text-gradient",children:"Goals App"}),Object(h.jsx)("section",{id:"goal-form",children:Object(h.jsx)(f,{onAddGoal:function(t){a((function(e){var n=Object(l.a)(e);return console.log(i,typeof i),n.unshift({text:t,id:"g".concat(++i)}),n}))}})}),Object(h.jsx)("section",{id:"goals",children:s})]})});i.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(m,{}))}],[[23,1,2]]]);
//# sourceMappingURL=main.37e1daf5.chunk.js.map