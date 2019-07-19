const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../src/server");
chai.use(chaiHttp);

describe("tests work", () => {
    it("should receive message", async () => {
        const res = await chai.request(app).get("/")
        chai.expect(res.text).to.eq("see ya space cowboy")
    })
})
