const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from DevOps Project");
  res.end();
}).listen(3000);

console.log("Server running on port 3000");
STEP 8 — Create package.json
{
  "name": "devops-demo",
  "version": "1.0.0",
  "main": "app.js"
}
