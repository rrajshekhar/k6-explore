import "../libs/shim/expect.js";
import "../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "Update data",
  id: "f2f23831-032d-49a3-beaf-032f9be1f33d",
  method: "PUT",
  address: "{{base_url}}/info?id=1",
  data: '{\n\t"name": "Add your name in the body"\n}',
  post(response) {
    pm.test("Successful PUT request", function() {
      pm.expect(pm.response.code).to.be.oneOf([200, 201, 204]);
    });
  }
});
