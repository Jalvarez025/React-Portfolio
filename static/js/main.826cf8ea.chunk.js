(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){var n={"./doctor.jpg":14,"./fit.jpg":15,"./movie.jpg":16,"./note-taker.jpg":17,"./pho.jpg":18};function r(e){var t=i(e);return c(t)}function i(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=13},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/doctor.0ab25005.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/fit.bcd4b869.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/movie.f3e336d3.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/note-taker.3ed3f10d.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/pho.0dc033fb.jpg"},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(6),a=c.n(i),s=(c(11),c(2)),o=c.p+"static/media/Bluebonnet-Banner.db51ee8b.jpg",l=c(0);var j=function(e){return Object(l.jsxs)("header",{className:"flex-row space-between px-1",children:[Object(l.jsx)("h1",{children:"Jesse Alvarez"}),Object(l.jsx)("img",{src:o,alt:"wooden background"}),e.children]})};function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var m=function(e){var t=e.pages,c=void 0===t?[]:t,r=e.setCurrentPage,i=e.currentPage;return Object(n.useEffect)((function(){document.title=u(i.name)}),[i]),Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"flex-row",children:c.map((function(e){return Object(l.jsx)("li",{className:"mx-5 ".concat(i.name===e.name&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return r(e)},children:u(e.name)})},e.name)}))})})},h=function(e){return Object(l.jsx)("div",{children:e.children})};var b=function(){return Object(l.jsx)("section",{className:"my-5",children:Object(l.jsxs)("div",{className:"my-2",children:[Object(l.jsx)("div",{className:"profile-img my-5",children:Object(l.jsx)("i",{className:"fas fa-user-circle",style:{fontSize:"96px"}})}),Object(l.jsx)("p",{children:"I am a recent graduate from the University of Houston in 2021 from the college of technology. I have a bachelors of science in computer engineering technology where I spent a lot of time learning about devices and working in group projects. I recently compeleted a Coding Bootcamp through the University of Texas in fullstack web development. Today I begin my career with a specialty in the development of technology and programming."})]})})};var p=function(e){var t=e.project,n=t.name,r=t.img,i=t.repo,a=t.link,s=t.description;return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("img",{src:c(13)("./".concat(n,".jpg")),alt:d(n),className:"project-bg"}),r,Object(l.jsxs)("div",{className:"project-text",children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("a",{href:a,children:d(n)})," ",Object(l.jsx)("a",{href:i,children:"Repo"})]}),Object(l.jsx)("p",{children:s})]})]},n)};var f=function(){var e=Object(n.useState)([{name:"movie",description:"Movie Review API",link:"https://wtriii.github.io/Project-1-Movie-Comparison-Site/",repo:"https://github.com/WTRIII/Project-1-Movie-Comparison-Site"},{name:"doctor",description:"Fullstack",link:"https://project2-group8.herokuapp.com/login",repo:"https://github.com/samkilpatrick903/Full-Stack-Appointment-App"},{name:"pho",description:"MERN",link:"https://possystem-wee.herokuapp.com/",repo:"https://github.com/KalvinN361/POS-SYSTEM_ATTEMPT"},{name:"fit",description:"Routes",link:"https://jalvarez-fitness-tracker.herokuapp.com/",repo:"https://github.com/Jalvarez025/Homework-18-Fitness-Tracker"},{name:"note-taker",description:"Routes",link:"https://note-taker-jesse.herokuapp.com/",repo:"https://github.com/Jalvarez025/Homework-11"}]),t=Object(s.a)(e,1)[0];return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"flex-row",children:t.map((function(e,t){return Object(l.jsx)(p,{project:e},"project"+t)}))})})},O=c(3),x=c(5);var g=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),a=Object(s.a)(i,2),o=a[0],j=a[1],u=c.name,d=c.email,m=c.message,h=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o||(r(Object(x.a)(Object(x.a)({},c),{},Object(O.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(l.jsx)("section",{children:Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",c)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:u,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:m,onBlur:h})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})})};var v=function(){return Object(l.jsx)("section",{className:"my-5",children:Object(l.jsxs)("div",{className:"my-2",children:[Object(l.jsxs)("p",{children:["Download my ",Object(l.jsx)("a",{href:"https://drive.google.com/file/d/1ovtVrrKMSnS9oXQgN5K53MkPrBcgg-C1/view?usp=sharing",children:"resume"})]}),Object(l.jsx)("h3",{children:"Front-end Proficiencies"}),Object(l.jsxs)("ul",{className:"skills",children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"responsive design"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"})]}),Object(l.jsx)("h3",{children:"Back-end Proficiencies"}),Object(l.jsxs)("ul",{className:"skills",children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL, Sequelize"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"REST"}),Object(l.jsx)("li",{children:"GraphQL"})]})]})})};var k=function(e){var t=e.currentPage;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:u(t.name)}),Object(l.jsx)(h,{children:function(){switch(t.name){case"about me":default:return Object(l.jsx)(b,{});case"portfolio":return Object(l.jsx)(f,{});case"contact":return Object(l.jsx)(g,{});case"resume":return Object(l.jsx)(v,{})}}()})]})};var w=function(){return Object(l.jsx)("footer",{className:"flex-row px-1",children:[{name:"fab fa-github",link:"https://github.com/"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/"},{name:"fab fa-stack-overflow",link:"https://stackoverflow.com/"}].map((function(e){return Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:e.name})},e.name)}))})};var y=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(s.a)(e,1)[0],c=Object(n.useState)(t[0]),r=Object(s.a)(c,2),i=r[0],a=r[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{children:Object(l.jsx)(m,{pages:t,setCurrentPage:a,currentPage:i})}),Object(l.jsx)("main",{children:Object(l.jsx)(k,{currentPage:i})}),Object(l.jsx)(w,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.826cf8ea.chunk.js.map