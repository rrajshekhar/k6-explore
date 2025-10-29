import "../../libs/shim/expect.js";
import "../../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "get Heartbeat",
  id: "1d3321db-6d91-4c24-af7b-022c7b058b61",
  method: "GET",
  address: "{{baseUrl}}/heartbeat/",
  headers: {
    Accept: "*/*"
  },
  post(response) {
    // Validate status 2xx
    pm.test("[GET]::/heartbeat/ - Status code is 2xx", function() {
      pm.response.to.be.success;
    });

    // Validate if response header has matching content-type
    pm.test("[GET]::/heartbeat/ - Content-Type is */*", function() {
      pm.expect(pm.response.headers.get("Content-Type")).to.include("*/*");
    });
  }
});
