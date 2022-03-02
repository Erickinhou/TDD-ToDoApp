const request = require("supertest");
const app = require("./app");
describe("Todos", () => {
  it("GET /todos --> array todos", () => {});
  it("GET /todos/:id --> specific todo by ID", () => {});
  it("GET /todos/:id --> 404 if not found", () => {});
  it("POST /todos --> created todo", () => {});
  it("POST /todos --> validates the request body", () => {});
});
