import "../../libs/shim/expect.js";
import "../../libs/shim/jsonSchema.js";
import "../../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "Endpoint to update notification read status",
  id: "d41a351a-4ce8-4013-bd1c-dadc249d7426",
  method: "PUT",
  address: "{{baseUrl}}/messages/action",
  data:
    '{\n  "messageActionList": [\n    {\n      "action": "unread",\n      "subscriber": "exercitation et veniam anim",\n      "messageId": "in incididunt et nulla",\n      "subscriberIdRef": "id do dolor magna Excepteur"\n    }\n  ]\n}',
  headers: {
    Brand: "voluptate tempor proident",
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  post(response) {
    // Validate status 2xx
    pm.test("[PUT]::/messages/action - Status code is 2xx", function() {
      pm.response.to.be.success;
    });

    // Validate if response header has matching content-type
    pm.test(
      "[PUT]::/messages/action - Content-Type is application/json",
      function() {
        pm.expect(pm.response.headers.get("Content-Type")).to.include(
          "application/json"
        );
      }
    );

    // Validate if response has JSON Body
    pm.test("[PUT]::/messages/action - Response has JSON Body", function() {
      pm.response.to.have.jsonBody();
    });

    // Response Validation
    const schema = {
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
    };

    // Validate if response matches JSON schema
    pm.test("[PUT]::/messages/action - Schema is valid", function() {
      pm.response.to.have.jsonSchema(schema, {
        unknownFormats: ["int32", "int64", "float", "double"]
      });
    });
  }
});
