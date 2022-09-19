/* pure node server that doesn't handle dynamic routes */
// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')
//
// const dev = process.env.NODE_ENV !== 'production'
// const hostname = 'localhost'
// const port = 3000
// // when using middleware `hostname` and `port` must be provided below
// const app = next({ dev, hostname, port })
// const handle = app.getRequestHandler()
//
// app.prepare().then(() => {
//     createServer(async (req, res) => {
//         try {
//             // Be sure to pass `true` as the second argument to `url.parse`.
//             // This tells it to parse the query portion of the URL.
//             const parsedUrl = parse(req.url, true)
//             const { pathname, query } = parsedUrl
//
//             if (pathname === '/message') {
//               app.render(req, res, '/contact', query);
//             } else {
//                 await handle(req, res, parsedUrl)
//             }
//         } catch (err) {
//             console.error('Error occurred handling', req.url, err)
//             res.statusCode = 500
//             res.end('internal server error')
//         }
//     }).listen(port, (err) => {
//         if (err) throw err
//         console.log(`> Ready on http://${hostname}:${port}`)
//     })
// })

/* custom express server that can handle dynamic routes - but deprecated */
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // handle custom route with params
    server.get("/s/:id", (req, res) => {
        // render the 'ship' page and pass it the id from the request
        void app.render(req, res, "/ship", { id: req.params.id });
    });

    // pass all other requests into next's built-in handler
    server.get("*", (req, res) => {
        return handle(req, res);
    })

    server.listen(3001, err => {
        if (err) throw err;

        console.log("bruh i'm listnin on 3001 ok");
    });
});