import "../libs/shim/urijs.js";

postman[Symbol.for("define")]({
  name: "Get data",
  id: "fde12de8-540e-4d4d-88f5-a7da816d0e8e",
  method: "GET",
  address: "{{base_url}}/info?id=1",
  post(response) {
    pm.test("Status code is 200", function() {
      pm.response.to.have.status(200);
    });
  }
});
