// Basic Node.js application
console.log("Hello, World!");
console.log("Welcome to your basic Node.js project!");

// Simple function example
function greet(name) {
  return `Hello, ${name}! Welcome to the CI/CD session.`;
}

// Example usage
const userName = process.argv[2] || "Developer";
console.log(greet(userName));

// Simple HTTP server example (optional)
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from your Node.js app!\n");
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}

module.exports = { greet };
