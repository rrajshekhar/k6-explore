import "../../libs/shim/expect.js";
import "../../libs/shim/jsonSchema.js";
import "../../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "Actuator root web endpoint",
  id: "5aaf0e53-2654-4315-89fa-eea837b76de1",
  method: "GET",
  address: "{{baseUrl}}/actuator",
  headers: {
    Accept: "application/vnd.spring-boot.actuator.v3+json"
  },
  post(response) {
    // Validate status 2xx
    pm.test("[GET]::/actuator - Status code is 2xx", function() {
      pm.response.to.be.success;
    });

    // Validate if response header has matching content-type
    pm.test(
      "[GET]::/actuator - Content-Type is application/vnd.spring-boot.actuator.v3+json",
      function() {
        pm.expect(pm.response.headers.get("Content-Type")).to.include(
          "application/vnd.spring-boot.actuator.v3+json"
        );
      }
    );

    // Validate if response has JSON Body
    pm.test("[GET]::/actuator - Response has JSON Body", function() {
      pm.response.to.have.jsonBody();
    });

    // Response Validation
    const schema = {
      type: "object",
      additionalProperties: {
        type: "object",
        additionalProperties: {
          type: "object",
          properties: {
            href: { type: "string" },
            templated: { type: "boolean" }
          }
        }
      }
    };

    // Validate if response matches JSON schema
    pm.test("[GET]::/actuator - Schema is valid", function() {
      pm.response.to.have.jsonSchema(schema, {
        unknownFormats: ["int32", "int64", "float", "double"]
      });
    });
  }
});
