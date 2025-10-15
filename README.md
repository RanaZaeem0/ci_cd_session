# CI/CD Session - Basic Node.js Project

A simple Node.js application for learning CI/CD concepts.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies (if any)

```bash
npm install
```

### Running the Application

To start the application:

```bash
npm start
```

To run in development mode:

```bash
npm run dev
```

You can also pass a name as an argument:

```bash
node src/index.js YourName
```

### Features

- Simple console output
- Basic HTTP server on port 3000
- Greeting function with command-line argument support

### Project Structure

```
├── package.json          # Project configuration
├── README.md             # This file
└── src/
    └── index.js          # Main application file
```

### Testing

Currently, no tests are implemented. You can add tests using frameworks like Jest or Mocha.

```bash
npm test
```

## License

MIT
