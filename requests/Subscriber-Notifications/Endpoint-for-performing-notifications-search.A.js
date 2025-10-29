import "../../libs/shim/expect.js";
import "../../libs/shim/jsonSchema.js";
import "../../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "Endpoint for performing notifications search",
  id: "eedaad0e-b0e2-46be-896e-91361f376de8",
  method: "GET",
  address: "{{baseUrl}}/messages/subscriber/voluptate tempor proident",
  headers: {
    Brand: "voluptate tempor proident",
    Accept: "application/json"
  },
  post(response) {
    // Validate status 2xx
    pm.test(
      "[GET]::/messages/subscriber/:subscriberId - Status code is 2xx",
      function() {
        pm.response.to.be.success;
      }
    );

    // Validate if response header has matching content-type
    pm.test(
      "[GET]::/messages/subscriber/:subscriberId - Content-Type is application/json",
      function() {
        pm.expect(pm.response.headers.get("Content-Type")).to.include(
          "application/json"
        );
      }
    );

    // Validate if response has JSON Body
    pm.test(
      "[GET]::/messages/subscriber/:subscriberId - Response has JSON Body",
      function() {
        pm.response.to.have.jsonBody();
      }
    );

    // Response Validation
    const schema = {
      type: "object",
      description: "Response body for Search notification endpoints",
      properties: {
        notifications: {
          type: "array",
          items: {
            type: "object",
            description: "Messaging Center notification response",
            properties: {
              id: { type: "string" },
              isViewed: { type: "boolean" },
              isSeen: { type: "boolean" },
              isRead: { type: "boolean" },
              createdAt: { type: "string", format: "date-time" },
              delivery: {
                type: "object",
                properties: {
                  action: {
                    type: "object",
                    properties: {
                      actionId: { type: "string" },
                      route: { type: "string" },
                      data: {
                        type: "object",
                        additionalProperties: { type: "string" }
                      }
                    }
                  },
                  message: {
                    type: "object",
                    properties: {
                      heading: { type: "string" },
                      subtitle: { type: "string" },
                      content: { type: "string" }
                    }
                  }
                }
              },
              messageCenter: {
                type: "object",
                properties: {
                  expirationInDate: { type: "string" },
                  tag: { type: "string" },
                  priority: { type: "string" },
                  imageUrl: { type: "string" },
                  messageType: { type: "string" },
                  primaryCallToAction: { type: "string" },
                  secondaryCallToAction: { type: "string" },
                  startDate: { type: "string" }
                }
              }
            }
          }
        },
        totalCount: { type: "integer", format: "int64" },
        totalUnseen: { type: "integer", format: "int64" }
      }
    };

    // Validate if response matches JSON schema
    pm.test(
      "[GET]::/messages/subscriber/:subscriberId - Schema is valid",
      function() {
        pm.response.to.have.jsonSchema(schema, {
          unknownFormats: ["int32", "int64", "float", "double"]
        });
      }
    );
  }
});
