import "../../libs/shim/expect.js";
import "../../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "get Heartbeat 1",
  id: "8b5bee37-1edc-4e05-92b4-504e63cc99df",
  method: "HEAD",
  address: "{{baseUrl}}/heartbeat/",
  headers: {
    Accept: "*/*"
  },
  post(response) {
    // Validate status 2xx
    pm.test("[HEAD]::/heartbeat/ - Status code is 2xx", function() {
      pm.response.to.be.success;
    });

    // Validate if response header has matching content-type
    pm.test("[HEAD]::/heartbeat/ - Content-Type is */*", function() {
      pm.expect(pm.response.headers.get("Content-Type")).to.include("*/*");
    });
  }
});
