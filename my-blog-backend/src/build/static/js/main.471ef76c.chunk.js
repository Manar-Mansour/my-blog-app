(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);n(25);var a=n(0),o=n.n(a),r=n(16),i=n.n(r),s=(n(30),n(17)),l=n(18),c=n(22),u=n(19),m=n(23),h=n(7),p=n(1),d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Hello, welcome to my blog!"),o.a.createElement("p",null,"This blog will be dedicated to Node.js and React.js topics"))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About me"),o.a.createElement("p",null,"Welcome to my personal blog! My name is Manar Mansour. I am a Full-stack web developer with an M.Sc degree and more than 5 years of multidisciplinary experience. I developed and implemented novel algorithms and programs that were adopted by US companies in the silicon valley and a technology spin-off start-up in the AUC. I am the first author of 6 publications and I also hold a US patent. I have a passion for developing new technologies or solutions that enhance people's lives."),o.a.createElement("p",null,"In my free time, I love to read and write about philosophical and theological subjects, working out and visiting historical and natural places."))},v=function(e){var t=e.articles;return o.a.createElement(o.a.Fragment,null,t.map(function(e,t){return o.a.createElement(h.b,{className:"article-list-item",key:t,to:"/article/".concat(e.name)},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.content[0].substring(0,150),"..."))}))},g=[{name:"learn-node",title:"Overview of Node.js",content:["Node.js is an exciting new platform for developing web applications, application\n            servers, any sort of network server or client, and general-purpose programming. It is\n            designed for extreme scalability in networked applications through an ingenious\n            combination of server-side JavaScript, asynchronous I/O, and asynchronous\n            programming.","While only ten years old, Node.js has quickly grown in prominence and is now\n            playing a significant role. Companies, both large and small, are using it for large-scale\n            and small-scale projects. PayPal, for example, has converted many services from Java\n            to Node.js.","The Node.js architecture departs from a typical choice made by other application\n            platforms. Where threads are widely used to scale an application to fill the CPU,\n            Node.js eschews threads because of their inherent complexity. It's claimed that with\n            single-thread event-driven architectures, the memory footprint is low, throughput is\n            high, the latency profile under load is better, and the programming model is simpler.\n            The Node.js platform is in a phase of rapid growth, and many see it as a compelling\n            alternative to the traditional web application architectures using Java, PHP, Python,\n            or Ruby on Rails.","At its heart, it is a standalone JavaScript engine with extensions that is suitable for\n            general-purpose programming and that has a clear focus on application server\n            development. Even though we're comparing Node.js to application-server platforms,\n            it is not an application server. Instead, Node.js is a programming runtime akin to\n            Python, Go, or Java SE. While there are web application frameworks and application\n            servers written in Node.js, it is simply a system to execute JavaScript programs.","The key architectural choice is that Node.js is event-driven, rather than\n            multithreaded. The Node.js architecture rests on dispatching blocking operations to a\n            single-threaded event loop, with results arriving back to the caller as an event that\n            invokes an event handler function. In most cases, the event is converted into a\n            promise that is handled by an async function. Because Node.js is based on Chrome's\n            V8 JavaScript engine, the performance and feature improvements implemented in\n            Chrome quickly flow through to the Node.js platform.",'This article is from the book "Node.js web development" by David Herron']},{name:"node-capabilities",title:"The capabilities of Node.js",content:["Node.js is a platform for writing JavaScript applications outside web browsers. This is\n            not the JavaScript environment we are familiar with in web browsers! While Node.js\n            executes the same JavaScript language that we use in browsers, it doesn't have some\n            of the features associated with the browser. For example, there is no HTML DOM\n            built into Node.js.\n            Beyond its native ability to execute JavaScript, the built-in modules provide\n            capabilities like: command-line tools (in shell script style).. an interactive-terminal style of program\u2014that is, a read-eval-print loop\n            (REPL).. excellent process control functions to oversee child processes.. a buffer object to deal with binary data\n            .. TCP or UDP sockets with comprehensive, event-driven callbacks\n            .. DNS lookup .. An HTTP, HTTPS, and HTTP/2-client server layered on top of the TCP\n            library filesystem access ..built-in rudimentary unit testing support through assertions .. etc.\n            ","The network layer of Node.js is low level while being simple to use\u2014for example, the\n            HTTP modules allow you to write an HTTP server (or client) using a few lines of\n            code. This is powerful, but it puts you, the programmer, very close to the protocol\n            requests and makes you implement precisely those HTTP headers that you should\n            return in request responses.","Typical web-application developers don't need to work at a low level of the HTTP or\n            other protocols; instead, we tend to be more productive working with higher-level\n            interfaces\u2014for example, PHP coders assume that Apache/Nginx/and so on are\n            already there providing the HTTP, and that they don't have to implement the HTTP\n            server portion of the stack. By contrast, a Node.js programmer does implement an\n            HTTP server, to which their application code is attached.","To simplify the situation, the Node.js community has several web application\n            frameworks, such as Express, providing the higher-level interfaces required by\n            typical programmers. You can quickly configure an HTTP server with baked-in\n            capabilities, such as sessions, cookies, serving static files, and logging, letting\n            developers focus on their business logic. Other frameworks provide OAuth 2 support\n            or focus on REST APIs, and so on.\n            The community of folks using Node.js has built an amazing variety of things on this\n            foundation.",'This article is from the book "Node.js web development" by David Herron']},{name:"learn-react",title:"What makes React a good library?",content:["What makes a JavaScript library good? Is it the number of stars on\n            GitHub? The number of downloads on npm? Is the number of tweets\n            that ThoughtLeaders\u2122 write about it on a daily basis important? How\n            do we pick the best tool to use to build the best thing? How do we\n            know it\u2019s worth our time? How do we know it\u2019s good?","When React was first released, there was a lot of conversation around\n            whether it was good, and there were many skeptics. It was new, and the\n            new can often be upsetting.","To respond to these critiques, Pete Hunt from the React team wrote an\n            article called \u201cWhy React?\u201d that recommended that you \u201cgive it\n            [React] five minutes.\u201d He wanted to encourage people to work with\n            React first before thinking that the team\u2019s approach was too wild.","Yes, React is a small library that doesn\u2019t come with everything you\n            might need out of the box to build your application. Give it five\n            minutes.","Yes, in React, you write code that looks like HTML right in your\n            JavaScript code. And yes, those tags require preprocessing to run in a\n            browser. And you\u2019ll probably need a build tool like webpack for that.\n            Give it five minutes.","As React approaches a decade of use, a lot of teams decided that it\u2019s good because they gave it five minutes. We\u2019re talking Uber, Twitter,\n            Airbnb, and Twitter\u2014huge companies that tried React and realized that\n            it could help teams build better products faster. At the end of the day,\n            isn\u2019t that what we\u2019re all here for? Not for the tweets. Not for the stars.\n            Not for the downloads. We\u2019re here to build cool stuff with tools that\n            we like to use. We\u2019re here for the glory of shipping stuff that we\u2019re\n            proud to say we built. If you like doing those types of things, you\u2019ll\n            probably like working with React.",'This article is from the O\'Reilly book "Learning React" Alex Banks and Eve Porcello']},{name:"node-for-microservices",title:"Node.js for Microservice architecture",content:["A new sensation in software development is the idea of the microservice.\n            Microservices are focused on splitting a large web application into small, tightlyfocused\n            services that can be easily developed by small teams. While they aren't\n            exactly a new idea\u2014they're more of a reframing of old client\u2013server computing\n            models\u2014the microservice pattern fits well with agile project-management techniques,\n            and gives us a more granular application deployment.","Node.js is an excellent platform for implementing microservices. We'll get into this\n            later.",'This article is from the book "Node.js web development" by David Herron']}],b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Articles"),o.a.createElement(v,{articles:g}))},w=n(6),y=n.n(w),E=n(9),k=n(11),j=function(e){var t=e.comments;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Comments:"),t.map(function(e,t){return o.a.createElement("div",{className:"comment",key:t},o.a.createElement("h4",null,e.username),o.a.createElement("p",null,e.text))}))},T=function(e){var t=e.articleName,n=e.upvotes,a=e.setArticleInfo,r=function(){var e=Object(E.a)(y.a.mark(function e(){var n,o;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent,a(o);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{id:"upvotes-section"},o.a.createElement("button",{onClick:function(){return r()}},"Add Upvote"),o.a.createElement("p",null,"This post has been upvoted ",n," times"))},N=function(e){var t=e.articleName,n=e.setArticleInfo,r=Object(a.useState)(""),i=Object(k.a)(r,2),s=i[0],l=i[1],c=Object(a.useState)(""),u=Object(k.a)(c,2),m=u[0],h=u[1],p=function(){var e=Object(E.a)(y.a.mark(function e(){var a,o;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:s,text:m}),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:o=e.sent,n(o),l(""),h("");case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{id:"add-comment-form"},o.a.createElement("h3",null,"Add a Comment"),o.a.createElement("label",null,"Name:",o.a.createElement("input",{type:"text",value:s,onChange:function(e){return l(e.target.value)}})),o.a.createElement("label",null,"Comment:",o.a.createElement("textarea",{rows:"4",cols:"50",value:m,onChange:function(e){return h(e.target.value)}})),o.a.createElement("button",{onClick:function(){return p()}},"Add Comment"))},x=function(){return o.a.createElement("h1",null,"404: Page Not Found")},P=function(e){var t=e.match.params.name,n=g.find(function(e){return e.name===t}),r=Object(a.useState)({upvotes:0,comments:[]}),i=Object(k.a)(r,2),s=i[0],l=i[1];if(Object(a.useEffect)(function(){!function(){var e=Object(E.a)(y.a.mark(function e(){var n,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,l(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t]),!n)return o.a.createElement(x,null);var c=g.filter(function(e){return e.name!==t});return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,n.title),o.a.createElement(T,{articleName:t,upvotes:s.upvotes,setArticleInfo:l}),n.content.map(function(e,t){return o.a.createElement("p",{key:t},e)}),o.a.createElement(j,{comments:s.comments}),o.a.createElement(N,{articleName:t,setArticleInfo:l}),o.a.createElement("h3",null,"Other Articles:"),o.a.createElement(v,{articles:c}))},A=function(){return o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(h.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(h.b,{to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement(h.b,{to:"/articles-list"},"Articles"))))},H=(n(38),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(A,null),o.a.createElement("div",{id:"page-body"},o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/",component:d,exact:!0}),o.a.createElement(p.a,{path:"/about",component:f}),o.a.createElement(p.a,{path:"/articles-list",component:b}),o.a.createElement(p.a,{path:"/article/:name",component:P}),o.a.createElement(p.a,{component:x})))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.471ef76c.chunk.js.map