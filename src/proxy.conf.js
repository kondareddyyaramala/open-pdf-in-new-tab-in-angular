
const { IncomingMessage } = require("http");

const PROXY_CONFIG = {
    "/api": {
        "/customer": {
            "target": "http://localhost:4200",
            "secure": false,
            "logLevel": "debug",
            "pathRewrite": {
                "^/customer": "../assets/customer.pdf"
            }
        }

    }
}

module.exports = PROXY_CONFIG;