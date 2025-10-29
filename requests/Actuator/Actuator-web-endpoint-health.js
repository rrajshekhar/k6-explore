import "../../libs/shim/expect.js";
import "../../libs/shim/jsonSchema.js";
import "../../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "Actuator web endpoint 'health'",
  id: "8161bd55-f7c4-4ddc-8cbf-19e1eead3c2f",
  method: "GET",
  address: "{{baseUrl}}/actuator/health",
  headers: {
    Accept: "application/vnd.spring-boot.actuator.v3+json"
  },
  post(response) {
    // Validate status 2xx
    pm.test("[GET]::/actuator/health - Status code is 2xx", function() {
      pm.response.to.be.success;
    });

    // Validate if response header has matching content-type
    pm.test(
      "[GET]::/actuator/health - Content-Type is application/vnd.spring-boot.actuator.v3+json",
      function() {
        pm.expect(pm.response.headers.get("Content-Type")).to.include(
          "application/vnd.spring-boot.actuator.v3+json"
        );
      }
    );

    // Validate if response has JSON Body
    pm.test("[GET]::/actuator/health - Response has JSON Body", function() {
      pm.response.to.have.jsonBody();
    });

    // Response Validation
    const schema = { type: "object" };

    // Validate if response matches JSON schema
    pm.test("[GET]::/actuator/health - Schema is valid", function() {
      pm.response.to.have.jsonSchema(schema, {
        unknownFormats: ["int32", "int64", "float", "double"]
      });
    });
  }
});
