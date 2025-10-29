import "../libs/shim/expect.js";
import "../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "Delete data",
  id: "65586d7d-32e9-46f3-952b-e4b733e87f4a",
  method: "DELETE",
  address: "{{base_url}}/info?id=1",
  post(response) {
    pm.test("Successful DELETE request", function() {
      pm.expect(pm.response.code).to.be.oneOf([200, 202, 204]);
    });
  }
});
