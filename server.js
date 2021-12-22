const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/books") {
    if (req.method == "POST") {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        fs.writeFile("./data.json", JSON.stringify(data, null, 2), (err) => {
          if (err) log.error(err);
        });
      });
      req.on("end", () => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end("created");
      });
    }
  }
});

server.listen(2000, () => {
  console.log(2000);
});
