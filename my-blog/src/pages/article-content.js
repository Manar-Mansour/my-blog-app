const articles = [
    {
        name: 'learn-node',
        title: 'Overview of Node.js',
        content: [
            `Node.js is an exciting new platform for developing 
            web applications, application servers, any sort of 
            network server or client, and general-purpose programming. It is designed for extreme
             scalability in networked applications through an ingenious combination of server-side 
             JavaScript, asynchronous I/O, and asynchronous
            programming.`,`While only ten years old, Node.js has quickly grown in prominence and is now
            playing a significant role. Companies, both large and small, are using it for large-scale
            and small-scale projects. PayPal, for example, has converted many services from Java
            to Node.js.`,
            `The Node.js architecture departs from a typical choice made by other application
            platforms. Where threads are widely used to scale an application to fill the CPU,
            Node.js eschews threads because of their inherent complexity. It's claimed that with
            single-thread event-driven architectures, the memory footprint is low, throughput is
            high, the latency profile under load is better, and the programming model is simpler.
            The Node.js platform is in a phase of rapid growth, and many see it as a compelling
            alternative to the traditional web application architectures using Java, PHP, Python,
            or Ruby on Rails.`,
            `At its heart, it is a standalone JavaScript engine with extensions that is suitable for
            general-purpose programming and that has a clear focus on application server
            development. Even though we're comparing Node.js to application-server platforms,
            it is not an application server. Instead, Node.js is a programming runtime akin to
            Python, Go, or Java SE. While there are web application frameworks and application
            servers written in Node.js, it is simply a system to execute JavaScript programs.`,
            `The key architectural choice is that Node.js is event-driven, rather than
            multithreaded. The Node.js architecture rests on dispatching blocking operations to a
            single-threaded event loop, with results arriving back to the caller as an event that
            invokes an event handler function. In most cases, the event is converted into a
            promise that is handled by an async function. Because Node.js is based on Chrome's
            V8 JavaScript engine, the performance and feature improvements implemented in
            Chrome quickly flow through to the Node.js platform.`,
            `This article is from the book "Node.js web development" by David Herron`
            
        ]
    },    {
        name: 'node-capabilities',
        title: 'The capabilities of Node.js',
        content: [
            `Node.js is a platform for writing JavaScript applications outside web browsers. This is
            not the JavaScript environment we are familiar with in web browsers! While Node.js
            executes the same JavaScript language that we use in browsers, it doesn't have some
            of the features associated with the browser. For example, there is no HTML DOM
            built into Node.js.
            Beyond its native ability to execute JavaScript, the built-in modules provide
            capabilities like: command-line tools (in shell script style).. an interactive-terminal style of program—that is, a read-eval-print loop
            (REPL).. excellent process control functions to oversee child processes.. a buffer object to deal with binary data
            .. TCP or UDP sockets with comprehensive, event-driven callbacks
            .. DNS lookup .. An HTTP, HTTPS, and HTTP/2-client server layered on top of the TCP
            library filesystem access ..built-in rudimentary unit testing support through assertions .. etc.
            `,
            `The network layer of Node.js is low level while being simple to use—for example, the
            HTTP modules allow you to write an HTTP server (or client) using a few lines of
            code. This is powerful, but it puts you, the programmer, very close to the protocol
            requests and makes you implement precisely those HTTP headers that you should
            return in request responses.`,
            `Typical web-application developers don't need to work at a low level of the HTTP or
            other protocols; instead, we tend to be more productive working with higher-level
            interfaces—for example, PHP coders assume that Apache/Nginx/and so on are
            already there providing the HTTP, and that they don't have to implement the HTTP
            server portion of the stack. By contrast, a Node.js programmer does implement an
            HTTP server, to which their application code is attached.`,
            `To simplify the situation, the Node.js community has several web application
            frameworks, such as Express, providing the higher-level interfaces required by
            typical programmers. You can quickly configure an HTTP server with baked-in
            capabilities, such as sessions, cookies, serving static files, and logging, letting
            developers focus on their business logic. Other frameworks provide OAuth 2 support
            or focus on REST APIs, and so on.
            The community of folks using Node.js has built an amazing variety of things on this
            foundation.`,
            `This article is from the book "Node.js web development" by David Herron`
            
        ]
    },     {
        name: 'learn-react',
        title: 'What makes React a good library?',
        content: [
            `What makes a JavaScript library good? Is it the number of stars on
            GitHub? The number of downloads on npm? Is the number of tweets
            that ThoughtLeaders™ write about it on a daily basis important? How
            do we pick the best tool to use to build the best thing? How do we
            know it’s worth our time? How do we know it’s good?`,
            `When React was first released, there was a lot of conversation around
            whether it was good, and there were many skeptics. It was new, and the
            new can often be upsetting.`,
            `To respond to these critiques, Pete Hunt from the React team wrote an
            article called “Why React?” that recommended that you “give it
            [React] five minutes.” He wanted to encourage people to work with
            React first before thinking that the team’s approach was too wild.`,
            `Yes, React is a small library that doesn’t come with everything you
            might need out of the box to build your application. Give it five
            minutes.`,
            `Yes, in React, you write code that looks like HTML right in your
            JavaScript code. And yes, those tags require preprocessing to run in a
            browser. And you’ll probably need a build tool like webpack for that.
            Give it five minutes.`,
            `As React approaches a decade of use, a lot of teams decided that it’s good because they gave it five minutes. We’re talking Uber, Twitter,
            Airbnb, and Twitter—huge companies that tried React and realized that
            it could help teams build better products faster. At the end of the day,
            isn’t that what we’re all here for? Not for the tweets. Not for the stars.
            Not for the downloads. We’re here to build cool stuff with tools that
            we like to use. We’re here for the glory of shipping stuff that we’re
            proud to say we built. If you like doing those types of things, you’ll
            probably like working with React.`,
            `This article is from the O'Reilly book "Learning React" Alex Banks and Eve Porcello`
        ]
    },     {
        name: 'node-for-microservices',
        title: 'Node.js for Microservice architecture',
        content: [
            `A new sensation in software development is the idea of the microservice.
            Microservices are focused on splitting a large web application into small, tightlyfocused
            services that can be easily developed by small teams. While they aren't
            exactly a new idea—they're more of a reframing of old client–server computing
            models—the microservice pattern fits well with agile project-management techniques,
            and gives us a more granular application deployment.`,
            `Node.js is an excellent platform for implementing microservices. We'll get into this
            later.`,
            `This article is from the book "Node.js web development" by David Herron`
        ]
    }
];

export default articles;