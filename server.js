const http = require("node:http");
http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  response.end("NAS-161 AC15 fixed fixture\n");
}).listen(Number(process.env.PORT || 3000), "0.0.0.0");
