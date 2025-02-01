# Missing Content-Type Header in Node.js HTTP Response

This repository demonstrates a common but easily overlooked error in Node.js HTTP servers: omitting the `Content-Type` header in the response.  This can result in unexpected behavior or errors on the client-side.

## Bug

The `bug.js` file shows an HTTP server that sends a response without specifying the `Content-Type` header.  This can lead to inconsistencies in how the response is handled by different clients.

## Solution

The `bugSolution.js` file corrects the issue by adding the `Content-Type` header to the response.  This ensures that the client correctly interprets the response as plain text.