import { createProxyMiddleware } from "http-proxy-middleware";

const proxy = createProxyMiddleware({
    target: "https://research-sliit-system.herokuapp.com/api/",
    secure: false,
    pathRewrite: { "^/api/": "" }, // remove `/api/` prefix
});

export default function handler(req, res) {
    proxy(req, res, (err) => {
        if (err) {
            throw err;
        }

        throw new Error(
            `Request '${req.url}' is not proxied! We should never reach here!`
        );
    });
}
