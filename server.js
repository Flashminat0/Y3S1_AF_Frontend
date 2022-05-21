const express = require("express");
const next = require("next");
const {createProxyMiddleware} = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        const serverUrl =  process.env.LOCAL_SERVER_URL || "https://research-sliit-system.herokuapp.com/api/";


        server.use(
            "/api",
            createProxyMiddleware({
                target: serverUrl,
                changeOrigin: true,
            }),
        );

        // apply proxy in dev mode
        server.all("*", (req, res) => {
            return handle(req, res);
        });


        server.listen(3000, (err) => {
            if (err) throw err;
            console.log("> Ready on http://localhost:3000");
        });
    })
    .catch((err) => {
        console.log("Error", err);
    });
