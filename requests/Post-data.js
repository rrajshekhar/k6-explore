import "../libs/shim/expect.js";
import "../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "Post data",
  id: "e0041368-c804-481d-a479-49ff65b3cc55",
  method: "POST",
  address: "{{base_url}}/info",
  data: '{\n\t"name": "Add your name in the body"\n}',
  post(response) {
    pm.test("Successful POST request", function() {
      pm.expect(pm.response.code).to.be.oneOf([200, 201]);
    });
  }
});
