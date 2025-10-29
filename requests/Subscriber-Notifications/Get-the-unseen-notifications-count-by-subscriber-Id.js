import "../../libs/shim/expect.js";
import "../../libs/shim/jsonSchema.js";
import "../../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "Get the unseen notifications count by subscriber Id",
  id: "1b9f9294-ae3b-4d2c-b201-a60476d4ebe5",
  method: "GET",
  address:
    "{{baseUrl}}/notifications/subscriber/voluptate tempor proident/stats",
  headers: {
    Accept: "application/json"
  },
  post(response) {
    // Validate status 2xx
    pm.test(
      "[GET]::/notifications/subscriber/:subscriberId/stats - Status code is 2xx",
      function() {
        pm.response.to.be.success;
      }
    );

    // Validate if response header has matching content-type
    pm.test(
      "[GET]::/notifications/subscriber/:subscriberId/stats - Content-Type is application/json",
      function() {
        pm.expect(pm.response.headers.get("Content-Type")).to.include(
          "application/json"
        );
      }
    );

    // Validate if response has JSON Body
    pm.test(
      "[GET]::/notifications/subscriber/:subscriberId/stats - Response has JSON Body",
      function() {
        pm.response.to.have.jsonBody();
      }
    );

    // Response Validation
    const schema = {
      type: "object",
      description: "Response body for unseen notification count",
      properties: { unSeenCount: { type: "integer", format: "int32" } }
    };

    // Validate if response matches JSON schema
    pm.test(
      "[GET]::/notifications/subscriber/:subscriberId/stats - Schema is valid",
      function() {
        pm.response.to.have.jsonSchema(schema, {
          unknownFormats: ["int32", "int64", "float", "double"]
        });
      }
    );
  }
});
