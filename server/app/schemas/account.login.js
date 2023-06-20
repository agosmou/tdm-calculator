module.exports = {
  type: "object",
  required: ["email", "password"],
  properties: {
    email: {
      type: "string",
      minLength: 3,
      // pattern: "^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$"
      pattern: "\\S+@\\S+"
    },
    password: {
      type: "string",
      minLength: 12,
      pattern:
        "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*?])[A-Za-z0-9@$!%*#?&]{12,}$"
    }
  }
};
