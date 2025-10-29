import "../../libs/shim/expect.js";
import "../../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "get Heartbeat 2",
  id: "e32f0236-8c63-4618-8b28-0e0da689ecea",
  method: "GET",
  address: "{{baseUrl}}/heartbeat",
  headers: {
    Accept: "*/*"
  },
  post(response) {
    // Validate status 2xx
    pm.test("[GET]::/heartbeat - Status code is 2xx", function() {
      pm.response.to.be.success;
    });

    // Validate if response header has matching content-type
    pm.test("[GET]::/heartbeat - Content-Type is */*", function() {
      pm.expect(pm.response.headers.get("Content-Type")).to.include("*/*");
    });
  }
});
