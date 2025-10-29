import "../../libs/shim/expect.js";
import "../../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "get Heartbeat 3",
  id: "f8adc50f-d2e6-4b4d-9be6-c0cf7a7f1a67",
  method: "HEAD",
  address: "{{baseUrl}}/heartbeat",
  headers: {
    Accept: "*/*"
  },
  post(response) {
    // Validate status 2xx
    pm.test("[HEAD]::/heartbeat - Status code is 2xx", function() {
      pm.response.to.be.success;
    });

    // Validate if response header has matching content-type
    pm.test("[HEAD]::/heartbeat - Content-Type is */*", function() {
      pm.expect(pm.response.headers.get("Content-Type")).to.include("*/*");
    });
  }
});
