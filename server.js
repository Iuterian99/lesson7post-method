// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url == "/end") {
//     if (req.method == "GET") {
//       res.writeHead(200, { "Content-Type": "application/json;" });
//       res.end("Jsonda yozildi!");
//     } else if (req.method == "POST") {
//       req.on("data", (chunk) => {
//         console.log(JSON.parse(chunk));
//       });
//       req.on("end", () => {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end("Post metodidan keldi");
//       });
//     }
//   }
// });

// server.listen(2000, () => {
//   console.log("2000");
// });

const fs = require("fs");

// ------------- fs.rename() --------------------------------------------

// fs.rename("first.js", "second.js", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(ok);
//   }
// });

// ------------------ fs.readFile() --------------------------------------

fs.readFile("./second.js", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
