module.exports = {
  type: "object",
  required: ["email"],
  properties: {
    email: {
      type: "string",
      minLength: 3,
      // pattern: "^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$"
      pattern: "\\S+@\\S+"
    }
  }
};
